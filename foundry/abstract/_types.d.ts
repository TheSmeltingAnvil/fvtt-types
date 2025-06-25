import { DataField } from "foundry/data/fields/_module.js"
import { DataModel } from "./_module.js"
import BaseUser from "foundry/documents/BaseUser.js"
import { SourceFromSchema } from "foundry/data/fields/util.js"
import { TabsConfiguration } from "foundry/applications/ux/Tabs.js"
import { SearchFilterConfiguration } from "foundry/applications/ux/SearchFilter.js"

export interface DatabaseCreateOperation<TParent extends foundry.abstract.Document | null> {
  action: "create"
  /** Whether the database operation is broadcast to other connected clients */
  broadcast: boolean
  /** An array of data objects from which to create Documents */
  data: object[]
  /** Retain the _id values of provided data instead of generating new ids */
  keepId?: boolean
  /** Retain the _id values of embedded document data instead of generating new ids for each embedded document */
  keepEmbeddedIds?: boolean
  /** The timestamp when the operation was performed */
  modifiedTime?: number
  /** Block the dispatch of hooks related to this operation */
  noHook?: boolean
  /** Re-render Applications whose display depends on the created Documents */
  render?: boolean
  /** Render the sheet Application for any created Documents */
  renderSheet?: boolean
  /** A parent Document within which Documents are embedded */
  parent?: TParent
  /** A compendium collection ID which contains the Documents */
  pack?: string | null
  /** A parent Document UUID provided when the parent instance is unavailable */
  parentUuid?: DocumentUUID
}

export interface DatabaseDeleteOperation<TParent extends foundry.abstract.Document | null> {
  action: "delete"
  /** Whether the database operation is broadcast to other connected clients */
  broadcast: boolean
  /** An array of Document ids which should be deleted */
  ids: string[]
  /** Delete all documents in the Collection, regardless of _id */
  deleteAll?: boolean
  /** The timestamp when the operation was performed */
  modifiedTime?: number
  /** Block the dispatch of hooks related to this operation */
  noHook?: boolean
  /** Re-render Applications whose display depends on the created Documents */
  render?: boolean
  /** A parent Document within which Documents are embedded */
  parent?: TParent
  /** A compendium collection ID which contains the Documents */
  pack?: string | null
  /** A parent Document UUID provided when the parent instance is unavailable */
  parentUuid?: DocumentUUID
}

export interface DatabaseGetOperation<TParent extends foundry.abstract.Document | null> {
  /** A query object which identifies the set of Documents retrieved */
  query: Record<string, unknown>
  /** Get requests are never broadcast */
  broadcast?: false
  /** Return indices only instead of full Document records */
  index?: boolean
  /** An array of field identifiers which should be indexed */
  indexFields?: string
  /** A compendium collection ID which contains the Documents */
  pack?: string | null
  /** A parent Document within which Documents are embedded */
  parent?: TParent
  /** A parent Document UUID provided when the parent instance is unavailable */
  parentUuid?: DocumentUUID
}

export interface DatabaseUpdateOperation<TParent extends foundry.abstract.Document | null> {
  action: "update"
  /** Whether the database operation is broadcast to other connected clients */
  broadcast: boolean
  /**
   * An array of data objects used to update existing Documents.
   * Each update object must contain the _id of the target Document
   */
  updates: object[]
  /**
   * Difference each update object against current Document data and only use differential data for the update
   * operation
   */
  diff?: boolean
  /** The timestamp when the operation was performed */
  modifiedTime?: number
  /** Merge objects recursively. If false, inner objects will be replaced explicitly. Use with caution! */
  recursive?: boolean
  /** Re-render Applications whose display depends on the created Documents */
  render?: boolean
  /** Block the dispatch of hooks related to this operation */
  noHook?: boolean
  /** A parent Document within which Documents are embedded */
  parent?: TParent
  /** A compendium collection ID which contains the Documents */
  pack?: string | null
  /** A parent Document UUID provided when the parent instance is unavailable */
  parentUuid?: DocumentUUID
}

export interface DataModelConstructionOptions {
  /** A parent DataModel instance to which this DataModel belongs. */
  parent?: null | DataModel
}

export interface DataModelFromSourceOptions {
  /**
   * Models created from trusted source data are validated non-strictly.
   * @default false
   */
  strict?: boolean
}

export interface DataModelUpdateOptions {
  /** Do not finally apply the change, but instead simulate the update workflow. */
  dryRun?: boolean
  /** Allow automatic fallback to a valid initial value if the value provided for a field in the model is invalid. */
  fallback?: boolean
  /** Apply changes to inner objects recursively rather than replacing the top-level object. */
  recursive?: boolean
  /** An advanced option used specifically and internally by the ActorDelta model. */
  restoreDelta?: boolean
}

export interface DataModelValidationOptions {
  /** A specific set of proposed changes to validate, rather than the full source data of the model. */
  changes?: object
  /**
   * If changes are provided, attempt to clean the changes before validating them? This option mutates the provided
   * changes.
   */
  clean?: boolean
  /**
   * If true, invalid embedded documents will emit a warning and be placed in the invalidDocuments collection rather
   * than causing the parent to be considered invalid. This option mutates the provided changes.
   */
  dropInvalidEmbedded?: boolean
  /** Allow replacement of invalid values with valid defaults? This option mutates the provided changes. */
  fallback?: boolean
  /** Validate each individual field */
  fields?: boolean
  /**
   * Perform joint validation on the full data model?
   * Joint validation will be performed by default if no changes are passed.
   * Joint validation will be disabled by default if changes are passed.
   * Joint validation can be performed on a complete set of changes (for example
   * testing a complete data model) by explicitly passing true.
   */
  joint?: boolean
  /** Throw an error if validation fails. */
  strict?: boolean
}

