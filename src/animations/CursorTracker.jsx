import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CursorTracker = () => {
  const cursorRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * 0.15;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * 0.15;
      
      gsap.set(cursor, {
        x: posRef.current.x,
        y: posRef.current.y,
        xPercent: -50,
        yPercent: -50
      });

      requestAnimationFrame(animate);
    };

    const handleHover = (e) => {
      if (e.target.closest('[data-cursor="hover"]')) {
        gsap.to(cursor, { scale: 2, duration: 0.3 });
      } else {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleHover);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-6 h-6 border-2 border-primary rounded-full pointer-events-none z-[9999] hidden lg:block"
      style={{ mixBlendMode: 'difference' }}
    />
  );
};

export default CursorTracker;
