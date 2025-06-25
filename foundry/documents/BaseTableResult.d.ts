import { DocumentOwnershipLevel } from "const/types.js"
import { documents } from "foundry/_module.js"
import { DocumentMetadata } from "foundry/abstract/Document.js"
import { fields } from "foundry/data/_module.js"

/** The TableResult document model. */
export default class BaseTableResult<TParent extends documents.BaseRollTable | null> extends foundry.abstract.Document<
  TParent,
  TableResultSchema
> {
  /* -------------------------------------------- */
  /*  Model Configuration                         */
  /* -------------------------------------------- */

  static override get metadata(): TableResultMetadata

  static override defineSchema(): TableResultSchema

  override testUserPermission(
    user: documents.BaseUser,
    permission: CONST.DocumentOwnershipString | CONST.DocumentOwnershipLevel,
    { exact }?: { exact?: boolean },
  ): boolean
}

export default interface BaseTableResult<TParent extends documents.BaseRollTable | null>
  extends foundry.abstract.Document<TParent, TableResultSchema> {
  get documentName(): TableResultMetadata["name"]
}

interface TableResultMetadata extends DocumentMetadata {
  name: "TableResult"
  collection: "results"
  label: "DOCUMENT.TableResult"
  labelPlural: "DOCUMENT.TableResults"
  coreTypes: CONST.TableResultType[]
}

type TableResultSchema = {
  /** The _id which uniquely identifies this TableResult embedded document */
  _id: fields.DocumentIdField
  /** A result subtype from CONST.TABLE_RESULT_TYPES */
  type: fields.DocumentTypeField<CONST.TableResultType>
  name: fields.StringField<string, string, true, false, true>
  /** An image file url that represents the table result */
  img: fields.FilePathField<foundry.abstract.ImageFilePath>
  description: fields.HTMLField
  documentUuid: fields.DocumentUUIDField<DocumentUUID, false, true, false>
  /** The probabilistic weight of this result relative to other results */
  weight: fields.NumberField<number, number, true, false, true>
  /**
   * A length 2 array of ascending integers which defines the range of dice roll totals which produce this drawn
   * result
   */
  range: fields.ArrayField<fields.NumberField, [number, number], [number, number]>
  /** Has this result already been drawn (without replacement) */
  drawn: fields.BooleanField
  /** An object of optional key/value flags */
  flags: fields.DocumentFlagsField
  /** An object of creation and access information */
  _stats: fields.DocumentStatsField
}

export type TableResultSource = fields.SourceFromSchema<TableResultSchema>
