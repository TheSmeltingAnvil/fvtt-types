/**
 * @import {AdventureImportData, AdventureImportOptions, AdventureImportResult} from "./_types.mjs";
 */
/**
 * The client-side Adventure document which extends the common {@link foundry.documents.BaseAdventure} model.
 *
 * ### Hook Events
 * - {@link hookEvents.preImportAdventure} (emitted by {@link Adventure#import})
 * - {@link hookEvents.importAdventure} (emitted by {@link Adventure#import})
 *
 * @extends BaseAdventure
 * @mixes ClientDocumentMixin
 * @category Documents
 */
export default class Adventure extends BaseAdventure {
  /** @inheritDoc */
  static fromSource(
    source: any,
    options?: object,
  ): foundry.abstract.DataModel<object, foundry.abstract.types.DataModelConstructionContext>
  /**
   * Perform a full import workflow of this Adventure.
   * Create new and update existing documents within the World.
   * @param {AdventureImportOptions} [options]    Options which configure and customize the import process
   * @returns {Promise<AdventureImportResult>}    The import result
   */
  import(options?: AdventureImportOptions): Promise<AdventureImportResult>
  /**
   * Prepare Adventure data for import into the World.
   * @param {AdventureImportOptions} [options]  Options which configure import behavior
   * @returns {Promise<AdventureImportData>}
   */
  prepareImport(options?: AdventureImportOptions): Promise<AdventureImportData>
  /**
   * Execute an Adventure import workflow, creating and updating documents in the World.
   * @param {AdventureImportData} data          Prepared adventure data to import
   * @returns {Promise<AdventureImportResult>}  The import result
   */
  importContent({ toCreate, toUpdate, documentCount }?: AdventureImportData): Promise<AdventureImportResult>
}
import BaseAdventure from "@common/documents/adventure.mjs"
import type { AdventureImportData, AdventureImportOptions, AdventureImportResult } from "./_types.mjs"
