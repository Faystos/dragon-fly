import { Scene, Types } from 'phaser';

import { Person } from "../AbstractClasses/Person";

export class Player extends Person {
  cursors!: Types.Input.Keyboard.CursorKeys;

  constructor(scene: Scene, cursors: Types.Input.Keyboard.CursorKeys) {
    super(scene, 150, 720 / 2, 'dragon', 'dragon1');
    this.cursors = cursors;
  }

  override move() {
    this.body.setVelocity(0);
    this.body.velocity.normalize();

    if (this.cursors.left.isDown) {
      this.body.setVelocityX(-100);
    } else if (this.cursors.right.isDown) {
      this.body.setVelocityX(+100);
    }

    if (this.cursors.up.isDown) {
      this.body.setVelocityY(-100);
    } else if (this.cursors.down.isDown) {
      this.body.setVelocityY(+100);
    }
  }
}

