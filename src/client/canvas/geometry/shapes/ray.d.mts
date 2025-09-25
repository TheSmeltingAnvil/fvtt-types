/**
 * @import {RayIntersection} from "../_types.mjs"
 * @import {LineIntersection} from "@common/utils/_types.mjs";
 */
/**
 * A ray for the purposes of computing sight and collision
 * Given points A[x,y] and B[x,y]
 *
 * Slope-Intercept form:
 * y = a + bx
 * y = A.y + ((B.y - A.Y) / (B.x - A.x))x
 *
 * Parametric form:
 * R(t) = (1-t)A + tB
 *
 * @param {Point} A      The origin of the Ray
 * @param {Point} B      The destination of the Ray
 */
export default class Ray {
    /**
     * A factory method to construct a Ray from an origin point, an angle, and a distance
     * @param {number} x          The origin x-coordinate
     * @param {number} y          The origin y-coordinate
     * @param {number} radians    The ray angle in radians
     * @param {number} distance   The distance of the ray in pixels
     * @returns {Ray}             The constructed Ray instance
     */
    static fromAngle(x: number, y: number, radians: number, distance: number): Ray;
    /**
     * A factory method to construct a Ray from points in array format.
     * @param {number[]} A    The origin point [x,y]
     * @param {number[]} B    The destination point [x,y]
     * @returns {Ray}         The constructed Ray instance
     */
    static fromArrays(A: number[], B: number[]): Ray;
    /**
     * Create a Ray by projecting a certain distance towards a known point.
     * @param {Point} origin      The origin of the Ray
     * @param {Point} point       The point towards which to project
     * @param {number} distance   The distance of projection
     * @returns {Ray}
     */
    static towardsPoint(origin: Point, point: Point, distance: number): Ray;
    /**
     * Create a Ray by projecting a certain squared-distance towards a known point.
     * @param {Point} origin      The origin of the Ray
     * @param {Point} point       The point towards which to project
     * @param {number} distance2  The squared distance of projection
     * @returns {Ray}
     */
    static towardsPointSquared(origin: Point, point: Point, distance2: number): Ray;
    constructor(A: any, B: any);
    /**
     * The origin point, {x, y}
     * @type {Point}
     */
    A: Point;
    /**
     * The destination point, {x, y}
     * @type {Point}
     */
    B: Point;
    /**
     * The origin y-coordinate
     * @type {number}
     */
    y0: number;
    /**
     * The origin x-coordinate
     * @type {number}
     */
    x0: number;
    /**
     * The horizontal distance of the ray, x1 - x0
     * @type {number}
     */
    dx: number;
    /**
     * The vertical distance of the ray, y1 - y0
     * @type {number}
     */
    dy: number;
    /**
     * The slope of the ray, dy over dx
     * @type {number}
     */
    slope: number;
    set angle(value: number);
    /**
     * The normalized angle of the ray in radians on the range (-PI, PI).
     * The angle is computed lazily (only if required) and cached.
     * @type {number}
     */
    get angle(): number;
    /**
     * A normalized bounding rectangle that encompasses the Ray
     * @type {PIXI.Rectangle}
     */
    get bounds(): PIXI.Rectangle;
    set distance(value: number);
    /**
     * The distance (length) of the Ray in pixels.
     * The distance is computed lazily (only if required) and cached.
     * @type {number}
     */
    get distance(): number;
    /**
     * Project the Array by some proportion of it's initial distance.
     * Return the coordinates of that point along the path.
     * @param {number} t    The distance along the Ray
     * @returns {Object}    The coordinates of the projected point
     */
    project(t: number): Object;
    /**
     * Reverse the direction of the Ray, returning a second Ray
     * @returns {Ray}
     */
    reverse(): Ray;
    /**
     * Create a new ray which uses the same origin point, but a slightly offset angle and distance
     * @param {number} offset       An offset in radians which modifies the angle of the original Ray
     * @param {number} [distance]   A distance the new ray should project, otherwise uses the same distance.
     * @return {Ray}                A new Ray with an offset angle
     */
    shiftAngle(offset: number, distance?: number): Ray;
    /**
     * Find the point I[x,y] and distance t* on ray R(t) which intersects another ray.
     * @see {@link foundry.utils.lineSegmentIntersection}
     *
     * @param {[number, number, number, number]} coords An array of four coordinates `[x1, y1, x2, y2]`.
     * @returns {LineIntersection|null}   The intersection result from foundry.utils.lineSegmentIntersection
     *   or `null` if no intersection was found.
     */
    intersectSegment(coords: [number, number, number, number]): LineIntersection | null;
    #private;
}
import type { LineIntersection } from "@common/utils/_types.mjs";
