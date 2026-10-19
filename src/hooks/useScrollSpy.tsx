import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface UseScrollSpyProps {
  sectionIds: string[];
  rootMargin?: string;
  threshold?: number;
}

export const useScrollSpy = ({ 
  sectionIds, 
  rootMargin = '-20% 0px -80% 0px',
  threshold = 0.1 
}: UseScrollSpyProps) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          
          // Update URL hash without scrolling
          if (location.pathname === '/' && window.location.hash !== `#${sectionId}`) {
            window.history.replaceState(null, '', `#${sectionId}`);
          }
        }
      });
    };

    // Create observers for each section
    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(observerCallback, {
          rootMargin,
          threshold
        });
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, rootMargin, threshold, location.pathname]);

  return activeSection;
};