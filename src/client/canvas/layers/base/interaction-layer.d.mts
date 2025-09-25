/**
 * A subclass of CanvasLayer which provides support for user interaction with its contained objects.
 * @category Canvas
 */
export default class InteractionLayer extends CanvasLayer {
    /**
     * Customize behaviors of this CanvasLayer by modifying some behaviors at a class level.
     * @type {{name: string, zIndex: number}}
     */
    static get layerOptions(): {
        name: string;
        zIndex: number;
    };
    /**
     * Prepare data used by SceneControls to register tools used by this layer.
     * @returns {SceneControl|null}
     */
    static prepareSceneControls(): SceneControl | null;
    /**
     * Is this layer currently active
     * @type {boolean}
     */
    get active(): boolean;
    /** @override */
    override eventMode: string;
    /**
     * Activate the InteractionLayer, deactivating other layers and marking this layer's children as interactive.
     * @param {object} [options]      Options which configure layer activation
     * @param {string} [options.tool]   A specific tool in the control palette to set as active
     * @returns {InteractionLayer}    The layer instance, now activated
     */
    activate({ tool }?: {
        tool?: string | undefined;
    }): InteractionLayer;
    zIndex: number | undefined;
    /**
     * The inner _activate method which may be defined by each InteractionLayer subclass.
     * @protected
     */
    protected _activate(): void;
    /**
     * Deactivate the InteractionLayer, removing interactivity from its children.
     * @returns {InteractionLayer}    The layer instance, now inactive
     */
    deactivate(): InteractionLayer;
    /**
     * The inner _deactivate method which may be defined by each InteractionLayer subclass.
     * @protected
     */
    protected _deactivate(): void;
    /** @override */
    override _draw(options: any): Promise<void>;
    hitArea: any;
    /**
     * Get the zIndex that should be used for ordering this layer vertically relative to others in the same Container.
     * @returns {number}
     */
    getZIndex(): number;
    /**
     * Highlight the objects of this layer.
     * @param {boolean} active    Should the objects of this layer be highlighted?
     * @protected
     */
    protected _highlightObjects(active: boolean): void;
    /**
     * Handle left mouse-click events which originate from the Canvas stage.
     * @param {PIXI.FederatedEvent} event      The PIXI InteractionEvent which wraps a PointerEvent
     * @protected
     */
    protected _onClickLeft(event: PIXI.FederatedEvent): void;
    /**
     * Handle double left-click events which originate from the Canvas stage.
     * @param {PIXI.FederatedEvent} event      The PIXI InteractionEvent which wraps a PointerEvent
     * @protected
     */
    protected _onClickLeft2(event: PIXI.FederatedEvent): void;
    /**
     * Does the User have permission to left-click drag on the Canvas?
     * @param {User} user                    The User performing the action.
     * @param {PIXI.FederatedEvent} event    The event object.
     * @returns {boolean}
     * @protected
     */
    protected _canDragLeftStart(user: User, event: PIXI.FederatedEvent): boolean;
    /**
     * Start a left-click drag workflow originating from the Canvas stage.
     * @param {PIXI.FederatedEvent} event      The PIXI InteractionEvent which wraps a PointerEvent
     * @protected
     */
    protected _onDragLeftStart(event: PIXI.FederatedEvent): void;
    /**
     * Continue a left-click drag workflow originating from the Canvas stage.
     * @param {PIXI.FederatedEvent} event      The PIXI InteractionEvent which wraps a PointerEvent
     * @protected
     */
    protected _onDragLeftMove(event: PIXI.FederatedEvent): void;
    /**
     * Conclude a left-click drag workflow originating from the Canvas stage.
     * @param {PIXI.FederatedEvent} event      The PIXI InteractionEvent which wraps a PointerEvent
     * @protected
     */
    protected _onDragLeftDrop(event: PIXI.FederatedEvent): void;
    /**
     * Cancel a left-click drag workflow originating from the Canvas stage.
     * @param {PIXI.FederatedEvent} event      The PIXI InteractionEvent which wraps a PointerEvent
     * @protected
     */
    protected _onDragLeftCancel(event: PIXI.FederatedEvent): void;
    /**
     * Handle right mouse-click events which originate from the Canvas stage.
     * @param {PIXI.FederatedEvent} event      The PIXI InteractionEvent which wraps a PointerEvent
     * @protected
     */
    protected _onClickRight(event: PIXI.FederatedEvent): void;
    /**
     * Handle double right mouse-click events which originate from the Canvas stage.
     * @param {PIXI.FederatedEvent} event      The PIXI InteractionEvent which wraps a PointerEvent
     * @protected
     */
    protected _onClickRight2(event: PIXI.FederatedEvent): void;
    /**
     * Handle mouse-wheel events which occur for this active layer.
     * @param {WheelEvent} event                The WheelEvent initiated on the document
     * @protected
     */
    protected _onMouseWheel(event: WheelEvent): void;
    /**
     * Handle a Cycle View keypress while this layer is active.
     * @param {KeyboardEvent} event             The cycle-view key press event
     * @returns {boolean}                       Was the event handled?
     * @protected
     */
    protected _onCycleViewKey(event: KeyboardEvent): boolean;
    /**
     * Handle a Delete keypress while this layer is active.
     * @param {KeyboardEvent} event             The delete key press event
     * @returns {boolean}                       Was the event handled?
     * @protected
     */
    protected _onDeleteKey(event: KeyboardEvent): boolean;
    /**
     * Handle a Select All keypress while this layer is active.
     * @param {KeyboardEvent} event             The select-all key press event
     * @returns {boolean}                       Was the event handled?
     * @protected
     */
    protected _onSelectAllKey(event: KeyboardEvent): boolean;
    /**
     * Handle a Dismiss keypress while this layer is active.
     * @param {KeyboardEvent} event             The dismiss key press event
     * @returns {boolean}                       Was the event handled?
     * @protected
     */
    protected _onDismissKey(event: KeyboardEvent): boolean;
    /**
     * Handle a Undo keypress while this layer is active.
     * @param {KeyboardEvent} event             The undo key press event
     * @returns {boolean}                       Was the event handled?
     * @protected
     */
    protected _onUndoKey(event: KeyboardEvent): boolean;
    /**
     * Handle a Cut keypress while this layer is active.
     * @param {KeyboardEvent} event             The cut key press event
     * @returns {boolean}                       Was the event handled?
     * @protected
     */
    protected _onCutKey(event: KeyboardEvent): boolean;
    /**
     * Handle a Copy keypress while this layer is active.
     * @param {KeyboardEvent} event             The copy key press event
     * @returns {boolean}                       Was the event handled?
     * @protected
     */
    protected _onCopyKey(event: KeyboardEvent): boolean;
    /**
     * Handle a Paste keypress while this layer is active.
     * @param {KeyboardEvent} event             The paste key press event
     * @returns {boolean}                       Was the event handled?
     * @protected
     */
    protected _onPasteKey(event: KeyboardEvent): boolean;
    #private;
}
import CanvasLayer from "./canvas-layer.mjs";
