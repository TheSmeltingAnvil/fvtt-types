import { ApplicationConfiguration, ApplicationRenderContext } from "foundry/applications/_types.js"
import ApplicationV2 from "foundry/applications/api/ApplicationV2.js"
import HandlebarsApplicationMixin, {
  HandlebarsRenderOptions,
  HandlebarsTemplatePart,
} from "foundry/applications/api/HandlebarsApplicationMixin.js"

/**
 * A submenu for managing user overrides of PrototypeTokens
 */
export default class PrototypeOverridesConfig extends HandlebarsApplicationMixin(ApplicationV2) {
  static override DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  /** Register this menu application and the setting it manages. */
  static registerSettings(): void

  override tabGroups: Record<string, string>

  protected override _prepareContext(): Promise<ApplicationRenderContext>

  protected override _preFirstRender(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>
}
