import React from 'react';

const panels = [
  {
    title: "Education",
    description: "B.Tech in Computer Science and Engineering at Vignan's Institute of Information Technology. CGPA: 8.20",
    icon: "school"
  },
  {
    title: "Technical Skills",
    id: "skills",
    description: "Frontend: React, Tailwind CSS | Backend: Node.js, Express.js | Database: MongoDB | Languages: C++, Python, Java",
    icon: "code",
    offset: "lg:ml-8"
  },
  {
    title: "Contact",
    id: "contact",
    description: "Email: jayendramalla26@gmail.com | Phone: +91 7842814826",
    icon: "contact_mail"
  }
];

const OriginStory = ({ showResume, setShowResume }) => {
  return (
    <section id="about-me" className="w-full py-20 px-4 sm:px-8 bg-bg-light dark:bg-bg-dark relative">
      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowResume(false)}
          ></div>
          <div className="relative bg-white dark:bg-[#221f10] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border-4 border-dark-text dark:border-white/20 shadow-comic p-8 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setShowResume(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
            >
              <span className="material-symbols-outlined text-dark-text dark:text-white">close</span>
            </button>
            
            <div className="flex flex-col gap-6 text-dark-text dark:text-white">
              <div className="text-center border-b-2 border-dashed border-dark-text/20 pb-6">
                <h2 className="text-3xl font-black uppercase tracking-tight">M Jayendra</h2>
                <p className="text-xl font-bold text-primary mt-1">Full Stack Web Developer</p>
                <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm font-medium opacity-80">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">mail</span>
                    jayendramalla26@gmail.com
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">call</span>
                    +91 7842814826
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black uppercase mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">summarize</span>
                  Summary
                </h3>
                <p className="leading-relaxed opacity-90">
                  Aspiring Full-Stack Web Developer with experience in building responsive web applications using JavaScript, React, Node.js, and MongoDB. Strong foundation in data structures and algorithms, with a problem-solving mindset and a focus on writing clean, maintainable code.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-black uppercase mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">school</span>
                  Education
                </h3>
                <div className="bg-bg-light dark:bg-white/5 p-4 rounded-lg border-2 border-dark-text/10">
                  <h4 className="font-bold text-lg">B.Tech in Computer Science and Engineering</h4>
                  <p className="font-medium opacity-80">Vignan's Institute of Information Technology</p>
                  <p className="text-sm mt-1 font-bold text-primary">CGPA: 8.20</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black uppercase mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">code</span>
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-bg-light dark:bg-white/5 p-3 rounded-lg border-2 border-dark-text/10">
                    <span className="font-bold block text-sm uppercase tracking-wider opacity-70 mb-1">Frontend</span>
                    <p className="font-medium">JavaScript, React, HTML5, Tailwind CSS</p>
                  </div>
                  <div className="bg-bg-light dark:bg-white/5 p-3 rounded-lg border-2 border-dark-text/10">
                    <span className="font-bold block text-sm uppercase tracking-wider opacity-70 mb-1">Backend</span>
                    <p className="font-medium">Node.js, Express.js</p>
                  </div>
                  <div className="bg-bg-light dark:bg-white/5 p-3 rounded-lg border-2 border-dark-text/10">
                    <span className="font-bold block text-sm uppercase tracking-wider opacity-70 mb-1">Database</span>
                    <p className="font-medium">MongoDB, MySQL</p>
                  </div>
                  <div className="bg-bg-light dark:bg-white/5 p-3 rounded-lg border-2 border-dark-text/10">
                    <span className="font-bold block text-sm uppercase tracking-wider opacity-70 mb-1">Programming</span>
                    <p className="font-medium">C++, Python, Java(Basics)</p>
                  </div>
                  <div className="bg-bg-light dark:bg-white/5 p-3 rounded-lg border-2 border-dark-text/10 sm:col-span-2">
                    <span className="font-bold block text-sm uppercase tracking-wider opacity-70 mb-1">Tools & Deployment</span>
                    <p className="font-medium">Git, GitHub, VS Code, Vercel, Render, AWS(Basics), Netlify</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Static Text Content */}
          <div className="flex-1 flex flex-col gap-6 lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl font-black text-dark-text dark:text-white tracking-tight leading-tight">
              ___ABOUT ME
            </h2>
            <p className="text-lg text-dark-text/80 dark:text-white/80 leading-relaxed">
              Full-Stack Web Developer with experience in building responsive web applications using JavaScript, React,
Node.js, and MongoDB. Strong foundation in data structures and algorithms, with a problem-solving mindset and
a focus on writing clean, maintainable code. Eager to contribute to impactful projects and grow in a collaborative
environment.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://github.com/jayendra123123" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-bg-card-dark rounded-full border-2 border-dark-text dark:border-white/20 shadow-comic-sm hover:shadow-comic hover:-translate-y-1 transition-all text-dark-text dark:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/jayendra-malla-1a77b6256/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-bg-card-dark rounded-full border-2 border-dark-text dark:border-white/20 shadow-comic-sm hover:shadow-comic hover:-translate-y-1 transition-all text-[#0077b5]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://leetcode.com/u/jayendra_26/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-bg-card-dark rounded-full border-2 border-dark-text dark:border-white/20 shadow-comic-sm hover:shadow-comic hover:-translate-y-1 transition-all text-[#FFA116]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
              </a>
            </div>
            <button 
              onClick={() => setShowResume(true)}
              className="w-fit flex items-center gap-3 h-12 px-6 mt-2 bg-primary text-dark-text rounded-full border-2 border-dark-text font-bold shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all"
            >
              <span className="material-symbols-outlined">menu_book</span>
              <span>Short note about my resume</span>
            </button>
          </div>

          {/* Scrolling Panels Grid */}
          <div className="flex-1 w-full grid grid-cols-1 gap-6">
            {panels.map((panel, idx) => (
              <div 
                key={idx}
                id={panel.id}
                className={`bg-white dark:bg-bg-card-dark p-6 rounded-lg border-2 border-dark-text dark:border-white/20 shadow-comic flex items-start gap-4 hover:scale-[1.02] transition-transform ${panel.offset || ''}`}
              >
                <div className="bg-primary/20 p-3 rounded-full border-2 border-primary/50 text-dark-text dark:text-yellow-200">
                  <span className="material-symbols-outlined text-3xl">{panel.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 dark:text-white">{panel.title}</h3>
                  <p className="text-sm text-dark-text/70 dark:text-white/70">{panel.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
