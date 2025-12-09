import React, { useState, useEffect } from 'react';
import { PUBLICATIONS, TRANSLATIONS } from '../../constants';
import { Publication, FileType, StrapiPublication } from '../../types';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { Button } from '../UI/Button';
import { FileText, Link as LinkIcon, Download, Search, File, ExternalLink } from 'lucide-react';
import { fetchAPI, flattenStrapiResponse } from '../../utils/api';

export const PublicationList: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];
  const [filterType, setFilterType] = useState<FileType | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  // const items = PUBLICATIONS;
  const [items, setItems] = useState<Publication[]>([]);

  useEffect(() => {
    const loadPublications = async () => {
      try {
        const data = await fetchAPI<any>('/api/publications');
        const strapiItems = flattenStrapiResponse<StrapiPublication>(data);

        if (strapiItems.length > 0) {
           const mappedItems: Publication[] = strapiItems.map(item => {
              const isNepali = language === 'np';
              return {
                  id: item.id,
                  title: isNepali ? (item.title_np || item.title_en) : item.title_en,
                  author: isNepali ? (item.author_np || item.author_en) : item.author_en,
                  date: item.date,
                  type: (item.type?.toUpperCase() as FileType) || 'LINK',
                  url: item.external_url || '#', // In real app, this would point to media
                  description: isNepali ? (item.description_np || item.description_en) : item.description_en,
                  size: item.size || undefined
              };
           });
           setItems(mappedItems);
        } else {
             setItems(PUBLICATIONS);
        }
      } catch (error) {
        console.error("Failed to load publications", error);
        setItems(PUBLICATIONS);
      }
    };
    loadPublications();
  }, [language]);

  const filteredItems = items.filter((item) => {
    const matchesType = filterType === 'All' || item.type === filterType;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getIcon = (type: FileType) => {
    switch (type) {
      case 'PDF': return <FileText className="w-8 h-8 text-secondary" />;
      case 'DOCX': return <File className="w-8 h-8 text-secondary" />;
      case 'LINK': return <LinkIcon className="w-8 h-8 text-gray-500" />;
    }
  };

  const getFilterLabel = (ft: string) => {
    switch(ft) {
        case 'All': return t.filterAll;
        case 'PDF': return t.filterPDF;
        case 'DOCX': return t.filterDOCX;
        case 'LINK': return t.filterLink;
        default: return ft;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder={language === 'np' ? "प्रकाशनहरू खोज्नुहोस्..." : "Search publications..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded border border-gray-300 bg-white shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-black font-sans"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        
        <div className="flex space-x-2">
            {(['All', 'PDF', 'DOCX', 'LINK'] as const).map((ft) => (
                <button
                    key={ft}
                    onClick={() => setFilterType(ft)}
                    className={`px-4 py-2 text-sm font-sans font-bold rounded transition-colors ${filterType === ft ? 'bg-secondary text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                >
                    {getFilterLabel(ft)}
                </button>
            ))}
        </div>
      </div>

      {/* List */}
      <div className="space-y-6">
        {filteredItems.map((pub) => (
            <div key={pub.id} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="p-4 bg-gray-50 rounded-lg flex-shrink-0">
                    {getIcon(pub.type)}
                </div>
                
                <div className="flex-grow">
                    <h3 className="text-xl font-serif font-bold text-black mb-2">{pub.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-sans font-bold text-gray-500 mb-3">
                        <span>{pub.author}</span>
                        <span>•</span>
                        <span>{pub.date}</span>
                        {pub.size && (
                            <>
                                <span>•</span>
                                <span>{pub.size}</span>
                            </>
                        )}
                    </div>
                    <p className="text-black font-sans font-normal text-sm leading-relaxed max-w-2xl">
                        {pub.description}
                    </p>
                </div>

                <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                    <Button variant="outline" className="w-full md:w-auto flex items-center justify-center gap-2" onClick={() => window.open(pub.url, '_blank')}>
                        {pub.type === 'LINK' ? (
                            <>
                                {t.visitLink} <ExternalLink className="w-4 h-4" />
                            </>
                        ) : (
                            <>
                                {t.download} <Download className="w-4 h-4" />
                            </>
                        )}
                    </Button>
                </div>
            </div>
        ))}
        {filteredItems.length === 0 && (
            <p className="text-center text-gray-500 font-sans font-bold py-12">
                {language === 'np' ? "कुनै कागजात फेला परेन।" : "No documents found matching your criteria."}
            </p>
        )}
      </div>
    </div>
  );
};