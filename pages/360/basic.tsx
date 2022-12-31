import { Suspense } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls } from "@react-three/drei";

function Scene() {
  const colorMap = useLoader(TextureLoader, "/room360.jpg");
  const { camera } = useThree();
  camera.position.set(-1, 0, 0);
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight />
      <mesh>
        <sphereGeometry args={[50, 32, 32]} />
        <meshStandardMaterial map={colorMap} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

const Basic = () => {
  return (
    <div className="w-[100vw] h-[100vh] fixed">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
export default Basic;
