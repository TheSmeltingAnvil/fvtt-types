/**
 * @typedef DragDropConfiguration
 * @property {string|null} [dragSelector=null]  The CSS selector used to target draggable elements.
 * @property {string|null} [dropSelector=null]  The CSS selector used to target viable drop targets.
 * @property {Record<"dragstart"|"drop", (selector: string) => boolean>} [permissions]
 *                                         Permission tests for each action
 * @property {Record<
 *  "dragstart"|"dragover"|"drop"|"dragenter"|"dragleave"|"dragend",
 *  (event: DragEvent) => void
 * >} [callbacks]                         Callback functions for each action
 */
/**
 * A controller class for managing drag and drop workflows within an Application instance.
 * The controller manages the following actions: dragstart, dragover, drop.
 *
 * @example Activate drag-and-drop handling for a certain set of elements
 * ```js
 * const dragDrop = new DragDrop({
 *   dragSelector: ".item",
 *   dropSelector: ".items",
 *   permissions: { dragstart: this._canDragStart.bind(this), drop: this._canDragDrop.bind(this) },
 *   callbacks: { dragstart: this._onDragStart.bind(this), drop: this._onDragDrop.bind(this) }
 * });
 * dragDrop.bind(html);
 * ```
 */
export default class DragDrop {
    /**
     * A helper to create an image preview element for use during HTML element dragging.
     * @param {HTMLImageElement} img
     * @param {number} width
     * @param {number} height
     * @returns {HTMLDivElement}
     */
    static createDragImage(img: HTMLImageElement, width: number, height: number): HTMLDivElement;
    /**
     * Retrieve the configured DragDrop implementation.
     * @type {typeof DragDrop}
     */
    static get implementation(): typeof DragDrop;
    /**
     * @param {DragDropConfiguration} [config]
     */
    constructor({ dragSelector, dropSelector, permissions, callbacks }?: DragDropConfiguration);
    /**
     * The HTML selector which identifies draggable elements.
     * @type {string|null}
     */
    dragSelector: string | null;
    /**
     * The HTML selector which identifies drop targets.
     * @type {string|null}
     */
    dropSelector: string | null;
    /**
     * A set of functions to control authorization to begin drag workflows, and drop content.
     * @type {Record<"dragstart"|"drop", (selector: string) => boolean>}
     */
    permissions: Record<"dragstart" | "drop", (selector: string) => boolean>;
    /**
     * A set of callback functions for each action of the drag & drop workflow.
     * @type {Record<"dragstart"|"dragover"|"drop"|"dragenter"|"dragleave"|"dragend", (event: DragEvent) => void>}
     */
    callbacks: Record<"dragstart" | "dragover" | "drop" | "dragenter" | "dragleave" | "dragend", (event: DragEvent) => void>;
    /**
     * Bind the DragDrop controller to an HTML application
     * @param {HTMLElement} html    The HTML element to which the handler is bound
     */
    bind(html: HTMLElement): this;
    /**
     * Execute a callback function associated with a certain action in the workflow
     * @param {DragEvent} event   The drag event being handled
     * @param {string} action     The action being attempted
     */
    callback(event: DragEvent, action: string): any;
    /**
     * Test whether the current user has permission to perform a step of the workflow
     * @param {string} action     The action being attempted
     * @param {string} selector   The selector being targeted
     * @returns {boolean}          Can the action be performed?
     */
    can(action: string, selector: string): boolean;
    /**
     * Handle the start of a drag workflow
     * @param {DragEvent} event   The drag event being handled
     * @protected
     */
    protected _handleDragStart(event: DragEvent): void;
    /**
     * Handle a drag workflow ending for any reason.
     * @param {DragEvent} event  The drag event.
     * @protected
     */
    protected _handleDragEnd(event: DragEvent): void;
    /**
     * Handle entering a drop target while dragging.
     * @param {DragEvent} event  The drag event.
     * @protected
     */
    protected _handleDragEnter(event: DragEvent): void;
    /**
     * Handle leaving a drop target while dragging.
     * @param {DragEvent} event  The drag event.
     * @protected
     */
    protected _handleDragLeave(event: DragEvent): void;
    /**
     * Handle a dragged element over a droppable target
     * @param {DragEvent} event   The drag event being handled
     * @protected
     */
    protected _handleDragOver(event: DragEvent): boolean;
    /**
     * Handle a dragged element dropped on a droppable target
     * @param {DragEvent} event   The drag event being handled
     * @protected
     */
    protected _handleDrop(event: DragEvent): any;
}
export type DragDropConfiguration = {
    /**
     * The CSS selector used to target draggable elements.
     */
    dragSelector?: string | null | undefined;
    /**
     * The CSS selector used to target viable drop targets.
     */
    dropSelector?: string | null | undefined;
    /**
     * Permission tests for each action
     */
    permissions?: Record<"dragstart" | "drop", (selector: string) => boolean> | undefined;
    /**
     * Callback functions for each action
     */
    callbacks?: Record<"dragstart" | "drop" | "dragover" | "dragenter" | "dragleave" | "dragend", (event: DragEvent) => void> | undefined;
};
