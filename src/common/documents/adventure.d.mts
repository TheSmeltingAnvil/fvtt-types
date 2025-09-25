/**
 * @import {AdventureData} from "./_types.mjs";
 */
/**
 * The Adventure Document.
 * Defines the DataSchema and common behaviors for an Adventure which are shared between both client and server.
 * @extends {Document<AdventureData>}
 * @mixes AdventureData
 * @category Documents
 */
export default class BaseAdventure extends Document<AdventureData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        img: fields.FilePathField;
        caption: fields.HTMLField;
        description: fields.HTMLField;
        actors: fields.SetField;
        combats: fields.SetField;
        items: fields.SetField;
        journal: fields.SetField;
        scenes: fields.SetField;
        tables: fields.SetField;
        macros: fields.SetField;
        cards: fields.SetField;
        playlists: fields.SetField;
        folders: fields.SetField;
        folder: fields.ForeignDocumentField;
        sort: fields.IntegerSortField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * An array of the fields which provide imported content from the Adventure.
     * @type {Record<string, typeof Document>}
     */
    static get contentFields(): Record<string, typeof Document>;
    constructor(data?: Partial<AdventureData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /**
     * Provide a thumbnail image path used to represent the Adventure document.
     * @type {string}
     */
    get thumbnail(): string;
}
import type { AdventureData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
