import { Point, IViewer } from "./types";

/**
 * 小方块
 */
export class Square {
  private _point: Point = { x: 0, y: 0 } /*逻辑坐标*/
  private _color: string = "red" /*方块颜色*/
  // 属性：显示者
  private _viewer?: IViewer

  public get viewer() {
    return this._viewer;
  }

  public set viewer(val) {
    this._viewer = val
    if (val) {
      val.show()
    }
  }

  public get point() {
    return this._point;
  }
  public set point(val) {
    this._point = val
    // 完成显示，调用viewer
    if (this._viewer) {
      this._viewer.show()
    }
  }

  public get color() {
    return this._color
  }
  public set color(val) {
    this._color = val
  }

  public constructor() {

  }
}
