import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Project data
const projectsData = [
  {
    id: 1,
    name: "Food Donation Website",
    category: "MERN Stack",
    shortDescription: "Connect food donors with NGOs using real-time tracking",
    fullDescription: "A web platform that connects food donors with nearby NGOs using real-time location tracking, Google Maps integration, and push notifications to reduce food waste.",
    image: "https://via.placeholder.com/400x300?text=Food+Donation",
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    desktopUrl: "https://fooddonat.netlify.app",
    github: "https://github.com/jayendra123123/Food-Donation",
    color: "from-green-400 to-emerald-600"
  },
  {
    id: 2,
    name: "Plant Disease Identifier",
    category: "AI + Web",
    shortDescription: "ML-powered plant disease detection from images",
    fullDescription: "Plant Disease Detection is a cutting-edge application that leverages machine learning algorithms to analyze images of plants and detect various diseases. Users can upload photos of their plants, and the app will provide instant feedback on potential issues, along with recommended treatments.",
    image: "https://via.placeholder.com/400x300?text=Plant+Disease",
    technologies: ['React', 'Python', 'TensorFlow', 'FastAPI'],
    desktopUrl: "https://plant-gilt.vercel.app/",
    github: "https://github.com/jayendra123123/plant",
    color: "from-yellow-400 to-orange-600"
  },
  {
    id: 3,
    name: "Movie Meter",
    category: "React Application",
    shortDescription: "Discover and rate movies with live TMDB API",
    fullDescription: "Movie Review is a React-based application that enables users to search for movies, view detailed information, and rate their favorites. It fetches live data from the TMDB API, displaying movie posters, release dates, genres, ratings, and overviews.",
    image: "https://via.placeholder.com/400x300?text=Movie+Meter",
    technologies: ['React', 'TMDB API', 'Tailwind CSS', 'Vercel'],
    desktopUrl: "https://movie-review-omega-seven.vercel.app/",
    github: "https://github.com/jayendra123123/movie-review",
    color: "from-red-400 to-pink-600"
  },
  {
    id: 4,
    name: "E-Commerce Platform",
    category: "Full Stack",
    shortDescription: "Complete shopping experience with payments",
    fullDescription: "A modern e-commerce platform with product catalog, shopping cart, secure payments, and order management. Features include user authentication, product reviews, and admin dashboard.",
    image: "https://via.placeholder.com/400x300?text=E-Commerce",
    technologies: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    desktopUrl: "#",
    github: "#",
    color: "from-blue-400 to-indigo-600"
  },
  {
    id: 5,
    name: "Task Management App",
    category: "React + Firebase",
    shortDescription: "Organize tasks with real-time synchronization",
    fullDescription: "A productivity app that helps users manage their daily tasks with timeline views, priority system, and real-time updates across devices using Firebase.",
    image: "https://via.placeholder.com/400x300?text=Task+Manager",
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'React Router'],
    desktopUrl: "#",
    github: "#",
    color: "from-purple-400 to-violet-600"
  },
  {
    id: 6,
    name: "Weather Dashboard",
    category: "React Application",
    shortDescription: "Real-time weather with location-based forecasts",
    fullDescription: "A beautiful weather application that shows current weather, hourly forecasts, and weekly predictions. Supports multiple locations and includes severe weather alerts.",
    image: "https://via.placeholder.com/400x300?text=Weather+App",
    technologies: ['React', 'OpenWeather API', 'Geolocation API', 'Chart.js'],
    desktopUrl: "#",
    github: "#",
    color: "from-cyan-400 to-blue-600"
  }
];

