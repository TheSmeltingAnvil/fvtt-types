/**
 * The base sampler shader exposes a simple sprite shader and all the framework to handle:
 * - Batched shaders and plugin subscription
 * - Configure method (for special processing done once or punctually)
 * - Update method (pre-binding, normally done each frame)
 * All other sampler shaders (batched or not) should extend BaseSamplerShader
 */
export default class BaseSamplerShader extends AbstractBaseShader {
    /**
     * The named batch sampler plugin that is used by this shader, or null if no batching is used.
     * @type {string|null}
     */
    static classPluginName: string | null;
    /**
     * Is this shader pausable or not?
     * @type {boolean}
     */
    static pausable: boolean;
    /**
     * Contrast adjustment
     * @type {string}
     */
    static CONTRAST: string;
    /**
     * Saturation adjustment
     * @type {string}
     */
    static SATURATION: string;
    /**
     * Exposure adjustment.
     * @type {string}
     */
    static EXPOSURE: string;
    /**
     * The adjustments made into fragment shaders.
     * @type {string}
     */
    static get ADJUSTMENTS(): string;
    /** @override */
    static override fragmentShader: string;
    /**
     * The batch vertex shader source.
     * @type {string}
     */
    static batchVertexShader: string;
    /**
     * The batch fragment shader source.
     * @type {string}
     */
    static batchFragmentShader: string;
    /** @inheritdoc */
    static defaultUniforms: {
        sampler: number;
        tintAlpha: number[];
    };
    /**
     * Batch geometry associated with this sampler.
     * @type {typeof PIXI.BatchGeometry|{id: string, size: number, normalized: boolean, type: PIXI.TYPES}[]}
     */
    static batchGeometry: typeof PIXI.BatchGeometry | {
        id: string;
        size: number;
        normalized: boolean;
        type: PIXI.TYPES;
    }[];
    /**
     * The size of a vertex with all its packed attributes.
     * @type {number}
     */
    static batchVertexSize: number;
    /**
     * Pack interleaved geometry custom function.
     * @type {Function|undefined}
     * @protected
     */
    protected static _packInterleavedGeometry: Function | undefined;
    /**
     * A prerender function happening just before the batch renderer is flushed.
     * @type {(batchRenderer: BatchRenderer) => void | undefined}
     * @protected
     */
    protected static _preRenderBatch: (batchRenderer: BatchRenderer) => void | undefined;
    /**
     * Returns default uniforms associated with the batched version of this sampler.
     * @type {object|((maxTextures: number) => object)}
     */
    static batchDefaultUniforms: object | ((maxTextures: number) => object);
    /**
     * The number of reserved texture units for this shader that cannot be used by the batch renderer.
     * @type {number}
     */
    static reservedTextureUnits: number;
    /**
     * Initialize the batch geometry with custom properties.
     */
    static initializeBatchGeometry(): void;
    /**
     * The batch renderer to use.
     * @type {typeof BatchRenderer}
     */
    static batchRendererClass: typeof BatchRenderer;
    /**
     * The batch generator to use.
     * @type {typeof BatchShaderGenerator}
     */
    static batchShaderGeneratorClass: typeof BatchShaderGenerator;
    /**
     * Create a batch plugin for this sampler class.
     * @returns {typeof BatchPlugin}            The batch plugin class linked to this sampler class.
     */
    static createPlugin(): typeof BatchPlugin;
    /**
     * Register the plugin for this sampler.
     * @param {object} [options]                The options
     * @param {object} [options.force=false]    Override the plugin of the same name that is already registered?
     */
    static registerPlugin({ force }?: {
        force?: object | undefined;
    }): void;
    /**
     * The plugin name associated for this instance, if any.
     * Returns "batch" if the shader is disabled.
     * @type {string|null}
     */
    get pluginName(): string | null;
    set enabled(enabled: boolean);
    /**
     * Activate or deactivate this sampler. If set to false, the batch rendering is redirected to "batch".
     * Otherwise, the batch rendering is directed toward the instance pluginName (might be null)
     * @type {boolean}
     */
    get enabled(): boolean;
    set paused(paused: boolean);
    /**
     * Pause or Unpause this sampler. If set to true, the shader is disabled. Otherwise, it is enabled.
     * Contrary to enabled, a shader might decide to refuse a pause, to continue to render animations per example.
     * @see {enabled}
     * @type {boolean}
     */
    get paused(): boolean;
    /** @override */
    override _preRender(mesh: any, renderer: any): void;
    #private;
}
import AbstractBaseShader from "../base-shader.mjs";
import BatchRenderer from "../../batching/batch-renderer.mjs";
import BatchShaderGenerator from "../../batching/batch-shader-generator.mjs";
