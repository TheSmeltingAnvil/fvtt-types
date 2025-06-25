import { data, documents } from "foundry/_module.js"
import { DatabaseOperation } from "foundry/abstract/_types.js"
import { DocumentMetadata } from "foundry/abstract/Document.js"
import EmbeddedCollection from "foundry/abstract/EmbeddedCollection.js"

/**
 * The Scene document model.
 * @param data                 Initial data from which to construct the document.
 * @property data The constructed data object for the document.
 */
export default class BaseScene extends foundry.abstract.Document<null, SceneSchema> {
  static override get metadata(): SceneMetadata

  static override defineSchema(): SceneSchema
}

export default interface BaseScene
  extends foundry.abstract.Document<null, SceneSchema>,
    foundry.data.fields.ModelPropsFromSchema<SceneSchema> {
  get documentName(): SceneMetadata["name"]

  readonly drawings: EmbeddedCollection<documents.BaseDrawing<this>>
  readonly lights: EmbeddedCollection<documents.BaseAmbientLight<this>>
  readonly notes: EmbeddedCollection<documents.BaseNote<this>>
  readonly regions: EmbeddedCollection<documents.BaseRegion<this>>
  readonly sounds: EmbeddedCollection<documents.BaseAmbientSound<this>>
  readonly templates: EmbeddedCollection<documents.BaseMeasuredTemplate<this>>
  readonly tokens: EmbeddedCollection<documents.BaseToken<this>>
  readonly tiles: EmbeddedCollection<documents.BaseTile<this>>
  readonly walls: EmbeddedCollection<documents.BaseWall<this>>
}

export interface SceneMetadata extends DocumentMetadata {
  name: "Scene"
  collection: "scenes"
  indexed: true
  compendiumIndexFields: ["_id", "name", "thumb", "sort", "folder"]
  embedded: {
    AmbientLight: "lights"
    AmbientSound: "sounds"
    Drawing: "drawings"
    MeasuredTemplate: "templates"
    Region: "regions"
    Note: "notes"
    Tile: "tiles"
    Token: "tokens"
    Wall: "walls"
  }
  label: "DOCUMENT.Scene"
  labelPlural: "DOCUMENT.Scenes"
  preserveOnImport: string[]
}

type SceneSchema = {
  /** The _id which uniquely identifies this Scene document */
  _id: foundry.data.fields.DocumentIdField
  /** The name of this scene */
  name: foundry.data.fields.StringField<string, string, true, false, false>

  // Navigation

  /** Is this scene currently active? Only one scene may be active at a given time */
  active: foundry.data.fields.BooleanField
  /** Is this scene displayed in the top navigation bar? */
  navigation: foundry.data.fields.BooleanField
  /** The sorting order of this Scene in the navigation bar relative to siblings */
  navOrder: foundry.data.fields.NumberField<number, number, true, false, true>
  /** A string which overrides Scene name for display in the navigation bar */
  navName: foundry.data.fields.HTMLField

  // Canvas Dimensions

  /** An image or video file that provides the background texture for the scene. */
  background: data.TextureData
  /** An image or video file path providing foreground media for the scene */
  foreground: foundry.data.fields.FilePathField<foundry.abstract.ImageFilePath | foundry.abstract.VideoFilePath>
  /** The elevation of the foreground layer where overhead tiles reside */
  foregroundElevation: foundry.data.fields.NumberField

  /** A thumbnail image which depicts the scene at lower resolution */
  thumb: foundry.data.fields.FilePathField<foundry.abstract.ImageFilePath>
  /** The width of the scene canvas, normally the width of the background media */
  width: foundry.data.fields.NumberField
  /** The height of the scene canvas, normally the height of the background media */
  height: foundry.data.fields.NumberField
  /**
   * The proportion of canvas padding applied around the outside of the scene dimensions to provide additional buffer
   * space
   */
  padding: foundry.data.fields.NumberField<number, number, true, false, true>
  /** The initial view coordinates for the scene */
  initial: foundry.data.fields.SchemaField<{
    x: foundry.data.fields.NumberField<number, number, false, true, false>
    y: foundry.data.fields.NumberField<number, number, false, true, false>
    scale: foundry.data.fields.NumberField<number, number, false, true, false>
  }>
  /** The color of the canvas displayed behind the scene background */
  backgroundColor: foundry.data.fields.ColorField

  // Grid Configuration

  /** Grid configuration for the scene */
  grid: foundry.data.fields.SchemaField<GridDataSchema>

  // Vision and Lighting Configuration

  /** Do Tokens require vision in order to see the Scene environment? */
  tokenVision: foundry.data.fields.BooleanField
  fog: foundry.data.fields.SchemaField<FogSchema>

  // Environment Configuration
  environment: foundry.data.fields.SchemaField<EnvironmentSchema>

  // Embedded Collections

  /** A collection of embedded Drawing objects. */
  drawings: foundry.data.fields.EmbeddedCollectionField<documents.BaseDrawing<BaseScene>>
  /** A collection of embedded Token objects. */
  tokens: foundry.data.fields.EmbeddedCollectionField<documents.BaseToken<BaseScene>>
  /** A collection of embedded AmbientLight objects. */
  lights: foundry.data.fields.EmbeddedCollectionField<documents.BaseAmbientLight<BaseScene>>
  /** A collection of embedded Note objects. */
  notes: foundry.data.fields.EmbeddedCollectionField<documents.BaseNote<BaseScene>>
  /** A collection of embedded Region objects */
  regions: foundry.data.fields.EmbeddedCollectionField<documents.BaseRegion<BaseScene>>
  /** A collection of embedded AmbientSound objects. */
  sounds: foundry.data.fields.EmbeddedCollectionField<documents.BaseAmbientSound<BaseScene>>
  /** A collection of embedded MeasuredTemplate objects. */
  templates: foundry.data.fields.EmbeddedCollectionField<documents.BaseMeasuredTemplate<BaseScene>>
  /** A collection of embedded Tile objects. */
  tiles: foundry.data.fields.EmbeddedCollectionField<documents.BaseTile<BaseScene>>
  /** A collection of embedded Wall objects. */
  walls: foundry.data.fields.EmbeddedCollectionField<documents.BaseWall<BaseScene>>

  // Linked Documents

  /** A linked Playlist document which should begin automatically playing when this Scene becomes active. */
  playlist: foundry.data.fields.ForeignDocumentField<documents.BasePlaylist>
  /**
   * A linked PlaylistSound document from the selected playlist that will begin automatically playing when this
   * Scene becomes active
   */
  playlistSound: foundry.data.fields.ForeignDocumentField<string>
  /** A JournalEntry document which provides narrative details about this Scene */
  journal: foundry.data.fields.ForeignDocumentField<documents.BaseJournalEntry>
  journalEntryPage: foundry.data.fields.ForeignDocumentField<string>
  /** A named weather effect which should be rendered in this Scene. */
  weather: foundry.data.fields.StringField

  // Permissions

  /** The _id of a Folder which contains this Actor */
  folder: foundry.data.fields.ForeignDocumentField<documents.BaseFolder>
  /** The numeric sort value which orders this Actor relative to its siblings */
  sort: foundry.data.fields.IntegerSortField
  /** An object which configures ownership of this Scene */
  ownership: foundry.data.fields.DocumentOwnershipField
  /** An object of optional key/value flags */
  flags: foundry.data.fields.DocumentFlagsField
  /** An object of creation and access information */
  _stats: foundry.data.fields.DocumentStatsField
}

