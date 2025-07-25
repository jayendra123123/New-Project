import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'River CleanUp',
    description: 'River CleanUp now includes explanation about maps, email notifications, user login, and full-stack features.',
    fullDescription: 'River CleanUp is a full-stack web application developed to streamline the process of organizing and managing river cleaning events. The platform allows users to register, log in, and participate in environmental cleanup activities by locating events near them via an interactive map. Built using MongoDB, Express, React, and Node.js, the app features real-time event creation, participation tracking, and automated email notifications to ensure participants stay informed. This project reflects my commitment to environmental causes while showcasing my skills in backend integration, user authentication, and responsive UI development.',
    live: 'https://clean-up-rw7s.onrender.com',
    code: 'https://github.com/jayendra123123/clean-up',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: 'river-cleanup.png',
    logo: 'hi.png'
  },
  {
    title: 'Movie Review',
    description: 'Movie Review highlights TMDB API usage and UI/UX goals.',
    fullDescription: 'Movie Review is a React-based application that enables users to search for movies, view detailed information, and rate their favorites. It fetches live data from the TMDB API, displaying movie posters, release dates, genres, ratings, and overviews. The project emphasizes dynamic user interaction, responsive layout, and seamless API integration. Built with a minimalist UI and focused on performance, this project strengthened my frontend development skills and my ability to work with third-party APIs.',
    live: 'https://movie-review-omega-seven.vercel.app',
    code: 'https://github.com/jayendra123123/movie-review',
    tech: ['React', 'TMDB API', 'CSS'],
    image: 'movie-review.png',
    logo: 'https://i.pinimg.com/736x/ea/8d/11/ea8d11f1ffc6355b8a440106ce61d0f3.jpg'
  },
  {
    title: 'Calculator',
    description: 'Calculator emphasizes responsive design and JavaScript fundamentals.',
    fullDescription: 'This project is a responsive, browser-based calculator developed using vanilla JavaScript, HTML, and CSS. It performs basic arithmetic operations including addition, subtraction, multiplication, and division. Designed with simplicity and clarity in mind, the calculator is optimized for both desktop and mobile devices. Creating this project helped me reinforce my core JavaScript skills and practice layout styling using pure CSS without external libraries.',
    live: 'https://jayendra123123.github.io/project1/',
    code: 'https://github.com/jayendra123123/project1',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: 'calculater.png',
    logo: 'https://as2.ftcdn.net/jpg/02/22/46/27/1000_F_222462765_0UzKwPpeJuPiCjXJX1nrCmHGDx2wFNA6.jpg'
  },
  {
    title: 'Notepad',
    description: 'Notepad mentions localStorage and CRUD operations.',
    fullDescription: 'Notepad is a lightweight note-taking app built with JavaScript, HTML, and CSS. It utilizes localStorage to allow users to write, edit, and delete notes, ensuring their content is preserved across sessions. The application features a clean and distraction-free interface, making it ideal for quick note capture. This project was a practical exploration of browser-based storage and CRUD operations, emphasizing functionality and user experience in a minimal footprint.',
    live: 'https://jayendra123123.github.io/Note-Pad/',
    code: 'https://github.com/jayendra123123/Note-Pad',
    tech: ['JavaScript', 'HTML', 'CSS', 'localStorage'],
    image: 'notepad.png',
    logo: 'https://thumbs.dreamstime.com/b/to-do-list-icon-flat-style-document-checklist-vector-illustration-white-isolated-background-notepad-check-mark-business-171865694.jpg'
  }
];

export default function ProjectShowcase() {
  const [selected, setSelected] = useState(0);
  const proj = projects[selected];

  return (
    <>
      <section className="bg-black text-white py-10 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg overflow-y-auto max-h-[80vh] pr-4 border border-gray-700">
            <h3 className="text-xl font-bold mb-6 text-[#fc8019]">Projects</h3>
            {projects.map((p, i) => (
              <motion.div
                key={i}
                onClick={() => setSelected(i)}
                whileHover={{ scale: 1.02 }}
                className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 mb-5 ${i === selected ? 'border-2 border-[#fc8019]' : 'border border-gray-700'}`}
              >
                <div className="flex flex-col sm:flex-row bg-black/20 p-4 gap-4 rounded-lg">
                  <div className="relative w-full sm:w-60 h-60">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <img
                      src={p.logo}
                      alt={`${p.title} Logo`}
                      className="absolute top-2 left-2 w-8 h-8 object-contain bg-white rounded-full p-1"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-[#fc8019]">{p.title}</h3>
                    <p className="text-sm text-gray-300 mt-2 line-clamp-3">{p.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6 bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-700">
            <motion.img
              key={proj.image}
              src={proj.image}
              alt={proj.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-80 object-cover rounded-lg border border-gray-700"
            />
            <div className="flex items-center gap-3">
              <img src={proj.logo} alt="Logo" className="w-10 h-10 object-contain bg-white rounded-full p-1 border border-[#fc8019]" />
              <h2 className="text-2xl font-bold text-[#fc8019]">{proj.title}</h2>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">{proj.fullDescription}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((tech, i) => (
                <span key={i} className="bg-[#2e2e2e] text-white text-xs px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#fc8019] text-black px-4 py-2 rounded text-sm hover:bg-white"
              >
                <ExternalLink size={16} /> Live
              </a>
              <a
                href={proj.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-[#fc8019] text-[#fc8019] px-4 py-2 rounded text-sm hover:bg-[#fc8019] hover:text-black"
              >
                <Github size={16} /> Code
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
