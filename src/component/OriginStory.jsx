import React from 'react';
import { ScrollRevealText } from '../animations/ScrollRevealText';
import SocialIconHover from '../animations/SocialIconHover';

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
    <section id="about-me" className="w-full py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-bg-dark dark:to-bg-dark/80 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl dark:bg-primary/5"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl dark:bg-blue-400/5"></div>
      
      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-md">
          <div className="relative bg-gradient-to-b from-white to-gray-50 dark:from-[#2a251a] dark:to-[#1a1510] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border-3 border-dark-text dark:border-white/20 shadow-2xl p-8 sm:p-10 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setShowResume(false)}
              className="absolute top-6 right-6 p-2.5 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-all hover:scale-110"
              data-cursor="hover"
            >
              <span className="material-symbols-outlined text-2xl text-dark-text dark:text-white">close</span>
            </button>
            
            <div className="flex flex-col gap-8 text-dark-text dark:text-white">
              {/* Header */}
              <div className="text-center border-b-3 border-dashed border-primary/30 pb-8">
                <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight bg-gradient-to-r from-dark-text via-primary to-dark-text dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent">M Jayendra</h2>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-xl font-bold text-primary">Full Stack Web Developer</p>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm font-medium">
                  <span className="flex items-center gap-2 bg-primary/10 dark:bg-primary/5 px-4 py-2 rounded-full">
                    <span className="material-symbols-outlined text-base text-primary">mail</span>
                    <span className="opacity-80">jayendramalla26@gmail.com</span>
                  </span>
                  <span className="flex items-center gap-2 bg-primary/10 dark:bg-primary/5 px-4 py-2 rounded-full">
                    <span className="material-symbols-outlined text-base text-primary">call</span>
                    <span className="opacity-80">+91 7842814826</span>
                  </span>
                </div>
              </div>

              {/* Summary Section */}
              <div className="bg-gradient-to-br from-primary/5 to-blue-400/5 dark:from-primary/10 dark:to-blue-400/10 p-6 rounded-2xl border-2 border-primary/20 dark:border-primary/30">
                <h3 className="text-2xl font-black uppercase mb-3 flex items-center gap-3 text-dark-text dark:text-white">
                  <div className="bg-primary p-2 rounded-lg">
                    <span className="material-symbols-outlined text-white">summarize</span>
                  </div>
                  Summary
                </h3>
                <p className="leading-relaxed opacity-90 text-lg">
                  Aspiring Full-Stack Web Developer with experience in building responsive web applications using JavaScript, React, Node.js, and MongoDB. Strong foundation in data structures and algorithms, with a problem-solving mindset and a focus on writing clean, maintainable code.
                </p>
              </div>

              {/* Education Section */}
              <div>
                <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-3 text-dark-text dark:text-white">
                  <div className="bg-primary p-2 rounded-lg">
                    <span className="material-symbols-outlined text-white text-xl">school</span>
                  </div>
                  Education
                </h3>
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-6 rounded-2xl border-3 border-dashed border-primary/30 dark:border-primary/40">
                  <h4 className="font-black text-xl text-dark-text dark:text-white">B.Tech in Computer Science and Engineering</h4>
                  <p className="font-bold text-lg opacity-80 mt-2">Vignan's Institute of Information Technology</p>
                  <div className="flex items-center gap-2 mt-3 text-primary font-black text-lg">
                    <span className="material-symbols-outlined">grade</span>
                    <span>CGPA: 8.20</span>
                  </div>
                </div>
              </div>

              {/* Technical Skills Section */}
              <div>
                <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-3 text-dark-text dark:text-white">
                  <div className="bg-primary p-2 rounded-lg">
                    <span className="material-symbols-outlined text-white text-xl">code</span>
                  </div>
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Frontend", skills: "JavaScript, React, HTML5, Tailwind CSS" },
                    { label: "Backend", skills: "Node.js, Express.js" },
                    { label: "Database", skills: "MongoDB, MySQL" },
                    { label: "Programming", skills: "C++, Python, Java(Basics)" },
                    { label: "Tools & Deployment", skills: "Git, GitHub, VS Code, Vercel, Render, AWS(Basics), Netlify", fullWidth: true }
                  ].map((skill, idx) => (
                    <div key={idx} className={`bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-white/5 dark:to-white/10 p-4 rounded-xl border-2 border-primary/20 dark:border-primary/30 hover:border-primary dark:hover:border-primary/50 transition-all ${skill.fullWidth ? 'sm:col-span-2' : ''}`}>
                      <span className="font-black block text-xs uppercase tracking-widest opacity-70 mb-2 text-primary">{skill.label}</span>
                      <p className="font-semibold text-dark-text dark:text-white/90">{skill.skills}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Static Text Content */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-dark-text via-primary to-dark-text dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent tracking-tight leading-tight mb-2">
                ABOUT ME
              </h2>
              <div className="flex gap-2 mt-2">
                <div className="h-1 w-16 bg-primary rounded-full"></div>
                <div className="h-1 w-8 bg-primary/50 rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-dark-text/85 dark:text-white/85 leading-relaxed font-medium">
                <ScrollRevealText type="words">
                  Full-Stack Web Developer with experience in building responsive web applications using JavaScript, React, Node.js, and MongoDB. Strong foundation in data structures and algorithms, with a problem-solving mindset and a focus on writing clean, maintainable code.
                </ScrollRevealText>
              </p>
              <p className="text-base md:text-lg text-dark-text/75 dark:text-white/75 leading-relaxed">
                <ScrollRevealText type="words">
                  Passionate about creating innovative solutions and passionate about continuous learning. Eager to contribute to impactful projects and grow in a collaborative environment while pushing the boundaries of web technology.
                </ScrollRevealText>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { 
                  href: "https://github.com/jayendra123123", 
                  name: "GitHub", 
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  ),
                  color: "from-slate-900 to-black dark:from-white dark:to-gray-300",
                  borderColor: "border-slate-900/40 dark:border-white/30",
                  hoverColor: "hover:from-slate-900 hover:to-black dark:hover:from-white dark:hover:to-gray-300",
                  textColor: "text-slate-900 dark:text-white hover:text-white dark:hover:text-black"
                },
                { 
                  href: "https://www.linkedin.com/in/jayendra-malla-1a77b6256/", 
                  name: "LinkedIn", 
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                  color: "from-[#0077b5] to-[#005885]",
                  borderColor: "border-[#0077b5]/40",
                  hoverColor: "hover:from-[#0077b5] hover:to-[#005885]",
                  textColor: "text-white"
                },
                { 
                  href: "https://leetcode.com/u/jayendra_26/", 
                  name: "LeetCode", 
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                    </svg>
                  ),
                  color: "from-[#FFA116] to-[#FF8C00]",
                  borderColor: "border-[#FFA116]/40",
                  hoverColor: "hover:from-[#FFA116] hover:to-[#FF8C00]",
                  textColor: "text-white"
                }
              ].map((social, idx) => (
                <SocialIconHover key={idx}>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`group relative flex items-center justify-center w-16 h-16 rounded-2xl border-2 ${social.borderColor} bg-gradient-to-br ${social.color} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 overflow-hidden`}
                    data-cursor="hover"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {/* Animated Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    {/* Icon */}
                    <div className={`relative z-10 transition-all duration-300 ${social.textColor}`}>
                      {social.icon}
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-dark-text dark:bg-white text-white dark:text-dark-text px-3 py-1 rounded-full whitespace-nowrap text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {social.name}
                    </div>
                  </a>
                </SocialIconHover>
              ))}
            </div>

            {/* Resume Button */}
            <button 
              onClick={() => setShowResume(true)}
              className="w-fit group flex items-center gap-3 h-14 px-8 mt-4 bg-gradient-to-r from-primary to-primary/90 text-dark-text rounded-full border-3 border-dark-text dark:border-white/30 font-black shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all hover:scale-105 uppercase tracking-wider"
              data-cursor="hover"
            >
              <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">menu_book</span>
              <span>View My Resume</span>
            </button>
          </div>

          {/* Scrolling Panels Grid */}
          <div className="flex-1 w-full grid grid-cols-1 gap-6">
            {panels.map((panel, idx) => (
              <div 
                key={idx}
                id={panel.id}
                className={`group bg-gradient-to-br from-white to-gray-50 dark:from-white/5 dark:to-white/[0.02] p-6 sm:p-8 rounded-2xl border-2 border-dark-text/10 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-primary/50 dark:hover:border-primary/40 hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm ${panel.offset || ''}`}
              >
                <div className="flex items-start gap-5">
                  <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-xl border-2 border-primary/50 text-white shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <span className="material-symbols-outlined text-3xl font-black">
                      {panel.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-black mb-2 text-dark-text dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">{panel.title}</h3>
                    <p className="text-base text-dark-text/70 dark:text-white/70 leading-relaxed">{panel.description}</p>
                  </div>
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
