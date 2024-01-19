import {Math, Physics, Scene, Time } from "phaser";
import { Enemy } from "./Enemy";

export class EnemyGroup extends Physics.Arcade.Group {
  override scene!: Scene;
  time!: Time.TimerEvent;
  delay = 1500;
  count = 10;
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
    if (this.getLength() < this.count) {
      this.addItemGroup();
    } else {
      this.time.remove();
    }
  }

  addItemGroup() {
    const enemy = Enemy.generate(this.scene, { x: 1200, y: Math.Between(100, 720 - 100) });
    this.add(enemy);
    enemy.move();
  }
}
