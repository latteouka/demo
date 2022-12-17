import * as THREE from "three";
import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import glsl from "babel-plugin-glsl/macro";

const vertex = glsl`
  precision mediump float;

  varying vec2 vUv;
  varying float vWave;

  uniform float uTime;

  #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

  void main() {
    vUv = uv;

    vec3 pos = position;
    float noiseFreq = 1.5;
    float noiseAmp = 0.25;
    vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
    pos.z += snoise3(noisePos) * noiseAmp;

    vWave = pos.z;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragment = glsl`
  precision mediump float;

  uniform vec3 uColor;
  uniform float uTime;
  uniform sampler2D uTexture;

  varying vec2 vUv;
  varying float vWave;

  void main() {
    float wave = vWave * 0.5;
    vec3 texture = texture2D(uTexture, vUv + wave).rgb;
    gl_FragColor = vec4(texture, 1.0);
  }
`;

const Index = () => {
  return (
    <div className="w-full h-[100vh] p-0 m-0">
      <Scene />
    </div>
  );
};

export default Index;

const Wave = () => {
  const ref = useRef<THREE.ShaderMaterial>(null);

  const [image] = useLoader(THREE.TextureLoader, ["/images/test.jpg"]);

  useFrame(({ clock }) => {
    ref.current.uniforms.uTime.value = clock.getElapsedTime();
  });
  return (
    <mesh>
      <planeGeometry name="geometry" args={[0.4, 0.6, 16, 16]} />
      <shaderMaterial
        ref={ref}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={{
          uColor: { value: new THREE.Color(0, 1, 0) },
          uTime: { value: 0 },
          uTexture: { value: image },
        }}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas className="w-full h-full" camera={{ fov: 10, position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Wave />
      </Suspense>
    </Canvas>
  );
};

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       waveShaderMaterial: THREE.ShaderMaterial & { key: string };
//     }
//   }
// }

// declare module "@react-three/fiber" {
//   interface ThreeElements {
//     waveShaderMaterial: ShaderMaterialProps;
//   }
// }
