/**
 * @import {Rectangle} from "../_types.mjs";
 */
/**
 * A class based on PIXI.Graphics, that allows to create a resize handle in the desired area.
 * @extends PIXI.Graphics
 */
export default class ResizeHandle {
    /**
     * @param {number[]} offset        A two-element array [xFactor, yFactor] which defines the normalized
     *                                 position of this handle relative to the bounding box.
     * @param {object} [handlers={}]   An object of optional handler functions.
     * @param {Function} [handlers.canDrag] A function determining if this handle can initiate a drag.
     */
    constructor(offset: number[], handlers?: {
        canDrag?: Function | undefined;
    });
    offset: number[];
    handlers: {
        canDrag?: Function | undefined;
    };
    cursor: string;
    /**
     * Track whether the handle is being actively used for a drag workflow
     * @type {boolean}
     */
    active: boolean;
    /**
     * Refresh the position and hit area of this handle based on the provided bounding box.
     * @param {Rectangle} bounds           The bounding box in which this handle operates.
     */
    refresh(bounds: Rectangle): void;
    hitArea: any;
    /**
     * Compute updated dimensions for an object being resized, respecting optional constraints.
     * @param {Rectangle} current                  The current geometric state of the object
     * @param {Rectangle} origin                   The original position and dimensions used for reference
     * @param {object} destination                 The mouse (or pointer) destination coordinates.
     * @param {number} destination.x               The x-coordinate where the pointer was released.
     * @param {number} destination.y               The y-coordinate where the pointer was released.
     * @param {object} [options={}]                Additional options.
     * @param {number|null} [options.aspectRatio]  If provided, a numeric aspect ratio to maintain (width/height).
     * @returns {object} An object containing the adjusted {x, y, width, height}.
     */
    updateDimensions(current: Rectangle, origin: Rectangle, destination: {
        x: number;
        y: number;
    }, { aspectRatio }?: {
        aspectRatio?: number | null | undefined;
    }): object;
    /**
     * Activate listeners for pointer events, enabling hover and mouse-down behavior on the resize handle.
     */
    activateListeners(): void;
    eventMode: string | undefined;
    /**
     * Handle mouse-over event on a control handle
     * @param {PIXI.FederatedEvent} event   The mouseover event
     * @protected
     */
    protected _onHoverIn(event: PIXI.FederatedEvent): void;
    /**
     * Handle mouse-out event on a control handle
     * @param {PIXI.FederatedEvent} event   The mouseout event
     * @protected
     */
    protected _onHoverOut(event: PIXI.FederatedEvent): void;
    /**
     * When we start a drag event - create a preview copy of the Tile for re-positioning
     * @param {PIXI.FederatedEvent} event   The mousedown event
     * @protected
     */
    protected _onMouseDown(event: PIXI.FederatedEvent): void;
}
