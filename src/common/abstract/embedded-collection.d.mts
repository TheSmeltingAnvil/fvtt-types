/**
 * @import DataModel from "./data.mjs";
 * @import Document from "./document.mjs";
 * @import {DatabaseAction, DatabaseOperation} from "./_types.mjs";
 * @import BaseUser from "../documents/user.mjs";
 * @import {DocumentConstructionContext} from "./_types.mjs";
 */
/**
 * An extension of the Collection.
 * Used for the specific task of containing embedded Document instances within a parent Document.
 * @template {Document} TDocument
 * @extends Collection<string, TDocument>
 */
export default class EmbeddedCollection<TDocument extends Document> extends Collection<string, TDocument> {
  /**
   * @param {string} name           The name of this collection in the parent Document.
   * @param {Document} parent       The parent Document instance to which this collection belongs.
   * @param {object[]} sourceArray  The source data array for the collection in the parent Document data.
   */
  constructor(name: string, parent: Document, sourceArray: object[])
  /**
   * The Document implementation used to construct instances within this collection.
   * @type {typeof Document}
   */
  documentClass: typeof Document
  /**
   * The Document name of Documents stored in this collection.
   * @returns {string|void}
   */
  get documentName(): string | void
  /**
   * The name of this collection in the parent Document.
   * @type {string}
   */
  name: string
  /**
   * The parent Document to which this EmbeddedCollection instance belongs.
   * @type {Document}
   */
  model: Document
  /**
   * Has this embedded collection been initialized as a one-time workflow?
   * @type {boolean}
   * @protected
   */
  protected _initialized: boolean
  /**
   * The source data array from which the embedded collection is created
   * @type {object[]}
   * @public
   */
  public _source: object[]
  /**
   * Record the set of document ids where the Document was not initialized because of invalid source data
   * @type {Set<string>}
   */
  invalidDocumentIds: Set<string>
  /**
   * This collection's contents grouped by subtype, lazily (re-)computed as needed.
   * If the document type does not support subtypes, all will be in the "base" group.
   * @type {Record<string, TDocument[]>}
   */
  get documentsByType(): Record<string, TDocument[]>
  /**
   * Initialize the EmbeddedCollection by synchronizing its Document instances with existing _source data.
   * Importantly, this method does not make any modifications to the _source array.
   * It is responsible for creating, updating, or removing Documents from the Collection.
   * @param {DocumentConstructionContext} [options]  Initialization options.
   */
  initialize(options?: DocumentConstructionContext): void
  /**
   * Initialize an embedded document and store it in the collection.
   * The document may already exist, in which case we are reinitializing it with new _source data.
   * The document may not yet exist, in which case we create a new Document instance using the provided source.
   *
   * @param {object} data                    The Document data.
   * @param {DocumentConstructionContext} [options]  Initialization options.
   * @returns {TDocument|null}               The initialized document or null if no document was initialized
   * @protected
   */
  protected _initializeDocument(data: object, options?: DocumentConstructionContext): TDocument | null
  /**
   * Instantiate a Document for inclusion in the Collection.
   * @param {object} data       The Document data.
   * @param {DocumentConstructionContext} [context]  Document creation context.
   * @returns {TDocument}
   */
  createDocument(data: object, context?: DocumentConstructionContext): TDocument
  /**
   * Log warnings or errors when a Document is found to be invalid.
   * @param {string} id                      The invalid Document's ID.
   * @param {Error} err                      The validation error.
   * @param {object} [options]               Options to configure invalid Document handling.
   * @param {boolean} [options.strict=true]  Whether to throw an error or only log a warning.
   * @protected
   */
  protected _handleInvalidDocument(
    id: string,
    err: Error,
    {
      strict,
    }?: {
      strict?: boolean | undefined
    },
  ): void
  /**
   * Get a document from the EmbeddedCollection by its ID.
   * @param {string} id                         The ID of the Embedded Document to retrieve.
   * @param {object} [options]                  Additional options to configure retrieval.
   * @param {boolean} [options.strict=false]    Throw an Error if the requested Embedded Document does not exist.
   * @param {boolean} [options.invalid=false]   Allow retrieving an invalid Embedded Document.
   * @returns {TDocument}                       The retrieved document instance, or undefined
   * @throws {Error}                            If strict is true and the Embedded Document cannot be found.
   */
  get(
    id: string,
    {
      invalid,
      strict,
    }?: {
      strict?: boolean | undefined
      invalid?: boolean | undefined
    },
  ): TDocument
  /**
   * Add a document to the collection.
   * @param {string} key                           The embedded Document ID.
   * @param {TDocument} value                      The embedded Document instance.
   * @param {object} [options]                     Additional options to the set operation.
   * @param {boolean} [options.modifySource=true]  Whether to modify the collection's source as part of the operation.
   * */
  set(
    key: string,
    value: TDocument,
    {
      modifySource,
      ...options
    }?: {
      modifySource?: boolean | undefined
    },
  ): this
  /**
   * Modify the underlying source array to include the Document.
   * @param {string} key      The Document ID key.
   * @param {Document} value  The Document.
   * @protected
   */
  protected _set(key: string, value: Document): void
  /**
   * Remove a document from the collection.
   * @param {string} key                           The embedded Document ID.
   * @param {object} [options]                     Additional options to the delete operation.
   * @param {boolean} [options.modifySource=true]  Whether to modify the collection's source as part of the operation.
   * */
  delete(
    key: string,
    {
      modifySource,
      ...options
    }?: {
      modifySource?: boolean | undefined
    },
  ): boolean
  /**
   * Remove the value from the underlying source array.
   * @param {string} key        The Document ID key.
   * @param {object} [options]  Additional options to configure deletion behavior.
   * @protected
   */
  protected _delete(key: string, options?: object): void
  /**
   * Obtain a temporary Document instance for a document id which currently has invalid source data.
   * @param {string} id                      A document ID with invalid source data.
   * @param {object} [options]               Additional options to configure retrieval.
   * @param {boolean} [options.strict=true]  Throw an Error if the requested ID is not in the set of invalid IDs for
   *                                         this collection.
   * @returns {TDocument|void}               An in-memory instance for the invalid Document
   * @throws If strict is true and the requested ID is not in the set of invalid IDs for this collection.
   */
  getInvalid(
    id: string,
    {
      strict,
    }?: {
      strict?: boolean | undefined
    },
  ): TDocument | void
  /**
   * Convert the EmbeddedCollection to an array of simple objects.
   * @param {boolean} [source=true]     Draw data for contained Documents from the underlying data source?
   * @returns {object[]}                The extracted array of primitive objects
   */
  toObject(source?: boolean): object[]
  /**
   * Follow-up actions to take when a database operation modifies Documents in this EmbeddedCollection.
   * @param {DatabaseAction} action         The database action performed
   * @param {TDocument[]} documents         The array of modified Documents
   * @param {any[]} result                  The result of the database operation
   *
   * @param {DatabaseOperation} operation   Database operation details
   * @param {BaseUser} user                 The User who performed the operation
   * @internal
   */
  _onModifyContents(
    action: DatabaseAction,
    documents: TDocument[],
    result: any[],
    operation: DatabaseOperation,
    user: BaseUser,
  ): void
  #private
}
import type BaseUser from "../documents/user.mjs"
import Collection from "../utils/collection.mjs"
import type { DatabaseAction, DatabaseOperation, DocumentConstructionContext } from "./_types.mjs"
import type Document from "./document.mjs"
