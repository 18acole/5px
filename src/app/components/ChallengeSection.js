'use client';
import { useEffect, useRef } from 'react';

export default function ChallengeSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    
    // Set the content height to 200vh (2 times the viewport height)
    content.style.height = '200vh';

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollIntoSection = window.innerHeight - rect.top;
      const sectionHeight = section.offsetHeight;

      // Start fading only after the section is fully in view
      if (scrollIntoSection >= window.innerHeight) {
        const scrollableDistance = sectionHeight - window.innerHeight;
        const scrollProgress = (scrollIntoSection - window.innerHeight) / scrollableDistance;
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

        const color = Math.round(255 * (1 - clampedProgress));
        section.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
      } else {
        section.style.backgroundColor = 'rgb(255, 255, 255)'; // White
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen sticky top-0 transition-colors duration-100 ease-in-out"
    >
      <div ref={contentRef} className="h-[200vh]">
        {/* Content will be added here later */}
      </div>
    </section>
  );
}
