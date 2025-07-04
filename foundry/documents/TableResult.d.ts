import * as abstract from "foundry/documents/abstract/_module.js"

import { BaseTableResult, BaseUser } from "./_module.js"

declare const ClientBaseTableResult: new <TParent extends RollTable | null>(
  ...args: any
) => BaseTableResult<TParent> & abstract.ClientDocument<TParent>

/**
 * The client-side TableResult document which extends the common BaseTableResult document model.
 *
 * @see {@link RollTable} The RollTable document type which contains TableResult documents
 */
export default class TableResult<
  TParent extends RollTable | null = RollTable | null,
> extends ClientBaseTableResult<TParent> {
  /**
   * A path reference to the icon image used to represent this result
   */
  get icon(): string

  override prepareBaseData(): void

  /**
   * Prepare a string representation for this result.
   * @returns The enriched text to display
   */
  getHTML(): Promise<string>

  /**
   * Create a content-link anchor from this Result's referenced Document.
   */
  documentToAnchor(): HTMLAnchorElement | null

  protected override _preUpdate(
    changes: Record<string, unknown>,
    options: abstract.DatabaseUpdateCallbackOptions,
    user: BaseUser,
  ): Promise<boolean | void>
}
