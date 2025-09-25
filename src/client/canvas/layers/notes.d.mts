/**
 * @import Note from "../placeables/note.mjs";
 */
/**
 * The Notes Layer which contains Note canvas objects.
 * @category Canvas
 */
export default class NotesLayer extends PlaceablesLayer {
    /** @inheritdoc */
    static get layerOptions(): object;
    /**
     * The named core setting which tracks the toggled visibility state of map notes
     * @type {string}
     */
    static TOGGLE_SETTING: string;
    /**
     * Register game settings used by the NotesLayer
     */
    static registerSettings(): void;
    /** @override */
    static override prepareSceneControls(): {
        name: string;
        order: number;
        title: string;
        layer: string;
        icon: string;
        onChange: (event: any, active: any) => void;
        onToolChange: () => any;
        tools: {
            select: {
                name: string;
                order: number;
                title: string;
                icon: string;
            };
            journal: {
                name: string;
                order: number;
                title: string;
                visible: boolean;
                icon: string;
            };
            toggle: {
                name: string;
                order: number;
                title: string;
                icon: string;
                toggle: boolean;
                active: any;
                onChange: (event: any, toggled: any) => Promise<any>;
            };
            clear: {
                name: string;
                order: number;
                title: string;
                icon: string;
                visible: boolean;
                onChange: () => any;
                button: boolean;
            };
        };
        activeTool: string;
    };
    /** @override */
    override interactiveChildren: any;
    /** @inheritDoc */
    _getCopyableObjects(options: any): foundry.canvas.placeables.PlaceableObject[];
    /**
     * Pan to a given note on the layer.
     * @param {Note} note                      The note to pan to.
     * @param {object} [options]               Options which modify the pan operation.
     * @param {number} [options.scale=1.5]     The resulting zoom level.
     * @param {number} [options.duration=250]  The speed of the pan animation in milliseconds.
     * @returns {Promise<void>}                A Promise which resolves once the pan animation has concluded.
     */
    panToNote(note: Note, { scale, duration }?: {
        scale?: number | undefined;
        duration?: number | undefined;
    }): Promise<void>;
    /** @inheritdoc */
    _onClickLeft(event: any): Promise<void>;
    /**
     * Handle JournalEntry document drop data
     * @param {DragEvent} event   The drag drop event
     * @param {object} data       The dropped data transfer data
     * @protected
     */
    protected _onDropData(event: DragEvent, data: object): Promise<false | foundry.canvas.placeables.PlaceableObject>;
}
import PlaceablesLayer from "./base/placeables-layer.mjs";
import type Note from "../placeables/note.mjs";
