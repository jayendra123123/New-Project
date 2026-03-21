# 🔧 Animation System Troubleshooting Guide

## Common Issues and Solutions

---

## 🚨 Installation Issues

### Issue: npm install fails with peer dependency errors

**Error:**
```
npm ERR! ERESOLVE unable to resolve dependency tree
```

**Solution:**
```bash
npm install --legacy-peer-deps
# or
npm install --force
```

### Issue: Three.js or GSAP not found

**Solution:**
```bash
npm install gsap three @react-three/fiber @react-three/drei @dimforge/rapier3d-compat --legacy-peer-deps
```

---

## 🎬 Animation Not Playing

### Issue: No animations visible on page

**Checklist:**
1. ✅ Check GSAP is imported and registered
```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

2. ✅ Check browser console for errors
```
Press F12 → Console tab
```

3. ✅ Verify animation components are imported
```javascript
import { SplitText } from './animations/SplitText';
```

4. ✅ Check if elements have correct classes
```html
<div className="fade-in-scroll">Content</div>
```

**Solution:**
- Ensure all imports are correct
- Check for typos in component names
- Verify file paths are correct

---

## 🖱️ Cursor Tracker Issues

### Issue: Cursor not visible

**Possible causes:**
1. On mobile device (cursor is hidden on mobile)
2. CSS z-index issue
3. Component not rendered

**Solution:**
```javascript
// Check if CursorTracker is in App.js
<CursorTracker />

// Verify it's not on mobile
const isMobile = window.innerWidth < 768;
```

### Issue: Cursor not following mouse

**Solution:**
```javascript
// Check if mousemove event is attached
window.addEventListener('mousemove', onMouseMove);

// Verify RAF is running
requestAnimationFrame(animate);
```

### Issue: Cursor not scaling on hover

**Solution:**
```html
<!-- Add data-cursor attribute -->
<button data-cursor="hover">Click me</button>
```

---

## 🎨 Text Animation Issues

### Issue: SplitText not animating

**Checklist:**
1. ✅ Component imported correctly
2. ✅ Text content exists
3. ✅ No CSS conflicts

**Solution:**
```javascript
// Verify import
import { SplitText } from './animations/SplitText';

// Check usage
<SplitText delay={0.2}>Your text</SplitText>

// Check console for errors
console.log('SplitText rendered');
```

### Issue: TextSwap not looping

**Solution:**
```javascript
// Verify words array
<TextSwap words={['Word1', 'Word2', 'Word3']} interval={2000} />

// Check if array has multiple words
words.length > 1
```

### Issue: Text appears instantly without animation

**Solution:**
```javascript
// Check if delay is too short
<SplitText delay={0.5} stagger={0.05}>Text</SplitText>

// Verify GSAP is loaded
console.log(gsap.version);
```

---

## 🎮 3D Character Issues

### Issue: 3D character not rendering

**Checklist:**
1. ✅ Three.js installed
2. ✅ WebGL supported
3. ✅ Wrapped in Suspense
4. ✅ Canvas element present

**Solution:**
```javascript
// Wrap in Suspense
import { Suspense } from 'react';

<Suspense fallback={null}>
  <Character3D />
</Suspense>

// Check WebGL support
const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
console.log('WebGL supported:', !!gl);
```

### Issue: Character not responding to scroll

**Solution:**
```javascript
// Verify ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

// Check if scroll progress is updating
ScrollTrigger.create({
  onUpdate: (self) => console.log('Progress:', self.progress)
});
```

### Issue: Character not responding to keyboard

**Solution:**
```javascript
// Check if event listener is attached
window.addEventListener('keydown', handleKeyPress);

// Verify keys are correct
const validKeys = ['1', '2', '5', '6'];
console.log('Key pressed:', e.key);
```

---

## 📜 Scroll Animation Issues

### Issue: ScrollTrigger not firing

**Checklist:**
1. ✅ ScrollTrigger registered
2. ✅ Trigger element exists
3. ✅ Start/end positions correct
4. ✅ No z-index issues

**Solution:**
```javascript
// Debug ScrollTrigger
ScrollTrigger.create({
  trigger: '.my-element',
  start: 'top center',
  markers: true, // Shows debug markers
  onEnter: () => console.log('Entered'),
  onLeave: () => console.log('Left')
});

