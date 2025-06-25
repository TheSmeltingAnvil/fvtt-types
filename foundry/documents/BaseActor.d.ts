import * as abstract from "foundry/abstract/_module.js"
import * as fields from "foundry/data/fields/_module.js"

import * as documents from "./_module.js"

import { Document } from "foundry/abstract/_module.js"
/**
 * The Actor Document.
 * Defines the DataSchema and common behaviors for an Actor which are shared between both client and server.
 * @memberof documents
 *
 * @param data    Initial data from which to construct the Actor
 * @param context Construction context options
 */
export default class BaseActor<
  TParent extends documents.BaseToken | null = documents.BaseToken | null,
> extends Document<TParent, ActorSchema> {
  /* -------------------------------------------- */
  /*  Model Configuration                         */
  /* -------------------------------------------- */

  static override get metadata(): ActorMetadata

  static override defineSchema(): ActorSchema

  /** The default icon used for newly created Actor documents */
  static DEFAULT_ICON: foundry.abstract.ImageFilePath

  /**
   * Determine default artwork based on the provided actor data.
   * @param actorData The source actor data.
   * @returns Candidate actor image and prototype token artwork.
   */
  static getDefaultArtwork(actorData: ActorSource): {
    img: foundry.abstract.ImageFilePath
    texture: { src: foundry.abstract.ImageFilePath | foundry.abstract.VideoFilePath }
  }

  /** The allowed set of Actor types which may exist. */
  static get TYPES(): string[]

  protected override _initializeSource(
    data: Record<string, unknown>,
    options?: abstract.types.DocumentConstructionContext<TParent>,
  ): this["_source"]

  static override canUserCreate(user: documents.BaseUser): boolean

  protected override _preCreate(
    data: this["_source"],
    options: documents.abstract.DatabaseCreateCallbackOptions,
    user: documents.BaseUser,
  ): Promise<boolean | void>

  protected override _preUpdate(
    changed: DeepPartial<this["_source"]>,
    options: documents.abstract.DatabaseUpdateCallbackOptions,
    user: documents.BaseUser,
  ): Promise<boolean | void>
}

export default interface BaseActor<TParent extends documents.BaseToken | null = documents.BaseToken | null>
  extends Document<TParent, ActorSchema>,
    fields.ModelPropsFromSchema<ActorSchema> {
  readonly items: abstract.EmbeddedCollection<documents.BaseItem<this>>
  readonly effects: abstract.EmbeddedCollection<documents.BaseActiveEffect<this>>

  prototypeToken: foundry.data.PrototypeToken<this>

  get documentName(): ActorMetadata["name"]

  get folder(): documents.BaseFolder | null
}

export interface ActorMetadata extends abstract.DocumentMetadata {
  name: "Actor"
  collection: "actors"
  indexed: true
  compendiumIndexFields: ["_id", "name", "img", "type", "sort", "folder"]
  embedded: { ActiveEffect: "effects"; Item: "items" }
  label: "DOCUMENT.Actor"
  labelPlural: "DOCUMENT.Actors"
}

export type ActorSchema<
  TType extends string = string,
  TSystemSource extends object = object,
  TItemSource extends documents.ItemSource = documents.ItemSource,
> = {
  /** The _id which uniquely identifies this Actor document */
  _id: fields.DocumentIdField
  /** The name of this Actor */
  name: fields.StringField<string, string, true, false, false>
  /** An Actor subtype which configures the system data model applied */
  type: fields.StringField<TType, TType, true, false, false>
  /** An image file path which provides the artwork for this Actor */
  img: fields.FilePathField<foundry.abstract.ImageFilePath, foundry.abstract.ImageFilePath, false, false, true>
  /** The system data object which is defined by the system template.json model */
  system: fields.TypeDataField<TSystemSource>
  /** Default Token settings which are used for Tokens created from this Actor */
  prototypeToken: fields.EmbeddedDataField<foundry.data.PrototypeToken<BaseActor>>
  /** A Collection of Item embedded Documents */
  items: fields.EmbeddedCollectionField<documents.BaseItem<BaseActor<documents.BaseToken | null>>, TItemSource[]>
  /** A Collection of ActiveEffect embedded Documents */
  effects: fields.EmbeddedCollectionField<documents.BaseActiveEffect<BaseActor<documents.BaseToken | null>>>
  /** The _id of a Folder which contains this Actor */
  folder: fields.ForeignDocumentField<documents.BaseFolder>
  /** The numeric sort value which orders this Actor relative to its siblings */
  sort: fields.IntegerSortField
  /** An object which configures ownership of this Actor */
  ownership: fields.DocumentOwnershipField
  /** An object of optional key/value flags */
  flags: fields.DocumentFlagsField
  /** An object of creation and access information. */
  _stats: fields.DocumentStatsField<documents.ActorUUID>
}

export type ActorSource<
  TType extends string = string,
  TSystemSource extends object = object,
  TItemSource extends foundry.documents.ItemSource = foundry.documents.ItemSource,
> = fields.SourceFromSchema<ActorSchema<TType, TSystemSource, TItemSource>>
