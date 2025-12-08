



import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SERVICE_CATEGORIES, SERVICE_CATEGORIES_NP, TRANSLATIONS } from '../constants';
import { ServiceSubItem } from '../types';
import { Modal } from '../components/Shared/Modal';
import { AppointmentCTA } from '../components/Shared/AppointmentCTA';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';

const PracticeAreasPage: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];
  const categories = language === 'np' ? SERVICE_CATEGORIES_NP : SERVICE_CATEGORIES;
  const [selectedService, setSelectedService] = useState<ServiceSubItem | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main className="bg-white min-h-screen">
       {/* Header */}
      <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-serif font-bold text-black mb-6">{t.practiceAreaTitle}</h1>
            <p className="text-xl text-black font-sans font-normal max-w-3xl mx-auto leading-relaxed">
              {language === 'np'
                ? "हामी न्यायको लागि बहुविषयक दृष्टिकोण प्रदान गर्दछौं। हाम्रो कामले आक्रामक कानूनी प्रतिनिधित्व, प्रमाण-आधारित अनुसन्धान, र व्यक्ति, कर्पोरेट, र विकास संस्थाहरूलाई समर्थन गर्न डिजाइन गरिएको विशेष प्राविधिक सेवाहरू समेट्छ।"
                : "We provide a multidisciplinary approach to justice. Our work spans aggressive legal representation, evidence-based research, and specialized technical services designed to support individuals, corporations, and development organizations."}
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24 space-y-32">
        {categories.map((category) => (
          <div key={category.id} className="scroll-mt-24" id={category.id}>
             <div className="flex flex-col md:flex-row gap-8 mb-12 items-start border-b border-gray-200 pb-8">
                 <div className="text-6xl font-sans font-bold text-secondary leading-none">
                     {category.number}
                 </div>
                 <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">{category.title}</h2>
                    <p className="text-xl text-black font-sans font-normal max-w-3xl">{category.description}</p>
                 </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.subServices.map((service) => (
                    <div 
                        key={service.id}
                        className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-secondary hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full group"
                        onClick={() => setSelectedService(service)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setSelectedService(service)}
                    >
                        <h3 className="text-xl font-serif font-bold text-black mb-4 group-hover:text-secondary transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-black font-sans font-normal text-sm leading-relaxed mb-8 flex-grow">
                            {service.description}
                        </p>
                        <div className="flex items-center text-secondary font-sans font-bold text-sm mt-auto">
                            {t.viewDetails} <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                ))}
             </div>
          </div>
        ))}
      </div>

      <AppointmentCTA />

      {/* Detail Modal */}
      <Modal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        title={t.viewDetails}
        maxWidth="max-w-4xl"
      >
        {selectedService && (
            <div className="prose max-w-none text-black font-sans">
                {/* Title moved inside body for better visual spacing */}
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-6 leading-tight">
                    {selectedService.title}
                </h2>

                <div className="flex items-center gap-2 mb-8 text-secondary font-bold text-sm uppercase tracking-wide border-b border-gray-100 pb-4">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{language === 'np' ? "विस्तृत जानकारी" : "Detailed Overview"}</span>
                </div>
                
                <div 
                    className="text-lg leading-relaxed space-y-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2 [&>ul>li>strong]:text-black"
                    dangerouslySetInnerHTML={{ __html: selectedService.fullContent }} 
                />

                <div className="mt-8 pt-8 border-t border-gray-100">
                    <button 
                        onClick={() => {
                            setSelectedService(null);
                            setTimeout(() => {
                                document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                            }, 300);
                        }}
                        className="text-secondary font-bold hover:underline"
                    >
                        {language === 'np' 
                          ? "यसमा सहयोग चाहिन्छ? नियुक्ति बुक गर्नुहोस्।" 
                          : "Need assistance with this? Book an appointment."}
                    </button>
                </div>
            </div>
        )}
      </Modal>
    </main>
  );
};

export default PracticeAreasPage;