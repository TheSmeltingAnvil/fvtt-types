import { DocumentMetadata } from "foundry/abstract/Document.js"
import { fields } from "foundry/data/_module.js"
import { BaseScene, BaseUser } from "./_module.js"

/**
 * The data schema for a MeasuredTemplate embedded document.
 * @see BaseMeasuredTemplate
 *
 * @param data                   Initial data used to construct the data object
 * @param [document] The embedded document to which this data object belongs
 */
export default class BaseMeasuredTemplate<TParent extends BaseScene | null> extends foundry.abstract.Document<
  TParent,
  MeasuredTemplateSchema
> {
  /* -------------------------------------------- */
  /*  Model Configuration                         */
  /* -------------------------------------------- */

  static override get metadata(): MeasuredTemplateMetadata

  static override defineSchema(): MeasuredTemplateSchema

  /* -------------------------------------------- */
  /*  Model Methods                               */
  /* -------------------------------------------- */

  override testUserPermission(
    user: BaseUser,
    permission: CONST.DocumentOwnershipString | CONST.DocumentOwnershipLevel,
    { exact }?: { exact?: boolean },
  ): boolean
}

export default interface BaseMeasuredTemplate<TParent extends BaseScene | null>
  extends foundry.abstract.Document<TParent, MeasuredTemplateSchema>,
    fields.ModelPropsFromSchema<MeasuredTemplateSchema> {
  get documentName(): MeasuredTemplateMetadata["name"]
}

interface MeasuredTemplateMetadata extends DocumentMetadata {
  name: "MeasuredTemplate"
  collection: "templates"
  label: "DOCUMENT.MeasuredTemplate"
  isEmbedded: true
}

type MeasuredTemplateSchema = {
  /** The _id which uniquely identifies this BaseMeasuredTemplate embedded document */
  _id: fields.DocumentIdField
  /** The _id of the user who created this measured template */
  user: fields.ForeignDocumentField<BaseUser>
  /** The value in CONST.MEASURED_TEMPLATE_TYPES which defines the geometry type of this template */
  t: fields.StringField<CONST.MeasuredTemplateType, CONST.MeasuredTemplateType, true>
  /** The x-coordinate position of the origin of the template effect */
  x: fields.NumberField<number, number, true, false>
  /** The y-coordinate position of the origin of the template effect */
  y: fields.NumberField<number, number, true, false>
  /** The distance of the template effect */
  distance: fields.NumberField<number, number, true>
  /** The angle of rotation for the measured template */
  direction: fields.AngleField
  /** The angle of effect of the measured template, applies to cone types */
  angle: fields.AngleField
  /** The width of the measured template, applies to ray types */
  width: fields.NumberField
  /** A color string used to tint the border of the template shape */
  borderColor: fields.ColorField
  /** A color string used to tint the fill of the template shape */
  fillColor: fields.ColorField
  /** A repeatable tiling texture used to add a texture fill to the template shape */
  texture: fields.FilePathField<foundry.abstract.ImageFilePath | foundry.abstract.VideoFilePath>
  /** Is the template currently hidden? */
  hidden: fields.BooleanField
  /** An object of optional key/value flags */
  flags: fields.DocumentFlagsField
}

export type MeasuredTemplateSource = fields.SourceFromSchema<MeasuredTemplateSchema>
