import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccessibility } from '../../contexts/AccessibilityContext';

const KeyboardShortcuts: React.FC = () => {
  const navigate = useNavigate();
  const {
    language,
    setLanguage,
    fontSize,
    setFontSize,
    setHighContrast,
    highContrast
  } = useAccessibility();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Handle both Alt + Key (Windows/Linux) and Ctrl + Opt + Key (Mac)
      // On Mac: Ctrl + Opt triggers both ctrlKey and altKey
      // On Windows/Linux: Alt triggers altKey
      const isMacShortcut = event.ctrlKey && event.altKey;
      const isWindowsShortcut = event.altKey && !event.ctrlKey;
      
      if (isMacShortcut || isWindowsShortcut) {
        switch (event.code) {
          // Navigation Shortcuts
          case 'KeyA': // Skip to Content - Alt + A or Ctrl + Opt + A
            event.preventDefault();
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
              mainContent.focus();
              mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
              // Make it focusable if not already
              if (!mainContent.hasAttribute('tabindex')) {
                mainContent.setAttribute('tabindex', '-1');
              }
            }
            break;
          case 'KeyH': // Home - Alt + H or Ctrl + Opt + H
            event.preventDefault();
            navigate('/');
            break;
          case 'KeyM': // More About Us - Alt + M or Ctrl + Opt + M
            event.preventDefault();
            navigate('/about');
            break;
          case 'KeyS': // Our Services - Alt + S or Ctrl + Opt + S
            event.preventDefault();
            navigate('/practice-areas');
            break;
          case 'KeyU': // Contact Us - Alt + U or Ctrl + Opt + U
            event.preventDefault();
            navigate('/contact');
            break;
          case 'Digit6': // Help / FAQ - Alt + 6 or Ctrl + Opt + 6
            event.preventDefault();
            navigate('/faq');
            break;
            
          // Feature Shortcuts
          case 'KeyI': // Switch Language (EN/NP) - Alt + I or Ctrl + Opt + I
            event.preventDefault();
            setLanguage(language === 'en' ? 'np' : 'en');
            break;
          case 'KeyL': // Profile / Book Appointment - Alt + L or Ctrl + Opt + L
            event.preventDefault();
            navigate('/booking');
            break;
          case 'Equal': // Increase Font Size - Alt + = or Ctrl + Opt + =
          case 'NumpadEqual': // Handle numpad equals
            event.preventDefault();
            setFontSize(Math.min(200, fontSize + 5));
            break;
          case 'Minus': // Decrease Font Size - Alt + - or Ctrl + Opt + -
          case 'NumpadSubtract': // Handle numpad minus
            event.preventDefault();
            setFontSize(Math.max(80, fontSize - 5));
            break;
          case 'KeyC': // Toggle High Contrast - Alt + C or Ctrl + Opt + C
            event.preventDefault();
            setHighContrast(!highContrast);
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate, language, setLanguage, fontSize, setFontSize, highContrast, setHighContrast]);

  return null; // This component doesn't render anything
};

export default KeyboardShortcuts;
