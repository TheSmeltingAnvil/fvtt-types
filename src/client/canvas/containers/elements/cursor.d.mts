/**
 * @import {Point} from "@common/_types.mjs";
 */
/**
 * A single Mouse Cursor
 */
export default class Cursor {
    constructor(user: any);
    /**
     * The target cursor position.
     * @type {Point}
     */
    target: Point;
    /**
     * Update the position of this cursor based on the current position?
     * @type {boolean}
     * @internal
     */
    _updatePosition: boolean;
    /** @override */
    override updateTransform(): void;
    /**
     * Update visibility and animations
     * @param {User} user  The user
     */
    refreshVisibility(user: User): void;
    visible: any;
    /**
     * Draw the user's cursor as a small dot with their user name attached as text
     * @param {User} user
     */
    draw(user: User): void;
    /** @inheritdoc */
    destroy(options: any): void;
    #private;
}
import type { Point } from "@common/_types.mjs";
