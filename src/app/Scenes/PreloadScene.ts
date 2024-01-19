import { Scene } from "phaser";

export class PreloadScene extends Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.atlas('dragon', 'assets/sprites/dragon.png', 'assets/sprites/dragon.json');
    this.load.atlas('enemy', 'assets/sprites/enemy.png', 'assets/sprites/enemy.json');
  }

  create() {
    this.scene.start('StartScene');
  }
}
