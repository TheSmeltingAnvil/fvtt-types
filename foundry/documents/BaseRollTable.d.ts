import { DocumentMetadata } from "foundry/abstract/Document.js"
import { fields } from "foundry/data/_module.js"
import BaseTableResult from "./BaseTableResult.js"
import EmbeddedCollection from "foundry/abstract/EmbeddedCollection.js"
import BaseFolder from "./BaseFolder.js"

/**
 * The Document definition for a RollTable.
 * Defines the DataSchema and common behaviors for a RollTable which are shared between both client and server.
 */
export default class BaseRollTable extends foundry.abstract.Document<null, RollTableSchema> {
  /* -------------------------------------------- */
  /*  Model Configuration                         */
  /* -------------------------------------------- */

  static override get metadata(): RollTableMetadata

  static override defineSchema(): RollTableSchema

  /** The default icon used for newly created Macro documents */
  static DEFAULT_ICON: foundry.abstract.ImageFilePath
}

export default interface BaseRollTable
  extends foundry.abstract.Document<null, RollTableSchema>,
    fields.ModelPropsFromSchema<RollTableSchema> {
  /** A reference to the Collection of TableResult instances in this document, indexed by _id. */
  readonly results: EmbeddedCollection<BaseTableResult<this>>

  get documentName(): (typeof BaseRollTable)["metadata"]["name"]
}

interface RollTableMetadata extends DocumentMetadata {
  name: "RollTable"
  collection: "tables"
  indexed: true
  compendiumIndexFields: ["_id", "name", "description", "img", "sort", "folder"]
  embedded: { TableResult: "results" }
  label: "DOCUMENT.RollTable"
  labelPlural: "DOCUMENT.RollTables"
}

type RollTableSchema = {
  /** The _id which uniquely identifies this RollTable document */
  _id: fields.DocumentIdField
  /** The name of this RollTable */
  name: fields.StringField<string, string, true, false, false>
  /** An image file path which provides the thumbnail artwork for this RollTable */
  img: fields.FilePathField<foundry.abstract.ImageFilePath>
  /** The HTML text description for this RollTable document */
  description: fields.HTMLField
  /** A Collection of TableResult embedded documents which belong to this RollTable */
  // biome-ignore lint/suspicious/noExplicitAny:
  results: fields.EmbeddedCollectionField<BaseTableResult<BaseRollTable>>
  /** The Roll formula which determines the results chosen from the table */
  formula: fields.StringField<string>
  /** Are results from this table drawn with replacement? */
  replacement: fields.BooleanField
  /** Is the Roll result used to draw from this RollTable displayed in chat? */
  displayRoll: fields.BooleanField
  /** The _id of a Folder which contains this RollTable */
  folder: fields.ForeignDocumentField<BaseFolder>
  /** The numeric sort value which orders this RollTable relative to its siblings */
  sort: fields.IntegerSortField
  /** An object which configures ownership of this RollTable */
  ownership: fields.DocumentOwnershipField
  /** An object of optional key/value flags */
  flags: fields.DocumentFlagsField
  /** An object of creation and access information */
  _stats: fields.DocumentStatsField
}

export type RollTableSource = fields.SourceFromSchema<RollTableSchema>
