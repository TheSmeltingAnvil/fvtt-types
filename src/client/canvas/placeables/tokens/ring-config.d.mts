/**
 * @import {RingColorBand} from "../_types.mjs"
 * @import {DynamicRingId} from "../_types.mjs"
 */
/**
 * Token Ring configuration Singleton Class.
 *
 * @example Add a new custom ring configuration. Allow only ring pulse, ring gradient and background wave effects.
 * const customConfig = new foundry.canvas.placeables.tokens.DynamicRingData({
 *   id: "myCustomRingId",
 *   label: "Custom Ring",
 *   effects: {
 *     RING_PULSE: "TOKEN.RING.EFFECTS.RING_PULSE",
 *     RING_GRADIENT: "TOKEN.RING.EFFECTS.RING_GRADIENT",
 *     BACKGROUND_WAVE: "TOKEN.RING.EFFECTS.BACKGROUND_WAVE"
 *   },
 *   spritesheet: "canvas/tokens/myCustomRings.json",
 *   framework: {
 *     shaderClass: MyCustomTokenRingSamplerShader,
 *     ringClass: TokenRing
 *   }
 * });
 * CONFIG.Token.ring.addConfig(customConfig.id, customConfig);
 *
 * @example Get a specific ring configuration
 * const config = CONFIG.Token.ring.getConfig("myCustomRingId");
 * console.log(config.spritesheet); // Output: canvas/tokens/myCustomRings.json
 *
 * @example Use a specific ring configuration
 * const success = CONFIG.Token.ring.useConfig("myCustomRingId");
 * console.log(success); // Output: true
 *
 * @example Get the labels of all configurations
 * const configLabels = CONFIG.Token.ring.configLabels;
 * console.log(configLabels);
 * // Output:
 * // {
 * //   "coreSteel": "Foundry VTT Steel Ring",
 * //   "coreBronze": "Foundry VTT Bronze Ring",
 * //   "myCustomRingId" : "My Super Power Ring"
 * // }
 *
 * @example Get the IDs of all configurations
 * const configIDs = CONFIG.Token.ring.configIDs;
 * console.log(configIDs); // Output: ["coreSteel", "coreBronze", "myCustomRingId"]
 *
 * @example Create a hook to add a custom token ring configuration. This ring configuration will appear in the settings.
 * Hooks.on("initializeDynamicTokenRingConfig", ringConfig => {
 *   const mySuperPowerRings = new foundry.canvas.placeables.tokens.DynamicRingData({
 *     id: "myCustomRingId",
 *     label: "My Super Power Rings",
 *     effects: {
 *       RING_PULSE: "TOKEN.RING.EFFECTS.RING_PULSE",
 *       RING_GRADIENT: "TOKEN.RING.EFFECTS.RING_GRADIENT",
 *       BACKGROUND_WAVE: "TOKEN.RING.EFFECTS.BACKGROUND_WAVE"
 *     },
 *     spritesheet: "canvas/tokens/mySuperPowerRings.json"
 *   });
 *   ringConfig.addConfig("mySuperPowerRings", mySuperPowerRings);
 * });
 *
 * @example Activate color bands debugging visuals to ease configuration
 * CONFIG.Token.ring.debugColorBands = true;
 */
export default class TokenRingConfig {
    /**
     * The token ring config instance.
     * @type {TokenRingConfig}
     */
    static #instance: TokenRingConfig;
    /**
     * To know if the ring config is initialized.
     * @type {boolean}
     */
    static #initialized: boolean;
    /**
     * To know if a Token Ring registration is possible.
     * @type {boolean}
     */
    static #closedRegistration: boolean;
    /**
     * Core token rings used in Foundry VTT.
     * Each key is a string identifier for a ring, and the value is an object containing the ring's data.
     * This object is frozen to prevent any modifications.
     * @type {Readonly<Record<DynamicRingId, RingData>>}
     */
    static CORE_TOKEN_RINGS: Readonly<Record<DynamicRingId, RingData>>;
    /**
     * Core token rings fit modes used in Foundry VTT.
     * @type {Readonly<object>}
     */
    static CORE_TOKEN_RINGS_FIT_MODES: Readonly<object>;
    /**
     * Register the token ring config and initialize it
     */
    static initialize(): void;
    /**
     * Register game settings used by the Token Ring
     */
    static registerSettings(): void;
    /**
     * A mapping of token subject paths where modules or systems have configured subject images.
     * @type {Record<string, string>}
     */
    subjectPaths: Record<string, string>;
    /**
     * All color bands visual debug flag.
     * @type {boolean}
     */
    debugColorBands: boolean;
    set ringClass(value: typeof TokenRing);
    /**
     * Get the current ring class.
     * @type {typeof TokenRing} The current ring class.
     */
    get ringClass(): typeof TokenRing;
    /**
     * Get the current effects.
     * @type {Record<string, string>} The current effects.
     */
    get effects(): Record<string, string>;
    /**
     * Get the current spritesheet.
     * @type {string} The current spritesheet path.
     */
    get spritesheet(): string;
    set shaderClass(value: typeof PrimaryBaseSamplerShader);
    /**
     * Get the current shader class.
     * @type {typeof PrimaryBaseSamplerShader} The current shader class.
     */
    get shaderClass(): typeof PrimaryBaseSamplerShader;
    /**
     * Get the current localized label.
     * @returns {string}
     */
    get label(): string;
    /**
     * Get the current id.
     * @returns {string}
     */
    get id(): string;
    /**
     * Is a custom fit mode active?
     * @returns {boolean}
     */
    get isGridFitMode(): boolean;
    /**
     * Add a new ring configuration.
     * @param {string} id         The id of the ring configuration.
     * @param {RingConfig} config The configuration object for the ring.
     */
    addConfig(id: string, config: RingConfig): void;
    /**
     * Get a ring configuration.
     * @param {string} id     The id of the ring configuration.
     * @returns {RingConfig}  The ring configuration object.
     */
    getConfig(id: string): RingConfig;
    /**
     * Use a ring configuration.
     * @param {string} id  The id of the ring configuration to use.
     * @returns {boolean} True if the configuration was successfully set, false otherwise.
     */
    useConfig(id: string): boolean;
    /**
     * Get the IDs of all configurations.
     * @returns {string[]} The names of all configurations.
     */
    get configIDs(): string[];
    /**
     * Get the labels of all configurations.
     * @returns {Record<string, string>} An object with configuration names as keys and localized labels as values.
     */
    get configLabels(): Record<string, string>;
    /**
     * @deprecated since v12
     * @ignore
     */
    get configNames(): string[];
    #private;
}
import type { DynamicRingId } from "../_types.mjs";
