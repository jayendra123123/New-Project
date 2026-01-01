
import React from 'react';

const projects = [
  {
    title: "Food Donation Website",
    category: "MERN Stack",
    description: "A web platform that connects food donors with nearby NGOs using real-time location tracking, Google Maps integration, and push notifications to reduce food waste.",
    image: "leftover_to_lifeline.png",
    link: "https://fooddonat.netlify.app",
    github: "https://github.com/jayendra123123/Food-Donation",
    rotation: "rotate-1"
  },
  {
    title: "Plant Disease Identifier",
    category: "AI + Web",
    description: "Plant Disease Detection is a cutting-edge application that leverages machine learning algorithms to analyze images of plants and detect various diseases. Users can upload photos of their plants, and the app will provide instant feedback on potential issues, along with recommended treatments. This project showcases my skills in AI integration, image processing, and user-centered design.",
    image: "plant_disease_detection.png",
    link: "https://plant-gilt.vercel.app/",
    github: "https://github.com/jayendra123123/plant",
    rotation: "rotate-2"
  },
  {
    title: "Movie Meter",
    category: "React Application",
    description: "Movie Review is a React-based application that enables users to search for movies, view detailed information, and rate their favorites. It fetches live data from the TMDB API, displaying movie posters, release dates, genres, ratings, and overviews. The project emphasizes dynamic user interaction, responsive layout, and seamless API integration. Built with a minimalist UI and focused on performance, this project strengthened my frontend development skills and my ability to work with third-party APIs.",
    image: "movie-review.png",
    link: "https://movie-review-omega-seven.vercel.app/",
    github: "https://github.com/jayendra123123/movie-review",
    rotation: "rotate-3"
  }
];

const ProjectGrid = () => {
  return (
    <section id="work" className="w-full bg-white dark:bg-[#221f10] py-20 px-4 sm:px-8 border-t-4 border-dark-text dark:border-white/10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className={`group relative flex flex-col bg-white dark:bg-[#332f1d] p-3 pb-6 rounded-xl border-2 border-dark-text dark:border-white/20 shadow-comic hover:shadow-comic-hover hover:-translate-y-2 hover:rotate-0 transition-all duration-300 transform ${project.rotation}`}
            >
              <div 
                className="aspect-[4/3] w-full rounded-lg bg-cover bg-center border-2 border-dark-text mb-4 overflow-hidden relative"
                style={{ backgroundImage: `url("${project.image}")` }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="px-2 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-[#9c8e49] dark:text-yellow-200 uppercase tracking-wider">{project.category}</span>
                </div>
                <h3 className="text-2xl font-black leading-tight mb-2 group-hover:text-primary transition-colors dark:text-white">{project.title}</h3>
                <p className="text-sm font-medium text-dark-text/70 dark:text-white/70 line-clamp-2 mb-4">{project.description}</p>
                
                <div className="flex gap-3 pt-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-black border-2 border-dark-text dark:border-white/20 rounded-lg shadow-comic-sm hover:shadow-comic hover:-translate-y-1 transition-all text-sm font-bold text-dark-text dark:text-white"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary border-2 border-dark-text rounded-lg shadow-comic-sm hover:shadow-comic hover:-translate-y-1 transition-all text-sm font-bold text-dark-text"
                    >
                      <span className="material-symbols-outlined text-lg">rocket_launch</span>
                      Live Demo
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
