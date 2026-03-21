import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: -currentIndex * 100 + '%',
        duration: 0.5,
        ease: 'power2.inOut'
      });
    }
  }, [currentIndex]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={sliderRef} className="flex">
        {projects.map((project, index) => (
          <div key={index} className="min-w-full px-4">
            <div className="bg-white dark:bg-bg-card-dark p-6 rounded-xl border-4 border-dark-text dark:border-white/20">
              <h3 className="text-2xl font-black mb-4">{project.name}</h3>
              <p className="text-dark-text/70 dark:text-white/70">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center"
      >
        →
      </button>
    </div>
  );
};

export default ProjectCarousel;
