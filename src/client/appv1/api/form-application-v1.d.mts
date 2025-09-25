/**
 * @import * as TinyMCE from "tinymce";
 * @import * as ProseMirror from "prosemirror-view";
 * @import {ApplicationV1Options} from "../api/application-v1.mjs";
 */
/**
 * @typedef FormApplicationOptions
 * @property {boolean} [closeOnSubmit=true]     Whether to automatically close the application when it's contained
 *                                              form is submitted.
 * @property {boolean} [submitOnChange=false]   Whether to automatically submit the contained HTML form when an input
 *                                              or select element is changed.
 * @property {boolean} [submitOnClose=false]    Whether to automatically submit the contained HTML form when the
 *                                              application window is manually closed.
 * @property {boolean} [editable=true]          Whether the application form is editable - if true, it's fields will
 *                                              be unlocked and the form can be submitted. If false, all form fields
 *                                              will be disabled and the form cannot be submitted.
 * @property {boolean} [sheetConfig=false]      Support configuration of the sheet type used for this application.
 */
/**
 * An abstract pattern for defining an Application responsible for updating some object using an HTML form
 *
 * A few critical assumptions:
 * 1) This application is used to only edit one object at a time
 * 2) The template used contains one (and only one) HTML form as it's outermost element
 * 3) This abstract layer has no knowledge of what is being updated, so the implementation must define _updateObject
 *
 * @abstract
 * @deprecated since V13
 */
