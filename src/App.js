
import React, { useState, useEffect } from 'react';
import Header from './component/Header.jsx';
import Hero from './component/Hero.jsx';
import ProjectGrid from './component/ProjectGrid.jsx';
import OriginStory from './component/OriginStory.jsx';
import SkillsAndCertificates from './component/SkillsAndCertificates.jsx';
import ContactForm from './component/ContactForm.jsx';
import Footer from './component/Footer.jsx';
import Loading from './component/Loading.jsx';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds to enjoy the animation

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header 
        toggleDarkMode={toggleDarkMode} 
        isDarkMode={isDarkMode} 
        onOpenResume={() => setShowResume(true)}
      />
      <main className="flex-grow">
        <Hero />
        
        {/* Transition Divider */}
        <div className="w-full h-16 bg-transparent relative z-10 -mt-8 lg:-mt-16 overflow-hidden">
          <div className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 w-[120%] h-[200px] bg-white dark:bg-bg-dark border-t-4 border-dark-text dark:border-white/10 rounded-[50%]"></div>
        </div>

        <ProjectGrid />
        <OriginStory showResume={showResume} setShowResume={setShowResume} />
        <SkillsAndCertificates />
        
        {/* Contact Section */}
        <section id="contact-form" className="w-full py-10 px-4 sm:px-8 bg-white dark:bg-[#221f10] border-t-4 border-dark-text dark:border-white/10">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Side - Contact Info */}
            <div className="flex-1 flex flex-col gap-8 justify-start pt-10 lg:pt-20">
              <div>
                <span className="text-sm font-black tracking-widest uppercase text-primary mb-2 block">____ CONTACT</span>
                <p className="text-xl font-medium text-dark-text/80 dark:text-white/80 leading-relaxed">
                  Let's connect — I'm always excited to hear from you!
                </p>
              </div>

              <div className="flex flex-col gap-6 mt-4">
                <a href="mailto:jayendramalla26@gmail.com" className="flex items-center gap-4 group w-fit">
                  <div className="size-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-dark-text dark:text-white">mail</span>
                  </div>
                  <span className="text-lg font-bold text-dark-text dark:text-white group-hover:text-primary transition-colors">jayendramalla26@gmail.com</span>
                </a>
                
                <a href="tel:+917842814826" className="flex items-center gap-4 group w-fit">
                  <div className="size-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-dark-text dark:text-white">call</span>
                  </div>
                  <span className="text-lg font-bold text-dark-text dark:text-white group-hover:text-primary transition-colors">+91 7842814826</span>
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 w-full">
              <div className="bg-bg-light dark:bg-bg-card-dark p-6 sm:p-8 rounded-2xl border-4 border-dark-text dark:border-white/20 shadow-comic">
                <ContactForm />
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
