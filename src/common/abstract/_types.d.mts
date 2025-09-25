import type { DataField } from "@common/data/fields.mjs"
import type BaseUser from "@common/documents/user.mjs"
import { DocumentUUID } from "./../../../~/foundry/documents/_module.d"
import type { DataModel, Document } from "./_module.mjs"
export type DataSchema = Record<string, DataField>
export type _DocumentConstructionContext = {
  /**
   * The parent Document of this one, if this one is embedded
   */
  parent?: any
  /**
   * The compendium collection ID which contains this Document, if any
   */
  pack?: string | null | undefined
  /**
   * Whether to validate initial data strictly?
   */
  strict?: boolean | undefined
  /**
   * The name of the parent Document's collection that would contain this one
   */
  parentCollection?: string | null | undefined
}
export type DocumentConstructionContext = DataModelConstructionContext & _DocumentConstructionContext
export type DataModelValidationOptions = {
  /**
   * Validate each individual field
   */
  fields?: boolean | undefined
  /**
   * Perform joint validation on the full data model?
   *             Joint validation will be performed by default if no changes are passed.
   *             Joint validation will be disabled by default if changes are passed.
   *             Joint validation can be performed on a complete set of changes (for example
   *             testing a complete data model) by explicitly passing true.
   */
  joint?: boolean | undefined
  /**
   * A specific set of proposed changes to validate, rather than the full
   *            source data of the model.
   */
  changes?: object | undefined
  /**
   * If changes are provided, attempt to clean the changes before validating
   *             them? This option mutates the provided changes.
   */
  clean?: boolean | undefined
  /**
   * Throw an error if validation fails.
   */
  strict?: boolean | undefined
  /**
   * Allow replacement of invalid values with valid defaults? This option mutates
   *    the provided changes.
   */
  fallback?: boolean | undefined
  /**
   * If true, invalid embedded documents will emit a warning and be
   * placed in the invalidDocuments collection rather than causing the parent
   * to be considered invalid. This option mutates the provided changes.
   */
  dropInvalidEmbedded?: boolean | undefined
}
export type DataModelConstructionOptions = {
  /**
   * A parent DataModel instance to which this DataModel belongs
   */
  parent?: DataModel<object, DataModelConstructionContext> | null | undefined
}
export type DataModelConstructionContext = DataModelConstructionOptions &
  Pick<DataModelValidationOptions, "strict" | "fallback" | "dropInvalidEmbedded">
