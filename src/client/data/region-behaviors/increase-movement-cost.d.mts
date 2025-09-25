/**
 * @import {RegionBehaviorViewedEvent, RegionBehaviorUnviewedEvent,
 *   RegionRegionBoundaryEvent} from "@client/documents/_types.mjs";
 */
/**
 * The data model for a behavior that allows to modify the movement cost within the Region.
 *
 * @property {{[movementAction: string]: number}} difficulties    The difficulty of each movement action
 */
export default class ModifyMovementCostRegionBehaviorType extends RegionBehaviorType {
    /** @override */
    static override LOCALIZATION_PREFIXES: string[];
    /** @override */
    static override defineSchema(): {
        difficulties: fields.SchemaField;
    };
    /**
     * Called when the darkness behavior is viewed.
     * @param {RegionBehaviorViewedEvent} event
     * @this {ModifyMovementCostRegionBehaviorType}
     */
    static #onBehaviorViewed(this: ModifyMovementCostRegionBehaviorType, event: RegionBehaviorViewedEvent): Promise<void>;
    /**
     * Called when the darkness behavior is unviewed.
     * @param {RegionBehaviorUnviewedEvent} event
     * @this {ModifyMovementCostRegionBehaviorType}
     */
    static #onBehaviorUnviewed(this: ModifyMovementCostRegionBehaviorType, event: RegionBehaviorUnviewedEvent): Promise<void>;
    /**
     * Called when the boundary of an event has changed.
     * @param {RegionRegionBoundryEvent} event
     * @this {ModifyMovementCostRegionBehaviorType}
     */
    static #onRegionBoundary(this: ModifyMovementCostRegionBehaviorType, event: RegionRegionBoundryEvent): Promise<void>;
    /** @override */
    static override events: {
        behaviorViewed: typeof ModifyMovementCostRegionBehaviorType.#onBehaviorViewed;
        behaviorUnviewed: typeof ModifyMovementCostRegionBehaviorType.#onBehaviorUnviewed;
        regionBoundary: typeof ModifyMovementCostRegionBehaviorType.#onRegionBoundary;
    };
    /** @inheritDoc */
    _onUpdate(changed: any, options: any, userId: any): void;
    /** @override */
    override _getTerrainEffects(token: any, segment: any): {
        name: string;
        difficulty: any;
    }[];
}
import RegionBehaviorType from "./base.mjs";
import * as fields from "../../../common/data/fields.mjs";
import type { RegionBehaviorViewedEvent } from "@client/documents/_types.mjs";
import type { RegionBehaviorUnviewedEvent } from "@client/documents/_types.mjs";
