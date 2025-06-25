import {
  DocumentHTMLEmbedConfig,
  EnrichmentAnchorOptions,
  EnrichmentOptions,
  TextContentReplacer,
  TextReplacementOptions,
} from "config/types.js"

import ProseMirrorEditor from "./ProseMirrorEditor.js"
import { TextEditorEnricherConfig } from "config/TextEditorEnricher.js"
import { ClientDocument } from "foundry/documents/abstract/ClientDocumentMixin.js"

/**
 * A collection of helper functions and utility methods related to the rich text editor.
 */
export default class TextEditor {
  /**
   * Create a Rich Text Editor. The current implementation uses TinyMCE
   * @param options Configuration options provided to the Editor init
   * @param options.engine Which rich text editor engine to use, "tinymce" or "prosemirror". TinyMCE is deprecated and
   *                       will be removed in a later version.
   * @param content Initial HTML or text content to populate the editor with
   * @returns The editor instance.
   */
  static create(
    options?: { engine?: "prosemirror" | "tinymice" },
    content?: string, // @ts-expect-error Should fix.
  ): Promise<TinyMCE.Editor | ProseMirrorEditor>

  /**
   * Create a TinyMCE editor instance.
   * @param options Configuration options passed to the editor.
   * @param content Initial HTML or text content to populate the editor with.
   * @returns The TinyMCE editor instance.
   */
  // @ts-expect-error Should fix.
  protected static _createTinyMCE(options?: object, content?: string): Promise<TinyMCE.Editor>

  /* -------------------------------------------- */
  /*  HTML Manipulation Helpers                   */
  /* -------------------------------------------- */

  /**
   * Safely decode an HTML string, removing invalid tags and converting entities back to unicode characters.
   * @param html The original encoded HTML string
   * @returns  The decoded unicode string
   */
  static decodeHTML(html: string): string
  /**
   * Enrich HTML content by replacing or augmenting components of it
   * @param content The original HTML content (as a string)
   * @param options Additional options which configure how HTML is enriched
   * @returns The enriched HTML content
   */
  static enrichHTML(content: string | null, options?: EnrichmentOptions): Promise<string>

  /**
   * Scan for compendium UUIDs and retrieve Documents in batches so that they are in cache when enrichment proceeds.
   * @param text    The text nodes to scan.
   * @param options Options provided to customize text enrichment
   */
  protected static _primeCompendiums(text: Text[], options?: EnrichmentOptions): Promise<void>

  /**
   * Convert text of the form @UUID[uuid]{name} to anchor elements.
   * @param text    The existing text content
   * @param options Options provided to customize text enrichment
   * @param options.relativeTo A document to resolve relative UUIDs against.
   * @returns Whether any content links were replaced and the text nodes need to be updated.
   */
  protected static _enrichContentLinks(
    text: Text[],
    options?: EnrichmentOptions & { relativeTo?: Document },
  ): Promise<boolean>

  /**
   * Handle embedding Document content with @Embed[uuid]{label} text.
   * @param text    The existing text content.
   * @param options Options provided to customize text enrichment.
   * @returns Whether any embeds were replaced and the text nodes need to be updated.
   */
  protected static _enrichEmbeds(text: Text[], options?: EnrichmentOptions): Promise<boolean>

  /**
   * Convert URLs into anchor elements.
   * @param text    The existing text content
   * @param options Options provided to customize text enrichment
   * @returns Whether any hyperlinks were replaced and the text nodes need to be updated
   */
  protected static _enrichHyperlinks(text: Text[], options?: EnrichmentOptions): Promise<boolean>

  /**
   * Convert text of the form [[roll]] to anchor elements.
   * @param rollData The data object providing context for inline rolls.
   * @param text     The existing text content.
   * @param options  Options provided to customize text enrichment.
   * @returns Whether any inline rolls were replaced and the text nodes need to be updated.
   */
  protected static _enrichInlineRolls(
    rollData: object | Function,
    text: Text[],
    options?: EnrichmentOptions,
  ): Promise<boolean>

  /**
   * Match any custom registered regex patterns and apply their replacements.
   * @param config The custom enricher configuration.
   * @param text The existing text content.
   * @param options Options provided to customize text enrichment
   * @returns Whether any replacements were made, requiring the text nodes to be updated.
   */
  protected static _applyCustomEnrichers(
    config: TextEditorEnricherConfig,
    text: Text[],
    options: EnrichmentOptions,
  ): Promise<boolean>

  /**
   * Preview an HTML fragment by constructing a substring of a given length from its inner text.
   * @param content The raw HTML to preview
   * @param length  The desired length
   * @returns The previewed HTML
   */
  static previewHTML(content: string, length?: number): string

  /**
   * Sanitises an HTML fragment and removes any non-paragraph-style text.
   * @param html The root HTML element.
   */
  static truncateHTML(html: HTMLElement): HTMLElement

  /**
   * Truncate a fragment of text to a maximum number of characters.
   * @param text The original text fragment that should be truncated to a maximum length
   * @param options Options which affect the behavior of text truncation
   * @param options.maxLength The maximum allowed length of the truncated string.
   * @param options.splitWords Whether to truncate by splitting on white space (if true) or breaking words.
   * @param options.suffix A suffix string to append to denote that the text was truncated.
   * @returns The truncated text string
   */
  static truncateText(
    text: string,
    options?: {
      maxLength?: number
      splitWords?: boolean
      suffix?: string | null
    },
  ): string

