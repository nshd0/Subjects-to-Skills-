import React, { useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';
import { SubjectSkillMap } from '@/types';

interface SkillMap3DProps {
  skills: SubjectSkillMap[];
  onNodeClick?: (skill: SubjectSkillMap) => void;
}

const STAGES = ['Foundational', 'Preparatory', 'Middle', 'Secondary'];

export function SkillMap3D({ skills, onNodeClick }: SkillMap3DProps) {
  // Compute positions based on stages and spread them out
  const nodes = useMemo(() => {
    return skills.map((skill, index) => {
      const stageIndex = STAGES.indexOf(skill.stage) !== -1 ? STAGES.indexOf(skill.stage) : 0;
      
      // X base position is based on the stage progression (left to right)
      const baseX = (stageIndex * 6) - 9; 
      
      // Add deterministic spread for Y and Z based on index so it doesn't shift on every re-render
      // Pseudo-random spread for a nice clustered look
      const ySpread = (Math.sin(index * 4.3) * 3);
      const zSpread = (Math.cos(index * 2.1) * 3);

      const position = new THREE.Vector3(baseX, ySpread, zSpread);

      return {
        ...skill,
        position,
        color: getStageColor(skill.stage)
      };
    });
  }, [skills]);

  // Compute lines between nodes in consecutive stages to show progression
  const lines = useMemo(() => {
    const connections: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    
    nodes.forEach((node) => {
      const stageIndex = STAGES.indexOf(node.stage);
      if (stageIndex < STAGES.length - 1) {
        // Find a random node in the next stage to connect to, simulating pathways
        const nextStageNodes = nodes.filter(n => n.stage === STAGES[stageIndex + 1]);
        if (nextStageNodes.length > 0) {
          // just connect to 1 or 2 nodes in the next stage for visual effect
          const targetNode = nextStageNodes[Math.floor(Math.abs(Math.sin(node.position.x)) * nextStageNodes.length)];
          connections.push({
            start: node.position,
            end: targetNode.position
          });
        }
      }
    });
    return connections;
  }, [nodes]);

  return (
    <group>
      {/* Render connection lines */}
      {lines.map((line, idx) => (
        <Line 
          key={`line-${idx}`} 
          points={[line.start, line.end]} 
          color="#334155" // slate-700
          lineWidth={1}
          transparent
          opacity={0.3}
        />
      ))}

      {/* Render Skill Nodes */}
      {nodes.map((node) => (
        <SkillNode 
          key={node.id} 
          node={node} 
          onClick={() => onNodeClick?.(node)}
        />
      ))}
    </group>
  );
}

// Helper to render individual nodes with hover states
function SkillNode({ node, onClick }: { node: any; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = React.useRef<THREE.Mesh>(null);

  // Subtle floating animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = node.position.y + Math.sin(state.clock.elapsedTime + node.position.x) * 0.1;
    }
  });

  return (
    <group position={node.position}>
      <Sphere
        ref={meshRef}
        args={[0.4, 32, 32]}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          setHovered(false);
          document.body.style.cursor = 'default';
        }}
      >
        <meshStandardMaterial 
          color={hovered ? '#ffffff' : node.color} 
          roughness={0.2}
          metalness={0.8}
          emissive={node.color}
          emissiveIntensity={hovered ? 0.5 : 0.1}
        />
      </Sphere>

      {/* HTML Tooltip overlay */}
      {hovered && (
        <Html distanceFactor={15} center zIndexRange={[100, 0]}>
          <div className="bg-slate-900/90 text-slate-50 text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl border border-slate-700 pointer-events-none backdrop-blur-sm">
            <p className="font-bold text-indigo-300">{node.primarySkill || node.competency}</p>
            <p className="text-slate-400 mt-1">{node.stage} • Grade {node.grade}</p>
          </div>
        </Html>
      )}
    </group>
  );
}

function getStageColor(stage: string) {
  switch (stage) {
    case 'Foundational': return '#eab308'; // yellow-500
    case 'Preparatory': return '#ec4899'; // pink-500
    case 'Middle': return '#8b5cf6'; // violet-500
    case 'Secondary': return '#06b6d4'; // cyan-500
    default: return '#94a3b8'; // slate-400
  }
}
