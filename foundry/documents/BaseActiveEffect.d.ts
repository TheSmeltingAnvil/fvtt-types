import { fields } from "foundry/data/_module.js"
import { ActorUUID, ItemUUID } from "./_module.js"
import { DocumentMetadata } from "foundry/abstract/Document.js"
import BaseActor from "./BaseActor.js"
import BaseItem from "./BaseItem.js"
import BaseUser from "./BaseUser.js"
import { UserAction } from "foundry/abstract/_types.js"
import { DatabaseCreateCallbackOptions } from "./abstract/ClientDocumentMixin.js"

/**
 * The ActiveEffect document model.
 * @param data    Initial data from which to construct the document.
 * @param context Construction context options
 */
export default class BaseActiveEffect<TParent extends BaseActor | BaseItem<BaseActor | null> | null> extends foundry
  .abstract.Document<TParent, ActiveEffectSchema> {
  /* -------------------------------------------- */
  /*  Model Configuration                         */
  /* -------------------------------------------- */

  static override get metadata(): ActiveEffectMetadata

  static override defineSchema(): ActiveEffectSchema

  /* -------------------------------------------- */
  /*  Model Methods                               */
  /* -------------------------------------------- */

  override canUserModify(user: BaseUser, action: UserAction, data?: object): boolean

  override testUserPermission(
    user: BaseUser,
    permission: CONST.DocumentOwnershipString | CONST.DocumentOwnershipLevel,
    { exact }?: { exact?: boolean },
  ): boolean

  /* -------------------------------------------- */
  /*  Database Event Handlers                     */
  /* -------------------------------------------- */

  protected override _preCreate(
    data: this["_source"],
    options: DatabaseCreateCallbackOptions,
    user: BaseUser,
  ): Promise<boolean | void>
}

export default interface BaseActiveEffect<TParent extends BaseActor | BaseItem<BaseActor | null> | null>
  extends foundry.abstract.Document<TParent, ActiveEffectSchema>,
    fields.ModelPropsFromSchema<ActiveEffectSchema> {
  get documentName(): ActiveEffectMetadata["name"]
}

export interface ActiveEffectMetadata extends DocumentMetadata {
  name: "ActiveEffect"
  collection: "effects"
  label: "DOCUMENT.ActiveEffect"
  isEmbedded: true
}

type ActiveEffectSchema = {
  _id: fields.DocumentIdField
  name: fields.StringField<string, string, true, false, false>
  changes: fields.ArrayField<fields.SchemaField<EffectChangeSchema>>
  system: fields.TypeDataField
  type: fields.StringField<string, string, false, true, true>
  disabled: fields.BooleanField
  duration: fields.SchemaField<EffectDurationSchema>
  description: fields.HTMLField
  img: fields.FilePathField<foundry.abstract.ImageFilePath>
  origin: fields.StringField<ActorUUID | ItemUUID, ActorUUID | ItemUUID, false, true, true>
  tint: fields.ColorField
  transfer: fields.BooleanField
  statuses: fields.SetField<fields.StringField<string, string, true, false, false>>
  flags: fields.DocumentFlagsField
  _stats: fields.DocumentStatsField
}

type EffectChangeSchema = {
  key: fields.StringField<string, string, true, false, false>
  value: fields.StringField<string, string, true, false, false>
  mode: fields.NumberField<CONST.ActiveEffectChangeMode, CONST.ActiveEffectChangeMode, false, false, true>
  priority: fields.NumberField
}

type EffectDurationSchema = {
  startTime: fields.NumberField<number, number, false, true, true>
  seconds: fields.NumberField
  combat: fields.ForeignDocumentField
  rounds: fields.NumberField
  turns: fields.NumberField
  startRound: fields.NumberField
  startTurn: fields.NumberField
}

export type ActiveEffectSource = fields.SourceFromSchema<ActiveEffectSchema>

export type EffectDurationSource = fields.SourceFromSchema<EffectDurationSchema>
