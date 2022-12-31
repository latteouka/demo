import { extend, useThree } from "@react-three/fiber";
import WaterPass from "./post/Waterpass";
import GlitchPass from "./post/Glitchpass";
import * as THREE from "three";

import {
  BlendFunction,
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
} from "postprocessing";
import { useEffect, useRef, useMemo } from "react";

extend({ WaterPass });

export default function Effects({ down }) {
  console.log("effects");

  const { gl, scene, camera } = useThree();
  const waterPass = useMemo<WaterPass>(() => new WaterPass(), []);

  const effectPass = useMemo(
    () =>
      new EffectPass(
        camera,
        new BloomEffect({
          blendFunction: BlendFunction.SCREEN,
          intensity: 3,
          luminanceSmoothing: 0.12,
          luminanceThreshold: 0.03,
        })
      ),
    []
  );

  const glithPass = useRef<GlitchPass>(new GlitchPass());

  glithPass.current.factor = down ? 1 : 0;

  useEffect(() => {
    console.log("effects useEffect should only do once");
    const composer = new EffectComposer(gl);
    composer.addPass(new RenderPass(scene, camera));

    composer.addPass(waterPass);
    composer.addPass(effectPass);

    composer.addPass(glithPass.current);

    requestAnimationFrame(function render() {
      requestAnimationFrame(render);
      composer.render();
    });

    // clean it!
    return () => {
      composer.dispose();
    };
  }, []);

  return null;
}
