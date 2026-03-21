import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// Simple character made of primitives
const SimpleCharacter = ({ scrollProgress }) => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [blinkTimer, setBlinkTimer] = useState(0);

  useFrame((state) => {
    if (groupRef.current) {
      // Rotation based on scroll
      groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
      
      // Idle animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      
      // Blinking
      setBlinkTimer(prev => prev + 0.016);
    }
  });

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (['1', '2', '5', '6'].includes(e.key) && groupRef.current) {
        gsap.to(groupRef.current.rotation, {
          x: groupRef.current.rotation.x + 0.5,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const eyeScale = Math.sin(blinkTimer * 2) > 0.95 ? 0.1 : 1;

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Head */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={hovered ? '#FFD700' : '#FFA500'} />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.3, 0.2, 0.8]} scale={[1, eyeScale, 1]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.3, 0.2, 0.8]} scale={[1, eyeScale, 1]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Eyebrows */}
      <mesh position={[-0.3, 0.4 + (hovered ? 0.1 : 0), 0.8]}>
        <boxGeometry args={[0.3, 0.05, 0.05]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.3, 0.4 + (hovered ? 0.1 : 0), 0.8]}>
        <boxGeometry args={[0.3, 0.05, 0.05]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, -1.5, 0]}>
        <boxGeometry args={[1.2, 1.5, 0.8]} />
        <meshStandardMaterial color="#4A90E2" />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.8, -1.2, 0]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshStandardMaterial color="#FFA500" />
      </mesh>
      <mesh position={[0.8, -1.2, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshStandardMaterial color="#FFA500" />
      </mesh>
    </group>
  );
};

const Character3D = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => setScrollProgress(self.progress)
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />
        <SimpleCharacter scrollProgress={scrollProgress} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Character3D;
