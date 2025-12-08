




import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Scale, Youtube, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { TRANSLATIONS } from '../../constants';

export const Footer: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
                <img 
                  src="/assets/FINAL LOGO.png" 
                  alt="A circular logo with a white background and a black border. Inside, at the top, the word 'SAMANYAYIK' is written in bold uppercase black letters. In the center, there is a golden balance scale with a glowing light at the top, symbolizing justice. Below the scale, there is an open book with a black ink pen tip emerging from its center, representing legal research and writing. Underneath the book, a golden plaque displays the word 'समन्यायिक' in Nepali script. Surrounding the central elements, two green laurel branches curve along the sides. Around the bottom edge, the words 'LEGAL SERVICE AND RESEARCH CENTER' are written in bold uppercase black letters." 
                  className="h-12 w-auto object-contain group-hover:scale-105 transition-transform bg-white rounded-full p-0.5"
                />
                <span className="text-2xl font-serif font-bold text-white tracking-tight">Samanyayik</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === 'np' 
                ? "इमान्दारिता र उत्कृष्टताका साथ तपाईंको अधिकारको रक्षा गर्दै। १९९५ देखि नेपालको कानूनी परिदृश्यको नेतृत्व गर्दै।" 
                : "Defending your rights with integrity and excellence. Leading the legal landscape in Nepal since 1995."}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">{t.aboutUsTitle}</Link></li>
              <li><Link to="/practice-areas" className="hover:text-white transition-colors">{t.practiceAreaTitle}</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">{t.newsTitle}</Link></li>
              <li><Link to="/notices" className="hover:text-white transition-colors">{t.noticesTitle}</Link></li>
              <li><Link to="/research" className="hover:text-white transition-colors">{t.researchTitle}</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">{t.faqTitle}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t.contactUs}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-4">{t.contactInfo}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 flex-shrink-0 text-secondaryLight" />
                    <span className="font-medium text-white">Kathmandu, Nepal</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-secondaryLight" />
                    <div className="flex flex-col">
                        <a href="tel:+9779861292120" className="hover:text-white transition-colors block">+977-9861292120</a>
                        <a href="tel:+9779865245410" className="hover:text-white transition-colors block">+977-9865245410</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-secondaryLight" />
                    <a href="mailto:law.samanyayik@gmail.com" className="hover:text-white transition-colors">law.samanyayik@gmail.com</a>
                  </li>
                </ul>

                <div>
                     <h4 className="font-bold text-sm mb-4 text-gray-300">{t.followUs}</h4>
                     <div className="flex space-x-4">
                      <a href="" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-secondary transition-colors" aria-label="Facebook">
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a href="https://www.youtube.com/@Samanyayik" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-secondary transition-colors" aria-label="YouTube">
                        <Youtube className="w-5 h-5" />
                      </a>
                      <a href="https://www.instagram.com/samanyayik.legal" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-secondary transition-colors" aria-label="Instagram">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a href="https://x.com/LegalAnd2799" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-secondary transition-colors" aria-label="Twitter">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t.footerRights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/accessibility" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};