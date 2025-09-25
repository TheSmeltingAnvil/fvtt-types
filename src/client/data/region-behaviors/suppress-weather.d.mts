/**
 * @import {RegionBehaviorViewedEvent, RegionBehaviorUnviewedEvent} from "@client/documents/_types.mjs";
 */
/**
 * The data model for a behavior that allows to suppress weather effects within the Region
 */
export default class SuppressWeatherRegionBehaviorType extends RegionBehaviorType {
    /** @override */
    static override LOCALIZATION_PREFIXES: string[];
    /** @override */
    static override defineSchema(): object;
    /**
     * Called when the weather behavior is viewed.
     * @param {RegionBehaviorViewedEvent} event
     * @this {SuppressWeatherRegionBehaviorType}
     */
    static #onBehaviorViewed(this: SuppressWeatherRegionBehaviorType, event: RegionBehaviorViewedEvent): Promise<void>;
    /**
     * Called when the weather behavior is unviewed.
     * @param {RegionBehaviorUnviewedEvent} event
     * @this {SuppressWeatherRegionBehaviorType}
     */
    static #onBehaviorUnviewed(this: SuppressWeatherRegionBehaviorType, event: RegionBehaviorUnviewedEvent): Promise<void>;
    /** @override */
    static override events: {
        behaviorViewed: typeof SuppressWeatherRegionBehaviorType.#onBehaviorViewed;
        behaviorUnviewed: typeof SuppressWeatherRegionBehaviorType.#onBehaviorUnviewed;
    };
}
import RegionBehaviorType from "./base.mjs";
import type { RegionBehaviorViewedEvent } from "@client/documents/_types.mjs";
import type { RegionBehaviorUnviewedEvent } from "@client/documents/_types.mjs";