type GridDataSchema = {
  /** The type of grid, a number from CONST.GRID_TYPES. */
  type: foundry.data.fields.NumberField<CONST.GridType, CONST.GridType, true, false, false>
  /** The grid size which represents the width (or height) of a single grid space. */
  size: foundry.data.fields.NumberField<number, number, true, false, true>
  /** A string representing the color used to render the grid lines. */
  color: foundry.data.fields.ColorField<true, false, true>
  /** A number between 0 and 1 for the opacity of the grid lines. */
  alpha: foundry.data.fields.AlphaField
  /** The number of distance units which are represented by a single grid space. */
  distance: foundry.data.fields.NumberField<number, number, true, false, true>
  /** A label for the units of measure which are used for grid distance. */
  units: foundry.data.fields.StringField<string, string, true, false, true>
}

type FogSchema = {
  exploration: foundry.data.fields.BooleanField
  reset: foundry.data.fields.NumberField
  overlay: foundry.data.fields.FilePathField
  colors: foundry.data.fields.SchemaField<{
    explored: foundry.data.fields.ColorField
    unexplored: foundry.data.fields.ColorField
  }>
}

type EnvironmentSchema = {
  darknessLevel: foundry.data.fields.AlphaField
  darknessLock: foundry.data.fields.BooleanField
  /** Is a global source of illumination present which provides dim light to all areas of the Scene? */
  globalLight: foundry.data.fields.SchemaField<{
    enabled: foundry.data.fields.BooleanField
    alpha: data.LightDataSchema["alpha"]
    bright: foundry.data.fields.BooleanField
    color: data.LightDataSchema["color"]
    coloration: data.LightDataSchema["coloration"]
    luminosity: data.LightDataSchema["luminosity"]
    saturation: data.LightDataSchema["saturation"]
    contrast: data.LightDataSchema["contrast"]
    shadows: data.LightDataSchema["shadows"]
    darkness: data.LightDataSchema["darkness"]
  }>
  cycle: foundry.data.fields.BooleanField
  base: foundry.data.fields.SchemaField<EnvironmentDataSchema>
  dark: foundry.data.fields.SchemaField<EnvironmentDataSchema>
}

type EnvironmentDataSchema = {
  hue: foundry.data.fields.HueField
  intensity: foundry.data.fields.AlphaField
  luminosity: foundry.data.fields.NumberField<number, number, true>
  saturation: foundry.data.fields.NumberField<number, number, true>
  shadows: foundry.data.fields.NumberField<number, number, true>
}

export type SceneSource = foundry.data.fields.SourceFromSchema<SceneSchema>

declare global {
  export type SceneEmbeddedOperation<TParent extends BaseScene> = DatabaseOperation<TParent> & {
    /** Is the operation undoing a previous operation, only used by embedded Documents within a Scene */
    isUndo?: boolean
  }

  export interface GetDimensionsParams {
    gridDistance: number
    height: number
    padding: number
    shiftX: number
    shiftY: number
    size: number
    width: number
  }

  export type EnvironmentDataSource = foundry.data.fields.SourceFromSchema<EnvironmentSchema>
}
