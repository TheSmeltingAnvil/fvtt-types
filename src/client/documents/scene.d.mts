/**
 * @import {CanvasViewPosition, User} from "@client/_types.mjs";
 * @import {SceneDimensions} from "./_types.mjs";
 * @import TokenDocument from "./token.mjs";
 */
/**
 * The client-side Scene document which extends the common BaseScene model.
 * @extends BaseScene
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.collections.Scenes}: The world-level collection of Scene documents
 * @see {@link foundry.applications.sheets.SceneConfig}: The Scene configuration application
 */
export default class Scene extends BaseScene {
  /**
   * Create the grid instance from the grid config of this scene if it doesn't exist yet.
   * @param {Scene} scene
   * @returns {BaseGrid}
   */
  static #getGrid(scene: Scene): BaseGrid
  /** @inheritDoc */
  static _preCreateOperation(documents: any, operation: any, user: any): Promise<void>
  /** @override */
  static override _onUpdateOperation(documents: any, operation: any, user: any): Promise<void>
  /**
   * Track the viewed position of each scene (while in memory only, not persisted)
   * When switching back to a previously viewed scene, we can automatically pan to the previous position.
   * @type {CanvasViewPosition}
   * @internal
   */
  _viewPosition: CanvasViewPosition
  /**
   * Track whether the scene is the active view
   * @type {boolean}
   * @internal
   */
  _view: boolean
  /**
   * The grid instance.
   * @type {BaseGrid}
   */
  grid: BaseGrid
  /**
   * Determine the canvas dimensions this Scene would occupy, if rendered
   * @type {SceneDimensions}
   */
  dimensions: SceneDimensions
  /**
   * Provide a thumbnail image path used to represent this document.
   * @type {string|null}
   */
  get thumbnail(): string | null
  /**
   * A convenience accessor for whether the Scene is currently viewed
   * @type {boolean}
   */
  get isView(): boolean
  /**
   * Pull the specified users to this Scene.
   * @param {(User|string)[]} [users=[]]  An array of User documents or IDs.
   */
  pullUsers(users?: (User | string)[]): void
  /**
   * Set this scene as currently active
   * @returns {Promise<Scene>}  A Promise which resolves to the current scene once it has been successfully activated
   */
  activate(): Promise<Scene>
  /**
   * Set this scene as the current view
   * @returns {Promise<Scene>}
   */
  view(): Promise<Scene>
  /**
   * Unview the current Scene, clearing the game canvas.
   */
  unview(): Promise<this | undefined>
  /** @override */
  override clone(
    createData?: object,
    options?: object,
  ):
    | foundry.abstract.Document<object, foundry.abstract.types.DocumentConstructionContext>
    | Promise<foundry.abstract.Document<object, foundry.abstract.types.DocumentConstructionContext>>
  /** @inheritDoc */
  prepareBaseData(): void
  playlistSound: any
  foregroundElevation: any
  /**
   * Get the Canvas dimensions which would be used to display this Scene.
   * Apply padding to enlarge the playable space and round to the nearest 2x grid size to ensure symmetry.
   * The rounding accomplishes that the padding buffer around the map always contains whole grid spaces.
   * @returns {SceneDimensions}
   */
  getDimensions(): SceneDimensions
  /** @inheritDoc */
  _onClickDocumentLink(event: any): any
  /**
   * Clear the movement history of all Tokens within this Scene.
   * @returns {Promise<void>}
   */
  clearMovementHistories(): Promise<void>
  /**
   * For all Tokens in this Scene identify the Regions that each Token is contained in and update the regions of each
   * Token accordingly.
   *
   * This function doesn't need to be called by the systems/modules unless
   * {@link foundry.documents.TokenDocument#testInsideRegion} is overridden and non-Token properties other than
   * `Scene#grid.type` and `Scene#grid.size` change that are used in the override of
   * {@link foundry.documents.TokenDocument#testInsideRegion}.
   * @overload
   * @returns {Promise<TokenDocument[]>}        The array of Tokens whose regions changed
   */
  updateTokenRegions(): Promise<TokenDocument[]>
  /**
   * For the given Tokens in this Scene identify the Regions that each Token is contained in and update the regions of
   * each Token accordingly.
   *
   * This function doesn't need to be called by the systems/modules unless
   * {@link foundry.documents.TokenDocument#testInsideRegion} is overridden and non-Token properties other than
   * `Scene#grid.type` and `Scene#grid.size` change that are used in the override of
   * {@link foundry.documents.TokenDocument#testInsideRegion}.
   * @overload
   * @param {Iterable<TokenDocument>} tokens    The Tokens whoses regions should be updates
   * @returns {Promise<TokenDocument[]>}        The array of Tokens whose regions changed
   */
  updateTokenRegions(tokens: Iterable<TokenDocument>): Promise<TokenDocument[]>
  /** @inheritDoc */
  _preCreate(data: any, options: any, user: any): Promise<false | undefined>
  /** @inheritDoc */
  _onCreate(data: any, options: any, userId: any): void
  /** @inheritDoc */
  _preUpdate(
    changed: any,
    options: any,
    user: any,
  ): Promise<
    | false
    | Readonly<{
        id: number
        type: string
        timestamp: number
        message: string
        error?: Error | undefined
        permanent: boolean
        console: boolean
        active: boolean
        progress: boolean
        pct: number
        element?: HTMLLIElement | undefined
        remove?: (() => void) | undefined
        update?: ((pct: number) => void) | undefined
      }>
    | undefined
  >
  /** @inheritDoc */
  _onUpdate(changed: any, options: any, userId: any): Promise<any> | undefined
  thumb: any
  /** @inheritDoc */
  _onDelete(options: any, userId: any): void
  /**
   * Handle Scene activation workflow if the active state is changed to true.
   * @param {boolean} active    Is the scene now active?
   * @protected
   */
  protected _onActivate(active: boolean): void
  /** @inheritDoc */
  _preCreateDescendantDocuments(parent: any, collection: any, data: any, options: any, userId: any): void
  /** @inheritDoc */
  _preUpdateDescendantDocuments(parent: any, collection: any, changes: any, options: any, userId: any): void
  /** @inheritDoc */
  _preDeleteDescendantDocuments(parent: any, collection: any, ids: any, options: any, userId: any): void
  /** @inheritDoc */
  _onUpdateDescendantDocuments(
    parent: any,
    collection: any,
    documents: any,
    changes: any,
    options: any,
    userId: any,
  ): void
  /** @inheritDoc */
  toCompendium(pack: any, options?: object): any
  /**
   * Create a 300px by 100px thumbnail image for this scene background
   * @param {object} [options]              Options which modify thumbnail creation
   * @param {string|null} [options.img]     A background image to use for thumbnail creation, otherwise the current
   *                                        scene background is used.
   * @param {number} [options.width]        The desired thumbnail width. Default is 300px
   * @param {number} [options.height]       The desired thumbnail height. Default is 100px;
   * @param {string} [options.format]       Which image format should be used? image/png, image/jpeg, or image/webp
   * @param {number} [options.quality]      What compression quality should be used for jpeg or webp, between 0 and 1
   * @returns {Promise<object>}             The created thumbnail data.
   */
  createThumbnail({
    img,
    width,
    height,
    format,
    quality,
  }?: {
    img?: string | null | undefined
    width?: number | undefined
    height?: number | undefined
    format?: string | undefined
    quality?: number | undefined
  }): Promise<object>
  #private
}
import type { CanvasViewPosition } from "@client/_types.mjs"
import BaseScene from "@common/documents/scene.mjs"
import BaseGrid from "@common/grid/base.mjs"
import type { SceneDimensions } from "./_types.mjs"
import type TokenDocument from "./token.mjs"
