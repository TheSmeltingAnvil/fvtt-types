/**
 * @import {JournalEntryPageHeading} from "@client/_types.mjs";
 * @import Note from "@client/canvas/placeables/note.mjs";
 */
/**
 * The client-side JournalEntryPage document which extends the common BaseJournalEntryPage document model.
 * @extends BaseJournalEntryPage
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.JournalEntry}: The JournalEntry document type which contains
 *   JournalEntryPage embedded documents.
 */
export default class JournalEntryPage extends BaseJournalEntryPage {
  /**
   * Convert a heading into slug suitable for use as an identifier.
   * @param {HTMLHeadingElement|string} heading  The heading element or some text content.
   * @returns {string}
   */
  static slugifyHeading(heading: HTMLHeadingElement | string): string
  /**
   * Build a table of contents for the given HTML content.
   * @param {HTMLElement|HTMLElement[]} html         The HTML content to generate a ToC outline for.
   * @param {object} [options]                       Additional options to configure ToC generation.
   * @param {boolean} [options.includeElement=true]  Include references to the heading DOM elements in the returned ToC.
   * @returns {Record<string, JournalEntryPageHeading>}
   */
  static buildTOC(
    html: HTMLElement | HTMLElement[],
    {
      includeElement,
    }?: {
      includeElement?: boolean | undefined
    },
  ): Record<string, JournalEntryPageHeading>
  /**
   * Flatten the tree structure into a single object with each node's slug as the key.
   * @param {JournalEntryPageHeading[]} nodes  The root ToC nodes.
   * @returns {Record<string, JournalEntryPageHeading>}
   * @protected
   */
  protected static _flattenTOC(nodes: JournalEntryPageHeading[]): Record<string, JournalEntryPageHeading>
  /**
   * Construct a table of contents node from a heading element.
   * @param {HTMLHeadingElement} heading             The heading element.
   * @param {object} [options]                       Additional options to configure the returned node.
   * @param {boolean} [options.includeElement=true]  Whether to include the DOM element in the returned ToC node.
   * @returns {JournalEntryPageHeading}
   * @protected
   */
  protected static _makeHeadingNode(
    heading: HTMLHeadingElement,
    {
      includeElement,
    }?: {
      includeElement?: boolean | undefined
    },
  ): JournalEntryPageHeading
  /**
   * The cached table of contents for this JournalEntryPage.
   * @type {Record<string, JournalEntryPageHeading>}
   * @protected
   */
  protected _toc: Record<string, JournalEntryPageHeading>
  /**
   * The table of contents for this JournalEntryPage.
   * @type {Record<string, JournalEntryPageHeading>}
   */
  get toc(): Record<string, JournalEntryPageHeading>
  /** @inheritDoc */
  get permission(): CONST.DocumentOwnershipNumber
  /**
   * Return a reference to the Note instance for this Journal Entry Page in the current Scene, if any.
   * If multiple notes are placed for this Journal Entry, only the first will be returned.
   * @type {Note|null}
   */
  get sceneNote(): Note | null
  /** @inheritDoc */
  _createDocumentLink(eventData: any, { relativeTo, label }?: object): any
  /** @inheritDoc */
  _onClickDocumentLink(event: any): any
  /** @inheritDoc */
  _onUpdate(changed: any, options: any, userId: any): void
  /** @inheritDoc */
  _buildEmbedHTML(config: any, options?: object): Promise<any>
  /** @inheritDoc */
  _createFigureEmbed(content: any, config: any, options: any): Promise<any>
  /**
   * Embed text page content.
   * @param {DocumentHTMLEmbedConfig & EnrichmentOptions} config  Configuration for embedding behavior. This can include
   *                                                              enrichment options to override those passed as part of
   *                                                              the root enrichment process.
   * @param {EnrichmentOptions} [options]     The original enrichment options to propagate to the embedded text page's
   *                                          enrichment.
   * @returns {Promise<HTMLElement|HTMLCollection|null>}
   * @protected
   *
   * @example Embed the content of the Journal Entry Page as a figure.
   * ```@Embed[.yDbDF1ThSfeinh3Y classes="small right"]{Special caption}```
   * becomes
   * ```html
   * <figure class="content-embed small right" data-content-embed
   *         data-uuid="JournalEntry.ekAeXsvXvNL8rKFZ.JournalEntryPage.yDbDF1ThSfeinh3Y">
   *   <p>The contents of the page</p>
   *   <figcaption>
   *     <strong class="embed-caption">Special caption</strong>
   *     <cite>
   *       <a class="content-link" draggable="true" data-link
   *          data-uuid="JournalEntry.ekAeXsvXvNL8rKFZ.JournalEntryPage.yDbDF1ThSfeinh3Y"
   *          data-id="yDbDF1ThSfeinh3Y" data-type="JournalEntryPage" data-tooltip="Text Page">
   *         <i class="fa-solid fa-file-lines"></i> Text Page
   *       </a>
   *     </cite>
   *   <figcaption>
   * </figure>
   * ```
   *
   * @example Embed the content of the Journal Entry Page into the main content flow.
   * ```@Embed[.yDbDF1ThSfeinh3Y inline]```
   * becomes
   * ```html
   * <section class="content-embed" data-content-embed
   *          data-uuid="JournalEntry.ekAeXsvXvNL8rKFZ.JournalEntryPage.yDbDF1ThSfeinh3Y">
   *   <p>The contents of the page</p>
   * </section>
   * ```
   */
  protected _embedTextPage(
    config: DocumentHTMLEmbedConfig & EnrichmentOptions,
    options?: EnrichmentOptions,
  ): Promise<HTMLElement | HTMLCollection | null>
  /**
   * Embed image page content.
   * @param {DocumentHTMLEmbedConfig} config  Configuration for embedding behavior.
   * @param {string} [config.alt]             Alt text for the image, otherwise the caption will be used.
   * @param {EnrichmentOptions} [options]     The original enrichment options for cases where the Document embed content
   *                                          also contains text that must be enriched.
   * @returns {Promise<HTMLElement|HTMLCollection|null>}
   * @protected
   *
   * @example Create an embedded image from a sibling journal entry page.
   * ```@Embed[.QnH8yGIHy4pmFBHR classes="small right"]{Special caption}```
   * becomes
   * ```html
   * <figure class="content-embed small right" data-content-embed
   *         data-uuid="JournalEntry.xFNPjbSEDbWjILNj.JournalEntryPage.QnH8yGIHy4pmFBHR">
   *   <img src="path/to/image.webp" alt="Special caption">
   *   <figcaption>
   *     <strong class="embed-caption">Special caption</strong>
   *     <cite>
   *       <a class="content-link" draggable="true" data-link
   *          data-uuid="JournalEntry.xFNPjbSEDbWjILNj.JournalEntryPage.QnH8yGIHy4pmFBHR"
   *          data-id="QnH8yGIHy4pmFBHR" data-type="JournalEntryPage" data-tooltip="Image Page">
   *         <i class="fa-solid fa-file-image"></i> Image Page
   *       </a>
   *     </cite>
   *   </figcaption>
   * </figure>
   * ```
   */
  protected _embedImagePage(
    { alt, label }: DocumentHTMLEmbedConfig,
    options?: EnrichmentOptions,
  ): Promise<HTMLElement | HTMLCollection | null>
}
import type { JournalEntryPageHeading } from "@client/_types.mjs"
import type Note from "@client/canvas/placeables/note.mjs"
import BaseJournalEntryPage from "@common/documents/journal-entry-page.mjs"
