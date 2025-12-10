import React, { useEffect, useRef } from 'react';
import { X, Keyboard } from 'lucide-react';
import { useAccessibility } from '../../contexts/AccessibilityContext';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const shortcuts = [
  { key: 'Alt + A', mac: 'Ctrl + Opt + A', description: 'Skip to Content' },
  { key: 'Alt + H', mac: 'Ctrl + Opt + H', description: 'Home' },
  { key: 'Alt + M', mac: 'Ctrl + Opt + M', description: 'More About Us' },
  { key: 'Alt + S', mac: 'Ctrl + Opt + S', description: 'Our Services' },
  { key: 'Alt + U', mac: 'Ctrl + Opt + U', description: 'Contact Us' },
  { key: 'Alt + 6', mac: 'Ctrl + Opt + 6', description: 'Help / FAQ' },
  { key: 'Alt + L', mac: 'Ctrl + Opt + L', description: 'Profile / Book Appointment' },
  { key: 'Alt + I', mac: 'Ctrl + Opt + I', description: 'Switch Language (EN/NP)' },
  { key: 'Alt + =', mac: 'Ctrl + Opt + =', description: 'Increase Font Size' },
  { key: 'Alt + -', mac: 'Ctrl + Opt + -', description: 'Decrease Font Size' },
  { key: 'Alt + C', mac: 'Ctrl + Opt + C', description: 'Toggle High Contrast' },
];

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { highContrast } = useAccessibility();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Trapping focus logic could be added here for full accessibility compliance
      modalRef.current?.focus();
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div 
        ref={modalRef}
        className={`relative w-full max-w-2xl bg-white rounded-xl shadow-2xl flex flex-col max-h-[90vh] ${highContrast ? 'border-2 border-yellow-400' : ''}`}
        role="dialog"
        aria-labelledby="shortcuts-title"
        aria-modal="true"
        tabIndex={-1}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-50 rounded-lg">
              <Keyboard className="w-6 h-6 text-secondary" />
            </div>
            <h2 id="shortcuts-title" className="text-2xl font-serif font-bold text-gray-900">
              Keyboard Shortcuts
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-label="Close shortcuts modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shortcuts.map((shortcut, index) => (
              <div 
                key={index}
                className={`flex flex-col p-4 rounded-lg border ${highContrast ? 'border-white bg-black' : 'border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md'} transition-all duration-200`}
              >
                <span className={`text-sm font-medium mb-2 ${highContrast ? 'text-yellow-400' : 'text-gray-500'}`}>
                  {shortcut.description}
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-sm font-bold text-gray-800 shadow-sm min-w-[60px] text-center">
                    {shortcut.key}
                  </kbd>
                  <span className="text-gray-400 text-xs text-center">or</span>
                   <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-sm font-bold text-gray-800 shadow-sm min-w-[80px] text-center">
                    {shortcut.mac}
                  </kbd>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 text-center rounded-b-xl">
            <p className="text-sm text-gray-500">
                Press <kbd className="px-1 py-0.5 bg-white border border-gray-200 rounded text-xs font-bold text-gray-800">Esc</kbd> to close this window
            </p>
        </div>
      </div>
    </div>
  );
};
