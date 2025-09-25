/**
 * The default background shader used for vision sources
 */
export default class BackgroundVisionShader extends AdaptiveVisionShader {
    /**
     * Memory allocations for the Adaptive Background Shader
     * @type {string}
     */
    static SHADER_HEADER: string;
    /** @inheritdoc */
    static fragmentShader: string;
    /** @inheritdoc */
    static defaultUniforms: {
        technique: number;
        saturation: number;
        contrast: number;
        attenuation: number;
        exposure: number;
        darknessLevel: number;
        colorVision: number[];
        colorTint: number[];
        colorBackground: number[];
        screenDimensions: number[];
        time: number;
        useSampler: boolean;
        linkedToDarknessLevel: boolean;
        primaryTexture: null;
        depthTexture: null;
        darknessLevelTexture: null;
        depthElevation: number;
        ambientBrightest: number[];
        ambientDarkness: number[];
        ambientDaylight: number[];
        weights: number[];
        dimLevelCorrection: number;
        brightLevelCorrection: number;
        globalLight: boolean;
        globalLightThresholds: number[];
    };
    /**
     * Flag whether the background shader is currently required.
     * If key uniforms are at their default values, we don't need to render the background container.
     * @type {boolean}
     */
    get isRequired(): boolean;
}
import AdaptiveVisionShader from "./base-vision.mjs";
