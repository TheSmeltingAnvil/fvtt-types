import * as abstract from "foundry/documents/abstract/_module.js"
import * as documents from "foundry/documents/_module.js"

/**
 * The client-side FogExploration document which extends the common BaseFogExploration model.
 */
export default class FogExploration extends abstract.ClientDocumentMixin(documents.BaseFogExploration) {
  /**
   * Obtain the fog of war exploration progress for a specific Scene and User.
   * @param query       Parameters for which FogExploration document is retrieved
   * @param query.scene A certain Scene ID
   * @param query.user  A certain User ID
   * @param options Additional options passed to DatabaseBackend#get
   */
  static load(query?: { scene?: string; user?: string }, options?: object): Promise<FogExploration | null>

  /**
   * Transform the explored base64 data into a PIXI.Texture object
   */
  getTexture(): PIXI.Texture | null

  protected override _onCreate(
    data: this["_source"],
    options: abstract.DatabaseCreateCallbackOptions,
    userId: string,
  ): void

  protected override _onUpdate(
    data: DeepPartial<this["_source"]>,
    options: abstract.DatabaseUpdateCallbackOptions,
    userId: string,
  ): void

  protected override _onDelete(options: abstract.DatabaseDeleteCallbackOptions, userId: string): void
}
