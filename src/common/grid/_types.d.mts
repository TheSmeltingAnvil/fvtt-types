/**
 * 2D offset coordinates of a grid space.
 */
export type GridOffset2D = {
  /**
   * The row coordinate (an integer)
   */
  i: number
  /**
   * The column coordinate (an integer)
   */
  j: number
}
/**
 * 3D offset coordinates of a grid space.
 */
export type GridOffset3D = {
  /**
   * The row coordinate (an integer)
   */
  i: number
  /**
   * The column coordinate (an integer)
   */
  j: number
  /**
   * The vertical coordinate (an integer)
   */
  k: number
}
/**
 * 2D cube coordinates in a hexagonal grid. q + r + s = 0.
 */
export type HexagonalGridCube2D = {
  /**
   * The coordinate along the E-W (columns) or SW-NE (rows) axis.
   * Equal to the offset column coordinate if column orientation.
   */
  q: number
  /**
   * The coordinate along the NE-SW (columns) or N-S (rows) axis.
   * Equal to the offset row coordinate if row orientation.
   */
  r: number
  /**
   * The coordinate along the SE-NW axis.
   */
  s: number
}
/**
 * 3D cube coordinates in a hexagonal grid. q + r + s = 0.
 */
export type HexagonalGridCube3D = {
  /**
   * The coordinate along the E-W (columns) or SW-NE (rows) axis.
   * Equal to the offset column coordinate if column orientation.
   */
  q: number
  /**
   * The coordinate along the NE-SW (columns) or N-S (rows) axis.
   * Equal to the offset row coordinate if row orientation.
   */
  r: number
  /**
   * The coordinate along the SE-NW axis.
   */
  s: number
  /**
   * The vertical coordinate.
   */
  k: number
}
/**
 * A 2D offset of a grid space or a 2D point with pixel coordinates.
 */
export type GridCoordinates2D = GridOffset2D | Point
/**
 * A 3D offset of a grid space or an elevated point.
 */
export type GridCoordinates3D = GridOffset3D | ElevatedPoint
/**
 * 2D hexagonal cube coordinates, a 2D offset of a grid space, or a 2D point with pixel coordinates.
 */
export type HexagonalGridCoordinates2D = GridCoordinates2D | HexagonalGridCube2D
/**
 * 3D hexagonal cube coordinates, a 3D offset of a grid space, or a 3D point with pixel coordinates.
 */
export type HexagonalGridCoordinates3D = GridCoordinates3D | HexagonalGridCube3D
/**
 * A snapping behavior is defined by the snapping mode at the given resolution of the grid.
 */
export type GridSnappingBehavior = {
  /**
   * The snapping mode (a union of {@link CONST.GRID_SNAPPING_MODES}).
   */
  mode: number
  /**
   * The resolution (a positive integer). Default: `1`.
   */
  resolution?: number | undefined
}
export type GridMeasurePathWaypointData2D = {
  /**
   * Teleport to this waypoint? Default: `false`.
   */
  teleport?: boolean | undefined
  /**
   * Measure of the segment from the previous to
   *                          this waypoint? The distance, cost, spaces, diagonals,
   *                          and Euclidean length of a segment that is not measured are
   *                          always 0. Default: `true`.
   */
  measure?: boolean | undefined
  /**
   * A predetermined cost (nonnegative) or cost function
   *     to be used instead of `options.cost`.
   */
  cost?: number | GridMeasurePathCostFunction2D<object> | undefined
}
export type GridMeasurePathWaypointData3D = {
  /**
   * Teleport to this waypoint? Default: `false`.
   */
  teleport?: boolean | undefined
  /**
   * Measure of the segment from the previous to
   *                          this waypoint? The distance, cost, spaces, diagonals,
   *                          and Euclidean length of a segment that is not measured are
   *                          always 0. Default: `true`.
   */
  measure?: boolean | undefined
  /**
   * A predetermined cost (nonnegative) or cost function
   *     to be used instead of `options.cost`.
   */
  cost?: number | GridMeasurePathCostFunction3D<object> | undefined
}
/**
 * A waypoint of {@link foundry.grid.types.GridMeasurePathResult}.
 */
export type GridMeasurePathResultWaypoint = {
  /**
   * The segment from the previous waypoint to this waypoint.
   */
  backward: GridMeasurePathResultSegment | null
  /**
   * The segment from this waypoint to the next waypoint.
   */
  forward: GridMeasurePathResultSegment | null
  /**
   * The total distance travelled along the path up to this waypoint.
   */
  distance: number
  /**
   * The total cost of the direct path ({@link foundry.grid.BaseGrid#getDirectPath}) up to
   * this waypoint.
   */
  cost: number
  /**
   * The total number of spaces moved along a direct path up to this waypoint.
   */
  spaces: number
  /**
   * The total number of diagonals moved along a direct path up to this waypoint.
   */
  diagonals: number
  /**
   * The total Euclidean length of the straight line path up to this waypoint.
   */
  euclidean: number
}
/**
 * A segment of {@link foundry.grid.types.GridMeasurePathResult}.
 */
