/**
 * The client-side Tile document which extends the common BaseTile document model.
 * @extends BaseTile
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.Scene}: The Scene document type which contains Tile documents
 * @see {@link foundry.applications.sheets.TileConfig}: The Tile configuration application
 */
export default class TileDocument extends BaseTile {
    /** @inheritDoc */
    prepareDerivedData(): void;
    x: any;
    y: any;
}
import BaseTile from "@common/documents/tile.mjs";
