import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const SplitText = ({ children, className = '', delay = 0, stagger = 0.03 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const text = element.textContent;
    element.innerHTML = text
      .split('')
      .map((char) => `<span class="inline-block" style="opacity:0;filter:blur(10px)">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');

    gsap.to(element.children, {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.8,
      stagger,
      delay,
      ease: 'power2.out'
    });
  }, [delay, stagger]);

  return (
    <span ref={textRef} className={className}>
      {children}
    </span>
  );
};

export const WordReveal = ({ children, className = '', delay = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const words = element.textContent.split(' ');
    element.innerHTML = words
      .map((word) => `<span class="inline-block opacity-0 translate-y-4">${word}</span>`)
      .join(' ');

    gsap.to(element.children, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.05,
      delay,
      ease: 'power2.out'
    });
  }, [delay]);

  return (
    <span ref={textRef} className={className}>
      {children}
    </span>
  );
};

export const TextSwap = ({ words = [], className = '', interval = 2000 }) => {
  const textRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const element = textRef.current;
    if (!element || words.length === 0) return;

    const animate = () => {
      gsap.to(element, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
          indexRef.current = (indexRef.current + 1) % words.length;
          element.textContent = words[indexRef.current];
          gsap.fromTo(element, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3 });
        }
      });
    };

    const timer = setInterval(animate, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span ref={textRef} className={className}>
      {words[0]}
    </span>
  );
};
