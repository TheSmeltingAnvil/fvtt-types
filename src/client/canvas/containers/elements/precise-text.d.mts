/**
 * An extension of the default PIXI.Text object which forces double resolution.
 * At default resolution Text often looks blurry or fuzzy.
 */
export default class PreciseText {
    /**
     * Prepare a TextStyle object which merges the canvas defaults with user-provided options
     * @param {object} [options={}]   Additional options merged with the default TextStyle
     * @param {number} [options.anchor]       A text anchor point from CONST.TEXT_ANCHOR_POINTS
     * @returns {PIXI.TextStyle}      The prepared TextStyle
     */
    static getTextStyle({ anchor, ...options }?: {
        anchor?: number | undefined;
    }): PIXI.TextStyle;
    constructor(...args: any[]);
    _autoResolution: boolean;
    _resolution: number;
}
