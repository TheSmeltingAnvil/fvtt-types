/**
 * A Tile is an implementation of PlaceableObject which represents a static piece of artwork or prop within the Scene.
 * @category Canvas
 * @see {@link foundry.documents.TileDocument}
 * @see {@link foundry.canvas.layers.TilesLayer}
 */
export default class Tile extends PlaceableObject {
  /** @override */
  static override RENDER_FLAGS: {
    redraw: {
      propagate: string[]
    }
    refresh: {
      propagate: string[]
      alias: boolean
    }
    refreshState: {
      propagate: string[]
    }
    refreshTransform: {
      propagate: string[]
      alias: boolean
    }
    refreshPosition: {
      propagate: string[]
    }
    refreshRotation: {
      propagate: string[]
    }
    refreshSize: {
      propagate: string[]
    }
    refreshMesh: object
    refreshFrame: object
    refreshElevation: {
      propagate: string[]
    }
    refreshPerception: object
    refreshVideo: object
    /** @deprecated since v12 */
    refreshShape: {
      propagate: string[]
      deprecated: {
        since: number
        until: number
        alias: boolean
      }
    }
  }
  /**
   * Create a preview tile with a background texture instead of an image
   * @param {object} data     Initial data with which to create the preview Tile
   * @returns {PlaceableObject}
   */
  static createPreview(data: object): PlaceableObject
  /**
   * The Tile border frame
   * @type {PIXI.Container}
   */
  frame: PIXI.Container
  /**
   * The primary tile image texture
   * @type {PIXI.Texture|PIXI.Spritesheet|null}
   */
  texture: PIXI.Texture | PIXI.Spritesheet | null
  /**
   * A Tile background which is displayed if no valid image texture is present
   * @type {PIXI.Graphics|null}
   */
  bg: PIXI.Graphics | null
  /**
   * A reference to the SpriteMesh which displays this Tile in the PrimaryCanvasGroup.
   * @type {PrimarySpriteMesh|null}
   */
  mesh: PrimarySpriteMesh | null
  /**
   * Get the native aspect ratio of the base texture for the Tile sprite
   * @type {number}
   */
  get aspectRatio(): number
  /**
   * The HTML source element for the primary Tile texture
   * @type {PIXI.ImageSource|null}
   */
  get sourceElement(): PIXI.ImageSource | null
  /**
   * Does this Tile depict an animated video texture?
   * @type {boolean}
   */
  get isVideo(): boolean
  /**
   * Is this Tile currently visible on the Canvas?
   * @type {boolean}
   */
  get isVisible(): boolean
  /**
   * Is this tile occluded?
   * @returns {boolean}
   */
  get occluded(): boolean
  /**
   * Is the tile video playing?
   * @type {boolean}
   */
  get playing(): boolean
  /**
   * The effective volume at which this Tile should be playing, including the global ambient volume modifier
   * @type {number}
   */
  get volume(): number
  /** @override */
  override _overlapsSelection(rectangle: any): any
  /** @override */
  override _draw(options?: object): Promise<void>
  cursor: string | null | undefined
  /** @inheritDoc */
  clear(): this
  /** @inheritdoc */
  _destroy(options: any): void
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
  protected _refreshRotation(): any
  /**
   * Refresh the size.
   * @protected
   */
  protected _refreshSize(): any
  /**
   * Refresh the displayed state of the Tile.
   * Updated when the tile interaction state changes, when it is hidden, or when its elevation changes.
   * @protected
   */
  protected _refreshState(): void
  alpha: number | undefined
  eventMode: string | undefined
  zIndex: number | undefined
  /**
   * Refresh the appearance of the tile.
   * @protected
   */
  protected _refreshMesh(): void
  /**
   * Refresh the elevation.
   * @protected
   */
  protected _refreshElevation(): void
  /**
   * Refresh the border frame that encloses the Tile.
   * @protected
   */
  protected _refreshFrame(): void
  /**
   * Refresh changes to the video playback state.
   * @protected
   */
  protected _refreshVideo(): void
  /** @inheritDoc */
  _onUpdate(changed: any, options: any, userId: any): void
  /** @inheritdoc */
  _onClickLeft(event: any): boolean | void
  /** @inheritdoc */
  _onDragLeftStart(event: any): boolean | void
  /** @inheritdoc */
  _onDragLeftMove(event: any): void
  /** @inheritdoc */
  _onDragLeftDrop(event: any): false | void
  /** @inheritdoc */
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
   * Handle the beginning of a drag event on a resize handle.
   * @param {PIXI.FederatedEvent} event   The mousedown event
   * @protected
   */
  protected _onHandleDragStart(event: PIXI.FederatedEvent): void
  /**
   * Handle mousemove while dragging a tile scale handler
   * @param {PIXI.FederatedEvent} event   The mousemove event
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
   * @param {PIXI.FederatedEvent} event   The mouseup event
   * @protected
   */
  protected _onHandleDragCancel(event: PIXI.FederatedEvent): void
  /**
   * @deprecated since v12
   * @ignore
   */
  get isRoof(): any
  #private
}
import PlaceableObject from "./placeable-object.mjs"
