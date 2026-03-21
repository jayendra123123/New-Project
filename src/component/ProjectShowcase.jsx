import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const projects = [
  {
    name: "Food Donation Website",
    stack: "MERN Stack",
    desktopUrl: "https://fooddonat.netlify.app",
    mobileUrl: "https://fooddonat.netlify.app",
    github: "https://github.com/jayendra123123/Food-Donation",
  },
  {
    name: "Plant Disease Identifier",
    stack: "AI + Web",
    desktopUrl: "https://plant-gilt.vercel.app/",
    mobileUrl: "https://plant-gilt.vercel.app/",
    github: "https://github.com/jayendra123123/plant",
  },
  {
    name: "Movie Meter",
    stack: "React Application",
    desktopUrl: "https://movie-review-omega-seven.vercel.app/",
    mobileUrl: "https://movie-review-omega-seven.vercel.app/",
    github: "https://github.com/jayendra123123/movie-review",
  }
];

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const project = projects[selectedProject];
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current[selectedProject],
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' }
    );
  }, [selectedProject]);

  return (
    <section id="work" className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-bg-dark dark:to-bg-dark/50 py-16 sm:py-24 md:py-32 px-4 sm:px-8 border-t-4 border-dark-text dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block px-4 sm:px-6 py-2 bg-primary/20 border-2 border-primary rounded-full mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-dark-text">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-dark-text dark:text-white mb-2 sm:mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-dark-text/70 dark:text-white/70 max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </div>

        {/* Project Selector Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 md:mb-16">
          {projects.map((proj, idx) => (
            <button
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              onClick={() => setSelectedProject(idx)}
              className={`group relative w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 rounded-2xl border-2 transition-all duration-300 transform cursor-pointer ${
                selectedProject === idx
                  ? 'bg-primary text-dark-text border-dark-text shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] scale-100 sm:scale-105'
                  : 'bg-white dark:bg-bg-card-dark text-dark-text dark:text-white border-dark-text/20 dark:border-white/20 hover:border-primary hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] sm:dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:scale-100 sm:hover:scale-105'
              }`}
              data-cursor="hover"
            >
              <div className="font-black text-base sm:text-lg">{proj.name}</div>
              <div className="text-xs sm:text-sm opacity-75 mt-1">{proj.stack}</div>
              {selectedProject === idx && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-dark-text rounded-full flex items-center justify-center">
                  <span className="text-primary text-xs">✓</span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Preview Area */}
        <div className="relative">
          {/* Main Preview Card */}
          <div className="bg-gradient-to-br from-white to-gray-100 dark:from-bg-card-dark dark:to-bg-dark rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-dark-text dark:border-white/20 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] sm:dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] p-4 sm:p-6 md:p-8 overflow-hidden">
            
            {/* Project Info */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-dark-text dark:text-white mb-1 sm:mb-2">{project.name}</h3>
              <p className="text-base sm:text-lg text-dark-text/70 dark:text-white/70 mb-3 sm:mb-4">{project.stack}</p>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.stack.split(',').map((tech, i) => (
                  <span key={i} className="px-3 sm:px-4 py-1 sm:py-2 bg-primary/20 border-2 border-primary rounded-full text-xs sm:text-sm font-bold text-dark-text">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Device Mockup */}
            <div className="relative w-full bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden border-3 sm:border-4 border-dark-text dark:border-white/20 shadow-lg mb-6 sm:mb-8" style={{ aspectRatio: '16 / 9', minHeight: '200px' }}>
              <iframe
                src={project.desktopUrl}
                title={`Preview of ${project.name}`}
                className="w-full h-full border-0"
                key={selectedProject}
                loading="lazy"
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-4 bg-white dark:bg-bg-card-dark border-2 border-dark-text dark:border-white/20 rounded-xl sm:rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] sm:dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] sm:dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all font-bold text-dark-text dark:text-white flex items-center justify-center gap-2"
                data-cursor="hover"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="hidden sm:inline">View Code</span>
                <span className="sm:hidden">Code</span>
              </a>
              <a 
                href={project.desktopUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-4 bg-primary border-2 border-dark-text rounded-xl sm:rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all font-bold text-dark-text flex items-center justify-center gap-2"
                data-cursor="hover"
              >
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform text-lg">rocket_launch</span>
                <span className="hidden sm:inline">Live Demo</span>
                <span className="sm:hidden">Demo</span>
              </a>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-primary/30 rounded-full blur-2xl"></div>
          <div className="absolute -z-10 -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/30 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
