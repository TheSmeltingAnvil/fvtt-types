/**
 * @import {ElevatedPoint} from "../../_types.mjs";
 * @import TokenDocument from "@client/documents/token.mjs";
 * @import {RegionMoveInEvent} from "@client/documents/_types.mjs";
 */
/**
 * The data model for a behavior that teleports Token that enter the Region to a preset destination Region.
 *
 * @property {RegionDocument} destination    The destination Region the Token is teleported to.
 * @property {boolean} choice                Show teleportation confirmation dialog?
 */
export default class TeleportTokenRegionBehaviorType extends RegionBehaviorType {
    /** @override */
    static override LOCALIZATION_PREFIXES: string[];
    /** @override */
    static override defineSchema(): {
        destination: fields.DocumentUUIDField;
        choice: fields.BooleanField;
    };
    /**
     * Teleport the Token if it moves into the Region.
     * @param {RegionMoveInEvent} event
     * @this {TeleportTokenRegionBehaviorType}
     */
    static #onTokenMoveIn(this: TeleportTokenRegionBehaviorType, event: RegionMoveInEvent): Promise<void>;
    /** @override */
    static override events: {
        tokenMoveIn: typeof TeleportTokenRegionBehaviorType.#onTokenMoveIn;
    };
    /**
     * The query handler for teleporation confirmation.
     * @type {(queryData: {behaviorUuid: string; token: tokenUuid}) => Promise<boolean>}
     * @internal
     */
    static _confirmQuery: (queryData: {
        behaviorUuid: string;
        token: any;
    }) => Promise<boolean>;
    /**
     * Display a dialog to confirm the teleportation?
     * @param {TokenDocument} token           The token that is teleported.
     * @param {RegionDocument} destination    The destination region.
     * @returns {Promise<boolean>}            The result of the dialog.
     */
    static #confirmDialog(token: TokenDocument, destination: RegionDocument): Promise<boolean>;
    #private;
}
import RegionBehaviorType from "./base.mjs";
import * as fields from "@common/data/fields.mjs";
import type TokenDocument from "@client/documents/token.mjs";
import RegionDocument from "@client/documents/region.mjs";
