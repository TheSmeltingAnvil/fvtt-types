import { fields, TombstoneDataSchema } from "foundry/data/_module.js"
import BaseActor from "./BaseActor.js"
import BaseToken from "./BaseToken.js"
import { DocumentConstructionContext, UserAction } from "foundry/abstract/_types.js"
import BaseItem, { ItemSchema } from "./BaseItem.js"
import BaseUser from "./BaseUser.js"
import { DocumentMetadata } from "foundry/abstract/Document.js"
import BaseActiveEffect from "./BaseActiveEffect.js"

/**
 * The Document definition for an ActorDelta.
 * Defines the DataSchema and common behaviors for an ActorDelta which are shared between both client and server.
 * ActorDeltas store a delta that can be applied to a particular Actor in order to produce a new Actor.
 *
 * @param data    Initial data used to construct the ActorDelta.
 * @param context Construction context options.
 */
export default class BaseActorDelta<TParent extends BaseToken | null> extends foundry.abstract.Document<
  TParent,
  ActorDeltaSchema
> {
  /* -------------------------------------------- */
  /*  Model Configuration                         */
  /* -------------------------------------------- */

  static override readonly metadata: ActorDeltaMetadata

  static override defineSchema(): ActorDeltaSchema

  override canUserModify(user: BaseUser, action: UserAction, data?: Record<string, unknown>): boolean

  override testUserPermission(
    user: BaseUser,
    permission: CONST.DocumentOwnershipString | CONST.DocumentOwnershipLevel,
    { exact }?: { exact?: boolean },
  ): boolean

  /* -------------------------------------------- */
  /*  Methods                                     */
  /* -------------------------------------------- */

  /**
   * Retrieve the base actor's collection, if it exists.
   * @param collectionName  The collection name.
   */
  getBaseCollection(collectionName: string): Collection<string, BaseActor> | undefined

  /**
   * Apply an ActorDelta to an Actor and return the resultant synthetic Actor.
   * @param {ActorDelta} delta  The ActorDelta.
   * @param {Actor} baseActor   The base Actor.
   * @param {object} [context]  Context to supply to synthetic Actor instantiation.
   * @returns {Actor|null}
   */
  static applyDelta(
    delta: BaseActorDelta<BaseToken | null>,
    baseActor: BaseActor,
    context?: DocumentConstructionContext<BaseToken | null>,
  ): BaseActor
}

export default interface BaseActorDelta<TParent extends BaseToken | null>
  extends foundry.abstract.Document<TParent, ActorDeltaSchema>,
    fields.ModelPropsFromSchema<ActorDeltaSchema> {}

interface ActorDeltaMetadata extends DocumentMetadata {
  name: "ActorDelta"
  collection: "delta"
  label: "DOCUMENT.ActorDelta"
  labelPlural: "DOCUMENT.ActorDeltas"
  isEmbedded: true
  embedded: {
    Item: "items"
    ActiveEffect: "effects"
  }
}

type ActorDeltaSchema = {
  _id: fields.DocumentIdField
  name: fields.StringField<string, string, false, true, true>
  type: fields.StringField<string, string, false, true, true>
  img: fields.FilePathField<foundry.abstract.ImageFilePath, foundry.abstract.ImageFilePath, false, true, true>
  system: fields.ObjectField<object, object, true, true, true>
  items: fields.EmbeddedCollectionDeltaField<
    BaseItem<BaseActor>,
    (fields.DocumentSourceFromSchema<ItemSchema, true> | fields.SourceFromSchema<TombstoneDataSchema>)[]
  >
  effects: fields.EmbeddedCollectionDeltaField<BaseActiveEffect<BaseActor>>
  ownership: fields.DocumentOwnershipField
  flags: fields.DocumentFlagsField
}

export type ActorDeltaSource = fields.SourceFromSchema<ActorDeltaSchema>
