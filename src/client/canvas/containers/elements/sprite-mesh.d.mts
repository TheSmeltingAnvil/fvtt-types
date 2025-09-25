/**
 * An extension of PIXI.Mesh which emulate a PIXI.Sprite with a specific shader.
 * @param {PIXI.Texture} [texture=PIXI.Texture.EMPTY]                 Texture bound to this sprite mesh.
 * @param {typeof BaseSamplerShader} [shaderClass=BaseSamplerShader]  Shader class used by this sprite mesh.
 */
export default class SpriteMesh {
    /**
     * A temporary reusable rect.
     * @type {PIXI.Rectangle}
     */
    static #TEMP_RECT: PIXI.Rectangle;
    /**
     * A temporary reusable point.
     * @type {PIXI.Point}
     */
    static #TEMP_POINT: PIXI.Point;
    /**
     * Create a SpriteMesh from another source.
     * You can specify texture options and a specific shader class derived from BaseSamplerShader.
     * @param {string|PIXI.Texture|HTMLCanvasElement|HTMLVideoElement} source  Source to create texture from.
     * @param {object} [textureOptions]               See PIXI.BaseTexture's constructor for options.
     * @param {BaseSamplerShader} [shaderClass]       The shader class to use. BaseSamplerShader by default.
     * @returns {SpriteMesh}
     */
    static from(source: string | PIXI.Texture | HTMLCanvasElement | HTMLVideoElement, textureOptions?: object, shaderClass?: BaseSamplerShader): SpriteMesh;
    constructor(texture: any, shaderClass?: typeof BaseSamplerShader);
    /**
     * The shader bound to this mesh.
     * @type {BaseSamplerShader}
     * @protected
     */
    protected _shader: BaseSamplerShader;
    /**
     * This is used to store the vertex data of the sprite (basically a quad).
     * @type {Float32Array}
     * @protected
     */
    protected vertexData: Float32Array;
    /**
     * This is used to store the uvs data of the sprite, assigned at the same time
     * as the vertexData in calculateVertices().
     * @type {Float32Array}
     * @protected
     */
    protected uvs: Float32Array;
    /**
     * The indices of the geometry.
     * @type {Uint16Array}
     */
    indices: Uint16Array;
    /**
     * The texture that the sprite is using.
     * @type {PIXI.Texture}
     * @protected
     */
    protected _texture: PIXI.Texture;
    /**
     * The anchor point defines the normalized coordinates
     * in the texture that map to the position of this
     * sprite.
     *
     * By default, this is `(0,0)` (or `texture.defaultAnchor`
     * if you have modified that), which means the position
     * `(x,y)` of this `Sprite` will be the top-left corner.
     *
     * Note: Updating `texture.defaultAnchor` after
     * constructing a `Sprite` does _not_ update its anchor.
     *
     * {@link https://docs.cocos2d-x.org/cocos2d-x/en/sprites/manipulation.html}
     * @type {PIXI.ObservablePoint}
     * @protected
     */
    protected _anchor: PIXI.ObservablePoint;
    set texture(texture: PIXI.Texture);
    /**
     * The texture that the sprite is using.
     * @type {PIXI.Texture}
     */
    get texture(): PIXI.Texture;
    isSprite: boolean;
    /**
     * Snapshot of some parameters of this display object to render in batched mode.
     * @type {{_tintRGB: number, _texture: PIXI.Texture, indices: number[],
     * uvs: number[], blendMode: PIXI.BLEND_MODES, vertexData: number[], worldAlpha: number}}
     * @protected
     */
    protected _batchData: {
        _tintRGB: number;
        _texture: PIXI.Texture;
        indices: number[];
        uvs: number[];
        blendMode: PIXI.BLEND_MODES;
        vertexData: number[];
        worldAlpha: number;
    };
    /**
     * The width of the sprite (this is initially set by the texture).
     * @type {number}
     * @protected
     */
    protected _width: number;
    /**
     * The height of the sprite (this is initially set by the texture)
     * @type {number}
     * @protected
     */
    protected _height: number;
    /**
     * The texture ID.
     * @type {number}
     * @protected
     */
    protected _textureID: number;
    /**
     * Cached tint value so we can tell when the tint is changed.
     * @type {[red: number, green: number, blue: number, alpha: number]}
     * @protected
     */
    protected _cachedTint: [red: number, green: number, blue: number, alpha: number];
    /**
     * The texture trimmed ID.
     * @type {number}
     * @protected
     */
    protected _textureTrimmedID: number;
    /**
     * This is used to calculate the bounds of the object IF it is a trimmed sprite.
     * @type {Float32Array|null}
     * @protected
     */
    protected vertexTrimmedData: Float32Array | null;
    /**
     * The transform ID.
     * @type {number}
     * @internal
     */
    _transformID: number;
    /**
     * The transform ID.
     * @type {number}
     * @internal
     */
    _transformTrimmedID: number;
    /**
     * The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
     * @type {PIXI.Color}
     * @protected
     */
    protected _tintColor: PIXI.Color;
    /**
     * The tint applied to the sprite. This is a RGB value. A value of 0xFFFFFF will remove any tint effect.
     * @type {number}
     * @protected
     */
    protected _tintRGB: number;
    /**
     * An instance of a texture uvs used for padded SpriteMesh.
     * Instanced only when padding becomes non-zero.
     * @type {PIXI.TextureUvs|null}
     * @protected
     */
    protected _textureUvs: PIXI.TextureUvs | null;
    /**
     * Used to track a tint or alpha change to execute a recomputation of _cachedTint.
     * @type {boolean}
     * @protected
     */
    protected _tintAlphaDirty: boolean;
    /**
     * The shader bound to this mesh.
     * @type {BaseSamplerShader}
     */
    get shader(): BaseSamplerShader;
    set paddingX(value: number);
    /**
     * The x padding in pixels (must be a non-negative value.)
     * @type {number}
     */
    get paddingX(): number;
    /**
     * @type {number}
     * @protected
     */
    protected _paddingX: number;
    set paddingY(value: number);
    /**
     * They y padding in pixels (must be a non-negative value.)
     * @type {number}
     */
    get paddingY(): number;
    /**
     * @type {number}
     * @protected
     */
    protected _paddingY: number;
    set padding(value: number);
    /**
     * The maximum x/y padding in pixels (must be a non-negative value.)
     * @type {number}
     */
    get padding(): number;
    /**
     * The blend mode applied to the SpriteMesh.
     * @type {PIXI.BLEND_MODES}
     * @defaultValue PIXI.BLEND_MODES.NORMAL
     */
    set blendMode(value: any);
    get blendMode(): any;
    /**
     * If true PixiJS will Math.round() x/y values when rendering, stopping pixel interpolation.
     * Advantages can include sharper image quality (like text) and faster rendering on canvas.
     * The main disadvantage is movement of objects may appear less smooth.
     * To set the global default, change PIXI.settings.ROUND_PIXELS
     * @defaultValue PIXI.settings.ROUND_PIXELS
     */
    set roundPixels(value: any);
    get roundPixels(): any;
    set alphaMode(mode: PIXI.ALPHA_MODES);
    /**
     * Used to force an alpha mode on this sprite mesh.
     * If this property is non null, this value will replace the texture alphaMode when computing color channels.
     * Affects how tint, worldAlpha and alpha are computed each others.
     * @type {PIXI.ALPHA_MODES}
     */
    get alphaMode(): PIXI.ALPHA_MODES;
    set pluginName(name: string | null);
    /**
     * Returns the SpriteMesh associated batch plugin. By default the returned plugin is that of the associated shader.
     * If a plugin is forced, it will returns the forced plugin. A null value means that this SpriteMesh has no associated
     * plugin.
     * @type {string|null}
     */
    get pluginName(): string | null;
    override set width(width: number);
    /** @override */
    override get width(): number;
    override set height(height: number);
    /** @override */
    override get height(): number;
    set anchor(anchor: PIXI.ObservablePoint);
    /**
     * The anchor sets the origin point of the sprite. The default value is taken from the texture
     * and passed to the constructor.
     *
     * The default is `(0,0)`, this means the sprite's origin is the top left.
     *
     * Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.
     *
     * Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.
     *
     * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
     * @type {PIXI.ObservablePoint}
     */
    get anchor(): PIXI.ObservablePoint;
    set tint(tint: number);
    /**
     * The tint applied to the sprite. This is a hex value.
     *
     * A value of 0xFFFFFF will remove any tint effect.
     * @type {number}
     * @defaultValue 0xFFFFFF
     */
    get tint(): number;
    /**
     * The HTML source element for this SpriteMesh texture.
     * @type {PIXI.ImageSource|null}
     */
    get sourceElement(): PIXI.ImageSource | null;
    /**
     * Is this SpriteMesh rendering a video texture?
     * @type {boolean}
     */
    get isVideo(): boolean;
    /**
     * When the texture is updated, this event will fire to update the scale and frame.
     * @protected
     */
    protected _onTextureUpdate(): void;
    /**
     * Called when the anchor position updates.
     * @protected
     */
    protected _onAnchorUpdate(): void;
    /**
     * Update uvs and push vertices and uv buffers on GPU if necessary.
     */
    updateUvs(): void;
    /**
     * Initialize shader based on the shader class type.
     * @param {typeof BaseSamplerShader} shaderClass    The shader class
     */
    setShaderClass(shaderClass: typeof BaseSamplerShader): void;
    /** @override */
    override updateTransform(): void;
    /**
     * Calculates worldTransform * vertices, store it in vertexData.
     */
    calculateVertices(): void;
    /**
     * Calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData.
     *
     * This is used to ensure that the true width and height of a trimmed texture is respected.
     */
    calculateTrimmedVertices(): void;
    /** @override */
    override _render(renderer: any): void;
    /**
     * Update the batch data object.
     * @protected
     */
    protected _updateBatchData(): void;
    /** @override */
    override _calculateBounds(): void;
    /** @override */
    override getLocalBounds(rect: any): any;
    _localBounds: any;
    _localBoundsRect: any;
    /**
     *
     * Check to see if a point is contained within this SpriteMesh Quad.
     * @param {PIXI.Point} point          Point to check if it's contained.
     * @returns {boolean} `true` if the point is contained within geometry.
     */
    containsPoint(point: PIXI.Point): boolean;
    /** @override */
    override destroy(options: any): void;
    #private;
}
import BaseSamplerShader from "../../rendering/shaders/samplers/base-sampler.mjs";
