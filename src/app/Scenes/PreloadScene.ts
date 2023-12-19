import { Scene } from "phaser";

export class PreloadScene extends Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.atlas('dragon', 'assets/sprites/dragon.png', 'assets/sprites/dragon.json');
  }

  create() {
    this.scene.start('StartScene');
  }

  override update() {}
}
