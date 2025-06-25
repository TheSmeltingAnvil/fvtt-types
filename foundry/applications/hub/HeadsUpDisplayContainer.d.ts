import { ApplicationConfiguration, ApplicationRenderOptions } from "../_types.js"
import ApplicationV2 from "../api/ApplicationV2.js"
import DrawingHUD from "./DrawingHUD.js"
import TileHUD from "./TileHUD.js"
import TokenHUD from "./TokenHUD.js"

/**
 * The Heads-Up Display Container is a canvas-sized Application which renders HTML overtop of the game canvas.
 */
export default class HeadsUpDisplayContainer extends ApplicationV2 {
  static override DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  /** Token HUD */
  token: TokenHUD

  /** Tile HUD */
  tile: TileHUD

  /** Drawing HUD */
  drawing: DrawingHUD

  /** Chat Bubbles */
  // @ts-expect-error Should fix.
  bubbles: ChatBubbles

  override _renderHTML(context: object, options: ApplicationRenderOptions): Promise<string>

  override _replaceHTML(result: string, content: HTMLElement, options: ApplicationRenderOptions): void

  override _onRender(context: object, options: ApplicationRenderOptions): Promise<void>

  /* -------------------------------------------- */
  /*  Public API                                  */
  /* -------------------------------------------- */

  /** Align the position of the HUD layer to the current position of the canvas */
  align(): void
}
