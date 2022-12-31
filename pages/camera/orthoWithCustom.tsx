import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

// canvas default orthographic camera
const Camera = () => {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-[100vw] h-[100vh] fixed" ref={divRef}>
      <Canvas>
        <OrthographicCamera makeDefault position={[0, 6, 10]} zoom={100} />
        <primitive object={new THREE.AxesHelper(10)} />
        <primitive object={new THREE.GridHelper(10)} />
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

  // this is the point
  // look at 0,0,0 for once
  useEffect(() => {
    camera.lookAt(0, 0, 0);
  }, []);

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
        position={[0, 0, 0]}
      />
    </>
  );
};
