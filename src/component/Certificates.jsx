import React, { useEffect, useRef } from 'react';

const Certificates = () => {
  const certsRef = useRef([]);
  const ribbonRef = useRef(null);

  const certificates = [
    {
      title: 'Postman API Fundamentals Student Expert',
      issuer: 'Canvas Credentials (Badgr)',
      date: 'Feb 2025',
      credentialUrl: 'https://badges.parchment.com/public/assertions/98gNEu20SI--Li3ABKrlog',
      color: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-blue-500',
      badgeColor: 'bg-blue-500'
    },
    {
      title: 'Relational Database Basics',
      issuer: 'IBM — edX Verified Certificate',
      date: 'Jun 2024',
      credentialUrl: 'https://courses.edx.org/certificates/d898d1ee4e78486f92a6ac7e545ec943',
      color: 'from-emerald-500/20 to-emerald-600/10',
      borderColor: 'border-emerald-500',
      badgeColor: 'bg-emerald-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    certsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    if (ribbonRef.current) {
      observer.observe(ribbonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certificates" className="w-full py-20 px-4 sm:px-8 bg-white dark:bg-[#221f10] relative overflow-hidden">
      {/* Floating Decorative Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-40 h-40 border-8 border-primary rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-[15%] w-32 h-32 border-8 border-primary rotate-45 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-[5%] w-24 h-24 bg-primary/20 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header with Award Ribbon */}
        <div className="mb-16 text-center relative">
          {/* Award Ribbon Background */}
          <div 
            ref={ribbonRef}
            className="inline-block relative opacity-0 translate-y-8"
          >
            <div className="relative inline-block px-12 py-6 bg-gradient-to-r from-primary/30 via-primary/40 to-primary/30 border-y-4 border-dark-text dark:border-white/20 -skew-x-6">
              <div className="skew-x-6">
                <span className="text-sm font-black tracking-widest uppercase text-dark-text dark:text-white mb-2 block">
                  ____ CERTIFICATIONS
                </span>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-dark-text dark:text-white leading-tight">
                  Professional Certificates
                </h2>
              </div>
              
              {/* Ribbon Tails */}
              <div className="absolute -left-8 top-0 w-0 h-0 border-l-[32px] border-l-transparent border-t-[60px] border-t-primary/50"></div>
              <div className="absolute -right-8 top-0 w-0 h-0 border-r-[32px] border-r-transparent border-t-[60px] border-t-primary/50"></div>
            </div>
            
            {/* Trophy Icon */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary rounded-full border-4 border-dark-text dark:border-white flex items-center justify-center shadow-comic animate-bounce-slow">
              <span className="material-symbols-outlined text-5xl text-dark-text dark:text-white">
                emoji_events
              </span>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mt-20">
          {certificates.map((cert, index) => (
            <div
              key={index}
              ref={(el) => (certsRef.current[index] = el)}
              className={`opacity-0 ${index === 0 ? '-translate-x-20' : 'translate-x-20'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`group relative ${index === 0 ? 'lg:-rotate-2' : 'lg:rotate-2'} hover:rotate-0 transition-all duration-500`}>
                {/* Certificate Card */}
                <div className={`relative bg-gradient-to-br ${cert.color} backdrop-blur-sm p-8 rounded-3xl border-4 ${cert.borderColor} shadow-comic hover:shadow-comic-hover transition-all duration-500 overflow-hidden`}>
                  {/* Watermark Pattern */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-black">
                      <span className="material-symbols-outlined text-[200px]">workspace_premium</span>
                    </div>
                  </div>

                  {/* Seal Stamp */}
                  <div className={`absolute -top-6 -right-6 w-28 h-28 ${cert.badgeColor} rounded-full border-4 border-dashed border-dark-text dark:border-white flex items-center justify-center shadow-lg group-hover:rotate-[360deg] transition-transform duration-700 z-20`}>
                    <div className="text-center">
                      <div className="text-xs font-black text-white leading-tight">
                        VERIFIED
                      </div>
                      <span className="material-symbols-outlined text-4xl text-white">
                        verified
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Medal Icon */}
                    <div className="mb-6 flex items-center gap-4">
                      <div className={`w-20 h-20 ${cert.badgeColor} rounded-2xl border-4 border-dark-text dark:border-white flex items-center justify-center shadow-md rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                        <span className="material-symbols-outlined text-4xl text-white">
                          workspace_premium
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="h-1 bg-dark-text/20 dark:bg-white/20 rounded-full mb-2"></div>
                        <div className="h-1 bg-dark-text/10 dark:bg-white/10 rounded-full w-2/3"></div>
                      </div>
                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-dark-text dark:text-white mb-4 leading-tight">
                      {cert.title}
                    </h3>

                    {/* Divider */}
                    <div className="w-20 h-1 bg-primary rounded-full mb-4"></div>

                    {/* Issuer */}
                    <p className="text-lg font-bold text-dark-text/80 dark:text-white/80 mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-xl">business</span>
                      {cert.issuer}
                    </p>

                    {/* Date */}
                    <p className="text-base font-black text-primary mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-xl">calendar_today</span>
                      {cert.date}
                    </p>

                    {/* Credential Button */}
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-dark-text dark:bg-white text-white dark:text-dark-text rounded-full border-4 border-dark-text dark:border-white font-black text-base shadow-comic hover:shadow-comic-hover hover:scale-105 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Button Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      
                      <span className="relative z-10">Show Credential</span>
                      <span className="material-symbols-outlined text-xl relative z-10 group-hover/btn:translate-x-1 transition-transform">
                        open_in_new
                      </span>
                    </a>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-dark-text/20 dark:border-white/20 rounded-tl-lg"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-dark-text/20 dark:border-white/20 rounded-br-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/20 border-4 border-primary rounded-full">
            <span className="material-symbols-outlined text-2xl text-dark-text dark:text-white">
              military_tech
            </span>
            <span className="text-lg font-black text-dark-text dark:text-white">
              Committed to Continuous Learning
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(var(--slide-from, 0));
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-15px) rotate(50deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Certificates;
