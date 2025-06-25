import { TourConfig } from "../TourConfig.js"
import { TourStatus } from "../TourStatus.js"
import { TourStep } from "../TourStep.js"

/**
 * A Tour that shows a series of guided steps.
 */
export default abstract class Tour {
  /**
   * Construct a Tour by providing a configuration.
   * @param config The configuration of the Tour
   * @param options Additional options for configuring the tour
   * @param options.id A tour ID that supercedes TourConfig#id
   * @param options.namespace A tour namespace that supercedes TourConfig#namespace
   */
  constructor(config: TourConfig, options?: { id?: string; namespace?: string })

  static STATUS: Readonly<{
    UNSTARTED: "unstarted"
    IN_PROGRESS: "in-progress"
    COMPLETED: "completed"
  }>

  /**
   * Indicates if a Tour is currently in progress.
   */
  static get tourInProgress(): boolean

  /**
   * Returns the active Tour, if any
   */
  static get activeTour(): Tour | null

  /**
   * Handle a movement action to either progress or regress the Tour.
   * @param movementDirections The Directions being moved in
   */
  static onMovementAction(movementDirections: string[]): true | void

  /**
   * Configuration of the tour. This object is cloned to avoid mutating the original configuration.
   */
  config: TourConfig

  /**
   * The HTMLElement which is the focus of the current tour step.
   */
  targetElement: HTMLElement

  /**
   * The HTMLElement that fades out the rest of the screen
   */
  fadeElement: HTMLElement

  /**
   * The HTMLElement that blocks input while a Tour is active
   */
  overlayElement: HTMLElement

  /**
   * Padding around a Highlighted Element
   */
  static HIGHLIGHT_PADDING: number

  /**
   * The unique identifier of the tour.
   */
  get id(): string

  set id(value)

  /**
   * The human-readable title for the tour.
   */
  get title(): string

  /**
   * The human-readable description of the tour.
   */
  get description(): string

  /**
   * The package namespace for the tour.
   */
  get namespace(): string

  set namespace(value)

  /**
   * The key the Tour is stored under in game.tours, of the form `${namespace}.${id}`
   */
  get key(): string

  /**
   * The configuration of tour steps
   */
  get steps(): TourStep[]

  /**
   * Return the current Step, or null if the tour has not yet started.
   */
  get currentStep(): TourStep | null

  /**
   * The index of the current step; -1 if the tour has not yet started, or null if the tour is finished.
   */
  get stepIndex(): number | null

  /**
   * Returns True if there is a next TourStep
   */
  get hasNext(): boolean

  /**
   * Returns True if there is a previous TourStep
   */
  get hasPrevious(): boolean

  /**
   * Return whether this Tour is currently eligible to be started?
   * This is useful for tours which can only be used in certain circumstances, like if the canvas is active.
   */
  get canStart(): boolean

  /**
   * The current status of the Tour
   */
  get status(): TourStatus

  /* -------------------------------------------- */
  /*  Tour Methods                                */
  /* -------------------------------------------- */

  /**
   * Advance the tour to a completed state.
   */
  complete(): Promise<void>

  /**
   * Exit the tour at the current step.
   */
  exit(): void

  /**
   * Reset the Tour to an un-started state.
   */
  reset(): Promise<void>

  /**
   * Start the Tour at its current step, or at the beginning if the tour has not yet been started.
   */
  start(): Promise<void>

  /**
   * Progress the Tour to the next step.
   */
  next(): Promise<void>

  /**
   * Rewind the Tour to the previous step.
   */
  previous(): Promise<void>

  /**
   * Progresses to a given Step
   * @param stepIndex The step to progress to
   */
  progress(stepIndex: number): Promise<void>

  /**
   * Query the DOM for the target element using the provided selector
   * @param selector A CSS selector
   * @returns The target element, or null if not found
   */
  protected _getTargetElement(selector: string): HTMLElement | null

  /**
   * Creates and returns a Tour by loading a JSON file
   * @param filepath The path to the JSON file
   */
  static fromJSON(filepath: string): Promise<Tour>

  /* -------------------------------------------- */
  /*  Event Handlers                              */
  /* -------------------------------------------- */

  /**
   * Set-up operations performed before a step is shown.
   */
  protected abstract _preStep(): Promise<void>

  /**
   * Clean-up operations performed after a step is completed.
   */
  protected abstract _postStep(): Promise<void>

  /**
   * Renders the current Step of the Tour
   */
  protected _renderStep(): Promise<void>

  /**
   * Reloads the Tour's current step from the saved progress
   * @internal
   */
  _reloadProgress(): void
}
