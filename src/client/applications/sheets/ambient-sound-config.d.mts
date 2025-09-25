/**
 * The AmbientSound configuration application.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
// @ts-expect-error -- IGNORE --
export default class AmbientSoundConfig extends DocumentSheetV2 {
  /** @inheritDoc */
  static DEFAULT_OPTIONS: {
    classes: string[]
    window: {
      contentClasses: string[]
    }
    position: {
      width: number
    }
    form: {
      closeOnSubmit: boolean
    }
    canCreate: boolean
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
      sound: ClientDocument
      gridUnits: any
      soundEffects: Record<
        string,
        {
          label: string
          effectClass: typeof BiquadFilterNode | typeof ConvolverNode
        }
      >
      buttons: {
        type: string
        icon: string
        label: string
      }[]
    }
  >
  #private
}
import DocumentSheetV2 from "../api/document-sheet.mjs"
