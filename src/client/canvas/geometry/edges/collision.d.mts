/**
 * A specialized object that contains the result of a collision in the context of the ClockwiseSweepPolygon.
 * This class is not designed or intended for use outside of that context.
 */
export default class CollisionResult {
    constructor({ target, collisions, cwEdges, ccwEdges, isBehind, isLimited, wasLimited }?: {
        collisions?: never[] | undefined;
    });
    /**
     * The vertex that was the target of this result
     * @type {PolygonVertex}
     */
    target: PolygonVertex;
    /**
     * The array of collision points which apply to this result
     * @type {PolygonVertex[]}
     */
    collisions: PolygonVertex[];
    /**
     * The set of edges connected to the target vertex that continue clockwise
     * @type {EdgeSet}
     */
    cwEdges: EdgeSet;
    /**
     * The set of edges connected to the target vertex that continue counter-clockwise
     * @type {EdgeSet}
     */
    ccwEdges: EdgeSet;
    /**
     * Is the target vertex for this result behind some closer active edge?
     * @type {boolean}
     */
    isBehind: boolean;
    /**
     * Does the target vertex for this result impose a limited collision?
     * @type {boolean}
     */
    isLimited: boolean;
    /**
     * Has the set of collisions for this result encountered a limited edge?
     * @type {boolean}
     */
    wasLimited: boolean;
    /**
     * Is this result limited in the clockwise direction?
     * @type {boolean}
     */
    limitedCW: boolean;
    /**
     * Is this result limited in the counter-clockwise direction?
     * @type {boolean}
     */
    limitedCCW: boolean;
    /**
     * Is this result blocking in the clockwise direction?
     * @type {boolean}
     */
    blockedCW: boolean;
    /**
     * Is this result blocking in the counter-clockwise direction?
     * @type {boolean}
     */
    blockedCCW: boolean;
    /**
     * Previously blocking in the clockwise direction?
     * @type {boolean}
     */
    blockedCWPrev: boolean;
    /**
     * Previously blocking in the counter-clockwise direction?
     * @type {boolean}
     */
    blockedCCWPrev: boolean;
}
