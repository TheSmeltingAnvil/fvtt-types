import HandlebarsApplicationMixin, {
  HandlebarsRenderOptions,
  HandlebarsTemplatePart,
} from "foundry/applications/api/HandlebarsApplicationMixin.js"
import AbstractSidebarTab from "../AbstractSidebarTab.js"
import { ApplicationConfiguration, ApplicationRenderContext } from "foundry/applications/_types.js"

/**
 * The sidebar settings tab.
 */
export default class Settings extends HandlebarsApplicationMixin(AbstractSidebarTab) {
  static override DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  static override tabName: "settings"

  static PARTS: Record<string, HandlebarsTemplatePart>

  protected override _prepareContext(options: HandlebarsRenderOptions): Promise<ApplicationRenderContext>
}
