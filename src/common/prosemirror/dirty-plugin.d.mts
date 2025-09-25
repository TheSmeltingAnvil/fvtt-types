/**
 * A simple plugin that records the dirty state of the editor.
 * @extends {ProseMirrorPlugin}
 */
export default class ProseMirrorDirtyPlugin extends ProseMirrorPlugin {
  /** @inheritdoc */
  static build(schema: any, options?: object): any
}
import ProseMirrorPlugin from "./plugin.mjs"
