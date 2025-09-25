/**
 * Test whether a file source exists by performing a HEAD request against it
 * @param {string} src          The source URL or path to test
 * @returns {Promise<boolean>}   Does the file exist at the provided url?
 */
export function srcExists(src: string): Promise<boolean>;
/**
 * Get a single texture or sprite sheet from the cache.
 * @param {string} src                            The texture path to load.
 *                                                This may be a standard texture path or a "virtual texture" beginning
 *                                                with the "#" character that is retrieved from canvas.sceneTextures.
 * @returns {PIXI.Texture|PIXI.Spritesheet|null}  A texture, a sprite sheet or null if not found in cache.
 */
export function getTexture(src: string): PIXI.Texture | PIXI.Spritesheet | null;
/**
 * Load a single asset and return a Promise which resolves once the asset is ready to use
 * @param {string} src                           The requested texture source.
 *                                               This may be a standard texture path or a "virtual texture" beginning
 *                                               with the "#" character that is retrieved from canvas.sceneTextures.
 * @param {object} [options]                     Additional options which modify asset loading
 * @param {string} [options.fallback]            A fallback texture URL to use if the requested source is unavailable
 * @returns {PIXI.Texture|PIXI.Spritesheet|null} The loaded Texture or sprite sheet,
 *                                               or null if loading failed with no fallback
 */
export function loadTexture(src: string, { fallback }?: {
    fallback?: string | undefined;
}): PIXI.Texture | PIXI.Spritesheet | null;
/**
 * A Loader class which helps with loading video and image textures.
 */
