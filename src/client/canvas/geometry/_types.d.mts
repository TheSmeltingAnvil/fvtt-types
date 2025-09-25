export type ClipperPoint = {
    X: number;
    Y: number;
};
export type EdgeType = "wall" | "darkness" | "light" | "innerBounds" | "outerBounds";
export type EdgeOptions = Record<EdgeType, boolean>;
export type PointSourcePolygonType = "light" | "darkness" | "sight" | "sound" | "move" | "universal";
export type PointSourcePolygonConfig = {
    /**
     * The type of polygon being computed
     */
    type: PointSourcePolygonType;
    /**
     * The angle of emission, if limited
     */
    angle?: number | undefined;
    /**
     * The desired density of padding rays, a number per PI
     */
    density?: number | undefined;
    /**
     * A limited radius of the resulting polygon
     */
    radius?: number | undefined;
    /**
     * The direction of facing, required if the angle is limited
     */
    rotation?: number | undefined;
    /**
     * Customize how wall direction of one-way walls is applied
     */
    wallDirectionMode?: number | undefined;
    /**
     * Compute the polygon with threshold wall constraints applied
     */
    useThreshold?: boolean | undefined;
    /**
     * Display debugging visualization and logging for the polygon
     */
    debug?: boolean | undefined;
    /**
     * The object (if any) that spawned this polygon.
     */
    source?: PointEffectSource;
    /**
     * Limiting polygon boundary shapes
     */
    boundaryShapes?: any[] | undefined;
    /**
     * Does this polygon have a limited radius?
     */
    hasLimitedRadius?: boolean | undefined;
    /**
     * Does this polygon have a limited angle?
     */
    hasLimitedAngle?: boolean | undefined;
    /**
     * The computed bounding box for the polygon
     */
    boundingBox?: PIXI.Rectangle;
};
export type ClockwiseSweepPolygonConfig = {
    /**
     * Optional priority when it comes to ignore edges from darkness and light sources
     */
    priority?: number | undefined;
    /**
     * Edge types configuration object. This is
     */
    edgeTypes?: Record<EdgeType, {
        priority: number;
        mode: 0 | 1 | 2;
    }> | undefined;
    /**
     * Deactivate/Activate specific edge types behaviors
     * not required by most polygons and will be inferred based on the polygon type and priority.
     */
    edgeOptions?: EdgeOptions | undefined;
};
export type RayIntersection = {
    /**
     * The x-coordinate of intersection
     */
    x: number;
    /**
     * The y-coordinate of intersection
     */
    y: number;
    /**
     * The proximity to the Ray origin, as a ratio of distance
     */
    t0: number;
    /**
     * The proximity to the Ray destination, as a ratio of distance
     */
    t1: number;
};
export type QuadtreeObject = {
    r: PIXI.Rectangle;
    t: any;
    n?: Set<Quadtree> | undefined;
};
export type VertexMap = Map<number, PolygonVertex>;
export type EdgeSet = Set<Edge>;
export type PolygonRay = Ray;
