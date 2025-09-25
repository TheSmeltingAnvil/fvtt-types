/**
 * A specialized subclass of the BaseLightSource which renders a source of darkness as a point-based effect.
 * @extends {BaseLightSource}
 * @mixes PointEffectSource
 */
export default class PointDarknessSource extends BaseLightSource {
    /** @override */
    static override _dimLightingLevel: -1;
    /** @override */
    static override _brightLightingLevel: -2;
    /** @override */
    static override get ANIMATIONS(): CONFIG.DarknessSourceAnimationConfig;
    /** @override */
    static override get _layers(): {
        darkness: {
            defaultShader: typeof AdaptiveDarknessShader;
            blendMode: string;
        };
    };
    /**
     * The optional geometric shape is solely utilized for visual representation regarding darkness sources.
     * Used only when an additional radius is added for visuals.
     * @type {SourceShape}
     * @protected
     */
    protected _visualShape: SourceShape;
    /**
     * Padding applied on the darkness source shape for visual appearance only.
     * Note: for now, padding is increased radius. It might evolve in a future release.
     * @type {number}
     * @protected
     */
    protected _padding: number;
    /** @override */
    override get requiresEdges(): boolean;
    /**
     * A convenience accessor to the darkness layer mesh.
     * @type {PointSourceMesh}
     */
    get darkness(): PointSourceMesh;
    /** @override */
    override testPoint(point: any): boolean;
    /** @override */
    override _createShapes(): void;
    shape: any;
    /** @inheritDoc */
    _getPolygonConfiguration(): any;
    /** @inheritDoc */
    _drawMesh(layerId: any): any;
    /** @override */
    override _updateGeometry(): void;
    _geometry: any;
    /**
     * Update the uniforms of the shader on the darkness layer.
     * @protected
     */
    protected _updateDarknessUniforms(): void;
    #private;
}
import BaseLightSource from "./base-light-source.mjs";
import AdaptiveDarknessShader from "../rendering/shaders/lighting/darkness-lighting.mjs";
