


import React, { useState } from 'react';
import { NOTICES, NOTICES_NP, TRANSLATIONS } from '../../constants';
import { NoticeCategory, NoticeItem } from '../../types';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { Modal } from '../Shared/Modal';
import { Button } from '../UI/Button';
import { Bell, Briefcase, Calendar, Info, FileText, Megaphone } from 'lucide-react';

export const NoticeBoard: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];
  const items = language === 'np' ? NOTICES_NP : NOTICES;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);

  const categories: NoticeCategory[] = ['All', 'Vacancy', 'Court Holiday', 'Press Release', 'General'];

  // Translate Category Label
  const getCategoryLabel = (cat: string) => {
     if (language === 'en') return cat;
     switch(cat) {
        case 'All': return 'सबै';
        case 'Vacancy': return 'रिक्त पद';
        case 'Court Holiday': return 'अदालत बिदा';
        case 'Press Release': return 'प्रेस विज्ञप्ति';
        case 'General': return 'सामान्य';
        default: return cat;
     }
  };

  const getIcon = (category: string) => {
    switch (category) {
      case 'Vacancy': return <Briefcase className="w-5 h-5" />;
      case 'Court Holiday': return <Calendar className="w-5 h-5" />;
      case 'Press Release': return <Megaphone className="w-5 h-5" />;
      case 'General': return <Info className="w-5 h-5" />;
      default: return <Bell className="w-5 h-5" />;
    }
  };

  const filteredNotices = items.filter(notice => activeCategory === 'All' || notice.category === activeCategory);

  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-16 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-sans font-bold text-sm transition-all duration-300 border-2
              ${activeCategory === cat 
                ? 'bg-secondary text-white border-secondary shadow-md' 
                : 'bg-white text-black border-gray-200 hover:border-secondary hover:text-secondary'}`}
          >
            {getIcon(cat)}
            {getCategoryLabel(cat)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNotices.map((notice) => (
          <div 
            key={notice.id} 
            className="group bg-white border-2 border-gray-100 rounded-lg p-8 hover:border-secondary hover:shadow-lg transition-all duration-300 flex flex-col relative"
          >
            {notice.isUrgent && (
              <span className="absolute top-4 right-4 bg-red-100 text-red-800 text-xs font-sans font-bold px-2 py-1 rounded animate-pulse">
                {language === 'np' ? "अत्यावश्यक" : "Urgent"}
              </span>
            )}
            
            <div className="flex items-center gap-2 mb-4 text-secondary font-sans font-bold text-sm">
              {getIcon(notice.category)}
              <span className="uppercase tracking-wide">{getCategoryLabel(notice.category)}</span>
            </div>

            <h3 className="text-xl font-serif font-bold text-black mb-3 group-hover:text-secondary transition-colors">
              {notice.title}
            </h3>

            <p className="text-xs font-sans font-bold text-gray-500 mb-4 flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {notice.date}
            </p>

            <p className="text-black font-sans font-normal text-sm leading-relaxed mb-6 flex-grow">
              {notice.excerpt}
            </p>

            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2"
              onClick={() => setSelectedNotice(notice)}
            >
              <FileText className="w-4 h-4" />
              {t.viewDetails}
            </Button>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <Modal isOpen={!!selectedNotice} onClose={() => setSelectedNotice(null)} title={t.viewDetails}>
        {selectedNotice && (
          <div className="prose max-w-none text-black font-sans">
             <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
               <div className="flex items-center gap-2 text-secondary font-bold">
                  {getIcon(selectedNotice.category)}
                  <span>{getCategoryLabel(selectedNotice.category)}</span>
               </div>
               <span className="text-gray-500 font-bold text-sm">{selectedNotice.date}</span>
            </div>

            {/* Title moved inside body */}
            <h2 className="text-3xl font-serif font-bold text-black mb-6">{selectedNotice.title}</h2>
            
            <div 
                className="font-normal text-lg leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: selectedNotice.content }} 
            />

            {selectedNotice.category === 'Vacancy' && (
               <div className="mt-8 p-6 bg-green-50 border border-secondary/20 rounded-lg">
                  <p className="font-bold text-secondary mb-2">{language === 'np' ? "इच्छुक हुनुहुन्छ?" : "Interested?"}</p>
                  <p className="text-sm text-black">
                     {language === 'np' 
                       ? "थप विवरणको लागि हाम्रो मानव संसाधन विभागमा +९७७-१-४२३४५६७ मा सम्पर्क गर्नुहोस्।" 
                       : "Contact our HR department directly at +977-1-4234567 for more details."}
                  </p>
               </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};