# Portfolio Animation System

Complete animation system implementation for the portfolio website with GSAP, Three.js, and Rapier physics.

## Features Implemented

### 1. 3D Character Animation (Character3D.jsx)
- **Location**: `src/animations/Character3D.jsx`
- Simple geometric character made with Three.js primitives
- Scroll-based rotation animation
- Keyboard-triggered animations (keys 1, 2, 5, 6)
- Hover effect with eyebrow raise
- Automatic blinking animation
- Idle floating animation

**Usage**:
```jsx
import Character3D from './animations/Character3D';
<Character3D />
```

### 2. GSAP Scroll Animations (scrollAnimations.js)
- **Location**: `src/utils/scrollAnimations.js`
- Landing container fade-out on scroll
- Monitor scale animations
- Character rotation synchronized with scroll
- Camera transitions between sections
- Parallax effects (slow and fast)
- Fade-in on scroll utility

**Usage**:
```javascript
import { initScrollAnimations, fadeInOnScroll } from './utils/scrollAnimations';

useEffect(() => {
  initScrollAnimations();
  fadeInOnScroll('.my-element');
}, []);
```

### 3. SplitText Animations (SplitText.jsx)
- **Location**: `src/animations/SplitText.jsx`
- Character-by-character text reveal with blur effects
- Word-by-word reveal
- Text swap animation (looping between words)
- Customizable stagger delays

**Components**:
- `<SplitText>` - Character animation with blur
- `<WordReveal>` - Word-by-word animation
- `<TextSwap>` - Alternating text loop

**Usage**:
```jsx
import { SplitText, TextSwap } from './animations/SplitText';

<SplitText delay={0.2} stagger={0.03}>Your text here</SplitText>
<TextSwap words={['Developer', 'Engineer', 'Designer']} interval={2000} />
```

### 4. Scroll-Triggered Text (ScrollRevealText.jsx)
- **Location**: `src/animations/ScrollRevealText.jsx`
- Reveals text when scrolling into viewport
- Word or character mode
- ScrollTrigger integration

**Usage**:
```jsx
import { ScrollRevealText } from './animations/ScrollRevealText';

<ScrollRevealText type="words">Your paragraph here</ScrollRevealText>
```

### 5. Smooth Cursor Tracker (CursorTracker.jsx)
- **Location**: `src/animations/CursorTracker.jsx`
- Follows mouse with smooth interpolation
- Scales up over interactive elements
- Uses `data-cursor="hover"` attribute
- Desktop only (hidden on mobile)

**Usage**:
```jsx
import CursorTracker from './animations/CursorTracker';

// In App.js
<CursorTracker />

// Mark interactive elements
<button data-cursor="hover">Click me</button>
```

### 6. Social Icons Hover Effect (SocialIconHover.jsx)
- **Location**: `src/animations/SocialIconHover.jsx`
- Tracks mouse position within icon bounds
- Smooth position interpolation using RAF
- Returns to center on mouse leave

**Usage**:
```jsx
import SocialIconHover from './animations/SocialIconHover';

<SocialIconHover>
  <a href="#">Icon</a>
</SocialIconHover>
```

### 7. Physics-Based Tech Stack Carousel (TechStackCarousel.jsx)
- **Location**: `src/animations/TechStackCarousel.jsx`
- 30 spheres with tech logos
- Rapier physics engine (gravity, collisions)
- Mouse interaction with impulse forces
- Smooth damping and restitution
- 3D visualization with Three.js

**Usage**:
```jsx
import TechStackCarousel from './animations/TechStackCarousel';

<TechStackCarousel />
```

### 8. Project Carousel (ProjectCarousel.jsx)
- **Location**: `src/animations/ProjectCarousel.jsx`
- Smooth slide transitions (500ms)
- GSAP-powered animations
- Previous/Next navigation
- Infinite loop

**Usage**:
```jsx
import ProjectCarousel from './animations/ProjectCarousel';

<ProjectCarousel projects={projectsArray} />
```

### 9. Loading Progress Animation (LoadingProgress.jsx)
- **Location**: `src/animations/LoadingProgress.jsx`
- Animated progress bar (0-100%)
- Smooth fade-out on completion
- Callback for page entrance animations

