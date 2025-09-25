/**
 * An interface for importing an adventure from a compendium pack.
 * @deprecated since v13
 */
export default class AdventureImporter extends DocumentSheet {
  /** @inheritDoc */
  static get defaultOptions(): object
  /**
   * An alias for the Adventure document
   * @type {Adventure}
   */
  adventure: Adventure
  /** @override */
  override get isEditable(): boolean
  /** @override */
  override getData(options?: object): Promise<{
    adventure: Adventure
    contents: {
      icon: string
      label: string
      count: number
    }[]
    imported: boolean
  }>
  /**
   * Handle toggling the import all checkbox.
   * @param {Event} event  The change event.
   * @protected
   */
  protected _onToggleImportAll(event: Event): void
  /**
   * Prepare a list of content types provided by this adventure.
   * @returns {{icon: string, label: string, count: number}[]}
   * @protected
   */
  protected _getContentList(): {
    icon: string
    label: string
    count: number
  }[]
  /** @override */
  override _updateObject(event: any, formData: any): Promise<void | foundry.documents.types.AdventureImportResult>
  /**
   * Mirror Adventure#import but call AdventureImporter#_importContent and AdventureImport#_prepareImportData
   * @param {object} formData
   */
  _importLegacy(formData: object): Promise<void>
  /**
   * @deprecated since v11
   * @ignore
   */
  _prepareImportData(formData: any): Promise<foundry.documents.types.AdventureImportData>
  /**
   * @deprecated since v11
   * @ignore
   */
  _importContent(
    toCreate: any,
    toUpdate: any,
    documentCount: any,
  ): Promise<foundry.documents.types.AdventureImportResult>
}
import Adventure from "../../documents/adventure.mjs"
import DocumentSheet from "../api/document-sheet-v1.mjs"
