import * as foundry from "../foundry/_module.js"

export interface EnrichmentOptions {
  /** Include unrevealed secret tags in the final HTML? If false, unrevealed secret blocks will be removed. */
  secrets?: boolean

  /** Replace dynamic document links? */
  documents?: boolean

  /** Replace hyperlink content? */
  links?: boolean

  /** Replace inline dice rolls? */
  rolls?: boolean

  /** Replace embedded content? */
  embeds?: boolean

  /** Apply custom enrichers? */
  custom?: boolean

  /** The data object providing context for inline rolls, or a function that produces it. */
  rollData?: Record<string, unknown> | (() => Record<string, unknown>)

  /** A document to resolve relative UUIDs against. */
  relativeTo?: foundry.documents.abstract.ClientDocument
}

export interface EnrichmentAnchorOptions {
  /** Attributes to set on the anchor. */
  attrs?: Record<string, string>

  /** Data- attributes to set on the anchor. */
  dataset?: Record<string, string>

  /** Classes to add to the anchor. */
  classes?: string[]

  /** The anchor's content. */
  name?: string

  /** A font-awesome icon class to use as the icon. */
  icon?: string
}

export interface TextReplacementOptions {
  /** Hoist the replacement element out of its containing element if it would be the only child of that element. */
  replaceParent?: boolean
}

export interface DocumentHTMLEmbedConfig {
  /** Any strings that did not have a key name associated with them.*/
  values: string[]

  /** Classes to attach to the outermost element. */
  classes?: string

  /**
   * By default Documents are embedded inside a figure element. If this option is passed, the embed content will
   * instead be included as part of the rest of the content flow, but still wrapped in a section tag for styling
   * purposes.
   */
  inline?: boolean

  /**
   * Whether to include a content link to the original Document as a citation. This options is ignored if the Document
   * is inlined.
   */
  cite?: boolean

  /**
   * Whether to include a caption. The caption will depend on the Document being embedded, but if an explicit label is
   * provided, that will always be used as the caption. This option is ignored if the Document is inlined.
   */
  caption?: boolean

  /** Controls whether the caption is rendered above or below the embedded content. */
  captionPosition?: string

  /** The label. */
  label?: string
}

export type TextContentReplacer = (match: RegExpMatchArray) => Promise<HTMLElement>
