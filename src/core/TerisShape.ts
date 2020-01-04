import { Point } from "./types";
import { getRandom } from "./util";
import { SquareGroup } from "./SquareGroup";
import { Square } from "./Square";

export class TShape extends SquareGroup {
  private static shape = [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }]
  constructor(
    _centerPoint: Point,
    _color: string) {
    super(TShape.shape, _centerPoint, _color)
  }
}
export class LShape extends SquareGroup {
  private static shape = [{ x: -2, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }]
  constructor(
    _centerPoint: Point,
    _color: string) {
    super(LShape.shape, _centerPoint, _color)
  }
}

export class LMirrorShape extends SquareGroup {
  private static shape = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }]
  constructor(
    _centerPoint: Point,
    _color: string) {
    super(LMirrorShape.shape, _centerPoint, _color)
  }
}

export class SShape extends SquareGroup {
  private static shape = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 1 }]
  constructor(
    _centerPoint: Point,
    _color: string) {
    super(SShape.shape, _centerPoint, _color)
  }
  rotate(exists:Square[]) {
    super.rotate(exists);
    this.isClock = !this.isClock;
  }
}

export class SMirrorShape extends SquareGroup {
  private static shape = [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }]
  constructor(
    _centerPoint: Point,
    _color: string) {
    super(SMirrorShape.shape, _centerPoint, _color)
  }
  rotate(exists:Square[]) {
    super.rotate(exists);
    this.isClock = !this.isClock;
  }
}

export class SquareShape extends SquareGroup {
  private static shape = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }]
  constructor(
    _centerPoint: Point,
    _color: string) {
    super(SquareShape.shape, _centerPoint, _color)
  }
  afterRotateShape() {
    return SquareShape.shape
  }
}

export class LineShape extends SquareGroup {
  private static shape = [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }]
  constructor(
    _centerPoint: Point,
    _color: string) {
    super(LineShape.shape, _centerPoint, _color)
  }
  rotate(exists:Square[]) {
    super.rotate(exists);
    this.isClock = !this.isClock;
  }
}

export class UShape extends SquareGroup {
  private static shape = [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: -1, y: -1 }, { x: 1, y: -1 }]
  constructor(
    _centerPoint: Point,
    _color: string) {
    super(UShape.shape, _centerPoint, _color)
  }
}

export const shapes = [
  TShape,
  LShape,
  LMirrorShape,
  SShape,
  SMirrorShape,
  SquareShape,
  LineShape,
  UShape
]

export const colors = [
  'red', 'white', 'green', 'yellow', 'orange', 'blue', 'gold'
]

/**
 * 随机产生一个俄罗斯方块（颜色、形状随机）
 * @param centerPoint 
 */
export function createTeris(centerPoint: Point): SquareGroup {
  let shapeIndex = getRandom(0, shapes.length);
  const shape = shapes[shapeIndex]
  let colorIndex = getRandom(0, colors.length);
  const color = colors[colorIndex]
  return new shape(centerPoint, color)
}