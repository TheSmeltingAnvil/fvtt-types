import Document from "./Document.js"
import EmbeddedCollection from "./EmbeddedCollection.js"

export default class EmbeddedCollectionDelta<
  TDocument extends Document<Document>,
> extends EmbeddedCollection<TDocument> {
  /**
   * @param name The name of this collection in the parent Document.
   * @param parent The parent Document instance to which this collection belongs.
   * @param sourceArray The source data array for the collection in the parent Document data.
   */
  constructor(name: string, parent: Document, sourceArray: object[])

  /** A convenience getter to return the corresponding base collection. */
  get baseCollection(): EmbeddedCollection<TDocument>

  /** A convenience getter to return the corresponding synthetic collection. */
  get syntheticCollection(): EmbeddedCollection<TDocument>

  /** */
  _delete(key: any, __namedParameters?: { restoreDelta?: boolean }): void

  /** */
  _set(key: any, value: any, __namedParameters?: { restoreDelta?: boolean }): void

  /** */
  // @ts-expect-error Should fix.
  createDocument(data: any, context?: object): Document<object, { pack: any; parent: any; parentCollection: string }>

  /**
   * @param key The embedded Document ID.
   * @parem options Additional options to the delete operation.
   */
  // @ts-expect-error Should fix.
  delete(key: any, options?: object): void

  /** */
  // @ts-expect-error Should fix.
  initialize(__namedParameters?: { full?: boolean }): void

  /**
   * Determine whether a given ID exists as a tombstone Document in the collection delta.
   * @param key The Document ID.
   */
  isTombstone(key: string): boolean

  /**
   * Determine whether a given ID is managed directly by this collection delta or inherited from the base collection.
   * @param key The Document ID.
   */
  manages(key: string): boolean

  /**
   * Restore a Document so that it is no longer managed by the collection delta and instead inherits from the base Document.
   * @param id The Document ID.
   * @returns The restored Document.
   */
  restoreDocument(id: string): Promise<Document>

  /**
   * Restore the given Documents so that they are no longer managed by the collection delta and instead inherit
   * directly from their counterparts in the base Actor.
   * @param ids The IDs of the Documents to restore.
   * @returns An array of updated Document instances.
   */
  restoreDocuments(ids: string[]): Promise<Document[]>

  /**
   * Add an item to the collection.
   * @param key The embedded Document ID.
   * @param value The embedded Document instance.
   * @param options Additional options to the set operation.
   */
  // @ts-expect-error Should fix.
  set(key: any, value: any, options?: object): void
}
