'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTheme } from 'next-themes';
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from '@react-three/postprocessing';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';
import { PerformanceMonitor } from '@react-three/drei';
import { Bvh } from '@react-three/drei';

// Use InstancedMesh instead of BatchedMesh
const geometry = new THREE.InstancedMesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial(),
  1
);

const lightThemeColor = new THREE.Color('#f0f0ff');
const darkThemeColor = new THREE.Color('#070714');

const AnimatedParticles = ({ count = 2000, activeTheme }: { count?: number; activeTheme: string }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { viewport, size } = useThree();
  
  // Colors for both themes
  const isDark = activeTheme === 'dark';
  const particleColor = isDark ? '#6839f7' : '#6839f7';
  const secondaryColor = isDark ? '#e3387b' : '#e3387b';
  
  // Create instanced material and dummy object
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dummy = new THREE.Object3D();
  const baseScale = Math.min(3, size.width / 1800);
  
  // Set up particles on mount
  useEffect(() => {
    if (mesh.current) {
      // Generate random particles
      const instancedMesh = mesh.current;
      const maxDistance = Math.max(viewport.width, viewport.height) * 0.7;
      
      for (let i = 0; i < count; i++) {
        // Random position in a circular area
        const theta = THREE.MathUtils.randFloatSpread(360);
        const radius = Math.pow(Math.random(), 0.5) * maxDistance;
        
        const x = radius * Math.cos(theta);
        const y = radius * Math.sin(theta);
        const z = THREE.MathUtils.randFloatSpread(20) - 10;
        
        // Set position and random scale
        dummy.position.set(x, y, z);
        
        const scale = Math.random() * 0.6 * baseScale + 0.1 * baseScale;
        dummy.scale.set(scale, scale, scale);
        
        // Apply matrix to instanced mesh
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
        
        // Set random color between primary and secondary
        const colorRatio = Math.random();
        const color = new THREE.Color(particleColor).lerp(
          new THREE.Color(secondaryColor),
          colorRatio
        );
        instancedMesh.setColorAt(i, color);
      }
      
      instancedMesh.instanceMatrix.needsUpdate = true;
      if (instancedMesh.instanceColor) {
        instancedMesh.instanceColor.needsUpdate = true;
      }
    }
  }, [count, viewport, activeTheme, baseScale, particleColor, secondaryColor, dummy]);
  
  const { particleRotation } = useSpring({
    particleRotation: 0.001,
    config: { mass: 1, friction: 10 },
  });
  
  // Animate particles
  useFrame(({ clock, pointer, viewport }) => {
    if (mesh.current) {
      const elapsedTime = clock.getElapsedTime();
      
      // Rotate the entire instanced mesh
      mesh.current.rotation.z = elapsedTime * 0.03;
      
      // Slightly move based on mouse position
      mesh.current.position.x = (pointer.x * viewport.width) / 20;
      mesh.current.position.y = (pointer.y * viewport.height) / 20;
    }
  });
  
  return (
    <animated.instancedMesh
      ref={mesh}
      args={[undefined, undefined, count]}
      rotation-z={particleRotation}
    >
      <circleGeometry args={[0.15, 8]} />
      <meshBasicMaterial />
    </animated.instancedMesh>
  );
};

const Scene = ({ activeTheme }: { activeTheme: string }) => {
  const { gl, scene } = useThree();
  
  // Set up scene on mount
  useEffect(() => {
    scene.fog = new THREE.FogExp2(
      activeTheme === 'dark' ? '#070714' : '#f0f0ff',
      0.015
    );
    scene.background = activeTheme === 'dark' ? darkThemeColor : lightThemeColor;
  }, [activeTheme, scene]);
  
  const [perfSetting, setPerfSetting] = useState(1);
  
  return (
    <>
      <PerformanceMonitor
        onDecline={() => setPerfSetting(0.75)}
        onIncline={() => setPerfSetting(1)}
      />
      
      <AnimatedParticles
        count={perfSetting === 1 ? 3000 : 1500}
        activeTheme={activeTheme}
      />
      
      <EffectComposer>
        <Bloom luminanceThreshold={0.1} intensity={0.3} mipmapBlur />
        <ChromaticAberration offset={new THREE.Vector2(0.0005, 0.0005)} radialModulation={false} modulationOffset={0} />
      </EffectComposer>
    </>
  );
};

export default function BackgroundScene() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className="three-canvas-container">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        gl={{ 
          antialias: false,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false,
        }}
      >
        <Scene activeTheme={theme || 'dark'} />
      </Canvas>
    </div>
  );
}