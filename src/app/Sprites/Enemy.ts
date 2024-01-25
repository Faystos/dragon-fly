import { Scene, Math } from "phaser";

import { Person } from "../AbstractClasses/Person";
import { Position } from "../types/Position";
import { PersonsKey } from "../keys/Persons.key";

export class Enemy extends Person {
  position!: Position;

  static getRandomId(start: number, end: number): number {
    return Math.Between(start, end);
  }

  static generate(scene: Scene, position: Position) {
    return new Enemy(scene, position, `${PersonsKey.ENEMY}${Enemy.getRandomId(1, 4)}`)
  }

  constructor(scene: Scene, position: Position, enemy: string) {
    super(scene, position.x, position.y, PersonsKey.ENEMY, enemy);

    this.position = position;
    this.handlingEvent();
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
}
