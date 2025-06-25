import { DataModelConstructionContext } from "foundry/abstract/_types.js"
import DataModel from "foundry/abstract/DataModel.js"
import { BaseActor } from "foundry/documents/_module.js"
import { fields } from "./_module.js"
import { TokenSchema } from "foundry/documents/BaseToken.js"

export default class PrototypeToken<TParent extends BaseActor | null> extends DataModel<TParent, PrototypeTokenSchema> {
  constructor(data: DeepPartial<PrototypeTokenSource>, options?: DataModelConstructionContext<TParent>)

  static override defineSchema(): PrototypeTokenSchema

  get actor(): TParent

  protected override _initialize(): void

  override toJSON(): this["_source"]
}

export default interface PrototypeToken<TParent extends BaseActor | null>
  extends DataModel<TParent, PrototypeTokenSchema>,
    fields.ModelPropsFromSchema<PrototypeTokenSchema> {}

type PrototypeTokenSchema = Omit<
  TokenSchema,
  "_id" | "name" | "actorId" | "delta" | "x" | "y" | "elevation" | "effects" | "overlayEffect" | "hidden"
> & {
  name: fields.StringField<string, string, true, false, true>
  randomImg: fields.BooleanField
}

export type PrototypeTokenSource = fields.SourceFromSchema<PrototypeTokenSchema>
