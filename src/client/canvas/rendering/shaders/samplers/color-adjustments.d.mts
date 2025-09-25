/**
 * A color adjustment shader.
 */
export default class ColorAdjustmentsSamplerShader extends BaseSamplerShader {
    /** @override */
    static override classPluginName: null;
    /** @inheritdoc */
    static defaultUniforms: {
        tintAlpha: number[];
        tint: number[];
        contrast: number;
        saturation: number;
        exposure: number;
        sampler: null;
        linkedToDarknessLevel: boolean;
        darknessLevelTexture: null;
        screenDimensions: number[];
    };
    set linkedToDarknessLevel(link: any);
    get linkedToDarknessLevel(): any;
    set contrast(contrast: any);
    get contrast(): any;
    set exposure(exposure: any);
    get exposure(): any;
    set saturation(saturation: any);
    get saturation(): any;
}
import BaseSamplerShader from "./base-sampler.mjs";
