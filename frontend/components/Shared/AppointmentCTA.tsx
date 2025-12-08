

import React from 'react';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { TRANSLATIONS } from '../../constants';
import { Button } from '../UI/Button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AppointmentCTA: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];

  return (
    <section id="appointment" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-lg border-t-4 border-secondary">
            
            <div className="w-full md:w-1/2">
                 <img 
                    src="/assets/booking.jpg" 
                    alt="A close-up of a firm handshake between two professionals, symbolizing trust, agreement, and the confidential nature of the legal consultation." 
                    className="rounded-lg shadow-md w-full h-auto object-cover border border-gray-200"
                 />
            </div>

            <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-black">{t.ctaTitle}</h2>
                
                <p className="text-black font-medium text-lg">
                    {t.ctaText}
                </p>
                
                <div className="space-y-2 mb-6">
                    <div className="flex items-center text-black font-normal">
                        <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                        <span>{t.confidentialConsultation}</span>
                    </div>
                    <div className="flex items-center text-black font-normal">
                        <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                        <span>{t.expertStrategy}</span>
                    </div>
                </div>

                <div className="mt-6">
                <Link to="/booking">
                <Button className="w-full md:w-auto shadow-xl shadow-green-900/20">
                    {t.bookAppointment}
                </Button>
                </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};