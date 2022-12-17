import * as THREE from "three";
import Experience from "../.";
import Sizes from "../Utils/Sizes";
import Camera from "../Camera";
import Resources from "../Utils/Resources";

export default class Room {
  experience: Experience;
  scene: THREE.Scene;
  resources: Resources;
  sunLight: THREE.DirectionalLight;
  ambientLight: THREE.AmbientLight;

  // camera needs sizes, scene(add)
  constructor() {
    this.experience = new Experience(null);
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.setSunLight();
  }

  setSunLight() {
    this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.width = 4096;
    this.sunLight.shadow.mapSize.height = 4096;
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.shadow.bias = -0.0005;
    const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
    this.scene.add(helper);

    this.sunLight.position.set(-1.5, 7, 3);
    this.scene.add(this.sunLight);

    this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
    this.scene.add(this.ambientLight);
  }

  resize() {}

  update() {}
}
