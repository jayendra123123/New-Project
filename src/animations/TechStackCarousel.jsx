import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';

// Technology data with brand colors
const technologies = [
  { name: 'React', color: '#61DAFB', lightColor: '#64DAFE' },
  { name: 'JavaScript', color: '#F7DF1E', lightColor: '#FFE033' },
  { name: 'Node.js', color: '#68A063', lightColor: '#7CBA5F' },
  { name: 'MongoDB', color: '#13AA52', lightColor: '#2DC95F' },
  { name: 'Express', color: '#000000', lightColor: '#333333' },
  { name: 'HTML5', color: '#E34C26', lightColor: '#FF5733' },
  { name: 'CSS3', color: '#1572B6', lightColor: '#1C7FBE' },
  { name: 'Tailwind', color: '#06B6D4', lightColor: '#14D4D4' },
  { name: 'TypeScript', color: '#3178C6', lightColor: '#4184D8' },
  { name: 'Git', color: '#F1502F', lightColor: '#FF6D3F' },
  { name: 'GitHub', color: '#181717', lightColor: '#333333' },
  { name: 'Python', color: '#3776AB', lightColor: '#4B8BBF' },
  { name: 'MySQL', color: '#00758F', lightColor: '#0E86B3' },
  { name: 'Firebase', color: '#FFCA28', lightColor: '#FFD740' },
  { name: 'AWS', color: '#FF9900', lightColor: '#FFB81D' },
  { name: 'Vercel', color: '#000000', lightColor: '#333333' },
  { name: 'Netlify', color: '#00C7B7', lightColor: '#00D9C8' },
  { name: 'VS Code', color: '#007ACC', lightColor: '#0E98D8' },
  { name: 'Next.js', color: '#000000', lightColor: '#404040' },
  { name: 'C++', color: '#00599C', lightColor: '#0078D4' },
];

const TechSphere = ({ position, tech, index }) => {
  const meshRef = useRef();
  const glowRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Bobbing animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index * 0.3) * 0.2;
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(hovered ? 1.4 : 1.1);
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Glow sphere */}
      <mesh ref={glowRef} scale={1.1}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial 
          color={tech.color}
          transparent
          opacity={hovered ? 0.3 : 0.1}
        />
      </mesh>

      {/* Main sphere */}
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={tech.color}
          emissive={tech.lightColor}
          emissiveIntensity={hovered ? 0.6 : 0.2}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Label text */}
      <Text
        position={[0, -0.85, 0]}
        fontSize={0.18}
        color={hovered ? tech.lightColor : '#ffffff'}
        outlineWidth={0.05}
        outlineColor="#000000"
        anchorX="center"
        anchorY="top"
        font="/fonts/inter-var.woff"
      >
        {tech.name}
      </Text>
    </group>
  );
};

const TechStackScene = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
    }
  });

  // Create orbital layout with 3 rings
  const ring1 = technologies.slice(0, 7).map((tech, i) => {
    const angle = (i / 7) * Math.PI * 2;
    const radius = 2.5;
    return (
      <TechSphere
        key={`ring1-${i}`}
        position={[Math.cos(angle) * radius, 2, Math.sin(angle) * radius]}
        tech={tech}
        index={i}
      />
    );
  });

  const ring2 = technologies.slice(7, 14).map((tech, i) => {
    const angle = (i / 7) * Math.PI * 2 + 0.5;
    const radius = 4.2;
    return (
      <TechSphere
        key={`ring2-${i}`}
        position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
        tech={tech}
        index={i + 7}
      />
    );
  });

  const ring3 = technologies.slice(14, 20).map((tech, i) => {
    const angle = (i / 6) * Math.PI * 2 + 1;
    const radius = 2.8;
    return (
      <TechSphere
        key={`ring3-${i}`}
        position={[Math.cos(angle) * radius, -2, Math.sin(angle) * radius]}
        tech={tech}
        index={i + 14}
      />
    );
  });

  return (
    <group ref={groupRef}>
      {ring1}
      {ring2}
      {ring3}
    </group>
  );
};

const TechStackCarousel = () => {
  return (
    <div className="w-full h-96 sm:h-[500px] md:h-[600px] relative overflow-hidden rounded-3xl border-2 border-primary/50 dark:border-primary/30 shadow-2xl bg-gradient-to-br from-slate-900/40 via-slate-800/20 to-primary/10 dark:from-slate-950 dark:via-slate-900/50 dark:to-primary/5">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(100, 218, 251, .2) 25%, rgba(100, 218, 251, .2) 26%, transparent 27%, transparent 74%, rgba(100, 218, 251, .2) 75%, rgba(100, 218, 251, .2) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(100, 218, 251, .2) 25%, rgba(100, 218, 251, .2) 26%, transparent 27%, transparent 74%, rgba(100, 218, 251, .2) 75%, rgba(100, 218, 251, .2) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        {/* Advanced Lighting */}
        <ambientLight intensity={0.6} color="#ffffff" />
        <pointLight position={[8, 8, 8]} intensity={2} color="#64DAFE" />
        <pointLight position={[-8, -8, 8]} intensity={1.5} color="#FFD740" />
        <pointLight position={[0, 0, -5]} intensity={1} color="#FF6D3F" />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        
        <TechStackScene />
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.8}
          enableZoom={true}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI * 0.8}
        />
      </Canvas>

      {/* Overlay Gradient (Top & Bottom) */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-950/60 dark:from-slate-950 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/60 dark:from-slate-950 to-transparent pointer-events-none"></div>

      {/* Corner Accents */}
      <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-4 left-4 w-40 h-40 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* Info Text */}
      <div className="absolute bottom-6 left-6 right-6 text-xs sm:text-sm text-white/70 dark:text-white/60 font-medium pointer-events-none">
        <p>✨ Hover over spheres • Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
};

export default TechStackCarousel;
