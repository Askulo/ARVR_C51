import * as THREE from "three";
import { useMemo } from "react";
import { extend } from "@react-three/fiber";

export default function BrushGlassMaterial({
  opacity = 0.9,
  color = "#896969",
  glowColor = "#ffcc88",
  density = 4.0, // Controls how "busy" the glass strokes are
}) {
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      // depthWrite: false, // Turn this on if the glass looks weird through other glass
      uniforms: {
        uOpacity: { value: opacity },
        uColor: { value: new THREE.Color(color) },
        uGlowColor: { value: new THREE.Color(glowColor) },
        uDensity: { value: density },
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          vUv = uv;
          // Calculate normal for the Fresnel (shiny edge) effect
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        uniform float uDensity;
        uniform vec3 uColor;
        uniform vec3 uGlowColor;
        uniform float uTime;
        
        varying vec2 vUv;
        varying vec3 vNormal;

        // Hash function for procedural noise
        float hash(vec2 p) { 
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); 
        }
        
        // Voronoi-based noise to create the crystalline "stroke" effect
        float glassNoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          float dist = 1.0;
          for (int y = -1; y <= 1; y++) {
            for (int x = -1; x <= 1; x++) {
              vec2 neighbor = vec2(float(x), float(y));
              vec2 point = vec2(hash(i + neighbor), hash(i + neighbor + 121.1));
              vec2 diff = neighbor + point - f;
              dist = min(dist, dot(diff, diff));
            }
          }
          return dist;
        }

        void main() {
          // Create layered streaks using the UVs and density
          float n1 = glassNoise(vUv * uDensity);
          float n2 = glassNoise(vUv * (uDensity * 2.0) + n1);
          
          // 'streaks' creates the sharp paint-stroke look from your image
          float streaks = pow(1.0 - n2, 3.0);
          
          // Fresnel effect: makes edges glow, simulating glass thickness
          // We use vec3(0,0,1) as a simple view direction approximation
          float fresnel = pow(1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0), 3.0);
          
          // Mix the base Marron color with the bright Glow color based on strokes
          vec3 finalColor = mix(uColor, uGlowColor, streaks * 0.8);
          
          // Add the shiny edge highlight
          finalColor += fresnel * 0.5;
          
          gl_FragColor = vec4(finalColor, uOpacity);
        }
      `,
    });
  }, [opacity, color, glowColor, density]);

  return <primitive attach="material" object={material} />;
}

extend({ BrushGlassMaterial });