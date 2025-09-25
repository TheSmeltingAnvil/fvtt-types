/**
 * A class or interface that provide support for WebGL async read pixel/texture data extraction.
 */
export default class TextureExtractor {
    /**
     * List of compression that could be applied with extraction
     * @enum {number}
     */
    static COMPRESSION_MODES: {
        NONE: number;
        BASE64: number;
    };
    /**
     * @param {PIXI.Renderer} renderer                           The renderer
     * @param {object} [config={}]                               Worker initialization options
     * @param {PIXI.FORMATS} [config.format=PIXI.FORMATS.RED]    The texture format
     * @param {boolean} [config.controlHash=false]               Should use control hash?
     * @param {string} [config.callerName="TextureExtractor"]    The caller name
     * @param {boolean} [config.debug=false]                     Enable debug log?
     */
    constructor(renderer: PIXI.Renderer, { format, controlHash, callerName, debug }?: {
        format?: any;
        controlHash?: boolean | undefined;
        callerName?: string | undefined;
        debug?: boolean | undefined;
    });
    /**
     * The WebGL2 renderer.
     * @type {Renderer}
     */
    get renderer(): Renderer;
    /**
     * The texture format on which the Texture Extractor must work.
     * @type {PIXI.FORMATS}
     */
    get format(): PIXI.FORMATS;
    /**
     * The texture type on which the Texture Extractor must work.
     * @type {PIXI.TYPES}
     */
    get type(): PIXI.TYPES;
    /**
     * Debug flag.
     * @type {boolean}
     */
    debug: boolean;
    /**
     * Extract a rectangular block of pixels from the texture (without un-pre-multiplying).
     * @overload
     * @param {TexturePixelsExtractionOptions} options    Options which configure pixels extraction behavior
     * @returns {Promise<{pixels: Uint8ClampedArray|undefined, width: number, height: number, out?: ArrayBuffer}>}
     *   The pixels or undefined if there's no change compared to the last time pixels were extracted and
     *   the control hash option is enabled. If an output buffer was passed, the (new) output buffer is included
     *   in the result, which may be different from the output buffer that was passed because it was detached.
     */
    extract(options: {
        /**
         * The texture the pixels are extracted from.
         */
        texture?: PIXI.Texture | PIXI.RenderTexture;
        /**
         * The rectangle which the pixels are extracted from.
         */
        frame?: PIXI.Rectangle;
        /**
         * The NONE compression mode.
         */
        compression?: 0 | undefined;
        /**
         * The optional output buffer to write the pixels to.
         *                                 May be detached.
         *                                 The (new) output buffer is returned.
         */
        out?: ArrayBuffer | undefined;
    }): Promise<{
        pixels: Uint8ClampedArray | undefined;
        width: number;
        height: number;
        out?: ArrayBuffer;
    }>;
    /**
     * @overload
     * @param {TextureBase64ExtractionOptions} options    Options which configure base64 extraction behavior
     * @returns {Promise<string|undefined>}    The base64 string or undefined if there's no change compared
     *   to the last time base64 was extracted and the control hash option is enabled.
     */
    extract(options: {
        /**
         * The texture the pixels are extracted from.
         */
        texture?: PIXI.Texture | PIXI.RenderTexture;
        /**
         * The rectangle which the pixels are extracted from.
         */
        frame?: PIXI.Rectangle;
        /**
         * The BASE64 compression mode.
         */
        compression: 1;
        /**
         * The optional image mime type. Default: `"image/png"`.
         */
        type?: string | undefined;
        /**
         * The optional image quality. Default: `1`.
         */
        quality?: number | undefined;
    }): Promise<string | undefined>;
    /**
     * Free all the bound objects.
     */
    reset(): void;
    /**
     * Destroy this TextureExtractor.
     */
    destroy(): void;
    /**
     * Called by the renderer contextChange runner.
     */
    contextChange(): void;
    #private;
}
