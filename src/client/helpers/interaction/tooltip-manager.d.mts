/**
 * A singleton Tooltip Manager class responsible for rendering and positioning a dynamic tooltip element which is
 * accessible as `game.tooltip`.
 *
 * @see {@link foundry.Game#tooltip}
 *
 * @example API Usage
 * ```js
 * game.tooltip.activate(htmlElement, {text: "Some tooltip text", direction: "UP"});
 * game.tooltip.deactivate();
 * ```
 *
 * @example HTML Usage
 * ```html
 * <span data-tooltip="Some Tooltip" data-tooltip-direction="LEFT">I have a tooltip</span>
 * <ol data-tooltip-direction="RIGHT">
 *   <li data-tooltip="The First One">One</li>
 *   <li data-tooltip="The Second One">Two</li>
 *   <li data-tooltip="The Third One">Three</li>
 * </ol>
 * ```
 */
export default class TooltipManager {
    /**
     * An amount of margin which is used to offset tooltips from their anchored element.
     * @type {number}
     */
    static TOOLTIP_MARGIN_PX: number;
    /**
     * The number of milliseconds delay which activates a tooltip on a "long hover".
     * @type {number}
     */
    static TOOLTIP_ACTIVATION_MS: number;
    /**
     * The directions in which a tooltip can extend, relative to its tool-tipped element.
     * @enum {string}
     */
    static TOOLTIP_DIRECTIONS: {
        UP: string;
        DOWN: string;
        LEFT: string;
        RIGHT: string;
        CENTER: string;
    };
    /**
     * The number of pixels buffer around a locked tooltip zone before they should be dismissed.
     * @type {number}
     */
    static LOCKED_TOOLTIP_BUFFER_PX: number;
    /**
     * Retrieve the configured TooltipManager implementation.
     * @type {typeof TooltipManager}
     */
    static get implementation(): typeof TooltipManager;
    /**
     * A cached reference to the global tooltip element
     * @type {HTMLElement}
     */
    tooltip: HTMLElement;
    /**
     * A reference to the HTML element which is currently tool-tipped, if any.
     * @type {HTMLElement|null}
     */
    element: HTMLElement | null;
    /**
     * Activate interactivity by listening for hover events on HTML elements which have a data-tooltip defined.
     */
    activateEventListeners(): void;
    /**
     * Activate the tooltip for a hovered HTML element which defines a tooltip localization key.
     * @param {HTMLElement} element      The HTML element being hovered.
     * @param {object} [options={}]      Additional options which can override tooltip behavior.
     * @param {string} [options.text]    Explicit tooltip text to display. If this is not provided the tooltip text is
     *                                   acquired from the element's `data-tooltip-text` attribute if present and
     *                                   otherwise from its `data-tooltip` attribute. The `data-tooltip` text will be
     *                                   automatically localized. If `data-tooltip` is not a localization string, the
     *                                   text is rendered as HTML (cleaned). Both `options.text` and `data-tooltip-text`
     *                                   do not support HTML. It is not recommended to use `data-tooltip` for plain text
     *                                   and HTML as it could cause an unintentional localization. Instead use
     *                                   `data-tooltip-text` and `data-tooltip-html`, respectively.
     * @param {TooltipDirection} [options.direction]  An explicit tooltip expansion direction. If this
     *                                      is not provided, the direction is acquired from the `data-tooltip-direction`
     *                                      attribute of the element or one of its parents.
     * @param {string} [options.cssClass]   An optional, space-separated list of CSS classes to apply to the activated
     *                                      tooltip. If this is not provided, the CSS classes are acquired from the
     *                                      `data-tooltip-class` attribute of the element or one of its parents.
     * @param {boolean} [options.locked=false]  An optional boolean to lock the tooltip after creation. Defaults to false.
     * @param {HTMLElement|string} [options.html]     Explicit HTML to inject into the tooltip rather than using
     *                                                tooltip text. If passed as a string, the HTML string is cleaned with
     *                                                {@link foundry.utils.cleanHTML}. An explicit HTML string may also
     *                                                be set with the `data-tooltip-html` attribute on the element.
     */
    activate(element: HTMLElement, options?: {
        text?: string | undefined;
        direction?: "UP" | "DOWN" | "LEFT" | "RIGHT" | "CENTER" | undefined;
        cssClass?: string | undefined;
        locked?: boolean | undefined;
        html?: string | HTMLElement | undefined;
    }): void;
    /**
     * Deactivate the tooltip from a previously hovered HTML element.
     */
    deactivate(): void;
    /**
     * Clear any pending activation workflow.
     * @internal
     */
    clearPending(): void;
    /**
     * Lock the current tooltip.
     * @returns {HTMLElement}
     */
    lockTooltip(): HTMLElement;
    /**
     * Handle a request to lock the current tooltip.
     * @param {MouseEvent} event  The click event.
     * @protected
     */
    protected _onLockTooltip(event: MouseEvent): void;
    /**
     * Handle dismissing a locked tooltip.
     * @param {MouseEvent} event  The click event.
     * @protected
     */
    protected _onLockedTooltipDismiss(event: MouseEvent): void;
    /**
     * Dismiss a given locked tooltip.
     * @param {HTMLElement} element  The locked tooltip to dismiss.
     */
    dismissLockedTooltip(element: HTMLElement): void;
    /**
     * Dismiss the set of active locked tooltips.
     */
    dismissLockedTooltips(): void;
    /**
     * Create a locked tooltip at the given position.
     * @param {object} position             A position object with coordinates for where the tooltip should be placed
     * @param {string} position.top         Explicit top position for the tooltip
     * @param {string} position.right       Explicit right position for the tooltip
     * @param {string} position.bottom      Explicit bottom position for the tooltip
     * @param {string} position.left        Explicit left position for the tooltip
     * @param {string} text                 Explicit tooltip text or HTML to display.
     * @param {object} [options={}]         Additional options which can override tooltip behavior.
     * @param {string} [options.cssClass]   An optional, space-separated list of CSS classes to apply to the activated
     *                                      tooltip.
     * @returns {HTMLElement}
     */
    createLockedTooltip(position: {
        top: string;
        right: string;
        bottom: string;
        left: string;
    }, text: string, { cssClass }?: {
        cssClass?: string | undefined;
    }): HTMLElement;
    /**
     * If an explicit tooltip expansion direction was not specified, figure out a valid direction based on the bounds
     * of the target element and the screen.
     * @protected
     */
    protected _determineDirection(): any;
    /**
     * Set tooltip position relative to an HTML element using an explicitly provided data-tooltip-direction.
     * @param {TooltipDirection} direction The tooltip expansion direction specified by the element or a parent element.
     * @protected
     */
    protected _setAnchor(direction: TooltipDirection): void;
    /**
     * Apply inline styling rules to the tooltip for positioning and text alignment.
     * @param {object} [position={}]  An object of positioning data, supporting top, right, bottom, left, and textAlign
     * @protected
     */
    protected _setStyle(position?: object): void;
    #private;
}
export type TooltipDirection = keyof typeof TooltipManager.TOOLTIP_DIRECTIONS;
