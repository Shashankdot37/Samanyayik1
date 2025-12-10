import React, { useState } from 'react';
import { Eye, Type, Activity, Languages, Settings, Keyboard } from 'lucide-react';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { Modal } from '../Shared/Modal';
import { TRANSLATIONS } from '../../constants';

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
  const [isShortcutsModalOpen, setIsShortcutsModalOpen] = useState(false);
  const t = TRANSLATIONS[language];

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

                {/* Keyboard Shortcuts Button */}
                <div className="pt-2 border-t border-gray-200">
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            setIsShortcutsModalOpen(true);
                        }}
                        className="w-full flex items-center justify-center space-x-2 bg-secondary text-white font-bold py-2 px-4 rounded-lg hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                    >
                        <Keyboard className="w-4 h-4" />
                        <span>{language === 'np' ? 'किबोर्ड शॉर्टकट हेर्नुहोस्' : 'View Keyboard Shortcuts'}</span>
                    </button>
                </div>
            </div>
        )}

        {/* Keyboard Shortcuts Modal */}
        <Modal
            isOpen={isShortcutsModalOpen}
            onClose={() => setIsShortcutsModalOpen(false)}
            title={language === 'np' ? 'किबोर्ड शॉर्टकटहरू' : 'Keyboard Shortcuts'}
            maxWidth="max-w-3xl"
        >
            <div className="space-y-6">
                <p className="text-gray-600 text-sm mb-6">
                    {language === 'np' 
                        ? 'वेबसाइट नेभिगेट गर्न र सुविधाहरू पहुँच गर्न किबोर्ड शॉर्टकटहरू प्रयोग गर्नुहोस्।'
                        : 'Use keyboard shortcuts to navigate the website and access features.'}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Navigation Shortcuts */}
                    <div className="space-y-3">
                        <h3 className="font-bold text-lg text-black border-b pb-2">
                            {language === 'np' ? 'नेभिगेशन' : 'Navigation'}
                        </h3>
                        <ShortcutItem 
                            action={language === 'np' ? 'सामग्रीमा छोड्नुहोस्' : 'Skip to Content'}
                            keys={['Alt + A', 'Ctrl + Opt + A']}
                        />
                        <ShortcutItem 
                            action={language === 'np' ? 'गृहपृष्ठ' : 'Home'}
                            keys={['Alt + H', 'Ctrl + Opt + H']}
                        />
                        <ShortcutItem 
                            action={language === 'np' ? 'हाम्रो बारेमा' : 'More About Us'}
                            keys={['Alt + M', 'Ctrl + Opt + M']}
                        />
                        <ShortcutItem 
                            action={language === 'np' ? 'हाम्रा सेवाहरू' : 'Our Services'}
                            keys={['Alt + S', 'Ctrl + Opt + S']}
                        />
                        <ShortcutItem 
                            action={language === 'np' ? 'सम्पर्क गर्नुहोस्' : 'Contact Us'}
                            keys={['Alt + U', 'Ctrl + Opt + U']}
                        />
                        <ShortcutItem 
                            action={language === 'np' ? 'मद्दत / प्राय: सोधिने प्रश्न' : 'Help / FAQ'}
                            keys={['Alt + 6', 'Ctrl + Opt + 6']}
                        />
                    </div>

                    {/* Feature Shortcuts */}
                    <div className="space-y-3">
                        <h3 className="font-bold text-lg text-black border-b pb-2">
                            {language === 'np' ? 'सुविधाहरू' : 'Features'}
                        </h3>
                        <ShortcutItem 
                            action={language === 'np' ? 'प्रोफाइल / नियुक्ति बुक गर्नुहोस्' : 'Profile / Book Appointment'}
                            keys={['Alt + L', 'Ctrl + Opt + L']}
                        />
                        <ShortcutItem 
                            action={language === 'np' ? 'भाषा बदल्नुहोस् (EN/NP)' : 'Switch Language (EN/NP)'}
                            keys={['Alt + I', 'Ctrl + Opt + I']}
                        />
                        <ShortcutItem 
                            action={language === 'np' ? 'फन्ट साइज बढाउनुहोस्' : 'Increase Font Size'}
                            keys={['Alt + =', 'Ctrl + Opt + =']}
                        />
                        <ShortcutItem 
                            action={language === 'np' ? 'फन्ट साइज घटाउनुहोस्' : 'Decrease Font Size'}
                            keys={['Alt + -', 'Ctrl + Opt + -']}
                        />
                        <ShortcutItem 
                            action={language === 'np' ? 'उच्च कन्ट्रास्ट टगल गर्नुहोस्' : 'Toggle High Contrast'}
                            keys={['Alt + C', 'Ctrl + Opt + C']}
                        />
                    </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600">
                        <strong>{language === 'np' ? 'नोट:' : 'Note:'}</strong>{' '}
                        {language === 'np' 
                            ? 'Windows/Linux मा Alt + Key प्रयोग गर्नुहोस्, Mac मा Ctrl + Opt + Key प्रयोग गर्नुहोस्।'
                            : 'Use Alt + Key on Windows/Linux, and Ctrl + Opt + Key on Mac.'}
                    </p>
                </div>
            </div>
        </Modal>
    </div>
  );
};

// Helper component for displaying shortcut items
const ShortcutItem: React.FC<{ action: string; keys: string[] }> = ({ action, keys }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-2 border-b border-gray-100 last:border-0">
      <span className="text-sm font-medium text-black">{action}</span>
      <div className="flex flex-wrap gap-2">
        {keys.map((key, index) => (
          <kbd
            key={index}
            className="px-2 py-1 text-xs font-mono bg-gray-100 border border-gray-300 rounded text-gray-800"
          >
            {key}
          </kbd>
        ))}
      </div>
    </div>
  );
};
