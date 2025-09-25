/**
 * A specialized canvas group for rendering hidden containers before all others (like masks).
 * @extends {PIXI.Container}
 */
export default class HiddenCanvasGroup {
    /** @override */
    static override groupName: string;
    eventMode: string;
    /**
     * The container which hold masks.
     * @type {PIXI.Container}
     */
    masks: PIXI.Container;
    /**
     * Add a mask to this group.
     * @param {string} name                           Name of the mask.
     * @param {PIXI.DisplayObject} displayObject      Display object to add.
     * @param {number|undefined} [position=undefined] Position of the mask.
     */
    addMask(name: string, displayObject: PIXI.DisplayObject, position?: number | undefined): void;
    /**
     * Invalidate the masks: flag them for rerendering.
     */
    invalidateMasks(): void;
    /** @inheritDoc */
    _draw(options: any): Promise<void>;
    /** @inheritDoc */
    _tearDown(options: any): Promise<void>;
    #private;
}
