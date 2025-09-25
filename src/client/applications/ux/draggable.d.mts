/**
 * @import Application from "@client/appv1/api/application-v1.mjs"
 * @import ApplicationV2 from "../api/application.mjs"
 */
/**
 * @typedef DraggableResizeOptions
 * @property {string} [selector]  A CSS selector for the resize handle.
 * @property {boolean} [resizeX=true]  Enable resizing along the X axis.
 * @property {boolean} [resizeY=true]  Enable resizing along the Y axis.
 * @property {boolean} [rtl]           Modify the resizing direction to be right-to-left.
 */
/**
 * A UI utility to make an element draggable.
 */
export default class Draggable {
    /**
     * Retrieve the configured Draggable implementation.
     * @type {typeof Draggable}
     */
    static get implementation(): typeof Draggable;
    /**
     * @param {Application|ApplicationV2} app The Application that is being made draggable.
     * @param {HTMLElement|jQuery} element    The Application's outer-most element.
     * @param {HTMLElement|false} handle      The element that acts as a drag handle. Supply false to disable dragging.
     * @param {boolean|DraggableResizeOptions} resizable  Is the application resizable? Supply an object to configure
     *                                                    resizing behavior or true to have it automatically configured.
     */
    constructor(app: Application | ApplicationV2, element: HTMLElement | jQuery, handle: HTMLElement | false, resizable: boolean | DraggableResizeOptions);
    /**
     * The Application being made draggable.
     * @type {Application|ApplicationV2}
     */
    app: Application | ApplicationV2;
    /**
     * The Application's outer-most element.
     * @type {HTMLElement}
     */
    element: HTMLElement;
    /**
     * The drag handle, or false to disable dragging.
     * @type {HTMLElement|false}
     */
    handle: HTMLElement | false;
    /**
     * Resize configuration.
     * @type {boolean|DraggableResizeOptions}
     */
    resizable: boolean | DraggableResizeOptions;
    /**
     * Registered event handlers.
     * @type {Record<string, Function>}
     */
    handlers: Record<string, Function>;
    /**
     * The Application's starting position, pre-drag.
     * @type {object}
     */
    position: object;
    /**
     * Activate event handling for a Draggable application
     * Attach handlers for floating, dragging, and resizing
     */
    activateListeners(): void;
    /**
     * Attach handlers for dragging and floating.
     * @protected
     */
    protected _activateDragListeners(): void;
    /**
     * Attach handlers for resizing.
     * @protected
     */
    protected _activateResizeListeners(): void;
    /**
     * Handle the initial mouse click which activates dragging behavior for the application
     * @param {PointerEvent} event
     * @protected
     */
    protected _onDragMouseDown(event: PointerEvent): void;
    _initial: {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    } | undefined;
    /**
     * Move the window with the mouse, bounding the movement to ensure the window stays within bounds of the viewport
     * @param {PointerEvent} event
     * @protected
     */
    protected _onDragMouseMove(event: PointerEvent): void;
    /**
     * Conclude the dragging behavior when the mouse is release, setting the final position and removing listeners
     * @param {PointerEvent} event
     * @protected
     */
    protected _onDragMouseUp(event: PointerEvent): void;
    /**
     * Handle the initial mouse click which activates dragging behavior for the application
     * @param {PointerEvent} event
     * @protected
     */
    protected _onResizeMouseDown(event: PointerEvent): void;
    /**
     * Move the window with the mouse, bounding the movement to ensure the window stays within bounds of the viewport
     * @param {PointerEvent} event
     * @protected
     */
    protected _onResizeMouseMove(event: PointerEvent): void;
    /**
     * Conclude the dragging behavior when the mouse is release, setting the final position and removing listeners
     * @param {PointerEvent} event
     * @protected
     */
    protected _onResizeMouseUp(event: PointerEvent): void;
    #private;
}
export type DraggableResizeOptions = {
    /**
     * A CSS selector for the resize handle.
     */
    selector?: string | undefined;
    /**
     * Enable resizing along the X axis.
     */
    resizeX?: boolean | undefined;
    /**
     * Enable resizing along the Y axis.
     */
    resizeY?: boolean | undefined;
    /**
     * Modify the resizing direction to be right-to-left.
     */
    rtl?: boolean | undefined;
};
import type Application from "@client/appv1/api/application-v1.mjs";
import type ApplicationV2 from "../api/application.mjs";
