import { Scene } from "phaser";
import { SceneKey } from "../keys/Scene.key";
import { AssetKey } from "../keys/Asset.key";

export class BootScene extends Scene {
  constructor() {
    super(SceneKey.BOOT_SCENE);
  }

  preload() {
    this.load.image('background', `${ AssetKey.URI }background.png`);
  }

  create() {
    this.scene.start(SceneKey.PRELOAD_SCENE);
  }
}
