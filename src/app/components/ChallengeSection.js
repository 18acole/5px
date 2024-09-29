'use client';
import { useEffect, useRef, useState } from 'react';

export default function ChallengeSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [transitionComplete, setTransitionComplete] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    let startScrollPosition = null;
    let animationDistance = window.innerHeight; // Initial setting

    const updateAnimationDistance = () => {
      animationDistance = window.innerHeight;
    };

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if the section is fully in view or if transition is already complete
      if ((rect.top <= 0 && rect.bottom >= viewportHeight) || transitionComplete) {
        if (startScrollPosition === null) {
          startScrollPosition = window.pageYOffset;
          updateAnimationDistance(); // Update animation distance when starting
        }
        
        const scrolled = window.pageYOffset - startScrollPosition;
        const progress = Math.min(1, Math.max(0, scrolled / animationDistance));
        setScrollProgress(progress);

        if (progress >= 0.99 && !transitionComplete) {
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
    window.addEventListener('resize', updateAnimationDistance);
    handleScroll(); // Set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateAnimationDistance);
    };
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
