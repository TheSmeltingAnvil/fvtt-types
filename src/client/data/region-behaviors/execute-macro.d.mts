/**
 * @import {RegionEvent} from "@client/documents/_types.mjs";
 */
/**
 * The data model for a behavior that executes a Macro.
 *
 * @property {string} uuid           The Macro UUID.
 */
export default class ExecuteMacroRegionBehaviorType extends RegionBehaviorType {
    /** @override */
    static override LOCALIZATION_PREFIXES: string[];
    /** @override */
    static override defineSchema(): {
        events: fields.SetField;
        uuid: fields.DocumentUUIDField;
        everyone: fields.BooleanField;
    };
    /** @override */
    override _handleRegionEvent(event: any): Promise<void>;
    #private;
}
import RegionBehaviorType from "./base.mjs";
import * as fields from "@common/data/fields.mjs";
