import * as api from "foundry/applications/api/_module.js"

/** A base class for providing Item Sheet behavior using ApplicationV2. */
export default abstract class ItemSheetV2<TDocument extends Item> extends api.DocumentSheetV2<
  foundry.DocumentSheetConfiguration<TDocument>
> {
  static override DEFAULT_OPTIONS: Partial<foundry.DocumentSheetConfiguration>

  /** The Item document managed by this sheet. */
  get item(): TDocument

  /** The Actor instance which owns this Item, if any. */
  get actor(): TDocument["actor"]
}
