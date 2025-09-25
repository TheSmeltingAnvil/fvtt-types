/**
 * @import {TooltipDirection} from "@client/helpers/interaction/tooltip-manager.mjs";
 */
/**
 * @typedef TourStep                          A step in a Tour
 * @property {string} id                      A machine-friendly id of the Tour Step
 * @property {string} title                   The title of the step, displayed in the tooltip header
 * @property {string} content                 Raw HTML content displayed during the step
 * @property {string} [selector]              A DOM selector which denotes an element to highlight during this step.
 *                                            If omitted, the step is displayed in the center of the screen.
 * @property {TooltipDirection} [tooltipDirection]  How the tooltip for the step should be displayed
 *                                            relative to the target element. If omitted, the best direction will
 *                                            be attempted to be auto-selected.
 * @property {boolean} [restricted]           Whether the Step is restricted to the GM only. Defaults to false.
 * @property {string} [sidebarTab]            Activates a particular sidebar tab. Usable in `SidebarTour` instances.
 * @property {string} [layer]                 Activates a particular canvas layer and its respective control group.
 *                                            Usable in `CanvasTour` instances.
 * @property {string} [tool]                  Activates a particular tool. Usable in `CanvasTour` instances.
 */
/**
 * @typedef TourConfig                        Tour configuration data
 * @property {string} namespace               The namespace this Tour belongs to. Typically, the name of the package
 *                                            which implements the tour should be used
 * @property {string} id                      A machine-friendly id of the Tour, must be unique within the provided
 *                                            namespace
 * @property {string} title                   A human-readable name for this Tour. Localized.
 * @property {TourStep[]} steps               The list of Tour Steps
 * @property {string} [description]           A human-readable description of this Tour. Localized.
 * @property {object} [localization]          A map of localizations for the Tour that should be merged into the
 *                                            default localizations
 * @property {boolean} [restricted]           Whether the Tour is restricted to the GM only. Defaults to false.
 * @property {boolean} [display]              Whether the Tour should be displayed in the Manage Tours UI. Defaults
 *                                            to false.
 * @property {boolean} [canBeResumed]         Whether the Tour can be resumed or if it always needs to start from the
 *                                            beginning. Defaults to false.
 * @property {string[]} [suggestedNextTours]  A list of namespaced Tours that might be suggested to the user when this
 *                                            Tour is completed. The first non-completed Tour in the array will be
 *                                            recommended.
 */
/**
 * A Tour that shows a series of guided steps.
 */
export default class Tour {
    /**
     * A singleton reference which tracks the currently active Tour.
     * @type {Tour|null}
     */
    static #activeTour: Tour | null;
    static STATUS: Readonly<{
        readonly UNSTARTED: "unstarted";
        readonly IN_PROGRESS: "in-progress";
        readonly COMPLETED: "completed";
    }>;
    /**
     * Indicates if a Tour is currently in progress.
     * @returns {boolean}
     */
    static get tourInProgress(): boolean;
    /**
     * Returns the active Tour, if any
     * @returns {Tour|null}
     */
    static get activeTour(): Tour | null;
    /**
     * Handle a movement action to either progress or regress the Tour.
     * @param {string[]} movementDirections           The Directions being moved in
     * @returns {true|void}
     */
    static onMovementAction(movementDirections: string[]): true | void;
    /**
     * Padding around a Highlighted Element
     * @type {number}
     */
    static HIGHLIGHT_PADDING: number;
    /**
     * Creates and returns a Tour by loading a JSON file
     * @param {string} filepath   The path to the JSON file
     * @returns {Promise<Tour>}
     */
    static fromJSON(filepath: string): Promise<Tour>;
    /**
     * Construct a Tour by providing a configuration.
     * @param {TourConfig} config           The configuration of the Tour
     * @param {object} [options]            Additional options for configuring the tour
     * @param {string} [options.id]           A tour ID that supercedes TourConfig#id
     * @param {string} [options.namespace]    A tour namespace that supercedes TourConfig#namespace
     */
    constructor(config: TourConfig, { id, namespace }?: {
        id?: string | undefined;
        namespace?: string | undefined;
    });
    /**
     * Configuration of the tour. This object is cloned to avoid mutating the original configuration.
     * @type {TourConfig}
     */
    config: TourConfig;
    /**
     * The HTMLElement which is the focus of the current tour step.
     * @type {HTMLElement}
     */
    targetElement: HTMLElement;
    /**
     * The HTMLElement that fades out the rest of the screen
     * @type {HTMLElement}
     */
    fadeElement: HTMLElement;
    /**
     * The HTMLElement that blocks input while a Tour is active
     */
    overlayElement: any;
    set id(value: string);
    /**
     * The unique identifier of the tour.
     * @type {string}
     */
    get id(): string;
    /**
     * The human-readable title for the tour.
     * @type {string}
     */
    get title(): string;
    /**
     * The human-readable description of the tour.
     * @type {string}
     */
    get description(): string;
    set namespace(value: string);
    /**
     * The package namespace for the tour.
     * @type {string}
     */
    get namespace(): string;
    /**
     * The key the Tour is stored under in game.tours, of the form `${namespace}.${id}`
     * @returns {string}
     */
    get key(): string;
    /**
     * The configuration of tour steps
     * @type {TourStep[]}
     */
    get steps(): TourStep[];
    /**
     * Return the current Step, or null if the tour has not yet started.
     * @type {TourStep|null}
     */
    get currentStep(): TourStep | null;
    /**
     * The index of the current step; -1 if the tour has not yet started, or null if the tour is finished.
     * @type {number|null}
     */
    get stepIndex(): number | null;
    /**
     * Returns True if there is a next TourStep
     * @type {boolean}
     */
    get hasNext(): boolean;
    /**
     * Returns True if there is a previous TourStep
     * @type {boolean}
     */
    get hasPrevious(): boolean;
    /**
     * Return whether this Tour is currently eligible to be started?
     * This is useful for tours which can only be used in certain circumstances, like if the canvas is active.
     * @type {boolean}
     */
    get canStart(): boolean;
    /**
     * The current status of the Tour
     * @returns {TourStatus}
     */
    get status(): TourStatus;
    /**
     * Advance the tour to a completed state.
     */
    complete(): Promise<any>;
    /**
     * Exit the tour at the current step.
     */
    exit(): void;
    /**
     * Reset the Tour to an un-started state.
     */
    reset(): Promise<any>;
    /**
     * Start the Tour at its current step, or at the beginning if the tour has not yet been started.
     */
    start(): Promise<any>;
    /**
     * Progress the Tour to the next step.
     */
    next(): Promise<any>;
    /**
     * Rewind the Tour to the previous step.
     */
    previous(): Promise<any>;
    /**
     * Progresses to a given Step
     * @param {number} stepIndex  The step to progress to
     */
    progress(stepIndex: number): Promise<any>;
    /**
     * Query the DOM for the target element using the provided selector
     * @param {string} selector     A CSS selector
     * @returns {Element|null}      The target element, or null if not found
     * @protected
     */
    protected _getTargetElement(selector: string): Element | null;
    /**
     * Set-up operations performed before a step is shown.
     * @abstract
     * @protected
     */
    protected _preStep(): Promise<void>;
    /**
     * Clean-up operations performed after a step is completed.
     * @abstract
     * @protected
     */
    protected _postStep(): Promise<void>;
    /**
     * Renders the current Step of the Tour
     * @protected
     */
    protected _renderStep(): Promise<void>;
    /**
     * Reloads the Tour's current step from the saved progress
     * @internal
     */
    _reloadProgress(): void;
    #private;
}
/**
 * A step in a Tour
 */
