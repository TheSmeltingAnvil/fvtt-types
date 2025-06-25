import { Document } from "foundry/abstract/_module.js"
import * as sheets from "foundry/applications/sheets/_module.js"
import ItemSheet from "foundry/appv1/sheets/ItemSheet.js"

import * as documents from "./_module.js"
import * as abstract from "./abstract/_module.js"

interface ClientBaseItemStatic extends Omit<typeof documents.BaseItem, "new">, abstract.ClientDocumentStatic {}

declare const ClientBaseItem: {
  new <TParent extends documents.Actor | null>(
    ...args: any
    // @ts-expect-error Should fix.
  ): documents.BaseItem<TParent> & abstract.ClientDocument<TParent>
} & ClientBaseItemStatic

type ClientBaseItem<TParent extends Actor | null> = InstanceType<typeof ClientBaseItem<TParent>>

/**
 * The client-side Item document which extends the common BaseItem model.
 *
 * @see {@link foundry.documents.collections.Items} The world-level collection of Item documents
 * @see {@link foundry.applications.sheets.ItemSheetV2} The Item configuration application
 */
declare class Item<TParent extends Actor | null = Actor | null> extends ClientBaseItem<TParent> {
  /** A convenience alias of Item#parent which is more semantically intuitive */
  get actor(): TParent

  /** Provide a thumbnail image path used to represent this document. */
  get thumbnail(): this["img"]

  /** A convenience alias of Item#isEmbedded which is preserves legacy support */
  get isOwned(): boolean

  /**
   * Return an array of the Active Effect instances which originated from this Item.
   * The returned instances are the ActiveEffect instances which exist on the Item itself.
   */
  get transferredEffects(): CollectionValue<this["effects"]>[]

  /* -------------------------------------------- */
  /*  Methods                                     */
  /* -------------------------------------------- */

  /** Prepare a data object which defines the data schema used by dice roll commands against this Item */
  getRollData(): object

  /* -------------------------------------------- */
  /*  Event Handlers                              */
  /* -------------------------------------------- */

  protected override _preCreate(
    data: this["_source"],
    options: abstract.DatabaseCreateCallbackOptions,
    user: documents.BaseUser,
  ): Promise<boolean | void>

  static override _onCreateOperation<TDocument extends Document>(
    this: ConstructorOf<TDocument>,
    items: TDocument[],
    context: foundry.abstract.types.DatabaseCreateOperation<TDocument["parent"]>,
  ): Promise<void>

  static override _onDeleteOperation(
    documents: Document[],
    operation: foundry.abstract.types.DatabaseDeleteOperation<Document | null>,
    user: documents.BaseUser,
  ): Promise<void>
}

declare interface Item<TParent extends Actor | null = Actor | null> extends ClientBaseItem<TParent> {
  get sheet(): ItemSheet<this, foundry.DocumentSheetV1Options> | sheets.ItemSheetV2<this>

  get uuid(): documents.ItemUUID
}

declare namespace Item {
  const implementation: typeof Item
}

export default Item
