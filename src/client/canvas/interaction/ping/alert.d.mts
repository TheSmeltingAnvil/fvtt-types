/**
 * @import {PulsePingOptions} from "../_types.mjs"
 * @import {Point} from "@common/_types.mjs";
 */
/**
 * A type of ping that produces a pulse warning sign animation.
 */
export default class AlertPing extends PulsePing {
    /** @override */
    override _drawShape(g: any, color: any, alpha: any, size: any): void;
}
import PulsePing from "./pulse.mjs";
