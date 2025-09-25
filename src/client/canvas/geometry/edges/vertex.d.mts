/**
 * @import {LineIntersection} from "@common/utils/_types.mjs";
 */
/**
 * @typedef PolygonVertexOptions
 * @property {number} [distance]       A known distance from a polygon origin to this vertex.
 * @property {number} [index]          An integer index of this vertex in an ordered sweep.
 * @property {boolean} [round=true]    Whether to round the input {x,y} coordinates provided.
 */
/**
 * A specialized point data structure used to represent vertices in the context of the ClockwiseSweepPolygon.
 * This class is not designed or intended for use outside of that context.
 */
export default class PolygonVertex {
    /**
     * The effective maximum texture size that Foundry VTT "ever" has to worry about.
     * @type {number}
     */
    static #MAX_TEXTURE_SIZE: number;
    /**
     * Determine the sort key to use for this vertex, arranging points from north-west to south-east.
     * @param {number} x    The x-coordinate
     * @param {number} y    The y-coordinate
     * @returns {number}    The key used to identify the vertex
     */
    static getKey(x: number, y: number): number;
    /**
     * Construct a PolygonVertex instance from some other Point structure.
     * @param {Point} point                     The point
     * @param {PolygonVertexOptions} [options]  Additional options that apply to this vertex
     * @returns {PolygonVertex}                 The constructed vertex
     */
    static fromPoint(point: Point, options?: PolygonVertexOptions): PolygonVertex;
    /**
     * Construct a PolygonVertex by providing {x, y} coordinates and vertex options.
     * @param {number} x                          The x-coordinate of the vertex
     * @param {number} y                          The y-coordinate of the vertex
     * @param {PolygonVertexOptions} [options]    Options which modify vertex context or behavior
     */
    constructor(x: number, y: number, { distance, index, round }?: PolygonVertexOptions);
    x: number;
    y: number;
    key: number;
    /**
     * The distance from a polygon origin to this vertex.
     * @type {number|undefined}
     * @internal
     */
    _distance: number | undefined;
    /**
     * The integer index of this vertex in an ordered sweep.
     * @type {number|undefined}
     * @internal
     */
    _index: number | undefined;
    /**
     * The set of edges which connect to this vertex.
     * This set is initially empty and populated later after vertices are de-duplicated.
     * @type {EdgeSet}
     */
    edges: EdgeSet;
    /**
     * The subset of edges which continue clockwise from this vertex.
     * @type {EdgeSet}
     */
    cwEdges: EdgeSet;
    /**
     * The subset of edges which continue counter-clockwise from this vertex.
     * @type {EdgeSet}
     */
    ccwEdges: EdgeSet;
    /**
     * The set of vertices collinear to this vertex
     * @type {Set<PolygonVertex>}
     */
    collinearVertices: Set<PolygonVertex>;
    /**
     * Is this vertex an endpoint of one or more edges?
     * @type {boolean}
     */
    isEndpoint: boolean;
    /**
     * Does this vertex have a single counterclockwise limiting edge?
     * @type {boolean}
     */
    isLimitingCCW: boolean;
    /**
     * Does this vertex have a single clockwise limiting edge?
     * @type {boolean}
     */
    isLimitingCW: boolean;
    /**
     * Does this vertex have non-limited edges or 2+ limited edges counterclockwise?
     * @type {boolean}
     */
    isBlockingCCW: boolean;
    /**
     * Does this vertex have non-limited edges or 2+ limited edges clockwise?
     * @type {boolean}
     */
    isBlockingCW: boolean;
    /**
     * Does this vertex result from an internal collision?
     * @type {boolean}
     */
    isInternal: boolean;
    /**
     * The maximum restriction imposed by this vertex.
     * @type {number}
     */
    restriction: number;
    /**
     * Record whether this PolygonVertex has been visited in the sweep
     * @type {boolean}
     * @internal
     */
    _visited: boolean;
    /**
     * The squared distance from a polygon origin to this vertex.
     * @type {number|undefined}
     * @internal
     */
    _d2: number | undefined;
    /**
     * The angle of the ray from the origin to this vertex.
     * @type {number|undefined}
     * @internal
     */
    _angle: number | undefined;
    /**
     * The line intersection coordinates of the two edges that create this vertex.
     * @type {LineIntersection|undefined}
     * @internal
     */
    _intersectionCoordinates: LineIntersection | undefined;
    /**
     * Is this vertex limited in type?
     * @returns {boolean}
     */
    get isLimited(): boolean;
    /**
     * Associate an edge with this vertex.
     * @param {Edge} edge             The edge being attached
     * @param {number} orientation    The orientation of the edge with respect to the origin
     * @param {string} type           The restriction type of polygon being created
     */
    attachEdge(edge: Edge, orientation: number, type: string): void;
    /**
     * Is this vertex the same point as some other vertex?
     * @param {PolygonVertex} other   Some other vertex
     * @returns {boolean}             Are they the same point?
     */
    equals(other: PolygonVertex): boolean;
    #private;
}
export type PolygonVertexOptions = {
    /**
     * A known distance from a polygon origin to this vertex.
     */
    distance?: number | undefined;
    /**
     * An integer index of this vertex in an ordered sweep.
     */
    index?: number | undefined;
    /**
     * Whether to round the input {x,y} coordinates provided.
     */
    round?: boolean | undefined;
};
import type { LineIntersection } from "@common/utils/_types.mjs";
