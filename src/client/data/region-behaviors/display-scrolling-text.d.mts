/**
 * @import {RegionEvent} from "@client/documents/_types.mjs";
 */
/**
 * The data model for a behavior that displays scrolling text above a token when one of the subscribed events occurs.
 *
 * @property {boolean} once           Disable the behavior after it triggers once
 * @property {string} text            The text to display
 * @property {string} color           Optional color setting for the text
 * @property {number} visibility      Which users the scrolling text will display for
                                      (see {@link DisplayScrollingTextRegionBehaviorType.VISIBILITY_MODES})
 */
export default class DisplayScrollingTextRegionBehaviorType extends RegionBehaviorType {
    /** @override */
    static override LOCALIZATION_PREFIXES: string[];
    /**
     * Text visibility behavior modes.
     * @enum {number}
     */
    static get VISIBILITY_MODES(): Readonly<{
        /**
         * Display only for gamemaster users
         */
        readonly GAMEMASTER: 0;
        /**
         * Display only for users with observer permissions on the triggering token (and for the GM)
         */
        readonly OBSERVER: 1;
        /**
         * Display for all users
         */
        readonly ANYONE: 2;
    }>;
    static #VISIBILITY_MODES: Readonly<{
        /**
         * Display only for gamemaster users
         */
        readonly GAMEMASTER: 0;
        /**
         * Display only for users with observer permissions on the triggering token (and for the GM)
         */
        readonly OBSERVER: 1;
        /**
         * Display for all users
         */
        readonly ANYONE: 2;
    }>;
    /** @override */
    static override defineSchema(): {
        events: fields.SetField;
        text: fields.StringField;
        color: fields.ColorField;
        visibility: fields.NumberField;
        once: fields.BooleanField;
    };
    /** @override */
    override _handleRegionEvent(event: any): Promise<void>;
    #private;
}
import RegionBehaviorType from "./base.mjs";
import * as fields from "@common/data/fields.mjs";