export type DataModelUpdateOptions = {
  /**
   * Do not finally apply the change, but instead simulate the update workflow
   */
  dryRun?: boolean | undefined
  /**
   * Allow automatic fallback to a valid initial value if the value provided for
   *    a field in the model is invalid.
   */
  fallback?: boolean | undefined
  /**
   * Apply changes to inner objects recursively rather than replacing the
   *     top-level object.
   */
  recursive?: boolean | undefined
  /**
   * An advanced option used specifically and internally by the ActorDelta model
   */
  restoreDelta?: boolean | undefined
}
export type DatabaseAction = "get" | "create" | "update" | "delete"
export type DatabaseGetOperation<TParent extends foundry.abstract.Document | null> = {
  /**
   * A query object which identifies the set of Documents retrieved
   */
  query: Record<string, any>
  /**
   * The action of this database operation
   */
  action: "get"
  /**
   * Get requests are never broadcast
   */
  broadcast?: false | undefined
  /**
   * Return indices only instead of full Document records
   */
  index?: boolean | undefined
  /**
   * An array of field identifiers which should be indexed
   */
  indexFields?: string[] | undefined
  /**
   * A compendium collection ID which contains the Documents
   */
  pack?: string | null | undefined
  /**
   * A parent Document within which Documents are embedded
   */
  parent?: TParent | undefined
  /**
   * A parent Document UUID provided when the parent instance is unavailable
   */
  parentUuid?: DocumentUUID | string | undefined
}
export type DatabaseCreateOperation<TParent extends foundry.abstract.Document | null> = {
  /**
   * Whether the database operation is broadcast to other connected clients
   */
  broadcast: boolean
  /**
   * The action of this database operation
   */
  action: "create"
  /**
   * An array of data objects from which to create Documents
   */
  data: object[]
  /**
   * Retain the _id values of provided data instead of generating new ids
   */
  keepId?: boolean | undefined
  /**
   * Retain the _id values of embedded document data instead of generating
   *    new ids for each embedded document
   */
  keepEmbeddedIds?: boolean | undefined
  /**
   * The timestamp when the operation was performed
   */
  modifiedTime?: number | undefined
  /**
   * Block the dispatch of hooks related to this operation
   */
  noHook?: boolean | undefined
  /**
   * Re-render Applications whose display depends on the created Documents
   */
  render?: boolean | undefined
  /**
   * Render the sheet Application for any created Documents
   */
  renderSheet?: boolean | undefined
  /**
   * A parent Document within which Documents are embedded
   */
  parent?: TParent | undefined
  /**
   * A compendium collection ID which contains the Documents
   */
  pack: string | null
  /**
   * A parent Document UUID provided when the parent instance is unavailable
   */
  parentUuid?: DocumentUUID | string | null | undefined
  /**
   * Used internally by server-side backend
   */
  _createData?: Record<string, object> | undefined
  /**
   * Used internally by the server-side backend
   */
  _result?: (string | object)[] | undefined
}
export type DatabaseUpdateOperation<TParent extends foundry.abstract.Document | null> = {
  /**
   * Whether the database operation is broadcast to other connected clients
   */
  broadcast: boolean
  /**
   * The action of this database operation
   */
  action: "update"
  /**
   * An array of data objects used to update existing Documents.
   * Each update object must contain the _id of the target Document
   */
  updates: object[]
  /**
   * Difference each update object against current Document data and only use
   *               differential data for the update operation
   */
  diff?: boolean | undefined
  /**
   * The timestamp when the operation was performed
   */
  modifiedTime?: number | undefined
  /**
   * Merge objects recursively. If false, inner objects will be replaced
   *          explicitly. Use with caution!
   */
  recursive?: boolean | undefined
  /**
   * Re-render Applications whose display depends on the created Documents
   */
  render?: boolean | undefined
  /**
   * Block the dispatch of hooks related to this operation
   */
  noHook?: boolean | undefined
  /**
   * A parent Document within which Documents are embedded
   */
  parent?: TParent | undefined
  /**
   * A compendium collection ID which contains the Documents
   */
  pack: string | null
  /**
   * A parent Document UUID provided when the parent instance is unavailable
   */
  parentUuid?: DocumentUUID | string | null | undefined
  /**
   * Used internally by the server-side backend
   */
  _updateData?: Record<string, object> | undefined
  /**
   * Used internally by the server-side backend
   */
  _result?: (string | object)[] | undefined
}
export type DatabaseDeleteOperation<TParent extends foundry.abstract.Document | null> = {
  /**
   * Whether the database operation is broadcast to other connected clients
   */
  broadcast: boolean
  /**
   * The action of this database operation
   */
  action: "delete"
  /**
   * An array of Document ids which should be deleted
   */
  ids: string[]
  /**
   * Delete all documents in the Collection, regardless of _id
   */
  deleteAll?: boolean | undefined
  /**
   * The mapping of IDs of deleted Documents to the UUIDs of the
   * Documents that replace the deleted Documents
   */
  replacements?: Record<string, string> | undefined
  /**
   * The timestamp when the operation was performed
   */
  modifiedTime?: number | undefined
  /**
   * Block the dispatch of hooks related to this operation
   */
  noHook?: boolean | undefined
  /**
   * Re-render Applications whose display depends on the deleted Documents
   */
  render?: boolean | undefined
  /**
   * A parent Document within which Documents are embedded
   */
  parent?: TParent | undefined
  /**
   * A compendium collection ID which contains the Documents
   */
  pack: string | null
  /**
   * A parent Document UUID provided when the parent instance is unavailable
   */
  parentUuid?: DocumentUUID | string | null | undefined
  /**
   * An alias for 'ids' used internally by the server-side backend
   */
  _result?: (string | object)[] | undefined
}
export type DatabaseOperation<TParent extends foundry.abstract.Document | null> =
  | DatabaseGetOperation<TParent>
  | DatabaseCreateOperation<TParent>
  | DatabaseUpdateOperation<TParent>
  | DatabaseDeleteOperation<TParent>

export type DocumentSocketRequest<TDocument extends Document<object, DocumentConstructionContext> | null> = {
  /**
   * The type of Document being transacted
   */
  type: string
  /**
   * The action of the request
   */
  action: DatabaseAction
  /**
   * Operation parameters for the request
   */
  operation: DatabaseOperation<TDocument>
  /**
   * The id of the requesting User
   */
  userId: string
  /**
   * Should the response be broadcast to other connected clients?
   */
  broadcast: boolean
}
export type DataModelFromSourceOptions = {
  /**
   * Models created from trusted source data are validated non-strictly.
   *     Default: `false`.
   */
  strict?: boolean | undefined
}
export type DocumentCloneOptions = {
  /**
   * Save the clone to the World database? Default: `false`.
   */
  save?: boolean | undefined
  /**
   * Keep the same ID of the original document. Default: `false`.
   */
  keepId?: boolean | undefined
  /**
   * Track the clone source. Default: `false`.
   */
  addSource?: boolean | undefined
}
export type DocumentPermissionTest = (user: BaseUser, document: Document, data?: object | undefined) => boolean
export type DocumentClassMetadata = {
  name: string
  label: string
  coreTypes: string[]
  collection: string
  embedded: Record<string, string>
  permissions: Record<
    "view" | "create" | "update" | "delete",
    | ("NONE" | "PLAYER" | "TRUSTED" | "ASSISTANT" | "GAMEMASTER")
    | ("INHERIT" | "NONE" | "LIMITED" | "OBSERVER" | "OWNER")
    | DocumentPermissionTest
  >
  hasTypeData: boolean
  indexed: boolean
  compendiumIndexFields: string[]
  preserveOnImport: string[]
  schemaVersion?: string | undefined
}
