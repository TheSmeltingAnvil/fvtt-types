import { ApplicationV2, HandlebarsRenderOptions, HandlebarsTemplatePart } from "foundry/applications/api/_module.js"
import {
  ApplicationConfiguration,
  ApplicationFormConfiguration,
  ApplicationRenderContext,
  ApplicationTabsConfiguration,
  FormFooterButton,
} from "foundry/applications/_types.js"
import { PrototypeToken } from "foundry/data/_module.js"
import { DataSchema } from "foundry/abstract/_types.js"

export declare abstract class TokenApplication extends ApplicationV2 {
  static override DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  static override TABS: Record<string, ApplicationTabsConfiguration>

  /**
   * Localized Token Display Modes
   */
  static get DISPLAY_MODES(): Record<string, string>

  /**
   * Localized Token Dispositions
   */
  static get TOKEN_DISPOSITIONS(): Record<string, string>

  /**
   * Localized Token Turn Marker modes
   */
  static get TURN_MARKER_MODES(): Record<string, string>

  /**
   * Localized Token Shapes
   */
  static get TOKEN_SHAPES(): Record<string, string>

  /**
   * Maintain a copy of the original to show a real-time preview of changes.
   */
  // @ts-expect-error Should fix.
  protected _preview: TokenDocument | PrototypeToken<Actor> | null

  /**
   * Is the token a PrototypeToken?
   */
  abstract isPrototype: boolean

  /**
   * A reference to the Actor the token depicts
   */
  abstract get actor(): Actor | null

  /**
   * The TokenDocument or PrototypeToken
   */
  // @ts-expect-error Should fix.
  abstract get token(): TokenDocument | PrototypeToken<Actor>

  /**
   * The schema fields for this token DataModel
   */
  protected abstract get _fields(): DataSchema

  /**
   * Assign a preview clone for propagating form changes across the sheet and (if editing a TokenDocument) the
   * canvas.
   */
  protected abstract _initializeTokenPreview(): Promise<void>

  protected override _preFirstRender(context: Record<string, unknown>, options: HandlebarsRenderOptions): Promise<void>

  /**
   * Mimic changes to the Token document as if they were true document updates.
   * @param The changes to preview.
   */
  protected _previewChanges(changes: Record<string, unknown>): void

  protected override _prepareContext(options: HandlebarsRenderOptions): Promise<ApplicationRenderContext>

  protected _preparePartContext(
    partId: string,
    context: ApplicationRenderContext,
    options: HandlebarsRenderOptions,
  ): Promise<ApplicationRenderContext>

  /**
   * Prepare data to be displayed in the Identity tab.
   */
  protected _prepareIdentityTab(): object

  /**
   * Prepare data to be displayed in the Appearance tab.
   */
  protected _prepareAppearanceTab(): Promise<object>

  /**
   * Prepare data to be displayed in the Vision tab.
   */
  protected _prepareVisionTab(): Promise<object>

  /**
   * Prepare data to be displayed in the Vision tab.
   */
  protected _prepareLightTab(): Promise<object>

  /**
   * Prepare data to be displayed in the Resources tab.
   */
  protected _prepareResourcesTab(): Promise<object>

  /**
   * Prepare form submission buttons.
   */
  protected _prepareButtons(): FormFooterButton[]

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  protected override _onChangeForm(formConfig: ApplicationFormConfiguration, event: Event): void

  /* -------------------------------------------- */
  /*  Form Submission                             */
  /* -------------------------------------------- */

  /**
   * Process several fields from form submission data into proper model changes.
   * @param submitData Form submission data passed through {@link foundry.applications.ux.FormDataExtended}
   */
  protected _processChanges(submitData: Record<string, unknown>): void
}

/**
 * A mixin for UI shared between TokenDocument and PrototypeToken sheets
 */
export default function TokenApplicationMixin<
  TBase extends AbstractConstructorOf<ApplicationV2> & {
    DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>
    TABS: Record<string, ApplicationTabsConfiguration>
  },
>(Base: TBase): AbstractConstructorOf<TokenApplication & TBase>
