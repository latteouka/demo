import { useState, useRef, useCallback } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Particles from "../components/UnderWater/Particles";
import Number from "../components/UnderWater/Number";
// import Sparks from "../components/UnderWater/Sparks";
import Effects from "../components/UnderWater/Effect";

import { Perf } from "r3f-perf";

const UnderWater = () => {
  return (
    <div className="fixed h-screen w-screen">
      <Scene />
    </div>
  );
};

export default UnderWater;

const Scene = () => {
  const [down, set] = useState(false);
  const mouse = useRef([0, 0]);
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  );

  return (
    <Canvas
      camera={{ fov: 100, position: [0, 0, 30] }}
      onMouseMove={onMouseMove}
      onMouseUp={() => set(false)}
      onMouseDown={() => set(true)}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ReinhardToneMapping;
        gl.setClearColor(new THREE.Color("#020207"));
      }}
    >
      <pointLight distance={100} intensity={4} color="white" />

      <Particles count={5000} mouse={mouse} />
      <Number mouse={mouse} />
      <Effects down={down} />

      <Perf position="top-left" />
      <OrbitControls />
    </Canvas>
  );
};
