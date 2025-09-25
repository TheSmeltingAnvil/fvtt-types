/**
 * @import Actor from "@client/documents/actor.mjs";
 */
/**
 * The World Actor directory listing.
 * @extends {DocumentDirectory<Actor>}
 */
export default class ActorDirectory extends DocumentDirectory<Actor> {
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
    /** @override */
    override _canDragStart(selector: any): boolean;
    /** @inheritDoc */
    _onDragStart(event: any): false | undefined;
}
import type Actor from "@client/documents/actor.mjs";
import DocumentDirectory from "../document-directory.mjs";
