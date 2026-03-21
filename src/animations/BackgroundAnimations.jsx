import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BackgroundAnimations = () => {
  const circlesRef = useRef([]);

  useEffect(() => {
    // Animated landing circles
    circlesRef.current.forEach((circle, i) => {
      gsap.to(circle, {
        y: -30,
        x: 20,
        rotation: 360,
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    // Nav fade effect
    gsap.to('.nav-element', {
      opacity: 0.5,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: '100px top',
        scrub: 1
      }
    });

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, []);

  return (
    <>
      {/* Landing Circles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={el => circlesRef.current[i] = el}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-light/50 dark:to-bg-dark/50" />
      </div>
    </>
  );
};

export default BackgroundAnimations;