// Mobile Carousel Component
const MobileCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    const isLeftSwipe = diff > 50;
    const isRightSwipe = diff < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="space-y-4">
      {/* Modern Card Carousel */}
      <div
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative overflow-hidden rounded-3xl border-3 border-dark-text dark:border-white/20 shadow-2xl"
      >
        {/* Full Height Image with Content Overlay */}
        <div className="relative aspect-[9/12] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={currentProject.image}
              alt={currentProject.name}
              className="w-full h-full object-cover"
            />
            {/* Multi-layer Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${currentProject.color} opacity-50`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          </div>

          {/* Content Overlay - Floating from Bottom */}
          <div className="absolute inset-0 flex flex-col justify-between p-5">
            {/* Top Section - Category and Counter */}
            <div className="flex items-start justify-between">
              <div className="px-3 py-1.5 bg-primary border-2 border-dark-text rounded-xl backdrop-blur-sm">
                <span className="text-xs font-black uppercase text-dark-text">{currentProject.category}</span>
              </div>
              <div className="px-3 py-1.5 bg-white/20 border-2 border-white/40 rounded-xl backdrop-blur-sm">
                <span className="text-xs font-black text-white">{currentIndex + 1}/{projects.length}</span>
              </div>
            </div>

            {/* Bottom Section - Project Details */}
            <div className="space-y-4">
              {/* Title */}
              <div>
                <h3 className="text-2xl font-black text-white mb-2 leading-tight drop-shadow-lg">
                  {currentProject.name}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed drop-shadow-md">
                  {currentProject.shortDescription}
                </p>
              </div>

              {/* Technologies Pills */}
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-white/20 border border-white/40 rounded-full text-xs font-bold text-white backdrop-blur-sm hover:bg-white/30 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons - Bottom */}
              <div className="flex gap-3 pt-2">
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-white/20 border-2 border-white/40 rounded-xl text-white font-bold text-sm backdrop-blur-sm hover:bg-white/30 active:scale-95 transition-all flex items-center justify-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Code
                </a>
                <a
                  href={currentProject.desktopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-primary border-2 border-dark-text rounded-xl text-dark-text font-bold text-sm hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-1"
                >
                  <span className="material-symbols-outlined text-lg">rocket_launch</span>
                  Demo
                </a>
              </div>
            </div>
          </div>

          {/* Swipe Hint - First Slide Only */}
          {currentIndex === 0 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="flex gap-2 items-center text-white drop-shadow-lg">
                <span className="material-symbols-outlined text-xl">touch_app</span>
              </div>
            </div>
          )}
        </div>

        {/* Side Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 border-2 border-white/40 rounded-full flex items-center justify-center hover:bg-white/30 active:scale-90 backdrop-blur-sm transition-all z-20"
        >
          <span className="material-symbols-outlined text-white text-2xl">arrow_back</span>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 border-2 border-white/40 rounded-full flex items-center justify-center hover:bg-white/30 active:scale-90 backdrop-blur-sm transition-all z-20"
        >
          <span className="material-symbols-outlined text-white text-2xl">arrow_forward</span>
        </button>
      </div>

      {/* Progress Bar and Dots */}
      <div className="space-y-3">
        {/* Linear Progress Bar */}
        <div className="h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden border border-dark-text/20 dark:border-white/20">
          <div
            className="h-full bg-gradient-to-r from-primary to-yellow-400 transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
          ></div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-1.5">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? 'bg-primary w-3 h-3 scale-125'
                  : 'bg-gray-300 dark:bg-white/20 w-2 h-2 hover:bg-gray-400 dark:hover:bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Progress Text */}
        <p className="text-center text-xs font-bold text-dark-text/60 dark:text-white/60 uppercase tracking-wider">
          Slide {currentIndex + 1} of {projects.length}
        </p>
      </div>
    </div>
  );
};

// Desktop Grid Component
const DesktopGrid = ({ projects }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="group relative bg-white dark:bg-bg-card-dark rounded-2xl border-2 border-dark-text dark:border-white/20 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
        >
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-40 transition-all duration-300`}></div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-primary border-2 border-dark-text rounded-lg">
              <span className="text-xs font-black uppercase text-dark-text">{project.category}</span>
            </div>

            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 bg-dark-text/80 dark:bg-black/80 flex items-center justify-center gap-3 transition-all duration-300 ${
                hoveredId === project.id ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-black border-2 border-dark-text dark:border-white/20 rounded-full hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6 text-dark-text" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={project.desktopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary border-2 border-dark-text rounded-full hover:scale-110 transition-transform"
              >
                <span className="material-symbols-outlined text-dark-text">rocket_launch</span>
              </a>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-5">
            <h3 className="text-xl font-black text-dark-text dark:text-white mb-2 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-dark-text/70 dark:text-white/70 mb-4 line-clamp-2">
              {project.shortDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-primary/20 border border-primary rounded text-xs font-bold text-dark-text dark:text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Hover Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                hoveredId === project.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-xs text-dark-text/60 dark:text-white/60 mb-3 pb-3 border-t border-dark-text/20 dark:border-white/10 pt-3">
                {project.fullDescription}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Responsive Component
const ResponsiveProjects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="projects" className="w-full bg-white dark:bg-[#221f10] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 border-t-4 border-dark-text dark:border-white/10">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="inline-block px-4 sm:px-6 py-2 bg-primary/20 border-2 border-primary rounded-full mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-dark-text">Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-dark-text dark:text-white mb-3 sm:mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-dark-text/70 dark:text-white/70 max-w-2xl mx-auto">
            {isMobile 
              ? 'Swipe to explore my latest projects and creative solutions'
              : 'Hover over projects to see more details and access links'
            }
          </p>
        </div>

        {/* Dynamic Content */}
        {isMobile ? (
          <MobileCarousel projects={projectsData} />
        ) : (
          <DesktopGrid projects={projectsData} />
        )}

        {/* CTA Button */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="https://github.com/jayendra123123?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-yellow-400 border-2 border-dark-text rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all font-bold text-dark-text"
          >
            <span>View All Projects on GitHub</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveProjects;
