/**
 * @import {Item, Actor} from "../../documents/_module.mjs";
 */
/**
 * A base class for providing Item Sheet behavior using ApplicationV2.
 */
// @ts-expect-error -- IGNORE --
export default class ItemSheetV2 extends DocumentSheetV2 {
  /** @inheritDoc */
  static DEFAULT_OPTIONS: {
    position: {
      width: number
    }
  }
  /**
   * The Item document managed by this sheet.
   * @type {Item}
   */
  get item(): Item
  /**
   * The Actor instance which owns this Item, if any.
   * @type {Actor|null}
   */
  get actor(): Actor | null
}
import type { Actor, Item } from "../../documents/_module.mjs"
import DocumentSheetV2 from "../api/document-sheet.mjs"
