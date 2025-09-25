/**
 * @import {BaseEffectSourceData} from "./base-effect-source.mjs";
 * @import {RenderedEffectSourceData} from "./rendered-effect-source.mjs";
 */
/**
 * @typedef LightSourceData
 * @property {number} alpha               An opacity for the emitted light, if any
 * @property {number} bright              The allowed radius of bright vision or illumination
 * @property {number} coloration          The coloration technique applied in the shader
 * @property {number} contrast            The amount of contrast this light applies to the background texture
 * @property {number} dim                 The allowed radius of dim vision or illumination
 * @property {number} attenuation         Strength of the attenuation between bright, dim, and dark
 * @property {number} luminosity          The luminosity applied in the shader
 * @property {number} saturation          The amount of color saturation this light applies to the background texture
 * @property {number} shadows             The depth of shadows this light applies to the background texture
 * @property {boolean} vision             Whether or not this source provides a source of vision
 */
/**
 * A specialized subclass of BaseEffectSource which deals with the rendering of light or darkness.
 * @extends {RenderedEffectSource<BaseEffectSourceData & RenderedEffectSourceData & LightSourceData>}
 * @abstract
 */
export default class BaseLightSource {
    /**
     * The corresponding lighting levels for dim light.
     * @type {number}
     * @protected
     */
    protected static _dimLightingLevel: number;
    /**
     * The corresponding lighting levels for bright light.
     * @type {string}
     * @protected
     */
    protected static _brightLightingLevel: string;
    /**
     * The corresponding animation config.
     * @type {LightSourceAnimationConfig}
     * @protected
     */
    protected static get ANIMATIONS(): LightSourceAnimationConfig;
    /** @override */
    static override get _layers(): {
        background: {
            defaultShader: typeof AdaptiveBackgroundShader;
            blendMode: string;
        };
        coloration: {
            defaultShader: typeof AdaptiveColorationShader;
            blendMode: string;
        };
        illumination: {
            defaultShader: typeof AdaptiveIlluminationShader;
            blendMode: string;
        };
    };
    /** @inheritDoc */
    static defaultData: any;
    /**
     * A ratio of dim:bright as part of the source radius
     * @type {number}
     */
    ratio: number;
    /** @override */
    override _initialize(data: any): void;
    animation: any;
    /** @inheritDoc */
    _updateColorationUniforms(): void;
    /** @inheritDoc */
    _updateIlluminationUniforms(): void;
    /** @inheritDoc */
    _updateBackgroundUniforms(): void;
    /** @override */
    override _updateCommonUniforms(shader: any): void;
    computedAttenuation: number | undefined;
    cachedAttenuation: any;
    /**
     * An animation with flickering ratio and light intensity.
     * @param {number} dt                       Delta time
     * @param {object} [options={}]             Additional options which modify the flame animation
     * @param {number} [options.speed=5]        The animation speed, from 0 to 10
     * @param {number} [options.intensity=5]    The animation intensity, from 1 to 10
     * @param {boolean} [options.reverse=false] Reverse the animation direction
     */
    animateTorch(dt: number, { speed, intensity, reverse }?: {
        speed?: number | undefined;
        intensity?: number | undefined;
        reverse?: boolean | undefined;
    }): void;
    /**
     * An animation with flickering ratio and light intensity
     * @param {number} dt                                 Delta time
     * @param {object} [options={}]                       Additional options which modify the flame animation
     * @param {number} [options.speed=5]                  The animation speed, from 0 to 10
     * @param {number} [options.intensity=5]              The animation intensity, from 1 to 10
     * @param {number} [options.amplification=1]          Noise amplification (>1) or dampening (<1)
     * @param {boolean} [options.reverse=false]           Reverse the animation direction
     */
    animateFlickering(dt: number, { speed, intensity, reverse, amplification }?: {
        speed?: number | undefined;
        intensity?: number | undefined;
        amplification?: number | undefined;
        reverse?: boolean | undefined;
    }): void;
    /**
     * A basic "pulse" animation which expands and contracts.
     * @param {number} dt                           Delta time
     * @param {object} [options={}]                 Additional options which modify the pulse animation
     * @param {number} [options.speed=5]              The animation speed, from 0 to 10
     * @param {number} [options.intensity=5]          The animation intensity, from 1 to 10
     * @param {boolean} [options.reverse=false]       Reverse the animation direction
     */
    animatePulse(dt: number, { speed, intensity, reverse }?: {
        speed?: number | undefined;
        intensity?: number | undefined;
        reverse?: boolean | undefined;
    }): void;
    /**
     * A sound-reactive animation that uses bass/mid/treble blending to control certain shader uniforms.
     * "speed" is interpreted as how quickly we adapt to changes in audio. No time-based pulsing is used by default,
     * but we incorporate dt into smoothing so that behavior is consistent across varying frame rates.
     *
     * @param {number} dt                       The delta time since the last frame, in milliseconds.
     * @param {object} [options={}]             Additional options for customizing the audio reaction.
     * @param {number} [options.speed=5]        A smoothing factor in [0..10], effectively updates/second.
     * @param {number} [options.intensity=5]    A blend factor in [0..10] that transitions from bass (near 0) to treble (near 10)
     *                                          Mid frequencies dominate around intensity=5.
     * @param {boolean} [options.reverse=false] Whether to invert the final amplitude as 1 - amplitude.
     */
    animateSoundPulse(dt: number, { speed, intensity, reverse }?: {
        speed?: number | undefined;
        intensity?: number | undefined;
        reverse?: boolean | undefined;
    }): void;
    /**
     * @deprecated since v12
     * @ignore
     */
    get isDarkness(): boolean;
    #private;
}
export type LightSourceData = {
    /**
     * An opacity for the emitted light, if any
     */
    alpha: number;
    /**
     * The allowed radius of bright vision or illumination
     */
    bright: number;
    /**
     * The coloration technique applied in the shader
     */
    coloration: number;
    /**
     * The amount of contrast this light applies to the background texture
     */
    contrast: number;
    /**
     * The allowed radius of dim vision or illumination
     */
    dim: number;
    /**
     * Strength of the attenuation between bright, dim, and dark
     */
    attenuation: number;
    /**
     * The luminosity applied in the shader
     */
    luminosity: number;
    /**
     * The amount of color saturation this light applies to the background texture
     */
    saturation: number;
    /**
     * The depth of shadows this light applies to the background texture
     */
    shadows: number;
    /**
     * Whether or not this source provides a source of vision
     */
    vision: boolean;
};
import AdaptiveBackgroundShader from "../rendering/shaders/lighting/background-lighting.mjs";
import AdaptiveColorationShader from "../rendering/shaders/lighting/coloration-lighting.mjs";
import AdaptiveIlluminationShader from "../rendering/shaders/lighting/illumination-lighting.mjs";
