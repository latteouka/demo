import * as THREE from "three";
import { useAnimations, useGLTF } from "@react-three/drei";
import { ObjectMap } from "@react-three/fiber";
import { MutableRefObject, useRef } from "react";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

interface ElementsObject {
  [key: string]: THREE.Group | THREE.Mesh;
}

const useRoomModel = (
  src: string
): [THREE.Group, ElementsObject, { [x: string]: THREE.AnimationAction }] => {
  // ): [MutableRefObject<GLTF & ObjectMap>, MutableRefObject<ElementsObject>] => {
  const { scene, animations } = useGLTF(src);
  const modelRef = useRef(scene);
  const animationsRef = useRef(animations);
  //const elements = useRef<ElementsObject>({} as ElementsObject);
  const elements = {} as ElementsObject;

  const { actions } = useAnimations(animations, scene);

  // set Model
  scene.children.forEach((child: any) => {
    elements[child.name.toLowerCase()] = child;
    child.castShadow = true;
    child.receiveShadow = true;

    // if it's a group then add the shadowing first
    if (child instanceof THREE.Group) {
      child.children.forEach((groupchild) => {
        groupchild.castShadow = true;
        groupchild.receiveShadow = true;
      });
    }
    if (child instanceof THREE.Object3D) {
      child.children.forEach((groupchild) => {
        groupchild.castShadow = true;
        groupchild.receiveShadow = true;
      });
    }

    if (child.name === "grinder_glass") {
      child.castShadow = false;
      child.material = new THREE.MeshPhysicalMaterial();
      child.material.transmission = 0.1;
      child.material.roughness = 0.15;
      child.material.metalness = 0.6;
      child.material.color.set(0xffffff);
      //child.material.color.set(0xeaf6ff);
      child.material.ior = 2;
      child.material.opacity = 1;
      child.material.thickness = 0.1;
    }

    if (child.name === "cake_window") {
      child.castShadow = false;
      child.material = new THREE.MeshPhysicalMaterial();
      child.material.transparent = true;
      child.material.opacity = 1;
      child.material.transmission = 0.9;
      child.material.metalness = 0.05;
      child.material.roughness = 0.35;
      child.material.color.set(0xeaffff);
      child.material.ior = 2;
      console.log(child.material);
    }

    //child.scale.set(0, 0, 0);
    // if (child.name === "table") {
    //   child.scale.set(0, 0, 0);
    // }
    if (child.name === "tea_bottle") {
      child.material.roughness = 0.05;
    }
  });

  return [scene, elements, actions];
};

export default useRoomModel;