**Usage**:
```jsx
import LoadingProgress from './animations/LoadingProgress';

<LoadingProgress onComplete={() => setIsLoading(false)} />
```

### 10. Toggle Animations (ToggleAnimation.jsx)
- **Location**: `src/animations/ToggleAnimation.jsx`
- Expand/collapse sections
- Touch and click support
- Smooth height transitions
- Icon rotation

**Usage**:
```jsx
import ToggleAnimation from './animations/ToggleAnimation';

<ToggleAnimation title="Section Title" icon="code">
  <p>Content here</p>
</ToggleAnimation>
```

### 11. Background Decorative Elements (BackgroundAnimations.jsx)
- **Location**: `src/animations/BackgroundAnimations.jsx`
- Animated floating circles
- Nav fade effect on scroll
- Gradient overlays
- GPU-accelerated animations

**Usage**:
```jsx
import BackgroundAnimations from './animations/BackgroundAnimations';

<BackgroundAnimations />
```

### 12. Custom GSAP Hook (useGSAP.js)
- **Location**: `src/hooks/useGSAP.js`
- Automatic cleanup on unmount
- Context-based animations
- ScrollTrigger integration

**Usage**:
```jsx
import { useGSAP } from './hooks/useGSAP';

useGSAP(() => {
  gsap.to('.element', { x: 100 });
}, []);
```

## Installation

Dependencies are already installed:
```bash
npm install gsap three @react-three/fiber @react-three/drei @dimforge/rapier3d-compat --legacy-peer-deps
```

## Integration

All animations are integrated in `App.js`:

```jsx
import LoadingProgress from './animations/LoadingProgress';
import CursorTracker from './animations/CursorTracker';
import BackgroundAnimations from './animations/BackgroundAnimations';
import { initScrollAnimations, fadeInOnScroll } from './utils/scrollAnimations';

// Initialize on mount
useEffect(() => {
  initScrollAnimations();
  fadeInOnScroll('.fade-in-scroll');
}, []);
```

## Performance Optimizations

1. **GPU Acceleration**: All animations use `transform` and `opacity`
2. **RAF**: RequestAnimationFrame for smooth 60fps animations
3. **Cleanup**: Proper cleanup in useEffect hooks
4. **Lazy Loading**: Suspense boundaries for 3D components
5. **Debouncing**: Scroll events are optimized with GSAP's scrub
6. **Will-change**: CSS hints for browser optimization

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (with -webkit prefixes)
- Mobile: Touch events supported, cursor hidden on mobile

## Keyboard Controls

- **Keys 1, 2, 5, 6**: Trigger character animations
- **Scroll**: Activates scroll-based animations
- **Hover**: Triggers hover effects

## Customization

All animations accept props for customization:
- `delay`: Animation start delay
- `duration`: Animation duration
- `stagger`: Stagger delay between elements
- `ease`: GSAP easing function

## Notes

- 3D character uses geometric primitives (no external model required)
- Physics simulation runs at 60fps
- All animations are responsive (mobile/desktop)
- Dark mode compatible
- Accessibility: Respects `prefers-reduced-motion`

## File Structure

```
src/
├── animations/
│   ├── Character3D.jsx
│   ├── CursorTracker.jsx
│   ├── LoadingProgress.jsx
│   ├── SplitText.jsx
│   ├── ScrollRevealText.jsx
│   ├── TechStackCarousel.jsx
│   ├── ProjectCarousel.jsx
│   ├── ToggleAnimation.jsx
│   ├── SocialIconHover.jsx
│   ├── BackgroundAnimations.jsx
│   └── index.js
├── hooks/
│   └── useGSAP.js
├── utils/
│   └── scrollAnimations.js
└── component/
    ├── Hero.jsx (with animations)
    ├── OriginStory.jsx (with animations)
    ├── SkillsEnhanced.jsx (with animations)
    └── ProjectShowcase.jsx (with animations)
```

## Future Enhancements

- Add custom 3D character model (GLB/GLTF)
- Implement ScrollSmoother for ultra-smooth scrolling
- Add more physics interactions
- Create animation presets library
- Add animation timeline controls
