import {
  DatabaseCreateOperation,
  DatabaseUpdateOperation,
  EmbeddedDocumentUpdateData,
} from "foundry/abstract/_types.js"
import Document from "foundry/abstract/Document.js"
import SceneConfig from "foundry/applications/sheets/SceneConfig.js"

import * as documents from "./_module.js"
import * as types from "./_types.js"
import * as abstract from "./abstract/_module.js"
import { CompendiumCollection } from "./collections/_module.js"

type BaseSceneStatic = typeof documents.BaseScene
interface ClientBaseSceneStatic extends BaseSceneStatic, abstract.ClientDocumentStatic {}

declare const ClientBaseScene: {
  new (...args: any): documents.BaseScene & abstract.ClientDocument<null>
} & ClientBaseSceneStatic

type ClientBaseScene = InstanceType<typeof ClientBaseScene>

export default class Scene extends ClientBaseScene {
  /**
   * Track the viewed position of each scene (while in memory only, not persisted)
   * When switching back to a previously viewed scene, we can automatically pan to the previous position.
   */
  protected _viewPosition: Record<string, never> | { x: number; y: number; scale: number }

  /** Track whether the scene is the active view */
  protected _view: boolean

  /** Determine the canvas dimensions this Scene would occupy, if rendered */
  dimensions: types.SceneDimensions

  /** Provide a thumbnail image path used to represent this document. */
  get thumbnail(): string

  /** A convenience accessor for whether the Scene is currently viewed */
  get isView(): boolean

  /* -------------------------------------------- */
  /*  Scene Methods                               */
  /* -------------------------------------------- */

  /**
   * Set this scene as currently active
   * @return A Promise which resolves to the current scene once it has been successfully activated
   */
  activate(): Promise<this>

  override clone(data?: Record<string, unknown>, context?: foundry.abstract.types.DocumentCloneContext): this

  /** Set this scene as the current view */
  view(): Promise<this>

  override prepareBaseData(): void

  /**
   * Get the Canvas dimensions which would be used to display this Scene.
   * Apply padding to enlarge the playable space and round to the nearest 2x grid size to ensure symmetry.
   * The rounding accomplishes that the padding buffer around the map always contains whole grid spaces.
   */
  getDimensions(): types.SceneDimensions

  protected override _preCreate(
    data: this["_source"],
    options: abstract.DatabaseCreateCallbackOptions,
    user: documents.BaseUser,
  ): Promise<boolean | void>

  protected override _onCreate(
    data: this["_source"],
    options: abstract.DatabaseCreateCallbackOptions,
    userId: string,
  ): void

  protected override _preUpdate(
    data: Record<string, unknown>,
    options: SceneUpdateOptions,
    user: documents.BaseUser,
  ): Promise<boolean | void>

  override _onUpdate(changed: DeepPartial<this["_source"]>, options: SceneUpdateOptions, userId: string): void

  protected override _preDelete(
    options: abstract.DatabaseDeleteCallbackOptions,
    user: documents.BaseUser,
  ): Promise<boolean | void>

  protected override _onDelete(options: abstract.DatabaseDeleteCallbackOptions, userId: string): void

  /**
   * Handle Scene activation workflow if the active state is changed to true
   * @param active Is the scene now active?
   */
  protected _onActivate(active: boolean): Promise<this>

  protected override _preCreateDescendantDocuments<P extends Document>(
    parent: P,
    collection: string,
    data: object[],
    options: DatabaseCreateOperation<P>,
    userId: string,
  ): void

  protected override _preUpdateDescendantDocuments<P extends Document>(
    parent: P,
    collection: string,
    changes: Record<string, unknown>[],
    options: DatabaseUpdateOperation<P>,
    userId: string,
  ): void

  protected _onUpdateDescendantDocuments<P extends Document>(
    parent: P,
    collection: string,
    documents: Document<P>[],
    changes: Record<string, unknown>[],
    options: DatabaseUpdateOperation<P>,
    userId: string,
  ): void

  /* -------------------------------------------- */
  /*  Importing and Exporting                     */
  /* -------------------------------------------- */

  override toCompendium(pack: CompendiumCollection): this["_source"]

  /**
         * Create a 300px by 100px thumbnail image for this scene background
         * @param [string|null] A background image to use for thumbnail creation, otherwise the current scene background
                                is used.
         * @param [width]       The desired thumbnail width. Default is 300px
         * @param [height]      The desired thumbnail height. Default is 100px;
         * @return The created thumbnail data.
         */
  createThumbnail({
    img,
    width,
    height,
  }?: {
    img?: foundry.abstract.ImageFilePath | null
    width?: number
    height?: number
  }): Promise<Record<string, unknown>>
}

export default interface Scene extends ClientBaseScene {
  //readonly drawings: EmbeddedCollection<DrawingDocument<this>>
  //readonly lights: EmbeddedCollection<documents.AmbientLightDocument<this>>
  //readonly notes: EmbeddedCollection<NoteDocument<this>>
  //readonly regions: EmbeddedCollection<RegionDocument<this>>
  //readonly sounds: EmbeddedCollection<AmbientSoundDocument<this>>
  //readonly templates: EmbeddedCollection<MeasuredTemplateDocument<this>>
  //readonly tokens: EmbeddedCollection<TokenDocument<this>>
  //readonly tiles: EmbeddedCollection<TileDocument<this>>
  //readonly walls: EmbeddedCollection<documents.WallDocument<this>>

  get sheet(): SceneConfig<this> | null

