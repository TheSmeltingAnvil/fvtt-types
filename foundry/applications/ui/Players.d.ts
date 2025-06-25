import { ApplicationV2, HandlebarsApplicationMixin, HandlebarsTemplatePart } from "foundry/applications/api/_module.js"
import { ApplicationConfiguration } from "foundry/applications/_types.js"
import { ContextMenuEntry } from "foundry/applications/ux/_module.js"

/**
 * A UI element which displays the Users defined for this world.
 * Currently active users are always displayed, while inactive users can be displayed on toggle.
 */
export default class Players extends HandlebarsApplicationMixin(ApplicationV2) {
  static override DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  /**
   * How often latency is refreshed.
   */
  static REFRESH_LATENCY_FREQUENCY_MS: number

  /**
   * A threshold of time in milliseconds after which a player is considered idle if they have no observed activity.
   */
  static IDLE_THRESHOLD_MS: number

  /**
   * Is the application currently expanded?
   */
  get expanded(): boolean

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  // @ts-expect-error Should fix.
  protected override _prepareContext(): Promise<{
    active: object[]
    inactive: object[]
  }>

  /**
   * Format the display of a user's name using their name, pronouns (if defined), and character name (if defined).
   */
  protected _formatName(user: User): string

  protected _onFirstRender(): Promise<void>

  protected override _onRender(): Promise<void>

  /* -------------------------------------------- */
  /*  Public API                                  */
  /* -------------------------------------------- */

  /**
   * Collapse the players list.
   */
  collapse(): void

  /**
   * Expand the players list.
   */
  expand(): void

  /**
   * Update the display which reports average latency.
   */
  refreshLatency(): void

  /**
   * Update the display which reports average framerate.
   * @param options Options which customize FPS reporting
   * @param options.deactivate Deactivate tracking
   */
  refreshFPS(options?: { deactivate?: boolean }): void

  /**
   * Toggle the expanded state of the players list.
   * @param expanded Force the expanded state to the provided value, otherwise toggle the state.
   */
  toggleExpanded(expanded?: boolean): void

  /* -------------------------------------------- */
  /*  Context Menu                                */
  /* -------------------------------------------- */

  /**
   * Get the set of ContextMenu options which should be applied to each User in the Players UI.
   * @returns The Array of context options passed to the ContextMenu instance
   */
  protected _getContextMenuOptions(): ContextMenuEntry[]
}
