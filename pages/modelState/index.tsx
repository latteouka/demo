import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

import useRoomModel from "../../utils/useRoomModel";
import useCheckDevice from "../../utils/useCheckDevice";
import usePlayIntro from "../../utils/usePlayIntro";

import { Suspense, useRef } from "react";
import Loading from "../../components/Lecouer/Loading";

const Model = () => {
  // this is for light testing
  const boxSize: any = [0, 0, 0];
  // Canvas is responsive to fit the parent node,
  // so you can control how big it is by changing
  // the parents width and height.
  return (
    <div className="w-[100vw] h-[100vh] fixed">
      <Loading />
      <Suspense fallback={null}>
        <Canvas
          gl={{
            outputEncoding: THREE.sRGBEncoding,
            toneMapping: THREE.ReinhardToneMapping,
            toneMappingExposure: 3,
          }}
          orthographic
          camera={{ position: [0, 6, 10], zoom: 170 }}
          shadows
        >
          <ambientLight intensity={0.6} color="#FEF3E3" />
          <directionalLight
            args={["#FEF3E3", 1.2]}
            castShadow
            position={[2, 6, 6]}
            shadow-mapSize={512}
            shadow-normalBias={-0.006}
            shadow-bias={-0.006}
            shadow-camera-near={0.1}
            shadow-camera-far={15}
            shadow-camera-top={-8}
            shadow-camera-bottom={8}
            shadow-camera-left={-8}
            shadow-camera-right={8}
          >
            <mesh>
              <boxGeometry args={boxSize}></boxGeometry>
              <meshBasicMaterial color={0xff0000} />
            </mesh>
          </directionalLight>

          <pointLight
            color="#F9F4E6"
            position={[-0.1, 1, -0.1]}
            intensity={0.2}
            distance={3}
          >
            <mesh>
              <boxGeometry args={boxSize}></boxGeometry>
              <meshBasicMaterial color={0xff0000} />
            </mesh>
          </pointLight>

          <Room />
          <mesh
            rotation={[Math.PI / 2 + Math.PI, 0, 0]}
            position={[0, -1.25, 0]}
            receiveShadow
          >
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color={0xfef3e3} />
          </mesh>
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Model;

const Room = () => {
  const roomRef = useRef(null);

  // custom hook to setup Room Models and get animations
  const [scene, elements, actions] = useRoomModel("/models/lecouernew.glb");
  console.log(actions);
  // resize observer
  const device = useCheckDevice();
  // play intro
  usePlayIntro(elements, actions);

  //actions["blue_box.003Action"].play();

  useFrame((state) => {
    // for orthographic camera resize update
    // and for zoom animation is needed
    // state.camera.updateProjectionMatrix();

    // room will slightly rotate with mouse move
    roomRef.current.rotation.y = THREE.MathUtils.lerp(
      -Math.PI / 4,
      -Math.PI / 4 + state.mouse.x * Math.PI * 0.3,
      0.05
    );
  });

  return (
    <primitive
      ref={roomRef}
      rotation={[0, -Math.PI / 4, 0]}
      object={scene}
      scale={0.4}
      position={[0, -1.15, 0]}
    />
  );
};
