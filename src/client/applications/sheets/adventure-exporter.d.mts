/**
 * @import {ApplicationClickAction} from "../_types.mjs";
 */
/**
 * @typedef AdventureContentTreeNode
 * @property {string} id        An alias for folder.id
 * @property {string} name      An alias for folder.name
 * @property {Folder} folder    The Folder at this node level
 * @property {string} state     The modification state of the Folder
 * @property {AdventureContentTreeNode[]} children  An array of child nodes
 * @property {{id: string, name: string, document: ClientDocument, state: string}[]} documents  An array of documents
 */
/**
 * @typedef {AdventureContentTreeNode} AdventureContentTreeRoot
 * @property {null} id                The folder ID is null at the root level
 * @property {string} documentName    The Document name contained in this tree
 * @property {string} collection      The Document collection name of this tree
 * @property {string} name            The name displayed at the root level of the tree
 * @property {string} icon            The icon displayed at the root level of the tree
 * @property {string} collapseIcon    The icon which represents the current collapsed state of the tree
 * @property {boolean} cleared        Has the section been tentatively cleared of its contents?
 * @property {string} cssClass        CSS classes which describe the display of the tree
 * @property {number} documentCount   The number of documents which are present in the tree
 */
/**
 * An interface for packaging Adventure content and loading it to a compendium pack.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
export default class AdventureExporter extends DocumentSheetV2 {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        id: string;
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
        actions: {
            clearSection: typeof AdventureExporter.#onClearSection;
            collapseSection: typeof AdventureExporter.#onCollapseSection;
            removeContent: typeof AdventureExporter.#onRemoveContent;
        };
        canCreate: boolean;
    };
    /** @override */
    // @ts-expect-error -- IGNORE --
    static override PARTS: {
        tabs: {
            template: string;
        };
        summary: {
            template: string;
            scrollable: string[];
        };
        contents: {
            template: string;
            scrollable: string[];
        };
        footer: {
            template: string;
        };
    };
    static TABS: {
        sheet: {
            tabs: {
                id: string;
                icon: string;
            }[];
            initial: string;
            labelPrefix: string;
        };
    };
    static #onClearSection(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onCollapseSection(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onRemoveContent(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    constructor(options?: object);
    /**
     * The prepared document tree which is displayed in the form.
     * @type {Record<string, AdventureContentTreeRoot>}
     */
    contentTree: Record<string, AdventureContentTreeRoot>;
    /** @inheritDoc */
    _preparePartContext(partId: any, context: any, options: any): Promise<any>;
    /** @override */
    override _processSubmitData(event: any, form: any, submitData: any, options?: object): Promise<Readonly<{
        id: number;
        type: string;
        timestamp: number;
        message: string;
        error?: Error | undefined;
        permanent: boolean;
        console: boolean;
        active: boolean;
        progress: boolean;
        pct: number;
        element?: HTMLLIElement | undefined;
        remove?: (() => void) | undefined;
        update?: ((pct: number) => void) | undefined;
    }> | undefined>;
    /**
     * Stage a document for addition to the Adventure.
     * This adds the Document locally, the change is not yet submitted to the database.
     * @param {Folder|ClientDocument} document    Some document to be added to the Adventure.
     */
    addContent(document: Folder | ClientDocument): void;
    /**
     * Remove or restore a single Document from the Adventure.
     * @param {ClientDocument} document The Document being removed from the Adventure.
     */
    removeContent(document: ClientDocument): void;
    #private;
}
export type AdventureContentTreeNode = {
    /**
     * An alias for folder.id
     */
    id: string;
    /**
     * An alias for folder.name
     */
    name: string;
    /**
     * The Folder at this node level
     */
    folder: Folder;
    /**
     * The modification state of the Folder
     */
    state: string;
    /**
     * An array of child nodes
     */
    children: AdventureContentTreeNode[];
    /**
     * An array of documents
     */
    documents: {
        id: string;
        name: string;
        document: ClientDocument;
        state: string;
    }[];
};
export type AdventureContentTreeRoot = AdventureContentTreeNode;
import { DocumentSheetV2 } from "../api/_module.mjs";
