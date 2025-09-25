/**
 * @import {DrawingData} from "@common/documents/_types.mjs";
 */
/**
 * The client-side Drawing document which extends the common BaseDrawing model.
 *
 * @extends BaseDrawing
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.Scene}: The Scene document type which contains Drawing embedded documents
 * @see {@link foundry.applications.sheets.DrawingConfig}: The Drawing configuration application
 */
export default class DrawingDocument extends BaseDrawing {
    /**
     * Fields included in the drawing defaults setting
     * @type {(keyof DrawingData)[]}
     */
    static defaultDrawingFields: (keyof DrawingData)[];
    /**
     * Is the current User the author of this drawing?
     * @type {boolean}
     */
    get isAuthor(): boolean;
}
import BaseDrawing from "@common/documents/drawing.mjs";
import type { DrawingData } from "@common/documents/_types.mjs";
