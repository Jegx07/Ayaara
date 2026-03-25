import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Error boundary for Three.js components
class ThreeErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Three.js Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

function WristbandMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  // Create wristband geometry
  const bandGeometry = new THREE.TorusGeometry(1.2, 0.15, 16, 100);
  const displayGeometry = new THREE.BoxGeometry(0.8, 0.4, 0.1);

  return (
    <group>
      {/* Wristband */}
      <mesh
        ref={meshRef}
        geometry={bandGeometry}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <meshStandardMaterial
          color="#008080"
          metalness={0.3}
          roughness={0.4}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Display Screen */}
      <mesh geometry={displayGeometry} position={[0, 1.2, 0]}>
        <meshStandardMaterial
          color="#001115"
          metalness={0.8}
          roughness={0.2}
          emissive="#008080"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Screen Glow */}
      <pointLight
        position={[0, 1.2, 0.2]}
        color="#008080"
        intensity={0.5}
        distance={3}
      />
    </group>
  );
}

export default function WristbandModel() {
  // Fallback component for when 3D fails to load
  const FallbackComponent = () => (
    <div className="flex items-center justify-center h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-primary rounded-full animate-pulse" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">MotiTrack Wristband</h3>
          <p className="text-muted-foreground text-sm">Interactive 3D Model</p>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-background to-muted shadow-elegant relative"
    >
      <ThreeErrorBoundary fallback={<FallbackComponent />}>
        <Suspense fallback={<FallbackComponent />}>
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} />
            <WristbandMesh />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </Suspense>
      </ThreeErrorBoundary>
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
        Drag to rotate • Interactive 3D Model
      </div>
    </motion.div>
  );
}