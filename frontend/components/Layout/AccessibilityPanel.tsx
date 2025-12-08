import React, { useState } from 'react';
import { Eye, Type, Activity, Languages, Settings } from 'lucide-react';
import { useAccessibility } from '../../contexts/AccessibilityContext';

export const AccessibilityPanel: React.FC = () => {
  const {
    highContrast, setHighContrast,
    fontSize, setFontSize,
    reduceMotion, setReduceMotion,
    language, setLanguage,
    isDyslexicFont, setIsDyslexicFont,
    areLinksUnderlined, setAreLinksUnderlined,
    isBoldText, setIsBoldText
  } = useAccessibility();
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-50">
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 bg-secondary text-white rounded-full shadow-lg hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            aria-label="Open Accessibility Tools"
        >
            <Settings className="w-6 h-6" />
        </button>

        {isOpen && (
            <div className="absolute bottom-16 left-0 bg-white border border-gray-200 shadow-xl rounded-lg p-4 w-64 space-y-4 animate-fade-in-up text-black">
                <h3 className="font-bold text-lg mb-2 border-b pb-2 text-black">Accessibility</h3>
                
                {/* Dyslexic Font */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-black">
                        <Type className="w-4 h-4 text-black" />
                        <span className="text-sm font-bold text-black">Dyslexic Font</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={isDyslexicFont} onChange={(e) => setIsDyslexicFont(e.target.checked)} className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
                    </label>
                </div>

                {/* Underline Links */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-black">
                        <Settings className="w-4 h-4 text-black" />
                        <span className="text-sm font-bold text-black">Underline Links</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={areLinksUnderlined} onChange={(e) => setAreLinksUnderlined(e.target.checked)} className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
                    </label>
                </div>

                {/* Bold Text */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-black">
                        <Type className="w-4 h-4 text-black font-bold" />
                        <span className="text-sm font-bold text-black">Bold Text</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={isBoldText} onChange={(e) => setIsBoldText(e.target.checked)} className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
                    </label>
                </div>

                {/* Contrast */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-black">
                        <Eye className="w-4 h-4 text-black" />
                        <span className="text-sm font-bold text-black">High Contrast</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={highContrast} onChange={(e) => setHighContrast(e.target.checked)} className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
                    </label>
                </div>

                {/* Font Size */}
                <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-black">
                        <Type className="w-4 h-4 text-black" />
                        <span className="text-sm font-bold text-black">Font Size ({fontSize}%)</span>
                    </div>
                    <div className="flex space-x-2">
                        <button onClick={() => setFontSize(Math.max(80, fontSize - 10))} className="flex-1 bg-gray-100 text-black font-bold p-1 text-sm rounded hover:bg-gray-200 border border-gray-300">-A</button>
                        <button onClick={() => setFontSize(Math.min(150, fontSize + 10))} className="flex-1 bg-gray-100 text-black font-bold p-1 text-sm rounded hover:bg-gray-200 border border-gray-300">+A</button>
                    </div>
                </div>

                {/* Motion */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-black">
                        <Activity className="w-4 h-4 text-black" />
                        <span className="text-sm font-bold text-black">Reduce Motion</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={reduceMotion} onChange={(e) => setReduceMotion(e.target.checked)} className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
                    </label>
                </div>
            </div>
        )}
    </div>
  );
};