/**
 * @import Document from "@common/abstract/document.mjs";
 * @import {HTMLSecretConfiguration} from "@client/applications/ux/html-secret.mjs";
 */
/**
 * @typedef DocumentSheetV1Options
 * @property {number} viewPermission                The default permissions required to view this Document sheet.
 * @property {HTMLSecretConfiguration[]} [secrets]  An array of {@link foundry.applications.ux.HTMLSecret}
 *                                                  configuration objects.
 */
/**
 * Extend the FormApplication pattern to incorporate specific logic for viewing or editing Document instances.
 * See the FormApplication documentation for more complete description of this interface.
 *
 * @abstract
 * @deprecated since V13
 */
export default class DocumentSheet extends FormApplication {
  /**
   * @override
   * @returns {FormApplicationOptions & DocumentSheetV1Options}
   */
  static override get defaultOptions(): FormApplicationOptions & DocumentSheetV1Options
  /**
   * @param {Document} object                     A Document instance which should be managed by this form.
   * @param {FormApplicationOptions & DocumentSheetV1Options} [options={}] Optional configuration parameters for how the
   *                                                                       form behaves.
   */
  constructor(object: Document, options?: FormApplicationOptions & DocumentSheetV1Options)
  /**
   * The list of handlers for secret block functionality.
   * @type {HTMLSecret[]}
   * @protected
   */
  protected _secrets: HTMLSecret[]
  /**
   * A semantic convenience reference to the Document instance which is the target object for this form.
   * @type {ClientDocument}
   */
  get document(): ClientDocument
  /** @inheritDoc */
  get isEditable(): any
  /** @inheritDoc */
  getData(_options: any): {
    cssClass: string
    editable: any
    document: ClientDocument
    data: any
    limited: any
    options: object
    owner: any
    title: string
  }
  /** @inheritDoc */
  activateEditor(name: any, options?: object, initialContent?: string): Promise<any>
  /** @inheritDoc */
  _render(force: any, options?: object): Promise<void>
  /**
   * Create an ID link button in the document sheet header which displays the document ID and copies to clipboard
   * @param {jQuery} html
   * @protected
   */
  protected _createDocumentIdLink(html: jQuery): void
  /**
   * Test whether a certain User has permission to view this Document Sheet.
   * @param {User} user     The user requesting to render the sheet
   * @returns {boolean}     Does the User have permission to view this sheet?
   * @protected
   */
  protected _canUserView(user: User): boolean
  /**
   * Create objects for managing the functionality of secret blocks within this Document's content.
   * @returns {HTMLSecret[]}
   * @protected
   */
  protected _createSecretHandlers(): HTMLSecret[]
  /**
   * Get the HTML content that a given secret block is embedded in.
   * @param {HTMLElement} secret  The secret block.
   * @returns {string|void}
   * @protected
   */
  protected _getSecretContent(secret: HTMLElement): string | void
  /**
   * Update the HTML content that a given secret block is embedded in.
   * @param {HTMLElement} secret         The secret block.
   * @param {string} content             The new content.
   * @returns {Promise<ClientDocument|undefined>|void} The updated Document.
   * @protected
   */
  protected _updateSecret(secret: HTMLElement, content: string): Promise<ClientDocument | undefined> | void
  /**
   * Handle requests to configure the default sheet used by this Document
   * @param {jQuery.ClickEvent} event
   * @protected
   */
  protected _onConfigureSheet(event: jQuery.ClickEvent): void
  /**
   * Handle changing a Document's image.
   * @param {MouseEvent} event  The click event.
   * @returns {Promise<FilePicker>}
   * @protected
   */
  protected _onEditImage(event: MouseEvent): Promise<FilePicker>
  /** @inheritDoc */
  _updateObject(_event: any, formData: any): Promise<any>
}
export type DocumentSheetV1Options = {
  /**
   * The default permissions required to view this Document sheet.
   */
  viewPermission: number
  /**
   * An array of {@link foundry.applications.ux.HTMLSecret}  configuration objects.
   */
  secrets?: HTMLSecretConfiguration[] | undefined
}
import FilePicker from "@client/applications/apps/file-picker.mjs"
import type { HTMLSecretConfiguration } from "@client/applications/ux/html-secret.mjs"
import HTMLSecret from "@client/applications/ux/html-secret.mjs"
import FormApplication from "@client/appv1/api/form-application-v1.mjs"
import type Document from "@common/abstract/document.mjs"
