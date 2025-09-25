/**
 * A custom HTML element used to wrap secret blocks in HTML content in order to provide additional interactivity.
 */
export default class HTMLSecretBlockElement extends HTMLElement {
  /**
   * The HTML tag named used by this element.
   * @type {string}
   */
  static tagName: string
  /**
   * The wrapped secret block.
   * @type {HTMLElement}
   */
  get secret(): HTMLElement
  /**
   * The revealed state of the secret block.
   * @type {boolean}
   */
  get revealed(): boolean
  /** @override */
  connectedCallback(): void
  /**
   * Toggle the secret revealed or hidden state in content that this secret block represents.
   * @param {string} content  The raw string content for this secret.
   * @returns {string}        The modified raw content.
   */
  toggleRevealed(content: string): string
  #private
}