export type GridMeasurePathResultSegment = {
  /**
   * The waypoint that this segment starts from.
   */
  from: GridMeasurePathResultWaypoint
  /**
   * The waypoint that this segment goes to.
   */
  to: GridMeasurePathResultWaypoint
  /**
   * The distance travelled in grid units along this segment.
   */
  distance: number
  /**
   * The cost of the direct path ({@link foundry.grid.BaseGrid#getDirectPath}) between the
   * two waypoints.
   */
  cost: number
  /**
   * The number of spaces moved along this segment.
   */
  spaces: number
  /**
   * The number of diagonals moved along this segment.
   */
  diagonals: number
  /**
   * The Euclidean length of the straight line segment between the two waypoints.
   */
  euclidean: number
}
/**
 * A result of {@link foundry.grid.BaseGrid#measurePath}.
 */
export type GridMeasurePathResult = {
  /**
   * The measurements at each waypoint.
   */
  waypoints: GridMeasurePathResultWaypoint[]
  /**
   * The measurements at each segment.
   */
  segments: GridMeasurePathResultSegment[]
  /**
   * The total distance travelled along the path through all waypoints.
   */
  distance: number
  /**
   * The total cost of the direct path ({@link foundry.grid.BaseGrid#getDirectPath})
   * through all waypoints.
   */
  cost: number
  /**
   * The total number of spaces moved along a direct path through all waypoints.
   * Moving from a grid space to any of its neighbors counts as 1 step.
   * Always 0 in gridless grids.
   */
  spaces: number
  /**
   * The total number of diagonals moved along a direct path through all waypoints.
   */
  diagonals: number
  /**
   * The total Euclidean length of the straight line path through all waypoints.
   */
  euclidean: number
}
/**
 * A function that returns the cost for a given move between grid spaces in 2D.
 * In square and hexagonal grids the grid spaces are always adjacent unless teleported.
 * The function is never called with the same offsets.
 */
export type GridMeasurePathCostFunction2D<SegmentData = object> = (
  from: Readonly<GridOffset2D>,
  to: Readonly<GridOffset2D>,
  distance: number,
  segment: DeepReadonly<SegmentData>,
) => number
/**
 * A function that returns the cost for a given move between grid spaces in 3D.
 * In square and hexagonal grids the grid spaces are always adjacent unless teleported.
 * The function is never called with the same offsets.
 */
export type GridMeasurePathCostFunction3D<SegmentData = object> = (
  from: Readonly<GridOffset3D>,
  to: Readonly<GridOffset3D>,
  distance: number,
  segment: DeepReadonly<SegmentData>,
) => number
export type GridConfiguration = {
  /**
   * The size of a grid space in pixels (a positive number).
   */
  size: number
  /**
   * The distance of a grid space in units (a positive number). Default: `1`.
   */
  distance?: number | undefined
  /**
   * The units of measurement. Default: `""`.
   */
  units?: string | undefined
  /**
   * The style of the grid. Default: `"solidLines"`.
   */
  style?: string | undefined
  /**
   * The color of the grid. Default: `0x000000`.
   */
  color?: ColorSource | undefined
  /**
   * The alpha of the grid. Default: `1`.
   */
  alpha?: number | undefined
  /**
   * The line thickness of the grid. Default: `1`.
   */
  thickness?: number | undefined
}
export type SquareGridConfiguration = {
  /**
   * The size of a grid space in pixels (a positive number).
   */
  size: number
  /**
   * The distance of a grid space in units (a positive number). Default: `1`.
   */
  distance?: number | undefined
  /**
   * The units of measurement. Default: `""`.
   */
  units?: string | undefined
  /**
   * The style of the grid. Default: `"solidLines"`.
   */
  style?: string | undefined
  /**
   * The color of the grid. Default: `0x000000`.
   */
  color?: ColorSource | undefined
  /**
   * The alpha of the grid. Default: `1`.
   */
  alpha?: number | undefined
  /**
   * The line thickness of the grid. Default: `1`.
   */
  thickness?: number | undefined
  /**
   * The rule for diagonal measurement (see {@link CONST.GRID_DIAGONALS}).
   *  Default: `CONST.GRID_DIAGONALS.EQUIDISTANT`.
   */
  diagonals?: GridDiagonalRule | undefined
}
export type HexagonalGridConfiguration = {
  /**
   * The size of a grid space in pixels (a positive number).
   */
  size: number
  /**
   * The distance of a grid space in units (a positive number). Default: `1`.
   */
  distance?: number | undefined
  /**
   * The units of measurement. Default: `""`.
   */
  units?: string | undefined
  /**
   * The style of the grid. Default: `"solidLines"`.
   */
  style?: string | undefined
  /**
   * The color of the grid. Default: `0x000000`.
   */
  color?: ColorSource | undefined
  /**
   * The alpha of the grid. Default: `1`.
   */
  alpha?: number | undefined
  /**
   * The line thickness of the grid. Default: `1`.
   */
  thickness?: number | undefined
  /**
   * Is this grid column-based (flat-topped) or row-based (pointy-topped)?
   *       Default: `false`.
   */
  columns?: boolean | undefined
  /**
   * Is this grid even or odd? Default: `false`.
   */
  even?: boolean | undefined
  /**
   * The rule for diagonal measurement (see {@link CONST.GRID_DIAGONALS}).
   *  Default: `CONST.GRID_DIAGONALS.EQUIDISTANT`.
   */
  diagonals?: GridDiagonalRule | undefined
}
import type { ColorSource, DeepReadonly, ElevatedPoint, Point } from "../_types.mjs"
import type { GridDiagonalRule } from "../constants.mjs"
