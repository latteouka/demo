import { Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

// canvas default orthographic camera
const Scene = () => {
  console.log("scene");
  return (
    <div className="w-[100vw] h-[100vh] fixed">
      <Canvas orthographic camera={{ position: [0, 6, 10], zoom: 100 }}>
        <primitive object={new THREE.AxesHelper(10)} />
        <primitive object={new THREE.GridHelper(10)} />
        <Suspense>
          <Room />
        </Suspense>
        <Control />
      </Canvas>
    </div>
  );
};

export default Scene;

const Room = () => {
  console.log("room");
  const { scene } = useGLTF("/models/lecouernew.glb");
  return (
    <>
      <ambientLight intensity={0.5} />

      <primitive
        rotation={[0, -Math.PI / 4, 0]}
        object={scene}
        scale={0.4}
        position={[0, 0, 0]}
      />
    </>
  );
};

const Control = () => {
  console.log("control");
  const { x, y, z, zoom } = useControls({ x: 0, y: 7.2, z: 10, zoom: 170 });
  const { camera } = useThree();
  return useFrame(() => {
    camera.position.set(x, y, z);
    camera.zoom = zoom;
    camera.updateProjectionMatrix();
  });
};
