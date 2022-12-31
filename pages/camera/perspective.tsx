import { Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

// canvas default orthographic camera
const Camera = () => {
  return (
    <div className="w-[100vw] h-[100vh] fixed">
      <Canvas camera={{ position: [0, 6, 10] }}>
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
  const { x, y, z } = useControls({ x: 0, y: 6, z: 10 });
  const { camera } = useThree();

  useFrame(() => {
    camera.position.set(x, y, z);
    camera.updateProjectionMatrix();
  });

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
