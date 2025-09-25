/**
 * A custom HTMLElement that is used to wrap enriched content that requires additional interactivity.
 */
export default class HTMLEnrichedContentElement extends HTMLElement {
  /**
   * The HTML tag named used by this element.
   * @type {string}
   */
  static tagName: string
  /**
   * Attributes requiring change notifications
   * @type {string[]}
   */
  static observedAttributes: string[]
  /**
   * Invoke the enricher onRender callback when it is added to the DOM.
   */
  connectedCallback(): void
  /**
   * Fire a callback on change to an observed attribute.
   * @param {string} attrName The name of the attribute
   * @param {string|null} oldValue The old value: null indicates the attribute was not present.
   * @param {string|null} newValue The new value: null indicates the attribute is removed.
   */
  attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null): void
  #private
}
