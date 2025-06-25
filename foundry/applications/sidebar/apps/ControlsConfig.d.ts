import { ApplicationRenderContext } from "foundry/applications/_types.js"
import CategoryBrowser, { CategoryBrowserConfiguration } from "foundry/applications/api/CategoryBrowser.js"
import { HandlebarsRenderOptions, HandlebarsTemplatePart } from "foundry/applications/api/HandlebarsApplicationMixin.js"

/**
 * View and edit keybinding and (readonly) mouse actions.
 */
export default class ControlsConfig extends CategoryBrowser {
  static override DEFAULT_OPTIONS: DeepPartial<CategoryBrowserConfiguration>

  static override PARTS: Record<string, HandlebarsTemplatePart>

  /**
   * Faux "pointer bindings" for displaying as a readonly category
   */
  static POINTER_CONTROLS: readonly [id: string, name: string, parts: string[], gmOnly?: boolean][]

  /**
   * Transform an action binding into a human-readable string representation.
   */
  // @ts-expect-error Should fix.
  static humanizeBinding(binding: KeybindingActionBinding): string

  protected override _configureRenderOptions(options: DeepPartial<HandlebarsRenderOptions>): void

  protected override _prepareCategoryData(): Promise<Record<string, { id: string; label: string; entries: object[] }>>

  protected override _onFirstRender(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>
}
