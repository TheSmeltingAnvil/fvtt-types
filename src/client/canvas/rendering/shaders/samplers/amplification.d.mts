/**
 * A light amplification shader.
 */
export default class AmplificationSamplerShader extends ColorAdjustmentsSamplerShader {
    /** @inheritdoc */
    static defaultUniforms: {
        tintAlpha: number[];
        tint: number[];
        brightness: number;
        darknessLevelTexture: null;
        screenDimensions: number[];
        enable: boolean;
    };
    set brightness(brightness: number);
    /**
     * Brightness controls the luminosity.
     * @type {number}
     */
    get brightness(): number;
    set colorTint(color: number[]);
    /**
     * Tint color applied to Light Amplification.
     * @type {number[]}       Light Amplification tint (default: [0.48, 1.0, 0.48]).
     */
    get colorTint(): number[];
}
import ColorAdjustmentsSamplerShader from "./color-adjustments.mjs";
