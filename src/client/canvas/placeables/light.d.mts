/**
 * An AmbientLight is an implementation of PlaceableObject which represents a dynamic light source within the Scene.
 * @category Canvas
 * @see {@link foundry.documents.AmbientLightDocument}
 * @see {@link foundry.canvas.layers.LightingLayer}
 */
export default class AmbientLight extends PlaceableObject {
  /** @override */
  static override RENDER_FLAGS: {
    redraw: {
      propagate: string[]
    }
    refresh: {
      propagate: string[]
      alias: boolean
    }
    refreshField: {
      propagate: string[]
    }
    refreshPosition: object
    refreshState: object
    refreshElevation: object
  }
  /**
   * The area that is affected by this light.
   * @type {PIXI.Graphics}
   */
  field: PIXI.Graphics
  /**
   * A reference to the PointSource object which defines this light or darkness area of effect.
   * This is undefined if the AmbientLight does not provide an active source of light.
   * @type {PointDarknessSource|PointLightSource}
   */
  lightSource: PointDarknessSource | PointLightSource
  /**
   * A convenience accessor to the LightData configuration object
   * @returns {LightData}
   */
  get config(): LightData
  /**
   * Test whether a specific AmbientLight source provides global illumination
   * @type {boolean}
   */
  get global(): boolean
  /**
   * The maximum radius in pixels of the light field
   * @type {number}
   */
  get radius(): number
  /**
   * Get the pixel radius of dim light emitted by this light source
   * @type {number}
   */
  get dimRadius(): number
  /**
   * Get the pixel radius of bright light emitted by this light source
   * @type {number}
   */
  get brightRadius(): number
  /**
   * Is this Ambient Light currently visible? By default, true only if the source actively emits light or darkness.
   * @type {boolean}
   */
  get isVisible(): boolean
  /**
   * Check if the point source is a LightSource instance
   * @type {boolean}
   */
  get isLightSource(): boolean
  /**
   * Check if the point source is a DarknessSource instance
   * @type {boolean}
   */
  get isDarknessSource(): boolean
  /**
   * Is the source of this Ambient Light disabled?
   * @type {boolean}
   * @protected
   */
  protected _isLightSourceDisabled(): boolean
  /**
   * Does this Ambient Light actively emit darkness light given
   * its properties and the current darkness level of the Scene?
   * @type {boolean}
   */
  get emitsDarkness(): boolean
  /**
   * Does this Ambient Light actively emit positive light given
   * its properties and the current darkness level of the Scene?
   * @type {boolean}
   */
  get emitsLight(): boolean
  /** @override */
  override _destroy(options: any): void
  /** @override */
  override _draw(options: any): Promise<void>
  /** @override */
  override _applyRenderFlags(flags: any): void
  /**
   * Refresh the shape of the light field-of-effect. This is refreshed when the AmbientLight fov polygon changes.
   * @protected
   */
  protected _refreshField(): void
  /**
   * Refresh the position of the AmbientLight. Called with the coordinates change.
   * @protected
   */
  protected _refreshPosition(): void
  /**
   * Refresh the elevation of the control icon.
   * @protected
   */
  protected _refreshElevation(): void
  /**
   * Refresh the state of the light. Called when the disabled state or darkness conditions change.
   * @protected
   */
  protected _refreshState(): void
  alpha: number | undefined
  zIndex: number | undefined
  /**
   * Refresh the display of the ControlIcon for this AmbientLight source.
   */
  refreshControl(): void
  /**
   * Update the LightSource associated with this AmbientLight object.
   * Darkness sources always generate edges. Light sources only do so if their priority is strictly greater than 0.
   * If any aspect changes (deletion, switching between darkness/light, or priority change), the source may be destroyed
   * and recreated as needed, and relevant perception flags are set.
   * @param {object}  [options={}]                Options which modify how the source is updated.
   * @param {boolean} [options.deleted=false]     Indicate that this light source has been deleted.
   */
  initializeLightSource({ deleted }?: { deleted?: boolean | undefined }): void
  /**
   * Get the light source data.
   * @returns {LightSourceData}
   * @protected
   */
  protected _getLightSourceData(): LightSourceData
  /** @inheritDoc */
  _onCreate(data: any, options: any, userId: any): void
  /** @override */
  override _onUpdate(changed: any, options: any, userId: any): void
  /** @inheritDoc */
  _onDelete(options: any, userId: any): void
  /** @inheritdoc */
  _canHUD(user: any, event: any): any
  /** @inheritdoc */
  _canConfigure(user: any, event: any): boolean
  /** @inheritDoc */
  _canDragLeftStart(user: any, event: any): boolean
  /** @inheritdoc */
  _onClickRight(event: any): void
  /** @inheritdoc */
  _onDragLeftMove(event: any): void
  /**
   * @deprecated since v12
   * @ignore
   */
  updateSource({ deleted }?: { deleted?: boolean | undefined }): void
  /**
   * @deprecated since v12
   * @ignore
   */
  get source(): any
  #private
}
import PlaceableObject from "./placeable-object.mjs"
