import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#1a1a1a] transition-colors duration-300">
      
      {/* Main Loading Container */}
      <div className="flex flex-col items-center gap-8">
        
        {/* Animated Logo/Icon */}
        <div className="relative">
          {/* Outer Ring */}
          <div className="w-24 h-24 rounded-full border-4 border-black/10 dark:border-white/10"></div>
          
          {/* Spinning Ring */}
          <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-transparent border-t-primary animate-spin" 
               style={{ animationDuration: '1s' }}></div>
          
          {/* Center Icon - Pencil */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="animate-pulse"
              style={{ animationDuration: '2s' }}
            >
              <path 
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-black dark:text-white"
              />
            </svg>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center gap-3">
          {/* Brand Name or Title */}
          <h2 className="text-lg font-bold tracking-[0.3em] uppercase text-black/80 dark:text-white/80">
            Hello World
          </h2>
          
          {/* Loading Text with Animated Dots */}
          <div className="flex items-center gap-1 text-sm text-black/50 dark:text-white/50">
            <span className="tracking-wider">Loading</span>
            <span className="flex gap-0.5 ml-1">
              {[0, 1, 2].map((i) => (
                <span 
                  key={i}
                  className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
                  style={{ 
                    animationDuration: '0.6s',
                    animationDelay: `${i * 0.15}s` 
                  }}
                ></span>
              ))}
            </span>
          </div>
        </div>

        {/* Subtle Progress Bar */}
        <div className="w-48 h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full animate-pulse"
            style={{ 
              width: '60%',
              animationDuration: '1.5s'
            }}
          ></div>
        </div>

      </div>
      
      {/* Subtle Corner Decoration */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 opacity-30">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        <div className="w-2 h-2 bg-black/30 dark:bg-white/30 rounded-full"></div>
        <div className="w-2 h-2 bg-black/30 dark:bg-white/30 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