declare class TextureLoader {
    /**
     * The duration in milliseconds for which a texture will remain cached
     * @type {number}
     */
    static CACHE_TTL: number;
    /**
     * @typedef TextureCacheEntry
     * @property {string} src   The URL of the texture.
     * @property {number} time  The timestamp when the texture was last accessed.
     * @property {number} size  The approximate memory usage of the texture in bytes.
     */
    /**
     * @typedef {Map<PIXI.BaseTexture|PIXI.Spritesheet, TextureCacheEntry>} TextureCacheMap
     * A mapping from a BaseTexture or Spritesheet to its cache entry data.
     */
    /**
     * Record the timestamps and approximate memory usage when each asset path is retrieved from cache
     * @type {TextureCacheMap}
     */
    static #cacheTime: Map<any, {
        /**
         * The URL of the texture.
         */
        src: string;
        /**
         * The timestamp when the texture was last accessed.
         */
        time: number;
        /**
         * The approximate memory usage of the texture in bytes.
         */
        size: number;
    }>;
    /**
     * A mapping of cached texture data
     * @type {WeakMap<PIXI.BaseTexture,Map<string, TextureAlphaData>>}
     */
    static #textureDataMap: WeakMap<PIXI.BaseTexture, Map<string, {
        /**
         * The width of the (downscaled) texture.
         */
        width: number;
        /**
         * The height of the (downscaled) texture.
         */
        height: number;
        /**
         * The minimum x-coordinate with alpha > 0.
         */
        minX: number;
        /**
         * The minimum y-coordinate with alpha > 0.
         */
        minY: number;
        /**
         * The maximum x-coordinate with alpha > 0 plus 1.
         */
        maxX: number;
        /**
         * The maximum y-coordinate with alpha > 0 plus 1.
         */
        maxY: number;
        /**
         * The array containing the texture alpha values (0-255)
         * with the dimensions (maxX-minX)×(maxY-minY).
         */
        data: Uint8Array;
    }>>;
    /**
     * To know if the basis transcoder has been initialized
     * @type {boolean}
     */
    static #basisTranscoderInitialized: boolean;
    /**
     * A helper dictionary to define approximate memory limits based on canvas.performance.mode.
     * The limit is in bytes. Each entry is reduced by 15% to give a higher safety margin.
     * @type {number[]}
     */
    static #MEMORY_LIMITS: number[];
    /**
     * A set of pinned source URLs that must never be evicted.
     * @type {Set<string>}
     */
    static #pinnedSources: Set<string>;
    /**
     * Initialize the basis/ktx2 transcoder for PIXI.Assets
     *
     * @license
     * PixiBasisKTX2 is a IIFE bundle created from pixi-basis-ktx2 package source by Kristof Van Der Haeghen
     *
     * The MIT License
     * Copyright (c) 2022-2025 Kristof Van Der Haeghen
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     * Available here: https://github.com/Sparcks/pixi-basis-ktx2
     *
     * -----------------------------------------------
     *
     * The transcoder files are from Binomial LLC under Apache License Version 2.0, January 2004
     * Available here: https://github.com/BinomialLLC/basis_universal/tree/master/webgl/transcoder/build
     *
     * @returns {Promise<*>}
     */
    static initializeBasisTranscoder(): Promise<any>;
    /**
     * Check if a source has a text file extension.
     * @param {string} src          The source.
     * @returns {boolean}           If the source has a text extension or not.
     */
    static hasTextExtension(src: string): boolean;
    /**
     * @typedef TextureAlphaData
     * @property {number} width         The width of the (downscaled) texture.
     * @property {number} height        The height of the (downscaled) texture.
     * @property {number} minX          The minimum x-coordinate with alpha > 0.
     * @property {number} minY          The minimum y-coordinate with alpha > 0.
     * @property {number} maxX          The maximum x-coordinate with alpha > 0 plus 1.
     * @property {number} maxY          The maximum y-coordinate with alpha > 0 plus 1.
     * @property {Uint8Array} data      The array containing the texture alpha values (0-255)
     *                                  with the dimensions (maxX-minX)×(maxY-minY).
     */
    /**
     * Use the texture to create a cached mapping of pixel alpha and cache it.
     * Cache the bounding box of non-transparent pixels for the un-rotated shape.
     * @param {PIXI.Texture} texture                The provided texture.
     * @param {number} [resolution=1]               Resolution of the texture data output.
     * @returns {TextureAlphaData|undefined}        The texture data if the texture is valid, else undefined.
     */
    static getTextureAlphaData(texture: PIXI.Texture, resolution?: number): {
        /**
         * The width of the (downscaled) texture.
         */
        width: number;
        /**
         * The height of the (downscaled) texture.
         */
        height: number;
        /**
         * The minimum x-coordinate with alpha > 0.
         */
        minX: number;
        /**
         * The minimum y-coordinate with alpha > 0.
         */
        minY: number;
        /**
         * The maximum x-coordinate with alpha > 0 plus 1.
         */
        maxX: number;
        /**
         * The maximum y-coordinate with alpha > 0 plus 1.
         */
        maxY: number;
        /**
         * The array containing the texture alpha values (0-255)
         * with the dimensions (maxX-minX)×(maxY-minY).
         */
        data: Uint8Array;
    } | undefined;
    /**
     * Load all the textures which are required for a particular Scene.
     * @param {Scene} scene                                 The Scene to load
     * @param {object} [options={}]                         Additional options that configure texture loading
     * @param {boolean} [options.expireCache=true]          Destroy other expired textures
     * @param {string[]} [options.additionalSources=[]]     Additional sources to load during canvas initialize
     * @param {number} [options.maxConcurrent]              The maximum number of textures that can be loaded concurrently
     * @returns {Promise<void>}
     */
    static loadSceneTextures(scene: Scene, { expireCache, additionalSources, maxConcurrent }?: {
        expireCache?: boolean | undefined;
        additionalSources?: string[] | undefined;
        maxConcurrent?: number | undefined;
    }): Promise<void>;
    /**
     * Use the Fetch API to retrieve a resource and return a Blob instance for it.
     * @param {string} src
     * @param {object} [options]                   Options to configure the loading behaviour.
     * @param {boolean} [options.bustCache=false]  Append a cache-busting query parameter to the request.
     * @returns {Promise<Blob>}                    A Blob containing the loaded data
     */
    static fetchResource(src: string, { bustCache }?: {
        bustCache?: boolean | undefined;
    }): Promise<Blob>;
    /**
     * Log texture loading progress in the console and in the Scene loading bar
     * @param {string} src          The source URL being loaded
     * @param {object} progress     Loading progress
     */
    static #onProgress(src: string, progress: object): void;
    /**
     * Log failed texture loading
     * @param {string} src          The source URL being loaded
     * @param {object} progress     Loading progress
     * @param {Error} error         The error which occurred
     */
    static #onError(src: string, progress: object, error: Error): void;
    /**
     * A helper to approximate the memory usage for a given baseTexture. We handle compressed textures (if supported),
     * and do a fallback for standard RGBA. Additionally, if canvas.performance.mipmap === "ON" for non-compressed textures,
     * we increase the usage by ~33% (which is another approximation)
     * @param {PIXI.BaseTexture} baseTex             The base texture to evaluate
     * @returns {number} Approximate usage in bytes
     */
    static #approximateTextureSize(baseTex: PIXI.BaseTexture): number;
    /**
     * Fallback memory calculation for a compressed texture whose buffers aren't visible.
     * @param {PIXI.BaseTexture} baseTex
     * @param {number} [bytesPerPixel=2]
     * @returns {number}
     */
    static #fallbackCompressedSize(baseTex: PIXI.BaseTexture, bytesPerPixel?: number): number;
    /**
     * Return a URL with a cache-busting query parameter appended.
     * @param {string} src        The source URL being attempted
     * @returns {string|boolean}  The new URL, or false on a failure.
     */
    static getCacheBustURL(src: string): string | boolean;
    /**
     * We evict assets sorted by size descending, until we drop below the memory limit.
     * @param {object} [options={}]
     * @param {Set<string>} [options.exclude]   A set of source URLs to skip from eviction checks.
     */
    static #enforceMemoryLimit({ exclude }?: {
        exclude?: Set<string> | undefined;
    }): Promise<void>;
    /**
     * Compute total approximate memory usage for all currently cached assets.
     * @returns {number}  The total approximate usage in bytes.
     */
    static #computeTotalMemory(): number;
    /**
     * A public getter to expose the total approximate memory usage.
     * @returns {number}   The total usage in bytes.
     */
    static get approximateTotalMemoryUsage(): number;
    /**
     * Determine the memory limit in bytes based on canvas.performance.mode.
     * Defaults to HIGH if the mode is out of range or missing.
     * @returns {number}
     */
    static #getMemoryLimit(): number;
    /**
     * Pin a source URL so it cannot be evicted.
     * @param {string} src   The source URL to pin
     */
    static pinSource(src: string): void;
    /**
     * Unpin a source URL that was previously pinned.
     * @param {string} src   The source URL to unpin
     */
    static unpinSource(src: string): void;
    /**
     * @deprecated since v12
     * @ignore
     */
    static get textureBufferDataMap(): Map<any, any>;
    /**
     * @deprecated since v12
     * @ignore
     */
    static #textureBufferDataMap: Map<any, any>;
    /**
     * Load an Array of provided source URL paths.
     * Paths which begin with a special character "#" are ignored as texture references.
     * @param {string[]} sources      The source URLs to load
     * @param {object} [options={}]   Additional options which modify loading
     * @param {string} [options.message=""]        The status message to display in the load bar
     * @param {boolean} [options.localize=false]   Whether to localize the message content before displaying it
     * @param {boolean} [options.escape=true]      Whether to escape the values of `format`
     * @param {boolean} [options.clean=true]       Whether to clean the provided message string as untrusted user input.
     *                                             No cleaning is applied if `format` is passed and `escape` is true or
     *                                             `localize` is true and `format` is not passed.
     * @param {string} [options.format]            A mapping of formatting strings passed to Localization#format
     * @param {boolean} [options.expireCache=false]   Expire other cached textures?
     * @param {number} [options.maxConcurrent]        The maximum number of textures that can be loaded concurrently.
     * @param {boolean} [options.displayProgress]     Display loading progress bar
     * @returns {Promise<void>}     A Promise which resolves once all textures are loaded
     */
    load(sources: string[], { message, localize, escape, clean, format, expireCache, maxConcurrent, displayProgress }?: {
        message?: string | undefined;
        localize?: boolean | undefined;
        escape?: boolean | undefined;
        clean?: boolean | undefined;
        format?: string | undefined;
        expireCache?: boolean | undefined;
        maxConcurrent?: number | undefined;
        displayProgress?: boolean | undefined;
    }): Promise<void>;
    /**
     * Load a single texture or spritesheet on-demand from a given source URL path
     * @param {string} src                                          The source texture path to load
     * @returns {Promise<PIXI.BaseTexture|PIXI.Spritesheet|null>}   The loaded texture object
     */
    loadTexture(src: string): Promise<PIXI.BaseTexture | PIXI.Spritesheet | null>;
    /**
     * Add an image or a sprite sheet url to the assets cache. Include an approximate memory size in the stored data.
     * @param {string} src                                 The source URL.
     * @param {PIXI.BaseTexture|PIXI.Spritesheet} asset    The asset
     */
    setCache(src: string, asset: PIXI.BaseTexture | PIXI.Spritesheet): void;
    /**
     * Retrieve a texture or a sprite sheet from the assets cache
     * @param {string} src                                     The source URL
     * @returns {PIXI.BaseTexture|PIXI.Spritesheet|null}       The cached texture, a sprite sheet or null
     */
    getCache(src: string): PIXI.BaseTexture | PIXI.Spritesheet | null;
    /**
     * Expire and unload assets from the cache which have not been used for more than CACHE_TTL milliseconds.
     * @param {object} [options={}]
     * @param {Set<string>} [options.exclude]   A set of source URLs to *skip* from eviction checks.
     */
    expireCache({ exclude }?: {
        exclude?: Set<string> | undefined;
    }): Promise<void>;
}
declare namespace TextureLoader {
    let loader: TextureLoader;
}
export default TextureLoader;
