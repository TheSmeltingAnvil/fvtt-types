/**
 * A modified version of the PIXI.smooth.DashLineShader that supports an offset.
 * @internal
 */
export default class DashLineShader {
    /**
     * The fragment shader source.
     * @type {string}
     */
    static #FRAGMENT_SHADER: string;
    /**
     * @param {object} [options]             The options
     * @param {number} [options.dash=8]      The length of the dash
     * @param {number} [options.gap=5]       The length of the gap
     * @param {number} [options.offset=0]    The offset of the dashes
     */
    constructor({ dash, gap, offset }?: {
        dash?: number | undefined;
        gap?: number | undefined;
        offset?: number | undefined;
    });
}
