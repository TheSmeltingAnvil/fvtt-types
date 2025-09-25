/**
 * @import {TurnMarkerAnimationData} from "../canvas/placeables/tokens/turn-marker-data.mjs"
 * @import {CombatConfigurationData} from "../_types.mjs"
 */
/**
 * A configuration class managing the Combat Turn Markers.
 */
export default class CombatConfiguration {
    /**
     * The token ring config instance.
     * @type {CombatConfiguration}
     */
    static #instance: CombatConfiguration;
    /**
     * To know if the ring config is initialized.
     * @type {boolean}
     */
    static #initialized: boolean;
    /**
     * Combat turn marker animation configurations
     * @type {Record<string, TurnMarkerAnimationData>}
     */
    static #DEFAULT_TURN_MARKER_ANIMATIONS: Record<string, TurnMarkerAnimationData>;
    /**
     * The configuration setting used to record Combat preferences
     * @type {string}
     */
    static CONFIG_SETTING: string;
    /**
     * The data model schema used to structure and validate the stored setting.
     * @type {SchemaField}
     */
    static get schema(): SchemaField;
    static #schema: any;
    /**
     * Register the token ring config and initialize it
     */
    static initialize(): void;
    /**
     * Register game settings used by the Combat Tracker
     */
    static registerSettings(): void;
    /**
     * Called when turn markers settings are changed.
     */
    static #onChangeCombatConfiguration(): void;
    /**
     * Get turn marker settings.
     * @type {Object}
     */
    get turnMarker(): Object;
    /**
     * Get tracked resource setting.
     * @type {string}
     */
    get resource(): string;
    /**
     * Get skip defeated setting.
     * @type {boolean}
     */
    get skipDefeated(): boolean;
    /**
     * Get current turn marker animation.
     * @type {TurnMarkerAnimationData}
     */
    get currentTurnMarkerAnimation(): TurnMarkerAnimationData;
    /**
     * Add a new turn marker animation.
     * @param {string} id                       The id of the turn marker animation.
     * @param {TurnMarkerAnimationData} config  The configuration object for the turn marker animation.
     */
    addTurnMarkerAnimation(id: string, config: TurnMarkerAnimationData): void;
    /**
     * Get a turn marker animation by id.
     * @param {string} id                  The id of the turn marker configuration.
     * @returns {TurnMarkerAnimationData}  The turn marker configuration object.
     */
    getTurnMarkerAnimation(id: string): TurnMarkerAnimationData;
    /**
     * Use a turn marker animation.
     * @param {string} animationId  The id of the turn marker animation to use.
     * @returns {boolean}           True if the animation was successfully set, false otherwise.
     */
    useTurnMarkerAnimation(animationId: string): boolean;
    /**
     * Get all animations and labels as an array of choices suitable for a select element.
     * @type {{value: string, label: string}[]} An array of objects containing an id and a localized label.
     */
    get turnMarkerAnimations(): {
        value: string;
        label: string;
    }[];
    #private;
}
import type { TurnMarkerAnimationData } from "../canvas/placeables/tokens/turn-marker-data.mjs";
