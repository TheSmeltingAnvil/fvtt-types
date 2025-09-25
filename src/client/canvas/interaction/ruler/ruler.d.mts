/**
 * @import {RulerWaypoint} from "../../../_types.mjs";
 */
/**
 * The default implementation of the Ruler.
 */
export default class Ruler extends BaseRuler {
    /**
     * A handlebars template used to render each waypoint label.
     * @type {string}
     */
    static WAYPOINT_LABEL_TEMPLATE: string;
    constructor(user: any);
    /**
     * Configure the properties of the outline.
     * Called in {@link Ruler#draw}.
     * @returns {{thickness: number; color: PIXI.ColorSource}}    The thickness in pixels and the color
     * @protected
     */
    protected _configureOutline(): {
        thickness: number;
        color: PIXI.ColorSource;
    };
    /**
     * Get the context used to render a ruler waypoint label.
     * @param {DeepReadonly<RulerWaypoint>} waypoint
     * @param {object} state
     * @returns {object|void}
     * @protected
     */
    protected _getWaypointLabelContext(waypoint: DeepReadonly<RulerWaypoint>, state: object): object | void;
    /**
     * Get the style of the waypoint at the given waypoint.
     * @param {DeepReadonly<RulerWaypoint>} waypoint    The waypoint
     * @returns {{radius: number; color?: PIXI.ColorSource; alpha?: number}}
     *   The radius, color, and alpha of the waypoint
     * @protected
     */
    protected _getWaypointStyle(waypoint: DeepReadonly<RulerWaypoint>): {
        radius: number;
        color?: PIXI.ColorSource;
        alpha?: number;
    };
    /**
     * Get the style of the segment from the previous to the given waypoint.
     * @param {DeepReadonly<RulerWaypoint>} waypoint    The waypoint
     * @returns {{width: number, color?: PIXI.ColorSource, alpha?: number}}
     *   The line width, color, and alpha of the segment
     * @protected
     */
    protected _getSegmentStyle(waypoint: DeepReadonly<RulerWaypoint>): {
        width: number;
        color?: PIXI.ColorSource;
        alpha?: number;
    };
    /**
     * @deprecated since v13
     * @ignore
     */
    get color(): any;
    /**
     * @deprecated since v13
     * @ignore
     */
    get ruler(): PIXI.Graphics;
    #private;
}
import BaseRuler from "./base-ruler.mjs";
import type { RulerWaypoint } from "../../../_types.mjs";
