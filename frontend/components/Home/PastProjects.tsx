


import React, { useState } from 'react';
import { PAST_PROJECTS, PAST_PROJECTS_NP, TRANSLATIONS } from '../../constants';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { Modal } from '../Shared/Modal';
import { Button } from '../UI/Button';
import { Briefcase, ListPlus, FolderGit2 } from 'lucide-react';
import { fetchAPI, flattenStrapiResponse } from '../../utils/api';
import { Project, StrapiProject } from '../../types';

export const PastProjects: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const projects = language === 'np' ? PAST_PROJECTS_NP : PAST_PROJECTS;
  const [projects, setProjects] = useState<Project[]>(language === 'np' ? PAST_PROJECTS_NP : PAST_PROJECTS);

  React.useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchAPI<any>('/api/projects');
        const strapiItems = flattenStrapiResponse<StrapiProject>(data);

        if (strapiItems.length > 0) {
          const mappedItems: Project[] = strapiItems.map(item => {
             const isNepali = language === 'np';
             return {
                 id: item.id,
                 title: isNepali ? (item.title_np || item.title_en) : item.title_en,
                 client: isNepali ? (item.client_np || item.client_en) : item.client_en,
                 description: isNepali ? (item.description_np || item.description_en) : item.description_en
             };
          });
          setProjects(mappedItems);
        } else {
             setProjects(language === 'np' ? PAST_PROJECTS_NP : PAST_PROJECTS);
        }
      } catch (error) {
        console.error("Failed to load projects", error);
        setProjects(language === 'np' ? PAST_PROJECTS_NP : PAST_PROJECTS);
      }
    };
    loadProjects();
  }, [language]);

  // Show first 2 projects upfront
  const featuredProjects = projects.slice(0, 2);

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold mb-16 text-center text-black">
          {language === 'np' ? "हाम्रा विगतका परियोजनाहरू" : "Our Past Projects"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
                <div key={project.id} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-secondary transition-all duration-300 shadow-sm flex flex-col h-full group">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-green-50 p-4 rounded-full border border-secondary/20 group-hover:bg-secondary group-hover:text-white transition-colors">
                             <Briefcase className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold text-black group-hover:text-secondary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm font-sans font-bold text-gray-500 uppercase tracking-wide">
                                {t.clientLabel}: {project.client}
                            </p>
                        </div>
                    </div>
                    
                    <p className="text-black font-sans font-normal leading-relaxed text-justify flex-grow">
                        {project.description}
                    </p>
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
                {t.viewAllProjects}
                <ListPlus className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
             </Button>
        </div>

      </div>

      {/* Full Projects List Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={language === 'np' ? "हाम्रो परियोजना पोर्टफोलियो" : "Our Project Portfolio"}
        maxWidth="max-w-5xl"
      >
        <div className="space-y-8">
            <p className="text-lg text-black font-sans font-normal mb-8 leading-relaxed">
                {language === 'np' 
                  ? "हाम्रा प्राविधिक र नीतिगत हस्तक्षेपहरूको छनौट जसले प्रणालीगत परिवर्तन ल्याएको छ।" 
                  : "A selection of our technical and policy-level interventions that have driven systemic change."}
            </p>

             {projects.map((project) => (
                <div key={project.id} className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-gray-50 p-4 rounded-lg flex-shrink-0">
                            <FolderGit2 className="w-8 h-8 text-secondary" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-black mb-2">
                                {project.title}
                            </h3>
                             <div className="inline-block px-3 py-1 bg-green-50 text-secondary text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                                {t.clientLabel}: {project.client}
                            </div>
                            <p className="text-black font-sans font-normal leading-relaxed text-justify">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Modal>
    </section>
  );
};