/**
 * A simple shader that makes the original texture's red channel the alpha channel while still keeping channel
 * information. Used in conjunction with the AlphaBlurFilterPass and Fog of War.
 */
export default class FogSamplerShader extends BaseSamplerShader {
    /** @override */
    static override classPluginName: null;
}
import BaseSamplerShader from "./base-sampler.mjs";
