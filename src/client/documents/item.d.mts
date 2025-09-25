/**
 * @import Actor from "./actor.mjs";
 * @import ActiveEffect from "./active-effect.mjs";
 */
/**
 * The client-side Item document which extends the common BaseItem model.
 * @extends BaseItem
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.collections.Items}: The world-level collection of Item documents
 * @see {@link foundry.applications.sheets.ItemSheet}: The Item configuration application
 */
export default class Item extends BaseItem {
    /** @override */
    static override _onCreateOperation(documents: any, operation: any, user: any): Promise<void>;
    /** @inheritDoc */
    static _onDeleteOperation(documents: any, operation: any, user: any): Promise<void>;
    /**
     * A convenience alias of Item#parent which is more semantically intuitive
     * @type {Actor|null}
     */
    get actor(): Actor | null;
    /**
     * Provide a thumbnail image path used to represent this document.
     * @type {string}
     */
    get thumbnail(): string;
    /**
     * A legacy alias of Item#isEmbedded
     * @type {boolean}
     */
    get isOwned(): boolean;
    /**
     * Return an array of the Active Effect instances which originated from this Item.
     * The returned instances are the ActiveEffect instances which exist on the Item itself.
     * @type {ActiveEffect[]}
     */
    get transferredEffects(): ActiveEffect[];
    /**
     * Return a data object which defines the data schema against which dice rolls can be evaluated.
     * By default, this is directly the Item's system data, but systems may extend this to include additional properties.
     * If overriding or extending this method to add additional properties, care must be taken not to mutate the original
     * object.
     * @returns {object}
     */
    getRollData(): object;
    /** @inheritDoc */
    _preCreate(data: any, options: any, user: any): Promise<boolean | void>;
}
import BaseItem from "@common/documents/item.mjs";
import type Actor from "./actor.mjs";
import type ActiveEffect from "./active-effect.mjs";
