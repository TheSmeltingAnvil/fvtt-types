import * as abstract from "../../abstract/_module.js"
import * as types from "../_types.js"
import DataField from "./DataField.js"
import SchemaField from "./SchemaField.js"
import StringField from "./StringField.js"

type SourceMapFromTypedSchemaTypes<
  TTypes extends Record<string, foundry.abstract.types.DataSchema | SchemaField | ConstructorOf<abstract.DataModel>>,
> = {
  [K in keyof TTypes]: TTypes[K] extends ConstructorOf<abstract.DataModel>
    ? InstanceType<TTypes[K]>["_source"]
    : TTypes[K] extends SchemaField
      ? SourceFromDataField<TTypes[K]>
      : TTypes[K] extends foundry.abstract.types.DataSchema
        ? SourceFromSchema<TTypes[K]>
        : Record<string, JSONValue>
}

type SourceFromTypedSchemaTypes<
  TTypes extends Record<string, foundry.abstract.types.DataSchema | SchemaField | ConstructorOf<abstract.DataModel>>,
> = SourceMapFromTypedSchemaTypes<TTypes>[keyof TTypes]

type ModelMapFromTypedSchemaTypes<
  TTypes extends Record<string, foundry.abstract.types.DataSchema | SchemaField | ConstructorOf<abstract.DataModel>>,
> = {
  [K in keyof TTypes]: TTypes[K] extends ConstructorOf<abstract.DataModel>
    ? InstanceType<TTypes[K]>
    : TTypes[K] extends SchemaField
      ? ModelPropFromDataField<TTypes[K]>
      : TTypes[K] extends foundry.abstract.types.DataSchema
        ? ModelPropsFromSchema<TTypes[K]>
        : object
}

type ModelFromTypedSchemaTypes<
  TTypes extends Record<string, foundry.abstract.types.DataSchema | SchemaField | ConstructorOf<abstract.DataModel>>,
> = ModelMapFromTypedSchemaTypes<TTypes>[keyof TTypes]

/** A subclass of {@link StringField} which contains JavaScript code. */
export class JavaScriptField<
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = false,
> extends StringField<string, string, TRequired, TNullable, THasInitial> {
  /**
   * @param options Options which configure the behavior of the field
   * @param context Additional context which describes the field
   */
  constructor(
    options?: types.JavaScriptFieldOptions<TRequired, TNullable, THasInitial>,
    context?: types.DataFieldContext,
  )
}

// System utility types

export type SourceFromDataField<T> =
  T extends DataField<infer TSourceProp, unknown, infer TRequired, infer TNullable, infer THasInitial>
    ? MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>
    : never

export type SourceFromDocument<T extends abstract.Document> = SourceFromDataField<T["schema"]>
export type ModelPropFromDataField<T> =
  T extends DataField<JSONValue, infer TModelProp, infer TRequired, infer TNullable, infer THasInitial>
    ? MaybeSchemaProp<TModelProp, TRequired, TNullable, THasInitial>
    : never

export type MaybeSchemaProp<
  TProp,
  TRequired extends boolean,
  TNullable extends boolean,
  THasInitial extends boolean,
> = ResolveNullable<ResolveRequired<TProp, TRequired, THasInitial>, TNullable>

type ResolveRequired<TProp, TRequired extends boolean, THasInitial extends boolean> = TRequired extends true
  ? TProp
  : THasInitial extends true
    ? TProp
    : TProp | undefined

type ResolveNullable<TProp, TNullable extends boolean> = TNullable extends false ? TProp : TProp | null

export type ModelPropsFromSchema<TDataSchema extends abstract.types.DataSchema> = {
  [K in keyof TDataSchema]: ModelPropFromDataField<TDataSchema[K]>
}

export type SourceFromSchema<TDataSchema extends abstract.types.DataSchema> = {
  [K in keyof TDataSchema]: SourceFromDataField<TDataSchema[K]>
}

export type DocumentSourceFromSchema<
  TDataSchema extends abstract.types.DataSchema,
  THasId extends boolean = boolean,
> = {
  [K in keyof TDataSchema]: K extends "_id"
    ? THasId extends true
      ? string
      : THasId extends false
        ? null
        : string | null
    : SourceFromDataField<TDataSchema[K]>
}
