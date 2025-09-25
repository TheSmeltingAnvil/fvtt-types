/** @import Folder from "../folder.mjs"; */
/**
 * The singleton collection of Folder documents which exist within the active World.
 * This Collection is accessible within the Game object as game.folders.
 * @extends {WorldCollection<Folder>}
 * @category Collections
 *
 * @see {@link foundry.documents.Folder}: The Folder document
 */
export default class Folders extends WorldCollection<Folder> {
  constructor(data?: object[])
  /**
   * Track which Folders are currently expanded in the UI
   * @type {Record<string, boolean>}
   * @internal
   */
  _expanded: Record<string, boolean>
  /** @override */
  override _onModifyContents(action: any, documents: any, result: any, operation: any, user: any): void
  /** @override */
  override render(force: any, options?: object): void
  #private
}
import WorldCollection from "../abstract/world-collection.mjs"
import type Folder from "../folder.mjs"
