import { ApplicationConfiguration, ApplicationRenderContext } from "../_types.js"
import ApplicationV2 from "../api/ApplicationV2.js"
import HandlebarsApplicationMixin, { HandlebarsTemplatePart } from "../api/HandlebarsApplicationMixin.js"
import { ContextMenuEntry } from "../ux/ContextMenu.js"

/**
 * The Scene Navigation UI element.
 */
export default class SceneNavigation extends HandlebarsApplicationMixin(ApplicationV2) {
  static override DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  /* -------------------------------------------- */
  /*  Properties                                  */
  /* -------------------------------------------- */

  /**
   * Whether the scene navigation is currently expanded.
   */
  get expanded(): boolean

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  protected override _prepareContext(): Promise<ApplicationRenderContext>

  protected override _onFirstRender(): Promise<void>

  protected override _onRender(): Promise<void>

  /**
   * Get the set of ContextMenu options which should be applied for Scenes in the menu.
   * @returns The Array of context options passed to the ContextMenu instance
   */
  protected _getContextMenuOptions(): ContextMenuEntry[]

  /* -------------------------------------------- */
  /*  Public API                                  */
  /* -------------------------------------------- */

  /**
   * Expand Scene Navigation, displaying inactive Scenes.
   * @fires {hookEvents:collapseSceneNavigation}
   */
  expand(): void

  /**
   * Collapse Scene Navigation, hiding inactive Scenes.
   * @fires {hookEvents:collapseSceneNavigation}
   */
  collapse(): Promise<void>

  /**
   * Toggle the expanded state of scene navigation.
   * @param expanded Force the expanded state to the provided value, otherwise toggle the state.
   * @fires {hookEvents:collapseSceneNavigation}
   */
  toggleExpanded(expanded?: boolean): void
}
