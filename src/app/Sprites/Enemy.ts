import { Scene, Math } from "phaser";
import { Person } from "../AbstractClasses/Person";

interface Position {
  x: number;
  y: number;
}

export class Enemy extends Person {
  position!: { x: number, y: number };

  constructor(scene: Scene, position: Position, enemy: string) {
    super(scene, position.x, position.y, 'enemy', enemy);

    this.position = position;
  }

  static generate(scene: Scene, position: Position) {
    const frameId = Math.Between(1, 4);
    return new Enemy(scene, position, `enemy${frameId}`)
  }

  override move() {
    this.body.setVelocityX(-150)
  }
}
