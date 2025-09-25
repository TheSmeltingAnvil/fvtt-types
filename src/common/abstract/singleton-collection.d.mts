/**
 * This class provides a {@link foundry.utils.Collection} wrapper around a singleton embedded Document
 * so that it can be interacted with via a common interface.
 */
export default class SingletonEmbeddedCollection extends EmbeddedCollection<any> {
  constructor(name: string, parent: foundry.abstract.Document, sourceArray: object[])
  /** @inheritdoc */
  set(key: any, value: any): this
  /** @override */
  override _set(key: any, value: any): void
  /** @override */
  override _delete(key: any): void
}
import EmbeddedCollection from "./embedded-collection.mjs"
