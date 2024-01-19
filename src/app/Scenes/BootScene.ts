import { Scene } from "phaser";

export class BootScene extends Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.load.image('background', 'assets/sprites/background.png');
  }

  create() {
    this.scene.start('PreloadScene');
  }
}
