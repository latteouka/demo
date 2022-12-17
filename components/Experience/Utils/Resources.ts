import * as THREE from "three";
import EventEmitter from "events";
import Experience from "../.";
import Renderer from "../Renderer";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { VideoTexture } from "three";

interface AssetType {
  name: string;
  type: string;
  path: string;
}

export default class Resources extends EventEmitter {
  experience: Experience;
  renderer: Renderer;
  assets: AssetType[];

  // not sure
  items: { [key: string]: any };
  video: { [key: string]: HTMLVideoElement };
  videoTexture: { [key: string]: THREE.VideoTexture };

  loader: { gltfLoader?: GLTFLoader; dracoLoader?: DRACOLoader };
  queue: number;
  loaded: number;

  constructor(assets: AssetType[]) {
    super();
    this.experience = new Experience(null);
    this.renderer = this.experience.renderer;
    this.assets = assets;

    this.loaded = 0;
    this.items = {};
    this.queue = this.assets.length;
    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    this.loader = {};
    this.loader.gltfLoader = new GLTFLoader();
    this.loader.dracoLoader = new DRACOLoader();
    this.loader.dracoLoader.setDecoderPath("/draco/");
    this.loader.gltfLoader.setDRACOLoader(this.loader.dracoLoader);
  }

  startLoading() {
    for (const asset of this.assets) {
      if (asset.type === "glbModel") {
        this.loader.gltfLoader.load(asset.path, (file) => {
          this.singleAssetLoaded(asset, file);
        });
      } else if (asset.type === "videoTexture") {
        this.video = {};
        this.videoTexture = {};
        this.video[asset.name] = document.createElement("video");
        this.video[asset.name].src = asset.path;
        this.video[asset.name].muted = true;
        this.video[asset.name].playsInline = true;
        this.video[asset.name].autoplay = true;
        this.video[asset.name].loop = true;
        this.video[asset.name].play();

        this.videoTexture[asset.name] = new THREE.VideoTexture(
          this.video[asset.name]
        );
        this.videoTexture[asset.name].flipY = true;
        this.videoTexture[asset.name].minFilter = THREE.NearestFilter;
        this.videoTexture[asset.name].magFilter = THREE.NearestFilter;
        this.videoTexture[asset.name].generateMipmaps = true;
        this.videoTexture[asset.name].encoding = THREE.sRGBEncoding;

        this.singleAssetLoaded(asset, this.videoTexture[asset.name]);
      }
    }
  }

  singleAssetLoaded(asset: AssetType, file: any) {
    this.items[asset.name] = file;
    this.loaded++;
    if (this.loaded === this.queue) {
      this.emit("ready");
    }
  }
}
