/**
 * @import {ApplicationClickAction} from "@client/applications/_types.mjs"
 * @import {KeybindingAction, KeybindingActionBinding, KeybindingActionConfig} from "@client/_types.mjs"
 */
/**
 * View and edit keybinding and (readonly) mouse actions.
 */
export default class ControlsConfig extends CategoryBrowser {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        id: string;
        window: {
            title: string;
            icon: string;
            resizable: boolean;
        };
        position: {
            width: number;
            height: number;
        };
        actions: {
            addBinding: typeof ControlsConfig.#onAddBinding;
            cancelEdit: typeof ControlsConfig.#onCancelEdit;
            deleteBinding: typeof ControlsConfig.#onDeleteBinding;
            editBinding: typeof ControlsConfig.#onEditBinding;
            resetDefaults: typeof ControlsConfig.#onResetDefaults;
            saveBinding: typeof ControlsConfig.#onSaveBinding;
        };
        subtemplates: {
            category: string;
            sidebarFooter: string;
        };
    };
    /** @inheritDoc */
    static PARTS: {
        bindingInput: {
            template: string;
        };
        sidebar: {
            template: string;
            scrollable: string[];
        };
        main: {
            template: string;
        };
    };
    /**
     * Faux "pointer bindings" for displaying as a readonly category
     * @type {readonly [id: string, name: string, parts: string[], gmOnly?: boolean][]}
     */
    static POINTER_CONTROLS: readonly [id: string, name: string, parts: string[], gmOnly?: boolean][];
    /**
     * A reference record of possible categories
     * @type {Record<string, {id: string, label: string}}
     */
    static #ENTRY_CATEGORIES: Record<string, {
        id: string;
        label: string;
    }>;
    /**
     * Transform an action binding into a human-readable string representation.
     * @param {KeybindingActionBinding} binding
     * @returns {string}
     */
    static humanizeBinding(binding: KeybindingActionBinding): string;
    static #onAddBinding(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onEditBinding(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onSaveBinding(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onCancelEdit(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onDeleteBinding(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onResetDefaults(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    /** @inheritDoc */
    _configureRenderOptions(options: any): void;
    /**
     * @returns {Record<string, {id: string, label: string, entries: object[]}>}
     * @protected
     * @override
     */
    protected override _prepareCategoryData(): Record<string, {
        id: string;
        label: string;
        entries: object[];
    }>;
    /** @inheritDoc */
    _sortCategories(a: any, b: any): number;
    /** @inheritDoc */
    _onFirstRender(context: any, options: any): Promise<void>;
    #private;
}
import CategoryBrowser from "@client/applications/api/category-browser.mjs";
import type { KeybindingActionBinding } from "@client/_types.mjs";
