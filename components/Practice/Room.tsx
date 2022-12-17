import { useAnimations, useGLTF, useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { globalCss } from "@stitches/react";

gsap.registerPlugin(ScrollTrigger);

// set body overflow
const setBodyOverflowHidden = globalCss({
  body: { overflow: "hidden" },
});

const setBodyOverflowVisible = globalCss({
  body: { overflow: "visible" },
});

setBodyOverflowHidden();

const Room = () => {
  const skip = useRef(false);
  const model = useGLTF("/models/simplebed.glb");
  const device = useRef(window.innerWidth < 900 ? "mobile" : "desktop");
  const touchY = useRef<number>(0);

  const elements = useRef({});
  const secondFloor = useRef<THREE.Mesh>();
  const ball = useRef<THREE.Mesh>();

  const three = useThree();
  const { ref, actions, names } = useAnimations(model.animations);

  const pointLightRef = useRef(null);

  const checkDevice = (event) => {
    if (event.target.innerWidth < 900 && device.current !== "mobile") {
      device.current = "mobile";
    } else if (event.target.innerWidth >= 900 && device.current !== "desktop") {
      device.current = "desktop";
    }
  };

  useCheckDevice(device);

  const onScroll = async (event) => {
    if (event.deltaY > 0) {
      removeListeners();
      await playSecondIntro();
    }
  };

  const onTouch = (event) => {
    touchY.current = event.touches[0].clientY;
  };

  const onTouchMove = async (event) => {
    const currentY = event.touches[0].clientY;
    const diff = touchY.current - currentY;
    if (diff > 0) {
      removeListeners();
      await playSecondIntro();
    }
  };

  const removeListeners = () => {
    window.removeEventListener("wheel", onScroll);
    window.removeEventListener("touchstart", onTouch);
    window.removeEventListener("touchmove", onTouchMove);
  };

  const playFirstIntro = async () => {
    return new Promise((resolve) => {
      firstIntroTimeline.to(".preload", {
        opacity: 0,
        delay: 1,
        onComplete: () => {
          document.querySelector(".preload").classList.add("hidden");
        },
      });
      if (device.current === "desktop") {
        firstIntroTimeline
          .to(elements.current["cube"].scale, {
            x: 0.8,
            y: 0.8,
            z: 0.8,
            ease: "back.out(2.5)",
            duration: 0.8,
          })
          .to(elements.current["cube"].position, {
            x: -6,
            ease: "power1.out",
            duration: 0.7,
          });
      } else {
        // for mobile device
        firstIntroTimeline
          .to(elements.current["cube"].scale, {
            x: 0.8,
            y: 0.8,
            z: 0.8,
            ease: "back.out(2.5)",
            duration: 0.8,
          })
          .to(elements.current["cube"].position, {
            z: -3,
            ease: "power1.out",
            duration: 0.7,
          });
      }
      firstIntroTimeline
        .to(".intro-text .animate", {
          yPercent: -100,
          stagger: 0.05,
          ease: "back.out(1.7)",
        })
        .to(".arrow-svg-wrapper", {
          opacity: 1,
        })
        .to(".toggle-bar", {
          opacity: 1,
          onComplete: resolve,
        });
    });
  };

  const playSecondIntro = async () => {
    return new Promise((resolve) => {
      secondIntroTimeline
        .to(elements.current["cube"].scale, {
          x: 0,
          y: 0,
          z: 0,
          ease: "power1.out",
          duration: 0.7,
        })
        .to(elements.current["floor"].scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "power1.out",
          duration: 0.7,
        })
        .to(
          elements.current["bed"].scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "power1.out",
            duration: 0.7,
          },
          "same"
        )
        .to(
          elements.current["clock"].scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "power1.out",
            duration: 0.7,
          },
          "same"
        )
        .to(
          elements.current["pointer"].scale,
          {
            x: 3,
            y: 3,
            z: 3,
            ease: "power1.out",
            duration: 0.7,
          },
          "same"
        )
        .to(
          elements.current["sphere"].scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "power1.out",
            duration: 0.7,
          },
          "same"
        )
        .to(
          elements.current["second_floor"].scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "power1.out",
            duration: 0.7,
          },
          "same"
        )
        .to(pointLightRef.current, {
          intensity: 0.5,
          ease: "power1.out",
          duration: 0.7,
          onComplete: () => {
            setAnimation();
            setBodyOverflowVisible();
            resolve;
            console.log("second intro complete");
          },
        });
    });
  };

  const setAnimation = () => {
    actions["CubeAction.001"].play();
    actions["SphereAction"].play();
  };

  useEffect(() => {
    // have to do this or gsap will mount twice because of useEffect!!!
    if (skip.current) return;
    skip.current = true;

    if (window.innerWidth < 900) {
      device.current === "mobile";
    } else {
      device.current === "desktop";
    }

    // set Model
    model.scene.children.forEach((child: any) => {
      elements.current[child.name.toLowerCase()] = child;
      child.castShadow = true;
      child.receiveShadow = true;

      // if it's a group then add the shadowing first
      if (child instanceof THREE.Group) {
        child.children.forEach((groupchild) => {
          groupchild.castShadow = true;
          groupchild.receiveShadow = true;
        });
      }
      if (child.name === "second_floor") {
        child.position.x = -1.72688;
        child.position.z = 6.75387;

        secondFloor.current = child;
      }

      if (child.name === "Ball") {
        ball.current = child;
      }

      if (child.name === "pointer") {
        child.rotation.y = Math.PI / 4;
      }

      if (child.name === "Glass") {
        child.castShadow = false;
        child.material = new THREE.MeshPhysicalMaterial();
        child.material.roughness = 0;
        child.material.color.set(0xeaf6ff);
        child.material.ior = 1.25;
        child.material.transmission = 1;
        child.material.opacity = 1;
        child.material.thickness = 0.01;
        child.material.clearcoat = 0.1;
        child.material.clearcoatRoughness = 0;
      }

      child.scale.set(0, 0, 0);
      if (child.name === "Cube") {
        // child.scale.set(1, 1, 1);
        child.position.set(-1.7, 0.3, 0);
      }
    });

    const playIntro = async () => {
      await playFirstIntro();
      console.log("first intro complete and add listeners");
      window.addEventListener("wheel", onScroll);
      window.addEventListener("touchstart", onTouch);
      window.addEventListener("touchmove", onTouchMove);
    };

    playIntro();

    // animations
    ScrollTrigger.matchMedia({
      // desktop
      "(min-width: 900px)": () => {
        // reset
        three.camera.zoom = 120;
        ball.current.scale.set(0, 0, 0);

        firstMoveTimeline.to(
          ref.current.position,
          {
            x: () => {
              return window.innerWidth * 0.00243;
            },
          },
          "same"
        );
        // need camera update if change zoom value
        secondMoveTimeline.to(three.camera, { zoom: 230 }, "same");
        secondMoveTimeline.to(
          three.camera.position,
          {
            x: () => {
              return window.innerWidth * 0.0017;
            },
          },
          "same"
        );
        secondMoveTimeline.to(three.camera, { zoom: 300 }, "same2");
        secondMoveTimeline.to(
          three.camera.position,
          {
            x: () => {
              return window.innerWidth * 0.002;
            },
          },
          "same2"
        );
        thirdMoveTimeline.to(three.camera, { zoom: 200 }, "same");
        thirdMoveTimeline.to(
          three.camera.position,
          {
            x: () => {
              return 0;
            },
            y: () => {
              return 5;
            },
          },
          "same"
        );
      },

      // mobile
      "(max-width: 901px)": () => {
        three.camera.zoom = 80;
        ball.current.scale.set(0, 0, 0);

        firstMoveTimeline.to(three.camera, {
          zoom: 200,
        });
        secondMoveTimeline.to(three.camera, { zoom: 300 }, "same");
        secondMoveTimeline.to(
          three.camera.position,
          {
            x: () => {
              return -0.7;
            },
            y: () => {
              return 5;
            },
          },
          "same"
        );
        thirdMoveTimeline.to(three.camera, { zoom: 200 }, "same");
        thirdMoveTimeline.to(
          three.camera.position,
          {
            x: () => {
              return -1;
            },
            y: () => {
              return 4;
            },
          },
          "same"
        );
      },
      all: () => {
        floorTimeline.to(
          secondFloor.current.position,
          {
            x: () => {
              return -3.07545;
            },
            z: () => {
              return 8.11244;
            },
            delay: 1,
            duration: 1,
          },
          "same"
        );
        floorTimeline.to(ball.current.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.5,
        });
      },
    });
  }, []);

  // useEffect(() => {
  //   window.addEventListener("resize", checkDevice);

  //   return () => {
  //     window.removeEventListener("resize", checkDevice);
  //   };
  // }, []);

  useFrame((state) => {
    // for slight rotating animation
    ref.current.rotation.y = THREE.MathUtils.lerp(
      state.scene.rotation.y,
      state.mouse.x + 0.5,
      0.05
    );

    elements.current["pointer"].rotation.z += Math.PI / 200;
    elements.current["pointer"].rotation.x += Math.PI / 200;

    // for orthographic camera resize update
    // and for zoom animation is needed
    state.camera.updateProjectionMatrix();

    // pointLight chase ball animation position
    const ballPosition = new THREE.Vector3();
    ballPosition.copy(elements.current["sphere"].position);
    ballPosition.x -= 1;
    ballPosition.y += 1;
    pointLightRef.current.position.copy(ballPosition);
  });

  return (
    <group>
      <primitive
        ref={ref}
        object={model.scene}
        scale={0.4}
        position={[0.7, 0, 0]}
      >
        <pointLight
          ref={pointLightRef}
          color="red"
          intensity={0}
          distance={3}
          name="pointlight"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.003}
          shadow-camera-near={0.1}
          shadow-camera-far={100}
          castShadow
        />
      </primitive>
    </group>
  );
};

export default Room;

const useCheckDevice = (device: MutableRefObject<string>) => {
  const checkDevice = () => {
    if (window.innerWidth < 900 && device.current !== "mobile") {
      device.current = "mobile";
    } else if (window.innerWidth >= 900 && device.current !== "desktop") {
      device.current = "desktop";
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);
};

// timelines
const firstMoveTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".margin-one",
    start: "top top",
    end: "bottom top",
    scrub: 0.6,
    invalidateOnRefresh: true,
    markers: true,
  },
});

const secondMoveTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".margin-two",
    start: "top top",
    end: "bottom top",
    scrub: 0.6,
    invalidateOnRefresh: true,
  },
});

const thirdMoveTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".margin-three",
    start: "top top",
    end: "bottom top",
    scrub: 0.6,
    invalidateOnRefresh: true,
  },
});

const floorTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".margin-three",
    start: "top top",
    once: true,
  },
});

const firstIntroTimeline = gsap.timeline();
const secondIntroTimeline = gsap.timeline();
