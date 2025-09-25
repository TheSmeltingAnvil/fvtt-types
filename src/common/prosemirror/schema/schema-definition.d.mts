import { AttributeSpec, MarkSpec, NodeSpec } from "prosemirror-model"

/**
 * An abstract interface for a ProseMirror schema definition.
 * @abstract
 */
export default class SchemaDefinition {
  /**
   * The HTML tag selector this node is associated with.
   * @type {string}
   */
  static tag: string
  /**
   * Schema attributes.
   * @returns {Record<string, AttributeSpec>}
   * @abstract
   */
  static get attrs(): Record<string, AttributeSpec>
  /**
   * Check if an HTML element is appropriate to represent as this node, and if so, extract its schema attributes.
   * @param {HTMLElement} el    The HTML element.
   * @returns {object|boolean}  Returns false if the HTML element is not appropriate for this schema node, otherwise
   *                            returns its attributes.
   * @abstract
   */
  static getAttrs(el: HTMLElement): object | boolean
  /**
   * Convert a ProseMirror Node back into an HTML element.
   * @param {Node} node  The ProseMirror node.
   * @returns {[string, any]}
   * @abstract
   */
  static toDOM(node: Node): [string, any]
  /**
   * Create the ProseMirror schema specification.
   * @returns {NodeSpec|MarkSpec}
   * @abstract
   */
  static make(): NodeSpec | MarkSpec
}
