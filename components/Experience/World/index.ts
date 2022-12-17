import * as THREE from "three";
import Experience from "../.";
import Sizes from "../Utils/Sizes";
import Camera from "../Camera";
import Resources from "../Utils/Resources";
import Room from "./Room";
import Environment from "./Environment";

export default class World {
  experience: Experience;
  sizes: Sizes;
  scene: THREE.Scene;
  canvas: HTMLElement;
  camera: Camera;
  renderer: THREE.WebGLRenderer;
  resources: Resources;
  room: Room;
  environment: Environment;

  // camera needs sizes, scene(add)
  constructor() {
    this.experience = new Experience(null);
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      this.environment = new Environment();
      this.room = new Room();
    });
  }

  resize() {}

  update() {
    if (this.room) {
      this.room.update();
    }
  }
}
