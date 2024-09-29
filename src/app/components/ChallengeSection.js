'use client';
import { useEffect, useRef, useState } from 'react';

export default function ChallengeSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [transitionComplete, setTransitionComplete] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const animationDistance = window.innerHeight; // Distance over which animation occurs
    let startScrollPosition = null;
    
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      
      // Check if the section is fully in view or if transition is already complete
      if ((rect.top <= 0 && rect.bottom >= window.innerHeight) || transitionComplete) {
        if (startScrollPosition === null) {
          startScrollPosition = window.scrollY;
        }
        
        const scrolled = window.scrollY - startScrollPosition;
        const progress = Math.min(1, Math.max(0, scrolled / animationDistance));
        setScrollProgress(progress);

        if (progress === 1 && !transitionComplete) {
          setTransitionComplete(true);
        }
      } else if (rect.top > 0) {
        // Reset only if scrolling back up to the top
        startScrollPosition = null;
        setScrollProgress(0);
        setTransitionComplete(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [transitionComplete]);

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
