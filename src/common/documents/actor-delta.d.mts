/**
 * @import {ActorDeltaData} from "./_types.mjs";
 * @import BaseActor from "./actor.mjs";
 * @import {DataModelUpdateOptions} from "@common/abstract/_types.mjs";
 */
/**
 * The ActorDelta Document.
 * Defines the DataSchema and common behaviors for an ActorDelta which are shared between both client and server.
 * ActorDeltas store a delta that can be applied to a particular Actor in order to produce a new Actor.
 * @extends {Document<ActorDeltaData>}
 * @mixes ActorDeltaData
 * @category Documents
 */
export default class BaseActorDelta extends Document<
  ActorDeltaData,
  foundry.abstract.types.DocumentConstructionContext
> {
  /** @inheritdoc */
  static metadata: object
  /** @override */
  static override defineSchema(): {
    _id: fields.DocumentIdField
    name: fields.StringField
    type: fields.StringField
    img: fields.FilePathField
    system: fields.ObjectField
    items: fields.EmbeddedCollectionDeltaField
    effects: fields.EmbeddedCollectionDeltaField
    ownership: fields.DocumentOwnershipField
    flags: fields.DocumentFlagsField
  }
  /**
   * Apply an ActorDelta to an Actor and return the resultant synthetic Actor.
   * @param {ActorDelta} delta    The ActorDelta.
   * @param {BaseActor} baseActor The base Actor.
   * @param {object} [context]    Context to supply to synthetic Actor instantiation.
   * @returns {BaseActor|null}
   */
  static applyDelta(delta: ActorDelta, baseActor: BaseActor, context?: object): BaseActor | null
  /**
   * Merge delta Document embedded collections with the base Document.
   * @param {typeof Document} documentClass  The parent Document class.
   * @param {object} baseData                The base Document data.
   * @param {object} deltaData               The delta Document data.
   */
  static #mergeEmbeddedCollections(documentClass: typeof Document, baseData: object, deltaData: object): void
  /**
   * Apply an embedded collection delta.
   * @param {object[]} base   The base embedded collection.
   * @param {object[]} delta  The delta embedded collection.
   * @returns {object[]}
   */
  static #mergeEmbeddedCollection(base?: object[], delta?: object[]): object[]
  /** @override */
  static override migrateData(source: any): object
  constructor(
    data?: Partial<ActorDeltaData> | undefined,
    { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined,
  )
  /** @override */
  override getUserLevel(user: any): any
  /**
   * Retrieve the base actor's collection, if it exists.
   * @param {string} collectionName  The collection name.
   * @returns {Collection}
   */
  getBaseCollection(collectionName: string): Collection
  /**
   * Prepare changes to a descendent delta collection.
   * @param {object} changes                  Candidate source changes.
   * @param {DataModelUpdateOptions} options  Options which determine how the new data is merged.
   * @internal
   */
  _prepareDeltaUpdate(changes?: object, options?: DataModelUpdateOptions): void
  /** @inheritDoc */
  updateSource(changes?: object, options?: object): object
  /** @override */
  override toObject(source?: boolean): object
}
import type { DataModelUpdateOptions } from "@common/abstract/_types.mjs"
import Document from "../abstract/document.mjs"
import * as fields from "../data/fields.mjs"
import type { ActorDeltaData } from "./_types.mjs"
import type BaseActor from "./actor.mjs"
