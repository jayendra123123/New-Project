import React, { useEffect, useRef } from 'react';

const SkillsAndCertificates = () => {
  const skillsRef = useRef([]);
  const certsRef = useRef([]);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'code',
      skills: [
        { name: 'JavaScript', projects: ['Food Donation Website', 'Plant Disease Identifier', 'Portfolio Website'] },
        { name: 'React', projects: ['Food Donation Website', 'Plant Disease Identifier', 'Portfolio Website'] },
        { name: 'HTML5', projects: ['Food Donation Website', 'Plant Disease Identifier', 'Portfolio Website'] },
        { name: 'CSS', projects: ['Food Donation Website', 'Plant Disease Identifier', 'Portfolio Website'] },
        { name: 'Tailwind CSS', projects: ['Portfolio Website'] }
      ]
    },
    {
      title: 'Backend',
      icon: 'dns',
      skills: [
        { name: 'Node.js', projects: ['Food Donation Website', 'Plant Disease Identifier'] },
        { name: 'Express.js', projects: ['Food Donation Website', 'Plant Disease Identifier'] },
        { name: 'PHP', projects: ['Web Development Projects'] }
      ]
    },
    {
      title: 'Databases',
      icon: 'storage',
      skills: [
        { name: 'MongoDB', projects: ['Food Donation Website'] },
        { name: 'MySQL', projects: ['Database Management Projects'] }
      ]
    },
    {
      title: 'Programming Languages',
      icon: 'terminal',
      skills: [
        { name: 'C++', projects: ['Competitive Coding', 'DSA Practice'] },
        { name: 'Python', projects: ['Internship', 'Automation Scripts'] },
        { name: 'Java', projects: ['OOP Projects'] }
      ]
    },
    {
      title: 'Tools and Platforms',
      icon: 'build_circle',
      skills: [
        { name: 'Git', projects: ['All Projects'] },
        { name: 'GitHub', projects: ['All Projects'] },
        { name: 'VS Code', projects: ['All Projects'] },
        { name: 'Vercel', projects: ['Portfolio Website'] },
        { name: 'Render', projects: ['Food Donation Website', 'Plant Disease Identifier'] },
        { name: 'Netlify', projects: ['Static Sites'] }
      ]
    }
  ];

  const certificates = [
    {
      title: 'Postman API Fundamentals Student Expert',
      issuer: 'Canvas Credentials (Badgr)',
      date: 'Feb 2025',
      credentialUrl: 'https://badges.parchment.com/public/assertions/98gNEu20SI--Li3ABKrlog'
    },
    {
      title: 'Relational Database Basics',
      issuer: 'IBM — edX Verified Certificate',
      date: 'Jun 2024',
      credentialUrl: 'https://courses.edx.org/certificates/d898d1ee4e78486f92a6ac7e545ec943'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    skillsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    certsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills-certificates" className="w-full py-20 px-4 sm:px-8 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT SIDE - SKILLS */}
          <div>
            {/* Section Header */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-black text-dark-text dark:text-white leading-tight uppercase">
                Technical Skills
              </h2>
            </div>

            {/* Skills Grid - Multiple Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-visible">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  ref={(el) => (skillsRef.current[index] = el)}
                  className="opacity-0 translate-y-4 overflow-visible"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Individual Category Box */}
                  <div className="bg-white dark:bg-bg-card-dark p-3 rounded-xl border-4 border-dark-text dark:border-white/20 shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all overflow-visible">
                    {/* Category Header */}
                    <div className="mb-2 pb-2 border-b-2 border-dark-text/10 dark:border-white/10">
                      <h3 className="text-sm font-black text-dark-text dark:text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-base">
                          {category.icon}
                        </span>
                        {category.title}
                      </h3>
                    </div>
                    
                    {/* Skills */}
                    <div className="space-y-1 overflow-visible">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="group relative"
                        >
                          <div className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 transition-all cursor-pointer">
                            <span className="text-primary font-black text-sm">•</span>
                            <span className="font-black text-dark-text dark:text-white text-xs flex-1">
                              {skill.name}
                            </span>
                            <span className="material-symbols-outlined text-xs text-dark-text/40 dark:text-white/40">
                              info
                            </span>
                          </div>
                          
                          {/* Tooltip on Hover - Appears Above */}
                          <div className="absolute bottom-full left-0 mb-2 min-w-[250px] max-w-[300px] bg-white/95 dark:bg-[#221f10]/95 backdrop-blur-md border-2 border-primary rounded-lg p-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.6)] opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 z-[9999]">
                            <p className="text-xs font-bold text-dark-text/60 dark:text-white/60 mb-2">Used in:</p>
                            <div className="flex flex-wrap gap-1.5">
                              {skill.projects.map((project, projIndex) => (
                                <span
                                  key={projIndex}
                                  className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded border border-primary/30"
                                >
                                  {project}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - CERTIFICATIONS */}
          <div>
            {/* Section Header */}
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-black text-dark-text dark:text-white leading-tight uppercase">
                Certifications
              </h2>
            </div>

            {/* Certificates Content Box */}
            <div className="bg-white dark:bg-bg-card-dark p-8 rounded-2xl border-4 border-dark-text dark:border-white/20 shadow-comic">
              <div className="space-y-8">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    ref={(el) => (certsRef.current[index] = el)}
                    className="opacity-0 translate-y-4"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Certificate Title */}
                    <h3 className="text-xl font-black text-dark-text dark:text-white mb-2 leading-tight">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-base font-bold text-dark-text/70 dark:text-white/70 mb-3 uppercase text-sm">
                      {cert.issuer}
                    </p>

                    {/* Date and Link */}
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <span className="text-sm font-bold text-primary uppercase">
                        {cert.date}
                      </span>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-black text-primary hover:text-primary/80 transition-colors"
                      >
                        <span className="material-symbols-outlined text-base">open_in_new</span>
                      </a>
                    </div>

                    {/* Divider (except for last item) */}
                    {index < certificates.length - 1 && (
                      <div className="h-px bg-dark-text/10 dark:bg-white/10 mt-8"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsAndCertificates;
