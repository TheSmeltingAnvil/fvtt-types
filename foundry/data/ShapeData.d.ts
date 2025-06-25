import DataModel from "foundry/abstract/DataModel.js"
import { fields } from "./_module.js"

/** A data model intended to be used as an inner EmbeddedDataField which defines a geometric shape. */
export default class ShapeData<TParent extends DataModel | null> extends DataModel<TParent, ShapeDataSchema> {
  static override defineSchema(): ShapeDataSchema

  /** The primitive shape types which are supported */
  static TYPES: {
    RECTANGLE: "r"
    CIRCLE: "c"
    ELLIPSE: "e"
    POLYGON: "p"
  }
}

export default interface ShapeData<TParent extends DataModel | null>
  extends DataModel<TParent, ShapeDataSchema>,
    fields.ModelPropsFromSchema<ShapeDataSchema> {}

type ShapeDataSchema = {
  /**
   * The type of shape, a value in ShapeData.TYPES.
   * For rectangles, the x/y coordinates are the top-left corner.
   * For circles, the x/y coordinates are the center of the circle.
   * For polygons, the x/y coordinates are the first point of the polygon.
   */
  type: fields.StringField<ValueOf<typeof ShapeData.TYPES>, ValueOf<typeof ShapeData.TYPES>, true, false, true>
  /** For rectangles, the pixel width of the shape. */
  width: fields.NumberField
  /** For rectangles, the pixel height of the shape. */
  height: fields.NumberField
  /** For circles, the pixel radius of the shape. */
  radius: fields.NumberField
  /** For polygons, the array of polygon coordinates which comprise the shape. */
  points: fields.ArrayField<fields.NumberField<number, number, true, false>>
}
