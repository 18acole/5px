'use client';
import { useEffect, useRef, useState } from 'react';

export default function ChallengeSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    let animationDistance = window.innerHeight;
    let startScrollPosition = null;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if the section is fully in view
      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        if (startScrollPosition === null) {
          startScrollPosition = window.pageYOffset;
        }
        
        const scrolled = window.pageYOffset - startScrollPosition;
        const progress = Math.min(1, Math.max(0, scrolled / animationDistance));
        setScrollProgress(progress);
      } else if (rect.top > 0) {
        // Reset when scrolling back up
        startScrollPosition = null;
        setScrollProgress(0);
      }
    };

    const handleResize = () => {
      animationDistance = window.innerHeight;
      startScrollPosition = null;
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll(); // Set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const colorValue = Math.round(255 * (1 - scrollProgress));
  const backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

  return (
    <section 
      ref={sectionRef} 
      className="h-screen sticky top-0"
      style={{ backgroundColor }}
    >
      <div className="h-full flex items-center justify-center">
        <h2 className="text-4xl font-bold" style={{ color: scrollProgress > 0.5 ? 'white' : 'black' }}>
          Challenge Section
        </h2>
      </div>
    </section>
  );
}
