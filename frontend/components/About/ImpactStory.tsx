


import React from 'react';
import { ABOUT_CONTENT, ABOUT_CONTENT_NP, TRANSLATIONS } from '../../constants';
import { Quote, Trophy } from 'lucide-react';
import { useAccessibility } from '../../contexts/AccessibilityContext';

export const ImpactStory: React.FC = () => {
  const { language } = useAccessibility();
  const content = language === 'np' ? ABOUT_CONTENT_NP : ABOUT_CONTENT;
  
  return (
    <section>
        {/* Impact Content */}
        <div className="py-24 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <Trophy className="w-16 h-16 text-secondary mx-auto" />
                <h2 className="text-4xl font-serif font-bold text-black">{content.impact.title}</h2>
                <div className="w-24 h-1 bg-secondary mx-auto"></div>
                <p className="text-xl text-black font-sans font-normal leading-relaxed">
                    {content.impact.text}
                </p>
            </div>
        </div>

        {/* Quote Block */}
        <div className="bg-secondary py-24 px-4 relative overflow-hidden">
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <Quote className="w-12 h-12 text-green-300 mx-auto mb-8 opacity-80" />
                <blockquote className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-12">
                    "{content.quote.text}"
                </blockquote>
                <p className="text-lg md:text-xl text-green-100 font-sans font-normal max-w-3xl mx-auto border-t border-green-700 pt-8">
                    {content.quote.subtext}
                </p>
            </div>
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="w-96 h-96 bg-white rounded-full blur-3xl absolute -top-20 -left-20"></div>
                <div className="w-96 h-96 bg-white rounded-full blur-3xl absolute -bottom-20 -right-20"></div>
            </div>
        </div>
    </section>
  );
};