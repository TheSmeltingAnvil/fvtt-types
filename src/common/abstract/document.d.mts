/**
 * @import DatabaseBackend from "./backend.mjs";
 * @import BaseUser from "../documents/user.mjs";
 * @import {
 *   DatabaseCreateOperation,
 *   DatabaseGetOperation,
 *   DatabaseUpdateOperation,
 *   DatabaseDeleteOperation,
 *   DocumentCloneOptions,
 *   DocumentClassMetadata
 * } from "./_types.mjs";
 * @import {DocumentConstructionContext} from "./_types.mjs";
 * @import {DocumentOwnershipLevel, DocumentOwnershipNumber} from "../constants.mjs";
 * @import {DocumentFlags, DocumentStats} from "../data/_types.mjs";
 */
/**
 * An extension of the base DataModel which defines a Document.
 * Documents are special in that they are persisted to the database and referenced by _id.
 * @abstract
 *
 * @template {object} [DocumentData=object] Initial data from which to construct the Document
 * @template {DocumentConstructionContext} [DocumentContext=DocumentConstructionContext] Construction context options
 *
 * @property {string|null} _id                    The document identifier, unique within its Collection, or null if the
 *                                                Document has not yet been assigned an identifier
 * @property {string} [name]                      Documents typically have a human-readable name
 * @property {DataModel} [system]                 Certain document types may have a system data model which contains
 *                                                subtype-specific data defined by the game system or a module
 * @property {DocumentStats} [_stats]             Primary document types have a _stats object which provides metadata
 *                                                about their status
 * @property {DocumentFlags} flags                Documents each have an object of arbitrary flags which are used by
 *                                                systems or modules to store additional Document-specific data
 * @extends {DataModel<DocumentData, DocumentContext>}
 */
export default class Document<
  DocumentData extends object = object,
  DocumentContext extends DocumentConstructionContext = DocumentConstructionContext,
