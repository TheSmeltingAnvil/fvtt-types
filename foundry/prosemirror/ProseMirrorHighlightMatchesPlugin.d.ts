import { Schema } from "prosemirror-model"
import { Plugin } from "prosemirror-state"

import * as types from "./_types.js"
import ProseMirrorPlugin from "./ProseMirrorPlugin.js"

/**
 * A ProseMirrorPlugin wrapper around the PossibleMatchesTooltip class.
 */
export default class ProseMirrorHighlightMatchesPlugin extends ProseMirrorPlugin {
  /**
   * @param schema    The ProseMirror schema.
   * @param [options] Additional options to configure the plugin's behaviour.
   */
  constructor(schema: Schema, options?: types.ProseMirrorMenuOptions)

  static override build(schema: Schema, options?: object): Plugin
}