export default class FormApplication extends Application {
  /**
   * An array of custom element tag names that should be listened to for changes.
   * @type {string[]}
   * @protected
   */
  protected static get _customElements(): string[]
  /**
   * Assign the default options which are supported by the document edit sheet.
   * In addition to the default options object supported by the parent Application class, the Form Application
   * supports the following additional keys and values:
   *
   * @returns {ApplicationV1Options & FormApplicationOptions} The default options for this FormApplication class
   */
  static get defaultOptions(): ApplicationV1Options & FormApplicationOptions
  /**
   * @param {object} object                    Some object which is the target data structure to be updated by the form.
   * @param {FormApplicationOptions & ApplicationV1Options} [options] Additional options which modify the rendering of
   *                                                                  the sheet.
   */
  constructor(object?: object, options?: FormApplicationOptions & ApplicationV1Options)
  /**
   * The object target which we are using this form to modify
   * @type {*}
   */
  object: any
  /**
   * A convenience reference to the form HTMLElement
   * @type {HTMLElement}
   */
  form: HTMLElement
  /**
   * Keep track of any mce editors which may be active as part of this form
   * The values of this object are inner-objects with references to the MCE editor and other metadata
   * @type {Record<string, object>}
   */
  editors: Record<string, object>
  /**
   * Is the Form Application currently editable?
   * @type {boolean}
   */
  get isEditable(): boolean
  /**
   * @inheritdoc
   * @returns {object|Promise<object>}
   */
  getData(_options: any): object | Promise<object>
  /** @inheritdoc */
  _render(force: any, options: any): Promise<void>
  /** @inheritdoc */
  _renderInner(...args: any[]): Promise<jQuery>
  /** @inheritdoc */
  _activateCoreListeners(html: any): void
  /** @inheritdoc */
  activateListeners(html: any): void
  /**
   * If the form is not editable, disable its input fields
   * @param {HTMLElement} form    The form HTML
   * @protected
   */
  protected _disableFields(form: HTMLElement): void
  /**
   * Handle standard form submission steps
   * @param {Event} event               The submit event which triggered this handler
   * @param {object} options
   * @param {object | null} [options.updateData] Additional specific data keys/values which override or extend the
   *                                             contents of the parsed form. This can be used to update other flags or
   *                                             data fields at the same time as processing a form submission to avoid
   *                                             multiple database operations.
   * @param {boolean} [options.preventClose]     Override the standard behavior of whether to close the form on submit
   * @param {boolean} [options.preventRender]   Prevent the application from re-rendering as a result of form submission
   * @returns {Promise}                 A promise which resolves to the validated update data
   * @protected
   */
  protected _onSubmit(
    event: Event,
    {
      updateData,
      preventClose,
      preventRender,
    }?: {
      updateData?: object | null | undefined
      preventClose?: boolean | undefined
      preventRender?: boolean | undefined
    },
  ): Promise<any>
  _submitting: boolean | undefined
  /**
   * Get an object of update data used to update the form's target object
   * @param {object} updateData     Additional data that should be merged with the form data
   * @returns {object}               The prepared update data
   * @protected
   */
  protected _getSubmitData(updateData?: object): object
  /**
   * Handle changes to an input element, submitting the form if options.submitOnChange is true.
   * Do not preventDefault in this handler as other interactions on the form may also be occurring.
   * @param {Event} event  The initial change event
   * @protected
   */
  protected _onChangeInput(event: Event): Promise<any>
  /**
   * Handle the change of a color picker input which enters it's chosen value into a related input field
   * @param {Event} event   The color picker change event
   * @protected
   */
  protected _onChangeColorPicker(event: Event): void
  /**
   * Handle changes to a range type input by propagating those changes to the sibling range-value element
   * @param {Event} event  The initial change event
   * @protected
   */
  protected _onChangeRange(event: Event): void
  /**
   * This method is called upon form submission after form data is validated
   * @param {Event} event       The initial triggering submission event
   * @param {object} formData   The object of validated form data with which to update the object
   * @returns {Promise}         A Promise which resolves once the update operation has completed
   * @abstract
   */
  _updateObject(event: Event, formData: object): Promise<any>
  /**
   * Activate a named TinyMCE text editor
   * @param {string} name             The named data field which the editor modifies.
   * @param {object} options          Editor initialization options passed to
   *                                  {@link foundry.applications.ux.TextEditor.create}.
   * @param {string} initialContent   Initial text content for the editor area.
   * @returns {Promise<TinyMCE.Editor|ProseMirror.EditorView>}
   */
  activateEditor(
    name: string,
    options?: object,
    initialContent?: string,
  ): Promise<TinyMCE.Editor | ProseMirror.EditorView>
  /**
   * Handle saving the content of a specific editor by name
   * @param {string} name                      The named editor to save
   * @param {object} [options]
   * @param {boolean} [options.remove]         Remove the editor after saving its content
   * @param {boolean} [options.preventRender]  Prevent normal re-rendering of the sheet after saving.
   * @returns {Promise<void>}
   */
  saveEditor(
    name: string,
    {
      remove,
      preventRender,
    }?: {
      remove?: boolean | undefined
      preventRender?: boolean | undefined
    },
  ): Promise<void>
  /**
   * Activate an editor instance present within the form
   * @param {HTMLElement} div  The element which contains the editor
   * @protected
   */
  protected _activateEditor(div: HTMLElement): void
  /**
   * Configure ProseMirror plugins for this sheet.
   * @param {string} name                    The name of the editor.
   * @param {object} [options]               Additional options to configure the plugins.
   * @param {boolean} [options.remove=true]  Whether the editor should destroy itself on save.
   * @returns {object}
   * @protected
   */
  protected _configureProseMirrorPlugins(
    name: string,
    {
      remove,
    }?: {
      remove?: boolean | undefined
    },
  ): object
  /** @inheritdoc */
  close(options?: object): Promise<void>
  /**
   * Submit the contents of a Form Application, processing its content as defined by the Application
   * @param {object} [options] Options passed to the _onSubmit event handler
   * @returns {Promise<this>}  Return a self-reference for convenient method chaining
   */
  submit(options?: object): Promise<this>
  /**
   * @deprecated since v12
   * @ignore
   */
  get filepickers(): any[]
  /**
   * @deprecated since v12
   * @ignore
   */
  _activateFilePicker(event: any): Promise<FilePicker>
  /**
   * @deprecated since v12
   * @ignore
   */
  _getFilePickerOptions(event: any): {
    field: any
    type: any
    current: any
    button: any
    callback: (_selection: any, _filePicker: any) => void
  }
  /**
   * @deprecated since v12
   * @ignore
   */
  _onSelectFile(_selection: any, _filePicker: any): void
  #private
}
export type FormApplicationOptions = {
  /**
   * Whether to automatically close the application when it's contained
   *      form is submitted.
   */
  closeOnSubmit?: boolean | undefined
  /**
   * Whether to automatically submit the contained HTML form when an input
   *    or select element is changed.
   */
  submitOnChange?: boolean | undefined
  /**
   * Whether to automatically submit the contained HTML form when the
   *     application window is manually closed.
   */
  submitOnClose?: boolean | undefined
  /**
   * Whether the application form is editable - if true, it's fields will
   *           be unlocked and the form can be submitted. If false, all form fields
   *           will be disabled and the form cannot be submitted.
   */
  editable?: boolean | undefined
  /**
   * Support configuration of the sheet type used for this application.
   */
  sheetConfig?: boolean | undefined
}
import FilePicker from "@client/applications/apps/file-picker.mjs"
import type { ApplicationV1Options } from "../api/application-v1.mjs"
import Application from "./application-v1.mjs"
