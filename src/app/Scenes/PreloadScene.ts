import { Scene } from "phaser";

import { PersonsKey } from "../keys/Persons.key";
import { SceneKey } from "../keys/Scene.key";
import { AssetKey } from "../keys/Asset.key";
import { AttackKey } from "../keys/Attack.key";

export class PreloadScene extends Scene {
  constructor() {
    super(SceneKey.PRELOAD_SCENE);
  }

  preload() {
    this.load.atlas(
      PersonsKey.DRAGON,
      `${ AssetKey.URI }${ PersonsKey.DRAGON }.png`,
      `${ AssetKey.URI}${ PersonsKey.DRAGON }.json`
    );

    this.load.atlas(
      PersonsKey.ENEMY,
      `${ AssetKey.URI }${ PersonsKey.ENEMY }.png`,
      `${ AssetKey.URI }${ PersonsKey.ENEMY }.json`
    );

    this.load.image('fire', `${ AssetKey.URI }${ AttackKey.FIRE }.png`);
  }

  create() {
    this.scene.start(SceneKey.START_SCENE);
  }
}
