import { Scene, Time, Types } from 'phaser';

import { Person } from "../AbstractClasses/Person";
import { FireGroup } from "./FireGroup";
import { PersonsKey } from "../keys/Persons.key";
import { AttackKey } from "../keys/Attack.key";

export class Player extends Person {
  cursors!: Types.Input.Keyboard.CursorKeys;
  fires!: FireGroup;

  time!: Time.TimerEvent;
  delay = 1500;

  constructor(scene: Scene, cursors: Types.Input.Keyboard.CursorKeys) {
    super(scene, 150, 720 / 2, PersonsKey.DRAGON, `${ PersonsKey.DRAGON }1`);

    this.cursors = cursors;
    this.fires = new FireGroup(this.scene, AttackKey.FIRE);

    this.time = this.scene.time.addEvent({
      delay: this.delay,
      loop: true,
      callback: this.fireAttack,
      callbackScope: this
    });
  }

  move() {
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

  private fireAttack() {
    this.fires.addItemGroup(this);
  }
}

