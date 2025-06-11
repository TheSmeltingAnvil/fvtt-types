import Actor from "client/documents/actor.mjs";
import DocumentSheetV2, { DocumentSheetConfiguration } from "../api/document-sheet.mjs";

/** A base class for providing Actor Sheet behavior using ApplicationV2. */
export default abstract class ActorSheetV2<TDocument extends Actor> extends DocumentSheetV2<
    DocumentSheetConfiguration<TDocument>
> {
    static override DEFAULT_OPTIONS: Partial<DocumentSheetConfiguration>;

    /** The Actor document managed by this sheet. */
    get actor(): TDocument;

    /**
     * If this sheet manages the ActorDelta of an unlinked Token, reference that Token document.
     */
    get token(): this['document']['token'];

    // The class includes a number of protected static functions for its actions
    // eslint-disable-next-line no-unused-private-class-members
    static #protected: unknown;
}
