import { DatabaseCreateOperation, DatabaseUpdateOperation } from "foundry/abstract/_types.js"
import {
  ApplicationClosingOptions,
  ApplicationFormConfiguration,
  ApplicationRenderContext,
} from "foundry/applications/_types.js"
import {
  DocumentSheetRenderContext,
  DocumentSheetV2,
  HandlebarsRenderOptions,
} from "foundry/applications/api/_module.js"
import { FormDataExtended } from "foundry/applications/ux/_module.js"
import { TokenSchema } from "foundry/documents/_module.js"

import TokenApplicationMixin from "./TokenApplicationMixin.js"

/**
 * The Application responsible for configuring a single token document within a parent Scene
 */
// @ts-expect-error Should fix.
export default class TokenConfig extends TokenApplicationMixin(DocumentSheetV2) {
  override isPrototype: boolean

  override get token(): TokenDocument

  override get actor(): Actor | null

  protected override get _fields(): TokenSchema

  // @ts-expect-error Should fix.
  override get isVisible(): boolean

  protected override _initializeTokenPreview(): Promise<void>

  protected override _prepareContext(options: HandlebarsRenderOptions): Promise<DocumentSheetRenderContext>

  protected override _prepareAppearanceTab(): Promise<ApplicationRenderContext>

  // @ts-expect-error Should fix.
  protected override _toggleDisabled(disabled: boolean): void

  protected override _previewChanges(changes: Record<string, unknown>): void

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  protected override _onRender(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>

  protected override _onChangeForm(formConfig: ApplicationFormConfiguration, event: Event): void

  /**
   * Handle changing the attribute bar in the drop-down selector to update the default current and max value
   * @param event The select input change event
   */
  protected _onChangeBar(event: Event): void

  protected override _onClose(options: ApplicationClosingOptions): void

  /* -------------------------------------------- */
  /*  Form Submission                             */
  /* -------------------------------------------- */

  // @ts-expect-error Should fix.
  protected override _processFormData(
    event: SubmitEvent | null,
    form: HTMLFormElement,
    formData: FormDataExtended,
  ): Record<string, unknown>

  // @ts-expect-error Should fix.
  protected override _processSubmitData(
    event: SubmitEvent,
    form: HTMLFormElement,
    submitData: Record<string, unknown>,
    options?: Partial<DatabaseCreateOperation<Scene | null>> | Partial<DatabaseUpdateOperation<Scene | null>>,
  ): Promise<void>
}
