import React from 'react';
import { useAccessibility } from '../../contexts/AccessibilityContext';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const { highContrast } = useAccessibility();

  let baseStyles = "px-6 py-3 font-bold transition-all duration-300 rounded focus:outline-none focus:ring-4 focus:ring-offset-2";
  
  // Mobile-first sizing adjustments can be added here if needed, but standard padding works well.
  
  let variantStyles = "";

  if (variant === 'primary') {
    variantStyles = highContrast 
      ? "bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
      : "bg-secondary text-white hover:bg-green-900 focus:ring-green-500";
  } else if (variant === 'secondary') {
    variantStyles = highContrast
      ? "bg-transparent border-2 border-white text-white"
      : "bg-gray-100 text-secondary hover:bg-gray-200 focus:ring-gray-400";
  } else if (variant === 'outline') {
    variantStyles = highContrast
       ? "border-2 border-yellow-400 text-yellow-400"
       : "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white focus:ring-green-500";
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};