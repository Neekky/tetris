import { GameViewer, GameStatus } from "../types";
import { SquareGroup } from "../SquareGroup";
import { SquarePageViewer } from "./SquarePageViewer";
import $ from "jquery";
import { Game } from "../Game";
import GameConfig from "../GameConfig";
import PageConfig from "./PageConfig";

export class GamePageViewer implements GameViewer {
  onGamePause(): void {
    this.msgDom.css({
      display: "flex"
    });
    this.msgDom.find("p").html("游戏暂停");
  }
  onGameStart(): void {
    this.msgDom.css({
      display: "none"
    });;
  }
  onGameOver(): void {
    this.msgDom.css({
      display: "flex"
    });
    this.msgDom.find("p").html("游戏结束");
  }

  private nextDom = $("#next");
  private panelDom = $("#panel");
  private scoreDom = $("#score");
  private msgDom = $("#msg")
  showScore(score: number): void {
    this.scoreDom.html(score.toString())
  }

  showNext(teris: SquareGroup): void {
    teris.squares.forEach(sq => {
      sq.viewer = new SquarePageViewer(sq, this.nextDom);
    })
  }
  switch(teris: SquareGroup): void {
    teris.squares.forEach(sq => {
      sq.viewer!.remove();
      sq.viewer = new SquarePageViewer(sq, this.panelDom);
    })
  }
  init(game: Game): void {
    // 1.设置宽高
    this.panelDom.css({
      width: GameConfig.panelSize.width * PageConfig.SquareSize.width + "px",
      height: GameConfig.panelSize.height * PageConfig.SquareSize.height + "px"
    })
    this.nextDom.css({
      width: GameConfig.nextSize.width * PageConfig.SquareSize.width + "px",
      height: GameConfig.nextSize.height * PageConfig.SquareSize.height + "px"
    })
    // 2.注册键盘事件
    $(document).keydown(e => {
      switch (e.keyCode) {
        case 38:
          game.control_top()
          break
        case 40:
          game.control_down()
          break
        case 37:
          game.control_left()
          break
        case 39:
          game.control_right()
          break
        case 32:
          game.control_rotate()
          break
        case 8:
          break
        case 13:
          if (game.gameStatus === GameStatus.playing) {
            game.pause()
          } else {
            game.start();
          }
          break
      }
    })
  }
}