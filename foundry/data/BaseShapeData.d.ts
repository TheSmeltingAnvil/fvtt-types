import DataModel from "foundry/abstract/DataModel.js"
import { fields } from "./_module.js"

export type ShapeDataType = keyof typeof BaseShapeData.TYPES

/** A data model intended to be used as an inner EmbeddedDataField which defines a geometric shape. */
export default class BaseShapeData<TSchema extends BaseShapeDataSchema> extends DataModel<DataModel | null, TSchema> {
  static override defineSchema(): BaseShapeDataSchema

  /** The type of this shape. */
  static TYPE: keyof typeof BaseShapeData.TYPES

  /** The possible shape types. */
  static get TYPES(): {
    rectangle: typeof RectangleShapeData
    circle: typeof CircleShapeData
    ellipse: typeof EllipseShapeData
    polygon: typeof PolygonShapeData
  }

  /** The bottom and top elevation of the shape. A value of null means -/+Infinity. */
  elevation?: { bottom: number | null; top: number | null }
}

export default interface BaseShapeData<TSchema extends BaseShapeDataSchema = BaseShapeDataSchema>
  extends DataModel<DataModel | null, TSchema>,
    fields.ModelPropsFromSchema<BaseShapeDataSchema> {}

type BaseShapeDataSchema = {
  /** The type of shape, a value in BaseShapeData.TYPES. */
  type: fields.StringField<ShapeDataType, ShapeDataType, true, false, true>
  /** Is this shape a hole? */
  hole: fields.BooleanField
}

/** The data model for a rectangular shape. */
export class RectangleShapeData extends BaseShapeData<RectangleShapeDataSchema> {
  static override defineSchema(): RectangleShapeDataSchema

  static override TYPE: "rectangle"
}

interface RectangleShapeData
  extends BaseShapeData<RectangleShapeDataSchema>,
    fields.ModelPropsFromSchema<RectangleShapeDataSchema> {
  readonly _source: Omit<fields.SourceFromSchema<RectangleShapeDataSchema>, "type"> & { type: "rectangle" }
  type: "rectangle"
}

type RectangleShapeDataSchema = BaseShapeDataSchema & {
  /** The top-left x-coordinate in pixels before rotation. */
  x: fields.NumberField<number, number, true, false, false>
  /** The top-left y-coordinate in pixels before rotation. */
  y: fields.NumberField<number, number, true, false, false>
  /** The width of the rectangle in pixels. */
  width: fields.NumberField<number, number, true, false, false>
  /** The height of the rectangle in pixels. */
  height: fields.NumberField<number, number, true, false, false>
  /** The rotation around the center of the rectangle in degrees. */
  rotation: fields.AngleField
}

/** The data model for a circle shape. */
export class CircleShapeData extends BaseShapeData<CircleShapeDataSchema> {
  static override defineSchema(): CircleShapeDataSchema

  static override TYPE: "circle"
}

interface CircleShapeData
  extends BaseShapeData<CircleShapeDataSchema>,
    fields.ModelPropsFromSchema<CircleShapeDataSchema> {
  readonly _source: Omit<fields.SourceFromSchema<CircleShapeDataSchema>, "type"> & { type: "circle" }
  type: "circle"
}

type CircleShapeDataSchema = BaseShapeDataSchema & {
  /** The x-coordinate of the center point in pixels. */
  x: fields.NumberField<number, number, true, false, false>
  /** The y-coordinate of the center point in pixels. */
  y: fields.NumberField<number, number, true, false, false>
  /** The radius of the circle in pixels. */
  radius: fields.NumberField<number, number, true, false, false>
}

/** The data model for an ellipse shape. */
export class EllipseShapeData extends BaseShapeData<EllipseShapeDataSchema> {
  static defineSchema(): EllipseShapeDataSchema

  static override TYPE: "ellipse"
}

interface EllipseShapeData
  extends BaseShapeData<EllipseShapeDataSchema>,
    fields.ModelPropsFromSchema<EllipseShapeDataSchema> {
  readonly _source: Omit<fields.SourceFromSchema<EllipseShapeDataSchema>, "type"> & { type: "ellipse" }
  type: "ellipse"
}

type EllipseShapeDataSchema = BaseShapeDataSchema & {
  /** The x-coordinate of the center point in pixels. */
  x: fields.NumberField<number, number, true, false, false>
  /** The y-coordinate of the center point in pixels. */
  y: fields.NumberField<number, number, true, false, false>
  /** The x-radius of the circle in pixels. */
  radiusX: fields.NumberField<number, number, true, false, false>
  /** The y-radius of the circle in pixels. */
  radiusY: fields.NumberField<number, number, true, false, false>
  /** The rotation around the center of the rectangle in degrees. */
  rotation: fields.NumberField<number, number, true, false, false>
}

/** The data model for a polygon shape. */
export class PolygonShapeData extends BaseShapeData<PolygonShapeDataSchema> {
  static defineSchema(): PolygonShapeDataSchema

  static override TYPE: "polygon"
}

interface PolygonShapeData
  extends BaseShapeData<PolygonShapeDataSchema>,
    fields.ModelPropsFromSchema<PolygonShapeDataSchema> {
  readonly _source: Omit<fields.SourceFromSchema<PolygonShapeDataSchema>, "type"> & { type: "polygon" }
  type: "polygon"
}

type PolygonShapeDataSchema = BaseShapeDataSchema & {
  /** The points of the polygon ([x0, y0, x1, y1, ...]). The polygon must not be self-intersecting. */
  points: fields.ArrayField<fields.NumberField<number, number, true, false, false>>
}
