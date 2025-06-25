import { ApplicationConfiguration } from "../_types.js"
import HandlebarsApplicationMixin, { HandlebarsTemplatePart } from "../api/HandlebarsApplicationMixin.js"
import BasePlaceableHUD from "./BasePlaceableHUD.js"

/**
 * An implementation of the PlaceableHUD base class which renders a heads-up-display interface for Drawing objects.
 * The DrawingHUD implementation can be configured and replaced via {@link CONFIG.Drawing.hudClass}.
 */
export default class DrawingHUD extends HandlebarsApplicationMixin(BasePlaceableHUD) {
  static override DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>
}