  getEmbeddedCollection(embeddedName: "Token"): this["tokens"]

  update(data: Record<string, unknown>, options?: Partial<SceneUpdateOptions>): Promise<this>

  //createEmbeddedDocuments(
  //  embeddedName: "Note",
  //  data: PreCreate<documents.NoteSource>[],
  //  operation?: DatabaseCreateOperation<this>,
  //): Promise<CollectionValue<this["notes"]>[]>
  //createEmbeddedDocuments(
  //  embeddedName: "Token",
  //  data: PreCreate<TokenSource>[],
  //  operation?: DatabaseCreateOperation<this>,
  //): Promise<CollectionValue<this["tokens"]>[]>
  //createEmbeddedDocuments(
  //  embeddedName: "Region",
  //  data: PreCreate<documents.RegionSource>[],
  //  context?: DatabaseCreateOperation<this>,
  //): Promise<CollectionValue<this["regions"]>[]>
  //createEmbeddedDocuments(
  //  embeddedName: SceneEmbeddedName,
  //  data: Record<string, unknown>[],
  //  operation?: DatabaseCreateOperation<this>,
  //): Promise<
  //  | CollectionValue<this["drawings"]>[]
  //  | CollectionValue<this["lights"]>[]
  //  | CollectionValue<this["notes"]>[]
  //  | CollectionValue<this["regions"]>[]
  //  | CollectionValue<this["sounds"]>[]
  //  | CollectionValue<this["tiles"]>[]
  //  | CollectionValue<this["tokens"]>[]
  //  | CollectionValue<this["tokens"]>[]
  //  | CollectionValue<this["walls"]>[]
  //>

  updateEmbeddedDocuments(
    embeddedName: "AmbientLight",
    updateData: EmbeddedDocumentUpdateData[],
    operation?: Partial<DatabaseUpdateOperation<this>>,
  ): Promise<CollectionValue<this["lights"]>[]>
  updateEmbeddedDocuments(
    embeddedName: "AmbientSound",
    updateData: EmbeddedDocumentUpdateData[],
    operation?: Partial<DatabaseUpdateOperation<this>>,
  ): Promise<CollectionValue<this["sounds"]>[]>
  updateEmbeddedDocuments(
    embeddedName: "Drawing",
    updateData: EmbeddedDocumentUpdateData[],
    operation?: Partial<DatabaseUpdateOperation<this>>,
  ): Promise<CollectionValue<this["drawings"]>[]>
  updateEmbeddedDocuments(
    embeddedName: "MeasuredTemplate",
    updateData: EmbeddedDocumentUpdateData[],
    operation?: Partial<DatabaseUpdateOperation<this>>,
  ): Promise<CollectionValue<this["tokens"]>[]>
  updateEmbeddedDocuments(
    embeddedName: "Note",
    updateData: EmbeddedDocumentUpdateData[],
    operation?: Partial<DatabaseUpdateOperation<this>>,
  ): Promise<CollectionValue<this["notes"]>[]>
  updateEmbeddedDocuments(
    embeddedName: "Region",
    updateData: EmbeddedDocumentUpdateData[],
    operation?: Partial<DatabaseCreateOperation<this>>,
  ): Promise<CollectionValue<this["regions"]>[]>
  updateEmbeddedDocuments(
    embeddedName: "Tile",
    updateData: EmbeddedDocumentUpdateData[],
    operation?: Partial<DatabaseUpdateOperation<this>>,
  ): Promise<CollectionValue<this["tiles"]>[]>
  updateEmbeddedDocuments(
    embeddedName: "Token",
    updateData: EmbeddedDocumentUpdateData[],
    operation?: Partial<EmbeddedTokenUpdateOperation<this>>,
  ): Promise<CollectionValue<this["tokens"]>[]>
  updateEmbeddedDocuments(
    embeddedName: "Wall",
    updateData: EmbeddedDocumentUpdateData[],
    operation?: Partial<DatabaseUpdateOperation<this>>,
  ): Promise<CollectionValue<this["walls"]>[]>
  updateEmbeddedDocuments(
    embeddedName: SceneEmbeddedName,
    updateData: EmbeddedDocumentUpdateData[],
    operation?: Partial<DatabaseUpdateOperation<this>>,
  ): Promise<
    | CollectionValue<this["drawings"]>[]
    | CollectionValue<this["lights"]>[]
    | CollectionValue<this["notes"]>[]
    | CollectionValue<this["regions"]>[]
    | CollectionValue<this["sounds"]>[]
    | CollectionValue<this["tiles"]>[]
    | CollectionValue<this["tokens"]>[]
    | CollectionValue<this["tokens"]>[]
    | CollectionValue<this["walls"]>[]
  >
}

export interface SceneUpdateOptions extends abstract.DatabaseUpdateCallbackOptions {
  animateDarkness?: number
}

export interface EmbeddedTokenUpdateOperation<TParent extends Scene> extends DatabaseUpdateOperation<TParent> {
  /** Is the operation undoing a previous operation, only used by embedded Documents within a Scene */
  isUndo?: boolean
  animation?: foundry.types.TokenAnimationOptions
}

export type SceneTokenOperation<TParent extends Scene> = SceneEmbeddedOperation<TParent> & {
  animation?: foundry.types.TokenAnimationOptions
}

export type SceneEmbeddedName =
  | "AmbientLight"
  | "AmbientSound"
  | "Drawing"
  | "MeasuredTemplate"
  | "Note"
  | "Region"
  | "Tile"
  | "Token"
  | "Wall"
