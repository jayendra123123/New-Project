import React, { useState } from 'react';

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

  return (
    <section id="work" className="w-full bg-white dark:bg-[#221f10] py-20 px-4 sm:px-8 border-t-4 border-dark-text dark:border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-end gap-6 border-b-2 border-dashed border-dark-text/20 dark:border-white/20 pb-6">
          <div>
            <div className="inline-block px-3 py-1 bg-primary text-dark-text font-bold text-xs uppercase tracking-widest rounded mb-2 border-2 border-dark-text">Projects</div>
            <h2 className="text-4xl md:text-5xl font-black text-dark-text dark:text-white tracking-tight">My work</h2>
          </div>
          <a 
            className="flex items-center gap-2 text-lg font-bold text-dark-text dark:text-white hover:text-primary transition-colors group" 
            href="https://github.com/jayendra123123?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>

        {/* Project Selector Cards */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-bold text-dark-text dark:text-white uppercase tracking-widest">Select Project</p>
          
          <div className="flex flex-wrap gap-3 justify-start">
            {projects.map((proj, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedProject(idx)}
                className={`px-6 py-4 rounded-xl border-2 transition-all duration-300 transform cursor-pointer ${
                  selectedProject === idx
                    ? 'bg-primary text-dark-text border-dark-text shadow-comic scale-105'
                    : 'bg-white dark:bg-bg-card-dark text-dark-text dark:text-white border-dark-text/20 dark:border-white/20 hover:bg-primary/20 hover:border-primary hover:scale-105'
                }`}
              >
                <div className="font-bold text-sm">{proj.name}</div>
                <div className="text-xs opacity-75 mt-1">{proj.stack}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Preview Area */}
        <div className="flex flex-col items-center justify-center gap-12">
          
          {/* Devices Container - Side by Side Layout */}
          <div className="relative w-full flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4 px-4 lg:px-0">
            
            {/* iPhone Mockup - Left Side (Smaller, Support Character) */}
            <div className="relative w-full lg:w-auto flex justify-center flex-shrink-0 lg:flex-1 max-w-sm">
              <div className="relative bg-black rounded-[3rem] shadow-2xl w-80" style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
                
                {/* iPhone Outer Frame */}
                <div className="bg-black rounded-[3rem] p-2">
                  
                  {/* Screen Container */}
                  <div className="relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-black aspect-[9/19.5] flex flex-col border-8 border-black">
                    
                    {/* Notch with Camera */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50 flex items-center justify-center">
                      {/* Camera Housing */}
                      <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-900 rounded-full border border-gray-700"></div>
                      </div>
                    </div>

                    {/* Status Bar - iOS Style */}
                    <div className="bg-white dark:bg-black h-10 px-6 flex items-center justify-between text-xs font-semibold text-dark-text dark:text-white pt-1 mt-1">
                      <span className="text-sm font-bold">9:41</span>
                      <div className="flex gap-1 items-center">
                        {/* Signal Strength */}
                        <div className="flex gap-0.5">
                          <div className="w-4 h-4 border border-current rounded-l-sm"></div>
                          <div className="w-0.5 h-4 border-t border-b border-current"></div>
                          <div className="w-0.5 h-4 border-t border-b border-current"></div>
                          <div className="w-0.5 h-4 border-t border-b border-current"></div>
                          <div className="w-0.5 h-4 border-t border-b border-r border-current rounded-r-sm"></div>
                        </div>
                        {/* WiFi */}
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                        </svg>
                        {/* Battery */}
                        <div className="w-6 h-3 border border-current rounded-sm p-0.5 flex items-center">
                          <div className="flex-1 h-full bg-current rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* Safe Area Padding */}
                    <div className="flex-1 overflow-hidden bg-white dark:bg-gray-900 px-3 pt-2">
                      {/* Content */}
                      <iframe
                        src={project.mobileUrl}
                        className="w-full h-full border-0 transition-opacity duration-500 rounded-xl"
                        key={`mobile-${selectedProject}`}
                        loading="lazy"
                      />
                    </div>

                    {/* Home Indicator Bar */}
                    <div className="bg-white dark:bg-black h-7 flex items-center justify-center rounded-b-2xl">
                      <div className="w-32 h-1 bg-black dark:bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MacBook Mockup - Right Side (Larger, Main Focus) */}
            <div className="relative w-full lg:w-auto flex justify-center flex-shrink-0 lg:flex-1 z-20">
              <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
                
                {/* MacBook Screen Container */}
                <div className="bg-black rounded-t-3xl pt-1 px-1">
                  
                  {/* Screen */}
                  <div className="relative rounded-t-2xl overflow-hidden bg-white dark:bg-gray-950 aspect-[16/10] border-2 border-gray-800 flex flex-col">
                    
                    {/* macOS Menu Bar */}
                    <div className="bg-black/80 backdrop-blur-xl h-6 px-4 flex items-center justify-between text-white text-xs border-b border-gray-700/50">
                      {/* Left Side - Apple Logo and Menu Items */}
                      <div className="flex items-center gap-4">
                        <span className="text-lg">🍎</span>
                        <span className="font-semibold">Finder</span>
                        <span>File</span>
                        <span>Edit</span>
                        <span>View</span>
                      </div>
                      
                      {/* Right Side - System Menu */}
                      <div className="flex items-center gap-2">
                        {/* WiFi Icon */}
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                        </svg>
                        
                        {/* Battery Icon */}
                        <div className="w-5 h-3 border border-white rounded-sm p-0.5 flex items-center gap-0.5">
                          <div className="flex-1 h-full bg-white rounded-xs"></div>
                        </div>
                        
                        {/* Time */}
                        <span className="ml-2 font-medium">2:41</span>
                      </div>
                    </div>

                    {/* Window Content Area */}
                    <div className="flex-1 overflow-hidden bg-white dark:bg-gray-900 flex flex-col">
                      {/* Browser/App Tab Bar (Optional) */}
                      <div className="bg-gray-100 dark:bg-gray-800 h-10 px-4 flex items-center gap-3 border-b border-gray-300 dark:border-gray-700">
                        <button className="flex items-center gap-2 px-3 py-1 bg-white dark:bg-gray-700 rounded-t-lg text-sm font-medium text-dark-text dark:text-white border border-gray-300 dark:border-gray-600">
                          <span>◀</span>
                          <span>▶</span>
                          <span className="ml-1">🏠</span>
                        </button>
                        <div className="flex-1 flex items-center gap-2">
                          <div className="flex-1 px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600">
                            https://example.com
                          </div>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 overflow-hidden">
                        <iframe
                          src={project.desktopUrl}
                          className="w-full h-full border-0 transition-opacity duration-500"
                          key={selectedProject}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bezel */}
                <div className="h-10 bg-gradient-to-b from-gray-900 to-black rounded-b-3xl flex items-center justify-center border-t border-gray-700">
                  <div className="w-40 h-2 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-white dark:bg-black border-2 border-dark-text dark:border-white/20 rounded-lg shadow-comic-sm hover:shadow-comic hover:-translate-y-1 transition-all text-sm font-bold text-dark-text dark:text-white group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View Code
            </a>
            <a 
              href={project.desktopUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-primary border-2 border-dark-text rounded-lg shadow-comic-sm hover:shadow-comic hover:-translate-y-1 transition-all text-sm font-bold text-dark-text group"
            >
              <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">rocket_launch</span>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
