/**
 * @import {VertexMap} from "./_types.mjs"
 * @import {EdgeSet} from "./_types.mjs"
 * @import {PolygonRay} from "./_types.mjs"
 * @import {ClockwiseSweepPolygonConfig} from "./_types.mjs"
 */
/**
 * A PointSourcePolygon implementation that uses CCW (counter-clockwise) geometry orientation.
 * Sweep around the origin, accumulating collision points based on the set of active walls.
 * This algorithm was created with valuable contributions from https://github.com/caewok
 * @extends {PointSourcePolygon<PointSourcePolygonConfig & ClockwiseSweepPolygonConfig>}
 */
export default class ClockwiseSweepPolygon extends PointSourcePolygon<any> {
    constructor();
    /**
     * A mapping of vertices which define potential collision points
     * @type {VertexMap}
     */
    vertices: VertexMap;
    /**
     * The set of edges which define potential boundaries of the polygon
     * @type {EdgeSet}
     */
    edges: EdgeSet;
    /**
     * A collection of rays which are fired at vertices
     * @type {PolygonRay[]}
     */
    rays: PolygonRay[];
    /**
     * Is this polygon using inner bounds?
     * @type {boolean}
     */
    get useInnerBounds(): boolean;
    /** @inheritDoc */
    initialize(origin: any, config: any): void;
    /**
     * Determine the edge types and their manner of inclusion for this polygon instance.
     * @param {string} type
     * @param {number} priority
     * @param {object} [config={}]           Optional polygon config which may include deprecated properties
     * @returns {Record<EdgeType, {priority: number, mode: 0|1|2}>}
     * @protected
     */
    protected _determineEdgeTypes(type: string, priority: number, config?: object): Record<EdgeType, {
        priority: number;
        mode: 0 | 1 | 2;
    }>;
    /**
     * Retrieves the super-set of walls that could potentially apply to this polygon.
     * Utilizes a custom collision test and the Quadtree to obtain candidate edges efficiently.
     * @protected
     */
    protected _identifyEdges(): void;
    /**
     * Test whether a wall should be included in the computed polygon for a given origin and type
     * @param {Edge} edge                     The Edge being considered
     * @param {Record<EdgeType, {priority: number, mode: 0|1|2}>} edgeTypes Which types of edges are being used?
     *                                                                        0=no, 1=maybe, 2=always
     * @returns {boolean}                     Should the edge be included?
     * @protected
     */
    protected _testEdgeInclusion(edge: Edge, edgeTypes: Record<EdgeType, {
        priority: number;
        mode: 0 | 1 | 2;
    }>): boolean;
    /**
     * Compute the aggregate bounding box which is the intersection of all boundary shapes.
     * Round and pad the resulting rectangle by 1 pixel to ensure it always contains the origin.
     * @returns {PIXI.Rectangle}
     * @protected
     */
    protected _defineBoundingBox(): PIXI.Rectangle;
    /**
     * Consolidate all vertices from identified edges and register them as part of the vertex mapping.
     * @protected
     */
    protected _identifyVertices(): void;
    /**
     * Add additional vertices for intersections between edges.
     * @param {Map<string, Edge>} edgeMap
     * @protected
     */
    protected _identifyIntersections(edgeMap: Map<string, Edge>): void;
    /**
     * Execute the sweep over wall vertices
     * @protected
     */
    protected _executeSweep(): void;
    /**
     * Determine the initial set of active edges as those which intersect with the initial ray
     * @returns {EdgeSet}             A set of initially active edges
     * @protected
     */
    protected _initializeActiveEdges(): EdgeSet;
    /**
     * Sort vertices clockwise from the initial ray (due west).
     * @returns {PolygonVertex[]}             The array of sorted vertices
     * @protected
     */
    protected _sortVertices(): PolygonVertex[];
    /**
     * Test whether a target vertex is behind some closer active edge.
     * If the vertex is to the left of the edge, is must be behind the edge relative to origin.
     * If the vertex is collinear with the edge, it should be considered "behind" and ignored.
     * We know edge.vertexA is ccw to edge.vertexB because of the logic in _identifyVertices.
     * @param {PolygonVertex} vertex      The target vertex
     * @param {EdgeSet} activeEdges       The set of active edges
     * @returns {{isBehind: boolean, wasLimited: boolean}} Is the target vertex behind some closer edge?
     * @protected
     */
    protected _isVertexBehindActiveEdges(vertex: PolygonVertex, activeEdges: EdgeSet): {
        isBehind: boolean;
        wasLimited: boolean;
    };
    /**
     * Determine the result for the sweep at a given vertex
     * @param {PolygonVertex} vertex      The target vertex
     * @param {EdgeSet} activeEdges       The set of active edges
     * @param {boolean} hasCollinear      Are there collinear vertices behind the target vertex?
     * @protected
     */
    protected _determineSweepResult(vertex: PolygonVertex, activeEdges: EdgeSet, hasCollinear?: boolean): void;
    /**
     * Switch to a new active edge.
     * Moving from the origin, a collision that first blocks a side must be stored as a polygon point.
     * Subsequent collisions blocking that side are ignored. Once both sides are blocked, we are done.
     *
     * Collisions that limit a side will block if that side was previously limited.
     *
     * If neither side is blocked and the ray internally collides with a non-limited edge, n skip without adding polygon
     * endpoints. Sight is unaffected before this edge, and the internal collision can be ignored.
     *
     * @param {CollisionResult} result    The pending collision result
     * @param {EdgeSet} activeEdges       The set of currently active edges
     * @protected
     */
    protected _switchEdge(result: CollisionResult, activeEdges: EdgeSet): void;
    /** @override */
    override _testCollision(ray: any, mode: any): any;
    /**
     * Visualize the polygon, displaying its computed area, rays, and collision points
     * @param {Ray} ray
     * @param {PolygonVertex[]} collisions
     * @protected
     */
    protected _visualizeCollision(ray: Ray, collisions: PolygonVertex[]): void;
    /**
     * This function has been adapted from Clipper's CleanPolygon function.
     * When adding a new point to the polygon, check for collinearity with prior points to cull unnecessary points.
     * This also removes spikes where we traverse points (a, b, a).
     * We also enforce a minimum distance between two points, or a minimum perpendicular distance between three almost
     * collinear points.
     * @override
     */
    override addPoint({ x, y }: {
        x: any;
        y: any;
    }): this;
    #private;
}
import PointSourcePolygon from "./shapes/source-polygon.mjs";
import type { VertexMap } from "./_types.mjs";
import type { EdgeSet } from "./_types.mjs";
import type { PolygonRay } from "./_types.mjs";
import PolygonVertex from "./edges/vertex.mjs";
import CollisionResult from "./edges/collision.mjs";
import Ray from "./shapes/ray.mjs";
