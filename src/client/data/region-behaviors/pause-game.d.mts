/**
 * @import {RegionMoveInEvent} from "@client/documents/_types.mjs";
 */
/**
 * The data model for a behavior that pauses the game when a player-controlled Token enters the Region.
 *
 * @property {boolean} once    Disable the behavior once a player-controlled Token enters the region?
 */
export default class PauseGameRegionBehaviorType extends RegionBehaviorType {
    /** @override */
    static override LOCALIZATION_PREFIXES: string[];
    /** @override */
    static override defineSchema(): {
        once: fields.BooleanField;
    };
    /**
     * Pause the game if a player-controlled Token moves into the Region.
     * @param {RegionMoveInEvent} event
     * @this {PauseGameRegionBehaviorType}
     */
    static #onTokenMoveIn(this: PauseGameRegionBehaviorType, event: RegionMoveInEvent): Promise<void>;
    /** @override */
    static override events: {
        tokenMoveIn: typeof PauseGameRegionBehaviorType.#onTokenMoveIn;
    };
}
import RegionBehaviorType from "./base.mjs";
import * as fields from "../../../common/data/fields.mjs";