> extends DataModel<DocumentData, DocumentContext> {
  /** @override */
  static override _initializationOrder(): Generator<any[], void, unknown>
  /**
   * Default metadata which applies to each instance of this Document type.
   * @type {Readonly<DocumentClassMetadata>}
   */
  static metadata: Readonly<DocumentClassMetadata>
  /**
   * The database backend used to execute operations and handle results.
   * @type {DatabaseBackend}
   */
  static get database(): DatabaseBackend
  /**
   * Return a reference to the configured subclass of this base Document type.
   * @type {typeof Document}
   */
  static get implementation(): typeof Document
  /**
   * The base document definition that this document class extends from.
   * @type {typeof Document}
   */
  static get baseDocument(): typeof Document
  /**
   * The named collection to which this Document belongs.
   * @type {string}
   */
  static get collectionName(): string
  /**
   * The canonical name of this Document type, for example "Actor".
   * @type {string}
   */
  static get documentName(): string
  /**
   * The allowed types which may exist for this Document class.
   * @type {string[]}
   */
  static get TYPES(): string[]
  /**
   * Does this Document support additional subtypes?
   * @type {boolean}
   */
  static get hasTypeData(): boolean
  /**
   * The Embedded Document hierarchy for this Document.
   * @returns {Readonly<Record<string, EmbeddedCollectionField|EmbeddedDocumentField>>}
   */
  static get hierarchy(): Readonly<Record<string, EmbeddedCollectionField | EmbeddedDocumentField>>
  /**
   * Test whether a given User has sufficient permissions to create Documents of this type in general. This does not
   * guarantee that the User is able to create all Documents of this type, as certain document-specific requirements
   * may also be present.
   *
   * Generally speaking, this method is used to verify whether a User should be presented with the option to create
   * Documents of this type in the UI.
   *
   * @param {BaseUser} user       The User being tested
   * @returns {boolean}           Does the User have a sufficient role to create?
   */
  static canUserCreate(user: BaseUser): boolean
  /**
   * Create multiple Documents using provided input data.
   * Data is provided as an array of objects where each individual object becomes one new Document.
   *
   * @param {Array<object|Document>} data  An array of data objects or existing Documents to persist.
   * @param {Partial<Omit<DatabaseCreateOperation, "data">>} [operation={}]  Parameters of the requested creation
   *                                  operation
   * @returns {Promise<Document[]>}        An array of created Document instances
   *
   * @example Create a single Document
   * ```js
   * const data = [{name: "New Actor", type: "character", img: "path/to/profile.jpg"}];
   * const created = await Actor.implementation.createDocuments(data);
   * ```
   *
   * @example Create multiple Documents
   * ```js
   * const data = [{name: "Tim", type: "npc"], [{name: "Tom", type: "npc"}];
   * const created = await Actor.implementation.createDocuments(data);
   * ```
   *
   * @example Create multiple embedded Documents within a parent
   * ```js
   * const actor = game.actors.getName("Tim");
   * const data = [{name: "Sword", type: "weapon"}, {name: "Breastplate", type: "equipment"}];
   * const created = await Item.implementation.createDocuments(data, {parent: actor});
   * ```
   *
   * @example Create a Document within a Compendium pack
   * ```js
   * const data = [{name: "Compendium Actor", type: "character", img: "path/to/profile.jpg"}];
   * const created = await Actor.implementation.createDocuments(data, {pack: "mymodule.mypack"});
   * ```
   */
  static createDocuments(
    data?: Array<object | Document>,
    operation?: Partial<Omit<DatabaseCreateOperation, "data">>,
  ): Promise<Document[]>
  /**
   * Update multiple Document instances using provided differential data.
   * Data is provided as an array of objects where each individual object updates one existing Document.
   *
   * @param {object[]} updates          An array of differential data objects, each used to update a single Document
   * @param {Partial<Omit<DatabaseUpdateOperation, "updates">>} [operation={}] Parameters of the database update
   *                                    operation
   * @returns {Promise<Document[]>}     An array of updated Document instances
   *
   * @example Update a single Document
   * ```js
   * const updates = [{_id: "12ekjf43kj2312ds", name: "Timothy"}];
   * const updated = await Actor.implementation.updateDocuments(updates);
   * ```
   *
   * @example Update multiple Documents
   * ```js
   * const updates = [{_id: "12ekjf43kj2312ds", name: "Timothy"}, {_id: "kj549dk48k34jk34", name: "Thomas"}]};
   * const updated = await Actor.implementation.updateDocuments(updates);
   * ```
   *
   * @example Update multiple embedded Documents within a parent
   * ```js
   * const actor = game.actors.getName("Timothy");
   * const updates = [{_id: sword.id, name: "Magic Sword"}, {_id: shield.id, name: "Magic Shield"}];
   * const updated = await Item.implementation.updateDocuments(updates, {parent: actor});
   * ```
   *
   * @example Update Documents within a Compendium pack
   * ```js
   * const actor = await pack.getDocument(documentId);
   * const updated = await Actor.implementation.updateDocuments([{_id: actor.id, name: "New Name"}],
   *   {pack: "mymodule.mypack"});
   * ```
   */
  static updateDocuments(
    updates?: object[],
    operation?: Partial<Omit<DatabaseUpdateOperation, "updates">>,
  ): Promise<Document[]>
  /**
   * Delete one or multiple existing Documents using an array of provided ids.
   * Data is provided as an array of string ids for the documents to delete.
   *
   * @param {string[]} ids              An array of string ids for the documents to be deleted
   * @param {Partial<Omit<DatabaseDeleteOperation, "ids">>} [operation={}]  Parameters of the database deletion
   *                                    operation
   * @returns {Promise<Document[]>}     An array of deleted Document instances
   *
   * @example Delete a single Document
   * ```js
   * const tim = game.actors.getName("Tim");
   * const deleted = await Actor.implementation.deleteDocuments([tim.id]);
   * ```
   *
   * @example Delete multiple Documents
   * ```js
   * const tim = game.actors.getName("Tim");
   * const tom = game.actors.getName("Tom");
   * const deleted = await Actor.implementation.deleteDocuments([tim.id, tom.id]);
   * ```
   *
   * @example Delete multiple embedded Documents within a parent
   * ```js
   * const tim = game.actors.getName("Tim");
   * const sword = tim.items.getName("Sword");
   * const shield = tim.items.getName("Shield");
   * const deleted = await Item.implementation.deleteDocuments([sword.id, shield.id], parent: actor});
   * ```
   *
   * @example Delete Documents within a Compendium pack
   * ```js
   * const actor = await pack.getDocument(documentId);
   * const deleted = await Actor.implementation.deleteDocuments([actor.id], {pack: "mymodule.mypack"});
   * ```
   */
  static deleteDocuments(ids?: string[], operation?: Partial<Omit<DatabaseDeleteOperation, "ids">>): Promise<Document[]>
  /**
   * Create a new Document using provided input data, saving it to the database.
   * @see {@link Document.createDocuments}
   * @param {object|Document|(object|Document)[]} [data={}] Initial data used to create this Document, or a Document
   *                                                        instance to persist.
   * @param {Partial<Omit<DatabaseCreateOperation, "data">>} [operation={}]  Parameters of the creation operation
   * @returns {Promise<Document | Document[] | undefined>}        The created Document instance(s)
   *
   * @example Create a World-level Item
   * ```js
   * const data = [{name: "Special Sword", type: "weapon"}];
   * const created = await Item.implementation.create(data);
   * ```
   *
   * @example Create an Actor-owned Item
   * ```js
   * const data = [{name: "Special Sword", type: "weapon"}];
   * const actor = game.actors.getName("My Hero");
   * const created = await Item.implementation.create(data, {parent: actor});
   * ```
   *
   * @example Create an Item in a Compendium pack
   * ```js
   * const data = [{name: "Special Sword", type: "weapon"}];
   * const created = await Item.implementation.create(data, {pack: "mymodule.mypack"});
   * ```
   */
  static create(
    data?: object | Document | (object | Document)[],
    operation?: Partial<Omit<DatabaseCreateOperation, "data">>,
  ): Promise<Document | Document[] | undefined>
  /**
   * Get a World-level Document of this type by its id.
   * @param {string} documentId         The Document ID
   * @param {DatabaseGetOperation} [operation={}] Parameters of the get operation
   * @returns {Document|null}  The retrieved Document, or null
   */
  static get(documentId: string, operation?: DatabaseGetOperation): Document | null
  /**
   * A compatibility method that returns the appropriate name of an embedded collection within this Document.
   * @param {string} name    An existing collection name or a document name.
   * @returns {string|null}  The provided collection name if it exists, the first available collection for the
   *                         document name provided, or null if no appropriate embedded collection could be found.
   * @example Passing an existing collection name.
   * ```js
   * Actor.implementation.getCollectionName("items");
   * // returns "items"
   * ```
   *
   * @example Passing a document name.
   * ```js
   * Actor.implementation.getCollectionName("Item");
   * // returns "items"
   * ```
   */
  static getCollectionName(name: string): string | null
  /**
   * Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
   * occur for the client which requested the operation.
   *
   * This batch-wise workflow occurs after individual {@link _preCreate} workflows and provides a final pre-flight check
   * before a database operation occurs.
   *
   * Modifications to pending documents must mutate the documents array or alter individual document instances using
   * {@link updateSource}.
   *
   * @param {Document[]} documents                Pending document instances to be created
   * @param {DatabaseCreateOperation} operation   Parameters of the database creation operation
   * @param {BaseUser} user                       The User requesting the creation operation
   * @returns {Promise<boolean|void>}             Return false to cancel the creation operation entirely
   * @protected
   */
  protected static _preCreateOperation(
    documents: Document[],
    operation: DatabaseCreateOperation,
    user: BaseUser,
  ): Promise<boolean | void>
  /**
   * Post-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
   * for all connected clients.
   *
   * This batch-wise workflow occurs after individual {@link _onCreate} workflows.
   *
   * @param {Document[]} documents                The Document instances which were created
   * @param {DatabaseCreateOperation} operation   Parameters of the database creation operation
   * @param {BaseUser} user                       The User who performed the creation operation
   * @returns {Promise<void>}
   * @protected
   */
  protected static _onCreateOperation(
    documents: Document[],
    operation: DatabaseCreateOperation,
    user: BaseUser,
  ): Promise<void>
  /**
   * Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
   * occur for the client which requested the operation.
   *
   * This batch-wise workflow occurs after individual {@link _preUpdate} workflows and provides a final pre-flight check
   * before a database operation occurs.
   *
   * Modifications to the requested updates are performed by mutating the data array of the operation.
   *
   * @param {Document[]} documents                Document instances to be updated
   * @param {DatabaseUpdateOperation} operation   Parameters of the database update operation
   * @param {BaseUser} user                       The User requesting the update operation
   * @returns {Promise<boolean|void>}             Return false to cancel the update operation entirely
   * @protected
   */
  protected static _preUpdateOperation(
    documents: Document[],
    operation: DatabaseUpdateOperation,
    user: BaseUser,
  ): Promise<boolean | void>
  /**
   * Post-process an update operation, reacting to database changes which have occurred. Post-operation events occur
   * for all connected clients.
   *
   * This batch-wise workflow occurs after individual {@link _onUpdate} workflows.
   *
   * @param {Document[]} documents                The Document instances which were updated
   * @param {DatabaseUpdateOperation} operation   Parameters of the database update operation
   * @param {BaseUser} user                       The User who performed the update operation
   * @returns {Promise<void>}
   * @protected
   */
  protected static _onUpdateOperation(
    documents: Document[],
    operation: DatabaseUpdateOperation,
    user: BaseUser,
  ): Promise<void>
  /**
   * Pre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
   * occur for the client which requested the operation.
   *
   * This batch-wise workflow occurs after individual {@link _preDelete} workflows and provides a final pre-flight check
   * before a database operation occurs.
   *
   * Modifications to the requested deletions are performed by mutating the operation object.
   * {@link updateSource}.
   *
   * @param {Document[]} documents                Document instances to be deleted
   * @param {DatabaseDeleteOperation} operation   Parameters of the database update operation
   * @param {BaseUser} user                       The User requesting the deletion operation
   * @returns {Promise<boolean|void>}             Return false to cancel the deletion operation entirely
   * @protected
   */
  protected static _preDeleteOperation(
    documents: Document[],
    operation: DatabaseDeleteOperation,
    user: BaseUser,
  ): Promise<boolean | void>
  /**
   * Post-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
   * for all connected clients.
   *
   * This batch-wise workflow occurs after individual {@link _onDelete} workflows.
   *
   * @param {Document[]} documents                The Document instances which were deleted
   * @param {DatabaseDeleteOperation} operation   Parameters of the database deletion operation
   * @param {BaseUser} user                       The User who performed the deletion operation
   * @returns {Promise<void>}
   * @protected
   */
  protected static _onDeleteOperation(
    documents: Document[],
    operation: DatabaseDeleteOperation,
    user: BaseUser,
  ): Promise<void>
  /**
   * A reusable helper for adding migration shims.
   * @param {object} data                       The data object being shimmed
   * @param {{[oldKey: string]: string}} shims  The mapping of old keys to new keys
   * @param {object} [options]                  Options passed to {@link foundry.utils.logCompatibilityWarning}
   * @param {string} [options.warning]          The deprecation message
   * @param {any} [options.value]               The value of the shim
   * @internal
   */
  static _addDataFieldShims(
    data: object,
    shims: {
      [oldKey: string]: string
    },
    options?: {
      warning?: string | undefined
      value?: any
    },
  ): void
  /**
   * A reusable helper for adding a migration shim
   * The value of the data can be transformed during the migration by an optional application function.
   * @param {object} data               The data object being shimmed
   * @param {string} oldKey             The old field name
   * @param {string} newKey             The new field name
   * @param {object} [options]          Options passed to {@link foundry.utils.logCompatibilityWarning}
   * @param {string} [options.warning]  The deprecation message
   * @param {any} [options.value]       The value of the shim
   * @internal
   */
  static _addDataFieldShim(
    data: object,
    oldKey: string,
    newKey: string,
    options?: {
      warning?: string | undefined
      value?: any
    },
  ): void
  /**
   * Define a simple migration from one field name to another.
   * The value of the data can be transformed during the migration by an optional application function.
   * @param {object} data     The data object being migrated
   * @param {string} oldKey   The old field name
   * @param {string} newKey   The new field name
   * @param {(data: object) => any} [apply]  An application function, otherwise the old value is applied
   * @returns {boolean}       Whether a migration was applied.
   * @internal
   */
  static _addDataFieldMigration(data: object, oldKey: string, newKey: string, apply?: (data: object) => any): boolean
  /**
   * Log a compatbility warning for the data field migration.
   * @param {string} oldKey       The old field name
   * @param {string} newKey       The new field name
   * @param {object} [options]    Options passed to {@link foundry.utils.logCompatibilityWarning}
   * @internal
   */
  static _logDataFieldMigration(oldKey: string, newKey: string, options?: object): void
  /**
   * @callback RecursiveFieldClearCallback
   * @param {object} data       The (partial) Document data.
   * @param {string} fieldName  The name of the field to clear.
   */
  /**
   * Clear the fields from the given Document data recursively.
   * @param {object} data                                     The (partial) Document data
   * @param {string[]} fieldNames                             The fields that are cleared
   * @param {object} [options]
   * @param {RecursiveFieldClearCallback} [options.callback]  A callback that is invoked on each field in order to clear
   *                                                          it.
   * @internal
   */
  static _clearFieldsRecursively(
    data: object,
    fieldNames: string[],
    options?: {
      callback?: ((data: object, fieldName: string) => any) | undefined
    },
  ): void
  /**
   * @deprecated since v12
   * @ignore
   */
  static _onCreateDocuments(documents: any, operation: any): Promise<void>
  /**
   * @deprecated since v12
   * @ignore
   */
  static _onUpdateDocuments(documents: any, operation: any): Promise<void>
  /**
   * @deprecated since v12
   * @ignore
   */
  static _onDeleteDocuments(documents: any, operation: any): Promise<void>
  constructor(data?: Partial<DocumentData> | undefined, { parent, strict, ...options }?: DocumentContext | undefined)
  /** @override */
  override _configure({
    pack,
    parentCollection,
  }?: {
    pack?: null | undefined
    parentCollection?: null | undefined
  }): void
  get collectionName(): any
  get documentName(): any
  /**
   * Identify the collection in a parent Document that this Document belongs to, if any.
   * @param {string|null} [parentCollection]  An explicitly provided parent collection name.
   * @returns {string|null}
   * @internal
   */
  _getParentCollection(parentCollection?: string | null): string | null
  /**
   * The canonical identifier for this Document.
   * @type {string|null}
   */
  get id(): string | null
  /**
   * A reference to the Compendium Collection containing this Document, if any, and otherwise null.
   * @returns {CompendiumCollection|null}
   * @abstract
   */
  get compendium(): CompendiumCollection | null
  /**
   * Is this document embedded within a parent document?
   * @returns {boolean}
   */
  get isEmbedded(): boolean
  /**
   * Is this document in a compendium?
   * @returns {boolean}
   */
  get inCompendium(): boolean
  /**
   * A Universally Unique Identifier (uuid) for this Document instance.
   * @type {string}
   */
  get uuid(): string
  /**
   * Get the explicit permission level that a User has over this Document, a value in CONST.DOCUMENT_OWNERSHIP_LEVELS.
   * Compendium content ignores the ownership field in favor of User role-based ownership. Otherwise, Documents use
   * granular per-User ownership definitions and Embedded Documents defer to their parent ownership.
   *
   * This method returns the value recorded in Document ownership, regardless of the User's role, for example a
   * GAMEMASTER user might still return a result of NONE if they are not explicitly denoted as having a level.
   *
   * To test whether a user has a certain capability over the document, testUserPermission should be used.
   *
   * @param {BaseUser} [user=game.user] The User being tested
   * @returns {DocumentOwnershipNumber} A numeric permission level from {@link CONST.DOCUMENT_OWNERSHIP_LEVELS}
   */
  getUserLevel(user?: BaseUser): DocumentOwnershipNumber
  /**
   * Test whether a certain User has a requested permission level (or greater) over the Document
   * @param {BaseUser} user                 The User being tested
   * @param {DocumentOwnershipLevel} permission The permission level from DOCUMENT_OWNERSHIP_LEVELS to test
   * @param {object} options                Additional options involved in the permission test
   * @param {boolean} [options.exact=false] Require the exact permission level requested?
   * @returns {boolean}                     Does the user have this permission level over the Document?
   */
  testUserPermission(
    user: BaseUser,
    permission: DocumentOwnershipLevel,
    {
      exact,
    }?: {
      exact?: boolean | undefined
    },
  ): boolean
  /**
   * Test whether a given User has permission to perform some action on this Document
   * @param {BaseUser} user             The User attempting modification
   * @param {string} action             The attempted action
   * @param {object} [data]             Data involved in the attempted action
   * @returns {boolean}                 Does the User have permission?
   */
  canUserModify(user: BaseUser, action: string, data?: object): boolean
  /**
   * Clone a document, creating a new document by combining current data with provided overrides.
   * The cloned document is ephemeral and not yet saved to the database.
   * @param {object} [data={}]    Additional data which overrides current document data at the time of creation
   * @param {DocumentConstructionContext & DocumentCloneOptions} [context]
   *                                          Additional context options passed to the create method
   * @returns {Document|Promise<Document>}    The cloned Document instance
   */
  clone(data?: object, context?: DocumentConstructionContext & DocumentCloneOptions): Document | Promise<Document>
  /**
   * For Documents which include game system data, migrate the system data object to conform to its latest data model.
   * The data model is defined by the template.json specification included by the game system.
   * @returns {object}              The migrated system data object
   */
  migrateSystemData(): object
  /** @inheritDoc */
  toObject(source?: boolean): any
  /**
   * Update this Document using incremental data, saving it to the database.
   * @see {@link Document.updateDocuments}
   * @param {object} [data={}]          Differential update data which modifies the existing values of this document
   * @param {Partial<Omit<DatabaseUpdateOperation, "updates">>} [operation={}]  Parameters of the update operation
   * @returns {Promise<Document|undefined>}       The updated Document instance, or undefined not updated
   */
  update(data?: object, operation?: Partial<Omit<DatabaseUpdateOperation, "updates">>): Promise<Document | undefined>
  /**
   * Delete this Document, removing it from the database.
   * @see {@link Document.deleteDocuments}
   * @param {Partial<Omit<DatabaseDeleteOperation, "ids">>} [operation={}]  Parameters of the deletion operation
   * @returns {Promise<Document|undefined>}       The deleted Document instance, or undefined if not deleted
   */
  delete(operation?: Partial<Omit<DatabaseDeleteOperation, "ids">>): Promise<Document | undefined>
  /**
   * Obtain a reference to the Array of source data within the data object for a certain embedded Document name
   * @param {string} embeddedName   The name of the embedded Document type
   * @returns {DocumentCollection}  The Collection instance of embedded Documents of the requested type
   */
  getEmbeddedCollection(embeddedName: string): DocumentCollection
  /**
   * Get an embedded document by its id from a named collection in the parent document.
   * @param {string} embeddedName              The name of the embedded Document type
   * @param {string} id                        The id of the child document to retrieve
   * @param {object} [options]                 Additional options which modify how embedded documents are retrieved
   * @param {boolean} [options.strict=false]   Throw an Error if the requested id does not exist. See Collection#get
   * @param {boolean} [options.invalid=false]  Allow retrieving an invalid Embedded Document.
   * @returns {Document}                       The retrieved embedded Document instance, or undefined
   * @throws If the embedded collection does not exist, or if strict is true and the Embedded Document could not be
   *         found.
   */
  getEmbeddedDocument(
    embeddedName: string,
    id: string,
    {
      invalid,
      strict,
    }?: {
      strict?: boolean | undefined
      invalid?: boolean | undefined
    },
  ): Document
  /**
   * Create multiple embedded Document instances within this parent Document using provided input data.
   * @see {@link Document.createDocuments}
   * @param {string} embeddedName                     The name of the embedded Document type
   * @param {object[]} data                           An array of data objects used to create multiple documents
   * @param {DatabaseCreateOperation} [operation={}]  Parameters of the database creation workflow
   * @returns {Promise<Document[]>}                   An array of created Document instances
   */
  createEmbeddedDocuments(
    embeddedName: string,
    data?: object[],
    operation?: DatabaseCreateOperation,
  ): Promise<Document[]>
  /**
   * Update multiple embedded Document instances within a parent Document using provided differential data.
   * @see {@link Document.updateDocuments}
   * @param {string} embeddedName                     The name of the embedded Document type
   * @param {object[]} updates                        An array of differential data objects, each used to update a
   *                                                  single Document
   * @param {DatabaseUpdateOperation} [operation={}]  Parameters of the database update workflow
   * @returns {Promise<Document[]>}                   An array of updated Document instances
   */
  updateEmbeddedDocuments(
    embeddedName: string,
    updates?: object[],
    operation?: DatabaseUpdateOperation,
  ): Promise<Document[]>
  /**
   * Delete multiple embedded Document instances within a parent Document using provided string ids.
   * @see {@link Document.deleteDocuments}
   * @param {string} embeddedName                     The name of the embedded Document type
   * @param {string[]} ids                            An array of string ids for each Document to be deleted
   * @param {DatabaseDeleteOperation} [operation={}]  Parameters of the database deletion workflow
   * @returns {Promise<Document[]>}                   An array of deleted Document instances
   */
  deleteEmbeddedDocuments(embeddedName: string, ids: string[], operation?: DatabaseDeleteOperation): Promise<Document[]>
  /**
   * Iterate over all embedded Documents that are hierarchical children of this Document.
   * @param {string} [_parentPath]                      A parent field path already traversed
   * @yields {[string, Document]}
   */
  traverseEmbeddedDocuments(_parentPath?: string): Generator<any, void, any>
  /**
   * Get the value of a "flag" for this document
   * See the setFlag method for more details on flags
   *
   * @param {string} scope        The flag scope which namespaces the key
   * @param {string} key          The flag key
   * @returns {*}                 The flag value
   */
  getFlag(scope: string, key: string): any
  /**
   * Assign a "flag" to this document.
   * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
   * the core software, game systems, or user-created modules.
   *
   * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
   *
   * Flags set by the core software use the "core" scope.
   * Flags set by game systems or modules should use the canonical name attribute for the module
   * Flags set by an individual world should "world" as the scope.
   *
   * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
   *
   * @param {string} scope        The flag scope which namespaces the key
   * @param {string} key          The flag key
   * @param {*} value             The flag value
   * @returns {Promise<Document>} A Promise resolving to the updated document
   */
  setFlag(scope: string, key: string, value: any): Promise<Document>
  /**
   * Remove a flag assigned to the document
   * @param {string} scope        The flag scope which namespaces the key
   * @param {string} key          The flag key
   * @returns {Promise<Document>} The updated document instance
   */
  unsetFlag(scope: string, key: string): Promise<Document>
  /**
   * Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
   * which requested the operation.
   *
   * Modifications to the pending Document instance must be performed using {@link updateSource}.
   *
   * @param {object} data               The initial data object provided to the document creation request
   * @param {object} options            Additional options which modify the creation request
   * @param {BaseUser} user             The User requesting the document creation
   * @returns {Promise<boolean|void>}   Return false to exclude this Document from the creation operation
   * @protected
   */
  protected _preCreate(data: object, options: object, user: BaseUser): Promise<boolean | void>
  /**
   * Post-process a creation operation for a single Document instance. Post-operation events occur for all connected
   * clients.
   *
   * @param {object} data                         The initial data object provided to the document creation request
   * @param {object} options                      Additional options which modify the creation request
   * @param {string} userId                       The id of the User requesting the document update
   * @protected
   */
  protected _onCreate(data: object, options: object, userId: string): void
  /**
   * Pre-process an update operation for a single Document instance. Pre-operation events only occur for the client
   * which requested the operation.
   *
   * @param {object} changes            The candidate changes to the Document
   * @param {object} options            Additional options which modify the update request
   * @param {BaseUser} user             The User requesting the document update
   * @returns {Promise<boolean|void>}   A return value of false indicates the update operation should be cancelled.
   * @protected
   */
  protected _preUpdate(changes: object, options: object, user: BaseUser): Promise<boolean | void>
  /**
   * Post-process an update operation for a single Document instance. Post-operation events occur for all connected
   * clients.
   *
   * @param {object} changed            The differential data that was changed relative to the documents prior values
   * @param {object} options            Additional options which modify the update request
   * @param {string} userId             The id of the User requesting the document update
   * @protected
   */
  protected _onUpdate(changed: object, options: object, userId: string): void
  /**
   * Pre-process a deletion operation for a single Document instance. Pre-operation events only occur for the client
   * which requested the operation.
   *
   * @param {object} options            Additional options which modify the deletion request
   * @param {BaseUser} user             The User requesting the document deletion
   * @returns {Promise<boolean|void>}   A return value of false indicates the deletion operation should be cancelled.
   * @protected
   */
  protected _preDelete(options: object, user: BaseUser): Promise<boolean | void>
  /**
   * Post-process a deletion operation for a single Document instance. Post-operation events occur for all connected
   * clients.
   *
   * @param {object} options            Additional options which modify the deletion request
   * @param {string} userId             The id of the User requesting the document update
   * @protected
   */
  protected _onDelete(options: object, userId: string): void
}
import type { DocumentOwnershipLevel, DocumentOwnershipNumber } from "../constants.mjs"
import type BaseUser from "../documents/user.mjs"
import type {
  DatabaseCreateOperation,
  DatabaseDeleteOperation,
  DatabaseGetOperation,
  DatabaseUpdateOperation,
  DocumentClassMetadata,
  DocumentCloneOptions,
  DocumentConstructionContext,
} from "./_types.mjs"
import type DatabaseBackend from "./backend.mjs"
import DataModel from "./data.mjs"
