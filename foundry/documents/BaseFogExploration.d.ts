import { fields } from "foundry/data/_module.js"
import BaseUser from "./BaseUser.js"
import BaseScene from "./BaseScene.js"
import { DatabaseUpdateCallbackOptions } from "./abstract/_module.js"
import { DocumentMetadata } from "foundry/abstract/Document.js"

/**
 * The Document definition for FogExploration.
 * Defines the DataSchema and common behaviors for FogExploration which are shared between both client and server.
 * @memberof documents
 *
 * @param data    Initial data from which to construct the FogExploration
 * @param context Construction context options
 */
export default class BaseFogExploration extends foundry.abstract.Document<null, FogExplorationSchema> {
  static override get metadata(): FogExplorationMetadata

  static override defineSchema(): FogExplorationSchema

  protected override _preUpdate(
    changed: DeepPartial<this["_source"]>,
    options: DatabaseUpdateCallbackOptions,
    user: BaseUser,
  ): Promise<boolean | void>
}

export default interface BaseFogExploration
  extends foundry.abstract.Document<null, FogExplorationSchema>,
    fields.ModelPropsFromSchema<FogExplorationSchema> {
  get documentName(): FogExplorationMetadata["name"]
}

interface FogExplorationMetadata extends DocumentMetadata {
  name: "FogExploration"
  collection: "fog"
  label: "DOCUMENT.FogExploration"
  labelPlural: "DOCUMENT.FogExplorations"
  isPrimary: true
}

type FogExplorationSchema = {
  /** The _id which uniquely identifies this FogExploration document */
  _id: fields.DocumentIdField
  /** The _id of the Scene document to which this fog applies */
  scene: fields.ForeignDocumentField<BaseScene>
  /** The _id of the User document to which this fog applies */
  user: fields.ForeignDocumentField<BaseUser>
  /** The base64 png image of the explored fog polygon */
  explored: fields.FilePathField<foundry.abstract.ImageFilePath, foundry.abstract.ImageFilePath, true>
  /** The object of scene positions which have been explored at a certain vision radius */
  positions: fields.ObjectField<object>
  /** The timestamp at which this fog exploration was last updated */
  timestamp: fields.NumberField<number, number, false, true, true>
  flags: fields.DocumentFlagsField
}

export type FogExplorationSource = fields.SourceFromSchema<FogExplorationSchema>
