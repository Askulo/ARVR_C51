import * as THREE from "three";
import { useMemo, useEffect } from "react";

export default function WallGridMaterialZY({
  color = "#dddddd",
  gridSize = 0.1,
  lineWidth = 0.00012,
  horizontalScale = 1.0,
  verticalScale = 1.0,
}) {
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(color) },
        uGridSize: { value: gridSize },
        uLineWidth: { value: lineWidth },
        uHorizontalScale: { value: horizontalScale },
        uVerticalScale: { value: verticalScale },
      },
      vertexShader: `
        varying vec3 vWorldPos;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        precision mediump float;
        varying vec3 vWorldPos;
        uniform vec3 uColor;
        uniform float uGridSize;
        uniform float uLineWidth;
        uniform float uHorizontalScale;
        uniform float uVerticalScale;
        
        float gridLine(float coord, float width, float scale) {
          float d = abs(fract(coord) - 0.5);
          float w = fwidth(coord);
          return 1.0 - smoothstep(width * scale - w, width * scale + w, d);
        }
        
        float gridZY(vec3 worldPos) {
          vec2 coord = worldPos.zy * uGridSize * 0.2;
          
          float coordZ = coord.x * uHorizontalScale;
          float coordY = coord.y * uVerticalScale;
          
          float lineZ = gridLine(coordZ, uLineWidth, uHorizontalScale);
          float lineY = gridLine(coordY, uLineWidth, uVerticalScale);
          
          return max(lineZ, lineY);
        }
        
        void main() {
          float grid = gridZY(vWorldPos);
          // Gray background color hardcoded
          vec3 backgroundColor = vec3(0.125, 0.125, 0.125); // RGB gray (#808080)
          vec3 color = mix(backgroundColor, uColor, grid);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });
  }, []);

  useEffect(() => {
    material.uniforms.uColor.value.set(color);
    material.uniforms.uGridSize.value = gridSize;
    material.uniforms.uLineWidth.value = lineWidth;
    material.uniforms.uHorizontalScale.value = horizontalScale;
    material.uniforms.uVerticalScale.value = verticalScale;
  }, [color, gridSize, lineWidth, horizontalScale, verticalScale, material]);

  return <primitive object={material} attach="material" />;
}