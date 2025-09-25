/**
 * A specialized subclass of the BaseLightSource which is used to render global light source linked to the scene.
 */
export default class GlobalLightSource extends BaseLightSource {
    /**
     * Name of this global light source.
     * @type {string}
     * @defaultValue GlobalLightSource.sourceType
     */
    name: string;
    /**
     * A custom polygon placeholder.
     * @type {PIXI.Polygon|number[]|null}
     */
    customPolygon: PIXI.Polygon | number[] | null;
    /** @override */
    override _createShapes(): void;
    shape: any;
    /** @override */
    override _initializeSoftEdges(): void;
    /** @override */
    override _updateGeometry(): void;
    _geometry: any;
}
import BaseLightSource from "./base-light-source.mjs";
