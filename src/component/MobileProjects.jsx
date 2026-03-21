import React, { useState, useRef, useEffect } from 'react';

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
    fullDescription: "Plant Disease Detection is a cutting-edge application that leverages machine learning algorithms to analyze images of plants and detect various diseases.",
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
    fullDescription: "Movie Review is a React-based application that enables users to search for movies, view detailed information, and rate their favorites.",
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
    fullDescription: "A modern e-commerce platform with product catalog, shopping cart, secure payments, and order management.",
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
    fullDescription: "A productivity app that helps users manage their daily tasks with timeline views, priority system, and real-time updates.",
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
    fullDescription: "A beautiful weather application that shows current weather, hourly forecasts, and weekly predictions.",
    image: "https://via.placeholder.com/400x300?text=Weather+App",
    technologies: ['React', 'OpenWeather API', 'Geolocation API', 'Chart.js'],
    desktopUrl: "#",
    github: "#",
    color: "from-cyan-400 to-blue-600"
  }
];

const MobileProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const scrollRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const currentProject = projectsData[currentIndex];

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const handlePrevious = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handleTouchStart = (e) => {
    setAutoPlay(false);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }
  };

  const handleDotClick = (index) => {
    setAutoPlay(false);
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Hero Carousel */}
      <div
        ref={scrollRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative rounded-3xl border-3 border-dark-text dark:border-white/20 overflow-hidden shadow-2xl h-[600px]"
      >
        {/* Hero Image with Overlays */}
        <img
          src={currentProject.image}
          alt={currentProject.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlays */}
        <div className={`absolute inset-0 bg-gradient-to-t ${currentProject.color} opacity-50`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20"></div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/40 to-transparent blur-2xl"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          {/* Top Badge */}
          <div className="flex items-start justify-between">
            <div className="inline-block px-4 py-2 bg-primary border-2 border-dark-text rounded-xl font-black text-xs uppercase text-dark-text">
              {currentProject.category}
            </div>
            <div className="text-right">
              <div className="inline-block px-3 py-2 bg-white/10 border-2 border-white/30 rounded-xl backdrop-blur-sm">
                <span className="text-sm font-black text-white">{currentIndex + 1}/{projectsData.length}</span>
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="space-y-5">
            {/* Title & Description */}
            <div>
              <h2 className="text-3xl font-black text-white mb-2 leading-tight drop-shadow-2xl">
                {currentProject.name}
              </h2>
              <p className="text-white/95 text-sm leading-relaxed drop-shadow-lg max-h-16 overflow-hidden">
                {currentProject.shortDescription}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {currentProject.technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white/15 border border-white/40 rounded-lg text-xs font-bold text-white backdrop-blur-md hover:bg-white/25 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-white/20 border-2 border-white/40 rounded-xl text-white font-bold text-sm backdrop-blur-md hover:bg-white/30 active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Code
              </a>
              <a
                href={currentProject.desktopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-gradient-to-r from-primary to-yellow-400 border-2 border-dark-text rounded-xl text-dark-text font-bold text-sm hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span className="material-symbols-outlined text-lg group-hover:scale-125 transition-transform">rocket_launch</span>
                Live
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 border-2 border-white/40 rounded-full flex items-center justify-center hover:bg-white/30 active:scale-90 backdrop-blur-md transition-all z-20 group"
        >
          <span className="material-symbols-outlined text-white text-2xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 border-2 border-white/40 rounded-full flex items-center justify-center hover:bg-white/30 active:scale-90 backdrop-blur-md transition-all z-20 group"
        >
          <span className="material-symbols-outlined text-white text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="space-y-3 px-2">
        {/* Animated Progress Bar */}
        <div className="h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden border border-dark-text/20 dark:border-white/20">
          <div
            className="h-full bg-gradient-to-r from-primary via-yellow-400 to-primary transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / projectsData.length) * 100}%` }}
          ></div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2">
          {projectsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? 'bg-primary w-3 h-3 scale-125'
                  : 'bg-gray-300 dark:bg-white/20 w-2.5 h-2.5 hover:bg-gray-400 dark:hover:bg-white/30'
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-xs font-black text-dark-text/60 dark:text-white/60 uppercase tracking-wider">
          {currentIndex + 1} of {projectsData.length}
        </p>
      </div>

      {/* All Projects Button */}
      <a
        href="https://github.com/jayendra123123?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 bg-gradient-to-r from-primary to-yellow-400 border-2 border-dark-text rounded-2xl font-bold text-dark-text text-center hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
      >
        <span>All Projects</span>
        <span className="material-symbols-outlined">arrow_forward</span>
      </a>
    </div>
  );
};

export default MobileProjects;