export type TourStep = {
    /**
     * A machine-friendly id of the Tour Step
     */
    id: string;
    /**
     * The title of the step, displayed in the tooltip header
     */
    title: string;
    /**
     * Raw HTML content displayed during the step
     */
    content: string;
    /**
     * A DOM selector which denotes an element to highlight during this step.
     *               If omitted, the step is displayed in the center of the screen.
     */
    selector?: string | undefined;
    /**
     * How the tooltip for the step should be displayed
     * relative to the target element. If omitted, the best direction will
     * be attempted to be auto-selected.
     */
    tooltipDirection?: "UP" | "DOWN" | "LEFT" | "RIGHT" | "CENTER" | undefined;
    /**
     * Whether the Step is restricted to the GM only. Defaults to false.
     */
    restricted?: boolean | undefined;
    /**
     * Activates a particular sidebar tab. Usable in `SidebarTour` instances.
     */
    sidebarTab?: string | undefined;
    /**
     * Activates a particular canvas layer and its respective control group.
     *                  Usable in `CanvasTour` instances.
     */
    layer?: string | undefined;
    /**
     * Activates a particular tool. Usable in `CanvasTour` instances.
     */
    tool?: string | undefined;
};
/**
 * Tour configuration data
 */
export type TourConfig = {
    /**
     * The namespace this Tour belongs to. Typically, the name of the package
     * which implements the tour should be used
     */
    namespace: string;
    /**
     * A machine-friendly id of the Tour, must be unique within the provided
     * namespace
     */
    id: string;
    /**
     * A human-readable name for this Tour. Localized.
     */
    title: string;
    /**
     * The list of Tour Steps
     */
    steps: TourStep[];
    /**
     * A human-readable description of this Tour. Localized.
     */
    description?: string | undefined;
    /**
     * A map of localizations for the Tour that should be merged into the
     *           default localizations
     */
    localization?: object | undefined;
    /**
     * Whether the Tour is restricted to the GM only. Defaults to false.
     */
    restricted?: boolean | undefined;
    /**
     * Whether the Tour should be displayed in the Manage Tours UI. Defaults
     *               to false.
     */
    display?: boolean | undefined;
    /**
     * Whether the Tour can be resumed or if it always needs to start from the
     *          beginning. Defaults to false.
     */
    canBeResumed?: boolean | undefined;
    /**
     * A list of namespaced Tours that might be suggested to the user when this
     *   Tour is completed. The first non-completed Tour in the array will be
     *   recommended.
     */
    suggestedNextTours?: string[] | undefined;
};
export type TourStatus = (typeof Tour.STATUS)[keyof typeof Tour.STATUS];
