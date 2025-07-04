import * as audio from "foundry/audio/_module.js"
import * as placeables from "foundry/canvas/placeables/_module.js"
import ControlIcon from "../containers/ControlIcon.js"
import {
  DatabaseCreateCallbackOptions,
  DatabaseDeleteCallbackOptions,
} from "foundry/documents/abstract/ClientDocumentMixin.js"
import Sound from "foundry/audio/Sound.js"

export default class AmbientSound<
  TDocument extends AmbientSoundDocument<Scene | null> = AmbientSoundDocument<Scene | null>,
> extends placeables.PlaceableObject<TDocument> {
  /** The Sound which manages playback for this AmbientSound effect */
  sound: audio.Sound | null

  /** A SoundSource object which manages the area of effect for this ambient sound */
  // @ts-expect-error Should fix.
  source: PointSoundSource<this>

  static override embeddedName: "AmbientSound"

  /** Create a Sound used to play this AmbientSound object */
  protected _createSound(): Sound | null

  /* -------------------------------------------- */
  /* Properties                                   */
  /* -------------------------------------------- */

  /** Is this ambient sound is currently audible based on its hidden state and the darkness level of the Scene? */
  get isAudible(): boolean

  override get bounds(): PIXI.Rectangle

  /** A convenience accessor for the sound radius in pixels */
  get radius(): number

  /* -------------------------------------------- */
  /* Methods                                      */
  /* -------------------------------------------- */

  /**
   * Toggle playback of the sound depending on whether or not it is audible
   * @param isAudible    Is the sound audible?
   * @param volume       The target playback volume
   * @param [options={}] Additional options which affect sound synchronization
   * @param [options.fade=250] A duration in milliseconds to fade volume transition
   */
  sync(isAudible: boolean, volume: number, options?: { fade?: number }): void

  /* -------------------------------------------- */
  /* Rendering                                    */
  /* -------------------------------------------- */

  override clear(): this

  protected override _draw(): Promise<void>

  //protected override _destroy(options: object): void

  protected _drawControlIcon(): ControlIcon

  /** Refresh the display of the ControlIcon for this AmbientSound source */
  refreshControl(): void

  /**
   * Compute the field-of-vision for an object, determining its effective line-of-sight and field-of-vision polygons
   * @param [options={}]   Options which modify how the audio source is updated
   * @param [options.defer]    Defer refreshing the SoundsLayer to manually call that refresh later.
   * @param [options.deleted]  Indicate that this SoundSource has been deleted.
   */
  updateSource(options?: { defer?: boolean; deleted?: boolean }): void

  /* -------------------------------------------- */
  /*  Document Event Handlers                     */
  /* -------------------------------------------- */

  protected override _onCreate(data: TDocument["_source"], options: DatabaseCreateCallbackOptions, userId: string): void

  //protected override _onUpdate(
  //  changed: DeepPartial<TDocument["_source"]>,
  //  options: DatabaseUpdateCallbackOptions,
  //  userId: string,
  //): void

  protected override _onDelete(options: DatabaseDeleteCallbackOptions, userId: string): void

  /* -------------------------------------------- */
  /*  Interaction Event Handlers                  */
  /* -------------------------------------------- */

  protected override _canHUD(user: User, event: PIXI.FederatedEvent): boolean

  protected override _canConfigure(user: User, event: PIXI.FederatedEvent): boolean

  protected override _onClickRight(event: PIXI.FederatedEvent): void

  protected override _onDragLeftMove(event: PIXI.FederatedEvent): void
}
