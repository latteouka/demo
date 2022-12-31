import * as THREE from "three";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const firstIntroTimeline = gsap.timeline();
const secondIntroTimeline = gsap.timeline();

interface ElementsObject {
  [key: string]: THREE.Group | THREE.Mesh;
}

const usePlayIntro = async (
  elements: ElementsObject,
  actions: { [x: string]: THREE.AnimationAction }
) => {
  console.log("intro");
  const skip = useRef(false);

  // define async play intro func
  const playIntro = async (elements: ElementsObject) => {
    await playFirst(elements, actions);
  };
  useEffect(() => {
    // have to do this or gsap will mount twice because of useEffect!!!
    if (skip.current) return;
    skip.current = true;

    playIntro(elements);
  }, []);
};
export default usePlayIntro;

// define first intro: let loading page fade out and hidden
// .loading class is at Loading component(outside DIV)
// onComplete play second intro(room scale)
const playFirst = async (elements: ElementsObject, actions) => {
  return new Promise((resolve) => {
    firstIntroTimeline.to(".loading", {
      opacity: 0,
      delay: 1,
      onComplete: async () => {
        document.querySelector(".loading").classList.add("hidden");
        await playSecond(elements, actions);
        resolve;
      },
    });
  });
};

// define second intro: room elements scale
const playSecond = async (elements: ElementsObject, actions) => {
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
      "leftshelf"
    );
    secondIntroTimeline.to(
      elements["tea_bottle2"].scale,
      {
        x: 1,
        y: 1,
        z: 1,
        ease: "back.out(2.5)",
      },
      "leftshelf"
    );
    secondIntroTimeline.to(
      elements["tea_box1"].scale,
      {
        x: 1,
        y: 1,
        z: 1,
        ease: "back.out(2.5)",
      },
      "leftshelf"
    );
    secondIntroTimeline.to(
      elements["tea_box2"].scale,
      {
        x: 1,
        y: 1,
        z: 1,
        ease: "back.out(2.5)",
      },
      "leftshelf"
    );
    secondIntroTimeline.to(
      elements["cup4"].scale,
      {
        x: 1,
        y: 1,
        z: 1,
        ease: "back.out(2.5)",
      },
      "leftshelf"
    );
    secondIntroTimeline.to(
      elements["cup5"].scale,
      {
        x: 1,
        y: 1,
        z: 1,
        ease: "back.out(2.5)",
      },
      "leftshelf"
    );
    secondIntroTimeline.to(
      elements["cup6"].scale,
      {
        x: 1,
        y: 1,
        z: 1,
        ease: "back.out(2.5)",
      },
      "leftshelf"
    );
    secondIntroTimeline.to(
      elements["pot"].scale,
      {
        x: 1,
        y: 1,
        z: 1,
        ease: "back.out(2.5)",
      },
      "leftshelf"
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
      },
      ">-0.4"
    );
  });
};
