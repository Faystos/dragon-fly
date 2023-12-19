import { Scene } from "phaser";

export class GameScene extends Scene {
  constructor() {
    super('GameScene');
  }

  preload() {}

  create() {
    this.renderBackground();
    this.add.sprite(150, 720 / 2, 'dragon', 'dragon1');
  }

  override update() {}

  private renderBackground() {
    this.add.sprite(0, 0, 'background').setOrigin(0);
  }
}
