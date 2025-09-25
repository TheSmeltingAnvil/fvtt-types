/**
 * @import Item from "@client/documents/item.mjs";
 * @import {ApplicationV1Options} from "../api/application-v1.mjs";
 * @import {DocumentSheetV1Options} from "../api/document-sheet-v1.mjs";
 */
/**
 * The Application responsible for displaying and editing a single Item document.
 * @deprecated since v13
 * @param {Item} item                       The Item instance being displayed within the sheet.
 * @param {DocumentSheetV1Options & ApplicationV1Options} [options]  Additional application configuration options.
 */
export default class ItemSheet extends DocumentSheet {
  /** @inheritdoc */
  static get defaultOptions(): object
  /** @inheritdoc */
  get title(): any
  /**
   * A convenience reference to the Item document
   * @type {Item}
   */
  get item(): Item
  /**
   * The Actor instance which owns this item. This may be null if the item is unowned.
   * @type {Actor}
   */
  get actor(): Actor
  /** @inheritdoc */
  getData(options?: object): {
    cssClass: string
    editable: any
    document: ClientDocument
    data: any
    limited: any
    options: object
    owner: any
    title: string
  }
}
import type Item from "@client/documents/item.mjs"
import DocumentSheet from "../api/document-sheet-v1.mjs"
