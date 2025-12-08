


import React from 'react';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { TRANSLATIONS, ABOUT_CONTENT, ABOUT_CONTENT_NP } from '../../constants';
import { HeartHandshake, Users } from 'lucide-react';

export const Intro: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];
  const content = language === 'np' ? ABOUT_CONTENT_NP : ABOUT_CONTENT;

  return (
    <section id="about" className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-black">{t.introTitle}</h2>
        <div className="w-24 h-1 bg-secondary mx-auto mb-10"></div>
        
        <p className="text-lg md:text-xl text-black leading-relaxed font-sans font-normal mb-12 text-justify md:text-center">
          {t.introText}
        </p>

        {/* New Commitment Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 border-l-4 border-secondary p-8 rounded-lg text-left hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                    <HeartHandshake className="w-8 h-8 text-secondary" />
                    <h3 className="text-xl font-serif font-bold text-black">{t.ourCommitment}</h3>
                </div>
                <p className="text-black font-sans font-normal">
                    {language === 'np' 
                      ? "सबैका लागि न्याय, अपाङ्गता अधिकार, सामाजिक न्याय, र सीमान्तकृत समुदायहरूमा विशेष फोकस सहित।" 
                      : "Justice for all, with a special focus on disability rights, social justice, and marginalized communities."}
                </p>
            </div>

            <div className="bg-secondary text-white p-8 rounded-lg text-left hover:shadow-md transition-shadow flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-green-200" />
                    <h3 className="text-xl font-serif font-bold text-white">{t.joinMission}</h3>
                </div>
                <p className="text-green-50 font-sans font-medium">
                     {language === 'np' 
                      ? "कानूनलाई सामाजिक परिवर्तनको औजार बनाउने हाम्रो अभियानमा सामेल हुनुहोस्।" 
                      : "Join us in our mission to make the law a tool for social change."}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};