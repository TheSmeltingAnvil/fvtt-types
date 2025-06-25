import { DocumentSheet } from "foundry/appv1/api/_module.js"

/**
 * @deprecated since v13
 */
export default class ItemSheet<
  TItem extends Item = Item,
  _TOptions extends foundry.DocumentSheetV1Options = foundry.DocumentSheetV1Options,
> extends DocumentSheet<TItem> {}
