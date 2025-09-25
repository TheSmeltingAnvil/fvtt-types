/**
 * @import {PulsePingOptions} from "../_types.mjs"
 * @import {Point} from "@common/_types.mjs";
 */
/**
 * A type of ping that produces an arrow pointing in a given direction.
 */
export default class ArrowPing extends PulsePing {
    /**
     * @param {Point} origin    The canvas coordinates of the origin of the ping. This becomes the arrow's tip.
     * @param {PulsePingOptions & {rotation?: number}} [options]  Additional options to configure the ping animation.
     */
    constructor(origin: Point, { rotation, ...options }?: PulsePingOptions & {
        rotation?: number;
    });
    rotation: number;
    /** @inheritDoc */
    _drawShape(g: any, color: any, alpha: any, size: any): void;
}
import PulsePing from "./pulse.mjs";
import type { Point } from "@common/_types.mjs";
import type { PulsePingOptions } from "../_types.mjs";
