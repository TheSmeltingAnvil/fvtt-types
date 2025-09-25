/**
 * @import {AdventureImportData, AdventureImportOptions, AdventureImportResult} from "@client/documents/_types.mjs";
 * @import {ApplicationFormConfiguration} from "../_types.mjs";
 * @import {SchemaField} from "@common/data/fields.mjs";
 * @import Adventure from "@client/documents/adventure.mjs";
 */
/**
 * This Document Sheet is responsible for rendering an Adventure and providing an interface to import it.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplicationMixin
 */
// @ts-expect-error -- IGNORE --
export default class AdventureImporterV2 extends DocumentSheetV2 {
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
      submitOnClose: boolean
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
  /**
   * A convenience alias for AdventureImporter#document
   * @type {Adventure}
   */
  get adventure(): Adventure
  /** @override */
  override get isEditable(): any
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
      adventure: ClientDocument
      description: string
      contents: {
        icon: string
        label: string
        count: number
      }[]
      imported: boolean
      optionsSchema: SchemaField | undefined
      buttons: {
        type: string
        icon: string
        label: string
      }[]
    }
  >
  /**
   * Prepare import options schema.
   * Options are rendered using the DataField#toInput method.
   * @param {AdventureImportOptions} options
   * @returns {SchemaField|undefined}
   * @protected
   */
  protected _prepareImportOptionsSchema(options: AdventureImportOptions): SchemaField | undefined
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
  /**
   * Configure how adventures that use this sheet class are imported.
   * This can be implemented by subclasses to implement custom import workflows.
   * @param {AdventureImportOptions} importOptions
   * @returns {Promise<void>}
   * @internal
   */
  _configureImport(importOptions: AdventureImportOptions): Promise<void>
  /**
   * Configure how adventures that use this sheet class are imported.
   * This can be implemented by subclasses to implement custom import workflows.
   * @param {AdventureImportData} importData
   * @param {AdventureImportOptions} importOptions
   * @returns {Promise<void>}
   * @internal
   */
  _preImport(importData: AdventureImportData, importOptions: AdventureImportOptions): Promise<void>
  /**
   * Configure how adventures that use this sheet class are imported.
   * This can be implemented by subclasses to implement custom import workflows.
   * @param {AdventureImportResult} importResult
   * @param {AdventureImportOptions} importOptions
   * @returns {Promise<void>}
   * @internal
   */
  _onImport(importResult: AdventureImportResult, importOptions: AdventureImportOptions): Promise<void>
  /** @override */
  override _prepareSubmitData(event: any, form: any, formData: any, _updateData: any): object
  /**
   * Handle toggling the import all checkbox.
   * @param {Event} event  The change event.
   * @protected
   */
  protected _onToggleImportAll(event: Event): void
  /** @override */
  override _processSubmitData(_event: any, _form: any, submitData: any, _options: any): Promise<void>
}
import type { AdventureImportData, AdventureImportOptions, AdventureImportResult } from "@client/documents/_types.mjs"
import Adventure from "@client/documents/adventure.mjs"
import type { SchemaField } from "@common/data/fields.mjs"
import { DocumentSheetV2 } from "../api/_module.mjs"
