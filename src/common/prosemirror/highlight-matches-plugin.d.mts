/**
 * A ProseMirrorPlugin wrapper around the PossibleMatchesTooltip class.
 */
export default class ProseMirrorHighlightMatchesPlugin extends ProseMirrorPlugin {
  /** @inheritdoc */
  static build(schema: any, options?: object): any
  /**
   * @param {Schema} schema                     The ProseMirror schema.
   * @param {ProseMirrorMenuOptions} [options]  Additional options to configure the plugin's behaviour.
   */
  constructor(schema: Schema, options?: ProseMirrorMenuOptions)
  options: any
}
import { Schema } from "prosemirror-model"
import type { ProseMirrorMenuOptions } from "./_types.d.mts"
import ProseMirrorPlugin from "./plugin.mjs"
