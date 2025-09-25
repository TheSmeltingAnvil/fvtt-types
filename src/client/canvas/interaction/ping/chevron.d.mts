/**
 * @import {PingOptions} from "../_types.mjs"
 * @import {Point} from "@common/_types.mjs";
 */
/**
 * A type of ping that points to a specific location.
 */
export default class ChevronPing extends Ping {
    /**
     * The path to the chevron texture.
     * @type {string}
     */
    static CHEVRON_PATH: string;
    /** @inheritDoc */
    _animateFrame(dt: any, animation: any): void;
    #private;
}
import Ping from "./ping.mjs";
