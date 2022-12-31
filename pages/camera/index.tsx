import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

// canvas default perspective camera
const Camera = () => {
  return (
    <div className="w-[100vw] h-[100vh] fixed">
      <Canvas>
        <Suspense>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Camera;

const Scene = () => {
  const { scene } = useGLTF("/models/lecouernew.glb");

  return (
    <>
      <ambientLight intensity={0.5} />

      <primitive
        rotation={[0, -Math.PI / 4, 0]}
        object={scene}
        scale={0.4}
        position={[0, -1.15, 0]}
      />
    </>
  );
};
