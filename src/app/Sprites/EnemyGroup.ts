import { Math, Physics, Scene, Time } from "phaser";

import { Enemy } from "./Enemy";

export class EnemyGroup extends Physics.Arcade.Group {
  override scene!: Scene;
  time!: Time.TimerEvent;
  delay = 1500;
  countMax = 10;
  countCreated= 0
  constructor(scene: Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;

    this.time = this.scene.time.addEvent({
      delay: this.delay,
      loop: true,
      callback: this.tick,
      callbackScope: this
    });
  }

  tick() {
    if (this.countCreated < this.countMax) {
      this.addItemGroup();
    } else {
      this.time.remove();
    }
  }

  addItemGroup() {
    let enemy = this.getFirstDead();

    if (!enemy) {
      enemy = Enemy.generate(this.scene, { x: 1200, y: Math.Between(100, 720 - 100) });
      this.add(enemy);
    } else {
      enemy.reset();
    }
    enemy.move();
    ++this.countCreated;
  }
}
