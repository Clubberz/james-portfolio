import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Grid, Text } from '@react-three/drei';
import * as THREE from 'three';

function DataStreams({ count = 100 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    const v = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
      v[i * 3] = (Math.random() - 0.5) * 0.05;
      v[i * 3 + 1] = (Math.random() - 0.5) * 0.05;
      v[i * 3 + 2] = (Math.random() - 0.5) * 0.05;
    }
    return { positions: p, velocities: v };
  }, [count]);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state) => {
    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      positions[i * 3] += points.velocities[i * 3];
      positions[i * 3 + 1] += points.velocities[i * 3 + 1] * 2 + Math.sin(state.clock.elapsedTime + i) * 0.01;
      positions[i * 3 + 2] += points.velocities[i * 3 + 2];

      if (Math.abs(positions[i * 3]) > 10) positions[i * 3] *= -1;
      if (Math.abs(positions[i * 3 + 1]) > 10) positions[i * 3 + 1] *= -1;
      if (Math.abs(positions[i * 3 + 2]) > 10) positions[i * 3 + 2] *= -1;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

function WireframeNode() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.07;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[2, 1, -5]}>
        <icosahedronGeometry args={[2, 4]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.05} />
      </mesh>
    </Float>
  );
}

export function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#171717]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <fog attach="fog" args={['#171717', 8, 20]} />
        <ambientLight intensity={0.5} />
        
        <Grid
          infiniteGrid
          fadeDistance={20}
          fadeStrength={5}
          cellSize={1}
          sectionSize={5}
          sectionThickness={1}
          sectionColor="#222"
          cellColor="#111"
        />

        <DataStreams count={150} />
        <WireframeNode />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <Text
            position={[-4, 2, -10]}
            fontSize={0.2}
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tMe82o97YOG_0z2u7S84Y94.woff"
            color="white"
            fillOpacity={0.1}
            textAlign="left"
          >
            {"01010101\nSYSTEMS_ACTIVE\nOPTIMIZING_RUNTIME\nDISTRIBUTED_NODE_CONNECTED"}
          </Text>
        </Float>
      </Canvas>
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#171717] opacity-60" />
    </div>
  );
}
