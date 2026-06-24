import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  precision mediump float;
  varying vec2 vUv;
  attribute vec2 a_position;

  void main() {
    vUv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;
  varying vec2 vUv;
  uniform float u_time;

  #define PI 3.14159265359
  #define TAU 6.28318530718

  vec3 palette(float t) {
    return vec3(0.5, 0.5, 0.5) + 0.5 * cos(TAU * (vec3(1.0, 1.0, 1.0) * t + vec3(0.0, 0.33, 0.67)));
  }

  void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    vec2 aspect = vec2(1.0);
    uv *= aspect;

    float t = u_time * 0.2;
    float angle = t * 0.5;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    uv = rot * uv;

    float dist = length(uv);
    vec3 color = vec3(0.0);
    float waveAccum = 0.0;

    int NUM_LAYERS = 7;

    for (int i = 0; i < 7; i++) {
      float fi = float(i);
      float freq = 2.0 + fi * 1.5;
      float amp = 0.15 / (1.0 + fi * 0.3);
      float speed = 0.3 + fi * 0.1;
      float phase = fi * 1.7;

      float wave = sin(uv.x * freq + t * speed * TAU + phase) * amp;
      float radialFade = smoothstep(1.0, 0.0, dist);
      float layerWeight = 1.0 / (1.0 + fi * 0.4);
      float mask = smoothstep(-0.05, 0.05, wave - uv.y) * radialFade * layerWeight;

      waveAccum += mask * layerWeight;
      color += palette(fi / float(NUM_LAYERS) + t * 0.1 + dist * 0.3) * mask * 1.2;
    }

    dist += waveAccum * 0.1;
    color += palette(dist + t * 0.15) * 0.1;
    color = mix(color, vec3(0.9, 0.8, 0.7), waveAccum * 0.3);

    float alpha = waveAccum * 1.5;
    alpha *= 0.3;

    gl_FragColor = vec4(color, alpha);
  }
`;

function BifrostPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0.0 },
    }),
    []
  );

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      -1, 1,
      1, -1,
      1, 1,
    ]);
    geo.setAttribute('a_position', new THREE.BufferAttribute(positions, 2));
    return geo;
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh>
      <primitive object={geometry} attach="geometry" />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

export function BifrostBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
      }}
    >
      <Canvas
        orthographic
        camera={{ zoom: 1, position: [0, 0, 1] }}
        style={{ width: '100%', height: '100%' }}
        gl={{ alpha: true, antialias: false }}
      >
        <BifrostPlane />
      </Canvas>
    </div>
  );
}
