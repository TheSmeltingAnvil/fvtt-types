import * as foundry from "../foundry/_module.js"
import { EnrichmentOptions } from "./types.js"

export interface TextEditorEnricherConfig {
  /**
   * The function that will be called on each match. It is expected that this returns an HTML
   * element to be inserted into the final enriched content.
   */
  enricher: TextEditorEnricher
  /**
   * A unique ID to assign to the enricher type. Required if you want to use the onRender
   * callback.
   */
  id?: string
  /**
   *
   * @param arg0 An optional callback that is invoked when the enriched content is added to the DOM.
   * @returns
   */
  onRender?: (arg0: foundry.applications.elements.HTMLEnrichedContentElement) => any
  /**
   * The string pattern to match. Must be flagged as global.
   */
  pattern: RegExp
  /**
   * Hoist the replacement element out of its containing element if it replaces the entire contents of the element.
   */
  replaceParent?: boolean
}

/**
 * @param match The regular expression match result
 * @param options Options provided to customize text enrichment
 */
export type TextEditorEnricher = (match: RegExpMatchArray, options?: EnrichmentOptions) => Promise<HTMLElement | null>
