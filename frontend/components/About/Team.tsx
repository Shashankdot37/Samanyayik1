import React, { useState } from 'react';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { TRANSLATIONS, TEAM_MEMBERS, TEAM_MEMBERS_NP } from '../../constants';
import { TeamMember } from '../../types';
import { Modal } from '../Shared/Modal';

export const Team: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];
  const members = language === 'np' ? TEAM_MEMBERS_NP : TEAM_MEMBERS;
  
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-16 text-black">{t.ourTeamTitle}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => setSelectedMember(member)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedMember(member)}
            >
              <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-secondary transition-colors duration-300">
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-1 text-center group-hover:text-secondary transition-colors">{member.name}</h3>
              <p className="text-sm font-bold text-gray-600 text-center uppercase tracking-wide">{member.workingArea}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Member Detail Modal */}
      <Modal isOpen={!!selectedMember} onClose={() => setSelectedMember(null)} title={t.viewDetails}>
        {selectedMember && (
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                    <img 
                        src={selectedMember.image} 
                        alt={selectedMember.name} 
                        className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
                    />
                </div>
                <div className="w-full md:w-2/3 flex flex-col justify-center space-y-4">
                    <div>
                        <h3 className="text-3xl font-serif font-bold text-black">{selectedMember.name}</h3>
                        <p className="text-secondary font-bold text-lg uppercase tracking-wide">{selectedMember.position}</p>
                    </div>
                    
                    <div className="py-4 border-t border-b border-gray-100">
                         <p className="text-black font-normal leading-relaxed">
                            {selectedMember.description}
                         </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-start text-black font-bold">
                            <span className="w-24 text-gray-500 font-normal">Working Areas:</span>
                            <span className="flex-1">{selectedMember.workingArea}</span>
                        </div>
                        <div className="flex items-center text-black font-bold">
                            <span className="w-24 text-gray-500 font-normal">{t.phoneLabel}:</span>
                            <a href={`tel:${selectedMember.phoneNumber}`} className="hover:text-secondary">{selectedMember.phoneNumber}</a>
                        </div>
                         <div className="flex items-center text-black font-bold">
                            <span className="w-24 text-gray-500 font-normal">{t.emailLabel}:</span>
                            <a href={`mailto:${selectedMember.email}`} className="hover:text-secondary">{selectedMember.email}</a>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </Modal>
    </section>
  );
};
