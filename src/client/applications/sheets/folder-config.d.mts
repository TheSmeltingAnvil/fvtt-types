/**
 * The Application responsible for configuring a single Folder document.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
// @ts-expect-error -- IGNORE --
export default class FolderConfig extends DocumentSheetV2 {
  static DEFAULT_OPTIONS: {
    classes: string[]
    canCreate: boolean
    window: {
      contentClasses: string[]
      icon: string
    }
    position: {
      width: number
    }
    form: {
      closeOnSubmit: boolean
    }
  }
  /** @override */
  // @ts-expect-error -- IGNORE --
  static override PARTS: {
    body: {
      template: string
    }
    footer: {
      template: string
    }
  }
  /** @inheritDoc */
  _processFormData(event: any, form: any, formData: any): object
  /** @inheritDoc */
  _processSubmitData(event: any, form: any, submitData: any, options: any): Promise<void>
}
import { DocumentSheetV2 } from "../api/_module.mjs"
