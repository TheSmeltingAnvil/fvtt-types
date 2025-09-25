/**
 * @import RegionDocument from "./region.mjs";
 * @import Scene from "./scene.mjs";
 * @import {RegionEvent} from "./_types.mjs";
 */
/**
 * The client-side RegionBehavior document which extends the common BaseRegionBehavior model.
 * @extends BaseRegionBehavior
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.RegionDocument}: The Region document type which contains
 *   RegionBehavior documents
 * @see {@link foundry.applications.sheets.RegionBehaviorConfig}: The RegionBehaviorConfig
 *   configuration application
 */
export default class RegionBehavior extends BaseRegionBehavior {
    /** @inheritDoc */
    static createDialog(data: any, createOptions: any, dialogOptions: any): Promise<any>;
    /**
     * A convenience reference to the RegionDocument which contains this RegionBehavior.
     * @type {RegionDocument|null}
     */
    get region(): RegionDocument | null;
    /**
     * A convenience reference to the Scene which contains this RegionBehavior.
     * @type {Scene|null}
     */
    get scene(): Scene | null;
    /**
     * A RegionBehavior is active if and only if it was created, hasn't been deleted yet, and isn't disabled.
     * @type {boolean}
     */
    get active(): boolean;
    /**
     * A RegionBehavior is viewed if and only if it is active and the Scene of its Region is viewed.
     * @type {boolean}
     */
    get viewed(): boolean;
    /** @override */
    override prepareBaseData(): void;
    /**
     * Does this RegionBehavior handle the Region events with the given name?
     * @param {string} eventName    The Region event name
     * @returns {boolean}
     */
    hasEvent(eventName: string): boolean;
    /**
     * Handle the Region event.
     * @param {RegionEvent} event    The Region event
     * @returns {Promise<void>}
     * @internal
     */
    _handleRegionEvent(event: RegionEvent): Promise<void>;
}
import BaseRegionBehavior from "@common/documents/region-behavior.mjs";
import type RegionDocument from "./region.mjs";
import type Scene from "./scene.mjs";
import type { RegionEvent } from "./_types.mjs";
