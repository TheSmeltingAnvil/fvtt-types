import * as abstract from "foundry/abstract/_module.js"
import * as types from "foundry/applications/_types.js"
import * as api from "foundry/applications/api/_module.js"

export interface DocumentSheetRenderContext extends types.ApplicationRenderContext {
  document: Document
  source: Record<string, JSONValue | undefined>
  fields: abstract.types.DataSchema
  editable: boolean
  user: User
  rootId: string
}

export default abstract class DocumentSheetV2<
  TConfig extends foundry.DocumentSheetConfiguration = foundry.DocumentSheetConfiguration,
  TRenderOptions extends foundry.DocumentSheetRenderOptions = foundry.DocumentSheetRenderOptions,
> extends api.ApplicationV2<TConfig, TRenderOptions> {
  constructor(options?: DeepPartial<TConfig>)

  static override DEFAULT_OPTIONS: DeepPartial<foundry.DocumentSheetConfiguration>

  get document(): TConfig["document"]

  override get title(): string

  /**
   * Is this Document sheet visible to the current User?
   * This is governed by the viewPermission threshold configured for the class.
   */
  get isVisible(): boolean

  /**
   * Is this Document sheet editable by the current User?
   * This is governed by the editPermission threshold configured for the class.
   */
  get isEditable(): boolean

  protected override _initializeApplicationOptions(options: DeepPartial<TConfig>): TConfig

  protected override _headerControlButtons(): Generator<types.ApplicationHeaderControlsEntry>

  protected override _configureRenderOptions(options: DeepPartial<TRenderOptions>): void

  protected override _prepareContext(options: TRenderOptions): Promise<DocumentSheetRenderContext>

  protected override _renderFrame(options: TRenderOptions): Promise<HTMLElement>

  /**
   * Disable or reenable all form fields in this application.
   * @param disabled Should the fields be disabled?
   */
  protected _toggleDisabled(disabled: boolean): void

  /* -------------------------------------------- */
  /*  Application Life-Cycle Events               */
  /* -------------------------------------------- */

  protected override _canRender(options: TRenderOptions): false | void

  protected override _onFirstRender(context: object, options: TRenderOptions): Promise<void>

  protected override _onRender(context: object, options: TRenderOptions): Promise<void>

  protected override _onClose(options: types.ApplicationClosingOptions): void

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  /* -------------------------------------------- */
  /*  Form Submission                             */
  /* -------------------------------------------- */

  protected override _onChangeForm(formConfig: types.ApplicationFormConfiguration, event: Event): void

  /**
   * Handle toggling the revealed state of a secret embedded in some content.
   * @param event The triggering event.
   */
  protected _onRevealSecret(event: Event): void

  /**
   * Prepare data used to update the Item upon form submission.
   * This data is cleaned and validated before being returned for further processing.
   * @param event      The originating form submission event
   * @param form       The form element that was submitted
   * @param formData   Processed data for the submitted form
   * @param updateData Additional data passed in if this form is submitted manually which should be merged with
   *                   prepared formData.
   * @throws {Error} Subclasses may throw validation errors here to prevent form submission
   * @returns Prepared submission data as an object
   */
  protected _prepareSubmitData(
    event: SubmitEvent,
    form: HTMLFormElement,
    formData: foundry.applications.ux.FormDataExtended,
    updateData?: object,
  ): object

  /**
   * Customize how form data is extracted into an expanded object.
   * @param event    The originating form submission event
   * @param form     The form element that was submitted
   * @param formData Processed data for the submitted form
   * @returns An expanded object of processed form data
   * @throws {Error} Subclasses may throw validation errors here to prevent form submission
   */
  protected _processFormData(
    event: SubmitEvent | null,
    form: HTMLFormElement,
    formData: foundry.applications.ux.FormDataExtended,
  ): Record<string, unknown>

  /**
   * Submit a document update or creation request based on the processed form data.
   * @param event      The originating form submission event
   * @param form       The form element that was submitted
   * @param submitData Processed and validated form data to be used for a document update
   * @param options Additional options altering the request
   */
  protected _processSubmitData(
    event: SubmitEvent,
    form: HTMLFormElement,
    submitData: Record<string, unknown>,
    options?:
      | Partial<foundry.abstract.types.DatabaseCreateOperation<TConfig["document"]["parent"]>>
      | Partial<foundry.abstract.types.DatabaseUpdateOperation<TConfig["document"]["parent"]>>,
  ): Promise<void>
}
