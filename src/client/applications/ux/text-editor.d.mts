/**
 * @import TinyMCE from "tinymce"
 */
/**
 * @typedef EnrichmentOptions
 * @property {boolean} [secrets=false]      Include unrevealed secret tags in the final HTML? If false, unrevealed
 *                                          secret blocks will be removed.
 * @property {boolean} [documents=true]     Replace dynamic document links?
 * @property {boolean} [links=true]         Replace hyperlink content?
 * @property {boolean} [rolls=true]         Replace inline dice rolls?
 * @property {boolean} [embeds=true]        Replace embedded content?
 * @property {boolean} [custom=true]        Apply custom enrichers?
 * @property {object|Function} [rollData]   The data object providing context for inline rolls, or a function that
 *                                          produces it.
 * @property {ClientDocument} [relativeTo]  A document to resolve relative UUIDs against.
 */
/**
 * @typedef EnrichmentAnchorOptions
 * @property {Record<string, string>} [attrs]    Attributes to set on the anchor.
 * @property {Record<string, string>} [dataset]  Data- attributes to set on the anchor.
 * @property {string[]} [classes]                Classes to add to the anchor.
 * @property {string} [name]                     The anchor's content.
 * @property {string} [icon]                     A font-awesome icon class to use as the icon.
 */
/**
 * @typedef TextReplacementOptions
 * @property {boolean} [replaceParent=false]  Hoist the replacement element out of its containing element if it
 *                                            would be the only child of that element.
 */
/**
 * @callback TextContentReplacer
 * @param {RegExpMatchArray} match            The regular expression match.
 * @returns {Promise<HTMLElement>}            The HTML to replace the matched content with.
 */
/**
 * @typedef DocumentHTMLEmbedConfig
 * @property {string[]} values         Any strings that did not have a key name associated with them.
 * @property {string} [classes]        Classes to attach to the outermost element.
 * @property {boolean} [inline=false]  By default Documents are embedded inside a figure element. If this option is
 *                                     passed, the embed content will instead be included as part of the rest of the
 *                                     content flow, but still wrapped in a section tag for styling purposes.
 * @property {boolean} [cite=true]     Whether to include a content link to the original Document as a citation. This
 *                                     options is ignored if the Document is inlined.
 * @property {boolean} [caption=true]  Whether to include a caption. The caption will depend on the Document being
 *                                     embedded, but if an explicit label is provided, that will always be used as the
 *                                     caption. This option is ignored if the Document is inlined.
 * @property {string} [captionPosition="bottom"]  Controls whether the caption is rendered above or below the embedded
 *                                                content.
 * @property {string} [label]          The label.
 */
/**
 * A collection of helper functions and utility methods related to the rich text editor.
 */
