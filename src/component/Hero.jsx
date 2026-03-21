import React, { Suspense } from 'react';
import { SplitText, TextSwap } from '../animations/SplitText';
import SocialIconHover from '../animations/SocialIconHover';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 sm:px-8 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 dark:from-primary/5 dark:to-blue-500/5"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative w-full max-w-[1400px] flex flex-col lg:flex-row gap-12 items-center z-10">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/30 to-yellow-400/30 border-2 border-primary backdrop-blur-sm transform hover:scale-105 transition-transform">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-black uppercase tracking-wider text-dark-text dark:text-white">
              Available for hire
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight">
              <span className="block text-dark-text dark:text-white">
                <SplitText delay={0.2}>Hi! I'm</SplitText>
              </span>
              <span className="block bg-gradient-to-r from-primary via-yellow-400 to-primary text-white px-2 py-1">
                <SplitText delay={0.5}>Jayendra</SplitText>
              </span>
            </h1>
            
            <div className="relative inline-block">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-text/80 dark:text-white/80">
                <TextSwap words={['Full Stack Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast']} interval={3000} />
              </h2>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl font-medium text-dark-text/70 dark:text-white/70 max-w-[600px] leading-relaxed">
            <SplitText delay={0.8} stagger={0.02}>
              Crafting elegant digital solutions with clean code and innovative thinking. Passionate about turning ideas into reality.
            </SplitText>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <a 
              href="#work"
              className="group relative px-8 py-4 bg-primary text-dark-text rounded-full font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-200 overflow-hidden"
              data-cursor="hover"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a 
              href="#contact-form"
              className="px-8 py-4 bg-white dark:bg-bg-card-dark text-dark-text dark:text-white rounded-full border-2 border-dark-text dark:border-white/20 font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-200 flex items-center gap-2"
              data-cursor="hover"
            >
              <span className="material-symbols-outlined">mail</span>
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            {[
              { icon: 'github', href: 'https://github.com/jayendra123123', color: 'hover:bg-gray-800' },
              { icon: 'linkedin', href: 'https://www.linkedin.com/in/jayendra-malla-1a77b6256/', color: 'hover:bg-blue-600' },
              { icon: 'code', href: 'https://leetcode.com/u/jayendra_26/', color: 'hover:bg-orange-500' }
            ].map((social, i) => (
              <SocialIconHover key={i}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-white dark:bg-bg-card-dark rounded-full border-2 border-dark-text dark:border-white/20 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all text-dark-text dark:text-white ${social.color} hover:text-white hover:border-transparent group`}
                  data-cursor="hover"
                >
                  <span className="material-symbols-outlined text-2xl">{social.icon}</span>
                </a>
              </SocialIconHover>
            ))}
          </div>
        </div>

        {/* Image/Visual Area */}
        <div className="flex-1 w-full max-w-[600px] relative">
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-white to-gray-100 dark:from-bg-card-dark dark:to-bg-dark rounded-3xl border-4 border-dark-text dark:border-white/20 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] p-8 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
            
            {/* Avatar */}
            <div className="relative z-10 aspect-square rounded-2xl overflow-hidden border-4 border-dark-text dark:border-white/20 shadow-lg">
              <img 
                src="/image.png" 
                alt="Jayendra Malla" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats */}
            
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-bg-card-dark px-6 py-3 rounded-2xl border-2 border-dark-text dark:border-white/20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] transform rotate-6 z-20">
              <p className="font-black text-dark-text dark:text-white text-sm">💻 Full Stack</p>
            </div>
          </div>
          
          {/* Decorative Dots */}
          <div className="absolute -z-10 top-10 -right-10 grid grid-cols-4 gap-3 opacity-30">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-primary rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
