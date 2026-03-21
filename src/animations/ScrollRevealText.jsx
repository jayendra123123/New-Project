import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollRevealText = ({ children, className = '', type = 'words' }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const text = element.textContent;
    
    if (type === 'words') {
      const words = text.split(' ');
      element.innerHTML = words
        .map((word) => `<span class="inline-block opacity-0 translate-y-8">${word}</span>`)
        .join(' ');
    } else {
      element.innerHTML = text
        .split('')
        .map((char) => `<span class="inline-block opacity-0 blur-sm">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');
    }

    gsap.to(element.children, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.8,
      stagger: type === 'words' ? 0.05 : 0.02,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, [type]);

  return (
    <span ref={textRef} className={className}>
      {children}
    </span>
  );
};
