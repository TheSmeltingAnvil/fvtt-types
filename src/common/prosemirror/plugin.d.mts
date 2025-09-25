import { Schema } from "prosemirror-model"

/**
 * @abstract
 */
export default class ProseMirrorPlugin {
  /**
   * Build the plugin.
   * @param {Schema} schema     The ProseMirror schema to build the plugin against.
   * @param {object} [options]  Additional options to pass to the plugin.
   * @returns {Plugin}
   * @abstract
   */
  static build(schema: Schema, options?: object): Plugin
  /**
   * An abstract class for building a ProseMirror Plugin.
   * @see {Plugin}
   * @param {Schema} schema  The schema to build the plugin against.
   */
  constructor(schema: Schema)
}
