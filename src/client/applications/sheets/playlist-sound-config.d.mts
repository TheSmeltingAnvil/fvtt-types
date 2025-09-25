/**
 * The Application responsible for configuring a single PlaylistSound document within a parent Playlist.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
// @ts-expect-error -- IGNORE --
export default class PlaylistSoundConfig extends DocumentSheetV2 {
  /** @inheritDoc */
  static DEFAULT_OPTIONS: {
    classes: string[]
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
    canCreate: boolean
  }
  /** @override */
  // @ts-expect-error -- IGNORE --
  static override PARTS: {
    sheet: {
      template: string
      root: boolean
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
      lvolume: number
      channels: object
      defaultChannel: string
      milliseconds: string
      buttons: {
        type: string
        icon: string
        label: string
      }[]
    }
  >
  /** @inheritdoc */
  _processSubmitData(event: any, form: any, submitData: any, options: any): Promise<void>
}
import { DocumentSheetV2 } from "../api/_module.mjs"
