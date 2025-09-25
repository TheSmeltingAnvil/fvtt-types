/**
 * An AmbientSound is an implementation of PlaceableObject which represents a dynamic audio source within the Scene.
 * @category Canvas
 * @see {@link foundry.documents.AmbientSoundDocument}
 * @see {@link foundry.canvas.layers.SoundsLayer}
 */
export default class AmbientSound extends PlaceableObject {
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
   * The Sound which manages playback for this AmbientSound effect
   * @type {Sound|null}
   */
  sound: Sound | null
  /**
   * A SoundSource object which manages the area of effect for this ambient sound
   * @type {PointSoundSource}
   */
  source: PointSoundSource
  /**
   * The area that is affected by this ambient sound.
   * @type {PIXI.Graphics}
   */
  field: PIXI.Graphics
  /**
   * Create a Sound used to play this AmbientSound object
   * @returns {Sound|null}
   * @protected
   */
  protected _createSound(): Sound | null
  /**
   * Update the set of effects which are applied to the managed Sound.
   * @param {object} [options]
   * @param {boolean} [options.muffled]     Is the sound currently muffled?
   */
  applyEffects({ muffled }?: { muffled?: boolean | undefined }): void
  /**
   * Is this ambient sound is currently audible based on its hidden state and the darkness level of the Scene?
   * @type {boolean}
   */
  get isAudible(): boolean
  /**
   * A convenience accessor for the sound radius in pixels
   * @type {number}
   */
  get radius(): number
  /**
   * Toggle playback of the sound depending on whether it is audible.
   * @param {boolean} isAudible     Is the sound audible?
   * @param {number} [volume]       The target playback volume
   * @param {object} [options={}]   Additional options which affect sound synchronization
   * @param {number} [options.fade=250]       A duration in milliseconds to fade volume transition
   * @param {boolean} [options.muffled=false] Is the sound current muffled?
   * @returns {Promise<void>}       A promise which resolves once sound playback is synchronized
   */
  sync(
    isAudible: boolean,
    volume?: number,
    {
      fade,
      muffled,
    }?: {
      fade?: number | undefined
      muffled?: boolean | undefined
    },
  ): Promise<void>
  /** @inheritdoc */
  clear(): this
  /** @override */
  override _draw(options: any): Promise<void>
  /** @override */
  override _destroy(options: any): void
  /** @override */
  override _applyRenderFlags(flags: any): void
  /**
   * Refresh the shape of the sound field-of-effect. This is refreshed when the SoundSource fov polygon changes.
   * @protected
   */
  protected _refreshField(): void
  /**
   * Refresh the position of the AmbientSound. Called with the coordinates change.
   * @protected
   */
  protected _refreshPosition(): void
  /**
   * Refresh the state of the light. Called when the disabled state or darkness conditions change.
   * @protected
   */
  protected _refreshState(): void
  alpha: number | undefined
  zIndex: number | undefined
  /**
   * Refresh the display of the ControlIcon for this AmbientSound source.
   */
  refreshControl(): void
  /**
   * Refresh the elevation of the control icon.
   * @protected
   */
  protected _refreshElevation(): void
  /**
   * Compute the field-of-vision for an object, determining its effective line-of-sight and field-of-vision polygons
   * @param {object} [options={}]   Options which modify how the audio source is updated
   * @param {boolean} [options.deleted]  Indicate that this SoundSource has been deleted.
   */
  initializeSoundSource({ deleted }?: { deleted?: boolean | undefined }): void
  /**
   * Get the sound source data.
   * @returns {BaseEffectSourceData}
   * @protected
   */
  protected _getSoundSourceData(): BaseEffectSourceData
  /** @inheritDoc */
  _onCreate(data: any, options: any, userId: any): void
  /** @inheritDoc */
  _onUpdate(changed: any, options: any, userId: any): void
  /** @inheritDoc */
  _onDelete(options: any, userId: any): void
  /** @inheritdoc */
  _canHUD(user: any, event: any): any
  /** @inheritdoc */
  _canConfigure(user: any, event: any): boolean
  /** @override */
  override _onClickRight(event: any): void
  /** @override */
  override _onDragLeftMove(event: any): void
  /**
   * @deprecated since v12
   * @ignore
   */
  updateSource({ defer, deleted }?: { defer?: boolean | undefined; deleted?: boolean | undefined }): void
  #private
}
import PlaceableObject from "./placeable-object.mjs"
