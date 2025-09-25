/**
 * @import {Point} from "@common/_types.mjs";
 */
/**
 * The node of a {@link foundry.data.regionShapes.RegionPolygonTree}.
 */
export class RegionPolygonTreeNode {
    /**
     * Create a node from the Clipper path and add it to the children of the parent.
     * @param {ClipperLib.IntPoint[]} clipperPath              The clipper path of this node.
     * @param {RegionPolygonTreeNode|null} parent    The parent node or `null` if root.
     * @internal
     */
    static _fromClipperPath(clipperPath: ClipperLib.IntPoint[], parent: RegionPolygonTreeNode | null): RegionPolygonTreeNode;
    /**
     * Create a RegionPolygonTreeNode.
     * @param {RegionPolygonTreeNode|null} parent    The parent node.
     * @internal
     */
    constructor(parent: RegionPolygonTreeNode | null);
    /**
     * The parent of this node or `null` if this is the root node.
     * @type {RegionPolygonTreeNode|null}
     */
    get parent(): RegionPolygonTreeNode | null;
    /**
     * The children of this node.
     * @type {ReadonlyArray<RegionPolygonTreeNode>}
     */
    get children(): ReadonlyArray<RegionPolygonTreeNode>;
    /**
     * The depth of this node.
     * The depth of the root node is 0.
     * @type {number}
     */
    get depth(): number;
    /**
     * Is this a hole?
     * The root node is a hole.
     * @type {boolean}
     */
    get isHole(): boolean;
    /**
     * The Clipper path of this node.
     * It is empty in case of the root node.
     * @type {ReadonlyArray<ClipperLib.IntPoint>|null}
     */
    get clipperPath(): ReadonlyArray<ClipperLib.IntPoint> | null;
    /**
     * The polygon of this node.
     * It is `null` in case of the root node.
     * @type {PIXI.Polygon|null}
     */
    get polygon(): PIXI.Polygon | null;
    /**
     * The points of the polygon ([x0, y0, x1, y1, ...]).
     * They are `null` in case of the root node.
     * @type {ReadonlyArray<number>|null}
     */
    get points(): ReadonlyArray<number> | null;
    /**
     * The bounds of the polygon.
     * They are `null` in case of the root node.
     * @type {PIXI.Rectangle|null}
     */
    get bounds(): PIXI.Rectangle | null;
    /**
     * Test whether given point is contained within this node.
     * @param {Point} point    The point.
     * @returns {boolean}
     */
    testPoint(point: Point): boolean;
    /**
     * Test circle containment/intersection with this node.
     * @param {Point} center     The center point of the circle.
     * @param {number} radius    The radius of the circle.
     * @returns {-1|0|1}          - -1: the circle is in the exterior and does not intersect the boundary.
     *                            - 0: the circle is intersects the boundary.
     *                            - 1: the circle is in the interior and does not intersect the boundary.
     */
    testCircle(center: Point, radius: number): -1 | 0 | 1;
    /**
     * Iterate over recursively over the children in depth-first order.
     * @yields {RegionPolygonTreeNode}
     */
    [Symbol.iterator](): any;
    #private;
}
/**
 * The polygon tree of a Region.
 */
export class RegionPolygonTree extends RegionPolygonTreeNode {
    /**
     * Create the tree from a Clipper polygon tree.
     * @param {ClipperLib.PolyTree} clipperPolyTree
     * @internal
     */
    static _fromClipperPolyTree(clipperPolyTree: ClipperLib.PolyTree): RegionPolygonTree;
    /**
     * Create a RegionPolygonTree.
     * @internal
     */
    constructor();
}
import type { Point } from "@common/_types.mjs";
