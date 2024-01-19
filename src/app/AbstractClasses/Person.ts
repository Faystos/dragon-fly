import { GameObjects, Physics, Scene, Textures } from "phaser";

export abstract class Person extends GameObjects.Sprite {
  override body!: Physics.Arcade.Body;

  protected constructor(
    scene: Scene,
    x: number,
    y: number,
    texture: string | Textures.Texture,
    frame?: string | number
  ) {
    super(scene, x, y, texture, frame);
    this.init();
  }

  private init() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
  }

  move() {}
}
