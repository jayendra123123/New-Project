import React, { useState, useEffect } from 'react';
import MobileProjects from './MobileProjects';
import DesktopProjects from './DesktopProjects';

const ProjectsShowcase = () => {
  const [isMobile, setIsMobile] = useState(() => {
    // Initial check
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return true;
  });

  useEffect(() => {
    // Update on mount and window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="projects" className="w-full bg-white dark:bg-[#221f10] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 border-t-4 border-dark-text dark:border-white/10">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 sm:px-6 py-2 bg-primary/20 border-2 border-primary rounded-full mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-dark-text">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-dark-text dark:text-white mb-3 sm:mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-dark-text/70 dark:text-white/70 max-w-2xl mx-auto">
            {isMobile
              ? 'Swipe through amazing projects I\'ve built'
              : 'Explore my projects with interactive hover effects'
            }
          </p>
        </div>

        {/* Conditional Rendering */}
        <div className="relative">
          {isMobile ? <MobileProjects /> : <DesktopProjects />}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
