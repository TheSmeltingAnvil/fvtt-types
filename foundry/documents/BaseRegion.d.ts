import { DocumentMetadata } from "foundry/abstract/Document.js"
import EmbeddedCollection from "foundry/abstract/EmbeddedCollection.js"
import { fields } from "foundry/data/_module.js"
import BaseScene from "./BaseScene.js"
import BaseRegionBehavior from "./BaseRegionBehavior.js"
import { data } from "foundry/_module.js"

export default class BaseRegion<TParent extends BaseScene | null = BaseScene | null> extends foundry.abstract.Document<
  TParent,
  RegionSchema
> {
  static override get metadata(): RegionMetadata

  static override defineSchema(): RegionSchema
}

export default interface BaseRegion<TParent extends BaseScene | null = BaseScene | null>
  extends foundry.abstract.Document<TParent, RegionSchema>,
    fields.ModelPropsFromSchema<RegionSchema> {
  get documentName(): RegionMetadata["name"]

  readonly behaviors: EmbeddedCollection<BaseRegionBehavior<this>>
}

interface RegionMetadata extends DocumentMetadata {
  name: "Region"
  collection: "regions"
  label: "DOCUMENT.Region"
  labelPlural: "DOCUMENT.Regions"
  isEmbedded: true
  embedded: {
    RegionBehavior: "behaviors"
  }
}

type RegionSchema = {
  /** The Region _id which uniquely identifies it within its parent Scene */
  _id: fields.DocumentIdField
  /** The name used to describe the Region */
  name: fields.StringField<string, string, true, false, false>
  /** The color used to highlight the Region */
  color: fields.ColorField<true, false, false>
  /** The shapes that make up the Region */
  shapes: fields.ArrayField<fields.TypedSchemaField<typeof data.BaseShapeData.TYPES>>
  elevation: fields.SchemaField<RegionElevationSchema>
  /** A collection of embedded RegionBehavior objects */
  behaviors: fields.EmbeddedCollectionField<BaseRegionBehavior<BaseRegion>>
  visibility: fields.NumberField<RegionVisibilityValue, RegionVisibilityValue, true>
  locked: fields.BooleanField
  /** An object of optional key/value flags */
  flags: fields.DocumentFlagsField
}

type RegionElevationSchema = {
  /** null -> -Infinity */
  bottom: fields.NumberField<number, number, true>
  /** null -> +Infinity */
  top: fields.NumberField<number, number, true>
}

type RegionVisibilityValue = (typeof CONST.REGION_VISIBILITY)[keyof typeof CONST.REGION_VISIBILITY]

export type RegionSource = fields.SourceFromSchema<RegionSchema>

export {}
