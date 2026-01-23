import React from 'react';

const Hero = () => {
  return (
    <section className="w-full flex justify-center py-10 lg:py-20 px-4 sm:px-8">
      <div className="w-full max-w-[1200px] flex flex-col-reverse lg:flex-row gap-12 items-center">
        
        {/* Text Area */}
        <div className="flex flex-col gap-6 flex-1 text-center lg:text-left items-center lg:items-start z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/20 border-2 border-primary/50 w-fit transform -rotate-2">
            <span className="material-symbols-outlined text-sm text-black dark:text-yellow-200">
              auto_awesome
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-black dark:text-yellow-200">
              Available for hire
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-black dark:text-white">
            Hi! I'm Jayendra,<br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 px-2">FULL STACK DEVELOPER</span>
              <span className="absolute inset-0 bg-primary h-3/5 bottom-1 top-auto -skew-x-6 -z-0 rounded opacity-80"></span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl font-medium text-black dark:text-white/80 max-w-[500px] leading-relaxed">
            Solving real-world problems with practical innovation and a passion for technology. Crafting elegant solutions with clean code and innovative thinking.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <a 
              href="#about-me"
              className="flex items-center gap-2 h-14 px-8 bg-primary text-gray-900 rounded-full border-2 border-dark-text font-black text-lg shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all"
            >
              <span>Read My Story</span>
              <span className="material-symbols-outlined">arrow_downward</span>
            </a>

            <a 
              href="/Resume.pdf" 
              download="Jayendra_Malla_Resume.pdf"
              className="flex items-center gap-2 h-14 px-8 bg-white dark:bg-bg-card-dark text-gray-800 dark:text-white rounded-full border-2 border-dark-text dark:border-white/20 font-bold text-lg shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Image Area */}
        <div className="flex-1 w-full max-w-[500px] lg:max-w-none flex justify-center relative">
          
          {/* Decorative Floaties */}
          <div className="absolute top-0 right-0 text-primary animate-bounce delay-700">
            <span className="material-symbols-outlined text-6xl rotate-12">star</span>
          </div>

          <div className="absolute bottom-10 left-0 text-gray-400 dark:text-white/20 animate-bounce duration-1000">
            <span className="material-symbols-outlined text-5xl -rotate-12">draw</span>
          </div>

          <div className="relative w-full aspect-square max-w-[480px]">
            
            {/* Morphing Blobs */}
            <div className="absolute inset-0 bg-primary rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[spin_10s_linear_infinite] opacity-20 scale-110"></div>
            <div className="absolute inset-0 bg-primary rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-[spin_15s_linear_infinite_reverse] opacity-20 scale-105"></div>

            {/* Avatar */}
            <div
              className="absolute inset-4 rounded-full border-4 border-dark-text dark:border-white/20 bg-cover bg-center overflow-hidden shadow-comic bg-white"
              style={{ backgroundImage: `url("image.png")` }}
            />

            {/* Speech Bubble */}
            <div className="absolute -top-4 -left-4 bg-white dark:bg-bg-card-dark px-4 py-2 rounded-xl rounded-br-none border-2 border-dark-text dark:border-white/20 shadow-comic transform -rotate-6 z-20">
              <p className="font-bold text-sm text-gray-800 dark:text-white">
                Design is fun! ✏️
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
