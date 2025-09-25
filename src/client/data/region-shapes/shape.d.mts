/**
 * @import {BaseShapeData} from "@common/data/data.mjs";
 */
/**
 * A shape of a {@link foundry.documents.RegionDocument}.
 * @template {BaseShapeData} [ShapeData=BaseShapeData]
 * @abstract
 */
export class RegionShape<ShapeData extends BaseShapeData = BaseShapeData> {
    /**
     * Create the RegionShape from the shape data.
     * @param {CircleShapeData|EllipseShapeData|PolygonShapeData|RectangleShapeData} data    The shape data.
     * @returns {RegionShape}
     */
    static create(data: CircleShapeData | EllipseShapeData | PolygonShapeData | RectangleShapeData): RegionShape;
    /**
     * Create a RegionShape.
     * @param {ShapeData} data    The shape data.
     * @internal
     */
    constructor(data: ShapeData);
    /**
     * The data of this shape.
     * It is owned by the shape and must not be modified.
     * @type {ShapeData}
     */
    get data(): ShapeData;
    /**
     * Is this a hole?
     * @type {boolean}
     */
    get isHole(): boolean;
    /**
     * The Clipper paths of this shape.
     * The winding numbers are 1 or 0.
     * @type {ReadonlyArray<ReadonlyArray<ClipperLib.IntPoint>>}
     */
    get clipperPaths(): ReadonlyArray<ReadonlyArray<ClipperLib.IntPoint>>;
    /**
     * The Clipper polygon tree of this shape.
     * @type {ClipperLib.PolyTree}
     */
    get clipperPolyTree(): ClipperLib.PolyTree;
    /**
     * Create the Clipper polygon tree of this shape.
     * This function may return a single positively-orientated and non-selfintersecting Clipper path instead of a tree,
     * which is automatically converted to a Clipper polygon tree.
     * This function is called only once. It is not called if the shape is empty.
     * @returns {ClipperLib.PolyTree|ClipperLib.IntPoint[]}
     * @protected
     * @abstract
     */
    protected _createClipperPolyTree(): ClipperLib.PolyTree | ClipperLib.IntPoint[];
    #private;
}
/**
 * A circle of a {@link foundry.documents.RegionDocument}.
 * @extends {RegionShape<CircleShapeData>}
 */
export class RegionCircleShape extends RegionShape<CircleShapeData> {
    /**
     * The vertex density epsilon used to create a polygon approximation of the circle.
     * @type {number}
     */
    static #VERTEX_DENSITY_EPSILON: number;
    /**
     * @param {CircleShapeData} data   The circle shape data.
     */
    constructor(data: CircleShapeData);
    /** @override */
    override _createClipperPolyTree(): any[];
}
/**
 * An ellipse of a {@link foundry.documents.RegionDocument}.
 * @extends {RegionShape<EllipseShapeData>}
 */
export class RegionEllipseShape extends RegionShape<EllipseShapeData> {
    /**
     * The vertex density epsilon used to create a polygon approximation of the circle.
     * @type {number}
     */
    static #VERTEX_DENSITY_EPSILON: number;
    /**
     * @param {EllipseShapeData} data   The ellipse shape data.
     */
    constructor(data: EllipseShapeData);
    /** @override */
    override _createClipperPolyTree(): any[];
}
/**
 * A polygon of a {@link foundry.documents.RegionDocument}.
 * @extends {RegionShape<PolygonShapeData>}
 */
export class RegionPolygonShape extends RegionShape<PolygonShapeData> {
    /**
     * @param {PolygonShapeData} data   The polygon shape data.
     */
    constructor(data: PolygonShapeData);
    /** @override */
    override _createClipperPolyTree(): any[];
}
/**
 * A rectangle of a {@link foundry.documents.RegionDocument}.
 * @extends {RegionShape<RectangleShapeData>}
 */
export class RegionRectangleShape extends RegionShape<RectangleShapeData> {
    /**
     * @param {RectangleShapeData} data   The rectangle shape data.
     */
    constructor(data: RectangleShapeData);
    /** @override */
    override _createClipperPolyTree(): any[];
}
import type { BaseShapeData } from "@common/data/data.mjs";
import { CircleShapeData } from "@common/data/data.mjs";
import { EllipseShapeData } from "@common/data/data.mjs";
import { PolygonShapeData } from "@common/data/data.mjs";
import { RectangleShapeData } from "@common/data/data.mjs";
