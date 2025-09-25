/**
 * A special Graphics class which handles Grid layer highlighting
 * @extends {PIXI.Graphics}
 */
export default class GridHighlight {
    constructor(name: any, ...args: any[]);
    /**
     * Track the Grid Highlight name
     * @type {string}
     */
    name: string;
    /**
     * Track distinct positions which have already been highlighted
     * @type {Set}
     */
    positions: Set<any>;
    /**
     * Record a position that is highlighted and return whether or not it should be rendered
     * @param {number} x    The x-coordinate to highlight
     * @param {number} y    The y-coordinate to highlight
     * @return {boolean}    Whether or not to draw the highlight for this location
     */
    highlight(x: number, y: number): boolean;
    /** @inheritdoc */
    clear(): any;
    /** @inheritdoc */
    destroy(...args: any[]): any;
}
