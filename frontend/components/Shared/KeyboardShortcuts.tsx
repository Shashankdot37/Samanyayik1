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
          case 'Digit0': // Skip to Content - Alt + 0 or Ctrl + Opt + 0
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
          case 'Digit1': // Home - Alt + 1 or Ctrl + Opt + 1
            event.preventDefault();
            navigate('/');
            break;
          case 'Digit2': // More About Us - Alt + 2 or Ctrl + Opt + 2
            event.preventDefault();
            navigate('/about');
            break;
          case 'Digit3': // Our Services - Alt + 3 or Ctrl + Opt + 3
            event.preventDefault();
            navigate('/practice-areas');
            break;
          case 'Digit5': // Contact Us - Alt + 5 or Ctrl + Opt + 5
            event.preventDefault();
            navigate('/contact');
            break;
          case 'Digit6': // Help / FAQ - Alt + 6 or Ctrl + Opt + 6
            event.preventDefault();
            navigate('/faq');
            break;
            
          // Feature Shortcuts
          case 'KeyG': // Switch Language (EN/NP) - Alt + G or Ctrl + Opt + G
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
