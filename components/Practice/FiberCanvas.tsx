import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Floor from "./Floor";
import Room from "./Room";
import gsap from "gsap";

import { useTheme } from "next-themes";
import Circle from "./Circle";

// The Canvas component does some important setup work behind the scenes:
// It sets up a Scene and a Camera, the basic building blocks necessary for rendering
// It renders our scene every frame, you do not need a traditional render-loop
//
const FiberCanvas = ({ ...props }) => {
  const { resolvedTheme } = useTheme();
  const ambientLightRef = useRef(null);
  const directionalLightRef = useRef(null);

  // use GSAP to change AmbientLight and DirectionalLight
  useEffect(() => {
    if (ambientLightRef.current && directionalLightRef.current) {
      if (resolvedTheme === "dark") {
        gsap.to(ambientLightRef.current.color, {
          r: 44 / 255,
          g: 59 / 255,
          b: 175 / 255,
        });
        gsap.to(ambientLightRef.current, {
          intensity: 0.8,
        });
        gsap.to(directionalLightRef.current.color, {
          r: 44 / 255,
          g: 59 / 255,
          b: 175 / 255,
        });
        gsap.to(directionalLightRef.current, {
          intensity: 0.4,
        });
      } else {
        gsap.to(ambientLightRef.current.color, {
          r: 255 / 255,
          g: 255 / 255,
          b: 255 / 255,
        });
        gsap.to(ambientLightRef.current, {
          intensity: 0.8,
        });
        gsap.to(directionalLightRef.current.color, {
          r: 255 / 255,
          g: 255 / 255,
          b: 255 / 255,
        });
        gsap.to(directionalLightRef.current, {
          intensity: 0.78,
        });
      }
    }
  }, [resolvedTheme]);
  return (
    <Canvas
      shadows
      orthographic
      camera={{ position: [0, 6, 10], zoom: 90 }}
      {...props}
    >
      {/*
      <OrbitControls />
      <primitive object={new THREE.AxesHelper(10)} />
      <primitive object={new THREE.GridHelper(10)} />
       */}
      <color args={["#DFE2CF"]} attach="background" />
      {/*
      <primitive object={new THREE.GridHelper(20, 20)} />
      */}

      <ambientLight ref={ambientLightRef} intensity={0.8} color="#ffffff" />
      <directionalLight
        ref={directionalLightRef}
        intensity={0.78}
        color="#ffffff"
        position={[-1.5, 10, 5]}
        shadow-mapSize={1024}
        shadow-normalBias={-0.0005}
        shadow-bias={-0.0005}
        shadow-camera-near={0.1}
        shadow-camera-far={100}
        shadow-camera-top={-10}
        shadow-camera-bottom={10}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-radius={100}
        castShadow
      ></directionalLight>

      <Room />
      <Circle />
      <Floor />
    </Canvas>
  );
};

export default FiberCanvas;
