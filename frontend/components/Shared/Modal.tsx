import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useAccessibility } from '../../contexts/AccessibilityContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, maxWidth = 'max-w-2xl' }) => {
  const { highContrast } = useAccessibility();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div 
        className={`relative w-full ${maxWidth} max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl ${highContrast ? 'bg-black border-2 border-yellow-400' : 'bg-white'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 z-10 ${highContrast ? 'bg-black' : 'bg-white'}`}>
          {title && <h2 className="text-2xl font-serif font-bold pr-8">{title}</h2>}
          <button 
            onClick={onClose}
            className={`p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 ${highContrast ? 'text-yellow-400 hover:bg-gray-800' : 'text-gray-500'}`}
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 md:p-10">
          {children}
        </div>
      </div>
    </div>
  );
};