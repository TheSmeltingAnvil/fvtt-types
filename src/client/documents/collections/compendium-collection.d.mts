/**
 * @import Folder from "../folder.mjs";
 * @import {ManageCompendiumResponse, WorldCompendiumConfiguration,
 *   WorldCompendiumPackConfiguration} from "@client/_types.mjs";
 * @import WorldCollection from "../abstract/world-collection.mjs";
 * @import Document from "@common/abstract/document.mjs";
 */
/**
 * A collection of Document objects contained within a specific compendium pack.
 * Each Compendium pack has its own associated instance of the CompendiumCollection class which contains its contents.
 *
 * ### Hook Events
 * - {@link hookEvents.updateCompendium}
 *
 * @template {Document} TDocument
 * @extends {DocumentCollection<TDocument>}
 * @category Collections
 *
 * @see {@link foundry.Game#packs}
 */
export default class CompendiumCollection<TDocument extends Document> extends DocumentCollection<TDocument> {
  /**
   * The amount of time that Document instances within this CompendiumCollection are held in memory.
   * Accessing the contents of the Compendium pack extends the duration of this lifetime.
   * @type {number}
   */
  static CACHE_LIFETIME_SECONDS: number
  /**
   * The named game setting which contains Compendium configurations.
   * @type {string}
   */
  static CONFIG_SETTING: string
  /**
   * The DataField definition for the configuration Setting
   * @type {foundry.data.fields.TypedObjectField}
   */
  static get CONFIG_FIELD(): foundry.data.fields.TypedObjectField
  static #CONFIG_FIELD: any
  /**
   * The cached value of the compendiumConfiguration setting.
   * @type {WorldCompendiumConfiguration}
   */
  static #config: WorldCompendiumConfiguration
  /**
   * Activate the Socket event listeners used to receive responses to compendium management events.
   * @param {Socket} socket  The active game socket.
   * @internal
   */
  static _activateSocketListeners(socket: Socket): void
  /**
   * Create a new Compendium Collection using provided metadata.
   * @param {object} metadata   The compendium metadata used to create the new pack
   * @param {object} options   Additional options which modify the Compendium creation request
   * @returns {Promise<CompendiumCollection>}
   */
  static createCompendium(metadata: object, options?: object): Promise<CompendiumCollection<any>>
  /**
   * Handle a response from the server where a compendium was created.
   * @param {ManageCompendiumResponse} response  The server response.
   * @returns {CompendiumCollection}
   */
  static #handleCreateCompendium({ result }: ManageCompendiumResponse): CompendiumCollection<any>
  /**
   * Handle a response from the server where a compendium was deleted.
   * @param {ManageCompendiumResponse} response  The server response.
   * @returns {CompendiumCollection}
   */
  static #handleDeleteCompendium({ result }: ManageCompendiumResponse): CompendiumCollection<any>
  /**
   * Handle changes to the world compendium configuration setting.
   * @param {WorldCompendiumConfiguration} config
   */
  static _onConfigure(config: WorldCompendiumConfiguration): void
  /**
   * @param {object} metadata   The compendium metadata, an object provided by game.data
   */
  constructor(metadata: object)
  /**
   * The compendium metadata which defines the compendium content and location
   * @type {object}
   */
  metadata: object
  /**
   * A subsidiary collection which contains the more minimal index of the pack
   * @type {Collection<string, object>}
   */
  index: Collection<string, object>
  /**
   * The canonical Compendium name - comprised of the originating package and the pack name
   * @type {string}
   */
  get collection(): string
  /**
   * The banner image for this Compendium pack, or the default image for the pack type if no image is set.
   * @returns {string|null|void}
   */
  get banner(): string | null | void
  /**
   * A reference to the Application class which provides an interface to interact with this compendium content.
   * @type {typeof foundry.appv1.api.Application|typeof foundry.applications.api.ApplicationV2}
   */
  applicationClass: typeof foundry.appv1.api.Application | typeof foundry.applications.api.ApplicationV2
  get folders(): CompendiumFolderCollection
  /** @override */
  // @ts-expect-error -- IGNORE --
  override get maxFolderDepth(): number
  /**
   * Get the Folder that this Compendium is displayed within
   * @returns {Folder|null}
   */
  get folder(): Folder | null
  /**
   * Assign this CompendiumCollection to be organized within a specific Folder.
   * @param {Folder|string|null} folder     The desired Folder within the World or null to clear the folder
   * @returns {Promise<void>}               A promise which resolves once the transaction is complete
   */
  setFolder(folder: Folder | string | null): Promise<void>
  /**
   * Get the sort order for this Compendium
   * @returns {number}
   */
  get sort(): number
  /** @override */
  // @ts-expect-error -- IGNORE --
  override _getVisibleTreeContents(): any
  /**
   * Access the compendium configuration data for this pack
   * @type {object}
   */
  get config(): object
  /**
   * Track whether the Compendium Collection is locked for editing
   * @type {boolean}
   */
  get locked(): boolean
  /**
   * The visibility configuration of this compendium pack.
   * @type {WorldCompendiumPackConfiguration["ownership"]}
   */
  get ownership(): WorldCompendiumPackConfiguration["ownership"]
  /**
   * Is this Compendium pack visible to the current game User?
   * @type {boolean}
   */
  get visible(): boolean
  /**
   * A convenience reference to the label which should be used as the title for the Compendium pack.
   * @type {string}
   */
  get title(): string
  /**
   * The index fields which should be loaded for this compendium pack
   * @type {Set<string>}
   */
  get indexFields(): Set<string>
  /**
   * Has this compendium pack been fully indexed?
   * @type {boolean}
   */
  get indexed(): boolean
  /** @inheritDoc */
  get(key: any, options: any): TDocument
  /**
   * Load the Compendium index and cache it as the keys and values of the Collection.
   * @param {object} [options]    Options which customize how the index is created
   * @param {string[]} [options.fields]  An array of fields to return as part of the index
   * @returns {Promise<Collection>}
   */
  getIndex({ fields }?: { fields?: string[] | undefined }): Promise<Collection>
  /**
   * Get a single Document from this Compendium by ID.
   * The document may already be locally cached, otherwise it is retrieved from the server.
   * @param {string} id               The requested Document id
   * @returns {Promise<TDocument>|undefined}     The retrieved Document instance
   */
  getDocument(id: string): Promise<TDocument> | undefined
  /**
   * Load multiple documents from the Compendium pack using a provided query object. The available query options are
   * shown below.
   * @param {object} query            A database query used to retrieve documents from the underlying database
   * @returns {Promise<TDocument[]>}   The retrieved Document instances
   *
   * @example Get Documents that match the given value only.
   * ```js
   * await pack.getDocuments({ type: "weapon" });
   * ```
   *
   * @example Get all Documents that do not have the given value.
   * ```js
   * await pack.getDocuments({ type__ne: "weapon" });
   * ```
   *
   * @example Get several Documents by their IDs.
   * ```js
   * await pack.getDocuments({ _id__in: arrayOfIds });
   * ```
   *
   * @example Get Documents by their sub-types.
   * ```js
   * await pack.getDocuments({ type__in: ["weapon", "armor"] });
   * ```
   */
  getDocuments(query?: object): Promise<TDocument[]>
  /**
   * Get the ownership level that a User has for this Compendium pack.
   * @param {documents.User} user     The user being tested
   * @returns {number}                The ownership level in CONST.DOCUMENT_OWNERSHIP_LEVELS
   */
  getUserLevel(user?: foundry.documents.User): number
  /**
   * Test whether a certain User has a requested permission level (or greater) over the Compendium pack
   * @param {documents.BaseUser} user       The User being tested
   * @param {string|number} permission      The permission level from DOCUMENT_OWNERSHIP_LEVELS to test
   * @param {object} options                Additional options involved in the permission test
   * @param {boolean} [options.exact=false]     Require the exact permission level requested?
   * @returns {boolean}                      Does the user have this permission level over the Compendium pack?
   */
  testUserPermission(
    user: foundry.documents.BaseUser,
    permission: string | number,
    {
      exact,
    }?: {
      exact?: boolean | undefined
    },
  ): boolean
  /**
   * Import a Document into this Compendium Collection.
   * @param {Document} document     The existing Document you wish to import
   * @param {object} [options]      Additional options which modify how the data is imported.
   *                                See ClientDocumentMixin#toCompendium.
   * @returns {Promise<TDocument>}   The imported Document instance
   */
  importDocument(document: Document, options?: object): Promise<TDocument>
  /**
   * Import a Folder into this Compendium Collection.
   * @param {Folder} folder                         The existing Folder you wish to import
   * @param {object} [options]                      Additional options which modify how the data is imported.
   * @param {boolean} [options.importParents=true]  Import any parent folders which are not already present in the
   *                                                Compendium.
   * @returns {Promise<void>}
   */
  importFolder(
    folder: Folder,
    {
      importParents,
      ...options
    }?: {
      importParents?: boolean | undefined
    },
  ): Promise<void>
  /**
   * Import an array of Folders into this Compendium Collection.
   * @param {Folder[]} folders                      The existing Folders you wish to import
   * @param {object} [options]                      Additional options which modify how the data is imported.
   * @param {boolean} [options.importParents=true]  Import any parent folders which are not already present in the
   *                                                Compendium.
   * @returns {Promise<void>}
   */
  importFolders(
    folders: Folder[],
    {
      importParents,
      ...options
    }?: {
      importParents?: boolean | undefined
    },
  ): Promise<void>
  /**
   * Fully import the contents of a Compendium pack into a World folder.
   * @param {object} [options={}]     Options which modify the import operation. Additional options are forwarded to
   *                                  {@link foundry.documents.abstract.WorldCollection#fromCompendium} and
   *                                  {@link foundry.abstract.Document.createDocuments}
   * @param {string|null} [options.folderId]  An existing Folder _id to use.
   * @param {string} [options.folderName]     A new Folder name to create.
   * @returns {Promise<TDocument[]>}   The imported Documents, now existing within the World
   */
  importAll({
    folderId,
    folderName,
    ...options
  }?: {
    folderId?: string | null | undefined
    folderName?: string | undefined
  }): Promise<TDocument[]>
  /**
   * Provide a dialog form that prompts the user to import the full contents of a Compendium pack into the World.
   * @param {object} [options={}] Additional options passed to the DialogV2.confirm method
   * @returns {Promise<TDocument[]|boolean|null>} A promise which resolves in the following ways: an array of imported
   *                            Documents if the "yes" button was pressed, false if the "no" button was pressed, or
   *                            null if the dialog was closed without making a choice.
   */
  importDialog(options?: object): Promise<TDocument[] | boolean | null>
  /**
   * Add a Document to the index, capturing its relevant index attributes
   * @param {TDocument} document       The document to index
   */
  indexDocument(document: TDocument): void
  /**
   * Prompt the gamemaster with a dialog to configure ownership of this Compendium pack.
   * @returns {Promise<Record<string, string>>}   The configured ownership for the pack
   */
  configureOwnershipDialog(): Promise<Record<string, string>>
  /**
   * Generate a UUID for a given primary document ID within this Compendium pack
   * @param {string} id     The document ID to generate a UUID for
   * @returns {string}      The generated UUID, in the form of "Compendium.<collection>.<documentName>.<id>"
   */
  getUuid(id: string): string
  /**
   * Assign configuration metadata settings to the compendium pack
   * @param {object} configuration  The object of compendium settings to define
   * @returns {Promise<void>}       A Promise which resolves once the setting is updated
   */
  configure(configuration?: object): Promise<void>
  /**
   * Delete an existing world-level Compendium Collection.
   * This action may only be performed for world-level packs by a Gamemaster User.
   * @returns {Promise<CompendiumCollection>}
   */
  deleteCompendium(): Promise<CompendiumCollection<any>>
  /**
   * Duplicate a compendium pack to the current World.
   * @param {string} label    A new Compendium label
   * @returns {Promise<CompendiumCollection>}
   */
  duplicateCompendium({ label }?: { label: string }): Promise<CompendiumCollection<any>>
  /**
   * Migrate a compendium pack.
   * This operation re-saves all documents within the compendium pack to disk, applying the current data model.
   * If the document type has system data, the latest system data template will also be applied to all documents.
   * @param {object} [options]
   * @param {boolean} [options.notify=true]  Display notifications
   * @returns {Promise<CompendiumCollection>}
   */
  migrate({ notify }?: { notify?: boolean | undefined }): Promise<CompendiumCollection<any>>
  /** @inheritDoc */
  updateAll(transformation: any, condition?: null, options?: object): Promise<TDocument[]>
  /** @inheritDoc */
  render(force: any, options: any): void
  /** @inheritDoc */
  _onModifyContents(action: any, documents: any, result: any, operation: any, user: any): void
  #private
}
import type {
  ManageCompendiumResponse,
  WorldCompendiumConfiguration,
  WorldCompendiumPackConfiguration,
} from "@client/_types.mjs"
import type Document from "@common/abstract/document.mjs"
import DocumentCollection from "../abstract/document-collection.mjs"
import type Folder from "../folder.mjs"
import CompendiumFolderCollection from "./compendium-folders.mjs"
