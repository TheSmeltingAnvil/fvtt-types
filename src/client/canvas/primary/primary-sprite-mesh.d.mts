/**
 * @typedef PrimarySpriteMeshConstructorOptions
 * @property {PIXI.Texture} [options.texture]                 Texture passed to the SpriteMesh.
 * @property {string|null} [options.name]                     The name of this sprite.
 * @property {*} [options.object]                             Any object that owns this sprite.
 * @param {typeof PrimaryBaseSamplerShader} [options.shaderClass] The shader class used to render this sprite
 */
/**
 * A basic PCO sprite mesh which is handling occlusion and depth.
 * @extends {SpriteMesh}
 * @mixes PrimaryOccludableObjectMixin
 * @mixes PrimaryCanvasObjectMixin
 * @property {PrimaryBaseSamplerShader} shader             The shader bound to this mesh.
 */
export default class PrimarySpriteMesh extends SpriteMesh {
    /**
     * A temporary point used by this class.
     * @type {PIXI.Point}
     */
    static #TEMP_POINT: PIXI.Point;
    /**
     * @param {PrimarySpriteMeshConstructorOptions|PIXI.Texture} [options]    Constructor options or a Texture
     * @param {typeof PrimaryBaseSamplerShader} shaderClass                   A shader class for the sprite
     */
    constructor(options?: PrimarySpriteMeshConstructorOptions | PIXI.Texture, shaderClass: typeof PrimaryBaseSamplerShader);
    name: any;
    object: any;
    /**
     * The texture alpha data.
     * @type {TextureAlphaData|null}
     * @protected
     */
    protected _textureAlphaData: TextureAlphaData | null;
    /**
     * The texture alpha threshold used for point containment tests.
     * If set to a value larger than 0, the texture alpha data is
     * extracted from the texture at 25% resolution.
     * @type {number}
     */
    textureAlphaThreshold: number;
    /** @inheritdoc */
    setShaderClass(shaderClass: any): void;
    /**
     * An all-in-one helper method: Resizing the PCO according to desired dimensions and options.
     * This helper computes the width and height based on the following factors:
     *
     * - The ratio of texture width and base width.
     * - The ratio of texture height and base height.
     *
     * Additionally, It takes into account the desired fit options:
     *
     * - (default) "fill" computes the exact width and height ratio.
     * - "cover" takes the maximum ratio of width and height and applies it to both.
     * - "contain" takes the minimum ratio of width and height and applies it to both.
     * - "width" applies the width ratio to both width and height.
     * - "height" applies the height ratio to both width and height.
     *
     * You can also apply optional scaleX and scaleY options to both width and height. The scale is applied after fitting.
     *
     * **Important**: By using this helper, you don't need to set the height, width, and scale properties of the DisplayObject.
     *
     * **Note**: This is a helper method. Alternatively, you could assign properties as you would with a PIXI DisplayObject.
     *
     * @param {number} baseWidth             The base width used for computations.
     * @param {number} baseHeight            The base height used for computations.
     * @param {object} [options]             The options.
     * @param {"fill"|"cover"|"contain"|"width"|"height"} [options.fit="fill"]  The fit type.
     * @param {number} [options.scaleX=1]    The scale on X axis.
     * @param {number} [options.scaleY=1]    The scale on Y axis.
     */
    resize(baseWidth: number, baseHeight: number, { fit, scaleX, scaleY }?: {
        fit?: "height" | "width" | "fill" | "contain" | "cover" | undefined;
        scaleX?: number | undefined;
        scaleY?: number | undefined;
    }): void;
    /** @override */
    override _calculateCanvasBounds(): void;
    /**
     * Is the given point in canvas space contained in this object?
     * @param {PIXI.IPointData} point             The point in canvas space
     * @param {number} [textureAlphaThreshold]    The minimum texture alpha required for containment
     * @returns {boolean}
     */
    containsCanvasPoint(point: PIXI.IPointData, textureAlphaThreshold?: number): boolean;
    /**
     * Is the given point in world space contained in this object?
     * @param {PIXI.IPointData} point             The point in world space
     * @param {number} [textureAlphaThreshold]    The minimum texture alpha required for containment
     * @returns {boolean}
     */
    containsPoint(point: PIXI.IPointData, textureAlphaThreshold?: number): boolean;
    /** @override */
    override renderDepthData(renderer: any): void;
    /**
     * Render the sprite with ERASE blending.
     * Note: The sprite must not have visible/renderable children.
     * @param {PIXI.Renderer} renderer    The renderer
     * @internal
     */
    _renderVoid(renderer: PIXI.Renderer): void;
    /**
     * @deprecated since v12
     * @ignore
     */
    getPixelAlpha(x: any, y: any): number | null;
    /**
     * @deprecated since v12
     * @ignore
     */
    _getAlphaBounds(): any;
    /**
     * @deprecated since v12
     * @ignore
     */
    _getTextureCoordinate(testX: any, testY: any): {
        x: any;
        y: any;
    };
    #private;
}
export type PrimarySpriteMeshConstructorOptions = {
    /**
     * Texture passed to the SpriteMesh.
     */
    texture?: PIXI.Texture;
    /**
     * The name of this sprite.
     */
    name?: string | null | undefined;
    /**
     * Any object that owns this sprite.
     */
    object?: any;
};
import SpriteMesh from "../containers/elements/sprite-mesh.mjs";
import PrimaryBaseSamplerShader from "../rendering/shaders/samplers/primary/primary.mjs";
