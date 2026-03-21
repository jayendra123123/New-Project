import React, { useRef, useEffect } from 'react';

const SocialIconHover = ({ children, className = '' }) => {
  const iconRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const icon = iconRef.current;
    if (!icon) return;

    const handleMouseMove = (e) => {
      const rect = icon.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      targetRef.current = { x: x * 0.3, y: y * 0.3 };
    };

    const handleMouseLeave = () => {
      targetRef.current = { x: 0, y: 0 };
    };

    const animate = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.1;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.1;
      
      icon.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      
      requestAnimationFrame(animate);
    };

    icon.addEventListener('mousemove', handleMouseMove);
    icon.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      icon.removeEventListener('mousemove', handleMouseMove);
      icon.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={iconRef} className={`transition-transform ${className}`}>
      {children}
    </div>
  );
};

export default SocialIconHover;
