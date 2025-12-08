

import React from 'react';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { TRANSLATIONS, WHY_US_FEATURES, WHY_US_FEATURES_NP } from '../../constants';
import { ShieldCheck, Scale, Clock, Users } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];
  const features = language === 'np' ? WHY_US_FEATURES_NP : WHY_US_FEATURES;

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-10 h-10 text-secondary" />;
      case 'Scale': return <Scale className="w-10 h-10 text-secondary" />;
      case 'Clock': return <Clock className="w-10 h-10 text-secondary" />;
      case 'Users': return <Users className="w-10 h-10 text-secondary" />;
      default: return null;
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-16 text-black">{t.whyUsTitle}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-8 border-2 border-gray-100 rounded-lg hover:shadow-xl hover:border-secondary transition-all duration-300 bg-white hover:-translate-y-1"
            >
              <div className="mb-6 p-4 bg-green-50 rounded-full w-fit group-hover:bg-secondary group-hover:bg-opacity-10 transition-colors">
                {getIcon(feature.iconName)}
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif text-black">{feature.title}</h3>
              <p className="text-black font-sans font-normal leading-relaxed text-base">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
