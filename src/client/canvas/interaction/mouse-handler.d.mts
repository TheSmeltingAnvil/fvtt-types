/**
 * @import {ControlIcon} from "../containers/_module.mjs";
 */
/**
 * Handle mouse interaction events for a Canvas object.
 * There are three phases of events: hover, click, and drag
 *
 * Hover Events:
 * _handlePointerOver
 *  action: hoverIn
 * _handlePointerOut
 *  action: hoverOut
 *
 * Left Click and Double-Click
 * _handlePointerDown
 *  action: clickLeft
 *  action: clickLeft2
 *  action: unclickLeft
 *
 * Right Click and Double-Click
 * _handleRightDown
 *  action: clickRight
 *  action: clickRight2
 *  action: unclickRight
 *
 * Drag and Drop
 * _handlePointerMove
 *  action: dragLeftStart
 *  action: dragRightStart
 *  action: dragLeftMove
 *  action: dragRightMove
 * _handlePointerUp
 *  action: dragLeftDrop
 *  action: dragRightDrop
 * _handleDragCancel
 *  action: dragLeftCancel
 *  action: dragRightCancel
 */
export default class MouseInteractionManager {
    /**
     * Enumerate the states of a mouse interaction workflow.
     * 0: NONE - the object is inactive
     * 1: HOVER - the mouse is hovered over the object
     * 2: CLICKED - the object is clicked
     * 3: GRABBED - the object is grabbed
     * 4: DRAG - the object is being dragged
     * 5: DROP - the object is being dropped
     * @enum {number}
     */
    static INTERACTION_STATES: {
        NONE: number;
        HOVER: number;
        CLICKED: number;
        GRABBED: number;
        DRAG: number;
        DROP: number;
    };
    /**
     * Enumerate the states of handle outcome.
     * -2: SKIPPED - the handler has been skipped by previous logic
     * -1: DISALLOWED - the handler has dissallowed further process
     *  1: REFUSED - the handler callback has been processed and is refusing further process
     *  2: ACCEPTED - the handler callback has been processed and is accepting further process
     * @enum {number}
     */
    static #HANDLER_OUTCOME: {
        SKIPPED: number;
        DISALLOWED: number;
        REFUSED: number;
        ACCEPTED: number;
    };
    /**
     * The minimum distance, measured in screen-coordinate pixels, that a pointer must move to initiate a drag operation.
     * This default value can be overridden by specifying the `dragResistance` option when invoking the constructor.
     * @type {number}
     */
    static DEFAULT_DRAG_RESISTANCE_PX: number;
    /**
     * The maximum number of milliseconds between two clicks to be considered a double-click.
     * @type {number}
     */
    static DOUBLE_CLICK_TIME_MS: number;
    /**
     * The maximum number of pixels between two clicks to be considered a double-click.
     * @type {number}
     */
    static DOUBLE_CLICK_DISTANCE_PX: number;
    /**
     * The number of milliseconds of mouse click depression to consider it a long press.
     * @type {number}
     */
    static LONG_PRESS_DURATION_MS: number;
    /**
     * Global timeout for the long-press event.
     * @type {number|null}
     */
    static longPressTimeout: number | null;
    /**
     * Emulate a pointermove event on the main game canvas.
     * This method must be called when an object with the static event mode or any of its parents is transformed
     * or its visibility is changed.
     */
    static emulateMoveEvent(): void;
    static #emulateMoveEvent: Function;
    /**
     * @param {PIXI.DisplayObject} object              The Canvas object (e.g., a Token, Tile, or Drawing) to which
     *                                                 mouse events should be bound.
     * @param {PIXI.Container} layer                   The Canvas Layer that contains the object.
     * @param {object} [permissions={}]                An object of permission checks, keyed by action name, which return
     *                                                 a boolean or invoke a function for whether the action is allowed.
     * @param {object} [callbacks={}]                  An object of callback functions, keyed by action name, which will
     *                                                 be executed during the event workflow (e.g., hoverIn, clickLeft).
     * @param {object} [options={}]                    Additional options that configure interaction behavior.
     * @param {string} [options.target]                If provided, the property name on `object` which references a
     *                                                 {@link foundry.canvas.containers.ControlIcon}.
     *                                                 This is used to set {@link MouseInteractionManager#controlIcon}.
     * @param {number} [options.dragResistance=10]     A minimum number of pixels the mouse must move before a drag is
     *                                                 initiated.
     * @param {PIXI.Application} [options.application] A specific PIXI Application to use for pointer event handling
     *                                                 defaults to `canvas.app` if not provided.
     */
    constructor(object: PIXI.DisplayObject, layer: PIXI.Container, permissions?: object, callbacks?: object, options?: {
        target?: string | undefined;
        dragResistance?: number | undefined;
        application?: any;
    });
    object: PIXI.DisplayObject;
    layer: PIXI.Container;
    permissions: object;
    callbacks: object;
    /**
     * Interaction options which configure handling workflows
     * @type {{target: PIXI.DisplayObject, dragResistance: number}}
     */
    options: {
        target: PIXI.DisplayObject;
        dragResistance: number;
    };
    /**
     * The current interaction state
     * @type {number}
     */
    state: number;
    /**
     * Bound interaction data object to populate with custom data.
     * @type {Record<string, any>}
     */
    interactionData: Record<string, any>;
    /**
     * The drag handling time
     * @type {number}
     */
    dragTime: number;
    /**
     * The time of the last left-click event
     * @type {number}
     */
    lcTime: number;
    /**
     * The time of the last right-click event
     * @type {number}
     */
    rcTime: number;
    /**
     * A flag for whether we are right-click dragging
     * @type {boolean}
     * @internal
     */
    _dragRight: boolean;
    /**
     * An optional ControlIcon instance for the object
     * @type {ControlIcon|null}
     */
    controlIcon: ControlIcon | null;
    /**
     * The view id pertaining to the PIXI Application.
     * If not provided, default to canvas.app.view.id
     * @type {string}
     */
    viewId: string;
    /**
     * The client position of the last left/right-click.
     * @type {PIXI.Point}
     */
    lastClick: PIXI.Point;
    /**
     * Get the target.
     * @type {PIXI.DisplayObject}
     */
    get target(): PIXI.DisplayObject;
    /**
     * Is this mouse manager in a dragging state?
     * @type {boolean}
     */
    get isDragging(): boolean;
    /**
     * Activate interactivity for the handled object
     */
    activate(): this;
    /**
     * Test whether the current user has permission to perform a step of the workflow
     * @param {string} action     The action being attempted
     * @param {Event|PIXI.FederatedEvent} event The event being handled
     * @returns {boolean}         Can the action be performed?
     */
    can(action: string, event: Event | PIXI.FederatedEvent): boolean;
    /**
     * Execute a callback function associated with a certain action in the workflow
     * @param {string} action     The action being attempted
     * @param {Event|PIXI.FederatedEvent} event The event being handled
     * @param {...*} args         Additional callback arguments.
     * @returns {boolean}         A boolean which may indicate that the event was handled by the callback.
     *                            Events which do not specify a callback are assumed to have been handled as no-op.
     */
    callback(action: string, event: Event | PIXI.FederatedEvent, ...args: any[]): boolean;
    /**
     * A reference to the possible interaction states which can be observed
     * @returns {Record<string, number>}
     */
    get states(): Record<string, number>;
    /**
     * A reference to the possible interaction states which can be observed
     * @returns {Record<string, number>}
     */
    get handlerOutcomes(): Record<string, number>;
    /**
     * A public method to handle directly an event into this manager, according to its type.
     * Note: drag events are not handled.
     * @param {PIXI.FederatedEvent} event
     * @returns {boolean} Has the event been processed?
     */
    handleEvent(event: PIXI.FederatedEvent): boolean;
    /**
     * A public method to cancel a current interaction workflow from this manager.
     * @param {PIXI.FederatedEvent} [event]     The event that initiates the cancellation
     */
    cancel(event?: PIXI.FederatedEvent): void;
    /**
     * Reset the mouse manager.
     * @param {object} [options]
     * @param {boolean} [options.interactionData=true]    Reset the interaction data?
     * @param {boolean} [options.state=true]              Reset the state?
     */
    reset({ interactionData, state }?: {
        interactionData?: boolean | undefined;
        state?: boolean | undefined;
    }): void;
    #private;
}
import type { ControlIcon } from "../containers/_module.mjs";
