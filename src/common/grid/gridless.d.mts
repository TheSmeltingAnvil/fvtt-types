/**
 * The gridless grid class.
 */
export default class GridlessGrid extends BaseGrid<
  foundry.grid.types.GridCoordinates2D,
  foundry.grid.types.GridCoordinates3D
> {
  constructor(config: foundry.grid.types.GridConfiguration)
  /**
   * @override
   * @readonly
   */
  override readonly type: 0
  /** @override */
  override calculateDimensions(
    sceneWidth: any,
    sceneHeight: any,
    padding: any,
  ): {
    width: any
    height: any
    x: number
    y: number
    rows: number
    columns: number
  }
  /** @override */
  // @ts-expect-error -- IGNORE --
  override getOffset(coords: any):
    | {
        i: any
        j: any
        k: any
      }
    | {
        i: any
        j: any
        k?: undefined
      }
  /** @override */
  // @ts-expect-error -- IGNORE --
  override getOffsetRange({ x, y, width, height }: { x: any; y: any; width: any; height: any }): number[]
  /** @override */
  override getAdjacentOffsets(coords: any): never[]
  /** @override */
  override testAdjacency(coords1: any, coords2: any): boolean
  /** @override */
  // @ts-expect-error -- IGNORE --
  override getShiftedOffset(
    coords: any,
    direction: any,
  ):
    | {
        i: any
        j: any
        k: any
      }
    | {
        i: any
        j: any
        k?: undefined
      }
  /** @override */
  // @ts-expect-error -- IGNORE --
  override getShiftedPoint(
    point: any,
    direction: any,
  ):
    | {
        x: any
        y: any
        elevation: any
      }
    | {
        x: any
        y: any
        elevation?: undefined
      }
  /** @override */
  // @ts-expect-error -- IGNORE --
  override getTopLeftPoint(coords: any):
    | {
        x: any
        y: any
        elevation?: undefined
      }
    | {
        x: any
        y: any
        elevation: any
      }
  /** @override */
  // @ts-expect-error -- IGNORE --
  override getCenterPoint(coords: any):
    | {
        x: any
        y: any
        elevation?: undefined
      }
    | {
        x: any
        y: any
        elevation: any
      }
  /** @override */
  override getVertices(coords: any): never[]
  /** @override */
  // @ts-expect-error -- IGNORE --
  override getSnappedPoint(
    {
      x,
      y,
      elevation,
    }: {
      x: any
      y: any
      elevation: any
    },
    behavior: any,
  ):
    | {
        x: any
        y: any
        elevation: any
      }
    | {
        x: any
        y: any
        elevation?: undefined
      }
  /** @override */
  override _measurePath(
    waypoints: any,
    {
      cost,
    }: {
      cost: any
    },
    result: any,
  ): void
  /** @override */
  // @ts-expect-error -- IGNORE --
  override getDirectPath(waypoints: any): (
    | {
        i: any
        j: any
        k: any
      }
    | {
        i: any
        j: any
        k?: undefined
      }
  )[]
  /** @override */
  // @ts-expect-error -- IGNORE --
  override getTranslatedPoint(
    point: any,
    direction: any,
    distance: any,
  ):
    | {
        x: any
        y: any
        elevation: any
      }
    | {
        x: any
        y: any
        elevation?: undefined
      }
  /** @override */
  override getCircle(
    {
      x,
      y,
    }: {
      x: any
      y: any
    },
    radius: any,
  ): any[]
  /** @override */
  override getCone(origin: any, radius: any, direction: any, angle: any): any[]
}
import BaseGrid from "./base.mjs"
