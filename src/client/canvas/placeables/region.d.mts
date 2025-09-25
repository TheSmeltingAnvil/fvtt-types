/**
 * A Region is an implementation of PlaceableObject which represents a Region document
 * within a viewed Scene on the game canvas.
 * @category Canvas
 * @see {@link foundry.documents.RegionDocument}
 * @see {@link foundry.canvas.layers.RegionLayer}
 */
export default class Region extends PlaceableObject {
  /** @override */
  static override RENDER_FLAGS: {
    redraw: {
      propagate: string[]
    }
    refresh: {
      propagate: string[]
      alias: boolean
    }
    refreshState: object
    refreshBorder: object
  }
  /**
   * @deprecated since v13
   * @ignore
   */
  static get CLIPPER_SCALING_FACTOR(): number
  /**
   * @deprecated since v13
   * @ignore
   */
  static get MOVEMENT_SEGMENT_TYPES(): Readonly<{
    readonly EXIT: -1
    readonly MOVE: 0
    readonly ENTER: 1
  }>
  /**
   * The geometry of this Region.
   *
   * The value of this property must not be mutated.
   *
   * This property is updated only by a document update.
   * @type {RegionGeometry}
   */
  get geometry(): RegionGeometry
  /**
   * Is this Region currently visible on the Canvas?
   * @type {boolean}
   */
  get isVisible(): boolean
  /** @override */
  override getSnappedPosition(position: any): void
  /** @override */
  override _draw(options: any): Promise<void>
  cursor: string | undefined
  /** @override */
  override _applyRenderFlags(flags: any): void
  /**
   * Refresh the state of the Region.
   * @protected
   */
  protected _refreshState(): void
  zIndex: number | undefined
  eventMode: string | undefined
  /**
   * Refresh the border of the Region.
   * @protected
   */
  protected _refreshBorder(): void
  /** @override */
  override _canDrag(user: any, event: any): boolean
  /** @override */
  override _canHUD(user: any, event: any): boolean
  /** @inheritDoc */
  _onControl(options: any): void
  /** @inheritDoc */
  _onRelease(options: any): void
  /**
   * Actions that should be taken for this Region when a mouseover event occurs.
   * @param {PIXI.FederatedEvent} event The triggering canvas interaction event
   * @param {object} options Options that customize event handling
   * @param {boolean} [options.updateLegend=true] Highlight corresponding entry in the RegionLegend.
   * @returns {boolean|void}
   * @protected
   * @override
   */
  protected override _onHoverIn(
    event: PIXI.FederatedEvent,
    {
      updateLegend,
      ...options
    }?: {
      updateLegend?: boolean | undefined
    },
  ): boolean | void
  /** @inheritDoc */
  _onHoverOut(
    event: any,
    {
      updateLegend,
      ...options
    }?: {
      updateLegend?: boolean | undefined
    },
  ): void
  /** @override */
  override _overlapsSelection(rectangle: any): boolean
  /** @inheritDoc */
  _onUpdate(changed: any, options: any, userId: any): void
  /**
   * @deprecated since v13
   * @ignore
   */
  get bottom(): any
  /**
   * @deprecated since v13
   * @ignore
   */
  get top(): any
  /**
   * @deprecated since v13
   * @ignore
   */
  get shapes(): any
  /**
   * @deprecated since v13
   * @ignore
   */
  get polygons(): any
  /**
   * @deprecated since v13
   * @ignore
   */
  get polygonTree(): any
  /**
   * @deprecated since v13
   * @ignore
   */
  get clipperPaths(): any
  /**
   * @deprecated since v13
   * @ignore
   */
  get triangulation(): any
  /**
   * @deprecated since v13
   * @ignore
   */
  segmentizeMovement(waypoints: any, samples: any, options: any): any
  /**
   * @deprecated since v13
   * @ignore
   */
  testPoint(point: any, elevation: any): any
  #private
}
import PlaceableObject from "./placeable-object.mjs"
import RegionGeometry from "./regions/geometry.mjs"
