/**
 * Provide the necessary methods to get a snapshot of the framebuffer into a render texture.
 * Class meant to be used as a singleton.
 * Created with the precious advices of dev7355608.
 */
export default class FramebufferSnapshot {
    /**
     * Create a render texture, provide a render method and an optional clear color.
     * @returns {PIXI.RenderTexture}              A reference to the created render texture.
     */
    static #createRenderTexture(): PIXI.RenderTexture;
    /**
     * The RenderTexture that is the render destination for the framebuffer snapshot.
     * @type {PIXI.RenderTexture}
     */
    framebufferTexture: PIXI.RenderTexture;
    /**
     * Get the framebuffer texture snapshot.
     * @param {PIXI.Renderer} renderer    The renderer for this context.
     * @returns {PIXI.RenderTexture}      The framebuffer snapshot.
     */
    getFramebufferTexture(renderer: PIXI.Renderer): PIXI.RenderTexture;
    #private;
}
