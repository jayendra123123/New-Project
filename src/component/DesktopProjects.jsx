import React, { useState } from 'react';

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

const DesktopProjects = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Get unique categories
  const categories = ['all', ...new Set(projectsData.map(p => p.category))];
  
  // Filter projects
  const filteredProjects = selectedFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedFilter);

  return (
    <div className="space-y-12">
      {/* Filter Tags */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-wider border-2 transition-all duration-300 ${
              selectedFilter === cat
                ? 'bg-primary text-dark-text border-dark-text shadow-lg scale-105'
                : 'bg-white dark:bg-bg-card-dark text-dark-text dark:text-white border-dark-text/30 dark:border-white/20 hover:border-primary hover:shadow-md hover:scale-102'
            }`}
          >
            {cat === 'all' ? 'All Projects' : cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative rounded-2xl border-3 border-dark-text dark:border-white/20 overflow-hidden bg-white dark:bg-bg-card-dark shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-40 transition-all duration-500`}></div>

              {/* Category Badge - Static */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary border-2 border-dark-text rounded-lg z-10">
                <span className="text-xs font-black uppercase text-dark-text">{project.category}</span>
              </div>

              {/* Hover Overlay with Actions */}
              <div
                className={`absolute inset-0 bg-dark-text/85 dark:bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center gap-6 transition-all duration-500 ${
                  hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white dark:bg-black border-2 border-dark-text dark:border-white/20 rounded-full hover:scale-125 hover:shadow-lg transition-all group/btn"
                  >
                    <svg className="w-6 h-6 text-dark-text group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href={project.desktopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-primary to-yellow-400 border-2 border-dark-text rounded-full hover:scale-125 hover:shadow-lg transition-all group/btn"
                  >
                    <span className="material-symbols-outlined text-dark-text group-hover/btn:scale-110 transition-transform">rocket_launch</span>
                  </a>
                </div>

                {/* View Details Text */}
                <p className="text-white text-sm font-bold mt-2 text-center px-4">
                  Click to view project
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
              {/* Title */}
              <div>
                <h3 className="text-xl font-black text-dark-text dark:text-white mb-1 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-dark-text/70 dark:text-white/70 leading-relaxed line-clamp-2">
                  {project.shortDescription}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-primary/20 border border-primary rounded-lg text-xs font-bold text-dark-text dark:text-primary hover:bg-primary/40 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2.5 py-1 bg-gray-200 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-xs font-bold text-dark-text dark:text-white">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Expandable Full Description */}
              <div
                className={`overflow-hidden transition-all duration-500 border-t border-dark-text/20 dark:border-white/10 pt-4 ${
                  hoveredId === project.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-dark-text/70 dark:text-white/70 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Quick Links - Desktop View */}
              <div className="flex gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 bg-white dark:bg-black border-2 border-dark-text dark:border-white/20 rounded-lg text-xs font-black text-dark-text dark:text-white hover:shadow-md active:scale-95 transition-all text-center"
                >
                  Code
                </a>
                <a
                  href={project.desktopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 bg-primary border-2 border-dark-text rounded-lg text-xs font-black text-dark-text hover:shadow-md active:scale-95 transition-all text-center"
                >
                  Demo
                </a>
              </div>
            </div>

            {/* Corner Accent on Hover */}
            <div
              className={`absolute -top-8 -right-8 w-24 h-24 bg-primary/30 rounded-full blur-2xl transition-all duration-500 ${
                hoveredId === project.id ? 'scale-150' : 'scale-0'
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-white/20 mb-4 block">
            folder_open
          </span>
          <p className="text-dark-text/60 dark:text-white/60 font-bold">
            No projects found in this category
          </p>
        </div>
      )}

      {/* CTA Button */}
      <div className="text-center pt-8 border-t border-dark-text/20 dark:border-white/10">
        <a
          href="https://github.com/jayendra123123?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-yellow-400 border-2 border-dark-text rounded-2xl font-black text-dark-text hover:shadow-2xl hover:scale-105 transition-all"
        >
          <span>Explore All Projects on GitHub</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </div>
  );
};

export default DesktopProjects;
