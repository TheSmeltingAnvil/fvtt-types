declare const BaseRuler_base: {
  new (...args: any[]): {
    renderFlags: foundry.canvas.interaction.RenderFlags
    applyRenderFlags(): void
  }
  RENDER_FLAGS: Record<string, Handlebars>
  RENDER_FLAG_PRIORITY: string
}
/**
 * @import {ElevatedPoint, Point} from "@common/_types.mjs";
 */
/**
 * The ruler that is used to measure distances on the Canvas.
 * @mixes RenderFlagsMixin
 */
export default class BaseRuler extends BaseRuler_base {
  /** @override */
  static override RENDER_FLAGS: {
    refresh: object
  }
  /**
   * Is the Ruler ready to measure?
   * @type {boolean}
   */
  static get canMeasure(): boolean
  /**
   * Snaps the given point to the grid.
   * @param {Point} point    The point that is to be snapped
   * @returns {Point}        The snapped point
   */
  static getSnappedPoint(point: Point): Point
  /**
   * @param {User} user    The User for whom to construct the Ruler instance
   */
  constructor(user: User)
  /**
   * The User who this Ruler belongs to.
   * @type {User}
   */
  get user(): User
  /**
   * Is this Ruler active? True, if the path of the Ruler is nonempty.
   * @type {boolean}
   */
  get active(): boolean
  /**
   * The Ruler is visible if it is active and either not hidden or its User is the current User.
   * @type {boolean}
   */
  get visible(): boolean
  /**
   * Set the sequence of points that the Ruler measures.
   */
  set path(value: ReadonlyArray<Readonly<ElevatedPoint>>)
  /**
   * The sequence of points that the Ruler measures.
   * @type {ReadonlyArray<Readonly<ElevatedPoint>>}
   * @defaultValue []
   */
  get path(): ReadonlyArray<Readonly<ElevatedPoint>>
  /**
   * The first point of the path, or undefined if the path is empty.
   * @type {ElevatedPoint|undefined}
   */
  get origin(): ElevatedPoint | undefined
  /**
   * The last point of the path, or undefined if the path is empty.
   * @type {ElevatedPoint|undefined}
   */
  get destination(): ElevatedPoint | undefined
  set hidden(value: boolean)
  /**
   * Is this Ruler hidden? If true, only the User of the Ruler can see it.
   * @type {boolean}
   * @defaultValue false
   */
  get hidden(): boolean
  /**
   * Called when the Ruler's path has changed.
   * @protected
   */
  protected _onPathChange(): void
  /**
   * Called when the Ruler becomes hidden or unhidden.
   * @protected
   */
  protected _onHiddenChange(): void
  /**
   * Reset the path and the hidden state of the Ruler.
   */
  reset(): void
  /**
   * Draw the Ruler.
   * @abstract
   */
  draw(): Promise<void>
  /**
   * Destroy the Ruler.
   * @abstract
   */
  destroy(): void
  /**
   * Refresh the Ruler.
   */
  refresh(): void
  /**
   * Refresh the Ruler.
   * @protected
   * @abstract
   */
  protected _refresh(): void
  /**
   * Add a waypoint.
   * @param {Point} point                     The (unsnapped) waypoint
   * @param {object} [options]                Additional options
   * @param {boolean} [options.snap=false]    Snap the added waypoint?
   * @protected
   */
  protected _addDragWaypoint(
    point: Point,
    {
      snap,
    }?: {
      snap?: boolean | undefined
    },
  ): void
  /**
   * Remove the second to last waypoint.
   * @protected
   */
  protected _removeDragWaypoint(): void
  /**
   * Change the elevation of the destination.
   * @param {number} delta                       The number vertical steps
   * @param {object} [options]                   Additional options
   * @param {boolean} [options.precise=false]    Round elevations to multiples of the grid distance divided by
   *                                             `CONFIG.Canvas.elevationSnappingPrecision`?
   *                                             If false, rounds to multiples of the grid distance.
   * @protected
   */
  protected _changeDragElevation(
    delta: number,
    {
      precise,
    }?: {
      precise?: boolean | undefined
    },
  ): void
  /**
   * Handle the beginning of a new Ruler measurement workflow.
   * @param {PIXI.FederatedEvent} event    The drag start event
   * @protected
   */
  protected _onDragStart(event: PIXI.FederatedEvent): void
  /**
   * Handle the end of the Ruler measurement workflow
   * @param {PIXI.FederatedEvent} event    The drag cancel event
   * @returns {boolean|void}               If false, the cancellation of the drag workflow is prevented
   * @protected
   */
  protected _onDragCancel(event: PIXI.FederatedEvent): boolean | void
  /**
   * Handle left-click events on the Canvas during Ruler measurement.
   * @param {PIXI.FederatedEvent} event    The pointer-down event
   * @protected
   */
  protected _onClickLeft(event: PIXI.FederatedEvent): void
  /**
   * Handle right-click events on the Canvas during Ruler measurement.
   * @param {PIXI.FederatedEvent} event    The pointer-down event
   * @protected
   */
  protected _onClickRight(event: PIXI.FederatedEvent): void
  /**
   * Continue a Ruler measurement workflow for left-mouse movements on the Canvas.
   * @param {PIXI.FederatedEvent} event    The mouse move event
   * @protected
   */
  protected _onMouseMove(event: PIXI.FederatedEvent): void
  /**
   * Conclude a Ruler measurement workflow by releasing the left-mouse button.
   * @param {PIXI.FederatedEvent} event   The pointer-up event
   * @protected
   */
  protected _onMouseUp(event: PIXI.FederatedEvent): void
  /**
   * Adjust the elevation of Ruler waypoints by scrolling up/down.
   * @param {WheelEvent} event    The mousewheel event
   * @protected
   */
  protected _onMouseWheel(event: WheelEvent): void
  /**
   * @deprecated since v13
   * @ignore
   */
  clear(): void
  /**
   * @deprecated since v13
   * @ignore
   */
  update(data: any): void
  #private
}
import User from "@client/documents/user.mjs"
import type { ElevatedPoint, Point } from "@common/_types.mjs"
export {}
