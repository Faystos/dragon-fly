import { Component } from '@angular/core';
import { AUTO, Game, Types } from 'phaser';
import { BootScene } from "./Scenes/BootScene";
import { PreloadScene } from "./Scenes/PreloadScene";
import { StartScene } from "./Scenes/StartScene";
import { GameScene } from "./Scenes/GameScene";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  phaserGame!: Phaser.Game;
  config: Types.Core.GameConfig = {
    type: AUTO,
    width: 1280,
    height: 720,
    scene: [
      BootScene,
      PreloadScene,
      StartScene,
      GameScene
    ]
  };

  constructor() {
    this.phaserGame = new Game(this.config);
  }
}