  /* -------------------------------------------- */
  /*  Text Node Manipulation                      */
  /* -------------------------------------------- */

  /**
   * Facilitate the replacement of text node content using a matching regex rule and a provided replacement function.
   * @param text The text nodes to match and replace.
   * @param rgx The provided regular expression for matching and replacement
   * @param func The replacement function
   * @param options Options to configure text replacement behavior.
   * @returns Whether a replacement was made.
   */
  protected static _replaceTextContent(
    text: Text[],
    rgx: RegExp,
    func: TextContentReplacer,
    options?: TextReplacementOptions,
  ): boolean

  /* -------------------------------------------- */
  /*  Text Replacement Functions                  */
  /* -------------------------------------------- */

  /**
   * Create a dynamic document link from a regular expression match
   * @param {RegExpMatchArray} match         The regular expression match
   * @param {EnrichmentOptions} [options]    Additional options to configure enrichment behaviour
   * @param {Document} [options.relativeTo]  A document to resolve relative UUIDs against.
   * @returns {Promise<HTMLAnchorElement>}   An HTML element for the document link.
   * @protected
   */
  protected static _createContentLink(
    match: RegExpMatchArray,
    options?: EnrichmentOptions & { relativeTo?: Document },
  ): Promise<HTMLAnchorElement>

  /**
   * Helper method to create an anchor element.
   * @param options Options to configure the anchor's construction.
   */
  static createAnchor(options?: Partial<EnrichmentAnchorOptions>): HTMLAnchorElement

  /**
   * Embed content from another Document.
   * @param match   The regular expression match.
   * @param options Options provided to customize text enrichment.
   * @returns A representation of the Document as HTML content, or null if the Document could not be embedded.
   */
  protected static _embedContent(match: RegExpMatchArray, options?: EnrichmentOptions): Promise<HTMLElement | null>

  /**
   * Parse the embed configuration to be passed to ClientDocument#toEmbed.
   * The return value will be an object of any key=value pairs included with the configuration, as well as a separate
   * values property that contains all the options supplied that were not in key=value format.
   * If a uuid key is supplied it is used as the Document's UUID, otherwise the first supplied UUID is used.
   * @param raw     The raw matched config string.
   * @param options Options forwarded to parseUuid.
   *
   * @example Example configurations.
   * ```js
   * TextEditor._parseEmbedConfig('uuid=Actor.xyz caption="Example Caption" cite=false');
   * // Returns: { uuid: "Actor.xyz", caption: "Example Caption", cite: false, values: [] }
   *
   * TextEditor._parseEmbedConfig('Actor.xyz caption="Example Caption" inline');
   * // Returns: { uuid: "Actor.xyz", caption: "Example Caption", values: ["inline"] }
   * ```
   */
  protected static _parseEmbedConfig(raw: string, options?: object): DocumentHTMLEmbedConfig

  /**
   * Replace a hyperlink-like string with an actual HTML &lt;a> tag
   * @param match   The regular expression match
   * @param options Options provided to customize text enrichment
   * @returns An HTML element for the document link
   */
  protected static _createHyperlink(match: RegExpMatchArray, options?: EnrichmentOptions): Promise<HTMLAnchorElement>

  /**
   * Replace an inline roll formula with a rollable &lt;a> element or an eagerly evaluated roll result
   * @param match    The regular expression match array
   * @param rollData Provided roll data for use in roll evaluation
   * @param options  Options provided to customize text enrichment.
   * @returns The replaced match. Returns null if the contained command is not a valid roll expression.
   */
  protected static _createInlineRoll(
    match: RegExpMatchArray,
    rollData: object,
    options?: EnrichmentOptions,
  ): Promise<HTMLAnchorElement | null>

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  /** Activate interaction listeners for the interior content of the editor frame. */
  static activateListeners(): void

  /**
   * Handle left-mouse clicks on an inline roll, dispatching the formula or displaying the tooltip
   * @param event The initiating click event
   */
  protected static _onClickInlineRoll(event: MouseEvent): Promise<ChatMessage | undefined>

  /**
   * Extract JSON data from a drag/drop event.
   * @param event The drag event which contains JSON data.
   * @returns The extracted JSON data. The object will be empty if the DragEvent did not contain JSON-parseable data.
   */
  static getDragEventData(event: DragEvent): object

  /**
   * Given a Drop event, returns a Content link if possible such as "@Actor[ABC123]", else `null`
   * @param eventData          The parsed object of data provided by the transfer event
   * @param options            Additional options to configure link creation.
   * @param options.relativeTo A document to generate the link relative to.
   * @param options.label      A custom label to use instead of the document's name.
   */
  static getContentLink(
    eventData: object,
    options?: { relativeTo?: ClientDocument; label?: string },
  ): Promise<string | null>

  /**
   * Upload an image to a document's asset path.
   * @param uuid The document's UUID.
   * @param file The image file to upload.
   * @returns The path to the uploaded image.
   * @internal
   */
  static _uploadImage(uuid: string, file: File): Promise<string | void>

  /* -------------------------------------------- */
  /*  Factory Methods                             */
  /* -------------------------------------------- */

  /**
   * Retrieve the configured TextEditor implementation.
   */
  static get implementation(): typeof TextEditor
}
