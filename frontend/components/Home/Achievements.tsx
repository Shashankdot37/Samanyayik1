



import React, { useState, useEffect } from 'react';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { TRANSLATIONS, ACHIEVEMENT_CASES, ACHIEVEMENT_CASES_NP } from '../../constants';
import { AchievementCase, StrapiAchievement } from '../../types';
import { Trophy, Scale, AlertTriangle, Gavel, CheckCircle2, ListPlus } from 'lucide-react';
import { Button } from '../UI/Button';
import { Modal } from '../Shared/Modal';
import { fetchAPI, flattenStrapiResponse, extractTextFromBlocks } from '../../utils/api';

export const Achievements: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const cases = language === 'np' ? ACHIEVEMENT_CASES_NP : ACHIEVEMENT_CASES;
  const [cases, setCases] = useState<AchievementCase[]>(language === 'np' ? ACHIEVEMENT_CASES_NP : ACHIEVEMENT_CASES);

  useEffect(() => {
    const loadAchievements = async () => {
        try {
            const response = await fetchAPI<any>('/api/achievements');
            const strapiItems = flattenStrapiResponse<StrapiAchievement>(response);

            if (strapiItems.length > 0) {
                const mappedItems: AchievementCase[] = strapiItems.map(item => {
                    const isNepali = language === 'np';
                    return {
                        id: item.id,
                        title: isNepali ? (item.title_np || item.title_en) : item.title_en,
                        caseTitle: isNepali ? (item.case_title_np || item.case_title_en) : item.case_title_en,
                        challenge: extractTextFromBlocks(isNepali ? item.challenge_np : item.challenge_en),
                        action: extractTextFromBlocks(isNepali ? item.action_np : item.action_en),
                        outcome: extractTextFromBlocks(isNepali ? item.outcome_np : item.outcome_en)
                    };
                });
                setCases(mappedItems);
            }
        } catch (error) {
            console.error("Failed to load achievements from API, using static data", error);
            setCases(language === 'np' ? ACHIEVEMENT_CASES_NP : ACHIEVEMENT_CASES);
        }
    };
    loadAchievements();
  }, [language]);

  // Show first 2 achievements upfront
  const featuredCases = cases.slice(0, 2);

  return (
    <section className="py-16 md:py-24 px-4 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold mb-16 text-center text-black">{t.achievementsTitle}</h2>

        <div className="space-y-12">
            {featuredCases.map((achievement) => (
                <div key={achievement.id} className="bg-white border-2 border-gray-100 rounded-2xl p-8 md:p-12 shadow-sm hover:border-secondary transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-12 border-b border-gray-100 pb-8">
                        <div className="bg-green-50 p-5 rounded-full border border-secondary/20 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                            <Trophy className="w-10 h-10 text-secondary group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-serif font-bold text-black mb-3">
                                {achievement.title}
                            </h3>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                                <Scale className="w-5 h-5 text-secondary" />
                                <span className="text-black font-sans font-bold text-sm md:text-base">
                                    {t.caseTitleLabel}: {achievement.caseTitle}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                        {/* Vertical divider lines for desktop */}
                        <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-gray-100"></div>
                        <div className="hidden md:block absolute top-0 bottom-0 right-1/3 w-px bg-gray-100"></div>

                        {/* Challenge */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-black font-serif font-bold text-xl">
                                <div className="p-2 bg-red-50 rounded-full">
                                    <AlertTriangle className="w-5 h-5 text-red-600" />
                                </div>
                                {t.challengeLabel}
                            </div>
                            <p className="text-black font-sans font-normal leading-relaxed text-sm md:text-base text-justify">
                                {achievement.challenge}
                            </p>
                        </div>

                        {/* Action */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-black font-serif font-bold text-xl">
                                <div className="p-2 bg-blue-50 rounded-full">
                                    <Gavel className="w-5 h-5 text-blue-700" />
                                </div>
                                {t.actionLabel}
                            </div>
                            <p className="text-black font-sans font-normal leading-relaxed text-sm md:text-base text-justify">
                                {achievement.action}
                            </p>
                        </div>

                        {/* Outcome */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-black font-serif font-bold text-xl">
                                <div className="p-2 bg-green-50 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                                </div>
                                {t.outcomeLabel}
                            </div>
                            <p className="text-black font-sans font-normal leading-relaxed text-sm md:text-base text-justify">
                                {achievement.outcome}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
             <Button 
                variant="outline" 
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-4 text-lg group flex items-center justify-center mx-auto"
            >
                {t.viewAllAchievements}
                <ListPlus className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
             </Button>
        </div>

      </div>

      {/* Full Achievements List Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={t.achievementsTitle}
        maxWidth="max-w-6xl"
      >
        <div className="space-y-16">
            <p className="text-lg text-black font-sans font-normal mb-8 leading-relaxed max-w-3xl">
                {language === 'np' 
                  ? "न्यायप्रति हाम्रो फर्मको समर्पणको विस्तृत अभिलेख, जसले कानूनी नजिरहरूलाई आकार दिने र हाम्रा ग्राहकहरूको अधिकारको रक्षा गर्ने ऐतिहासिक विजयहरू प्रदर्शन गर्दछ।" 
                  : "A comprehensive record of our firm's dedication to justice, showcasing landmark victories that have shaped legal precedents and defended the rights of our clients."}
            </p>

             {cases.map((achievement, index) => (
                <div key={achievement.id} className="bg-white border-b-2 border-gray-100 pb-16 last:border-0 last:pb-0">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-8">
                        <div className="bg-green-50 p-4 rounded-full border border-secondary/20">
                            <Trophy className="w-8 h-8 text-secondary" />
                        </div>
                        <div>
                             <div className="text-sm font-sans font-bold text-gray-500 uppercase tracking-wide mb-1">
                                {language === 'np' ? `केस स्टडी #${index + 1}` : `Case Study #${index + 1}`}
                             </div>
                            <h3 className="text-2xl font-serif font-bold text-black mb-2">
                                {achievement.title}
                            </h3>
                            <div className="inline-flex items-center gap-2 text-gray-700 font-sans font-bold text-sm">
                                <Scale className="w-4 h-4 text-secondary" />
                                <span>{t.caseTitleLabel}: {achievement.caseTitle}</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <div className="bg-red-50/50 p-6 rounded-lg border border-red-100">
                             <div className="flex items-center gap-2 mb-3 text-red-800 font-bold font-serif uppercase tracking-wide text-sm">
                                <AlertTriangle className="w-4 h-4" /> {t.challengeLabel}
                             </div>
                             <p className="text-black font-sans font-normal text-sm leading-relaxed text-justify">{achievement.challenge}</p>
                         </div>
                         <div className="bg-blue-50/50 p-6 rounded-lg border border-blue-100">
                             <div className="flex items-center gap-2 mb-3 text-blue-800 font-bold font-serif uppercase tracking-wide text-sm">
                                <Gavel className="w-4 h-4" /> {t.actionLabel}
                             </div>
                             <p className="text-black font-sans font-normal text-sm leading-relaxed text-justify">{achievement.action}</p>
                         </div>
                         <div className="bg-green-50/50 p-6 rounded-lg border border-green-100">
                             <div className="flex items-center gap-2 mb-3 text-green-800 font-bold font-serif uppercase tracking-wide text-sm">
                                <CheckCircle2 className="w-4 h-4" /> {t.outcomeLabel}
                             </div>
                             <p className="text-black font-sans font-normal text-sm leading-relaxed text-justify">{achievement.outcome}</p>
                         </div>
                    </div>
                </div>
            ))}
        </div>
      </Modal>
    </section>
  );
};