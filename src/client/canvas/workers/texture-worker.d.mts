/**
 * Wrapper for a web worker meant to convert a pixel buffer to the specified image format
 * and quality and return a base64 image.
 */
export default class TextureCompressor extends AsyncWorker {
    /**
     * @param {string} [name="TextureCompressor"]      The worker name to be initialized
     * @param {object} [config]                        Worker initialization options
     * @param {boolean} [config.controlHash=false]     Should use control hash?
     * @param {boolean} [config.debug=false]           Should the worker run in debug mode?
     */
    constructor(name?: string, config?: {
        controlHash?: boolean | undefined;
        debug?: boolean | undefined;
    });
    /**
     * Process the non-blocking image compression to a base64 string.
     * @param {Uint8ClampedArray} buffer                      Buffer used to create the image data.
     * @param {number} width                                  Buffered image width.
     * @param {number} height                                 Buffered image height.
     * @param {object} [options]
     * @param {string} [options.hash]                         The precomputed hash.
     * @param {boolean} [options.debug]                       The debug option.
     * @returns {Promise<*>}
     */
    compressBufferBase64(buffer: Uint8ClampedArray, width: number, height: number, options?: {
        hash?: string | undefined;
        debug?: boolean | undefined;
    }): Promise<any>;
    /**
     * Expand a buffer in RED format to a buffer in RGBA format.
     * @param {Uint8ClampedArray} buffer               Buffer used to create the image data.
     * @param {number} width                           Buffered image width.
     * @param {number} height                          Buffered image height.
     * @param {object} [options]
     * @param {ArrayBuffer} [options.out]              The output buffer to write the expanded pixels to. May be detached.
     * @param {string} [options.hash]                  The precomputed hash.
     * @param {boolean} [options.debug]                The debug option.
     * @returns {Promise<unknown>}
     */
    expandBufferRedToBufferRGBA(buffer: Uint8ClampedArray, width: number, height: number, options?: {
        out?: ArrayBuffer | undefined;
        hash?: string | undefined;
        debug?: boolean | undefined;
    }): Promise<unknown>;
    /**
     * Reduce a buffer in RGBA format to a buffer in RED format.
     * @param {Uint8ClampedArray} buffer                Buffer used to create the image data.
     * @param {number} width                            Buffered image width.
     * @param {number} height                           Buffered image height.
     * @param {object} [options]
     * @param {ArrayBuffer} [options.out]               The output buffer to write the reduced pixels to. May be detached.
     * @param {string} [options.hash]                   The precomputed hash.
     * @param {boolean} [options.debug]                 The debug option.
     * @returns {Promise<unknown>}
     */
    reduceBufferRGBAToBufferRED(buffer: Uint8ClampedArray, width: number, height: number, options?: {
        out?: ArrayBuffer | undefined;
        hash?: string | undefined;
        debug?: boolean | undefined;
    }): Promise<unknown>;
    /**
     * Copy a buffer.
     * @param {Uint8ClampedArray} buffer                      Buffer used to create the image data.
     * @param {object} [options]
     * @param {ArrayBuffer} [options.out]                     The output buffer to copy the pixels to. May be detached.
     * @param {string} [options.hash]                         The precomputed hash.
     * @param {boolean} [options.debug]                       The debug option.
     * @returns {Promise<unknown>}
     */
    copyBuffer(buffer: Uint8ClampedArray, options?: {
        out?: ArrayBuffer | undefined;
        hash?: string | undefined;
        debug?: boolean | undefined;
    }): Promise<unknown>;
    #private;
}
import { AsyncWorker } from "../../helpers/workers.mjs";
