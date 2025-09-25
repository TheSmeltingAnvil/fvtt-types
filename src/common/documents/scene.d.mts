/**
 * @import {SceneData} from "./_types.mjs";
 * @import BaseGrid from "../grid/base.mjs";
 */
/**
 * The Scene Document.
 * Defines the DataSchema and common behaviors for a Scene which are shared between both client and server.
 * @extends {Document<SceneData>}
 * @mixes SceneData
 * @category Documents
 */
export default class BaseScene extends Document<SceneData, foundry.abstract.types.DocumentConstructionContext> {
  /** @inheritdoc */
  static metadata: object
  /** @inheritDoc */
  static defineSchema(): {
    _id: fields.DocumentIdField
    name: fields.StringField
    active: fields.BooleanField
    navigation: fields.BooleanField
    navOrder: fields.NumberField
    navName: fields.StringField
    background: TextureData
    foreground: fields.FilePathField
    foregroundElevation: fields.NumberField
    thumb: fields.FilePathField
    width: fields.NumberField
    height: fields.NumberField
    padding: fields.NumberField
    initial: fields.SchemaField
    backgroundColor: fields.ColorField
    grid: fields.SchemaField
    tokenVision: fields.BooleanField
    fog: fields.SchemaField
    environment: fields.SchemaField
    drawings: fields.EmbeddedCollectionField
    tokens: fields.EmbeddedCollectionField
    lights: fields.EmbeddedCollectionField
    notes: fields.EmbeddedCollectionField
    sounds: fields.EmbeddedCollectionField
    regions: fields.EmbeddedCollectionField
    templates: fields.EmbeddedCollectionField
    tiles: fields.EmbeddedCollectionField
    walls: fields.EmbeddedCollectionField
    playlist: fields.ForeignDocumentField
    playlistSound: fields.ForeignDocumentField
    journal: fields.ForeignDocumentField
    journalEntryPage: fields.ForeignDocumentField
    weather: fields.StringField
    folder: fields.ForeignDocumentField
    sort: fields.IntegerSortField
    ownership: fields.DocumentOwnershipField
    flags: fields.DocumentFlagsField
    _stats: fields.DocumentStatsField
  }
  /**
   * The default grid defined by the system.
   * @type {BaseGrid}
   */
  static get defaultGrid(): BaseGrid
  static #defaultGrid: any
  /** @inheritdoc */
  static migrateData(source: any): object
  /** @inheritdoc */
  static shimData(source: any, options: any): object
  constructor(
    data?: Partial<SceneData> | undefined,
    { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined,
  )
  /** @inheritDoc */
  _initialize(options: any): void
  /** @inheritDoc */
  updateSource(changes?: object, options?: object): object
}
import Document from "../abstract/document.mjs"
import { TextureData } from "../data/data.mjs"
import * as fields from "../data/fields.mjs"
import type BaseGrid from "../grid/base.mjs"
import type { SceneData } from "./_types.mjs"
