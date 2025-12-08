


import React from 'react';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { TRANSLATIONS, SERVICE_CATEGORIES, SERVICE_CATEGORIES_NP } from '../../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../UI/Button';

export const PracticeAreas: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];
  const categories = language === 'np' ? SERVICE_CATEGORIES_NP : SERVICE_CATEGORIES;

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-6 text-black">{t.practiceAreaTitle}</h2>
        <p className="text-xl text-black font-sans font-normal text-center max-w-3xl mx-auto mb-16">
          {language === 'np' 
            ? "प्रतिनिधित्व, अनुसन्धान, र प्राविधिक पहुँच फराकिलो न्यायको लागि बहुविषयक दृष्टिकोण।" 
            : "A multidisciplinary approach to justice spanning representation, research, and technical accessibility."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-secondary transition-colors duration-300 flex flex-col hover:-translate-y-1 transform transition-transform"
            >
              {/* Updated Numbering: Removed opacity, ensuring WCAG AAA compliance with solid dark green */}
              <span className="text-4xl font-bold font-sans text-secondary mb-6 block group-hover:scale-105 transition-transform origin-left">
                {category.number}
              </span>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-serif font-bold mb-4 text-black group-hover:text-secondary transition-colors">{category.title}</h3>
                <p className="text-black font-sans font-normal mb-8 leading-relaxed">
                  {category.description}
                </p>
              </div>
                
              <Link to={`/practice-areas#${category.id}`}>
                <button 
                  className="flex items-center text-secondary font-sans font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded p-1 w-fit group/btn"
                >
                  {t.learnMore} <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <Link to="/practice-areas">
                <Button variant="primary" className="px-10 py-4 text-lg group flex items-center justify-center mx-auto">
                   {t.exploreServices}
                   <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
             </Link>
        </div>
      </div>
    </section>
  );
};