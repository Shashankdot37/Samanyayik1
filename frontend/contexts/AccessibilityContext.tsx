import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../types';

interface AccessibilityContextType {
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  fontSize: number; // Percentage, default 100
  setFontSize: (val: number) => void;
  reduceMotion: boolean;
  setReduceMotion: (val: boolean) => void;
  language: Language;
  setLanguage: (val: Language) => void;
  isDyslexicFont: boolean;
  setIsDyslexicFont: (val: boolean) => void;
  areLinksUnderlined: boolean;
  setAreLinksUnderlined: (val: boolean) => void;
  isBoldText: boolean;
  setIsBoldText: (val: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [isDyslexicFont, setIsDyslexicFont] = useState(false);
  const [areLinksUnderlined, setAreLinksUnderlined] = useState(false);
  const [isBoldText, setIsBoldText] = useState(false);

  useEffect(() => {
    // Apply High Contrast to Body
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    // Apply Font Size to Root
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    // Apply Reduced Motion
    if (reduceMotion) {
      document.documentElement.style.scrollBehavior = 'auto';
    } else {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, [reduceMotion]);

  useEffect(() => {
    // Apply Dyslexic Font
    if (isDyslexicFont) {
      document.body.classList.add('dyslexic-font');
    } else {
      document.body.classList.remove('dyslexic-font');
    }
  }, [isDyslexicFont]);

  useEffect(() => {
    // Apply Undereline Links
    if (areLinksUnderlined) {
        document.body.classList.add('underline-links');
    } else {
        document.body.classList.remove('underline-links');
    }
  }, [areLinksUnderlined]);

  useEffect(() => {
    // Apply Bold Text
    if (isBoldText) {
        document.body.classList.add('bold-text');
    } else {
        document.body.classList.remove('bold-text');
    }
  }, [isBoldText]);

  return (
    <AccessibilityContext.Provider
      value={{
        highContrast,
        setHighContrast,
        fontSize,
        setFontSize,
        reduceMotion,
        setReduceMotion,
        language,
        setLanguage,
        isDyslexicFont,
        setIsDyslexicFont,
        areLinksUnderlined,
        setAreLinksUnderlined,
        isBoldText,
        setIsBoldText,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return context;
};