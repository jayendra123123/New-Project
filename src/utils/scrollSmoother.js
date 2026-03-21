import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const initScrollSmoother = () => {
  // Note: ScrollSmoother requires GSAP Club membership
  // This is a fallback implementation using native smooth scroll
  
  if (typeof ScrollSmoother !== 'undefined' && ScrollSmoother.create) {
    return ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true
    });
  }
  
  // Fallback: Enhanced smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Smooth anchor link scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 80
          },
          ease: 'power2.inOut'
        });
      }
    });
  });
  
  return null;
};

export const scrollToSection = (selector, offset = 80) => {
  const target = document.querySelector(selector);
  if (target) {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: target,
        offsetY: offset
      },
      ease: 'power2.inOut'
    });
  }
};

export const createParallaxEffect = (selector, speed = 0.5) => {
  gsap.utils.toArray(selector).forEach(element => {
    gsap.to(element, {
      y: () => -element.offsetHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
};
