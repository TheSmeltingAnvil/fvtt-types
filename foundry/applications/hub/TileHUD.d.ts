import { ApplicationConfiguration } from "foundry/applications/_types.js"
import {
  HandlebarsApplicationMixin,
  HandlebarsRenderOptions,
  HandlebarsTemplatePart,
} from "foundry/applications/api/_module.js"

import BasePlaceableHUD, { PlaceableHUDContext } from "./BasePlaceableHUD.js"

/**
 * An implementation of the PlaceableHUD base class which renders a heads-up-display interface for Tile objects.
 * The TileHUD implementation can be configured and replaced via {@link CONFIG.Tile.hudClass}.
 */
export default class TileHUD extends HandlebarsApplicationMixin(BasePlaceableHUD) {
  static override DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  override _prepareContext(options: HandlebarsRenderOptions): Promise<PlaceableHUDContext>
}
