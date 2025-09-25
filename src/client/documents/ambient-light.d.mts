/**
 * The client-side AmbientLight document which extends the common BaseAmbientLight document model.
 * @extends BaseAmbientLight
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.Scene}: The Scene document type which contains AmbientLight documents
 * @see {@link foundry.applications.sheets.AmbientLightConfig}: The AmbientLight configuration
 *   application
 */
export default class AmbientLightDocument extends BaseAmbientLight {
    /** @inheritDoc */
    _onUpdate(changed: any, options: any, userId: any): void;
    /**
     * Is this ambient light source global in nature?
     * @type {boolean}
     */
    get isGlobal(): boolean;
}
import BaseAmbientLight from "@common/documents/ambient-light.mjs";
