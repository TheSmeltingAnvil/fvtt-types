/**
 * @import {PulsePingOptions} from "../_types.mjs";
 * @import {Point} from "@common/_types.mjs";
 */
/**
 * A type of ping that produces a pulsing animation.
 */
export default class PulsePing extends Ping {
    /**
     * @param {Point} origin                The canvas coordinates of the origin of the ping.
     * @param {PulsePingOptions} [options]  Additional options to configure the ping animation.
     */
    constructor(origin: Point, { rings, color2, ...options }?: PulsePingOptions);
    filters: any[] | undefined;
    /** @inheritDoc */
    _animateFrame(dt: any, animation: any): void;
    /**
     * Draw the shape for this ping.
     * @param {PIXI.Graphics} g  The graphics object to draw to.
     * @param {number} color     The color of the shape.
     * @param {number} alpha     The alpha of the shape.
     * @param {number} size      The size of the shape to draw.
     * @protected
     */
    protected _drawShape(g: PIXI.Graphics, color: number, alpha: number, size: number): void;
    #private;
}
import Ping from "./ping.mjs";
import type { Point } from "@common/_types.mjs";
import type { PulsePingOptions } from "../_types.mjs";
