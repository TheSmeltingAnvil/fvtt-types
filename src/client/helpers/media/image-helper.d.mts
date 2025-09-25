/**
 * A helper class to provide common functionality for working with Image objects.
 */
export default class ImageHelper {
    /**
     * Create thumbnail preview for a provided image path.
     * @param {string|PIXI.DisplayObject} src   The URL or display object of the texture to render to a thumbnail
     * @param {object} options    Additional named options passed to the compositeCanvasTexture function
     * @param {number} [options.width]        The desired width of the resulting thumbnail
     * @param {number} [options.height]       The desired height of the resulting thumbnail
     * @param {number} [options.tx]           A horizontal transformation to apply to the provided source
     * @param {number} [options.ty]           A vertical transformation to apply to the provided source
     * @param {boolean} [options.center]      Whether to center the object within the thumbnail
     * @param {string} [options.format]       The desired output image format
     * @param {number} [options.quality]      The desired output image quality
     * @returns {Promise<object>}  The parsed and converted thumbnail data
     */
    static createThumbnail(src: string | PIXI.DisplayObject, { width, height, tx, ty, center, format, quality }: {
        width?: number | undefined;
        height?: number | undefined;
        tx?: number | undefined;
        ty?: number | undefined;
        center?: boolean | undefined;
        format?: string | undefined;
        quality?: number | undefined;
    }): Promise<object>;
    /**
     * Test whether a source file has a supported image extension type
     * @param {string} src      A requested image source path
     * @returns {boolean}       Does the filename end with a valid image extension?
     */
    static hasImageExtension(src: string): boolean;
    /**
     * Composite a canvas object by rendering it to a single texture
     *
     * @param {PIXI.DisplayObject} object   The object to render to a texture
     * @param {object} [options]            Options which configure the resulting texture
     * @param {number} [options.width]        The desired width of the output texture
     * @param {number} [options.height]       The desired height of the output texture
     * @param {number} [options.tx]           A horizontal translation to apply to the object
     * @param {number} [options.ty]           A vertical translation to apply to the object
     * @param {boolean} [options.center]      Center the texture in the rendered frame?
     *
     * @returns {PIXI.Texture}              The composite Texture object
     */
    static compositeCanvasTexture(object: PIXI.DisplayObject, { width, height, tx, ty, center }?: {
        width?: number | undefined;
        height?: number | undefined;
        tx?: number | undefined;
        ty?: number | undefined;
        center?: boolean | undefined;
    }): PIXI.Texture;
    /**
     * Extract a texture to a base64 PNG string
     * @param {PIXI.Texture} texture      The texture object to extract
     * @param {object} options
     * @param {string} [options.format]   Image format, e.g. "image/jpeg" or "image/webp".
     * @param {number} [options.quality]  JPEG or WEBP compression from 0 to 1. Default is 0.92.
     * @returns {Promise<string>}         A base64 png string of the texture
     */
    static textureToImage(texture: PIXI.Texture, { format, quality }?: {
        format?: string | undefined;
        quality?: number | undefined;
    }): Promise<string>;
    /**
     * Asynchronously convert a DisplayObject container to base64 using Canvas#toBlob and FileReader
     * @param {PIXI.DisplayObject} target     A PIXI display object to convert
     * @param {string} type                   The requested mime type of the output, default is image/png
     * @param {number} quality                A number between 0 and 1 for image quality if image/jpeg or image/webp
     * @returns {Promise<string>}             A processed base64 string
     */
    static pixiToBase64(target: PIXI.DisplayObject, type: string, quality: number): Promise<string>;
    /**
     * Asynchronously convert a canvas element to base64.
     * @param {HTMLCanvasElement} canvas
     * @param {string} [type="image/png"]
     * @param {number} [quality]
     * @returns {Promise<string>} The base64 string of the canvas.
     */
    static canvasToBase64(canvas: HTMLCanvasElement, type?: string, quality?: number): Promise<string>;
    /**
     * Upload a base64 image string to a persisted data storage location
     * @param {string} base64       The base64 string
     * @param {string} fileName     The file name to upload
     * @param {string} filePath     The file path where the file should be uploaded
     * @param {object} [options]    Additional options which affect uploading
     * @param {string} [options.storage=data]   The data storage location to which the file should be uploaded
     * @param {string} [options.type]           The MIME type of the file being uploaded
     * @param {boolean} [options.notify=true]   Display a UI notification when the upload is processed.
     * @returns {Promise<object>}   A promise which resolves to the FilePicker upload response
     */
    static uploadBase64(base64: string, fileName: string, filePath: string, { storage, type, notify }?: {
        storage?: string | undefined;
        type?: string | undefined;
        notify?: boolean | undefined;
    }): Promise<object>;
    /**
     * Create a canvas element containing the pixel data.
     * @param {Uint8ClampedArray} pixels              Buffer used to create the image data.
     * @param {number} width                          Buffered image width.
     * @param {number} height                         Buffered image height.
     * @param {object} options
     * @param {HTMLCanvasElement} [options.element]   The element to use.
     * @param {number} [options.ew]                   Specified width for the element (default to buffer image width).
     * @param {number} [options.eh]                   Specified height for the element (default to buffer image height).
     * @returns {HTMLCanvasElement}
     */
    static pixelsToCanvas(pixels: Uint8ClampedArray, width: number, height: number, { element, ew, eh }?: {
        element?: HTMLCanvasElement | undefined;
        ew?: number | undefined;
        eh?: number | undefined;
    }): HTMLCanvasElement;
}
