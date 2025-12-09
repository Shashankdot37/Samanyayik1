
import React, { useState, useEffect, useCallback } from 'react';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { TRANSLATIONS, TESTIMONIALS } from '../../constants';
import { Quote, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { fetchAPI, flattenStrapiResponse, extractTextFromBlocks } from '../../utils/api';
import { Testimonial, StrapiTestimonial } from '../../types';

export const Testimonials: React.FC = () => {
  const { language } = useAccessibility();
  const t = TRANSLATIONS[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);


  // If only 1 testimonial, don't play
  const shouldAnimate = testimonials.length > 1;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
     const loadTestimonials = async () => {
       try {
         const data = await fetchAPI<any>('/api/testimonials');
         const strapiItems = flattenStrapiResponse<StrapiTestimonial>(data);
         
         if (strapiItems.length > 0) {
            const mappedItems: Testimonial[] = strapiItems.map(item => {
               const isNepali = language === 'np';
               return {
                   id: item.id,
                   name: isNepali ? (item.name_np || item.name_en) : item.name_en,
                   role: isNepali ? (item.role_np || item.role_en) : item.role_en,
                   text: extractTextFromBlocks(isNepali ? (item.testimonial_np || item.testimonial_en) : item.testimonial_en)
               };
            });
            setTestimonials(mappedItems);
         }
       } catch (error) {
         console.error("Failed to load testimonials", error);
       }
     };
     loadTestimonials();
  }, [language]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && shouldAnimate) {
      interval = setInterval(nextSlide, 8000); // 8 seconds per slide
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide, shouldAnimate]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  if (testimonials.length === 0) return null;

  return (
    <section 
        className="py-24 px-4 bg-white border-t border-gray-200"
        aria-labelledby="testimonials-title"
    >
      <div className="max-w-7xl mx-auto">
        <h2 id="testimonials-title" className="text-4xl font-serif font-bold text-center mb-16 text-black">
            {t.testimonialsTitle}
        </h2>

        <div 
            className="max-w-4xl mx-auto relative group"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
            onKeyDown={handleKeyDown}
        >
            {/* Carousel Container */}
            <div 
                className="bg-white border-2 border-gray-100 rounded-2xl p-10 md:p-16 shadow-lg hover:border-secondary transition-colors duration-300 relative min-h-[300px] flex flex-col items-center justify-center text-center overflow-hidden"
                role="region" 
                aria-roledescription="carousel"
                aria-label="Client Testimonials Carousel"
            >
                {/* Decorative Quote Icon */}
                <div className="absolute top-6 left-6 text-green-50 z-0">
                    <Quote className="w-20 h-20 transform rotate-180" fill="currentColor" />
                </div>

                {/* Content */}
                <div 
                    className="relative z-10 w-full animate-fade-in"
                    key={currentIndex} // Triggers animation on change
                >
                    <p className="text-xl md:text-2xl font-sans font-normal text-gray-900 mb-8 leading-relaxed">
                        "{testimonials[currentIndex].text}"
                    </p>
                    
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-1 bg-secondary mb-4 rounded-full"></div>
                        <h3 className="text-2xl font-serif font-bold text-black mb-1">
                            {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-sm font-sans font-bold text-secondary uppercase tracking-widest">
                            {testimonials[currentIndex].role}
                        </p>
                    </div>
                </div>

                 {/* Pause/Play Toggle for Accessibility */}
                 {shouldAnimate && (
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="absolute top-4 right-4 p-2 text-gray-300 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded-full z-20"
                        aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
                    >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                 )}
            </div>

            {/* Controls - Only visible if more than 1 item */}
            {shouldAnimate && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -left-5 md:-left-16 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md border border-gray-200 hover:bg-secondary hover:text-white hover:border-secondary transition-all focus:outline-none focus:ring-2 focus:ring-secondary z-20"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -right-5 md:-right-16 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md border border-gray-200 hover:bg-secondary hover:text-white hover:border-secondary transition-all focus:outline-none focus:ring-2 focus:ring-secondary z-20"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary ${
                                    index === currentIndex 
                                    ? 'w-8 bg-secondary' 
                                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                                aria-current={index === currentIndex ? "true" : "false"}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
      </div>
    </section>
  );
};
