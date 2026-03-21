// Animation Configuration
// Customize all animation timings and behaviors here

export const animationConfig = {
  // Loading Animation
  loading: {
    duration: 2500, // milliseconds
    fadeOutDuration: 800
  },

  // Text Animations
  text: {
    splitText: {
      defaultDelay: 0.2,
      defaultStagger: 0.03,
      blurAmount: '10px',
      duration: 0.8
    },
    textSwap: {
      defaultInterval: 3000,
      transitionDuration: 0.3
    },
    wordReveal: {
      duration: 0.6,
      stagger: 0.05
    },
    scrollReveal: {
      duration: 0.8,
      wordStagger: 0.05,
      charStagger: 0.02,
      triggerStart: 'top 80%'
    }
  },

  // Cursor Tracker
  cursor: {
    interpolation: 0.15,
    hoverScale: 2,
    scaleDuration: 0.3
  },

  // 3D Character
  character3D: {
    rotationSpeed: 1,
    idleAmplitude: 0.1,
    blinkInterval: 3000,
    keyAnimationDuration: 0.3,
    hoverEyebrowOffset: 0.1
  },

  // Physics Carousel
  physics: {
    sphereCount: 30,
    gravity: -9.81,
    restitution: 0.7,
    friction: 0.5,
    linearDamping: 0.5,
    angularDamping: 0.5,
    impulseForce: 0.5,
    interactionRadius: 3
  },

  // Scroll Animations
  scroll: {
    smoothness: 1.5,
    smoothTouch: 0.1,
    parallaxSlow: 0.5,
    parallaxFast: 1,
    fadeInDuration: 1,
    fadeInOffset: 50,
    scrollToDuration: 1,
    scrollToOffset: 80
  },

  // Toggle Animation
  toggle: {
    duration: 0.3,
    ease: 'power2.inOut'
  },

  // Project Carousel
  projectCarousel: {
    transitionDuration: 0.5,
    ease: 'power2.inOut'
  },

  // Social Icon Hover
  socialIcon: {
    interpolation: 0.1,
    maxOffset: 0.3
  },

  // Background Animations
  background: {
    circleCount: 5,
    circleDuration: 3, // base duration, varies per circle
    circleYOffset: -30,
    circleXOffset: 20,
    circleRotation: 360
  },

  // Page Entrance
  pageEntrance: {
    duration: 1,
    yOffset: 50,
    delay: 100
  },

  // Scroll Triggers
  scrollTrigger: {
    landingFadeOut: {
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    },
    monitorScale: {
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      scale: 0.8
    },
    characterRotation: {
      start: 'top top',
      end: 'bottom bottom',
      scrub: 2
    }
  },

  // Easing Functions
  easing: {
    default: 'power2.out',
    smooth: 'power2.inOut',
    bounce: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.3)',
    sine: 'sine.inOut'
  },

  // Responsive Breakpoints
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1280
  },

  // Performance
  performance: {
    useGPUAcceleration: true,
    reducedMotion: false, // Respect prefers-reduced-motion
    maxPhysicsObjects: 50,
    targetFPS: 60
  }
};

// Helper function to get responsive value
export const getResponsiveValue = (mobile, tablet, desktop) => {
  const width = window.innerWidth;
  if (width < animationConfig.breakpoints.mobile) return mobile;
  if (width < animationConfig.breakpoints.tablet) return tablet;
  return desktop;
};

// Helper function to check if reduced motion is preferred
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Helper function to get animation duration based on user preference
export const getAnimationDuration = (duration) => {
  return prefersReducedMotion() ? 0 : duration;
};

export default animationConfig;
