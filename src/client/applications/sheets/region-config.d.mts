/**
 * @import {ApplicationClickAction, FormFooterButton} from "../_types.mjs";
 */
/**
 * The Scene Region configuration application.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
export default class RegionConfig extends DocumentSheetV2 {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        classes: string[];
        window: {
            contentClasses: string[];
            icon: string;
        };
        position: {
            width: number;
        };
        form: {
            closeOnSubmit: boolean;
        };
        viewPermission: 3;
        actions: {
            shapeCreateFromWalls: typeof RegionConfig.#onShapeCreateFromWalls;
            shapeToggleHole: typeof RegionConfig.#onShapeToggleHole;
            shapeMoveUp: typeof RegionConfig.#onShapeMoveUp;
            shapeMoveDown: typeof RegionConfig.#onShapeMoveDown;
            shapeRemove: typeof RegionConfig.#onShapeRemove;
            behaviorCreate: typeof RegionConfig.#onBehaviorCreate;
            behaviorDelete: typeof RegionConfig.#onBehaviorDelete;
            behaviorEdit: typeof RegionConfig.#onBehaviorEdit;
            behaviorToggle: typeof RegionConfig.#onBehaviorToggle;
        };
    };
    /** @override */
    static override PARTS: {
        tabs: {
            template: string;
        };
        identity: {
            template: string;
        };
        shapes: {
            template: string;
            scrollable: string[];
        };
        behaviors: {
            template: string;
            scrollable: string[];
        };
        footer: {
            template: string;
        };
    };
    /** @override */
    static override TABS: {
        sheet: {
            tabs: {
                id: string;
                icon: string;
            }[];
            initial: string;
            labelPrefix: string;
        };
    };
    /**
     * Handle button clicks to move the shape up.
     * @param {PointerEvent} event
     * @this {RegionConfig}
     */
    static #onShapeMoveUp(this: RegionConfig, event: PointerEvent): Promise<void>;
    /**
     * Handle button clicks to move the shape down.
     * @param {PointerEvent} event
     * @this {RegionConfig}
     */
    static #onShapeMoveDown(this: RegionConfig, event: PointerEvent): Promise<void>;
    /**
     * Handle button clicks to create shapes from the controlled walls.
     * @param {PointerEvent} event
     * @this {RegionConfig}
     */
    static #onShapeCreateFromWalls(this: RegionConfig, event: PointerEvent): Promise<void>;
    /**
     * Handle button clicks to toggle the hold field of a shape.
     * @param {PointerEvent} event
     * @this {RegionConfig}
     */
    static #onShapeToggleHole(this: RegionConfig, event: PointerEvent): Promise<void>;
    /**
     * Handle button clicks to remove a shape.
     * @param {PointerEvent} event
     * @this {RegionConfig}
     */
    static #onShapeRemove(this: RegionConfig, event: PointerEvent): Promise<any>;
    static #onBehaviorCreate(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    /**
     * Handle button clicks to delete a behavior.
     * @param {PointerEvent} event
     * @this {RegionConfig}
     */
    static #onBehaviorDelete(this: RegionConfig, event: PointerEvent): Promise<void>;
    /**
     * Handle button clicks to edit a behavior.
     * @param {PointerEvent} event
     * @this {RegionConfig}
     */
    static #onBehaviorEdit(this: RegionConfig, event: PointerEvent): Promise<void>;
    /**
     * Handle button clicks to toggle a behavior.
     * @param {PointerEvent} event
     * @this {RegionConfig}
     */
    static #onBehaviorToggle(this: RegionConfig, event: PointerEvent): Promise<void>;
    /** @override */
    override _preparePartContext(partId: any, context: any): Promise<any>;
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
     * An event that occurs when a drag workflow begins.
     * @param {DragEvent} event      The initiating drag start event
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
    #private;
}
import DocumentSheetV2 from "../api/document-sheet.mjs";
