/**
 * @import SpriteMesh from "../elements/sprite-mesh.mjs";
 */
/**
 * A special type of PIXI.Container which draws its contents to a cached RenderTexture.
 * This is accomplished by overriding the Container#render method to draw to our own special RenderTexture.
 */
export default class CachedContainer {
    /**
     * The texture configuration to use for this cached container
     * @type {{multisample: PIXI.MSAA_QUALITY, scaleMode: PIXI.SCALE_MODES, format: PIXI.FORMATS, mipmap: PIXI.MIPMAP_MODES}}
     * @abstract
     */
    static textureConfiguration: {
        multisample: PIXI.MSAA_QUALITY;
        scaleMode: PIXI.SCALE_MODES;
        format: PIXI.FORMATS;
        mipmap: PIXI.MIPMAP_MODES;
    };
    /**
     * Resize a render texture passed as a parameter with the renderer.
     * @param {PIXI.Renderer} renderer    The active canvas renderer.
     * @param {PIXI.RenderTexture} rt     The render texture to resize.
     */
    static resizeRenderTexture(renderer: PIXI.Renderer, rt: PIXI.RenderTexture): void;
    /**
     * Construct a CachedContainer.
     * @param {PIXI.Sprite|SpriteMesh} [sprite]  A specific sprite to bind to this CachedContainer and its renderTexture.
     */
    constructor(sprite?: PIXI.Sprite | SpriteMesh);
    set sprite(sprite: PIXI.Sprite | SpriteMesh);
    /**
     * A PIXI.Sprite or SpriteMesh which is bound to this CachedContainer.
     * The RenderTexture from this Container is associated with the Sprite which is automatically rendered.
     * @type {PIXI.Sprite|SpriteMesh}
     */
    get sprite(): PIXI.Sprite | SpriteMesh;
    /**
     * A map of render textures, linked to their render function and an optional RGBA clear color.
     * @type {Map<PIXI.RenderTexture,{renderFunction: Function, clearColor: number[]}>}
     * @protected
     */
    protected _renderPaths: Map<PIXI.RenderTexture, {
        renderFunction: Function;
        clearColor: number[];
    }>;
    /**
     * An RGBA array used to define the clear color of the RenderTexture
     * @type {number[]}
     */
    clearColor: number[];
    /**
     * Should our Container also be displayed on screen, in addition to being drawn to the cached RenderTexture?
     * @type {boolean}
     */
    displayed: boolean;
    /**
     * If true, the Container is rendered every frame.
     * If false, the Container is rendered only if {@link CachedContainer#renderDirty} is true.
     * @type {boolean}
     */
    autoRender: boolean;
    /**
     * Does the Container need to be rendered?
     * Set to false after the Container is rendered.
     * @type {boolean}
     */
    renderDirty: boolean;
    /**
     * The primary render texture bound to this cached container.
     * @type {PIXI.RenderTexture}
     */
    get renderTexture(): PIXI.RenderTexture;
    /**
     * Set the alpha mode of the cached container render texture.
     * @param {PIXI.ALPHA_MODES} mode
     */
    set alphaMode(mode: PIXI.ALPHA_MODES);
    /**
     * Create a render texture, provide a render method and an optional clear color.
     * @param {object} [options={}]                 Optional parameters.
     * @param {Function} [options.renderFunction]   Render function that will be called to render into the RT.
     * @param {number[]} [options.clearColor]       An optional clear color to clear the RT before rendering into it.
     * @returns {PIXI.RenderTexture}              A reference to the created render texture.
     */
    createRenderTexture({ renderFunction, clearColor }?: {
        renderFunction?: Function | undefined;
        clearColor?: number[] | undefined;
    }): PIXI.RenderTexture;
    /**
     * Remove a previously created render texture.
     * @param {PIXI.RenderTexture} renderTexture   The render texture to remove.
     * @param {boolean} [destroy=true]             Should the render texture be destroyed?
     */
    removeRenderTexture(renderTexture: PIXI.RenderTexture, destroy?: boolean): void;
    /**
     * Clear the cached container, removing its current contents.
     * @param {boolean} [destroy=true]    Tell children that we should destroy texture as well.
     * @returns {this}         A reference to the cleared container for chaining.
     */
    clear(destroy?: boolean): this;
    /** @inheritdoc */
    destroy(options: any): void;
    /** @inheritdoc */
    render(renderer: any): void;
    #private;
}
import type SpriteMesh from "../elements/sprite-mesh.mjs";
