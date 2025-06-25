import DataModel from "foundry/abstract/DataModel.js"
import { fields } from "./_module.js"

/**
 * A reusable document structure for the internal data used to render the appearance of a light source.
 * This is re-used by both the AmbientLightData and TokenData classes.
 */
export default class LightData<TParent extends DataModel | null> extends DataModel<TParent, LightDataSchema> {
  static override defineSchema(): LightDataSchema

  static override migrateData<TSource extends Record<string, JSONValue>>(source: TSource): TSource
}

export default interface LightData<TParent extends DataModel | null>
  extends DataModel<TParent, LightDataSchema>,
    fields.ModelPropsFromSchema<LightDataSchema> {}

type LightDataSchema = {
  /** An opacity for the emitted light, if any */
  alpha: fields.AlphaField
  /** The angle of emission for this point source */
  angle: fields.AngleField
  /** The allowed radius of bright vision or illumination */
  bright: fields.NumberField<number, number, true, false, true>
  /** A tint color for the emitted light, if any */
  color: fields.ColorField
  /** The coloration technique applied in the shader */
  coloration: fields.NumberField<number, number, true>
  /** The allowed radius of dim vision or illumination */
  dim: fields.NumberField<number, number, true>
  /** Fade the difference between bright, dim, and dark gradually? */
  attenuation: fields.NumberField<number, number, true>
  /** The luminosity applied in the shader */
  luminosity: fields.NumberField<number, number, true, false, true>
  /** The amount of color saturation this light applies to the background texture */
  saturation: fields.NumberField<number, number, true, false, true>
  /** The amount of contrast this light applies to the background texture */
  contrast: fields.NumberField<number, number, true, false, true>
  /** The depth of shadows this light applies to the background texture */
  shadows: fields.NumberField<number, number, true, false, true>
  /** An animation configuration for the source */
  animation: fields.SchemaField<{
    type: fields.StringField<string, string, true, true, true>
    speed: fields.NumberField<number, number, true>
    intensity: fields.NumberField<number, number, true>
    reverse: fields.BooleanField
  }>
  /** A darkness range (min and max) for which the source should be active */
  darkness: fields.SchemaField<{
    min: fields.AlphaField
    max: fields.AlphaField
    speed: fields.AlphaField
  }>
}
