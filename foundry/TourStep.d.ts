/**
 * A step in a Tour
 */
export interface TourStep {
  /** A machine-friendly id of the Tour Step */
  id: string

  /** The title of the step, displayed in the tooltip header */
  title: string

  /** Raw HTML content displayed during the step */
  content: string

  /**
   * A DOM selector which denotes an element to highlight during this step. If omitted, the step is displayed in the
   * center of the screen.
   */
  selector?: string

  /**
   * How the tooltip for the step should be displayed relative to the target element. If omitted, the best direction
   * will be attempted to be auto-selected.
   */
  tooltipDirection?: foundry.helpers.interaction.TooltipDirection

  /** Whether the Step is restricted to the GM only. Defaults to false. */
  restricted?: boolean

  /** Activates a particular sidebar tab. Usable in `SidebarTour` instances. */
  sidebarTab?: string

  /** Activates a particular canvas layer and its respective control group. Usable in `CanvasTour` instances. */
  layer?: string

  /** Activates a particular tool. Usable in `CanvasTour` instances. */
  tool?: string
}
