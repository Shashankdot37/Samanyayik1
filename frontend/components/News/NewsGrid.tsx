import React, { useState, useEffect } from 'react';
import { NEWS_ITEMS, TRANSLATIONS } from '../../constants';
import { NewsCategory, NewsItem, StrapiNewsItem } from '../../types';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { Button } from '../UI/Button';
import { Modal } from '../Shared/Modal';
import { ArrowRight, ExternalLink, Calendar, User } from 'lucide-react';
import { fetchAPI, flattenStrapiResponse, extractTextFromBlocks } from '../../utils/api';

export const NewsGrid: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];
  const [activeCategory, setActiveCategory] = useState<NewsCategory | 'All'>('All');
  const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null);
  const [newsItems, setNewsItems] = useState<NewsItem[]>(NEWS_ITEMS);

  useEffect(() => {
    const loadNews = async () => {
        try {
            const response = await fetchAPI<any>('/api/news');
            const strapiItems = flattenStrapiResponse<StrapiNewsItem>(response);
            
            if (strapiItems.length > 0) {
                const mappedItems: NewsItem[] = strapiItems.map(item => {
                    const isNepali = language === 'np';
                    // Fallback to English if Nepali content is missing/empty, or vice versa if needed
                    // For now, simple mapping based on current language
                    return {
                        id: item.id,
                        category: item.category,
                        date: item.date,
                        title: isNepali ? (item.title_np || item.title_en) : item.title_en,
                        description: isNepali ? (item.description_np || item.description_en) : item.description_en,
                        author: isNepali ? (item.author_np || item.author_en) : item.author_en,
                        // Strapi rich text to plain text or HTML. 
                        // For this UI, fullContent expects HTML string or plain text.
                        // We use the helper to get simple text representation for now.
                        fullContent: extractTextFromBlocks(isNepali ? item.content_np : item.content_en),
                        // Image is missing in provided API response, using placeholder or handled if provided
                        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000",
                        externalUrl: "" // Not in provided response schema
                    };
                });
                setNewsItems(mappedItems);
            }
        } catch (error) {
            console.error("Failed to load news from API, falling back to static data", error);
            // setNewsItems(NEWS_ITEMS); // Already default
        }
    };
    loadNews();
  }, [language]);

  const categories: (NewsCategory | 'All')[] = ['All', 'News', 'Legal Commentary', 'Blog'];

  const filteredNews = activeCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const handleReadMore = (item: NewsItem) => {
    if (item.category === 'News' && item.externalUrl) {
      window.open(item.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-sans font-bold text-sm transition-all duration-300 border-2 
                ${activeCategory === cat 
                  ? 'bg-secondary text-white border-secondary' 
                  : 'bg-white text-black border-gray-200 hover:border-secondary hover:text-secondary'}`}
            >
              {cat === 'All' ? 'All' : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-lg border-2 border-gray-100 overflow-hidden hover:border-secondary transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded text-xs font-sans font-bold text-black uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-xs font-sans font-bold text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1 text-secondary" />
                    {item.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-secondary" />
                    {item.date}
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-black mb-4 line-clamp-2 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-black font-sans font-normal text-sm line-clamp-3 mb-8 flex-grow leading-relaxed">
                  {item.description}
                </p>

                <Button 
                  variant="outline" 
                  className="w-full flex justify-center items-center group-hover:bg-secondary group-hover:text-white"
                  onClick={() => handleReadMore(item)}
                >
                  {t.readMore} 
                  {item.category === 'News' ? <ExternalLink className="ml-2 w-4 h-4" /> : <ArrowRight className="ml-2 w-4 h-4" />}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Modal for Blog/Commentary */}
      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} title={selectedItem?.category}>
        {selectedItem && (
          <article className="prose max-w-none">
            <img 
              src={selectedItem.image} 
              alt={selectedItem.title} 
              className="w-full h-96 object-cover rounded-lg mb-8 shadow-sm"
            />
            
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-gray-100">
               <div className="flex items-center text-sm font-sans font-bold text-black">
                  <User className="w-5 h-5 mr-2 text-secondary" />
                  <span className="text-gray-500 mr-1">Written by</span> {selectedItem.author}
               </div>
               <div className="flex items-center text-sm font-sans font-bold text-black">
                  <Calendar className="w-5 h-5 mr-2 text-secondary" />
                  {selectedItem.date}
               </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-8 leading-tight">
              {selectedItem.title}
            </h2>
            
            <div className="text-black font-sans font-normal leading-relaxed space-y-6 text-lg" dangerouslySetInnerHTML={{ __html: selectedItem.fullContent || selectedItem.description }} />
          </article>
        )}
      </Modal>
    </section>
  );
};