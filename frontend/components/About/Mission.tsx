


import React from 'react';
import { ABOUT_CONTENT, ABOUT_CONTENT_NP, TRANSLATIONS } from '../../constants';
import { Target, Users, HeartHandshake } from 'lucide-react';
import { useAccessibility } from '../../contexts/AccessibilityContext';

export const Mission: React.FC = () => {
  const { language } = useAccessibility();
  const content = language === 'np' ? ABOUT_CONTENT_NP : ABOUT_CONTENT;
  
  return (
    <section className="py-24 px-4 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Left: Content */}
        <div className="w-full md:w-1/2 space-y-8">
            <div className="flex items-center gap-4 text-secondary mb-2">
                 <Target className="w-8 h-8" />
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">{content.mission.title}</h2>
            </div>
            
            <p className="text-xl text-black font-sans font-normal leading-relaxed text-justify">
                {content.mission.text}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
                    <Users className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-serif font-bold text-black text-lg mb-2">
                      {language === 'np' ? "सीमान्तकृतहरूका लागि" : "For the Marginalized"}
                    </h3>
                    <p className="text-sm font-sans font-normal text-black">
                      {language === 'np' 
                        ? "समाजको किनारमा धकेलिएकाहरूको सेवा गर्न स्पष्ट रूपमा प्रतिबद्ध।" 
                        : "Explicitly committed to serving those pushed to the fringes of society."}
                    </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
                    <HeartHandshake className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-serif font-bold text-black text-lg mb-2">
                      {language === 'np' ? "मौलिक अधिकार" : "Fundamental Right"}
                    </h3>
                    <p className="text-sm font-sans font-normal text-black">
                      {language === 'np' 
                        ? "न्याय विशेषाधिकार होइन, तर सबैका लागि संवैधानिक स्वतन्त्रता हो।" 
                        : "Justice is not a privilege, but a constitutional freedom for all."}
                    </p>
                </div>
            </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 h-[600px] relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/assets/missiogroupn-image.jpg" 
              alt="A close-up of a wooden judge’s gavel, centered against a dark background, highlighting its polished texture and cylindrical head." 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-serif font-bold text-2xl mb-2">
                  {language === 'np' ? "सम्झौताहीन प्रतिरक्षा" : "Uncompromising Defense"}
                </p>
                <p className="font-sans text-sm opacity-90">
                  {language === 'np' 
                    ? "न्यायमा पहुँच र प्रत्येक नागरिकको लागि पर्याप्त जीवनस्तरको प्रवर्द्धन।" 
                    : "Promoting access to justice and an adequate standard of living for every citizen."}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};