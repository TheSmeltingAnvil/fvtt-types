/**
 * @import { DataModelUpdateOptions } from "./_types.mjs";
 */
/**
 * An embedded collection delta contains delta source objects that can be compared against other objects inside a base
 * embedded collection, and generate new embedded Documents by combining them.
 * @template {Document} TDocument
 * @extends EmbeddedCollection<string, TDocument>
 */
export default class EmbeddedCollectionDelta<TDocument extends Document> extends EmbeddedCollection<string> {
  constructor(name: string, parent: foundry.abstract.Document, sourceArray: object[])
  /**
   * A convenience getter to return the corresponding base collection.
   * @type {EmbeddedCollection}
   */
  get baseCollection(): EmbeddedCollection<any>
  /**
   * A convenience getter to return the corresponding synthetic collection.
   * @type {EmbeddedCollection}
   */
  get syntheticCollection(): EmbeddedCollection<any>
  /**
   * Determine whether a given ID is managed directly by this collection delta or inherited from the base collection.
   * @param {string} key  The Document ID.
   * @returns {boolean}
   */
  manages(key: string): boolean
  /**
   * Determine whether a given ID exists as a tombstone Document in the collection delta.
   * @param {string} key  The Document ID.
   * @returns {boolean}
   */
  isTombstone(key: string): boolean
  /** @override */
  override initialize({ full, ...options }?: { full?: boolean | undefined }): void
  /** @override */
  override createDocument(
    data: any,
    context?: object,
  ): foundry.abstract.Document<
    object,
    {
      parent: any
      parentCollection: string
      pack: any
    }
  >
  /**
   * Restore a Document so that it is no longer managed by the collection delta and instead inherits from the base
   * Document.
   * @param {string} id            The Document ID.
   * @returns {Promise<TDocument>} The restored Document.
   */
  restoreDocument(id: string): Promise<TDocument>
  /**
   * Restore the given Documents so that they are no longer managed by the collection delta and instead inherit directly
   * from their counterparts in the base Actor.
   * @param {string[]} ids           The IDs of the Documents to restore.
   * @returns {Promise<TDocument[]>} An array of updated Document instances.
   */
  restoreDocuments(ids: string[]): Promise<TDocument[]>
  /**
   * Prepare changes to this delta collection.
   * @param {object[]} changes                Candidate source changes.
   * @param {DataModelUpdateOptions} options  Options which determine how the new data is merged.
   * @internal
   */
  _prepareDeltaUpdate(changes: object[], options: DataModelUpdateOptions): void
  /** @inheritdoc */
  set(key: any, value: any, options?: object): void
  /** @override */
  override _set(
    key: any,
    value: any,
    {
      restoreDelta,
    }?: {
      restoreDelta?: boolean | undefined
    },
  ): void
  /** @inheritdoc */
  delete(key: any, options?: object): void
  /** @override */
  override _delete(
    key: any,
    {
      restoreDelta,
    }?: {
      restoreDelta?: boolean | undefined
    },
  ): void
  #private
}
import type { DataModelUpdateOptions } from "./_types.mjs"
import EmbeddedCollection from "./embedded-collection.mjs"
