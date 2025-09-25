/**
 * The Application responsible for configuring a single Note document within a parent Scene.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
// @ts-expect-error -- IGNORE --
export default class NoteConfig extends DocumentSheetV2 {
  /** @inheritDoc */
  static DEFAULT_OPTIONS: {
    classes: string[]
    canCreate: boolean
    position: {
      width: number
    }
    window: {
      contentClasses: string[]
      icon: string
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
  _prepareContext(options: any): Promise<
    foundry.applications.types.ApplicationRenderContext & {
      document: ClientDocument
      source: any
      fields: any
      editable: boolean
      user: foundry.documents.User | null
      rootId: string
    } & {
      entries: {
        value: string | null
        label: any
      }[]
      entry: foundry.documents.JournalEntry
      pages: Record<string, string>
      global: any
      icons: Record<string, string>
      icon: {
        selected: string
        custom: string
      }
      fontFamilies: Record<string, string>
      textAnchors: object
      gridUnits: any
      buttons: {
        type: string
        icon: string
        label: string
      }[]
    }
  >
  /**
   * @param {Event} event
   * @override
   */
  override _onChangeForm(_formConfig: any, event: Event): void
  /** @inheritDoc */
  _processFormData(event: any, form: any, formData: any): object
  #private
}
import { DocumentSheetV2 } from "../api/_module.mjs"
