/**
 * The Drawing object is an implementation of the PlaceableObject container.
 * Each Drawing is a placeable object in the DrawingsLayer.
 * @category Canvas
 * @see {@link foundry.documents.DrawingDocument}
 * @see {@link foundry.canvas.layers.DrawingsLayer}
 */
export default class Drawing extends PlaceableObject {
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
    refreshTransform: {
      propagate: string[]
      alias: boolean
    }
    refreshPosition: object
    refreshRotation: {
      propagate: string[]
    }
    refreshSize: {
      propagate: string[]
    }
    refreshShape: object
    refreshText: object
    refreshFrame: object
    refreshElevation: object
    /** @deprecated since v12 */
    refreshMesh: {
      propagate: string[]
      deprecated: {
        since: number
        until: number
        alias: boolean
      }
    }
  }
  /**
   * The rate at which points are sampled (in milliseconds) during a freehand drawing workflow
   * @type {number}
   */
  static FREEHAND_SAMPLE_RATE: number
  /**
   * A convenience reference to the possible shape types.
   * @enum {string}
   */
  static SHAPE_TYPES: {
    RECTANGLE: string
    CIRCLE: string
    ELLIPSE: string
    POLYGON: string
  }
  /**
   * Get a vectorized rescaling transformation for drawing data and dimensions passed in parameter
   * @param {Object} original     The original drawing data
   * @param {number} dx           The pixel distance dragged in the horizontal direction
   * @param {number} dy           The pixel distance dragged in the vertical direction
   * @returns {object}            The adjusted shape data
   */
  static rescaleDimensions(original: Object, dx: number, dy: number): object
  /**
   * Adjust the location, dimensions, and points of the Drawing before committing the change.
   * @param {object} data   The DrawingData pending update
   * @returns {object}      The adjusted data
   */
  static normalizeShape(data: object): object
  /**
   * The texture that is used to fill this Drawing, if any.
   * @type {PIXI.Texture|null}
   */
  texture: PIXI.Texture | null
  /**
   * The border frame and resizing handles for the drawing.
   * @type {PIXI.Container}
   */
  frame: PIXI.Container
  /**
   * A text label that may be displayed as part of the interface layer for the Drawing.
   * @type {PreciseText|null}
   */
  text: PreciseText | null
  /**
   * The drawing shape which is rendered as a PIXI.Graphics in the interface or a PrimaryGraphics in the Primary Group.
   * @type {PrimaryGraphics|PIXI.Graphics}
   */
  shape: PrimaryGraphics | PIXI.Graphics
  /**
   * An internal flag for the permanent points of the polygon.
   * @type {number[]}
   * @internal
   */
  _fixedPoints: number[]
  /**
   * A convenient reference for whether the current User is the author of the Drawing document.
   * @type {boolean}
   */
  get isAuthor(): boolean
  /**
   * Is this Drawing currently visible on the Canvas?
   * @type {boolean}
   */
  get isVisible(): boolean
  /**
   * A Boolean flag for whether the Drawing utilizes a tiled texture background?
   * @type {boolean}
   */
  get isTiled(): boolean
  /**
   * A Boolean flag for whether the Drawing is a Polygon type (either linear or freehand)?
   * @type {boolean}
   */
  get isPolygon(): boolean
  /**
   * Does the Drawing have text that is displayed?
   * @type {boolean}
   */
  get hasText(): boolean
  /**
   * The shape type that this Drawing represents. A value in Drawing.SHAPE_TYPES.
   * @see {@link Drawing.SHAPE_TYPES}
   * @type {string}
   */
  get type(): string
  /**
   * The pending text.
   * @type {string}
   * @internal
   */
  _pendingText: string
  /**
   * The registered keydown listener.
   * @type {Function|null}
   * @internal
   */
  _onkeydown: Function | null
  /** @inheritDoc */
  _destroy(options: any): void
  /** @override */
  override _draw(options: any): Promise<void>
  /**
   * Get the line style used for drawing the shape of this Drawing.
   * @returns {object}    The line style options (`PIXI.ILineStyleOptions`).
   * @protected
   */
  protected _getLineStyle(): object
  /**
   * Get the fill style used for drawing the shape of this Drawing.
   * @returns {object}    The fill style options (`PIXI.IFillStyleOptions`).
   * @protected
   */
  protected _getFillStyle(): object
  /**
   * Prepare the text style used to instantiate a PIXI.Text or PreciseText instance for this Drawing document.
   * @returns {PIXI.TextStyle}
   * @protected
   */
  protected _getTextStyle(): PIXI.TextStyle
  /** @override */
  override _applyRenderFlags(flags: any): void
  /**
   * Refresh the position.
   * @protected
   */
  protected _refreshPosition(): void
  /**
   * Refresh the rotation.
   * @protected
   */
  protected _refreshRotation(): void
  /**
   * Refresh the displayed state of the Drawing.
   * Used to update aspects of the Drawing which change based on the user interaction state.
   * @protected
   */
  protected _refreshState(): void
  alpha: number | undefined
  zIndex: number | undefined
  cursor: string | null | undefined
  eventMode: string | undefined
  /**
   * Clear and then draw the shape.
   * @protected
   */
  protected _refreshShape(): void
  /**
   * Update sorting of this Drawing relative to other PrimaryCanvasGroup siblings.
   * Called when the elevation or sort order for the Drawing changes.
   * @protected
   */
  protected _refreshElevation(): void
  /**
   * Refresh the border frame that encloses the Drawing.
   * @protected
   */
  protected _refreshFrame(): void
  /**
   * Refresh the content and appearance of text.
   * @protected
   */
  protected _refreshText(): void
  /**
   * Add a new polygon point to the drawing, ensuring it differs from the last one
   * @param {Point} position            The drawing point to add
   * @param {object} [options]          Options which configure how the point is added
   * @param {boolean} [options.round=false]     Should the point be rounded to integer coordinates?
   * @param {boolean} [options.snap=false]      Should the point be snapped to grid precision?
   * @param {boolean} [options.temporary=false] Is this a temporary control point?
   * @internal
   */
  _addPoint(
    position: Point,
    {
      round,
      snap,
      temporary,
    }?: {
      round?: boolean | undefined
      snap?: boolean | undefined
      temporary?: boolean | undefined
    },
  ): void
  /**
   * Remove the last fixed point from the polygon
   * @internal
   */
  _removePoint(): void
  /** @inheritDoc */
  _onControl(options: any): void
  /** @inheritDoc */
  _onRelease(options: any): void
  /** @override */
  override _overlapsSelection(rectangle: any): any
  /**
   * Enable text editing for this drawing.
   * @param {object} [options]
   */
  enableTextEditing(options?: object): void
  /** @inheritDoc */
  _onUpdate(changed: any, options: any, userId: any): void
  /** @inheritDoc */
  _onDelete(options: any, userId: any): void
  /** @override */
  override _canControl(user: any, event: any): any
  /** @override */
  override _canConfigure(user: any, event: any): boolean
  /**
   * Handle mouse movement which modifies the dimensions of the drawn shape.
   * @param {PIXI.FederatedEvent} event
   * @protected
   */
  protected _onMouseDraw(event: PIXI.FederatedEvent): void
  /** @inheritdoc */
  _onClickLeft(event: any): boolean | void
  /** @override */
  override _onDragLeftStart(event: any): boolean | void
  /** @override */
  override _onDragLeftMove(event: any): void
  /** @override */
  override _onDragLeftDrop(event: any): false | void
  /** @inheritDoc */
  _onDragLeftCancel(event: any): boolean | void
  /**
   * Handle mouse-over event on a control handle
   * @param {PIXI.FederatedEvent} event   The mouseover event
   * @protected
   */
  protected _onHandleHoverIn(event: PIXI.FederatedEvent): void
  /**
   * Handle mouse-out event on a control handle
   * @param {PIXI.FederatedEvent} event   The mouseout event
   * @protected
   */
  protected _onHandleHoverOut(event: PIXI.FederatedEvent): void
  /**
   * Starting the resize handle drag event, initialize the original data.
   * @param {PIXI.FederatedEvent} event   The mouse interaction event
   * @protected
   */
  protected _onHandleDragStart(event: PIXI.FederatedEvent): void
  /**
   * Handle mousemove while dragging a tile scale handler
   * @param {PIXI.FederatedEvent} event   The mouse interaction event
   * @protected
   */
  protected _onHandleDragMove(event: PIXI.FederatedEvent): void
  /**
   * Handle mouseup after dragging a tile scale handler
   * @param {PIXI.FederatedEvent} event   The mouseup event
   * @protected
   */
  protected _onHandleDragDrop(event: PIXI.FederatedEvent): void
  /**
   * Handle cancellation of a drag event for one of the resizing handles
   * @param {PointerEvent} event            The drag cancellation event
   * @protected
   */
  protected _onHandleDragCancel(event: PointerEvent): void
  #private
}
import PreciseText from "../containers/elements/precise-text.mjs"
import PlaceableObject from "./placeable-object.mjs"
