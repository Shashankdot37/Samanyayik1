import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { useUI } from '../../contexts/UIContext';

const KeyboardShortcuts: React.FC = () => {
  const navigate = useNavigate();
  const {
    language, setLanguage,
    darkMode, setDarkMode,
    fontSize, setFontSize,
    setHighContrast, highContrast
  } = useAccessibility();
  const { toggleMenu } = useUI();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if Alt key is pressed (Option on Mac)
      // This handles both Alt + Key (Windows) and Ctrl + Option + Key (Mac)
      // because event.altKey is true in both cases.
      if (event.altKey) {
        switch (event.code) {
          // Navigation Shortcuts
          case 'Digit0': // Skip to Content
            event.preventDefault();
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
              mainContent.focus();
              mainContent.scrollIntoView();
            }
            break;
          case 'Digit1': // Home
            event.preventDefault();
            navigate('/');
            break;
          case 'Digit2': // About
            event.preventDefault();
            navigate('/about');
            break;
          case 'Digit3': // Services
            event.preventDefault();
            navigate('/practice-areas');
            break;
          case 'Digit5': // Contact
            event.preventDefault();
            navigate('/contact');
            break;
          case 'Digit6': // Help / FAQ
            event.preventDefault();
            navigate('/faq');
            break;
            
          // Feature Shortcuts
          case 'KeyG': // Language Switch
            event.preventDefault();
            setLanguage(language === 'en' ? 'np' : 'en');
            break;
          case 'KeyL': // Profile/Login -> Booking
            event.preventDefault();
            navigate('/booking');
            break;
          case 'Equal': // Increase Font
            event.preventDefault();
            setFontSize(Math.min(150, fontSize + 10));
            break;
          case 'Minus': // Decrease Font
            event.preventDefault();
            setFontSize(Math.max(80, fontSize - 10));
            break;
          case 'KeyC': // Increase Contrast
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
  }, [navigate, language, setLanguage, darkMode, setDarkMode, fontSize, setFontSize, highContrast, setHighContrast, toggleMenu]);

  return null; // This component doesn't render anything
};

export default KeyboardShortcuts;