// Refresh ScrollTrigger
ScrollTrigger.refresh();
```

### Issue: Scroll animations jerky/stuttering

**Solution:**
```javascript
// Use scrub for smooth scrolling
scrollTrigger: {
  scrub: 1, // Smooth scrubbing
  ease: 'power2.inOut'
}

// Check for layout shifts
// Avoid animating width/height
// Use transform and opacity only
```

### Issue: ScrollSmoother not working

**Solution:**
```javascript
// ScrollSmoother requires GSAP Club membership
// Use fallback implementation
import { initScrollSmoother } from './utils/scrollSmoother';

useEffect(() => {
  initScrollSmoother();
}, []);
```

---

## ⚛️ Physics Carousel Issues

### Issue: Spheres not falling

**Checklist:**
1. ✅ Rapier initialized
2. ✅ World created
3. ✅ Gravity set
4. ✅ RigidBodies created

**Solution:**
```javascript
// Check Rapier initialization
RAPIER.init().then(() => {
  console.log('Rapier initialized');
  const world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
});

// Verify world.step() is called
useFrame(() => {
  if (world) {
    world.step();
  }
});
```

### Issue: Spheres not responding to mouse

**Solution:**
```javascript
// Check mouse position tracking
const handleMouseMove = (e) => {
  mouseRef.current.x = (e.clientX / window.innerWidth) * 10 - 5;
  mouseRef.current.y = -(e.clientY / window.innerHeight) * 10 + 5;
  console.log('Mouse:', mouseRef.current);
};
```

### Issue: Poor physics performance

**Solution:**
```javascript
// Reduce sphere count
const sphereCount = 20; // Instead of 30

// Increase damping
body.setLinearDamping(0.8); // Instead of 0.5

// Simplify colliders
RAPIER.ColliderDesc.ball(0.5); // Use simple shapes
```

---

## 🔄 Toggle Animation Issues

### Issue: Toggle not expanding

**Solution:**
```javascript
// Check if content ref exists
const contentRef = useRef(null);
console.log('Content ref:', contentRef.current);

// Verify GSAP animation
gsap.to(contentRef.current, {
  height: 'auto',
  duration: 0.3,
  onComplete: () => console.log('Animation complete')
});
```

### Issue: Content jumps during animation

**Solution:**
```javascript
// Set initial height
gsap.set(content, { height: 0, overflow: 'hidden' });

// Animate to auto
gsap.to(content, {
  height: 'auto',
  duration: 0.3,
  ease: 'power2.inOut'
});
```

---

## 🎯 Performance Issues

### Issue: Low FPS / Laggy animations

**Solutions:**

1. **Reduce animation complexity**
```javascript
// Limit physics objects
const maxObjects = 20;

// Disable 3D on mobile
const isMobile = window.innerWidth < 768;
{!isMobile && <Character3D />}
```

2. **Optimize ScrollTrigger**
```javascript
// Use scrub for better performance
scrollTrigger: {
  scrub: 1,
  invalidateOnRefresh: false
}
```

3. **Use GPU acceleration**
```css
.animated-element {
  transform: translateZ(0);
  will-change: transform;
}
```

4. **Debounce scroll events**
```javascript
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      // Handle scroll
      ticking = false;
    });
    ticking = true;
  }
});
```

### Issue: Memory leaks

**Solution:**
```javascript
// Clean up on unmount
useEffect(() => {
  // Setup animations
  
  return () => {
    // Cleanup
    ScrollTrigger.getAll().forEach(st => st.kill());
    gsap.killTweensOf('*');
  };
}, []);
```

---

## 📱 Mobile Issues

### Issue: Animations not working on mobile

**Solution:**
```javascript
// Check if touch events are supported
const isTouchDevice = 'ontouchstart' in window;

// Use touch events instead of mouse
element.addEventListener('touchstart', handleTouch);
element.addEventListener('touchmove', handleTouch);
```

### Issue: 3D character causing lag on mobile

**Solution:**
```javascript
// Disable 3D on mobile
const isMobile = window.innerWidth < 768;

{!isMobile && (
  <Suspense fallback={null}>
    <Character3D />
  </Suspense>
)}
```

### Issue: Cursor visible on mobile

**Solution:**
```css
/* Hide cursor on mobile */
.cursor-tracker {
  display: none;
}

