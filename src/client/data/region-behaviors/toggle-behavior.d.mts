/**
 * @import {RegionEvent} from "@client/documents/_types.mjs";
 */
/**
 * The data model for a behavior that toggles Region Behaviors when one of the subscribed events occurs.
 *
 * @property {Set<string>} enable     The Region Behavior UUIDs that are enabled.
 * @property {Set<string>} disable    The Region Behavior UUIDs that are disabled.
 */
export default class ToggleBehaviorRegionBehaviorType extends RegionBehaviorType {
    /** @override */
    static override LOCALIZATION_PREFIXES: string[];
    /** @override */
    static override defineSchema(): {
        events: fields.SetField;
        enable: fields.SetField;
        disable: fields.SetField;
    };
    /** @override */
    static override validateJoint(data: any): void;
    /** @override */
    override _handleRegionEvent(event: any): Promise<void>;
}
import RegionBehaviorType from "./base.mjs";
import * as fields from "../../../common/data/fields.mjs";
