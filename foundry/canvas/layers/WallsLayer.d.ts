import * as types from "./_types.js"
import * as layers from "foundry/canvas/layers/_module.js"
import * as placeables from "foundry/canvas/placeables/_module.js"

/**
 * The Walls canvas layer which provides a container for Wall objects within the rendered Scene.
 * @category Canvas
 */
export default class WallsLayer<
  TObject extends placeables.Wall = placeables.Wall,
  // @ts-expect-error Should fix.
> extends layers.PlaceablesLayer<TObject> {
  /** A graphics layer used to display chained Wall selection */
  chain: PIXI.Graphics | null

  /**
   * Track whether we are currently within a chained placement workflow
   * @internal
   */
  _chain: boolean

  /**
   * Track the most recently created or updated wall data for use with the clone tool
   * @internal
   */
  _cloneType: object | null

  /**
   * Reference the last interacted wall endpoint for the purposes of chaining
   * @internal
   */
  _last: { point: foundry.types.PointArray }

  /* -------------------------------------------- */
  /*  Properties                                  */
  /* -------------------------------------------- */

  static override get layerOptions(): types.PlaceablesLayerOptions

  static override documentName: "Wall"

  override get hookName(): string

  /** An Array of Wall instances in the current Scene which act as Doors. */
  get doors(): TObject[]

  /* -------------------------------------------- */
  /*  Methods                                     */
  /* -------------------------------------------- */

  override getSnappedPoint(point: foundry.types.Point): foundry.types.Point

  protected override _draw(options?: object): Promise<void>

  protected override _deactivate(): void

  /**
   * Given a point and the coordinates of a wall, determine which endpoint is closer to the point
   * @param point  The origin point of the new Wall placement
   * @param wall   The existing Wall object being chained to
   * @returns  The [x,y] coordinates of the starting endpoint
   */
  static getClosestEndpoint(point: foundry.types.Point, wall: placeables.Wall): foundry.types.PointArray

  override releaseAll(options?: object): number

  /**
   * Get the wall endpoint coordinates for a given point.
   * @param point                The candidate wall endpoint.
   * @param [options]
   * @param [options.snap=true]  Snap to the grid?
   * @returns  The wall endpoint coordinates.
   * @internal
   */
  _getWallEndpointCoordinates(point: foundry.types.Point, options?: { snap?: boolean }): foundry.types.PointArray

  /**
   * Identify the interior enclosed by the given walls.
   * @param walls  The walls that enclose the interior.
   * @returns The polygons of the interior.
   * @license MIT
   */
  identifyInteriorArea(walls: TObject[]): PIXI.Polygon[]

  static override prepareSceneControls(): foundry.applications.ui.SceneControl

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  // @ts-expect-error Should fix.
  protected override _onDragLeftStart(event: layers.PlaceablesLayerPointerEvent<TObject>): void

  // @ts-expect-error Should fix.
  protected override _onDragLeftMove(event: layers.PlaceablesLayerPointerEvent<TObject>): void

  // @ts-expect-error Should fix.
  protected override _onDragLeftDrop(event: layers.PlaceablesLayerPointerEvent<TObject>): void

  // @ts-expect-error Should fix.
  protected override _onDragLeftCancel(event: layers.PlaceablesLayerPointerEvent<TObject>): void

  // @ts-expect-error Should fix.
  protected override _onClickRight(event: layers.PlaceablesLayerPointerEvent<TObject>): void
}
