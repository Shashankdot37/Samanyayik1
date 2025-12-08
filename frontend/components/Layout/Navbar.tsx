

import React, { useState } from 'react';
import { Menu, X, Phone, Scale, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { TRANSLATIONS } from '../../constants';
import { Button } from '../UI/Button';

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useAccessibility();
  const t = TRANSLATIONS[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);

  return (
    <nav className="bg-primary border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
               <img 
                 src="/assets/FINAL LOGO.png" 
                 alt="A circular logo with a white background and a black border. Inside, at the top, the word 'SAMANYAYIK' is written in bold uppercase black letters. In the center, there is a golden balance scale with a glowing light at the top, symbolizing justice. Below the scale, there is an open book with a black ink pen tip emerging from its center, representing legal research and writing. Underneath the book, a golden plaque displays the word 'समन्यायिक' in Nepali script. Surrounding the central elements, two green laurel branches curve along the sides. Around the bottom edge, the words 'LEGAL SERVICE AND RESEARCH CENTER' are written in bold uppercase black letters." 
                 className="h-16 w-auto object-contain group-hover:scale-105 transition-transform"
               />
               <span className="text-3xl font-serif font-bold text-black tracking-tight">{t.firmName}</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8 ml-8">
            
            {/* Main Links */}
            <div className="flex items-center gap-4 xl:gap-6 text-sm xl:text-base font-medium">
                <Link to="/" className="text-gray-900 hover:text-secondary transition-colors whitespace-nowrap">{t.navHome}</Link>
                <Link to="/about" className="text-gray-900 hover:text-secondary transition-colors whitespace-nowrap">{t.navAbout}</Link>
                <Link to="/practice-areas" className="text-gray-900 hover:text-secondary transition-colors whitespace-nowrap">{t.navPractice}</Link>
                
                {/* Resources Dropdown */}
                <div className="relative group">
                   <button 
                      className="flex items-center text-gray-900 hover:text-secondary transition-colors focus:outline-none whitespace-nowrap"
                      aria-haspopup="true"
                   >
                      {t.resources}
                      <ChevronDown className="w-4 h-4 ml-1" />
                   </button>
                   <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg border border-gray-100 hidden group-hover:block group-focus-within:block pt-4">
                      <div className="py-2 flex flex-col bg-white rounded-lg">
                        <Link to="/news" className="px-4 py-3 hover:bg-green-50 text-gray-900 hover:text-secondary transition-colors text-sm">{t.navNews}</Link>
                        <Link to="/notices" className="px-4 py-3 hover:bg-green-50 text-gray-900 hover:text-secondary transition-colors text-sm">{t.navNotices}</Link>
                        <Link to="/research" className="px-4 py-3 hover:bg-green-50 text-gray-900 hover:text-secondary transition-colors text-sm">{t.navResearch}</Link>
                        <Link to="/faq" className="px-4 py-3 hover:bg-green-50 text-gray-900 hover:text-secondary transition-colors text-sm">{t.navFAQ}</Link>
                      </div>
                   </div>
                </div>

                <Link to="/contact" className="text-gray-900 hover:text-secondary transition-colors whitespace-nowrap">{t.navContact}</Link>
            </div>    
                {/* Language Switcher (Desktop) */}
                <button 
                    onClick={() => setLanguage(language === 'en' ? 'np' : 'en')}
                    className="flex items-center gap-1 px-3 py-1 bg-gray-50 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors text-sm font-bold ml-2"
                >
                    {language === 'en' ? '🇳🇵 NP' : '🇺🇸 EN'}
                </button>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300"></div>
            
            {/* Action Items */}
            <div className="flex items-center gap-4">
                <a href="tel:+9779861292120" className="hidden xl:flex items-center gap-2 text-gray-900 hover:text-secondary transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-medium font-serif">+977 9861292120</span>
                </a>

                <Link to="/calculator" className="hidden md:flex">
                    <Button variant="primary" size="sm" className="shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                        {t.calculator}
                    </Button>
                </Link>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden p-2 text-gray-600 hover:text-secondary transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
          </div>
        </div>
      </div>

        {/* Mobile Menu */}
        <div 
            className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            
            {/* Menu Panel */}
            <div className={`absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <span className="text-xl font-serif font-bold text-primary">{t.firmName}</span>
                        <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-500 hover:text-red-500 transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto py-6 px-6 space-y-6">
                        <div className="flex flex-col space-y-4">
                            <Link to="/" className="text-lg font-medium text-gray-900 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>{t.navHome}</Link>
                            <Link to="/about" className="text-lg font-medium text-gray-900 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>{t.navAbout}</Link>
                            <Link to="/practice-areas" className="text-lg font-medium text-gray-900 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>{t.navPractice}</Link>
                            
                            <div className="space-y-3 pt-2 border-t border-gray-100">
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{t.resources}</p>
                                <Link to="/news" className="block text-gray-600 hover:text-secondary pl-4" onClick={() => setIsMenuOpen(false)}>{t.navNews}</Link>
                                <Link to="/notices" className="block text-gray-600 hover:text-secondary pl-4" onClick={() => setIsMenuOpen(false)}>{t.navNotices}</Link>
                                <Link to="/research" className="block text-gray-600 hover:text-secondary pl-4" onClick={() => setIsMenuOpen(false)}>{t.navResearch}</Link>
                                <Link to="/faq" className="block text-gray-600 hover:text-secondary pl-4" onClick={() => setIsMenuOpen(false)}>{t.navFAQ}</Link>
                            </div>

                            <Link to="/contact" className="text-lg font-medium text-gray-900 hover:text-secondary pt-2 border-t border-gray-100" onClick={() => setIsMenuOpen(false)}>{t.navContact}</Link>
                        </div>

                        <div className="pt-6 border-t border-gray-100 space-y-4">
                            {/* Language Switcher (Mobile) */}
                            <button 
                                onClick={() => {
                                    setLanguage(language === 'en' ? 'np' : 'en');
                                    setIsMenuOpen(false);
                                }}
                                className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 font-bold"
                            >
                                {language === 'en' ? 'Switch to Nepali 🇳🇵' : 'Switch to English 🇺🇸'}
                            </button>

                            <Link to="/calculator" className="block" onClick={() => setIsMenuOpen(false)}>
                                <Button variant="primary" className="w-full justify-center">
                                    {t.calculator}
                                </Button>
                            </Link>
                            
                            <a href="tel:+9779861292120" className="flex items-center justify-center gap-2 text-gray-600 hover:text-secondary p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors">
                                <Phone className="w-5 h-5" />
                                <span className="font-medium">+977 9861292120</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
};