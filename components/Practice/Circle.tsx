import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const firstMoveTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".margin-one",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.4,
    invalidateOnRefresh: true,
  },
});

const secondMoveTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".margin-two",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.4,
    invalidateOnRefresh: true,
  },
});

const thirdMoveTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".margin-three",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.6,
    invalidateOnRefresh: true,
  },
});

const Circle = () => {
  const skip = useRef(false);

  const firstCircleRef = useRef(null);
  const secondCircleRef = useRef(null);
  const thirdCircleRef = useRef(null);

  useEffect(() => {
    // have to do this or gsap will mount twice because of useEffect!!!
    if (skip.current) return;
    skip.current = true;

    ScrollTrigger.matchMedia({
      // desktop
      "(min-width: 900px)": () => {
        // reset

        firstMoveTimeline.to(
          firstCircleRef.current.scale,
          {
            x: () => {
              return 4;
            },
            y: () => {
              return 4;
            },
            z: () => {
              return 4;
            },
          },
          "same"
        );
        firstMoveTimeline.to(
          firstCircleRef.current.position,
          {
            x: () => {
              return window.innerWidth * 0.0023;
            },
          },
          "same"
        );
        firstMoveTimeline.to(
          secondCircleRef.current.position,
          {
            x: () => {
              return window.innerWidth * 0.0023;
            },
          },
          "same"
        );
        firstMoveTimeline.to(
          thirdCircleRef.current.position,
          {
            x: () => {
              return window.innerWidth * 0.0023;
            },
          },
          "same"
        );
        secondMoveTimeline.to(
          secondCircleRef.current.scale,
          {
            x: () => {
              return 2;
            },
            y: () => {
              return 2;
            },
            z: () => {
              return 2;
            },
          },
          "same"
        );
        thirdMoveTimeline.to(
          thirdCircleRef.current.scale,
          {
            x: () => {
              return 2;
            },
            y: () => {
              return 2;
            },
            z: () => {
              return 2;
            },
          },
          "same"
        );
      },

      // mobile
      "(max-width: 901px)": () => {},
    });
  }, []);
  return (
    <group>
      <mesh
        ref={firstCircleRef}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -0.29, 0]}
        scale={[0, 0, 0]}
        receiveShadow
      >
        <circleGeometry args={[5, 128]} />
        <meshStandardMaterial color={0xe5a1aa} side={THREE.DoubleSide} />
      </mesh>
      <mesh
        ref={secondCircleRef}
        position={[0, -0.28, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0, 0, 0]}
        receiveShadow
      >
        <circleGeometry args={[5, 32]} />
        <meshStandardMaterial color={0x7ad0ac} side={THREE.DoubleSide} />
      </mesh>
      <mesh
        ref={thirdCircleRef}
        position={[0, -0.27, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0, 0, 0]}
        receiveShadow
      >
        <circleGeometry args={[5, 32]} />
        <meshStandardMaterial color={0x6f81c0} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Circle;
