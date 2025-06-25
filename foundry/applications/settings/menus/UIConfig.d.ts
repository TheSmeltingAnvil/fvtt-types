import {
  ApplicationClosingOptions,
  ApplicationConfiguration,
  ApplicationRenderContext,
} from "foundry/applications/_types.js"
import ApplicationV2 from "foundry/applications/api/ApplicationV2.js"
import HandlebarsApplicationMixin, {
  HandlebarsRenderOptions,
  HandlebarsTemplatePart,
} from "foundry/applications/api/HandlebarsApplicationMixin.js"
import SchemaField from "foundry/data/fields/SchemaField.js"

/**
 * A submenu that provides UI configuration settings.
 */
export default class UIConfig extends HandlebarsApplicationMixin(ApplicationV2) {
  static override DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  /**
   * The data schema for the core.uiConfig setting.
   */
  static get schema(): SchemaField

  protected override _preFirstRender(): Promise<void>

  protected override _prepareContext(options: HandlebarsRenderOptions): Promise<ApplicationRenderContext>

  protected override _onClose(options: ApplicationClosingOptions): void

  protected override _onChangeForm(): void
}
