



import React, { useState } from 'react';
import { FAQ_ITEMS, FAQ_ITEMS_NP, TRANSLATIONS } from '../../constants';
import { FAQCategory } from '../../types';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

export const FAQList: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];
  const items = language === 'np' ? FAQ_ITEMS_NP : FAQ_ITEMS;
  
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Translate category names for display
  const getCategoryLabel = (cat: string) => {
    if (language === 'en') return cat;
    switch(cat) {
      case 'All': return 'सबै';
      case 'General': return 'सामान्य';
      case 'Legal Services': return 'कानूनी सेवा';
      case 'Rights & Advocacy': return 'अधिकार र वकालत';
      case 'Research & Policy': return 'अनुसन्धान र नीति';
      case 'Accessibility': return 'पहुँचयोग्यता';
      case 'Labor Law': return 'श्रम कानून';
      case 'Privacy & Ethics': return 'गोपनीयता र नैतिकता';
      default: return cat;
    }
  }

  const categories = [
    'All', 
    'General', 
    'Legal Services', 
    'Rights & Advocacy', 
    'Research & Policy', 
    'Accessibility', 
    'Labor Law', 
    'Privacy & Ethics'
  ];

  const filteredFAQs = items.filter((item) => {
    // Note: Category matching uses the English key from the data structure, 
    // but the UI buttons will display translated labels.
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="relative mb-12">
        <input
          type="text"
          placeholder={t.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-200 bg-white shadow-sm focus:border-secondary focus:ring-2 focus:ring-green-100 outline-none transition-all text-lg text-black font-sans"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
            className={`px-5 py-2 rounded-full font-sans font-bold text-sm transition-all duration-300 border-2 
              ${activeCategory === cat 
                ? 'bg-secondary text-white border-secondary' 
                : 'bg-white text-black border-gray-200 hover:border-secondary hover:text-secondary'}`}
          >
            {getCategoryLabel(cat)}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-6">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((item) => (
            <div 
              key={item.id} 
              className={`border-2 rounded-lg bg-white transition-all duration-300 ${openIndex === item.id ? 'border-secondary shadow-md' : 'border-gray-100 hover:border-gray-300'}`}
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 rounded-lg"
                aria-expanded={openIndex === item.id}
              >
                <span className={`text-xl font-serif font-bold ${openIndex === item.id ? 'text-secondary' : 'text-black'}`}>
                  {item.question}
                </span>
                {openIndex === item.id ? (
                  <ChevronUp className="w-6 h-6 text-secondary flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === item.id ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 py-8 text-black font-sans font-normal leading-relaxed border-t border-gray-100 mt-4 text-lg bg-gray-50/30">
                  {item.answer}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-500 font-sans font-bold">
            {language === 'np' ? "तपाईंको खोजीसँग मेल खाने कुनै प्रश्न फेला परेन।" : "No questions found matching your search."}
          </div>
        )}
      </div>
    </div>
  );
};