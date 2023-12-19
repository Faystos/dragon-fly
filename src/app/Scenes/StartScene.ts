import { Scene } from "phaser";

export class StartScene extends Scene {
  constructor() {
    super('StartScene');
  }

  create(){
    this.renderBackground();
    this.renderStartDameText();
    this.setEvents();
  }

  override update() {}

  private renderBackground() {
    this.add.sprite(0, 0, 'background').setOrigin(0);
  }

  private renderStartDameText() {
    this.add.text(1280/2, 500, 'Tap to start', {
      font: '40px',
      color: '#ffffff'
    }).setOrigin(0.5)
  }

  private setEvents() {
    this.input.on('pointerdown', () => {
      this.scene.start('GameScene');
    });
  }
}
