/**
 * @import {PlaylistData} from "./_types.mjs";
 */
/**
 * The Playlist Document.
 * Defines the DataSchema and common behaviors for a Playlist which are shared between both client and server.
 * @extends {Document<PlaylistData>}
 * @mixes PlaylistData
 * @category Documents
 */
export default class BasePlaylist extends Document<PlaylistData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        description: fields.StringField;
        sounds: fields.EmbeddedCollectionField;
        channel: fields.StringField;
        mode: fields.NumberField;
        playing: fields.BooleanField;
        fade: fields.NumberField;
        folder: fields.ForeignDocumentField;
        sorting: fields.StringField;
        seed: fields.NumberField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    /** @inheritDoc */
    static migrateData(source: any): object;
    /** @inheritDoc */
    static shimData(source: any, options: any): object;
    constructor(data?: Partial<PlaylistData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /** @inheritDoc */
    _initialize(options: any): void;
}
import type { PlaylistData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
