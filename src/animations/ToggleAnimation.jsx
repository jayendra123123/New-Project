import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

const ToggleAnimation = ({ title, children, icon, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const heightRef = useRef(null);

  // Handle expand/collapse animation
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    if (isOpen) {
      // Expanding
      gsap.killTweensOf(content);
      const height = contentRef.current.scrollHeight;
      gsap.to(content, {
        height: height,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          if (content) {
            content.style.height = 'auto';
          }
        }
      });
    } else {
      // Collapsing
      gsap.killTweensOf(content);
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut'
      });
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleKeyDown = (e) => {
    // Handle Enter and Space for accessibility
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-white/5 dark:to-white/[0.02] rounded-2xl border-2 border-dark-text/10 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <button
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="w-full p-6 sm:p-8 flex items-center justify-between hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-bg-dark"
        aria-expanded={isOpen}
        aria-controls={`content-${title}`}
        role="button"
        tabIndex={0}
      >
        <div className="flex items-center gap-4 flex-1">
          {icon && (
            <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform duration-300">
              {icon}
            </span>
          )}
          <h3 className="text-xl sm:text-2xl font-black text-dark-text dark:text-white text-left">
            {title}
          </h3>
        </div>
        <span
          className="material-symbols-outlined text-2xl sm:text-3xl text-primary transition-transform duration-400 flex-shrink-0 ml-4"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
          aria-hidden="true"
        >
          expand_more
        </span>
      </button>

      <div
        ref={contentRef}
        id={`content-${title}`}
        className="h-0 opacity-0 overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t-2 border-dark-text/5 dark:border-white/5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ToggleAnimation;
