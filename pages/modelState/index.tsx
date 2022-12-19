import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import useRoomModel from "../../utils/useRoomModel";
import useCheckDevice from "../../utils/useCheckDevice";
import { Suspense, useEffect, useRef } from "react";
import Loading from "../../components/Lecouer/Loading";
import gsap from "gsap";

const firstIntroTimeline = gsap.timeline();
const secondIntroTimeline = gsap.timeline();

const Model = () => {
  const pointColor = "#FFEB94";
  const pointIntensity = 0.5;
  const boxSize: any = [0, 0, 0];
  // Canvas is responsive to fit the parent node,
  // so you can control how big it is by changing
  // the parents width and height.
  return (
    <div className="w-[100vw] h-[100vh]">
      <Loading />
      <Suspense fallback={null}>
        <Canvas
          gl={{
            outputEncoding: THREE.sRGBEncoding,
            toneMapping: THREE.ReinhardToneMapping,
            toneMappingExposure: 2.3,
          }}
          orthographic
          camera={{ position: [0, 6, 10], zoom: 180 }}
          shadows
        >
          <ambientLight intensity={0.6} color="#FEF3E3" />
          <directionalLight
            args={["#FEF3E3", 1.1]}
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
  const skip = useRef(false);
  // custom hook to set Room Models and get animations
  const [scene, elements, actions, cameras] = useRoomModel(
    "/models/lecouernew.glb"
  );

  const three = useThree();
  const roomRef = useRef(null);

  //console.log(actions);

  // resize observer
  const device = useCheckDevice();

  useEffect(() => {
    //actions["blue_box.003Action"].play();
  }, []);

  const playFirst = async () => {
    return new Promise((resolve) => {
      firstIntroTimeline.to(".loading", {
        opacity: 0,
        delay: 2,
        onComplete: async () => {
          document.querySelector(".loading").classList.add("hidden");
          console.log("first intro complete");
          await playSecond();
          resolve;
        },
      });
    });
  };

  const playSecond = async () => {
    return new Promise((resolve) => {
      secondIntroTimeline
        .to(
          elements["wall"].scale,
          {
            x: 1,
            y: 1,
            z: 1,
          },
          "1"
        )
        .to(
          elements["counter_floor"].scale,
          {
            x: 1,
            y: 1,
            z: 1,
          },
          "1"
        )
        .to(
          elements["counter_main"].scale,
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          ">-0.2"
        )
        .to(
          elements["shelf1"].scale,
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "shelf"
        )
        .to(
          elements["shelf2"].scale,
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "shelf"
        )
        .to(
          elements["shelf3"].scale,
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "shelf"
        );
      secondIntroTimeline.to(
        elements["tea_bottle1"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "leftshelf1"
      );
      secondIntroTimeline.to(
        elements["tea_bottle2"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "leftshelf1"
      );
      secondIntroTimeline.to(
        elements["tea_box1"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "leftshelf1"
      );
      secondIntroTimeline.to(
        elements["tea_box2"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "leftshelf1"
      );
      secondIntroTimeline.to(
        elements["cup4"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "leftshelf2"
      );
      secondIntroTimeline.to(
        elements["cup5"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "leftshelf2"
      );
      secondIntroTimeline.to(
        elements["cup6"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "leftshelf2"
      );
      secondIntroTimeline.to(
        elements["pot"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "leftshelf2"
      );
      secondIntroTimeline.to(
        elements["white_box1"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "rightshelf"
      );
      secondIntroTimeline.to(
        elements["white_box2"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "rightshelf"
      );
      secondIntroTimeline.to(
        elements["white_box3"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "rightshelf"
      );
      secondIntroTimeline.to(
        elements["white_box4"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "rightshelf"
      );
      secondIntroTimeline.to(
        elements["blue_box1"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "rightshelf"
      );
      secondIntroTimeline.to(
        elements["blue_box2"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "rightshelf"
      );
      secondIntroTimeline.to(
        elements["blue_box3"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "rightshelf"
      );
      secondIntroTimeline.to(
        elements["blue_box4"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "rightshelf"
      );
      secondIntroTimeline.to(
        elements["blue_box5"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        "rightshelf"
      );
      secondIntroTimeline.to(
        elements["grinder_body"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        ">-0.3"
      );
      secondIntroTimeline.to(
        elements["grinder_glass"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
        },
        ">-0.3"
      );
      secondIntroTimeline.to(
        elements["coffee_machine"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        ">-0.3"
      );
      secondIntroTimeline.to(
        elements["cup1"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        ">-0.3"
      );
      secondIntroTimeline.to(
        elements["cup2"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        ">-0.3"
      );
      secondIntroTimeline.to(
        elements["cup3"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        ">-0.3"
      );
      secondIntroTimeline.to(
        elements["pos"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        ">-0.3"
      );
      secondIntroTimeline.to(
        elements["card_stand"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        ">-0.3"
      );
      secondIntroTimeline.to(
        elements["vase"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        ">-0.3"
      );
      secondIntroTimeline.to(
        elements["cake_window"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        ">-0.3"
      );
      secondIntroTimeline.to(
        elements["table"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        ">-0.2"
      );
      secondIntroTimeline.to(
        elements["chair1"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        ">-0.4"
      );
      secondIntroTimeline.to(
        elements["chair2"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        ">-0.4"
      );
      secondIntroTimeline.to(
        elements["chair3"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
        },
        ">-0.4"
      );
      secondIntroTimeline.to(
        elements["chair4"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
          onComplete: () => {
            resolve;
          },
        },
        ">-0.4"
      );
      secondIntroTimeline.to(
        elements["pearl"].scale,
        {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2.5)",
          onComplete: () => {
            resolve;
          },
        },
        ">-0.4"
      );
    });
  };

  const playIntro = async () => {
    await playFirst();
  };
  useEffect(() => {
    // have to do this or gsap will mount twice because of useEffect!!!
    if (skip.current) return;
    skip.current = true;

    playIntro();
  }, []);

  // useFrame((state) => {
  //   // for orthographic camera resize update
  //   // and for zoom animation is needed
  //   state.camera.updateProjectionMatrix();
  // });

  // position={[0, -1.1, 0]}
  return (
    <primitive
      ref={roomRef}
      rotation={[0, -Math.PI / 4, 0]}
      object={scene}
      scale={0.4}
      position={[0, -1.1, 0]}
    />
  );
};
