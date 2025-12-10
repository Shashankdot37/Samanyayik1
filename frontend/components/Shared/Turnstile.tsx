import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    turnstile: {
      render: (element: HTMLElement, options: {
        sitekey: string;
        callback?: (token: string) => void;
        'error-callback'?: () => void;
        'expired-callback'?: () => void;
        theme?: 'light' | 'dark' | 'auto';
      }) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

interface TurnstileProps {
  siteKey: string;
  onSuccess: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  theme?: 'light' | 'dark' | 'auto';
}

export const Turnstile: React.FC<TurnstileProps> = ({
  siteKey,
  onSuccess,
  onError,
  onExpire,
  theme = 'auto'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!siteKey) {
      setError('Turnstile site key is not configured');
      return;
    }

    // Check if script is already loaded
    if (window.turnstile && typeof window.turnstile.render === 'function') {
      setIsScriptLoaded(true);
      return;
    }

    // Check if script is already in the DOM
    const existingScript = document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]');
    if (existingScript) {
      // Poll for turnstile to be available
      const checkInterval = setInterval(() => {
        if (window.turnstile && typeof window.turnstile.render === 'function') {
          setIsScriptLoaded(true);
          clearInterval(checkInterval);
        }
      }, 100);

      // Also listen for load event
      existingScript.addEventListener('load', () => {
        setTimeout(() => {
          if (window.turnstile && typeof window.turnstile.render === 'function') {
            setIsScriptLoaded(true);
          }
        }, 100);
      });

      return () => clearInterval(checkInterval);
    }

    // Load Turnstile script
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // Wait a bit for turnstile to be available
      setTimeout(() => {
        if (window.turnstile && typeof window.turnstile.render === 'function') {
          setIsScriptLoaded(true);
        } else {
          // Poll for it
          const checkInterval = setInterval(() => {
            if (window.turnstile && typeof window.turnstile.render === 'function') {
              setIsScriptLoaded(true);
              clearInterval(checkInterval);
            }
          }, 100);
          // Stop polling after 5 seconds
          setTimeout(() => clearInterval(checkInterval), 5000);
        }
      }, 100);
    };
    script.onerror = () => {
      setError('Failed to load Cloudflare Turnstile script');
    };
    document.head.appendChild(script);

    return () => {
      // Don't remove script on cleanup - keep it for other instances
    };
  }, [siteKey]);

  useEffect(() => {
    if (!isScriptLoaded || !siteKey || !containerRef.current || widgetIdRef.current) {
      return;
    }

    // Wait a bit to ensure the container is fully rendered
    const timer = setTimeout(() => {
      if (containerRef.current && window.turnstile && !widgetIdRef.current) {
        try {
          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              onSuccess(token);
            },
            'error-callback': () => {
              setError('CAPTCHA verification failed');
              if (onError) onError();
            },
            'expired-callback': () => {
              setError('CAPTCHA expired');
              if (onExpire) onExpire();
            },
            theme: theme
          });
        } catch (err) {
          console.error('Error rendering Turnstile widget:', err);
          setError('Failed to render CAPTCHA widget');
        }
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (err) {
          console.error('Error removing Turnstile widget:', err);
        }
        widgetIdRef.current = null;
      }
    };
  }, [isScriptLoaded, siteKey, onSuccess, onError, onExpire, theme]);

  if (!siteKey) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded text-yellow-800 text-sm">
        Turnstile site key is not configured. Please set VITE_TURNSTILE_SITE_KEY in your environment variables.
      </div>
    );
  }

  if (error && !widgetIdRef.current) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded text-red-800 text-sm">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {!isScriptLoaded && (
        <div className="p-4 text-gray-600 text-sm mb-2">
          Loading verification...
        </div>
      )}
      <div 
        ref={containerRef} 
        className="turnstile-widget"
        style={{ 
          minHeight: '65px',
          minWidth: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      />
    </div>
  );
};

