/**
 * @import {FormFooterButton} from "../_types.mjs";
 */
/**
 * The Application responsible for configuring a single Playlist document
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
// @ts-expect-error -- IGNORE --
export default class PlaylistConfig extends DocumentSheetV2 {
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
  /** @override */
  override _prepareContext(options: any): Promise<
    foundry.applications.types.ApplicationRenderContext & {
      document: ClientDocument
      source: any
      fields: any
      editable: boolean
      user: foundry.documents.User | null
      rootId: string
    } & {
      modes: object
      sortModes: object
      channels: object
      milliseconds: string
      buttons: {
        type: string
        icon: string
        label: string
      }[]
    }
  >
}
import { DocumentSheetV2 } from "../api/_module.mjs"
