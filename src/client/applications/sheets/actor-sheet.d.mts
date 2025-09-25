/**
 * @import Actor from "../../documents/actor.mjs";
 * @import Folder from "../../documents/folder.mjs";
 * @import TokenDocument from "../../documents/token.mjs";
 */
/**
 * A base class for providing Actor Sheet behavior using ApplicationV2.
 */
// @ts-expect-error -- IGNORE --
export default class ActorSheetV2 extends DocumentSheetV2 {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        position: {
            width: number;
        };
        window: {
            controls: {
                action: string;
                icon: string;
                label: string;
                ownership: string;
            }[];
        };
        actions: {
            configurePrototypeToken: typeof ActorSheetV2.#onConfigurePrototypeToken;
            configureToken: typeof ActorSheetV2.#onConfigureToken;
            showPortraitArtwork: typeof ActorSheetV2.#onShowPortraitArtwork;
            showTokenArtwork: typeof ActorSheetV2.#onShowTokenArtwork;
        };
    };
    /**
     * Handle header control button clicks to render the Prototype Token configuration sheet.
     * @this {ActorSheetV2}
     * @param {PointerEvent} event
     */
    static #onConfigurePrototypeToken(this: ActorSheetV2, event: PointerEvent): void;
    /**
     * Handle rendering the token's configuration sheet.
     * @this {ActorSheetV2}
     */
    static #onConfigureToken(this: ActorSheetV2): void;
    /**
     * Handle header control button clicks to display actor portrait artwork.
     * @this {ActorSheetV2}
     * @param {PointerEvent} event
     */
    static #onShowPortraitArtwork(this: ActorSheetV2, event: PointerEvent): void;
    /**
     * Handle header control button clicks to display actor portrait artwork.
     * @this {ActorSheetV2}
     * @param {PointerEvent} event
     */
    static #onShowTokenArtwork(this: ActorSheetV2, event: PointerEvent): void;
    /**
     * The Actor document managed by this sheet.
     * @type {Actor}
     */
    get actor(): Actor;
    /**
     * If this sheet manages the ActorDelta of an unlinked Token, reference that Token document.
     * @type {TokenDocument|null}
     */
    get token(): TokenDocument | null;
    /**
     * Define whether a user is able to begin a dragstart workflow for a given drag selector.
     * @param {string} selector       The candidate HTML selector for dragging
     * @returns {boolean}             Can the current user drag this selector?
     * @protected
     */
    protected _canDragStart(selector: string): boolean;
    /**
     * Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector.
     * @param {string} selector       The candidate HTML selector for the drop target
     * @returns {boolean}             Can the current user drop on this selector?
     * @protected
     */
    protected _canDragDrop(selector: string): boolean;
    /**
     * An event that occurs when a drag workflow begins for a draggable item on the sheet.
     * @param {DragEvent} event       The initiating drag start event
     * @returns {Promise<void>}
     * @protected
     */
    protected _onDragStart(event: DragEvent): Promise<void>;
    /**
     * An event that occurs when a drag workflow moves over a drop target.
     * @param {DragEvent} event
     * @protected
     */
    protected _onDragOver(event: DragEvent): void;
    /**
     * An event that occurs when data is dropped into a drop target.
     * @param {DragEvent} event
     * @returns {Promise<void>}
     * @protected
     */
    protected _onDrop(event: DragEvent): Promise<void>;
    /**
     * Handle a dropped document on the ActorSheet
     * @template {Document} TDocument
     * @param {DragEvent} event         The initiating drop event
     * @param {TDocument} document       The resolved Document class
     * @returns {Promise<TDocument|null>} A Document of the same type as the dropped one in case of a successful result,
     *                                    or null in case of failure or no action being taken
     * @protected
     */
    protected _onDropDocument<TDocument extends Document>(event: DragEvent, document: TDocument): Promise<TDocument | null>;
    /**
     * Handle a dropped Active Effect on the Actor Sheet.
     * The default implementation creates an Active Effect embedded document on the Actor.
     * @param {DragEvent} event       The initiating drop event
     * @param {ActiveEffect} effect   The dropped ActiveEffect document
     * @returns {Promise<ActiveEffect|null|undefined>} A Promise resolving to a newly created ActiveEffect, if one was
     *                                                 created, or otherwise a nullish value
     * @protected
     */
    protected _onDropActiveEffect(event: DragEvent, effect: ActiveEffect): Promise<ActiveEffect | null | undefined>;
    /**
     * Handle a dropped Actor on the Actor Sheet.
     * @param {DragEvent} event     The initiating drop event
     * @param {Actor} actor         The dropped Actor document
     * @returns {Promise<Actor|null|undefined>} A Promise resolving to an Actor identical or related to the dropped Actor
     *                                          to indicate success, or a nullish value to indicate failure or no action
     *                                          being taken
     * @protected
     */
    protected _onDropActor(event: DragEvent, actor: Actor): Promise<Actor | null | undefined>;
    /**
     * Handle a dropped Item on the Actor Sheet.
     * @param {DragEvent} event     The initiating drop event
     * @param {Item} item           The dropped Item document
     * @returns {Promise<Item|null|undefined>} A Promise resolving to the dropped Item (if sorting), a newly created Item,
     *                                         or a nullish value in case of failure or no action being taken
     * @protected
     */
    protected _onDropItem(event: DragEvent, item: Item): Promise<Item | null | undefined>;
    /**
     * Handle a dropped Folder on the Actor Sheet.
     * @param {DragEvent} event     The initiating drop event
     * @param {Folder} folder       The dropped Folder document
     * @returns {Promise<Folder|null|undefined>} A Promise resolving to the dropped Folder indicate success, or a nullish
     *                                           value to indicate failure or no action being taken
     * @protected
     */
    protected _onDropFolder(event: DragEvent, folder: Folder): Promise<Folder | null | undefined>;
    /**
     * Handle a drop event for an existing embedded Item to sort that Item relative to its siblings.
     * @param {DragEvent} event     The initiating drop event
     * @param {Item} item           The dropped Item document
     * @returns {Promise<Item[]>|void}
     * @protected
     */
    protected _onSortItem(event: DragEvent, item: Item): Promise<Item[]> | void;
}
import DocumentSheetV2 from "../api/document-sheet.mjs";
import type Actor from "../../documents/actor.mjs";
import type TokenDocument from "../../documents/token.mjs";
import ActiveEffect from "../../documents/active-effect.mjs";
import Item from "../../documents/item.mjs";
import type Folder from "../../documents/folder.mjs";
