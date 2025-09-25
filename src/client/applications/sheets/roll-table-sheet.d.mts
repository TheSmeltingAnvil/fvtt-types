/**
 * @import {ApplicationClickAction} from "../_types.mjs";
 * @import RollTable from "@client/documents/roll-table.mjs";
 */
/**
 * The Application responsible for editing, displaying, and using a single {@link RollTable} document.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
export default class RollTableSheet extends DocumentSheetV2 {
    /**
     * The operational mode in which a newly created instance of this sheet starts
     * @type {"edit"|"view"}
     */
    static #DEFAULT_MODE: "edit" | "view";
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        classes: string[];
        window: {
            contentClasses: string[];
            icon: string;
            resizable: boolean;
        };
        position: {
            width: number;
        };
        form: {
            closeOnSubmit: boolean;
        };
        actions: {
            normalizeResults: typeof RollTableSheet.#onNormalizeResults;
            createResult: typeof RollTableSheet.#onCreateResult;
            openResultSheet: typeof RollTableSheet.#onOpenResultSheet;
            deleteResult: typeof RollTableSheet.#onDeleteResult;
            drawSpecificResult: typeof RollTableSheet.#onDrawSpecificResult;
            changeMode: typeof RollTableSheet.#onChangeMode;
            lockResult: typeof RollTableSheet.#onLockResult;
            drawResult: typeof RollTableSheet.#onDrawResult;
            resetResults: typeof RollTableSheet.#onResetResults;
        };
    };
    /** @override */
    static override PARTS: {
        sheet: {
            template: string;
            templates: string[];
            scrollable: string[];
            root: boolean;
        };
        header: {
            template: string;
        };
        tabs: {
            template: string;
        };
        results: {
            template: string;
            templates: string[];
            scrollable: string[];
        };
        summary: {
            template: string;
        };
        footer: {
            template: string;
        };
    };
    /**
     * Parts for each view
     */
    static MODE_PARTS: {
        edit: string[];
        view: string[];
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
    static #onChangeMode(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onDrawResult(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onDrawSpecificResult(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onLockResult(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onResetResults(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onNormalizeResults(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onCreateResult(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onOpenResultSheet(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onDeleteResult(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    /**
     * Change the operational mode of this sheet. Changing this value will also change the mode in which subsequent
     * RollTableSheet instances first render.
     * @param {"edit"|"view"} value
     */
    set mode(value: "edit" | "view");
    /**
     * The operational mode of this sheet
     * @type {"edit"|"view"}
     */
    get mode(): "edit" | "view";
    /**
     * Is the sheet in edit mode?
     * @type {boolean}
     */
    get isEditMode(): boolean;
    /** @override */
    override _configureRenderParts(options: any): any;
    /** @inheritDoc */
    _prepareTabs(group: any): Record<string, foundry.applications.types.ApplicationTab> | {
        tabs: object;
    };
    /** @inheritDoc */
    _preparePartContext(partId: any, context: any, options: any): Promise<any>;
    /**
     * Prepare sheet data for a single TableResult.
     * @param {TableResult} result    The result from which to prepare
     * @returns {Promise<object>}     The sheet data for this result
     * @protected
     */
    protected _prepareResult(result: TableResult): Promise<object>;
    /**
     * Compare a pair of results for sorted display in this sheet.
     * @param {object} resultA Sheet data for a result
     * @param {object} resultB Sheet data for a different result
     * @returns {number} A comparator return value expected by `Array#sort`
     * @protected
     */
    protected _sortResults(resultA: object, resultB: object): number;
    /**
     * Create a Table Result from initial data and with reasonable defaults.
     * @param {DeepPartial<TableResultData>} initialData
     * @protected
     */
    protected _createResult(initialData?: DeepPartial<TableResultData>): Promise<void>;
    /** @inheritDoc */
    _prepareSubmitData(event: any, form: any, formData: any, updateData: any): object;
    /** @inheritDoc */
    submit(options: any): Promise<any>;
    /** @inheritDoc */
    _preRender(context: any, options: any): Promise<void>;
    /** @override */
    override _onRevealSecret(event: any): void;
    /**
     * Create a Compendium or Document result from a dropped document.
     * @param {DragEvent} event The triggering drop event
     * @protected
     */
    protected _onDrop(event: DragEvent): Promise<void>;
    /**
     * Display a roulette style animation when a Roll Table result is drawn from the sheet.
     * @param {TableResult[]} results An Array of drawn table results to highlight
     * @returns {Promise<void>} A Promise that resolves once the animation is complete
     * @protected
     */
    protected _animateRoll(results: TableResult[]): Promise<void>;
    /**
     * Animate a "roulette" through the table until arriving at the final loop and a drawn result
     * @param {HTMLElement} resultsTable The list element being iterated
     * @param {Set<string>} drawnIds     The result IDs which have already been drawn
     * @param {number} nLoops            The number of times to loop through the animation
     * @param {number} animTime          The desired animation time in milliseconds
     * @param {number} animOffset        The desired pixel offset of the result within the list
     * @returns {Promise<void>} A Promise that resolves once the animation is complete
     * @protected
     */
    protected _animateRoulette(resultsTable: HTMLElement, drawnIds: Set<string>, nLoops: number, animTime: number, animOffset: number): Promise<void>;
    /**
     * Display a flashing animation on the selected result to emphasize the draw
     * @param {HTMLElement} item The HTML li item of the winning result
     * @returns {Promise<void>} A Promise that resolves once the animation is complete
     * @protected
     */
    protected _flashResult(item: HTMLElement): Promise<void>;
    #private;
}
import { DocumentSheetV2 } from "../api/_module.mjs";
