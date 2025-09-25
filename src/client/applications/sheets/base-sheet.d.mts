/**
 * The Application responsible for displaying a basic sheet for any Document sub-types that do not have a sheet
 * registered.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
// @ts-expect-error -- IGNORE --
export default class BaseSheet extends DocumentSheetV2 {
  /** @inheritDoc */
  static DEFAULT_OPTIONS: {
    classes: string[]
    position: {
      width: number
    }
    window: {
      contentClasses: string[]
      resizable: boolean
    }
    form: {
      submitOnChange: boolean
    }
  }
  static PARTS: {
    sheet: {
      template: string
      root: boolean
    }
  }
}
import { DocumentSheetV2 } from "../api/_module.mjs"
