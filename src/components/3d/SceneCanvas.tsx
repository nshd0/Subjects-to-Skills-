import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';

interface SceneCanvasProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
}

export function SceneCanvas({ children, cameraPosition = [0, 0, 15] }: SceneCanvasProps) {
  return (
    <div className="w-full h-full min-h-[500px] bg-slate-900 rounded-2xl overflow-hidden relative shadow-inner">
      <Canvas
        dpr={[1, 2]} // Limit pixel ratio for performance
        camera={{ position: cameraPosition, fov: 50 }}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={['#0f172a']} /> {/* tailwind slate-900 */}
        
        {/* Basic Lighting setup */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Suspense fallback={null}>
          {children}
          {/* Preload ensures all assets are ready before revealing */}
          <Preload all />
        </Suspense>

        {/* User Interaction Controls */}
        <OrbitControls 
          makeDefault 
          enableDamping 
          dampingFactor={0.05} 
          minDistance={5} 
          maxDistance={50}
        />
      </Canvas>
    </div>
  );
}
