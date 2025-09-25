/**
 * @import {GridConfiguration, GridOffset2D, GridOffset3D, GridCoordinates2D, GridCoordinates3D, GridSnappingBehavior,
 *   GridMeasurePathWaypointData2D, GridMeasurePathWaypointData3D, GridMeasurePathResult, GridMeasurePathCostFunction2D,
 *   GridMeasurePathCostFunction3D} from "./_types.mjs";
 * @import {Point, ElevatedPoint, Rectangle} from "../_types.mjs";
 * @import {GridType, MOVEMENT_DIRECTIONS} from "../constants.mjs";
 */
/**
 * The base grid class.
 * @template [Coordinates2D=GridCoordinates2D]
 * @template [Coordinates3D=GridCoordinates3D]
 * @abstract
 */
export default class BaseGrid<Coordinates2D = GridCoordinates2D, Coordinates3D = GridCoordinates3D> {
  /**
   * @deprecated since v12
   * @ignore
   */
  static calculatePadding(
    gridType: any,
    width: any,
    height: any,
    size: any,
    padding: any,
    options: any,
  ): {
    width: any
    height: any
    x: number
    y: number
    rows: number
    columns: number
  }
  /**
   * The base grid constructor.
   * @param {GridConfiguration} config    The grid configuration
   */
  constructor(config: GridConfiguration)
  /**
   * The size of a grid space in pixels.
   * @type {number}
   * @readonly
   */
  readonly size: number
  /**
   * The width of a grid space in pixels.
   * @type {number}
   * @readonly
   */
  readonly sizeX: number
  /**
   * The height of a grid space in pixels.
   * @type {number}
   * @readonly
   */
  readonly sizeY: number
  /**
   * The distance of a grid space in units.
   * @type {number}
   * @readonly
   */
  readonly distance: number
  /**
   * The distance units used in this grid.
   * @type {string}
   * @readonly
   */
  readonly units: string
  /**
   * The style of the grid.
   * @type {string}
   * @readonly
   */
  readonly style: string
  /**
   * The thickness of the grid.
   * @type {number}
   * @readonly
   */
  readonly thickness: number
  /**
   * The color of the grid.
   * @type {Color}
   * @readonly
   */
  readonly color: Color
  /**
   * The opacity of the grid.
   * @type {number}
   * @readonly
   */
  readonly alpha: number
  /**
   * The grid type (see {@link CONST.GRID_TYPES}).
   * @type {GridType}
   * @readonly
   */
  readonly type: GridType
  /**
   * Is this a gridless grid?
   * @type {boolean}
   */
  get isGridless(): boolean
  /**
   * Is this a square grid?
   * @type {boolean}
   */
  get isSquare(): boolean
  /**
   * Is this a hexagonal grid?
   * @type {boolean}
   */
  get isHexagonal(): boolean
  /**
   * Calculate the total size of the canvas with padding applied, as well as the top-left coordinates of the inner
   * rectangle that houses the scene.
   * @param {number} sceneWidth         The width of the scene.
   * @param {number} sceneHeight        The height of the scene.
   * @param {number} padding            The percentage of padding.
   * @returns {{width: number, height: number, x: number, y: number, rows: number, columns: number}}
   * @abstract
   */
  calculateDimensions(
    sceneWidth: number,
    sceneHeight: number,
    padding: number,
  ): {
    width: number
    height: number
    x: number
    y: number
    rows: number
    columns: number
  }
  /**
   * Returns the offset of the grid space corresponding to the given coordinates.
   * @overload
   * @param {Coordinates2D} coords    The coordinates
   * @returns {GridOffset2D}          The offset
   */
  getOffset(coords: Coordinates2D): GridOffset2D
  /**
   * @overload
   * @param {Coordinates3D} coords    The coordinates
   * @returns {GridOffset3D}          The offset
   * @abstract
   */
  getOffset(coords: Coordinates3D): GridOffset3D
  /**
   * Returns the smallest possible range containing the offsets of all grid spaces that intersect the given bounds.
   * If the bounds are empty (nonpositive width or height), then the offset range is empty.
   * @example
   * ```js
   * const [i0, j0, i1, j1] = grid.getOffsetRange(bounds);
   * for ( let i = i0; i < i1; i++ ) {
   *   for ( let j = j0; j < j1; j++ ) {
   *     const offset = {i, j};
   *     // ...
   *   }
   * }
   * ```
   * @param {Rectangle} bounds                                      The bounds
   * @returns {[i0: number, j0: number, i1: number, j1: number]}    The offset range
   * @abstract
   */
  getOffsetRange({ x, y, width, height }: Rectangle): [i0: number, j0: number, i1: number, j1: number]
  /**
   * Returns the offsets of the grid spaces adjacent to the one corresponding to the given coordinates.
   * Returns always an empty array in gridless grids.
   * @overload
   * @param {Coordinates2D} coords    The coordinates
   * @returns {GridOffset2D[]}        The adjacent offsets
   */
  getAdjacentOffsets(coords: Coordinates2D): GridOffset2D[]
  /**
   * @overload
   * @param {Coordinates3D} coords    The coordinates
   * @returns {GridOffset3D[]}        The adjacent offsets
   * @abstract
   */
  getAdjacentOffsets(coords: Coordinates3D): GridOffset3D[]
  /**
   * Returns true if the grid spaces corresponding to the given coordinates are adjacent to each other.
   * In square and hexagonal grids with illegal diagonals the diagonally neighboring grid spaces are not adjacent.
   * Returns always false in gridless grids.
   * @overload
   * @param {Coordinates2D} coords1    The first coordinates
   * @param {Coordinates2D} coords2    The second coordinates
   * @returns {boolean}
   */
  testAdjacency(coords1: Coordinates2D, coords2: Coordinates2D): boolean
  /**
   * @overload
   * @param {Coordinates3D} coords1    The first coordinates
   * @param {Coordinates3D} coords2    The second coordinates
   * @returns {boolean}
   * @abstract
   */
  testAdjacency(coords1: Coordinates3D, coords2: Coordinates3D): boolean
  /**
   * Returns the offset of the grid space corresponding to the given coordinates
   * shifted by one grid space in the given direction. The k-coordinate is not changed.
   * In square and hexagonal grids with illegal diagonals the offset of the given coordinates is returned
   * if the direction is diagonal.
   * In gridless grids the point is by the grid size.
   * @overload
   * @param {Coordinates2D} coords             The coordinates
   * @param {MOVEMENT_DIRECTIONS} direction    The direction (see {@link CONST.MOVEMENT_DIRECTIONS})
   * @returns {GridOffset2D}                   The offset
   */
  getShiftedOffset(
    coords: Coordinates2D,
    direction: Readonly<{
      readonly UP: 1
      readonly DOWN: 2
      readonly LEFT: 4
      readonly RIGHT: 8
      readonly UP_LEFT: 5
      readonly UP_RIGHT: 9
      readonly DOWN_LEFT: 6
      readonly DOWN_RIGHT: 10
      readonly DESCEND: 16
      readonly ASCEND: 32
    }>,
  ): GridOffset2D
  /**
   * @overload
   * @param {Coordinates3D} coords             The coordinates
   * @param {MOVEMENT_DIRECTIONS} direction    The direction (see {@link CONST.MOVEMENT_DIRECTIONS})
   * @returns {GridOffset3D}                   The offset
   * @abstract
   */
  getShiftedOffset(
    coords: Coordinates3D,
    direction: Readonly<{
      readonly UP: 1
      readonly DOWN: 2
      readonly LEFT: 4
      readonly RIGHT: 8
      readonly UP_LEFT: 5
      readonly UP_RIGHT: 9
      readonly DOWN_LEFT: 6
      readonly DOWN_RIGHT: 10
      readonly DESCEND: 16
      readonly ASCEND: 32
    }>,
  ): GridOffset3D
  /**
   * Returns the point shifted by the difference between the grid space corresponding to the given coordinates
   * and the shifted grid space in the given direction. The z-coordinate is not changed.
   * In square and hexagonal grids with illegal diagonals the point is not shifted if the direction is diagonal.
   * In gridless grids the point coordinates are shifted by the grid size.
   * @overload
   * @param {Point} point                      The point that is to be shifted
   * @param {MOVEMENT_DIRECTIONS} direction    The direction (see {@link CONST.MOVEMENT_DIRECTIONS})
   * @returns {Point}                          The shifted point
   */
  getShiftedPoint(
    point: Point,
    direction: Readonly<{
      readonly UP: 1
      readonly DOWN: 2
      readonly LEFT: 4
      readonly RIGHT: 8
      readonly UP_LEFT: 5
      readonly UP_RIGHT: 9
      readonly DOWN_LEFT: 6
      readonly DOWN_RIGHT: 10
      readonly DESCEND: 16
      readonly ASCEND: 32
    }>,
  ): Point
  /**
   * @overload
   * @param {ElevatedPoint} point              The point that is to be shifted
   * @param {MOVEMENT_DIRECTIONS} direction    The direction (see {@link CONST.MOVEMENT_DIRECTIONS})
   * @returns {ElevatedPoint}                  The shifted point
   * @abstract
   */
  getShiftedPoint(
    point: ElevatedPoint,
    direction: Readonly<{
      readonly UP: 1
      readonly DOWN: 2
      readonly LEFT: 4
      readonly RIGHT: 8
      readonly UP_LEFT: 5
      readonly UP_RIGHT: 9
      readonly DOWN_LEFT: 6
      readonly DOWN_RIGHT: 10
      readonly DESCEND: 16
      readonly ASCEND: 32
    }>,
  ): ElevatedPoint
  /**
   * Returns the top-left point of the grid space bounds corresponding to the given coordinates.
   * If given a point, the top-left point of the grid space bounds that contains it is returned.
   * The top-left point lies in the plane of the bottom face of the 3D grid space.
   * In gridless grids a point with the same coordinates as the given point is returned.
   * @overload
   * @param {Coordinates2D} coords    The coordinates
   * @returns {Point}                 The top-left point
   */
  getTopLeftPoint(coords: Coordinates2D): Point
  /**
   * @overload
   * @param {Coordinates3D} coords    The coordinates
   * @returns {ElevatedPoint}         The top-left point
   * @abstract
   */
  getTopLeftPoint(coords: Coordinates3D): ElevatedPoint
  /**
   * Returns the center point of the grid space corresponding to the given coordinates.
   * If given a point, the center point of the grid space that contains it is returned.
   * The center point lies in the plane of the bottom face of the 3D grid space.
   * In gridless grids a point with the same coordinates as the given point is returned.
   * @overload
   * @param {Coordinates2D} coords    The coordinates
   * @returns {Point}                 The center point
   */
  getCenterPoint(coords: Coordinates2D): Point
  /**
   * @overload
   * @param {Coordinates3D} coords    The coordinates
   * @returns {ElevatedPoint}         The center point
   * @abstract
   */
  getCenterPoint(coords: Coordinates3D): ElevatedPoint
  /**
   * Returns the points of the grid space shape relative to the center point.
   * The points are returned in the same order as in {@link BaseGrid#getVertices}.
   * In gridless grids an empty array is returned.
   * @returns {Point[]}    The points of the polygon
   * @abstract
   */
  getShape(): Point[]
  /**
   * Returns the vertices of the grid space corresponding to the given coordinates.
   * The vertices are returned ordered in positive orientation with the first vertex
   * being the top-left vertex in square grids, the top vertex in row-oriented
   * hexagonal grids, and the left vertex in column-oriented hexagonal grids.
   * In gridless grids an empty array is returned.
   * @param {Coordinates2D} coords      The coordinates
   * @returns {Point[]}                 The vertices
   * @abstract
   */
  getVertices(coords: Coordinates2D): Point[]
  /**
   * Snaps the given point to the grid.
   * In square and hexagonal grids the z-coordinate of the point is rounded to the nearest multiple of the grid size.
   * In gridless grids a point with the same coordinates as the given point is returned regardless of the
   * snapping behavior.
   * @overload
   * @param {Point} point                      The point that is to be snapped
   * @param {GridSnappingBehavior} behavior    The snapping behavior
   * @returns {Point}                          The snapped point
   */
  getSnappedPoint(point: Point, behavior: GridSnappingBehavior): Point
  /**
   * @overload
   * @param {ElevatedPoint} point              The point that is to be snapped
   * @param {GridSnappingBehavior} behavior    The snapping behavior
   * @returns {ElevatedPoint}                  The snapped point
   * @abstract
   */
  getSnappedPoint(point: ElevatedPoint, behavior: GridSnappingBehavior): ElevatedPoint
  /**
   * Measure a shortest, direct path through the given waypoints.
   * @template {{[K in "i"|"j"|"k"|"q"|"r"|"s"|"x"|"y"|"elevation"|"cost"]: never}} [SegmentData={}]
   * @overload
   * @param {(Coordinates2D & Partial<GridMeasurePathWaypointData2D> & SegmentData)[]} waypoints
   *   The waypoints the path must pass through
   * @param {object} [options]                                             Additional measurement options
   * @param {GridMeasurePathCostFunction2D<SegmentData>} [options.cost]    The function that returns the cost
   *   for a given move between grid spaces (default is the distance travelled along the direct path)
   * @returns {GridMeasurePathResult}    The measurements a shortest, direct path through the given waypoints
   */
  measurePath<
    SegmentData extends { [K in "i" | "j" | "k" | "q" | "r" | "s" | "x" | "y" | "elevation" | "cost"]: never } = never,
  >(
    waypoints: (Coordinates2D & Partial<GridMeasurePathWaypointData2D> & SegmentData)[],
    options?:
      | {
          cost?: GridMeasurePathCostFunction2D<SegmentData> | undefined
        }
      | undefined,
  ): GridMeasurePathResult
  /**
   * @overload
   * @param {(Coordinates3D & Partial<GridMeasurePathWaypointData3D> & SegmentData)[]} waypoints
   *   The waypoints the path must pass through
   * @param {object} [options]                                             Additional measurement options
   * @param {GridMeasurePathCostFunction3D<SegmentData>} [options.cost]    The function that returns the cost
   *   for a given move between grid spaces (default is the distance travelled along the direct path)
   * @returns {GridMeasurePathResult}    The measurements a shortest, direct path through the given waypoints
   */
  measurePath(
    // @ts-expect-error -- IGNORE --
    waypoints: (Coordinates3D & Partial<GridMeasurePathWaypointData3D> & SegmentData)[],
    options?:
      | {
          // @ts-expect-error -- IGNORE --
          cost?: GridMeasurePathCostFunction3D<SegmentData> | undefined
        }
      | undefined,
  ): GridMeasurePathResult
  /**
   * Measures the path and writes the segments measurements into the result.
   * The waypoint measurements are filled in by {@link BaseGrid#measurePath}.
   * Called by {@link BaseGrid#measurePath}.
   * @template {{[K in "i"|"j"|"k"|"q"|"r"|"s"|"x"|"y"|"elevation"|"cost"|"measure"]: never}} SegmentData
   * @overload
   * @param {(Coordinates2D & Partial<GridMeasurePathWaypointData2D> & SegmentData)[]} waypoints
   *   The waypoints the path must pass through
   * @param {object} [options]                                             Additional measurement options
   * @param {GridMeasurePathCostFunction2D<SegmentData>} [options.cost]    The function that returns the cost
   *   for a given move between grid spaces (default is the distance travelled)
   * @param {GridMeasurePathResult} result    The measurement result that the measurements need to be written to
   */
  protected _measurePath<
    SegmentData extends {
      [K in "i" | "j" | "k" | "q" | "r" | "s" | "x" | "y" | "elevation" | "cost" | "measure"]: never
    },
  >(
    waypoints: (Coordinates2D & Partial<GridMeasurePathWaypointData2D> & SegmentData)[],
    options:
      | {
          cost?: GridMeasurePathCostFunction2D<SegmentData> | undefined
        }
      | undefined,
    result: GridMeasurePathResult,
  ): any
  /**
   * @overload
   * @param {(Coordinates3D & Partial<GridMeasurePathWaypointData3D> & SegmentData)[]} waypoints
   *   The waypoints the path must pass through
   * @param {object} [options]                                             Additional measurement options
   * @param {GridMeasurePathCostFunction3D<SegmentData>} [options.cost]    The function that returns the cost
   *   for a given move between grid spaces (default is the distance travelled)
   * @param {GridMeasurePathResult} result    The measurement result that the measurements need to be written to
   * @protected
   * @abstract
   */
  protected _measurePath(
    // @ts-expect-error -- IGNORE --
    waypoints: (Coordinates3D & Partial<GridMeasurePathWaypointData3D> & SegmentData)[],
    options:
      | {
          // @ts-expect-error -- IGNORE --
          cost?: GridMeasurePathCostFunction3D<SegmentData> | undefined
        }
      | undefined,
    result: GridMeasurePathResult,
  ): any
  /**
   * Returns the sequence of grid offsets of a shortest, direct path passing through the given waypoints.
   * @overload
   * @param {Coordinates2D[]} waypoints    The waypoints the path must pass through
   * @returns {GridOffset2D[]}             The sequence of grid offsets of a shortest, direct path
   */
  getDirectPath(waypoints: Coordinates2D[]): GridOffset2D[]
  /**
   * @overload
   * @param {Coordinates3D[]} waypoints    The waypoints the path must pass through
   * @returns {GridOffset3D[]}             The sequence of grid offsets of a shortest, direct path
   * @abstract
   */
  getDirectPath(waypoints: Coordinates3D[]): GridOffset3D[]
  /**
   * Get the point translated in a direction by a distance.
   * The z-coordinate is not changed.
   * @overload
   * @param {Point} point            The point that is to be translated
   * @param {number} direction       The angle of direction in degrees
   * @param {number} distance        The distance in grid units
   * @returns {Point}                The translated point
   */
  getTranslatedPoint(point: Point, direction: number, distance: number): Point
  /**
   * @overload
   * @param {ElevatedPoint} point    The point that is to be translated
   * @param {number} direction       The angle of direction in degrees
   * @param {number} distance        The distance in grid units
   * @returns {ElevatedPoint}        The translated point
   * @abstract
   */
  getTranslatedPoint(point: ElevatedPoint, direction: number, distance: number): ElevatedPoint
  /**
   * Get the circle polygon given the radius in grid units for this grid.
   * The points of the polygon are returned ordered in positive orientation.
   * In gridless grids an approximation of the true circle with a deviation of less than 0.25 pixels is returned.
   * @param {Point} center      The center point of the circle.
   * @param {number} radius     The radius in grid units.
   * @returns {Point[]}         The points of the circle polygon.
   * @abstract
   */
  getCircle(center: Point, radius: number): Point[]
  /**
   * Get the cone polygon given the radius in grid units and the angle in degrees for this grid.
   * The points of the polygon are returned ordered in positive orientation.
   * In gridless grids an approximation of the true cone with a deviation of less than 0.25 pixels is returned.
   * @param {Point} origin        The origin point of the cone
   * @param {number} radius       The radius in grid units
   * @param {number} direction    The direction in degrees
   * @param {number} angle        The angle in degrees
   * @returns {Point[]}           The points of the cone polygon
   */
  getCone(origin: Point, radius: number, direction: number, angle: number): Point[]
  /**
   * @deprecated since v12
   * @ignore
   */
  getRect(w: any, h: any): any
  /**
   * @deprecated since v12
   * @ignore
   */
  set w(value: number)
  /**
   * @deprecated
   * @ignore
   */
  get w(): number
  /**
   * @deprecated since v12
   * @ignore
   */
  set h(value: number)
  /**
   * @deprecated since v12
   * @ignore
   */
  get h(): number
  /**
   * @deprecated since v12
   * @ignore
   */
  getTopLeft(x: any, y: any): number[]
  /**
   * @deprecated since v12
   * @ignore
   */
  getCenter(x: any, y: any): any[]
  /**
   * @deprecated since v12
   * @ignore
   */
  getNeighbors(row: any, col: any): number[][]
  /**
   * @deprecated since v12
   * @ignore
   */
  getGridPositionFromPixels(x: any, y: any): number[]
  /**
   * @deprecated since v12
   * @ignore
   */
  getPixelsFromGridPosition(row: any, col: any): number[]
  /**
   * @deprecated since v12
   * @ignore
   */
  shiftPosition(x: any, y: any, dx: any, dy: any, options?: object): any[]
  /**
   * @deprecated since v12
   * @ignore
   */
  measureDistances(segments: any, options?: object): any
  /**
   * @deprecated since v12
   * @ignore
   */
  getSnappedPosition(
    x: any,
    y: any,
    interval?: null,
    options?: object,
  ): {
    x: number
    y: number
  }
  /**
   * @deprecated since v12
   * @ignore
   */
  highlightGridPosition(layer: any, options: any): void
  /**
   * @deprecated since v12
   * @ignore
   */
  get grid(): this
  /**
   * @deprecated since v12
   * @ignore
   */
  isNeighbor(r0: any, c0: any, r1: any, c1: any): boolean
  /**
   * @deprecated since v12
   * @ignore
   */
  get isHex(): boolean
  /**
   * @deprecated since v12
   * @ignore
   */
  measureDistance(origin: any, target: any, options?: object): any
  /**
   * @deprecated since v12
   * @ignore
   */
  get highlight(): any
  /**
   * @deprecated since v12
   * @ignore
   */
  get highlightLayers(): any
  /**
   * @deprecated since v12
   * @ignore
   */
  addHighlightLayer(name: any): any
  /**
   * @deprecated since v12
   * @ignore
   */
  clearHighlightLayer(name: any): void
  /**
   * @deprecated since v12
   * @ignore
   */
  destroyHighlightLayer(name: any): void
  /**
   * @deprecated since v12
   * @ignore
   */
  getHighlightLayer(name: any): any
  /**
   * @deprecated since v12
   * @ignore
   */
  highlightPosition(name: any, options: any): void
}
import type { ElevatedPoint, Point, Rectangle } from "../_types.mjs"
import type { GridType } from "../constants.mjs"
import Color from "../utils/color.mjs"
import type {
  GridConfiguration,
  GridCoordinates2D,
  GridCoordinates3D,
  GridMeasurePathCostFunction2D,
  GridMeasurePathCostFunction3D,
  GridMeasurePathResult,
  GridMeasurePathWaypointData2D,
  GridMeasurePathWaypointData3D,
  GridOffset2D,
  GridOffset3D,
  GridSnappingBehavior,
} from "./_types.mjs"
