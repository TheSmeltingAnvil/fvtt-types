import { DataFieldContext, ObjectFieldOptions } from "../_types.js"
import SchemaField from "./SchemaField.js"
import { MaybeSchemaProp, SourceFromSchema } from "./util.js"

/** A subclass of `SchemaField` which embeds some other DataModel definition as an inner object. */
export default class EmbeddedDataField<
  TModelProp extends foundry.abstract.DataModel = foundry.abstract.DataModel,
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
> extends SchemaField<
  TModelProp["schema"]["fields"],
  TModelProp["_source"],
  TModelProp,
  TRequired,
  TNullable,
  THasInitial
> {
  /**
   * @param model The class of DataModel which should be embedded in this field
   * @param options Options which configure the behavior of the field
   * @param context Additional context which describes the field
   */
  constructor(
    model: ConstructorOf<TModelProp>,
    options?: ObjectFieldOptions<SourceFromSchema<TModelProp["schema"]["fields"]>, TRequired, TNullable, THasInitial>,
    context?: DataFieldContext,
  )

  /** The embedded DataModel definition which is contained in this field. */
  model: ConstructorOf<TModelProp>

  protected override _initialize(fields: foundry.abstract.types.DataSchema): foundry.abstract.types.DataSchema

  override initialize(
    value: MaybeSchemaProp<TModelProp["_source"], TRequired, TNullable, THasInitial>,
    model: ConstructorOf<foundry.abstract.DataModel>,
    options?: object,
  ): MaybeSchemaProp<TModelProp, TRequired, TNullable, THasInitial>

  override toObject(
    value: TModelProp,
  ): MaybeSchemaProp<SourceFromSchema<TModelProp["schema"]["fields"]>, TRequired, TNullable, THasInitial>
}
