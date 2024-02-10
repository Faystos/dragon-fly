import {Scene, Math, Time, Types} from "phaser";

import { Person } from "../AbstractClasses/Person";
import { Position } from "../types/Position";
import { PersonsKey } from "../keys/Persons.key";
import {FireGroup} from "./FireGroup";
import {AttackKey} from "../keys/Attack.key";

export class Enemy extends Person {
  fires!: FireGroup;
  position!: Position;
  time!: Time.TimerEvent;
  delay = 1500;

  static getRandomId(start: number, end: number): number {
    return Math.Between(start, end);
  }

  static generate(scene: Scene, position: Position) {
    return new Enemy(scene, position, `${PersonsKey.ENEMY}${Enemy.getRandomId(1, 4)}`);
  }

  constructor(scene: Scene, position: Position, enemy: string) {
    super(scene, position.x, position.y, PersonsKey.ENEMY, enemy);

    this.position = position;
    this.handlingEvent();
    this.fires = new FireGroup(this.scene, AttackKey.BULLET);

    this.time = this.scene.time.addEvent({
      delay: this.delay,
      loop: true,
      callback: this.fireAttack,
      callbackScope: this
    });
  }

  override update() {
    if (this.active && this.x < -this.width) {
      this.setAlive(false);
    }
  }

  move() {
    this.body.setVelocityX(-150)
  }

  reset() {
    this.x = this.position.x;
    this.y = this.position.y;
    this.setFrame(`${PersonsKey.ENEMY}${Enemy.getRandomId(1, 4)}`);
    this.setAlive(true);
  }

  private handlingEvent() {
    this.scene.events.on('update', this.update, this)
  }

  private setAlive(state: boolean) {
    this.body.enable = state;
    this.setVisible(state);
    this.setActive(state);
  }

  private fireAttack() {
    this.fires.addItemGroup(this);
  }
}
