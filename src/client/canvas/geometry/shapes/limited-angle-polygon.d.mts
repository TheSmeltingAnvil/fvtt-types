/**
 * A special class of Polygon which implements a limited angle of emission for a Point Source.
 * The shape is defined by a point origin, radius, angle, and rotation.
 * The shape is further customized by a configurable density which informs the approximation.
 * An optional secondary externalRadius can be provided which adds supplementary visibility outside the primary angle.
 */
export default class LimitedAnglePolygon {
    /**
     * Test whether a vertex lies between two boundary rays.
     * If the angle is greater than 180, test for points between rMax and rMin (inverse).
     * Otherwise, keep vertices that are between the rays directly.
     * @param {Point} point             The candidate point
     * @param {PolygonRay} rMin         The counter-clockwise bounding ray
     * @param {PolygonRay} rMax         The clockwise bounding ray
     * @param {number} angle            The angle being tested, in degrees
     * @returns {boolean}               Is the vertex between the two rays?
     */
    static pointBetweenRays(point: Point, rMin: PolygonRay, rMax: PolygonRay, angle: number): boolean;
    constructor(origin: any, { radius, angle, rotation, density, externalRadius }?: {
        angle?: number | undefined;
        rotation?: number | undefined;
        externalRadius?: number | undefined;
    });
    /**
     * The origin point of the Polygon
     * @type {Point}
     */
    origin: Point;
    /**
     * The radius of the emitted cone.
     * @type {number}
     */
    radius: number;
    /**
     * The angle of the Polygon in degrees.
     * @type {number}
     */
    angle: number;
    /**
     * The direction of rotation at the center of the emitted angle in degrees.
     * @type {number}
     */
    rotation: number;
    /**
     * The density of rays which approximate the cone, defined as rays per PI.
     * @type {number}
     */
    density: number;
    /**
     * An optional "external radius" which is included in the polygon for the supplementary area outside the cone.
     * @type {number}
     */
    externalRadius: number;
    /**
     * The angle of the left (counter-clockwise) edge of the emitted cone in radians.
     * @type {number}
     */
    aMin: number;
    /**
     * The angle of the right (clockwise) edge of the emitted cone in radians.
     * @type {number}
     */
    aMax: number;
    /**
     * The bounding box of the circle defined by the externalRadius, if any
     * @type {PIXI.Rectangle}
     */
    externalBounds: PIXI.Rectangle;
    /**
     * Restrict the edges which should be included in a PointSourcePolygon based on this specialized shape.
     * We use two tests to jointly keep or reject edges.
     * 1. If this shape uses an externalRadius, keep edges which collide with the bounding box of that circle.
     * 2. Keep edges which are contained within or collide with one of the primary angle boundary rays.
     * @param {Point} a             The first edge vertex
     * @param {Point} b             The second edge vertex
     * @returns {boolean}           Should the edge be included in the PointSourcePolygon computation?
     * @internal
     */
    _includeEdge(a: Point, b: Point): boolean;
    #private;
}
