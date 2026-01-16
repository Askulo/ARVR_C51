import * as THREE from "three";

const ceilingShader = new THREE.ShaderMaterial({
  uniforms: {
    uColor: { value: new THREE.Color("#dddddd") },
    uGridSize: { value: 1.0 },     // grid spacing in world units
    uLineWidth: { value: 0.02 }    // visual thickness
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

    // Anti-aliased grid line function
    float gridLine(float coord, float width) {
      float w = fwidth(coord);
      float d = abs(fract(coord) - 0.5);
      return 1.0 - smoothstep(width - w, width + w, d);
    }

    void main() {
      // ✅ Choose plane (XZ = floor/ceiling, XY = walls)
      vec2 coord = vWorldPos.xz * uGridSize;

      float lineX = gridLine(coord.x, uLineWidth);
      float lineY = gridLine(coord.y, uLineWidth);

      float line = max(lineX, lineY);

      vec3 color = mix(uColor, vec3(0.0), line);

      gl_FragColor = vec4(color, 1.0);
    }
  `,
});

export default ceilingShader;
