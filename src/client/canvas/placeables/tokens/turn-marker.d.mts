/**
 * @import Token from "../token.mjs";
 * @import {TurnMarkerAnimationConfigData} from "../_types.mjs"
 */
/**
 * The Turn Marker of a {@link foundry.canvas.placeables.Token}.
 */
export default class TokenTurnMarker {
    /**
     * Construct a TokenTurnMarker by providing a Token object instance.
     * @param {Token} token    The Token that this Turn Marker belongs to
     */
    constructor(token: Token);
    zIndex: number;
    /**
     * The Token who this Turn Marker belongs to.
     * @type {Token}
     */
    get token(): Token;
    /**
     * The sprite of the Turn Marker.
     * @type {SpriteMesh}
     */
    mesh: SpriteMesh;
    /**
     * The animation configuration of the Turn Marker.
     * @type {TurnMarkerAnimationConfigData}
     */
    animation: TurnMarkerAnimationConfigData;
    /**
     * Draw the Turn Marker.
     * @returns {Promise<void>}
     */
    draw(): Promise<void>;
    /**
     * Animate the Turn Marker.
     * @param {number} deltaTime    The delta time
     */
    animate(deltaTime: number): void;
    rotation: number | undefined;
    #private;
}
import type Token from "../token.mjs";
import { SpriteMesh } from "../../containers/_module.mjs";
