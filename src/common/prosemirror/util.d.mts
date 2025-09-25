/**
 * @import {ProseMirrorSliceTransformer} from "./_types.mjs";
 */
/**
 * Use the DOM and ProseMirror's DOMParser to construct a ProseMirror document state from an HTML string. This cannot be
 * used server-side.
 * @param {string} htmlString  A string of HTML.
 * @param {Schema} [schema]    The ProseMirror schema to use instead of the default one.
 * @returns {Node}             The document node.
 */
export function parseHTMLString(htmlString: string, schema?: Schema): Node
/**
 * Use the StringSerializer to convert a ProseMirror document into an HTML string. This can be used server-side.
 * @param {Node} doc                        The ProseMirror document.
 * @param {object} [options]                Additional options to configure serialization behavior.
 * @param {Schema} [options.schema]         The ProseMirror schema to use instead of the default one.
 * @param {string|number} [options.spaces]  The number of spaces to use for indentation. See {@link StringNode#toString}
 *                                          for details.
 * @returns {string}
 */
export function serializeHTMLString(
  doc: Node,
  {
    schema,
    spaces,
  }?: {
    schema?: any
    spaces?: string | number | undefined
  },
): string
/**
 * Apply a transformation to some nodes in a slice, and return the new slice.
 * @param {Slice} slice           The slice to transform.
 * @param {ProseMirrorSliceTransformer} transformer  The transformation function.
 * @returns {Slice}               Either the original slice if no changes were made, or the newly-transformed slice.
 */
export function transformSlice(slice: Slice, transformer: ProseMirrorSliceTransformer): Slice
import { Schema, Slice } from "prosemirror-model"
import type { ProseMirrorSliceTransformer } from "./_types.mjs"
