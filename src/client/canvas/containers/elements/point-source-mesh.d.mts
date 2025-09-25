/**
 * Extension of a PIXI.Mesh for PointEffectSources.
 */
export default class PointSourceMesh {
    /** @override */
    override set geometry(value: any);
    /** @override */
    override get geometry(): any;
    /** @override */
    override addChild(): void;
    /** @override */
    override addChildAt(): void;
    /** @override */
    override calculateBounds(): void;
    /** @override */
    override _calculateBounds(): void;
    /**
     * The local bounds need to be drawn from the underlying geometry.
     * @override
     */
    override getLocalBounds(rect: any): any;
    #private;
}
