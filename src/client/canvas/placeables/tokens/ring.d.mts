/**
 * @import Token from "../token.mjs";
 * @import {RingColorBand, RingData} from "../_types.mjs"
 */
/**
 * Dynamic Token Ring Manager.
 */
export default class TokenRing {
    /**
     * The effects which could be applied to a token ring (using bitwise operations).
     */
    static effects: Readonly<{
        readonly DISABLED: 0;
        readonly ENABLED: 1;
        readonly RING_PULSE: 2;
        readonly RING_GRADIENT: 4;
        readonly BKG_WAVE: 8;
        readonly INVISIBILITY: 16;
        readonly COLOR_OVER_SUBJECT: 32;
    }>;
    /**
     * Is the token rings framework enabled? Will be `null` if the system hasn't initialized yet.
     * @type {boolean|null}
     */
    static get initialized(): boolean | null;
    static #initialized: null;
    /**
     * Token Rings sprite sheet base texture.
     * @type {PIXI.BaseTexture}
     */
    static baseTexture: PIXI.BaseTexture;
    /**
     * Rings and background textures UVs and center offset.
     * @type {Record<string, {UVs: Float32Array, center: {x: number, y: number}}>}
     */
    static texturesData: Record<string, {
        UVs: Float32Array;
        center: {
            x: number;
            y: number;
        };
    }>;
    /**
     * The token ring shader class definition.
     * @type {typeof TokenRingSamplerShader}
     */
    static tokenRingSamplerShader: typeof TokenRingSamplerShader;
    /**
     * The array of available RingData.
     * @type {RingData[]}
     */
    static #ringData: RingData[];
    /**
     * Default ring thickness in normalized space.
     * @type {number}
     */
    static #defaultRingThickness: number;
    /**
     * Default ring subject thickness in normalized space.
     * @type {number}
     */
    static #defaultSubjectThickness: number;
    /**
     * Initialize the Token Rings system, registering the batch plugin and patching PrimaryCanvasGroup#addToken.
     */
    static initialize(): void;
    /**
     * Create texture UVs for each asset into the token rings sprite sheet.
     */
    static createAssetsUVs(): void;
    /**
     * Get the UVs array for a given texture name and scale correction.
     * @param {string} name                  Name of the texture we want to get UVs.
     * @param {number} [scaleCorrection=1]   The scale correction applied to UVs.
     * @returns {Float32Array|void}
     */
    static getTextureUVs(name: string, scaleCorrection?: number): Float32Array | void;
    /**
     * Get ring and background names for a given size.
     * @param {number} size   The size to match (grid size dimension)
     * @returns {RingData}
     */
    static getRingDataBySize(size: number): RingData;
    /**
     * Create an easing function that spikes in the center. Ideal duration is around 1600ms.
     * @param {number} [spikePct=0.5]  Position on [0,1] where the spike occurs.
     * @returns {Function(number): number}
     */
    static createSpikeEasing(spikePct?: number): Function;
    /**
     * Easing function that produces two peaks before returning to the original value. Ideal duration is around 500ms.
     * @param {number} pt     The proportional animation timing on [0,1].
     * @returns {number}      The eased animation progress on [0,1].
     */
    static easeTwoPeaks(pt: number): number;
    /**
     * Soft ping pong curve for photosensitive people.
     * @param {number} pt   The proportional animation timing on [0,1].
     * @returns {number}    The eased animation progress on [0,1].
     */
    static easePingPong(pt: number): number;
    /**
     * A TokenRing is constructed by providing a reference to a Token object.
     * @param {Token} token
     */
    constructor(token: Token);
    /** @type {string} */
    ringName: string;
    /** @type {string} */
    bkgName: string;
    /** @type {string} */
    maskName: string;
    /** @type {Float32Array} */
    ringUVs: Float32Array;
    /** @type {Float32Array} */
    bkgUVs: Float32Array;
    /** @type {Float32Array} */
    maskUVs: Float32Array;
    /** @type {number} */
    ringColorLittleEndian: number;
    /** @type {number} */
    bkgColorLittleEndian: number;
    /** @type {number|null} */
    defaultRingColorLittleEndian: number | null;
    /** @type {number|null} */
    defaultBackgroundColorLittleEndian: number | null;
    /** @type {number} */
    effects: number;
    /** @type {number} */
    scaleCorrection: number;
    /** @type {number} */
    scaleAdjustmentX: number;
    /** @type {number} */
    scaleAdjustmentY: number;
    /** @type {number} */
    subjectScaleAdjustment: number;
    /** @type {number} */
    textureScaleAdjustment: number;
    /** @type {RingColorBand} */
    colorBand: RingColorBand;
    /**
     * Reference to the token that should be animated.
     * @type {Token|void}
     */
    get token(): Token | void;
    /**
     * Configure the sprite mesh.
     * @param {PrimarySpriteMesh} [mesh]  The mesh to which TokenRing functionality is configured (default to token.mesh)
     */
    configure(mesh?: PrimarySpriteMesh): void;
    /**
     * Clear configuration pertaining to token ring from the mesh.
     */
    clear(): void;
    /**
     * Configure token ring size according to mesh texture, token dimensions, fit mode, and dynamic ring fit mode.
     * @param {object} [options]
     * @param {string} [options.fit="contain"]     The desired fit mode
     * @param {number} [options.scaleMultiplier=1] A custom scale multiplier applied on scale correction
     */
    configureSize({ fit, scaleMultiplier }?: {
        fit?: string | undefined;
        scaleMultiplier?: number | undefined;
    }): void;
    /**
     * Configure the token ring visuals properties.
     */
    configureVisuals(): void;
    /**
     * Flash the ring briefly with a certain color.
     * @param {Color} color                              Color to flash.
     * @param {CanvasAnimationOptions} animationOptions  Options to customize the animation.
     * @returns {Promise<boolean|void>}
     */
    flashColor(color: Color, animationOptions?: CanvasAnimationOptions): Promise<boolean | void>;
    /**
     * To avoid breaking dnd5e.
     * @deprecated since v12
     * @ignore
     */
    configureMesh(): void;
    /**
     * To avoid breaking dnd5e.
     * @deprecated since v12
     * @ignore
     */
    configureNames(): void;
    #private;
}
import type { RingColorBand } from "../_types.mjs";
import type Token from "../token.mjs";
import Color from "@common/utils/color.mjs";
import type { RingData } from "../_types.mjs";
