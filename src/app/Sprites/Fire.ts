import { GameObjects, Physics, Scene, Textures } from "phaser";

import { Position } from "../types/Position";
import { AttackKey } from "../keys/Attack.key";

export class Fire extends GameObjects.Sprite {
  override body!: Physics.Arcade.Body;

  position!: Position;
  textureType!: AttackKey;

  static generate(scene: Scene, position: Position, texture: AttackKey) {
    return new Fire(scene, position, texture);
  }

  constructor(
    scene: Scene,
    position: Position,
    texture: AttackKey | Textures.Texture,
    frame?: string | number
  ) {
    super(scene, position.x, position.y, texture, frame);

    this.position = position;
    this.textureType = texture as AttackKey;
    this.init();
    this.handlingEvent();
  }

  override update() {
    if (this.textureType === AttackKey.BULLET && this.active && this.x < -this.width) {
      this.setAlive(false);
    }

    if (this.textureType === AttackKey.FIRE && this.active && this.x > 1280 + this.width) {
      this.setAlive(false);
    }
  }

  reset(position: Position) {
    const { x, y } = position;
    this.x = x;
    this.y = y;
    this.setAlive(true);
  }

  move() {
    if (this.textureType === AttackKey.FIRE) {
      this.body.setVelocityX(+150);
    } else if (this.textureType === AttackKey.BULLET) {
      this.body.setVelocityX(-150);
    }
  }

  private init() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
  }

  private setAlive(state: boolean) {
    this.body.enable = state;
    this.setVisible(state);
    this.setActive(state);
  }

  private handlingEvent() {
    this.scene.events.on('update', this.update, this)
  }
}
