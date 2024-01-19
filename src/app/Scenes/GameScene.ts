import { Scene, Types, GameObjects } from "phaser";
import { Player } from "../Sprites/Player";
import { EnemyGroup } from "../Sprites/EnemyGroup";

export class GameScene extends Scene {
  player!: Player;
  cursors!: Types.Input.Keyboard.CursorKeys;
  background!: GameObjects.TileSprite
  constructor() {
    super('GameScene');
  }

  create() {
    this.renderBackground();
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player = new Player(this, this.cursors);
    new EnemyGroup(this);
  }

  override update() {
    this.player.move();
    this.background.tilePositionX += 1;
  }

  private renderBackground() {
    this.background = this.add.tileSprite(0, 0, 1280, 720, 'background').setOrigin(0);
  }
}
