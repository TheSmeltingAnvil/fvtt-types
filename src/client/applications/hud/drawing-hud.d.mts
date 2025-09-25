/**
 * @import Drawing from "../../canvas/placeables/drawing.mjs";
 * @import DrawingDocument from "../../documents/drawing.mjs";
 * @import DrawingsLayer from "../../canvas/layers/drawings.mjs";
 */
/**
 * An implementation of the PlaceableHUD base class which renders a heads-up-display interface for Drawing objects.
 * The DrawingHUD implementation can be configured and replaced via {@link CONFIG.Drawing.hudClass}.
 * @extends {BasePlaceableHUD<Drawing, DrawingDocument, DrawingsLayer>}
 * @mixes HandlebarsApplication
 */
export default class DrawingHUD extends BasePlaceableHUD<Drawing, DrawingDocument, DrawingsLayer> {
  /** @inheritDoc */
  static DEFAULT_OPTIONS: {
    id: string
  }
  /** @override */
  // @ts-expect-error -- IGNORE --
  static override PARTS: {
    hud: {
      root: boolean
      template: string
    }
  }
  constructor(options?: Partial<foundry.applications.types.ApplicationConfiguration> | undefined)
}
import type DrawingsLayer from "../../canvas/layers/drawings.mjs"
import type Drawing from "../../canvas/placeables/drawing.mjs"
import type DrawingDocument from "../../documents/drawing.mjs"
import BasePlaceableHUD from "./placeable-hud.mjs"
