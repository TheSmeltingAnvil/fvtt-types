/**
 * A basic PCO which is handling drawings of any shape.
 * @extends {PIXI.smooth.SmoothGraphics}
 * @mixes PrimaryCanvasObject
 *
 * @param {object} [options]                               A config object
 * @param {PIXI.smooth.SmoothGraphicsGeometry} [options.geometry] A geometry passed to the graphics.
 * @param {string|null} [options.name]                     The name of the PCO.
 * @param {*} [options.object]                             Any object that owns this PCO.
 */
export default class PrimaryGraphics {
    /**
     * A temporary point used by this class.
     * @type {PIXI.Point}
     */
    static #TEMP_POINT: PIXI.Point;
    constructor(options: any);
    name: any;
    object: any;
    /** @override */
    override _calculateCanvasBounds(): void;
    /** @inheritdoc */
    updateCanvasTransform(): void;
    /** @override */
    override containsCanvasPoint(point: any): any;
    #private;
}
