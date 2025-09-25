/**
 * @import {RegionEvent} from "@client/documents/_types.mjs";
 */
/**
 * The data model for a behavior that executes a script.
 *
 * @property {string} source    The source code of the script.
 */
export default class ExecuteScriptRegionBehaviorType extends RegionBehaviorType {
    /** @override */
    static override LOCALIZATION_PREFIXES: string[];
    /** @override */
    static override defineSchema(): {
        events: fields.SetField;
        source: fields.JavaScriptField;
    };
    /** @override */
    override _handleRegionEvent(event: any): Promise<void>;
}
import RegionBehaviorType from "./base.mjs";
import * as fields from "../../../common/data/fields.mjs";
