import { ApplicationConfiguration, ApplicationRenderContext } from "foundry/applications/_types.js"
import { ApplicationV2, HandlebarsApplicationMixin, HandlebarsTemplatePart } from "foundry/applications/api/_module.js"

/**
 * The application responsible for configuring methods of DiceTerm resolution.
 */
export default class DiceConfig extends HandlebarsApplicationMixin(ApplicationV2) {
  static DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  /**
   * Register setting and menu.
   */
  static registerSetting(): void

  /* -------------------------------------------- */
  /*  Application                                 */
  /* -------------------------------------------- */

  override _prepareContext(): Promise<ApplicationRenderContext>
}
