import * as THREE from "three";
import Experience from "../.";
import Sizes from "../Utils/Sizes";
import Camera from "../Camera";
import Resources from "../Utils/Resources";

export default class Room {
  experience: Experience;
  sizes: Sizes;
  scene: THREE.Scene;
  canvas: HTMLElement;
  camera: Camera;
  renderer: THREE.WebGLRenderer;
  resources: Resources;
  mixer: THREE.AnimationMixer;
  bed: any;
  ball: any;

  room: any;
  actualRoom: any;

  // camera needs sizes, scene(add)
  constructor() {
    this.experience = new Experience(null);
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;
    this.setModel();
    this.setAnimation();
  }

  setModel() {
    for (const child of this.actualRoom.children) {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child instanceof THREE.Group) {
        child.children.forEach((groupchild) => {
          groupchild.castShadow = true;
          groupchild.receiveShadow = true;
        });
      }

      if (child.name === "Glass") {
        child.material = new THREE.MeshPhysicalMaterial();
        child.material.roughness = 0;
        child.material.color.set(0x549dd2);
        child.material.ior = 1.25;
        child.material.transmission = 1;
        child.material.opacity = 1;
        child.material.thickness = 0.01;
        child.material.clearcoat = 0.1;
        child.material.clearcoatRoughness = 0;
      }
    }

    this.scene.add(this.actualRoom);
    this.actualRoom.scale.set(0.2, 0.2, 0.2);
  }

  setAnimation() {
    console.log(this.room.animations);
    this.mixer = new THREE.AnimationMixer(this.actualRoom);
    this.bed = this.mixer.clipAction(this.room.animations[1]);
    this.ball = this.mixer.clipAction(this.room.animations[5]);
    this.bed.play();
    this.ball.play();
  }

  resize() {}

  update() {
    this.mixer.update(this.experience.time.delta * 0.001);
  }
}
