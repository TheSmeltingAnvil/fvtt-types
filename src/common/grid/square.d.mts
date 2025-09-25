/**
 * @import {SquareGridConfiguration, GridOffset2D, GridOffset3D, GridCoordinates2D,
 *   GridCoordinates3D} from "./_types.mjs"
 * @import {Point} from "../_types.mjs"
 * @import {GridDiagonalRule} from "../constants.mjs"
 */
/**
 * The square grid class.
 */
export default class SquareGrid extends BaseGrid<GridCoordinates2D, GridCoordinates3D> {
  /**
   * The square grid constructor.
   * @param {SquareGridConfiguration} config   The grid configuration
   */
  constructor(config: SquareGridConfiguration)
  /**
   * The rule for diagonal measurement (see {@link CONST.GRID_DIAGONALS}).
   * @type {GridDiagonalRule}
   * @readonly
   */
  readonly diagonals: GridDiagonalRule
  /**
   * @override
   * @readonly
   */
  override readonly type: 1
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
  // @ts-expect-error -- IGNORE --
  override getAdjacentOffsets(coords: any):
    | {
        i: any
        j: any
      }[]
    | {
        i: any
        j: any
        k: any
      }[]
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
        x: number
        y: number
        elevation?: undefined
      }
    | {
        x: number
        y: number
        elevation: number
      }
  /** @override */
  // @ts-expect-error -- IGNORE --
  override getTopLeftPoint(coords: any):
    | {
        x: number
        y: number
        elevation?: undefined
      }
    | {
        x: number
        y: number
        elevation: number
      }
  /** @override */
  // @ts-expect-error -- IGNORE --
  override getCenterPoint(coords: any):
    | {
        x: number
        y: number
        elevation?: undefined
      }
    | {
        x: number
        y: number
        elevation: number
      }
  /** @override */
  override getVertices(coords: any): {
    x: number
    y: number
  }[]
  /** @override */
  // @ts-expect-error -- IGNORE --
  override getSnappedPoint(
    point: any,
    {
      mode,
      resolution,
    }: {
      mode: any
      resolution?: number | undefined
    },
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
    | undefined
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
  override getDirectPath(waypoints: any): GridOffset2D[]
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
  override getCircle(center: any, radius: any): Point[]
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
  /**
   * @deprecated since v12
   * @ignore
   */
  getCenter(x: any, y: any): number[]
  /**
   * @deprecated since v12
   * @ignore
   */
  // @ts-expect-error -- IGNORE --
  getSnappedPosition(
    x: any,
    y: any,
    interval?: number,
    options?: object,
  ): {
    x: number
    y: number
  }
  /**
   * @deprecated since v12
   * @ignore
   */
  shiftPosition(x: any, y: any, dx: any, dy: any, options?: object): number[]
  #private
}
import type { Point } from "../_types.mjs"
import type { GridDiagonalRule } from "../constants.mjs"
import type { GridCoordinates2D, GridCoordinates3D, GridOffset2D, SquareGridConfiguration } from "./_types.mjs"
import BaseGrid from "./base.mjs"
