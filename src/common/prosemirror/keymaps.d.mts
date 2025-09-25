/**
 * @import {ProseMirrorCommand} from "./_types.mjs";
 */
/**
 * A class responsible for building the keyboard commands for the ProseMirror editor.
 * @extends {ProseMirrorPlugin}
 */
export default class ProseMirrorKeyMaps extends ProseMirrorPlugin {
  /** @inheritdoc */
  static build(schema: any, options?: object): any
  /**
   * @param {Schema} schema              The ProseMirror schema to build keymaps for.
   * @param {object} [options]           Additional options to configure the plugin's behaviour.
   * @param {Function} [options.onSave]  A function to call when Ctrl+S is pressed.
   */
  constructor(
    schema: Schema,
    {
      onSave,
    }?: {
      onSave?: Function | undefined
    },
  )
  /**
   * Build keyboard commands for nodes and marks present in the schema.
   * @returns {Record<string, ProseMirrorCommand>}  An object of keyboard shortcuts to editor functions.
   */
  buildMapping(): Record<string, ProseMirrorCommand>
  #private
}
import { Schema } from "prosemirror-model"
import type { ProseMirrorCommand } from "./_types.mjs"
import ProseMirrorPlugin from "./plugin.mjs"
