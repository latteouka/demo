import * as THREE from "three";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Resources from "./Utils/Resources";
import Camera from "./Camera";
import Renderer from "./Renderer";

import World from "./World";
import assets from "./Utils/assets";

export default class Experience {
  canvas: HTMLElement;
  scene: THREE.Scene;
  sizes: Sizes;
  time: Time;
  camera: Camera;
  renderer: Renderer;
  world: World;
  resources: Resources;

  static instance: Experience;

  constructor(canvas: HTMLElement | null) {
    if (Experience.instance) {
      return Experience.instance;
    }

    Experience.instance = this;

    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.time = new Time();
    this.sizes = new Sizes();
    this.camera = new Camera();
    this.renderer = new Renderer();

    this.resources = new Resources(assets);

    this.world = new World();

    this.sizes.on("resize", () => {
      this.resize();
    });
    this.time.on("update", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.world.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }
}
