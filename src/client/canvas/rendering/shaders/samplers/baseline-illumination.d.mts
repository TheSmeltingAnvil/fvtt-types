/**
 * Compute baseline illumination according to darkness level encoded texture.
 */
export default class BaselineIlluminationSamplerShader extends BaseSamplerShader {
    /** @override */
    static override classPluginName: null;
    /** @inheritdoc */
    static defaultUniforms: {
        tintAlpha: number[];
        ambientDarkness: number[];
        ambientDaylight: number[];
        sampler: null;
    };
}
import BaseSamplerShader from "./base-sampler.mjs";
