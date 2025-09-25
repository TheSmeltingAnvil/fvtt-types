/**
 * @import Item from "@client/documents/item.mjs";
 */
/**
 * The World Item directory listing.
 * @extends {DocumentDirectory<Item>}
 */
export default class ItemDirectory extends DocumentDirectory<Item> {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        collection: string;
    };
    constructor(options: any);
    /** @inheritDoc */
    _getEntryContextOptions(): {
        name: string;
        icon: string;
        condition: (li: any) => boolean;
        callback: (li: any) => void;
    }[];
}
import type Item from "@client/documents/item.mjs";
import DocumentDirectory from "../document-directory.mjs";
