/**
 * @import RollTable from "@client/documents/roll-table.mjs";
 */
/**
 * The World RollTable directory listing.
 * @extends {DocumentDirectory<RollTable>}
 */
export default class RollTableDirectory extends DocumentDirectory<RollTable> {
    /** @override */
    static override DEFAULT_OPTIONS: {
        collection: string;
    };
    constructor(options: any);
    /** @inheritDoc */
    _getEntryContextOptions(): (import("../../ux/context-menu.mjs").ContextMenuEntry | {
        name: string;
        icon: string;
        callback: (li: any) => void;
    })[];
}
import type RollTable from "@client/documents/roll-table.mjs";
import DocumentDirectory from "../document-directory.mjs";
