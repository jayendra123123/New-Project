
import React, { useState, useEffect } from 'react';
import Header from './component/Header.jsx';
import Hero from './component/Hero.jsx';
import ProjectShowcase from './component/ProjectShowcase.jsx';
import OriginStory from './component/OriginStory.jsx';
import SkillsAndCertificates from './component/SkillsAndCertificates.jsx';
import SkillsEnhanced from './component/SkillsEnhanced.jsx';
import ContactForm from './component/ContactForm.jsx';
import Footer from './component/Footer.jsx';
import LoadingProgress from './animations/LoadingProgress.jsx';
import CursorTracker from './animations/CursorTracker.jsx';
import BackgroundAnimations from './animations/BackgroundAnimations.jsx';
import { initScrollAnimations, fadeInOnScroll } from './utils/scrollAnimations';
import { initScrollSmoother } from './utils/scrollSmoother';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Initialize animations after loading
      setTimeout(() => {
        initScrollSmoother();
        initScrollAnimations();
        fadeInOnScroll('.fade-in-scroll');
        
        // Page entrance animation
        gsap.from('.main-content', {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out'
        });
      }, 100);
    }, 2500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  if (isLoading) {
    return <LoadingProgress onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <CursorTracker />
      <BackgroundAnimations />
      <Header 
        toggleDarkMode={toggleDarkMode} 
        isDarkMode={isDarkMode} 
        onOpenResume={() => setShowResume(true)}
      />
      <main className="flex-grow main-content">
        <Hero />
        
        {/* Transition Divider */}
        <div className="w-full h-16 bg-transparent relative z-10 -mt-8 lg:-mt-16 overflow-hidden">
          <div className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 w-[120%] h-[200px] bg-white dark:bg-bg-dark border-t-4 border-dark-text dark:border-white/10 rounded-[50%]"></div>
        </div>

        <ProjectShowcase />
        <OriginStory showResume={showResume} setShowResume={setShowResume} />
        <SkillsEnhanced />
        <SkillsAndCertificates />
        
        {/* Contact Section */}
        <section id="contact-form" className="w-full py-32 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-bg-dark dark:to-bg-dark/50 border-t-4 border-dark-text dark:border-white/10 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-[1400px] mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-primary/20 border-2 border-primary rounded-full mb-4">
                <span className="text-sm font-black uppercase tracking-widest text-dark-text">Get In Touch</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-dark-text dark:text-white mb-4">
                Let's Work <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Together</span>
              </h2>
              <p className="text-xl text-dark-text/70 dark:text-white/70 max-w-2xl mx-auto">
                Have a project in mind? Let's connect and bring your ideas to life!
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Side - Contact Info */}
            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-gradient-to-br from-white to-gray-100 dark:from-bg-card-dark dark:to-bg-dark p-8 rounded-3xl border-4 border-dark-text dark:border-white/20 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
                <h3 className="text-2xl font-black text-dark-text dark:text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <a href="mailto:jayendramalla26@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <span className="material-symbols-outlined text-2xl text-dark-text">mail</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark-text/60 dark:text-white/60 uppercase tracking-wider">Email</p>
                      <p className="text-lg font-bold text-dark-text dark:text-white group-hover:text-primary transition-colors">jayendramalla26@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href="tel:+917842814826" className="flex items-center gap-4 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <span className="material-symbols-outlined text-2xl text-dark-text">call</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark-text/60 dark:text-white/60 uppercase tracking-wider">Phone</p>
                      <p className="text-lg font-bold text-dark-text dark:text-white group-hover:text-primary transition-colors">+91 7842814826</p>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="bg-gradient-to-br from-white to-gray-100 dark:from-bg-card-dark dark:to-bg-dark p-8 rounded-3xl border-4 border-dark-text dark:border-white/20 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
                <h3 className="text-2xl font-black text-dark-text dark:text-white mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: 'github', href: 'https://github.com/jayendra123123', label: 'GitHub' },
                    { icon: 'linkedin', href: 'https://www.linkedin.com/in/jayendra-malla-1a77b6256/', label: 'LinkedIn' },
                    { icon: 'code', href: 'https://leetcode.com/u/jayendra_26/', label: 'LeetCode' }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-4 bg-white dark:bg-bg-dark rounded-2xl border-2 border-dark-text dark:border-white/20 hover:border-primary hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all text-center group"
                      data-cursor="hover"
                    >
                      <span className="material-symbols-outlined text-3xl text-dark-text dark:text-white group-hover:text-primary transition-colors">{social.icon}</span>
                      <p className="text-xs font-bold text-dark-text/60 dark:text-white/60 mt-2">{social.label}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1">
              <div className="bg-gradient-to-br from-white to-gray-100 dark:from-bg-card-dark dark:to-bg-dark p-8 rounded-3xl border-4 border-dark-text dark:border-white/20 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
                <ContactForm />
              </div>
            </div>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
