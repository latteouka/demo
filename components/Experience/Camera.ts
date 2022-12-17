import * as THREE from "three";
import Experience from ".";
import Sizes from "./Utils/Sizes";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Camera {
  experience: Experience;
  sizes: Sizes;
  scene: THREE.Scene;
  canvas: HTMLElement;
  perspectiveCamera: THREE.PerspectiveCamera;
  orthographicCamera: THREE.OrthographicCamera;
  controls: OrbitControls;

  // camera needs sizes, scene(add)
  constructor() {
    this.experience = new Experience(null);
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.canvas = this.experience.canvas;

    //console.log(this.sizes, this.scene, this.canvas);
    this.createPerspectiveCamera();
    this.createOrthographicCamera();
    this.setOrbitControls();
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      35,
      this.sizes.aspect,
      0.1,
      100
    );
    this.scene.add(this.perspectiveCamera);
    this.perspectiveCamera.position.z = 5;
  }

  createOrthographicCamera() {
    this.orthographicCamera = new THREE.OrthographicCamera(
      //left, right
      (this.sizes.aspect * this.sizes.frustrum) / -2,
      (this.sizes.aspect * this.sizes.frustrum) / 2,
      //top, bottom
      this.sizes.frustrum / 2,
      this.sizes.frustrum / -2,
      -10,
      100
    );
    this.scene.add(this.orthographicCamera);

    const size = 10;
    const divisions = 10;

    const gridHelper = new THREE.GridHelper(size, divisions);
    this.scene.add(gridHelper);

    const axesHelper = new THREE.AxesHelper(10);
    this.scene.add(axesHelper);
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.enableZoom = true;
  }

  resize() {
    // updating perspectiveCamera
    this.perspectiveCamera.aspect = this.sizes.aspect;
    this.perspectiveCamera.updateProjectionMatrix();

    // updating orthographicCamera
    this.orthographicCamera.left =
      (this.sizes.aspect * this.sizes.frustrum) / -2;
    this.orthographicCamera.right =
      (this.sizes.aspect * this.sizes.frustrum) / 2;
    this.orthographicCamera.top = this.sizes.frustrum / 2;
    this.orthographicCamera.bottom = this.sizes.frustrum / -2;
    this.orthographicCamera.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
  }
}
