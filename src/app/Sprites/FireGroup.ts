import { Physics, Scene } from "phaser";

import { Fire } from "./Fire";
import { Player } from "./Player";
import { AttackKey } from "../keys/Attack.key";

export class FireGroup extends Physics.Arcade.Group {
  override scene!: Scene;

  textureType!: AttackKey;

  constructor(scene: Scene, texture: AttackKey) {
    super(scene.physics.world, scene);

    this.scene = scene;
    this.textureType = texture;
  }

  addItemGroup(source: Player) {
    const {x, y} = source;
    const position = { x: x + source.width / 2, y }

    let fire = this.getFirstDead();

    if(!fire) {
      fire = Fire.generate(this.scene, position, this.textureType);
      this.add(fire);
    } else {
      fire.reset(position);
    }

    fire.move();
  }
}
