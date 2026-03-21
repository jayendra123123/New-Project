import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const LoadingProgress = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to('.loading-screen', {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete
        });
      }
    });

    tl.to({}, {
      duration: 2,
      onUpdate: function() {
        setProgress(Math.floor(this.progress() * 100));
      }
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div className="loading-screen fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#1a1a1a]">
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-4 border-black/10 dark:border-white/10"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-black text-primary">{progress}%</span>
          </div>
        </div>
        
        <div className="w-64 h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProgress;
