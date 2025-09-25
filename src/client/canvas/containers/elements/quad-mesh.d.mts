/**
 * A basic rectangular mesh with a shader only. Does not natively handle textures (but a bound shader can).
 * Bounds calculations are simplified and the geometry does not need to handle texture coords.
 */
export default class QuadMesh {
    /**
     * @param {typeof AbstractBaseShader} shaderClass     The shader class to use.
     */
    constructor(shaderClass: typeof AbstractBaseShader);
    /**
     * The shader bound to this mesh.
     * @type {AbstractBaseShader}
     */
    get shader(): AbstractBaseShader;
    set blendMode(value: PIXI.BLEND_MODES);
    /**
     * Assigned blend mode to this mesh.
     * @type {PIXI.BLEND_MODES}
     */
    get blendMode(): PIXI.BLEND_MODES;
    /**
     * Initialize shader based on the shader class type.
     * @param {typeof AbstractBaseShader} shaderClass         Shader class used. Must inherit from AbstractBaseShader.
     */
    setShaderClass(shaderClass: typeof AbstractBaseShader): void;
    /** @override */
    override _render(renderer: any): void;
    /** @override */
    override _calculateBounds(): void;
    /**
     * Tests if a point is inside this QuadMesh.
     * @param {PIXI.IPointData} point
     * @returns {boolean}
     */
    containsPoint(point: PIXI.IPointData): boolean;
    /** @override */
    override destroy(options: any): void;
    #private;
}
import AbstractBaseShader from "../../rendering/shaders/base-shader.mjs";
