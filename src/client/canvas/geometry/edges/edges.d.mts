/**
 * A specialized Map class that manages all edges used to restrict perception in a Scene.
 * Integrates with a Quadtree for efficient spatial queries.
 * @extends {Map<string, Edge>}
 */
export default class CanvasEdges extends Map<string, Edge> {
    /**
     * Maximum number of objects per node in the Quadtree.
     * @type {number}
     */
    static #QUADTREE_MAX_OBJECTS: number;
    /**
     * Maximum depth of the Quadtree.
     * @type {number}
     */
    static #QUADTREE_MAX_DEPTH: number;
    constructor();
    /**
     * Clear content and initializes the quadtree.
     */
    initialize(): void;
    /**
     * @override
     */
    override set(key: any, value: any): this;
    /** @override */
    override delete(key: any): boolean;
    /** @override */
    override clear(): this;
    /**
     * Incrementally refreshes edges by computing intersections between all registered edges.
     * Utilizes the Quadtree to optimize the intersection detection process.
     */
    refresh(): void;
    /**
     * Retrieves edges that intersect with a given rectangle.
     * Utilizes the Quadtree for efficient spatial querying.
     * @param {PIXI.Rectangle} rect The rectangle to query against.
     * @param {object} options
     * @param {boolean} [options.includeInnerBounds=false] Should inner bounds be added?
     * @param {boolean} [options.includeOuterBounds=true] Should outer bounds be added?
     * @param {Function} [options.collisionTest] Collision function to test edge inclusion.
     * @returns {Set<Edge>} A set of Edge instances that intersect with the provided rectangle.
     */
    getEdges(rect: PIXI.Rectangle, { includeInnerBounds, includeOuterBounds, collisionTest }?: {
        includeInnerBounds?: boolean | undefined;
        includeOuterBounds?: boolean | undefined;
        collisionTest?: Function | undefined;
    }): Set<Edge>;
    #private;
}
import Edge from "./edge.mjs";
