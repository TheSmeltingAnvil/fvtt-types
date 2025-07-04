import { DocumentSheetConfiguration } from "foundry/DocumentSheet.js"
import DocumentSheetV2 from "../api/DocumentSheetV2.js"

/** A base class for providing Actor Sheet behavior using ApplicationV2. */
export default abstract class ActorSheetV2<TDocument extends Actor = Actor> extends DocumentSheetV2<
  DocumentSheetConfiguration<TDocument>
> {
  static override DEFAULT_OPTIONS: Partial<DocumentSheetConfiguration>

  /** The Actor document managed by this sheet. */
  get actor(): TDocument

  /**
   * If this sheet manages the ActorDelta of an unlinked Token, reference that Token document.
   */
  get token(): this["document"]["token"]

  // The class includes a number of protected static functions for its actions

  static #protected: unknown
}
