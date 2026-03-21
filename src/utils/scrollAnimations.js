import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  // Landing container fade-out
  gsap.to('.landing-container', {
    opacity: 0,
    y: -100,
    scrollTrigger: {
      trigger: '.landing-container',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  });

  // Monitor scale animation
  gsap.to('.monitor-element', {
    scale: 0.8,
    scrollTrigger: {
      trigger: '.monitor-element',
      start: 'top center',
      end: 'bottom center',
      scrub: 1
    }
  });

  // Character rotation
  gsap.to('.character-3d', {
    rotationY: 360,
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 2
    }
  });

  // Camera transitions
  const sections = gsap.utils.toArray('.scroll-section');
  sections.forEach((section, i) => {
    gsap.to('.camera-target', {
      x: i * 5,
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: 1
      }
    });
  });
};

export const initParallaxEffects = () => {
  gsap.utils.toArray('.parallax-slow').forEach(el => {
    gsap.to(el, {
      y: -100,
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  });

  gsap.utils.toArray('.parallax-fast').forEach(el => {
    gsap.to(el, {
      y: -200,
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  });
};

export const fadeInOnScroll = (selector, options = {}) => {
  gsap.utils.toArray(selector).forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
        ...options
      }
    });
  });
};