@media (min-width: 1024px) {
  .cursor-tracker {
    display: block;
  }
}
```

---

## 🌐 Browser Compatibility Issues

### Issue: Animations not working in Safari

**Solution:**
```css
/* Add -webkit prefixes */
.animated-element {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
```

### Issue: WebGL not supported

**Solution:**
```javascript
// Check WebGL support
const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl');

if (!gl) {
  console.warn('WebGL not supported, disabling 3D');
  // Show fallback content
}
```

---

## 🎨 CSS Conflicts

### Issue: Animations overridden by CSS

**Solution:**
```css
/* Use !important sparingly */
.gsap-animated {
  transform: translateX(0) !important;
}

/* Or increase specificity */
.parent .child.animated {
  /* styles */
}
```

### Issue: Z-index issues

**Solution:**
```css
/* Set proper stacking context */
.cursor-tracker {
  z-index: 9999;
}

.background-animations {
  z-index: 0;
}

.main-content {
  z-index: 10;
  position: relative;
}
```

---

## 🔍 Debugging Tools

### Enable GSAP Debug Mode
```javascript
// Show ScrollTrigger markers
ScrollTrigger.create({
  markers: true
});

// Log GSAP version
console.log('GSAP version:', gsap.version);
```

### Chrome DevTools
```javascript
// Performance profiling
// 1. Open DevTools (F12)
// 2. Go to Performance tab
// 3. Click Record
// 4. Interact with page
// 5. Stop recording
// 6. Analyze results
```

### React DevTools
```javascript
// Install React DevTools extension
// Check component tree
// Verify props and state
// Profile component renders
```

---

## 📋 Diagnostic Checklist

When animations aren't working:

1. ✅ Check browser console for errors
2. ✅ Verify all dependencies installed
3. ✅ Check GSAP is registered
4. ✅ Verify component imports
5. ✅ Check element selectors
6. ✅ Test in different browsers
7. ✅ Check on different devices
8. ✅ Verify ScrollTrigger setup
9. ✅ Check for CSS conflicts
10. ✅ Test with reduced motion disabled

---

## 🆘 Still Having Issues?

### Steps to get help:

1. **Check documentation**
   - ANIMATION_SYSTEM.md
   - QUICK_REFERENCE.md
   - TESTING_GUIDE.md

2. **Check browser console**
   - Look for error messages
   - Check network tab
   - Verify resources loaded

3. **Test in isolation**
   - Create minimal reproduction
   - Test single animation
   - Remove other code

4. **Check versions**
```bash
npm list gsap
npm list three
npm list @react-three/fiber
```

5. **Clear cache and rebuild**
```bash
rm -rf node_modules
rm package-lock.json
npm install
npm start
```

---

## 🔧 Emergency Fixes

### Nuclear Option: Complete Reset
```bash
# Remove everything
rm -rf node_modules
rm package-lock.json
rm -rf build

# Reinstall
npm install --legacy-peer-deps

# Rebuild
npm start
```

### Disable Problematic Animations
```javascript
// Temporarily disable animations
const ENABLE_ANIMATIONS = false;

{ENABLE_ANIMATIONS && <Character3D />}
```

### Fallback Mode
```javascript
// Use CSS animations as fallback
const useGSAP = false;

if (useGSAP) {
  // GSAP animations
} else {
  // CSS animations
}
```

---

## 📞 Support Resources

- **GSAP Forums**: https://greensock.com/forums/
- **Three.js Discourse**: https://discourse.threejs.org/
- **React Three Fiber**: https://docs.pmnd.rs/react-three-fiber
- **Stack Overflow**: Tag with `gsap`, `three.js`, `react`

---

## ✅ Prevention Tips

1. **Always clean up**
```javascript
useEffect(() => {
  // Setup
  return () => {
    // Cleanup
  };
}, []);
```

2. **Test incrementally**
- Add one animation at a time
- Test after each addition
- Commit working code

3. **Use version control**
```bash
git commit -m "Add working animation"
```

4. **Monitor performance**
- Use Chrome DevTools
- Check FPS regularly
- Profile on target devices

5. **Keep dependencies updated**
```bash
npm outdated
npm update
```

---

**Remember: Most issues are caused by:**
1. Missing imports (40%)
2. Incorrect selectors (30%)
3. Timing issues (20%)
4. CSS conflicts (10%)

**Always check these first! 🎯**
