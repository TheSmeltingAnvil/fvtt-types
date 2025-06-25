import Document from "./Document.js"
import EmbeddedCollection from "./EmbeddedCollection.js"

export default class SingletonEmbeddedCollection<
  TDocument extends Document<Document>,
> extends EmbeddedCollection<TDocument> {
  /**
   * @param name The name of this collection in the parent Document.
   * @param parent The parent Document instance to which this collection belongs.
   * @param sourceArray The source data array for the collection in the parent Document data.
   */
  constructor(name: string, parent: Document, sourceArray: object[])

  /** @inheritdoc */
  override _delete(key: any): void

  /** @inheritdoc */
  override _set(key: any, value: any): void

  /** @inheritdoc */
  override set(key: any, value: any): this
}
