/**
 * @import Token from "../token.mjs";
 * @import {DeepReadonly, TokenRulerData} from "../../../_types.mjs";
 */
/**
 * The ruler of a Token visualizes
 *   - the movement history of the Token,
 *   - the movment path the Token currently animating along, and
 *   - the planned movement path while the Token is being dragged.
 * @abstract
 */
export default class BaseTokenRuler {
    /**
     * @param {Token} token    The Token that this ruler belongs to
     */
    constructor(token: Token);
    /**
     * The reference to the Token this ruler belongs to.
     * @type {Token}
     */
    get token(): Token;
    /**
     * Set to {@link BaseTokenRuler#isVisible} in {@link foundry.canvas.placeables.Token#_refreshState}.
     */
    set visible(value: boolean);
    /**
     * Is the ruler visible?
     * @type {boolean}
     * @defaultValue false
     */
    get visible(): boolean;
    /**
     * Called when the ruler becomes visible or invisible.
     * @abstract
     * @protected
     */
    protected _onVisibleChange(): void;
    /**
     * Is the ruler supposed to be visible?
     * {@link BaseTokenRuler#visible} is set to {@link BaseTokenRuler#isVisible} in
     * {@link foundry.canvas.placeables.Token#_refreshState}.
     * @type {boolean}
     */
    get isVisible(): boolean;
    /**
     * Draw the ruler.
     * Called in {@link foundry.canvas.placeables.Token#_draw}.
     * @abstract
     */
    draw(): Promise<void>;
    /**
     * Clear the ruler.
     * Called in {@link foundry.canvas.placeables.Token#clear}.
     * @abstract
     */
    clear(): void;
    /**
     * Destroy the ruler.
     * Called in {@link foundry.canvas.placeables.Token#_destroy}.
     * @abstract
     */
    destroy(): void;
    /**
     * Refresh the ruler.
     * Called in {@link foundry.canvas.placeables.Token#_refreshRuler}.
     * @param {DeepReadonly<TokenRulerData>} rulerData
     * @abstract
     */
    refresh(rulerData: DeepReadonly<TokenRulerData>): void;
    #private;
}
import Token from "../token.mjs";
import type { TokenRulerData } from "../../../_types.mjs";
import type { DeepReadonly } from "../../../_types.mjs";
