/**
 * @import {AllowedAttributeConfiguration, ManagedAttributesSpec} from "./_types.mjs";
 */

import { MarkSpec, NodeSpec } from "prosemirror-model"

/**
 * A class responsible for injecting attribute capture logic into the ProseMirror schema.
 */
export default class AttributeCapture {
  /**
   * Augments the schema definition to allow each node or mark to capture all the attributes on an element and preserve
   * them when re-serialized back into the DOM.
   * @param {NodeSpec|MarkSpec} spec  The schema specification.
   */
  attributeCapture(spec: NodeSpec | MarkSpec): void
  #private
}
