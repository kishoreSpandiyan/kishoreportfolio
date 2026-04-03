import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

type RetroShapeProps = {
  isDark: boolean;
};

const RetroShape = ({ isDark }: RetroShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.2;
      meshRef.current.rotation.z = Math.cos(t * 0.1) * 0.05;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = t * -0.15;
      wireRef.current.rotation.x = Math.cos(t * 0.12) * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <group>
        {/* Inner solid shape */}
        <mesh ref={meshRef} scale={1.8}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={isDark ? "#38bdf8" : "#1e40af"}
            emissive={isDark ? "#0ea5e9" : "#1d4ed8"}
            emissiveIntensity={isDark ? 0.2 : 0.35}
            roughness={0.15}
            metalness={0.75}
            wireframe
          />
        </mesh>
        {/* Outer wireframe */}
        <mesh ref={wireRef} scale={2.6}>
          <icosahedronGeometry args={[1, 0]} />
          <meshBasicMaterial
            color={isDark ? "#67e8f9" : "#0f766e"}
            wireframe
            transparent
            opacity={isDark ? 0.2 : 0.42}
          />
        </mesh>
      </group>
    </Float>
  );
};

const HeroScene = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setIsDark(root.classList.contains("dark"));

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 50 }}
      className="!absolute inset-0"
      style={{ pointerEvents: "auto" }}
    >
      <ambientLight intensity={isDark ? 0.18 : 0.28} />
      <pointLight position={[5, 5, 5]} intensity={isDark ? 1.2 : 1.35} color={isDark ? "#22d3ee" : "#1d4ed8"} />
      <pointLight position={[-5, -5, 5]} intensity={isDark ? 0.8 : 0.9} color={isDark ? "#f472b6" : "#0ea5e9"} />
      <pointLight position={[0, -5, 3]} intensity={isDark ? 0.4 : 0.5} color={isDark ? "#f59e0b" : "#2563eb"} />
      <RetroShape isDark={isDark} />
    </Canvas>
  );
};

export default HeroScene;
