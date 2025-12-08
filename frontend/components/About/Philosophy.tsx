


import React from 'react';
import { ABOUT_CONTENT, ABOUT_CONTENT_NP, TRANSLATIONS } from '../../constants';
import { BookOpen, Scale, Eye, BrainCircuit, Mic2, FileSearch } from 'lucide-react';
import { useAccessibility } from '../../contexts/AccessibilityContext';

export const Philosophy: React.FC = () => {
  const { language } = useAccessibility();
  const content = language === 'np' ? ABOUT_CONTENT_NP : ABOUT_CONTENT;
  const t = TRANSLATIONS[language];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Research Hub - Centered Layout */}
        <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-secondary mb-6">
                <BrainCircuit className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">{content.researchHub.title}</h2>
            <p className="text-xl text-gray-800 font-sans font-normal leading-relaxed mb-12">
                {content.researchHub.text}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-secondary transition-colors group">
                    <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                        <BookOpen className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-lg font-serif font-bold text-gray-900 mb-2">
                        {language === 'np' ? "नीति संक्षेपहरू" : "Policy Briefs"}
                    </h4>
                    <p className="text-gray-700 font-sans font-normal leading-relaxed">
                        {language === 'np' 
                          ? "समावेशी सुधारहरूका लागि उच्च-स्तरीय विधायी ढाँचाहरू र वकालत उपकरणहरू मस्यौदा गर्दै।" 
                          : "Drafting high-level legislative frameworks and advocacy tools for inclusive reforms."}
                    </p>
                 </div>
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-secondary transition-colors group">
                    <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                        <Scale className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-lg font-serif font-bold text-gray-900 mb-2">
                         {language === 'np' ? "ग्याप विश्लेषण" : "Gap Analysis"}
                    </h4>
                    <p className="text-gray-700 font-sans font-normal leading-relaxed">
                        {language === 'np' 
                          ? "कानूनी व्यवस्थाहरू र वास्तविक यथार्थ बीचको महत्वपूर्ण खाडल पहिचान गर्दै।" 
                          : "Identifying the critical void between de jure legal provisions and de facto reality."}
                    </p>
                 </div>
            </div>
        </div>

        {/* Approach - Split Layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-8">
                <h2 className="text-3xl font-serif font-bold text-gray-900">{content.approach.title}</h2>
                <p className="text-lg text-gray-800 font-sans font-normal leading-relaxed text-justify">
                    {content.approach.text}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3">
                         <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100">
                             <Mic2 className="w-5 h-5 text-secondary" />
                         </div>
                         <span className="text-gray-800 font-sans font-medium">
                            {language === 'np' ? "भोगाइ" : "Lived Experience"}
                         </span>
                    </div>
                     <div className="flex items-center gap-3">
                         <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100">
                             <FileSearch className="w-5 h-5 text-secondary" />
                         </div>
                         <span className="text-gray-800 font-sans font-medium">
                            {language === 'np' ? "अन्तरसम्बन्धित लेन्स" : "Intersectional Lens"}
                         </span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                    {(language === 'np' 
                        ? ['आघात-सुसूचित', 'पूर्ण नैतिक', 'हानि नगर्ने'] 
                        : ['Trauma-Informed', 'Strictly Ethical', 'Do No Harm']
                    ).map((tag) => (
                        <span key={tag} className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-sans font-normal hover:border-secondary transition-colors cursor-default">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Visual Highlight */}
            <div className="w-full lg:w-1/2">
                <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl border-l-8 border-secondary relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <Eye className="w-64 h-64" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                        "{language === 'np' ? "हाम्रो बारेमा हामी बिना केही पनि होइन" : "Nothing About Us Without Us"}"
                    </h3>
                    <div className="w-16 h-1 bg-secondary mb-6"></div>
                    <p className="text-lg text-gray-700 font-sans font-normal leading-relaxed">
                        {language === 'np' 
                          ? "हाम्रो नेतृत्वमा अपाङ्गता भएका व्यक्तिहरू र मानव अधिकार कानूनका विशेषज्ञहरू समावेश छन्। हामी अपाङ्गता, जात, लिङ्ग, र भूगोल जस्ता विभिन्न पहिचानहरू कसरी एकअर्कामा जोडिएर उत्पीडनका अनौठा रूपहरू सिर्जना गर्छन् भनेर बुझ्नको लागि आलोचनात्मक विचार र नारीवादी कानूनी सिद्धान्त जस्ता लेन्सहरू मार्फत कानूनी र नीतिगत मामिलाहरूको विश्लेषण गर्छौं।" 
                          : "Our leadership includes persons with disabilities and experts in human rights law. We analyze legal matters through critical lenses to understand how identities intersect to create unique forms of oppression."}
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};