export default class TextEditor {
    /**
     * A singleton text area used for HTML decoding.
     * @type {HTMLTextAreaElement}
     */
    static #decoder: HTMLTextAreaElement;
    /**
     * Create a Rich Text Editor. The current implementation uses TinyMCE
     * @param {object} options                   Configuration options provided to the Editor init
     * @param {string} [options.engine=tinymce]  Which rich text editor engine to use, "tinymce" or "prosemirror". TinyMCE
     *                                           is deprecated and will be removed in a later version.
     * @param {string} content                   Initial HTML or text content to populate the editor with
     * @returns {Promise<TinyMCE.Editor|ProseMirrorEditor>}  The editor instance.
     */
    static create({ engine, ...options }?: {
        engine?: string | undefined;
    }, content?: string): Promise<TinyMCE.Editor | ProseMirrorEditor>;
    /**
     * A list of elements that are retained when truncating HTML.
     * @type {Set<string>}
     */
    static #PARAGRAPH_ELEMENTS: Set<string>;
    /**
     * Create a TinyMCE editor instance.
     * @param {object} [options]           Configuration options passed to the editor.
     * @param {string} [content=""]        Initial HTML or text content to populate the editor with.
     * @returns {Promise<TinyMCE.Editor>}  The TinyMCE editor instance.
     * @protected
     */
    protected static _createTinyMCE(options?: object, content?: string): Promise<TinyMCE.Editor>;
    /**
     * Safely decode an HTML string, removing invalid tags and converting entities back to unicode characters.
     * @param {string} html     The original encoded HTML string
     * @returns {string}        The decoded unicode string
     */
    static decodeHTML(html: string): string;
    /**
     * Enrich HTML content by replacing or augmenting components of it
     * @param {string} content                  The original HTML content (as a string)
     * @param {EnrichmentOptions} [options={}]  Additional options which configure how HTML is enriched
     * @returns {Promise<string>}               The enriched HTML content
     */
    static enrichHTML(content: string, options?: EnrichmentOptions): Promise<string>;
    /**
     * Scan for compendium UUIDs and retrieve Documents in batches so that they are in cache when enrichment proceeds.
     * @param {Text[]} text                   The text nodes to scan.
     * @param {EnrichmentOptions} [options]   Options provided to customize text enrichment
     * @protected
     */
    protected static _primeCompendiums(text: Text[], options?: EnrichmentOptions): Promise<void>;
    /**
     * Convert text of the form @UUID[uuid]{name} to anchor elements.
     * @param {Text[]} text                    The existing text content
     * @param {EnrichmentOptions} [options]    Options provided to customize text enrichment
     * @param {Document} [options.relativeTo]  A document to resolve relative UUIDs against.
     * @returns {Promise<boolean>}             Whether any content links were replaced and the text nodes need to be
     *                                         updated.
     * @protected
     */
    protected static _enrichContentLinks(text: Text[], options?: EnrichmentOptions): Promise<boolean>;
    /**
     * Handle embedding Document content with @Embed[uuid]{label} text.
     * @param {Text[]} text                  The existing text content.
     * @param {EnrichmentOptions} [options]  Options provided to customize text enrichment.
     * @returns {Promise<boolean>}           Whether any embeds were replaced and the text nodes need to be updated.
     * @protected
     */
    protected static _enrichEmbeds(text: Text[], options?: EnrichmentOptions): Promise<boolean>;
    /**
     * Convert URLs into anchor elements.
     * @param {Text[]} text                 The existing text content
     * @param {EnrichmentOptions} [options] Options provided to customize text enrichment
     * @returns {Promise<boolean>}          Whether any hyperlinks were replaced and the text nodes need to be updated
     * @protected
     */
    protected static _enrichHyperlinks(text: Text[], options?: EnrichmentOptions): Promise<boolean>;
    /**
     * Convert text of the form [[roll]] to anchor elements.
     * @param {object|Function} rollData    The data object providing context for inline rolls.
     * @param {Text[]} text                 The existing text content.
     * @param {EnrichmentOptions} [options] Options provided to customize text enrichment.
     * @returns {Promise<boolean>}          Whether any inline rolls were replaced and the text nodes need to be updated.
     * @protected
     */
    protected static _enrichInlineRolls(rollData: object | Function, text: Text[], options?: EnrichmentOptions): Promise<boolean>;
    /**
     * Match any custom registered regex patterns and apply their replacements.
     * @param {TextEditorEnricherConfig} config  The custom enricher configuration.
     * @param {Text[]} text                      The existing text content.
     * @param {EnrichmentOptions} [options]      Options provided to customize text enrichment
     * @returns {Promise<boolean>}               Whether any replacements were made, requiring the text nodes to be
     *                                           updated.
     * @protected
     */
    protected static _applyCustomEnrichers({ id, pattern, enricher, onRender, replaceParent }: TextEditorEnricherConfig, text: Text[], options?: EnrichmentOptions): Promise<boolean>;
    /**
     * A method that can be extended by subclasses to perform final post-enrichment operations on an HTML fragment.
     * Final changes should be made in-place, mutating the provided HTML element.
     * Note: This API is experimental and may be removed in later versions without deprecation.
     * @param {HTMLDivElement} html             A div element containing the enriched HTML
     * @param {EnrichmentOptions} options       Provided enrichment options
     * @returns {Promise<void>}                 A promise which resolves once finalization has completed
     * @protected
     * @internal
     */
    protected static _finalizeEnrichedHTML(html: HTMLDivElement, options: EnrichmentOptions): Promise<void>;
    /**
     * Preview an HTML fragment by constructing a substring of a given length from its inner text.
     * @param {string} content    The raw HTML to preview
     * @param {number} length     The desired length
     * @returns {string}          The previewed HTML
     */
    static previewHTML(content: string, length?: number): string;
    /**
     * Sanitises an HTML fragment and removes any non-paragraph-style text.
     * @param {HTMLElement} html       The root HTML element.
     * @returns {HTMLElement}
     */
    static truncateHTML(html: HTMLElement): HTMLElement;
    /**
     * Truncate a fragment of text to a maximum number of characters.
     * @param {string} text           The original text fragment that should be truncated to a maximum length
     * @param {object} [options]      Options which affect the behavior of text truncation
     * @param {number} [options.maxLength]    The maximum allowed length of the truncated string.
     * @param {boolean} [options.splitWords]  Whether to truncate by splitting on white space (if true) or breaking words.
     * @param {string|null} [options.suffix]  A suffix string to append to denote that the text was truncated.
     * @returns {string}              The truncated text string
     */
    static truncateText(text: string, { maxLength, splitWords, suffix }?: {
        maxLength?: number | undefined;
        splitWords?: boolean | undefined;
        suffix?: string | null | undefined;
    }): string;
    /**
     * Wrap secrets in a custom element for interactivity handling.
     * @param {HTMLDivElement} html  The post-enriched HTML.
     */
    static #wrapSecrets(html: HTMLDivElement): void;
    /**
     * Recursively identify the text nodes within a parent HTML node for potential content replacement.
     * @param {HTMLElement} parent    The parent HTML Element
     * @returns {Text[]}              An array of contained Text nodes
     */
    static #getTextNodes(parent: HTMLElement): Text[];
    /**
     * Facilitate the replacement of text node content using a matching regex rule and a provided replacement function.
     * @param {Text[]} text                       The text nodes to match and replace.
     * @param {RegExp} rgx                        The provided regular expression for matching and replacement
     * @param {TextContentReplacer} func          The replacement function
     * @param {TextReplacementOptions} [options]  Options to configure text replacement behavior.
     * @returns {boolean}                         Whether a replacement was made.
     * @protected
     */
    protected static _replaceTextContent(text: Text[], rgx: RegExp, func: TextContentReplacer, options?: TextReplacementOptions): boolean;
    /**
     * Replace a matched portion of a Text node with a replacement Node
     * @param {Text} text                         The Text node containing the match.
     * @param {RegExpMatchArray} match            The regular expression match.
     * @param {Node} replacement                  The replacement Node.
     * @param {TextReplacementOptions} [options]  Options to configure text replacement behavior.
     */
    static #replaceTextNode(text: Text, match: RegExpMatchArray, replacement: Node, { replaceParent }?: TextReplacementOptions): void;
    /**
     * Create a dynamic document link from a regular expression match
     * @param {RegExpMatchArray} match         The regular expression match
     * @param {EnrichmentOptions} [options]    Additional options to configure enrichment behaviour
     * @param {Document} [options.relativeTo]  A document to resolve relative UUIDs against.
     * @returns {Promise<HTMLAnchorElement>}   An HTML element for the document link.
     * @protected
     */
    protected static _createContentLink(match: RegExpMatchArray, { relativeTo }?: EnrichmentOptions): Promise<HTMLAnchorElement>;
    /**
     * Helper method to create an anchor element.
     * @param {Partial<EnrichmentAnchorOptions>} [options]  Options to configure the anchor's construction.
     * @returns {HTMLAnchorElement}
     */
    static createAnchor({ attrs, dataset, classes, name, icon }?: Partial<EnrichmentAnchorOptions>): HTMLAnchorElement;
    /**
     * Embed content from another Document.
     * @param {RegExpMatchArray} match         The regular expression match.
     * @param {EnrichmentOptions} [options]    Options provided to customize text enrichment.
     * @returns {Promise<HTMLElement|null>}    A representation of the Document as HTML content, or null if the Document
     *                                         could not be embedded.
     * @protected
     */
    protected static _embedContent(match: RegExpMatchArray, options?: EnrichmentOptions): Promise<HTMLElement | null>;
    /**
     * Parse the embed configuration to be passed to ClientDocument#toEmbed.
     * The return value will be an object of any key=value pairs included with the configuration, as well as a separate
     * values property that contains all the options supplied that were not in key=value format.
     * If a uuid key is supplied it is used as the Document's UUID, otherwise the first supplied UUID is used.
     * @param {string} raw        The raw matched config string.
     * @param {object} [options]  Options forwarded to parseUuid.
     * @returns {DocumentHTMLEmbedConfig}
     * @protected
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
    protected static _parseEmbedConfig(raw: string, options?: object): DocumentHTMLEmbedConfig;
    /**
     * Create a dynamic document link from an old-form document link expression.
     * @param {string} type    The matched document type, or "Compendium".
     * @param {string} target  The requested match target (_id or name).
     * @param {string} name    A customized or overridden display name for the link.
     * @param {object} data    Data containing the properties of the resulting link element.
     * @returns {boolean}      Whether the resulting link is broken or not.
     */
    static #createLegacyContentLink(type: string, target: string, name: string, data: object): boolean;
    /**
     * Replace a hyperlink-like string with an actual HTML &lt;a> tag
     * @param {RegExpMatchArray} match        The regular expression match
     * @param {EnrichmentOptions} [options]   Options provided to customize text enrichment
     * @returns {Promise<HTMLAnchorElement>}  An HTML element for the document link
     * @protected
     */
    protected static _createHyperlink(match: RegExpMatchArray, options?: EnrichmentOptions): Promise<HTMLAnchorElement>;
    /**
     * Replace an inline roll formula with a rollable &lt;a> element or an eagerly evaluated roll result
     * @param {RegExpMatchArray} match             The regular expression match array
     * @param {object} rollData                    Provided roll data for use in roll evaluation
     * @param {EnrichmentOptions} [options]        Options provided to customize text enrichment.
     * @returns {Promise<HTMLAnchorElement|null>}  The replaced match. Returns null if the contained command is not a
     *                                             valid roll expression.
     * @protected
     */
    protected static _createInlineRoll(match: RegExpMatchArray, rollData: object, options?: EnrichmentOptions): Promise<HTMLAnchorElement | null>;
    /**
     * Activate interaction listeners for the interior content of the editor frame.
     */
    static activateListeners(): void;
    /**
     * Handle click events on Document Links
     * @param {Event} event
     */
    static #onClickContentLink(event: Event): Promise<any>;
    /**
     * Handle left-mouse clicks on an inline roll, dispatching the formula or displaying the tooltip
     * @param {MouseEvent} event    The initiating click event
     * @protected
     */
    protected static _onClickInlineRoll(event: MouseEvent): Promise<any>;
    /**
     * Begin a Drag+Drop workflow for a dynamic content link
     * @param {Event} event   The originating drag event
     */
    static #onDragContentLink(event: Event): false | undefined;
    /**
     * Handle dropping of transferred data onto the active rich text editor
     * @param {DragEvent} event     The originating drop event which triggered the data transfer
     * @param {TinyMCE} editor      The TinyMCE editor instance being dropped on
     */
    static #onDropEditorData(event: DragEvent, editor: TinyMCE): Promise<void>;
    /**
     * Extract JSON data from a drag/drop event.
     * @param {DragEvent} event       The drag event which contains JSON data.
     * @returns {object}              The extracted JSON data. The object will be empty if the DragEvent did not contain
     *                                JSON-parseable data.
     */
    static getDragEventData(event: DragEvent): object;
    /**
     * Given a Drop event, returns a Content link if possible such as "@Actor[ABC123]", else `null`
     * @param {object} eventData                     The parsed object of data provided by the transfer event
     * @param {object} [options]                     Additional options to configure link creation.
     * @param {ClientDocument} [options.relativeTo]  A document to generate the link relative to.
     * @param {string} [options.label]               A custom label to use instead of the document's name.
     * @returns {Promise<string|null>}
     */
    static getContentLink(eventData: object, options?: {
        relativeTo?: any;
        label?: string | undefined;
    }): Promise<string | null>;
    /**
     * Upload an image to a document's asset path.
     * @param {string} uuid        The document's UUID.
     * @param {File} file          The image file to upload.
     * @returns {Promise<string|void>} The path to the uploaded image.
     * @internal
     */
    static _uploadImage(uuid: string, file: File): Promise<string | void>;
    /**
     * Retrieve the configured TextEditor implementation.
     * @type {typeof TextEditor}
     */
    static get implementation(): typeof TextEditor;
}
export type EnrichmentOptions = {
    /**
     * Include unrevealed secret tags in the final HTML? If false, unrevealed
     *       secret blocks will be removed.
     */
    secrets?: boolean | undefined;
    /**
     * Replace dynamic document links?
     */
    documents?: boolean | undefined;
    /**
     * Replace hyperlink content?
     */
    links?: boolean | undefined;
    /**
     * Replace inline dice rolls?
     */
    rolls?: boolean | undefined;
    /**
     * Replace embedded content?
     */
    embeds?: boolean | undefined;
    /**
     * Apply custom enrichers?
     */
    custom?: boolean | undefined;
    /**
     * The data object providing context for inline rolls, or a function that
     *    produces it.
     */
    rollData?: object | Function | undefined;
    /**
     * A document to resolve relative UUIDs against.
     */
    relativeTo?: ClientDocument;
};
export type EnrichmentAnchorOptions = {
    /**
     * Attributes to set on the anchor.
     */
    attrs?: Record<string, string> | undefined;
    /**
     * Data- attributes to set on the anchor.
     */
    dataset?: Record<string, string> | undefined;
    /**
     * Classes to add to the anchor.
     */
    classes?: string[] | undefined;
    /**
     * The anchor's content.
     */
    name?: string | undefined;
    /**
     * A font-awesome icon class to use as the icon.
     */
    icon?: string | undefined;
};
export type TextReplacementOptions = {
    /**
     * Hoist the replacement element out of its containing element if it
     *   would be the only child of that element.
     */
    replaceParent?: boolean | undefined;
};
export type TextContentReplacer = (match: RegExpMatchArray) => Promise<HTMLElement>;
export type DocumentHTMLEmbedConfig = {
    /**
     * Any strings that did not have a key name associated with them.
     */
    values: string[];
    /**
     * Classes to attach to the outermost element.
     */
    classes?: string | undefined;
    /**
     * By default Documents are embedded inside a figure element. If this option is
     *   passed, the embed content will instead be included as part of the rest of the
     *   content flow, but still wrapped in a section tag for styling purposes.
     */
    inline?: boolean | undefined;
    /**
     * Whether to include a content link to the original Document as a citation. This
     *      options is ignored if the Document is inlined.
     */
    cite?: boolean | undefined;
    /**
     * Whether to include a caption. The caption will depend on the Document being
     *   embedded, but if an explicit label is provided, that will always be used as the
     *   caption. This option is ignored if the Document is inlined.
     */
    caption?: boolean | undefined;
    /**
     * Controls whether the caption is rendered above or below the embedded
     *   content.
     */
    captionPosition?: string | undefined;
    /**
     * The label.
     */
    label?: string | undefined;
};
import ProseMirrorEditor from "./prosemirror-editor.mjs";
