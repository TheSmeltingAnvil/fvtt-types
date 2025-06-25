import { fields } from "foundry/data/_module.js"
import BaseUser from "./BaseUser.js"
import { DocumentMetadata, MetadataPermission } from "foundry/abstract/Document.js"
import { DatabaseCreateCallbackOptions } from "./abstract/ClientDocumentMixin.js"

/**
 * The Document definition for a Macro.
 * Defines the DataSchema and common behaviors for a Macro which are shared between both client and server.
 * @memberof documents
 *
 * @param data    Initial data from which to construct the Macro
 * @param context Construction context options
 */
export default class BaseMacro extends foundry.abstract.Document<null, MacroSchema> {
  /* -------------------------------------------- */
  /*  Model Configuration                         */
  /* -------------------------------------------- */

  static override get metadata(): MacroMetadata

  static override defineSchema(): MacroSchema

  /** The default icon used for newly created Macro documents. */
  static DEFAULT_ICON: foundry.abstract.ImageFilePath

  /* -------------------------------------------- */
  /*  Model Methods                               */
  /* -------------------------------------------- */

  override testUserPermission(user: BaseUser, permission: unknown, options?: { exact?: boolean }): boolean

  /* -------------------------------------------- */
  /*  Database Event Handlers                     */
  /* -------------------------------------------- */

  protected override _preCreate(
    data: this["_source"],
    options: DatabaseCreateCallbackOptions,
    user: BaseUser,
  ): Promise<boolean | void>
}

export default interface BaseMacro
  extends foundry.abstract.Document<null, MacroSchema>,
    fields.ModelPropsFromSchema<MacroSchema> {
  get documentName(): MacroMetadata["name"]
}

interface MacroMetadata extends DocumentMetadata {
  name: "Macro"
  collection: "macros"
  indexed: true
  compendiumIndexFields: ["_id", "name", "img", "sort", "folder"]
  label: "DOCUMENT.Macro"
  labelPlural: "DOCUMENT.Macros"
  coreTypes: CONST.MacroType[]
  permissions: {
    view: MetadataPermission
    create: "PLAYER"
    update: MetadataPermission
    delete: MetadataPermission
  }
}

type MacroSchema = {
  /** The _id which uniquely identifies this Macro document */
  _id: fields.DocumentIdField
  /** The name of this Macro */
  name: fields.StringField<string, string, true, false, false>
  /** A Macro subtype from CONST.MACRO_TYPES */
  type: fields.StringField<CONST.MacroType, CONST.MacroType, true, false, true>
  /** The _id of a User document which created this Macro */
  author: fields.ForeignDocumentField<BaseUser>
  /** An image file path which provides the thumbnail artwork for this Macro */
  img: fields.FilePathField<foundry.abstract.ImageFilePath>
  /** The scope of this Macro application from CONST.MACRO_SCOPES */
  scope: fields.StringField<CONST.MacroScope, CONST.MacroScope, true, false, true>
  /** The string content of the macro command */
  command: fields.StringField<string, string, true, false, true>
  /** The _id of a Folder which contains this Macro */
  folder: fields.ForeignDocumentField
  /** The numeric sort value which orders this Macro relative to its siblings */
  sort: fields.IntegerSortField
  /** An object which configures ownership of this Macro */
  ownership: fields.DocumentOwnershipField
  /** An object of optional key/value flags */
  flags: fields.DocumentFlagsField
  /** An object of creation and access information */
  _stats: fields.DocumentStatsField
}

export type MacroSource = fields.SourceFromSchema<MacroSchema>
