
import React from 'react';
import { PublicationList } from '../components/Research/PublicationList';
import { AppointmentCTA } from '../components/Shared/AppointmentCTA';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { TRANSLATIONS } from '../constants';
import { BookOpen } from 'lucide-react';

const ResearchPage: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];

  return (
    <main className="bg-white">
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          <BookOpen className="w-16 h-16 text-secondary mb-6" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">{t.researchTitle}</h1>
          <p className="text-xl text-black font-normal max-w-2xl">
            {t.researchSubtitle}
          </p>
        </div>
      </div>
      
      <PublicationList />
      <AppointmentCTA />
    </main>
  );
};

export default ResearchPage;
