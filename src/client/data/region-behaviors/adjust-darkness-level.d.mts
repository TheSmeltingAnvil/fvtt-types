/**
 * @import {RegionBehaviorViewedEvent, RegionBehaviorUnviewedEvent,
 *   RegionRegionBoundaryEvent} from "@client/documents/_types.mjs";
 */
/**
 * The data model for a behavior that allows to adjust the darkness level within the Region.
 */
export default class AdjustDarknessLevelRegionBehaviorType extends RegionBehaviorType {
    /** @override */
    static override LOCALIZATION_PREFIXES: string[];
    /**
     * Darkness level behavior modes.
     * @enum {number}
     */
    static get MODES(): Readonly<{
        /**
         * Override the darkness level with the modifier.
         */
        readonly OVERRIDE: 0;
        /**
         * Brighten the darkness level: `darknessLevel * (1 - modifier)`
         */
        readonly BRIGHTEN: 1;
        /**
         * Darken the darkness level: `1 - (1 - darknessLevel) * (1 - modifier)`.
         */
        readonly DARKEN: 2;
    }>;
    static #MODES: Readonly<{
        /**
         * Override the darkness level with the modifier.
         */
        readonly OVERRIDE: 0;
        /**
         * Brighten the darkness level: `darknessLevel * (1 - modifier)`
         */
        readonly BRIGHTEN: 1;
        /**
         * Darken the darkness level: `1 - (1 - darknessLevel) * (1 - modifier)`.
         */
        readonly DARKEN: 2;
    }>;
    /** @override */
    static override defineSchema(): {
        mode: fields.NumberField;
        modifier: fields.AlphaField;
    };
    /**
     * Called when the darkness behavior is viewed.
     * @param {RegionBehaviorViewedEvent} event
     * @this {AdjustDarknessLevelRegionBehaviorType}
     */
    static #onBehaviorViewed(this: AdjustDarknessLevelRegionBehaviorType, event: RegionBehaviorViewedEvent): Promise<void>;
    /**
     * Called when the darkness behavior is unviewed.
     * @param {RegionBehaviorUnviewedEvent} event
     * @this {AdjustDarknessLevelRegionBehaviorType}
     */
    static #onBehaviorUnviewed(this: AdjustDarknessLevelRegionBehaviorType, event: RegionBehaviorUnviewedEvent): Promise<void>;
    /**
     * Called when the boundary of an event has changed.
     * @param {RegionRegionBoundaryEvent} event
     * @this {AdjustDarknessLevelRegionBehaviorType}
     */
    static #onRegionBoundary(this: AdjustDarknessLevelRegionBehaviorType, event: RegionRegionBoundaryEvent): Promise<void>;
    /** @override */
    static override events: {
        behaviorViewed: typeof AdjustDarknessLevelRegionBehaviorType.__#84@#onBehaviorViewed;
        behaviorUnviewed: typeof AdjustDarknessLevelRegionBehaviorType.__#84@#onBehaviorUnviewed;
        regionBoundary: typeof AdjustDarknessLevelRegionBehaviorType.__#84@#onRegionBoundary;
    };
    /** @inheritDoc */
    _onUpdate(changed: any, options: any, userId: any): void;
}
import RegionBehaviorType from "./base.mjs";
import * as fields from "@common/data/fields.mjs";
import type { RegionBehaviorViewedEvent } from "@client/documents/_types.mjs";
import type { RegionBehaviorUnviewedEvent } from "@client/documents/_types.mjs";
import type { RegionRegionBoundaryEvent } from "@client/documents/_types.mjs";
