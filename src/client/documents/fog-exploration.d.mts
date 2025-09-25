/**
 * The client-side FogExploration document which extends the common BaseFogExploration model.
 * @extends BaseFogExploration
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.collections.FogExplorations}: The world-level collection of
 *   FogExploration documents
 */
export default class FogExploration extends BaseFogExploration {
    /**
     * Obtain the fog of war exploration progress for a specific Scene and User.
     * @param {object} [query]        Parameters for which FogExploration document is retrieved
     * @param {string} [query.scene]    A certain Scene ID
     * @param {string} [query.user]     A certain User ID
     * @param {object} [options={}]   Additional options passed to DatabaseBackend#get
     * @returns {Promise<FogExploration|null>}
     */
    static load({ scene, user }?: {
        scene?: string | undefined;
        user?: string | undefined;
    }, options?: object): Promise<FogExploration | null>;
    /** @inheritDoc */
    static get(...args: any[]): foundry.abstract.Document<object, foundry.abstract.types.DocumentConstructionContext> | Promise<FogExploration | null> | null;
    /**
     * Transform the explored base64 data into a PIXI.Texture object
     * @returns {PIXI.Texture|null}
     */
    getTexture(): PIXI.Texture | null;
    /** @inheritDoc */
    _onCreate(data: any, options: any, userId: any): void;
    /** @inheritDoc */
    _onUpdate(changed: any, options: any, userId: any): void;
    /** @inheritDoc */
    _onDelete(options: any, userId: any): void;
}
import BaseFogExploration from "@common/documents/fog-exploration.mjs";
