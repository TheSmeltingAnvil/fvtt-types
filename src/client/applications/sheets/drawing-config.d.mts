/**
 * @import {ApplicationConfiguration, FormFooterButton} from "../_types.mjs";
 * @import {DocumentSheetConfiguration} from "../api/document-sheet.mjs";
 */
/**
 * @typedef DrawingConfigConfiguration
 * @property {boolean} [configureDefault=false] Configure the default drawing settings, instead of a specific Drawing
 */
/**
 * The Application responsible for configuring a single Drawing document within a parent Scene.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
// @ts-expect-error -- IGNORE --
export default class DrawingConfig extends DocumentSheetV2 {
  /**
   * @inheritDoc
   * @type {ApplicationConfiguration & DocumentSheetConfiguration & DrawingConfigConfiguration}
   */
  static DEFAULT_OPTIONS: ApplicationConfiguration & DocumentSheetConfiguration & DrawingConfigConfiguration
  /** @override */
  // @ts-expect-error -- IGNORE --
  static override PARTS: {
    tabs: {
      template: string
    }
    position: {
      template: string
    }
    lines: {
      template: string
    }
    fill: {
      template: string
    }
    text: {
      template: string
    }
    footer: {
      template: string
    }
  }
  /** @override */
  static override TABS: {
    sheet: {
      tabs: {
        id: string
        icon: string
      }[]
      initial: string
      labelPrefix: string
    }
  }
  /**
   * Reset the client Drawing configuration settings to their default values
   * @this {DrawingConfig}
   * @returns {Promise<void>}
   */
  static #onResetDefaults(this: DrawingConfig): Promise<void>
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
      author: any
      scaledBezierFactor: number
      drawingRoles: {
        false: string
        true: string
      }
      fillDisabled: boolean
      fontFamilies: Record<string, string>
      gridUnits: any
      userColor: any
      buttons: FormFooterButton[]
    }
  >
  /** @inheritDoc */
  _prepareTabs(group: any): Record<string, foundry.applications.types.ApplicationTab>
  /** @inheritDoc */
  _preparePartContext(partId: any, context: any, options: any): Promise<any>
  /** @inheritDoc */
  _processFormData(event: any, form: any, formData: any): object
  /** @inheritDoc */
  _processSubmitData(event: any, form: any, submitData: any, options: any): Promise<void>
  #private
}
export type DrawingConfigConfiguration = {
  /**
   * Configure the default drawing settings, instead of a specific Drawing
   */
  configureDefault?: boolean | undefined
}
import type { ApplicationConfiguration, FormFooterButton } from "../_types.mjs"
import { DocumentSheetV2 } from "../api/_module.mjs"
import type { DocumentSheetConfiguration } from "../api/document-sheet.mjs"
