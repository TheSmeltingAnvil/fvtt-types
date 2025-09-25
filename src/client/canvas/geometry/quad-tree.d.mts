/**
 * @import {QuadtreeObject} from "../_types.mjs"
 */
/**
 * A Quadtree implementation that supports collision detection for rectangles.
 *
 * @param {PIXI.Rectangle} bounds                The outer bounds of the region
 * @param {object} [options]                Additional options which configure the Quadtree
 * @param {number} [options.maxObjects=20]  The maximum number of objects per node
 * @param {number} [options.maxDepth=4]     The maximum number of levels within the root Quadtree
 * @param {number} [options._depth=0]       The depth level of the sub-tree. For internal use
 * @param {number} [options._root]          The root of the quadtree. For internal use
 */
export default class Quadtree {
    /**
     * A constant that enumerates the index order of the quadtree nodes from top-left to bottom-right.
     * @enum {number}
     */
    static INDICES: {
        tl: number;
        tr: number;
        bl: number;
        br: number;
    };
    constructor(bounds: any, { maxObjects, maxDepth, _depth, _root }?: {
        maxObjects?: number | undefined;
        maxDepth?: number | undefined;
        _depth?: number | undefined;
    });
    /**
     * Bounding rectangle of the quadtree.
     * @type {PIXI.Rectangle|{x: number, y: number, width: number, height: number}}
     * @protected
     */
    protected _bounds: PIXI.Rectangle | {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    /**
     * The maximum number of objects allowed within this node before it must split
     * @type {number}
     */
    maxObjects: number;
    /**
     * The maximum number of levels that the base quadtree is allowed
     * @type {number}
     */
    maxDepth: number;
    /**
     * The depth of this node within the root Quadtree
     * @type {number}
     */
    depth: number;
    /**
     * The objects contained at this level of the tree
     * @type {QuadtreeObject[]}
     */
    objects: QuadtreeObject[];
    /**
     * Children of this node
     * @type {Quadtree[]}
     */
    nodes: Quadtree[];
    /**
     * The root Quadtree
     * @type {Quadtree}
     */
    root: Quadtree;
    set bounds(newBounds: PIXI.Rectangle);
    /**
     * The bounding rectangle of the region
     * @type {PIXI.Rectangle}
     */
    get bounds(): PIXI.Rectangle;
    set width(w: number);
    /**
     * The width of the bounding rectangle
     * @type {number}
     */
    get width(): number;
    set height(h: number);
    /**
     * The height of the bounding rectangle
     * @type {number}
     */
    get height(): number;
    set x(x: number);
    /**
     * The x-coordinate of the bounding rectangle
     * @type {number}
     */
    get x(): number;
    set y(y: number);
    /**
     * The y-coordinate of the bounding rectangle
     * @type {number}
     */
    get y(): number;
    /**
     * Return an array of all the objects in the Quadtree (recursive)
     * @returns {QuadtreeObject[]}
     */
    get all(): QuadtreeObject[];
    /**
     * Re-position the bounding rectangle of this Quadtree, clear existing data, and re-insert all objects.
     * Useful if the Quadtree needs to move.
     * @param {number} x            The new x-coordinate of the bounding rectangle
     * @param {number} y            The new y-coordinate of the bounding rectangle
     * @returns {Quadtree}          This Quadtree for method chaining
     */
    setPosition(x: number, y: number): Quadtree;
    /**
     * Re-dimension the bounding rectangle of this Quadtree, clear existing data, and re-insert all objects.
     * Useful if the underlying canvas or region is resized.
     * @param {number} width        The new width of the bounding rectangle
     * @param {number} height       The new height of the bounding rectangle
     * @returns {Quadtree}          This Quadtree for method chaining
     */
    setDimensions(width: number, height: number): Quadtree;
    /**
     * Split this node into 4 sub-nodes.
     * @returns {Quadtree}     The split Quadtree
     */
    split(): Quadtree;
    /**
     * Clear the quadtree of all existing contents
     * @returns {Quadtree}     The cleared Quadtree
     */
    clear(): Quadtree;
    /**
     * Add a rectangle object to the tree
     * @param {QuadtreeObject} obj  The object being inserted
     * @returns {Quadtree[]} The Quadtree nodes the object was added to.
     */
    insert(obj: QuadtreeObject): Quadtree[];
    /**
     * Remove an object from the quadtree
     * @param {*} target     The quadtree target being removed
     * @returns {Quadtree}   The Quadtree for method chaining
     */
    remove(target: any): Quadtree;
    /**
     * Remove an existing object from the quadtree and re-insert it with a new position
     * @param {QuadtreeObject} obj  The object being inserted
     * @returns {Quadtree[]}        The Quadtree nodes the object was added to
     */
    update(obj: QuadtreeObject): Quadtree[];
    /**
     * Get all the objects which could collide with the provided rectangle
     * @param {PIXI.Rectangle} rect    The normalized target rectangle
     * @param {object} [options]                    Options affecting the collision test.
     * @param {Function} [options.collisionTest]    Function to further refine objects to return
     *   after a potential collision is found. Parameters are the object and rect, and the
     *   function should return true if the object should be added to the result set.
     * @param {Set} [options._s]                    The existing result set, for internal use.
     * @returns {Set}           The objects in the Quadtree which represent potential collisions
     */
    getObjects(rect: PIXI.Rectangle, { collisionTest, _s }?: {
        collisionTest?: Function | undefined;
        _s?: Set<any> | undefined;
    }): Set<any>;
    /**
     * Obtain the leaf nodes to which a target rectangle belongs.
     * This traverses the quadtree recursively obtaining the final nodes which have no children.
     * @param {PIXI.Rectangle} rect  The target rectangle.
     * @returns {Quadtree[]} The Quadtree nodes to which the target rectangle belongs
     */
    getLeafNodes(rect: PIXI.Rectangle): Quadtree[];
    /**
     * Obtain the child nodes within the current node which a rectangle belongs to.
     * Note that this function is not recursive, it only returns nodes at the current or child level.
     * @param {PIXI.Rectangle} rect  The target rectangle.
     * @returns {Quadtree[]}         The Quadtree nodes to which the target rectangle belongs
     */
    getChildNodes(rect: PIXI.Rectangle): Quadtree[];
    /**
     * Identify all nodes which are adjacent to this one within the parent Quadtree.
     * @returns {Quadtree[]}
     */
    getAdjacentNodes(): Quadtree[];
    /**
     * Visualize the nodes and objects in the quadtree
     * @param {boolean} [objects]    Visualize the rectangular bounds of objects in the Quadtree. Default is false.
     */
    visualize({ objects }?: boolean): void;
}
/**
 * A subclass of Quadtree specifically intended for classifying the location of objects on the game canvas.
 */
export class CanvasQuadtree extends Quadtree {
    /**
     * Create a CanvasQuadtree which references canvas.dimensions.rect.
     * We pass an empty object to the parent, then override _bounds.
     * @param {object} [options] Additional options passed to the parent Quadtree.
     */
    constructor(options?: object);
}
