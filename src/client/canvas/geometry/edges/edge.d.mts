/**
 * @import {PlaceableObject} from "@client/canvas/placeables/_module.mjs";
 * @import {WallThresholdData} from "@common/documents/_types.mjs";
 * @import {Point} from "@common/_types.mjs";
 * @import {WallDirection, WallRestrictionType, WallSenseType} from "@common/constants.mjs";
 * @import {LineIntersection} from "@common/utils/_types.mjs";
 * @import PolygonVertex from "./vertex.mjs";
 * @import {EdgeType} from "../_types.mjs";
 */
/**
 * A data structure used to represent potential edges used by the ClockwiseSweepPolygon.
 * Edges are not polygon-specific, meaning they can be reused across many polygon instances.
 */
export default class Edge {
    /**
     * Identify intersections between a provided iterable of edges.
     * @param {Iterable<Edge>} edges    An iterable of edges
     */
    static identifyEdgeIntersections(edges: Iterable<Edge>): void;
    /**
     * Construct an Edge by providing the following information.
     * @param {Point} a                     The first endpoint of the edge
     * @param {Point} b                     The second endpoint of the edge
     * @param {object} [options]            Additional options which describe the edge
     * @param {string} [options.id]                 A string used to uniquely identify this edge
     * @param {PlaceableObject} [options.object]    A PlaceableObject that is responsible for this edge, if any
     * @param {EdgeType} [options.type]             The type of edge
     * @param {WallSenseType} [options.light]       How this edge restricts light
     * @param {WallSenseType} [options.move]        How this edge restricts movement
     * @param {WallSenseType} [options.sight]       How this edge restricts sight
     * @param {WallSenseType} [options.sound]       How this edge restricts sound
     * @param {WallDirection} [options.direction=0] A direction of effect for the edge
     * @param {WallThresholdData} [options.threshold] Configuration of threshold data for this edge
     * @param {number} [options.priority=0] A source priority for this edge. Typically zero unless this edge was
     *                                      contributed by a high-priority source.
     */
    constructor(a: Point, b: Point, { id, object, direction, type, light, move, sight, sound, threshold, priority }?: {
        id?: string | undefined;
        object?: PlaceableObject | undefined;
        type?: EdgeType | undefined;
        light?: WallSenseType | undefined;
        move?: WallSenseType | undefined;
        sight?: WallSenseType | undefined;
        sound?: WallSenseType | undefined;
        direction?: WallDirection | undefined;
        threshold?: WallThresholdData | undefined;
        priority?: number | undefined;
    });
    /**
     * The first endpoint of the edge.
     * @type {PIXI.Point}
     */
    a: PIXI.Point;
    /**
     * The second endpoint of the edge.
     * @type {PIXI.Point}
     */
    b: PIXI.Point;
    /**
     * A string used to uniquely identify this edge.
     * @type {string}
     */
    id: string;
    object: PlaceableObject | undefined;
    type: EdgeType;
    /**
     * The direction of effect for the edge.
     * @type {WallDirection}
     */
    direction: WallDirection;
    /**
     * How this edge restricts light.
     * @type {WallSenseType}
     */
    light: WallSenseType;
    /**
     * How this edge restricts movement.
     * @type {WallSenseType}
     */
    move: WallSenseType;
    /**
     * How this edge restricts sight.
     * @type {WallSenseType}
     */
    sight: WallSenseType;
    /**
     * How this edge restricts sound.
     * @type {WallSenseType}
     */
    sound: WallSenseType;
    /**
     * Specialized threshold data for this edge.
     * @type {WallThresholdData}
     */
    threshold: WallThresholdData;
    priority: number;
    /**
     * The endpoint of the edge which is oriented towards the top-left.
     */
    nw: Point;
    /**
     * The endpoint of the edge which is oriented towards the bottom-right.
     */
    se: Point;
    /**
     * The rectangular bounds of the edge. Used by the quadtree.
     * @type {PIXI.Rectangle}
     */
    bounds: PIXI.Rectangle;
    /**
     * Record other edges which this one intersects with.
     * @type {{edge: Edge, intersection: LineIntersection}[]}
     */
    intersections: {
        edge: Edge;
        intersection: LineIntersection;
    }[];
    /**
     * A PolygonVertex instance.
     * Used as part of ClockwiseSweepPolygon computation.
     * @type {PolygonVertex}
     */
    vertexA: PolygonVertex;
    /**
     * A PolygonVertex instance.
     * Used as part of ClockwiseSweepPolygon computation.
     * @type {PolygonVertex}
     */
    vertexB: PolygonVertex;
    /**
     * Is this edge limited for a particular type?
     * @param {WallRestrictionType} type
     * @returns {boolean}
     */
    isLimited(type: WallRestrictionType): boolean;
    /**
     * Create a copy of the Edge which can be safely mutated.
     * @returns {Edge}
     */
    clone(): Edge;
    /**
     * Get an intersection point between this Edge and another.
     * @param {Edge} other
     * @returns {LineIntersection|void}
     */
    getIntersection(other: Edge): LineIntersection | void;
    /**
     * Test whether to apply a proximity threshold to this edge.
     * If the proximity threshold is met, this edge excluded from perception calculations.
     * @param {string} sourceType     Sense type for the source
     * @param {Point} sourceOrigin    The origin or position of the source on the canvas
     * @param {number} [externalRadius=0] The external radius of the source
     * @returns {boolean}             True if the edge has a threshold greater than 0 for the source type,
     *                                and the source type is within that distance.
     */
    applyThreshold(sourceType: string, sourceOrigin: Point, externalRadius?: number): boolean;
    /**
     * Determine the orientation of this Edge with respect to a reference point.
     * @param {Point} point       Some reference point, relative to which orientation is determined
     * @returns {number}          An orientation in CONST.WALL_DIRECTIONS which indicates whether the Point is left,
     *                            right, or collinear (both) with the Edge
     */
    orientPoint(point: Point): number;
    /**
     * Record the intersections between two edges.
     * @param {Edge} other          Another edge to test and record
     */
    recordIntersections(other: Edge): void;
    /**
     * Remove intersections of this edge with all other edges.
     */
    removeIntersections(): void;
}
import type { PlaceableObject } from "@client/canvas/placeables/_module.mjs";
import type { EdgeType } from "../_types.mjs";
import type { WallDirection } from "@common/constants.mjs";
import type { WallSenseType } from "@common/constants.mjs";
import type { WallThresholdData } from "@common/documents/_types.mjs";
import type { Point } from "@common/_types.mjs";
import type { LineIntersection } from "@common/utils/_types.mjs";
import type PolygonVertex from "./vertex.mjs";
import type { WallRestrictionType } from "@common/constants.mjs";
