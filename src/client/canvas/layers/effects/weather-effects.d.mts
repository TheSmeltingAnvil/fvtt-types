declare const WeatherEffects_base: {
    new (): {
        calculateBounds(): void;
    };
};
/**
 * A CanvasLayer for displaying visual effects like weather, transitions, flashes, or more.
 */
export default class WeatherEffects extends WeatherEffects_base {
    /** @inheritdoc */
    static get layerOptions(): object;
    /**
     * Set the occlusion uniforms for this weather shader.
     * @param {PIXI.Shader} context                       The shader context
     * @param {WeatherOcclusionMaskConfiguration} config  Occlusion masking options
     * @protected
     */
    protected static configureOcclusionMask(context: PIXI.Shader, { enabled, channelWeights, reverse, texture }?: {
        /**
         * Enable or disable this mask.
         */
        enabled: boolean;
        /**
         * An RGBA array of channel weights applied to the mask texture.
         */
        channelWeights: number[];
        /**
         * If the mask should be reversed.
         */
        reverse?: boolean | undefined;
        /**
         * A texture which defines the mask region.
         */
        texture: PIXI.Texture | PIXI.RenderTexture;
    }): void;
    /**
     * Set the terrain uniforms for this weather shader.
     * @param {PIXI.Shader} context                     The shader context
     * @param {WeatherTerrainMaskConfiguration} config  Terrain masking options
     * @protected
     */
    protected static configureTerrainMask(context: PIXI.Shader, { enabled, channelWeights, reverse, texture }?: {
        /**
         * Enable or disable this mask.
         */
        enabled: boolean;
        /**
         * An RGBA array of channel weights applied to the mask texture.
         */
        channelWeights: number[];
        /**
         * If the mask should be reversed.
         */
        reverse?: boolean | undefined;
        /**
         * A texture which defines the mask region.
         */
        texture: PIXI.Texture | PIXI.RenderTexture;
    }): void;
    mask: any;
    sortableChildren: boolean;
    eventMode: string;
    /**
     * The container in which effects are added.
     * @type {PIXI.Container}
     */
    weatherEffects: PIXI.Container;
    /**
     * The container in which suppression meshed are added.
     * @type {PIXI.Container}
     */
    suppression: PIXI.Container;
    /** @override */
    override get hookName(): string;
    /**
     * The inverse occlusion mask filter bound to this container.
     * @type {WeatherOcclusionMaskFilter}
     */
    occlusionFilter: WeatherOcclusionMaskFilter;
    filterArea: any;
    filters: (VoidFilter | WeatherOcclusionMaskFilter)[] | undefined;
    /**
     * Array of weather effects linked to this weather container.
     * @type {Map<string,(ParticleEffect|WeatherShaderEffect)[]>}
     */
    effects: Map<string, (ParticleEffect | WeatherShaderEffect)[]>;
    /**
     * @typedef WeatherTerrainMaskConfiguration
     * @property {boolean} enabled                          Enable or disable this mask.
     * @property {number[]} channelWeights                  An RGBA array of channel weights applied to the mask texture.
     * @property {boolean} [reverse=false]                  If the mask should be reversed.
     * @property {PIXI.Texture|PIXI.RenderTexture} texture  A texture which defines the mask region.
     */
    /**
     * A default configuration of the terrain mask that is automatically applied to any shader-based weather effects.
     * This configuration is automatically passed to WeatherShaderEffect#configureTerrainMask upon construction.
     * @type {WeatherTerrainMaskConfiguration}
     */
    terrainMaskConfig: {
        /**
         * Enable or disable this mask.
         */
        enabled: boolean;
        /**
         * An RGBA array of channel weights applied to the mask texture.
         */
        channelWeights: number[];
        /**
         * If the mask should be reversed.
         */
        reverse?: boolean | undefined;
        /**
         * A texture which defines the mask region.
         */
        texture: PIXI.Texture | PIXI.RenderTexture;
    };
    /**
     * @typedef WeatherOcclusionMaskConfiguration
     * @property {boolean} enabled                          Enable or disable this mask.
     * @property {number[]} channelWeights                  An RGBA array of channel weights applied to the mask texture.
     * @property {boolean} [reverse=false]                  If the mask should be reversed.
     * @property {PIXI.Texture|PIXI.RenderTexture} texture  A texture which defines the mask region.
     */
    /**
     * A default configuration of the terrain mask that is automatically applied to any shader-based weather effects.
     * This configuration is automatically passed to WeatherShaderEffect#configureTerrainMask upon construction.
     * @type {WeatherOcclusionMaskConfiguration}
     */
    occlusionMaskConfig: {
        /**
         * Enable or disable this mask.
         */
        enabled: boolean;
        /**
         * An RGBA array of channel weights applied to the mask texture.
         */
        channelWeights: number[];
        /**
         * If the mask should be reversed.
         */
        reverse?: boolean | undefined;
        /**
         * A texture which defines the mask region.
         */
        texture: PIXI.Texture | PIXI.RenderTexture;
    };
    set elevation(value: number);
    /**
     * The elevation of this object.
     * @type {number}
     * @default Infinity
     */
    get elevation(): number;
    set sortLayer(value: number);
    /**
     * A key which resolves ties amongst objects at the same elevation of different layers.
     * @type {number}
     * @default PrimaryCanvasGroup.SORT_LAYERS.WEATHER
     */
    get sortLayer(): number;
    set sort(value: number);
    /**
     * A key which resolves ties amongst objects at the same elevation within the same layer.
     * @type {number}
     * @default 0
     */
    get sort(): number;
    set zIndex(value: number);
    /**
     * A key which resolves ties amongst objects at the same elevation within the same layer and same sort.
     * @type {number}
     * @default 0
     */
    get zIndex(): number;
    _zIndex: any;
    /** @override */
    override _draw(options: any): Promise<void>;
    /** @inheritDoc */
    _tearDown(options: any): Promise<any>;
    /**
     * Initialize the weather container from a weather config object.
     * @param {object} [weatherEffectsConfig]        Weather config object (or null/undefined to clear the container).
     */
    initializeEffects(weatherEffectsConfig?: object): void;
    /**
     * Clear the weather container.
     */
    clearEffects(): void;
    #private;
}
import WeatherOcclusionMaskFilter from "../../rendering/filters/weather-occlusion-mask.mjs";
import VoidFilter from "../../rendering/filters/void.mjs";
export {};
