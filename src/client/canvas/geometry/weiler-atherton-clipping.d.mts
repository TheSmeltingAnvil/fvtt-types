/**
 * An implementation of the Weiler Atherton algorithm for clipping polygons.
 * This currently only handles combinations that will not result in any holes.
 * Support may be added for holes in the future.
 *
 * This algorithm is faster than the Clipper library for this task because it relies on the unique properties of the
 * circle, ellipse, or convex simple clip object.
 * It is also more precise in that it uses the actual intersection points between the circle/ellipse and polygon,
 * instead of relying on the polygon approximation of the circle/ellipse to find the intersection points.
 *
 * For more explanation of the underlying algorithm, see:
 * https://en.wikipedia.org/wiki/Weiler%E2%80%93Atherton_clipping_algorithm
 * https://www.geeksforgeeks.org/weiler-atherton-polygon-clipping-algorithm
 * https://h-educate.in/weiler-atherton-polygon-clipping-algorithm/
 */
export default class WeilerAthertonClipper {
    /**
     * The supported clip types.
     * Values are equivalent to those in ClipperLib.ClipType.
     * @enum {number}
     */
    static CLIP_TYPES: Readonly<{
        readonly INTERSECT: 0;
        readonly UNION: 1;
    }>;
    /**
     * The supported intersection types.
     * @enum {number}
     */
    static INTERSECTION_TYPES: Readonly<{
        readonly OUT_IN: -1;
        readonly IN_OUT: 1;
        readonly TANGENT: 0;
    }>;
    /**
     * Union a polygon and clipObject using the Weiler Atherton algorithm.
     * @param {PIXI.Polygon} polygon                    Polygon to clip
     * @param {PIXI.Rectangle|PIXI.Circle} clipObject   Object to clip against the polygon
     * @param {object} clipOpts                         Options passed to the clipping object
     *                                                  methods toPolygon and pointsBetween
     * @returns {PIXI.Polygon[]}
     */
    static union(polygon: PIXI.Polygon, clipObject: PIXI.Rectangle | PIXI.Circle, clipOpts?: object): PIXI.Polygon[];
    /**
     * Intersect a polygon and clipObject using the Weiler Atherton algorithm.
     * @param {PIXI.Polygon} polygon                    Polygon to clip
     * @param {PIXI.Rectangle|PIXI.Circle} clipObject   Object to clip against the polygon
     * @param {object} clipOpts                         Options passed to the clipping object
     *                                                  methods toPolygon and pointsBetween
     * @returns {PIXI.Polygon[]}
     */
    static intersect(polygon: PIXI.Polygon, clipObject: PIXI.Rectangle | PIXI.Circle, clipOpts?: object): PIXI.Polygon[];
    /**
     * Clip a given clipObject using the Weiler-Atherton algorithm.
     *
     * At the moment, this will return a single PIXI.Polygon in the array unless clipType is a union and the polygon
     * and clipObject do not overlap, in which case the [polygon, clipObject.toPolygon()] array will be returned.
     * If this algorithm is expanded in the future to handle holes, an array of polygons may be returned.
     *
     * @param {PIXI.Polygon} polygon                    Polygon to clip
     * @param {PIXI.Rectangle|PIXI.Circle} clipObject   Object to clip against the polygon
     * @param {object} options                          Options which configure how the union or intersection is computed
     * @param {number} options.clipType                 One of {@link foundry.canvas.geometry.WeilerAthertonClipper.CLIP_TYPES}
     * @param {boolean} [options.canMutate] If the WeilerAtherton constructor could mutate or not the subject polygon points
     *
     * - Any additional properties in `options` (besides clipType and canMutate)
     *   are captured by the rest operator (`...clipOpts`) and passed to the WeilerAthertonClipper constructor.
     *
     * @returns {PIXI.Polygon[]}                        Array of polygons and clipObjects
     */
    static combine(polygon: PIXI.Polygon, clipObject: PIXI.Rectangle | PIXI.Circle, { clipType, canMutate, ...clipOpts }?: {
        clipType: number;
        canMutate?: boolean | undefined;
    }): PIXI.Polygon[];
    /**
     * Test if one shape envelops the other. Assumes the shapes do not intersect.
     *  1. Polygon is contained within the clip object. Union: clip object; Intersect: polygon
     *  2. Clip object is contained with polygon. Union: polygon; Intersect: clip object
     *  3. Polygon and clip object are outside one another. Union: both; Intersect: null
     * @param {PIXI.Polygon} polygon                    Polygon to clip
     * @param {PIXI.Rectangle|PIXI.Circle} clipObject   Object to clip against the polygon
     * @param {WeilerAthertonClipper.CLIP_TYPES} clipType One of CLIP_TYPES
     * @param {object} clipOpts                         Clip options which are forwarded to toPolygon methods
     * @returns {PIXI.Polygon[]}  Returns the polygon, the clipObject.toPolygon(), both, or neither.
     */
    static testForEnvelopment(polygon: PIXI.Polygon, clipObject: PIXI.Rectangle | PIXI.Circle, clipType: Readonly<{
        readonly INTERSECT: 0;
        readonly UNION: 1;
    }>, clipOpts: object): PIXI.Polygon[];
    /**
     * Given an array of labeled points, consolidate into a tracking array of intersections,
     * where each intersection contains its array of leadingPoints.
     * @param {Point[]} labeledPoints   Array of points, from _buildLabeledIntersectionsArray
     * @returns {Point[]} Array of intersections
     */
    static #consolidatePoints(labeledPoints: Point[]): Point[];
    /**
     * Construct a WeilerAthertonClipper instance used to perform the calculation.
     * @param {PIXI.Polygon} polygon    Polygon to clip
     * @param {PIXI.Rectangle|PIXI.Circle} clipObject  Object used to clip the polygon
     * @param {number} clipType         Type of clip to use
     * @param {object} clipOpts         Object passed to the clippingObject methods toPolygon and pointsBetween
     */
    constructor(polygon: PIXI.Polygon, clipObject: PIXI.Rectangle | PIXI.Circle, clipType: number, clipOpts: object);
    /** @type {PIXI.Polygon} */
    polygon: PIXI.Polygon;
    /** @type {PIXI.Rectangle|PIXI.Circle} */
    clipObject: PIXI.Rectangle | PIXI.Circle;
    /**
     * Configuration settings
     * @type {object} [config]
     * @param {WeilerAthertonClipper.CLIP_TYPES} [config.clipType]     One of CLIP_TYPES
     * @param {object} [config.clipOpts]      Object passed to the clippingObject methods
     *                                        toPolygon and pointsBetween
     */
    config: object;
    #private;
}