//export interface DocumentClassMetadata {
//  collection: string
//  compendiumIndexFields: string[]
//  coreTypes: string[]
//  embedded: Record<string, string>
//  hasTypeData: boolean
//  indexed: boolean
//  label: string
//  name: string
//  permissions: Record<
//    "update" | "delete" | "create" | "view",
//    | "INHERIT"
//    | "NONE"
//    | "LIMITED"
//    | "OBSERVER"
//    | "OWNER"
//    | "PLAYER"
//    | "TRUSTED"
//    | "ASSISTANT"
//    | "GAMEMASTER"
//    | DocumentPermissionTest
//  >
//  preserveOnImport: string[]
//  schemaVersion?: string
//}

export interface DocumentCloneOptions {
  /**
   * Track the clone source.
   * @default false
   */
  addSource?: boolean
  /**
   * Keep the same ID of the original document.
   * @default false
   */
  keepId?: boolean
  /**
   * Save the clone to the World database?
   * @default false
   */
  save?: boolean
}

export interface DocumentConstructionContext<TParent extends foundry.abstract.Document | null>
  extends DataModelConstructionContext<TParent> {
  /** The compendium collection ID which contains this Document, if any */
  pack?: string | null
}

export interface DocumentSocketRequest {
  /** The action of the request */
  action: DatabaseAction
  /** Should the response be broadcast to other connected clients? */
  broadcast: boolean
  /** Operation parameters for the request */
  operation: DatabaseOperation<foundry.abstract.Document | null>
  /** The type of Document being transacted */
  type: string
  /** The id of the requesting User */
  userId: string
}

export type DatabaseAction = "get" | "create" | "update" | "delete"

export type DatabaseOperation<TParent extends foundry.abstract.Document | null> =
  | DatabaseGetOperation<TParent>
  | DatabaseCreateOperation<TParent>
  | DatabaseUpdateOperation<TParent>
  | DatabaseDeleteOperation<TParent>

//export type DataModelConstructionContext<TParent extends DataModel | null> = DataModelConstructionOptions &
//  Pick<DataModelValidationOptions, "strict" | "fallback" | "dropInvalidEmbedded">

export interface DataModelConstructionContext<TParent extends DataModel | null>
  extends Pick<DataModelValidationOptions, "strict" | "fallback" | "dropInvalidEmbedded"> {
  /** A parent DataModel instance to which this DataModel belongs */
  parent?: TParent
  /** Allow partial source data, ignoring absent fields? */
  partial?: boolean
}

//export type DataSchema = Record<string, DataField>
export type DataSchema = { [K in string]: DataField<JSONValue, unknown> }

export type DocumentPermissionTest = (user: BaseUser, document: foundry.abstract.Document, data?: object) => boolean

export type PreCreate<T extends SourceFromSchema<DataSchema>> = T extends { type: string }
  ? Omit<DeepPartial<T>, "type"> & { _id?: Maybe<string>; type: T["type"] }
  : DeepPartial<T>

export type EmbeddedDocumentUpdateData = {
  _id: string
  [key: string]: unknown
}

interface ApplicationV1Options {
  /** A named "base application" which generates an additional hook */
  baseApplication: string | null
  /** The default pixel width for the rendered HTML */
  width: number | string | null
  /** The default pixel height for the rendered HTML */
  height: number | string | null
  /** The default offset-top position for the rendered HTML */
  top: number | null
  /** The default offset-left position for the rendered HTML */
  left: number | null
  /** A transformation scale for the rendered HTML */
  scale?: number | null
  /** Whether to display the application as a pop-out container */
  popOut: boolean
  /** Whether the rendered application can be minimized (popOut only) */
  minimizable: boolean
  /** Whether the rendered application can be drag-resized (popOut only) */
  resizable: boolean | null
  /** The default CSS id to assign to the rendered HTML */
  id: string
  /** An array of CSS string classes to apply to the rendered HTML */
  classes: string[]
  /** Track Tab navigation handlers which are active for this Application */
  tabs: TabsConfiguration[]
  dragDrop: {
    callbacks?: {
      dragover?: Function
      dragstart?: Function
      drop?: Function
    }
    dragSelector?: Maybe<string>
    dropSelector?: Maybe<string>
  }[]
  /** A default window title string (popOut only) */
  title: string
  /** The default HTML template path to render for this Application */
  template: string | null
  /**
   * A list of unique CSS selectors which target containers that should
   * have their vertical scroll positions preserved during a re-render.
   */
  scrollY: string[]
  /** filters An array of {@link SearchFilter} configuration objects. */
  filters: SearchFilterConfiguration[]
}

export type UserAction = "create" | "update" | "delete"

export interface AppV1RenderOptions extends Partial<ApplicationV1Options> {
  /** Apply focus to the application, maximizing it and bringing it to the top of the vertical stack. */
  focus?: boolean
  /** A context-providing string which suggests what event triggered the render */
  renderContext?: string
  /** The data change which motivated the render request */
  renderData?: Record<string, unknown>[]
  // Undocumented
  action?: UserAction
  // Undocumented: applicable only to `FormApplication`s
  editable?: boolean
}

export interface DocumentRenderOptions extends AppV1RenderOptions {
  data?: {
    permission?: boolean
  }
}

export interface DocumentCloneContext extends Omit<DocumentConstructionContext<null>, "parent"> {
  save?: boolean
  keepId?: boolean
}

export interface DocumentSourceUpdateContext extends Omit<DatabaseUpdateOperation<null>, "parent"> {
  dryRun?: boolean
  fallback?: boolean
}
