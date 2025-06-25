import { DocumentSheetConfigRenderContext, DocumentSheetConfiguration } from "foundry/DocumentSheet.js"
import { ApplicationClosingOptions, ApplicationFormConfiguration, ApplicationTabsConfiguration } from "../_types.js"
import { DocumentSheetV2 } from "../api/_module.js"
import HandlebarsApplicationMixin, {
  HandlebarsRenderOptions,
  HandlebarsTemplatePart,
} from "../api/HandlebarsApplicationMixin.js"
import FormDataExtended from "../ux/FormDataExtended.js"
import { DocumentSheetRenderContext } from "../api/DocumentSheetV2.js"

/**
 * The Application responsible for configuring a single Scene document.
 */
export default class SceneConfig<TDocument extends Scene> extends HandlebarsApplicationMixin(DocumentSheetV2) {
  static override DEFAULT_OPTIONS: DeepPartial<DocumentSheetConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  static override TABS: Record<string, ApplicationTabsConfiguration>

  declare parent: TDocument

  // @ts-expect-error Should fix.
  protected override _prepareContext(options: HandlebarsRenderOptions): Promise<DocumentSheetConfigRenderContext>

  protected override _preparePartContext(
    partId: string,
    context: DocumentSheetRenderContext,
    options: HandlebarsRenderOptions,
  ): Promise<DocumentSheetRenderContext>

  override changeTab(
    tab: string,
    group: string,
    options?: { event?: Event; navElement?: HTMLElement; force?: boolean; updatePosition?: boolean },
  ): void

  protected _prepareSubmitData(
    event: SubmitEvent,
    form: HTMLFormElement,
    formData: FormDataExtended,
    updateData?: Record<string, unknown>,
  ): Record<string, unknown>

  protected override _onRender(context: object, options: HandlebarsRenderOptions): Promise<void>

  protected override _onChangeForm(formConfig: ApplicationFormConfiguration, event: Event): void

  protected override _onClose(options: ApplicationClosingOptions): void
}
