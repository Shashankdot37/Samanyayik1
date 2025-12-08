

import React, { useState } from 'react';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { TRANSLATIONS, TEAM_MEMBERS, TEAM_MEMBERS_NP } from '../../constants';
import { TeamMember } from '../../types';
import { Modal } from '../Shared/Modal';
import { Facebook, Linkedin, Twitter, Mail, Phone, X } from 'lucide-react';

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
          {members.map((member) => (
            <div 
              key={member.id} 
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
              <p className="text-sm font-bold text-gray-600 text-center uppercase tracking-wide">{member.expertise}</p>
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
                        <div className="flex items-center text-black font-bold">
                            <span className="w-24 text-gray-500 font-normal">Expertise:</span>
                            {selectedMember.expertise}
                        </div>
                        <div className="flex items-center text-black font-bold">
                            <span className="w-24 text-gray-500 font-normal">{t.phoneLabel}:</span>
                            <a href={`tel:${selectedMember.phone}`} className="hover:text-secondary">{selectedMember.phone}</a>
                        </div>
                         <div className="flex items-center text-black font-bold">
                            <span className="w-24 text-gray-500 font-normal">{t.emailLabel}:</span>
                            <a href={`mailto:${selectedMember.email}`} className="hover:text-secondary">{selectedMember.email}</a>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        {selectedMember.socials.linkedin && (
                            <a href={selectedMember.socials.linkedin} className="p-2 bg-gray-100 rounded-full hover:bg-secondary hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        )}
                        {selectedMember.socials.twitter && (
                            <a href={selectedMember.socials.twitter} className="p-2 bg-gray-100 rounded-full hover:bg-secondary hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        )}
                        {selectedMember.socials.facebook && (
                             <a href={selectedMember.socials.facebook} className="p-2 bg-gray-100 rounded-full hover:bg-secondary hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        )}
      </Modal>
    </section>
  );
};