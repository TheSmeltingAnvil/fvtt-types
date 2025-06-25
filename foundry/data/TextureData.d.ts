import { fields } from "./_module.js"
import { DataFieldOptions } from "./_types.js"

/** A {@link fields.SchemaField} subclass used to represent texture data. */
export default class TextureData extends fields.SchemaField<TextureDataSchema> {
  /**
   * @param options    Options which are forwarded to the SchemaField constructor
   * @param srcOptions Additional options for the src field
   */
  constructor(
    options?: DataFieldOptions<fields.SourceFromSchema<TextureDataSchema>, true, false, true>,
    srcOptions?: {
      categories?: ("IMAGE" | "VIDEO")[]
      initial?: "IMAGE" | "VIDEO" | null
      wildcard?: boolean
      label?: string
    },
  )
}

type TextureDataSchema = {
  /** The URL of the texture source. */
  src: fields.FilePathField<
    foundry.abstract.ImageFilePath | foundry.abstract.VideoFilePath,
    foundry.abstract.ImageFilePath | foundry.abstract.VideoFilePath,
    true,
    true,
    true
  >
  /** The X coordinate of the texture anchor. */
  anchorX: fields.NumberField<number, number, true, false, true>
  /** The Y coordinate of the texture anchor. */
  anchorY: fields.NumberField<number, number, true, false, true>
  /** The scale of the texture in the X dimension. */
  scaleX: fields.NumberField<number, number, true, false, true>
  /** The scale of the texture in the Y dimension. */
  scaleY: fields.NumberField<number, number, true, false, true>
  /** The X offset of the texture with (0,0) in the top left. */
  offsetX: fields.NumberField<number, number, true, false, true>
  /** The Y offset of the texture with (0,0) in the top left. */
  offsetY: fields.NumberField<number, number, true, false, true>
  /** An angle of rotation by which this texture is rotated around its center. */
  rotation: fields.AngleField
  /** An optional color string used to tint the texture. */
  tint: fields.ColorField
  /**
   * Only pixels with an alpha value at or above this value are consider solid w.r.t. to occlusion testing and
   * light/weather blocking.
   */
  alphaThreshold: fields.AlphaField<true, false, true>
}
