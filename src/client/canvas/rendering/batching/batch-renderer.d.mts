/**
 * A batch renderer with a customizable data transfer function to packed geometries.
 * @extends PIXI.AbstractBatchRenderer
 */
export default class BatchRenderer {
    /**
     * The batch shader generator class.
     * @type {typeof BatchShaderGenerator}
     */
    static shaderGeneratorClass: typeof BatchShaderGenerator;
    /**
     * The default uniform values for the batch shader.
     * @type {object | (maxTextures: number) => object}
     */
    static defaultUniforms: object | ((maxTextures: number) => object);
    /**
     * Verify if a PIXI plugin exists. Check by name.
     * @param {string} name       The name of the pixi plugin to check.
     * @returns {boolean}         True if the plugin exists, false otherwise.
     */
    static hasPlugin(name: string): boolean;
    /**
     * The PackInterleavedGeometry function provided by the sampler.
     * @type {Function|undefined}
     * @protected
     */
    protected _packInterleavedGeometry: Function | undefined;
    /**
     * The update function provided by the sampler and that is called just before a flush.
     * @type {(batchRenderer: BatchRenderer) => void | undefined}
     * @protected
     */
    protected _preRenderBatch: (batchRenderer: BatchRenderer) => void | undefined;
    /**
     * Get the uniforms bound to this abstract batch renderer.
     * @returns {object|undefined}
     */
    get uniforms(): object | undefined;
    /**
     * The number of reserved texture units that the shader generator should not use (maximum 4).
     * @param {number} val
     * @protected
     */
    set reservedTextureUnits(val: number);
    /**
     * Number of reserved texture units reserved by the batch shader that cannot be used by the batch renderer.
     * @returns {number}
     */
    get reservedTextureUnits(): number;
    /** @override */
    override setShaderGenerator({ vertex, fragment, uniforms }?: {
        vertex?: any;
        fragment?: any;
        uniforms?: any;
    }): void;
    shaderGenerator: any;
    /**
     * This override allows to allocate a given number of texture units reserved for a custom batched shader.
     * These reserved texture units won't be used to batch textures for PIXI.Sprite or SpriteMesh.
     * @override
     */
    override contextChange(): void;
    maxTextures: any;
    _shader: any;
    /** @inheritdoc */
    onPrerender(): void;
    /** @override */
    override start(): void;
    /** @override */
    override packInterleavedGeometry(element: any, attributeBuffer: any, indexBuffer: any, aIndex: any, iIndex: any): void;
    #private;
}
import BatchShaderGenerator from "./batch-shader-generator.mjs";
