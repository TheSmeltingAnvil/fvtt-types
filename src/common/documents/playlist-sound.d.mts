/**
 * @import {PlaylistSoundData} from "./_types.mjs";
 */
/**
 * The PlaylistSound Document.
 * Defines the DataSchema and common behaviors for a PlaylistSound which are shared between both client and server.
 * @extends {Document<PlaylistSoundData>}
 * @mixes PlaylistSoundData
 * @category Documents
 */
export default class BasePlaylistSound extends Document<PlaylistSoundData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        description: fields.StringField;
        path: fields.FilePathField;
        channel: fields.StringField;
        playing: fields.BooleanField;
        pausedTime: fields.NumberField;
        repeat: fields.BooleanField;
        volume: fields.AlphaField;
        fade: fields.NumberField;
        sort: fields.IntegerSortField;
        flags: fields.DocumentFlagsField;
    };
    constructor(data?: Partial<PlaylistSoundData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
}
import type { PlaylistSoundData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
