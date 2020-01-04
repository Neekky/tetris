import { Square } from "./Square";
import { Shape, Point } from "./types";
import { TerisRule } from "./terisRule";

/**
 * 组合方块
 * 只负责方块组合的纯数据处理
 * 
 */

export class SquareGroup {
  private _squareArr: readonly Square[]

  public get squares() {
    return this._squareArr;
  }
  public get shape() {
    return this._shape;
  }

  public get centerPoint(): Point {
    return this._centerPoint;
  }
  public set centerPoint(val: Point) {
    this._centerPoint = val
    // 同时设置所有小方块的坐标
    this.setSquarePoints()
  }

  /**
   * 根据中心点坐标以及形状，设置每一个小方块的坐标
   */
  private setSquarePoints() {
    // 同时设置所有小方块的坐标
    this._shape.forEach((ele, i) => {
      this._squareArr[i].point = {
        x: this._centerPoint.x + ele.x,
        y: this._centerPoint.y + ele.y,
      }
    })
  }

  constructor(
    private _shape: Shape,
    private _centerPoint: Point,
    private _color: string) {
    // 设置小方块的数组
    const arr: Square[] = []
    this._shape.forEach(ele => {
      const sq = new Square()
      sq.color = this._color
      arr.push(sq)
    })
    // 往方块数组加方块
    this._squareArr = arr
    // 同时设置所有小方块的坐标
    this.setSquarePoints()
  }

  /**
   * 旋转方向是否为顺时针
   */
  protected isClock = true;

  afterRotateShape(): Shape {
    if (this.isClock) {
      return this._shape.map(p => {
        const newP: Point = {
          x: -p.y,
          y: p.x
        }
        return newP;
      })
    } else {
      return this._shape.map(p => {
        const newP: Point = {
          x: p.y,
          y: -p.x
        }
        return newP;
      })
    }
  }

  rotate(existe:Square[]) {
    if(TerisRule.canIRotate(this,existe)) {
      const newShape = this.afterRotateShape();
      this._shape = newShape;
      this.setSquarePoints()
    }
  }
}
