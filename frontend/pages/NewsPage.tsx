import React from 'react';
import { NewsGrid } from '../components/News/NewsGrid';
import { AppointmentCTA } from '../components/Shared/AppointmentCTA';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { TRANSLATIONS } from '../constants';

const NewsPage: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];

  return (
    <main className="bg-white min-h-screen">
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-black mb-6">{t.newsTitle}</h1>
          <p className="text-xl text-black font-normal max-w-2xl mx-auto">
            {t.newsSubtitle}
          </p>
        </div>
      </div>
      
      <NewsGrid />
      <AppointmentCTA />
    </main>
  );
};

export default NewsPage;