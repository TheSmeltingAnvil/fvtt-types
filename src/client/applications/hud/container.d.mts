/**
 * @import {DrawingHUD, TileHUD, TokenHUD} from "./_module.mjs";
 */
/**
 * The Heads-Up Display Container is a canvas-sized Application which renders HTML overtop of the game canvas.
 */
export default class HeadsUpDisplayContainer extends ApplicationV2<
  foundry.applications.types.ApplicationConfiguration,
  foundry.applications.types.ApplicationRenderOptions
> {
  /** @inheritDoc */
  static DEFAULT_OPTIONS: {
    id: string
    window: {
      frame: boolean
      positioned: boolean
    }
    position: {
      zIndex: number
    }
  }
  constructor(options?: Partial<foundry.applications.types.ApplicationConfiguration> | undefined)
  /**
   * Token HUD
   * @type {TokenHUD}
   */
  token: TokenHUD
  /**
   * Tile HUD
   * @type {TileHUD}
   */
  tile: TileHUD
  /**
   * Drawing HUD
   * @type {DrawingHUD}
   */
  drawing: DrawingHUD
  /**
   * Chat Bubbles
   * @type {ChatBubbles}
   */
  bubbles: ChatBubbles
  /** @override */
  override _renderHTML(_context: any, _options: any): Promise<string>
  /** @override */
  override _replaceHTML(result: any, content: any, _options: any): void
  /** @inheritDoc */
  _onRender(context: any, options: any): Promise<void>
  /**
   * Align the position of the HUD layer to the current position of the canvas
   */
  align(): void
}
import ChatBubbles from "@client/canvas/animation/chat-bubbles.mjs"
import ApplicationV2 from "../api/application.mjs"
import type { DrawingHUD, TileHUD, TokenHUD } from "./_module.mjs"
