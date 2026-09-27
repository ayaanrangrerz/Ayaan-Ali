import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  className?: string;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Test WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // Set up Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch {
      setHasWebGL(false);
      return;
    }

    // Create Main Core: Holographic Wireframe Icosahedron & Inner Core
    const group = new THREE.Group();
    scene.add(group);

    // 1. Outer Icosahedron Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(2.1, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    group.add(outerMesh);

    // 2. Inner Glowing Core
    const innerGeo = new THREE.IcosahedronGeometry(1.4, 3);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x0369a1,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // 3. Orbital Data Rings
    const ringGeo1 = new THREE.TorusGeometry(2.7, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    group.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.9, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x818cf8, // Subtle Violet/Indigo
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 4;
    group.add(ring2);

    // 4. Floating Neural Particle Nexus
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x06b6d4);
    const color2 = new THREE.Color(0x818cf8);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 2, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const rimLight = new THREE.PointLight(0x818cf8, 1.5, 50);
    rimLight.position.set(-5, -4, -3);
    scene.add(rimLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 1.5;
      mouseY = (e.clientY / innerHeight - 0.5) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // WebGL Context Lost handling
    const domElem = renderer.domElement;
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      setHasWebGL(false);
    };
    domElem.addEventListener('webglcontextlost', handleContextLost, false);

    // IntersectionObserver to pause render when scrolled out of view
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 0.1 });
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isIntersecting) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      if (!prefersReducedMotion) {
        group.rotation.y = elapsedTime * 0.15 + targetX;
        group.rotation.x = Math.sin(elapsedTime * 0.1) * 0.2 + targetY;
        
        outerMesh.rotation.y = -elapsedTime * 0.08;
        outerMesh.rotation.z = elapsedTime * 0.05;

        ring1.rotation.z = elapsedTime * 0.2;
        ring2.rotation.z = -elapsedTime * 0.25;

        particles.rotation.y = elapsedTime * 0.05;
      }

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    // Window Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      domElem.removeEventListener('webglcontextlost', handleContextLost);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }

      // Dispose Geometries and Materials
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [isIntersecting]);

  return (
    <div ref={containerRef} className={`relative w-full h-full min-h-[380px] lg:min-h-[500px] flex items-center justify-center ${className}`}>
      {/* Graceful 2D fallback if WebGL unavailable */}
      {!hasWebGL && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border border-cyan-500/30 bg-gradient-to-tr from-cyan-950/40 via-sky-900/20 to-transparent flex items-center justify-center shadow-2xl shadow-cyan-500/10 animate-pulse">
            <div className="w-40 h-40 rounded-full border border-cyan-400/40 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-cyan-500/20 blur-md" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
