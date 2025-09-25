/**
 * @import WorldCollection from "./abstract/world-collection.mjs";
 * @import Collection from "@common/utils/collection.mjs";
 * @import CompendiumCollection from "./collections/compendium-collection.mjs";
 * @import {FolderChildNode} from "./_types.mjs";
 */
/**
 * The client-side Folder document which extends the common BaseFolder model.
 * @extends BaseFolder
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.collections.Folders}: The world-level collection of Folder documents
 * @see {@link foundry.applications.sheets.FolderConfig}: The Folder configuration application
 */
export default class Folder extends BaseFolder {
  /** @override */
  static override createDialog(data?: object, createOptions?: object, dialogOptions?: object): Promise<any>
  /**
   * The depth of this folder in its sidebar tree
   * @type {number}
   */
  depth: number
  /**
   * An array of nodes representing the children of this one. This differs from the results of
   * {@link Folder.getSubfolders}, which reports the subset of child Folders displayed to the current User in the UI.
   * @type {FolderChildNode[]}
   */
  children: FolderChildNode[]
  /**
   * Return whether the folder is displayed in the sidebar to the current User.
   * @type {boolean}
   */
  displayed: boolean
  set contents(value: (ClientDocument | object)[])
  /**
   * The array of the Document instances which are contained within this Folder,
   * unless it's a Folder inside a Compendium pack, in which case it's the array
   * of objects inside the index of the pack that are contained in this Folder.
   * @type {(ClientDocument|object)[]}
   */
  get contents(): (ClientDocument | object)[]
  /**
   * The reference to the Document type which is contained within this Folder.
   * @type {Function}
   */
  get documentClass(): Function
  /**
   * The reference to the WorldCollection instance which provides Documents to this Folder,
   * unless it's a Folder inside a Compendium pack, in which case it's the index of the pack.
   * A world Folder containing CompendiumCollections will have neither.
   * @type {WorldCollection|Collection|undefined}
   */
  get documentCollection(): WorldCollection<any> | Collection<any, any> | undefined
  /**
   * Return whether the folder is currently expanded within the sidebar interface.
   * @type {boolean}
   */
  get expanded(): boolean
  /**
   * Return the list of ancestors of this folder, starting with the parent.
   * @type {Folder[]}
   */
  get ancestors(): Folder[]
  /** @inheritDoc */
  _preCreate(data: any, options: any, user: any): Promise<boolean | void>
  /**
   * Export all Documents contained in this Folder to a given Compendium pack.
   * Optionally update existing Documents within the Pack by name, otherwise append all new entries.
   * @param {CompendiumCollection} pack       A Compendium pack to which the documents will be exported
   * @param {object} [options]                Additional options which customize how content is exported.
   *                                          See ClientDocumentMixin#toCompendium.
   * @param {boolean} [options.updateByName=false]    Update existing entries in the Compendium pack, matching by name
   * @param {boolean} [options.keepId=false]          Retain the original _id attribute when updating an document
   * @param {boolean} [options.keepFolders=false]     Retain the existing Folder structure
   * @param {string} [options.folder]                 A target folder id to which the documents will be exported
   * @returns {Promise<CompendiumCollection>}  The updated Compendium Collection instance
   */
  exportToCompendium(
    pack: CompendiumCollection<any>,
    options?: {
      updateByName?: boolean | undefined
      keepId?: boolean | undefined
      keepFolders?: boolean | undefined
      folder?: string | undefined
    },
  ): Promise<CompendiumCollection<any>>
  /**
   * Provide a dialog form that allows for exporting the contents of a Folder into an eligible Compendium pack.
   * @param {string|null} pack                      A pack ID to set as the default choice in the select input
   * @param {object} [options]                      Additional options which customize how content is exported
   * @param {boolean} [options.merge=true]          Update existing entries in the Compendium pack, matching by name
   * @param {boolean} [options.keepId=true]         Retain the original _id attribute when updating an document
   * @param {boolean} [options.keepFolders=true]    Retain the existing Folder structure
   * @returns {Promise<void>}    A Promise which resolves or rejects once the dialog has been submitted or closed
   */
  exportDialog(
    pack: string | null,
    options?: {
      merge?: boolean | undefined
      keepId?: boolean | undefined
      keepFolders?: boolean | undefined
    },
  ): Promise<void>
  /**
   * Get the Folder documents which are sub-folders of the current folder, either direct children or recursively.
   * @param {boolean} [recursive=false] Identify child folders recursively, if false only direct children are returned
   * @returns {Folder[]}  An array of Folder documents which are subfolders of this one
   */
  getSubfolders(recursive?: boolean): Folder[]
  /**
   * Get the Folder documents which are parent folders of the current folder or any if its parents.
   * @returns {Folder[]}    An array of Folder documents which are parent folders of this one
   */
  getParentFolders(): Folder[]
  #private
}
import BaseFolder from "@common/documents/folder.mjs"
import type Collection from "@common/utils/collection.mjs"
import type { FolderChildNode } from "./_types.mjs"
import type WorldCollection from "./abstract/world-collection.mjs"
import type CompendiumCollection from "./collections/compendium-collection.mjs"
