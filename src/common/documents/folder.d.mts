/**
 * @import {FolderData} from "./_types.mjs";
 */
/**
 * The Folder Document.
 * Defines the DataSchema and common behaviors for a Folder which are shared between both client and server.
 * @extends {Document<FolderData>}
 * @mixes FolderData
 * @category Documents
 */
export default class BaseFolder extends Document<FolderData, foundry.abstract.types.DocumentConstructionContext> {
  /** @inheritdoc */
  static metadata: object
  /** @inheritdoc */
  static defineSchema(): {
    _id: fields.DocumentIdField
    name: fields.StringField
    type: fields.DocumentTypeField
    description: fields.HTMLField
    folder: fields.ForeignDocumentField
    sorting: fields.StringField
    sort: fields.IntegerSortField
    color: fields.ColorField
    flags: fields.DocumentFlagsField
    _stats: fields.DocumentStatsField
  }
  /** @inheritdoc */
  static validateJoint(data: any): void
  /**
   * Allow folder sorting modes
   * @type {string[]}
   */
  static SORTING_MODES: string[]
  /** @override */
  static override get(
    documentId: any,
    options?: object,
  ): Document<object, foundry.abstract.types.DocumentConstructionContext> | null
  constructor(
    data?: Partial<FolderData> | undefined,
    { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined,
  )
}
import Document from "../abstract/document.mjs"
import * as fields from "../data/fields.mjs"
import type { FolderData } from "./_types.mjs"
