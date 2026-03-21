# Animation System Quick Reference

## 🚀 Quick Start

All animations are ready to use! Here's how to implement each one:

---

## 1. Text Animations

### SplitText (Character-by-character with blur)
```jsx
import { SplitText } from './animations/SplitText';

<SplitText delay={0.2} stagger={0.03}>
  Your text here
</SplitText>
```

### TextSwap (Looping word swap)
```jsx
import { TextSwap } from './animations/SplitText';

<TextSwap 
  words={['Developer', 'Engineer', 'Designer']} 
  interval={3000} 
/>
```

### WordReveal (Word-by-word reveal)
```jsx
import { WordReveal } from './animations/SplitText';

<WordReveal delay={0.5}>
  Your paragraph text
</WordReveal>
```

### ScrollRevealText (Scroll-triggered)
```jsx
import { ScrollRevealText } from './animations/ScrollRevealText';

<ScrollRevealText type="words">
  Text that animates on scroll
</ScrollRevealText>
// type can be "words" or "chars"
```

---

## 2. Interactive Elements

### Cursor Tracker
```jsx
// Add once in App.js
import CursorTracker from './animations/CursorTracker';
<CursorTracker />

// Mark elements for hover effect
<button data-cursor="hover">Click me</button>
```

### Social Icon Hover
```jsx
import SocialIconHover from './animations/SocialIconHover';

<SocialIconHover>
  <a href="#">Your icon/button</a>
</SocialIconHover>
```

### Toggle Animation
```jsx
import ToggleAnimation from './animations/ToggleAnimation';

<ToggleAnimation title="Section Title" icon="code">
  <p>Expandable content</p>
</ToggleAnimation>
```

---

## 3. 3D & Physics

### 3D Character
```jsx
import Character3D from './animations/Character3D';

<Character3D />
// Responds to: scroll, keys 1/2/5/6, hover
```

### Tech Stack Carousel (Physics)
```jsx
import TechStackCarousel from './animations/TechStackCarousel';

<TechStackCarousel />
// 30 spheres with Rapier physics
```

---

## 4. Scroll Animations

### Initialize Scroll Animations
```jsx
import { initScrollAnimations, fadeInOnScroll } from './utils/scrollAnimations';

useEffect(() => {
  initScrollAnimations();
  fadeInOnScroll('.my-elements');
}, []);
```

### ScrollSmoother
```jsx
import { initScrollSmoother, scrollToSection } from './utils/scrollSmoother';

useEffect(() => {
  initScrollSmoother();
}, []);

// Smooth scroll to section
scrollToSection('#about', 80);
```

---

## 5. Loading & Background

### Loading Progress
```jsx
import LoadingProgress from './animations/LoadingProgress';

{isLoading && (
  <LoadingProgress onComplete={() => setIsLoading(false)} />
)}
```

### Background Animations
```jsx
import BackgroundAnimations from './animations/BackgroundAnimations';

<BackgroundAnimations />
// Floating circles and gradients
```

---

## 6. Project Carousel

```jsx
import ProjectCarousel from './animations/ProjectCarousel';

const projects = [
  { name: 'Project 1', description: '...' },
  { name: 'Project 2', description: '...' }
];

<ProjectCarousel projects={projects} />
```

---

## 🎨 CSS Classes

Add these classes to elements for automatic animations:

```html
<!-- Fade in on scroll -->
<div class="fade-in-scroll">Content</div>

<!-- Parallax effects -->
<div class="parallax-slow">Slow parallax</div>
<div class="parallax-fast">Fast parallax</div>

<!-- Landing container (auto fade-out) -->
<div class="landing-container">Hero content</div>

<!-- Monitor element (auto scale) -->
<div class="monitor-element">Screen content</div>

<!-- Character 3D container -->
<div class="character-3d">3D character</div>

<!-- Scroll sections for camera transitions -->
<section class="scroll-section">Section content</section>
```

---

## ⚙️ Custom GSAP Hook

```jsx
import { useGSAP } from './hooks/useGSAP';

useGSAP(() => {
  gsap.to('.element', {
    x: 100,
    scrollTrigger: {
      trigger: '.element',
      start: 'top center'
    }
  });
}, [dependencies]);
// Auto cleanup on unmount
```

---

## 🎯 Animation Props Reference

### SplitText
- `delay`: number (default: 0)
- `stagger`: number (default: 0.03)
- `className`: string

### TextSwap
- `words`: string[] (required)
- `interval`: number (default: 2000)
- `className`: string

### ScrollRevealText
- `type`: 'words' | 'chars' (default: 'words')
- `className`: string

### ToggleAnimation
- `title`: string (required)
- `icon`: string (Material Icons name)
- `children`: ReactNode

### ProjectCarousel
- `projects`: array (required)

---

## 🎮 Keyboard Controls

- **Keys 1, 2, 5, 6**: Trigger character animations
- **Scroll**: Activates all scroll-based animations
- **Hover**: Interactive hover effects

---

## 📱 Responsive Behavior

- **Desktop**: Full animations + cursor tracker
- **Mobile**: Touch-optimized, cursor hidden
- **Tablet**: Hybrid mode

---

## ⚡ Performance Tips

1. Use `data-cursor="hover"` sparingly
2. Limit physics objects to 30-50
3. Use `will-change` for animated elements
4. Prefer `transform` and `opacity` for animations
5. Clean up ScrollTriggers on unmount

---

## 🐛 Troubleshooting

### Animations not working?
```jsx
// Make sure GSAP is registered
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

### 3D not rendering?
```jsx
// Wrap in Suspense
import { Suspense } from 'react';
<Suspense fallback={null}>
  <Character3D />
</Suspense>
```

### ScrollTrigger conflicts?
```jsx
// Clean up on unmount
useEffect(() => {
  return () => ScrollTrigger.getAll().forEach(st => st.kill());
}, []);
```

---

## 📦 All Imports

```jsx
// Animations
import {
  CursorTracker,
  Character3D,
  LoadingProgress,
  TechStackCarousel,
  ProjectCarousel,
  ToggleAnimation,
  SocialIconHover,
  BackgroundAnimations,
  SplitText,
  WordReveal,
  TextSwap,
  ScrollRevealText
} from './animations';

// Utilities
import { 
  initScrollAnimations, 
  fadeInOnScroll,
  initParallaxEffects 
} from './utils/scrollAnimations';

import { 
  initScrollSmoother, 
  scrollToSection,
  createParallaxEffect 
} from './utils/scrollSmoother';

// Hooks
import { useGSAP } from './hooks/useGSAP';
```

---

## ✅ Implementation Checklist

- [x] Install dependencies
- [x] Add CursorTracker to App.js
- [x] Add BackgroundAnimations to App.js
- [x] Initialize scroll animations in useEffect
- [x] Add text animations to Hero
- [x] Add 3D character to Hero
- [x] Add toggle animations to skills section
- [x] Add tech carousel to skills section
- [x] Add social icon hover to links
- [x] Add loading progress
- [x] Add scroll reveal to paragraphs
- [x] Test on mobile and desktop

---

## 🎉 You're All Set!

All 12 animation components are implemented and ready to use. Check `ANIMATION_SYSTEM.md` for detailed documentation.

**Test the animations:**
1. Scroll through the page
2. Hover over interactive elements
3. Press keys 1, 2, 5, 6
4. Toggle skill sections
5. Watch the loading animation

Enjoy your animated portfolio! 🚀
