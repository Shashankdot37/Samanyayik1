import React from 'react';
import { FAQList } from '../components/FAQ/FAQList';
import { AppointmentCTA } from '../components/Shared/AppointmentCTA';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { TRANSLATIONS } from '../constants';
import { HelpCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];

  return (
    <main className="bg-white min-h-screen">
      <div className="bg-gray-50 py-16 border-b border-gray-200 mb-8">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          <HelpCircle className="w-16 h-16 text-secondary mb-6" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">{t.faqTitle}</h1>
          <p className="text-xl text-black font-normal max-w-2xl">
            {t.faqSubtitle}
          </p>
        </div>
      </div>
      
      <section className="py-12">
        <FAQList />
      </section>

      <AppointmentCTA />
    </main>
  );
};

export default FAQPage;