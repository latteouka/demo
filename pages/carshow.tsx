import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  CubeCamera,
  Environment,
  OrbitControls,
  Preload,
} from "@react-three/drei";

import Ground from "../components/Carshow/Ground";
import Car from "../components/Carshow/Car";
import Rings from "../components/Carshow/Rings";
import Boxes from "../components/Carshow/Boxes";
import FloatingGrid from "../components/Carshow/FloatingGrid";

import {
  EffectComposer,
  DepthOfField,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Vector2 } from "three";

const Carshow = () => {
  return (
    <div className="fixed w-screen h-screen">
      <Scene />
    </div>
  );
};

export default Carshow;

const Scene = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[5, 5, 5]} />

        <color args={[0, 0, 0]} attach="background" />

        <Rings />

        {/* <CubeCamera resolution={256} frames={Infinity}> */}
        {/*   {(texture) => ( */}
        {/*     <> */}
        {/*       <Environment map={texture} /> */}
        {/*       <Car /> */}
        {/*     </> */}
        {/*   )} */}
        {/* </CubeCamera> */}

        <Boxes />

        <Ground />

        <spotLight
          color={[1, 0.25, 0.7]}
          intensity={1.5}
          penumbra={0.5}
          angle={0.6}
          position={[5, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />

        <spotLight
          color={[0.14, 0.5, 1]}
          intensity={2}
          penumbra={0.5}
          angle={0.6}
          position={[-15, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />

        <FloatingGrid />

        <EffectComposer>
          <DepthOfField
            focusDistance={0.0035}
            focalLength={0.01}
            bokehScale={3}
            height={480}
          />
          <Bloom
            blendFunction={BlendFunction.ADD}
            intensity={1.5} // The bloom intensity.
            width={300} // render width
            height={300} // render height
            kernelSize={5} // blur kernel size
            luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.3} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL} // blend mode
            offset={new Vector2(0.0005, 0.0012)}
            //offset={[0.0005, 0.0012]} // color offset
          />
        </EffectComposer>
      </Suspense>
      <Preload all />
      <OrbitControls />
    </Canvas>
  );
};
