/**
 * Configure extensions for managing indentation via keypress.
 * @param {number} spaces The number of spaces added/removed per press of TAB/SHIFT-TAB
 * @returns {Extension[]}
 */
export function configureIndentExtensions(spaces: number): indentWithTab[]
/**
 * @import {Diagnostic} from "@codemirror/lint";
 * @import {Extension} from "@codemirror/state";
 * @import {EditorView} from "@codemirror/view";
 * @import {CodeMirrorLanguage} from "@common/data/_types.mjs";
 */
/**
 * CodeMirror language extensions
 * @type {Record<Exclude<CodeMirrorLanguage, "">, Extension[]>}
 */
export const LANGUAGES: Record<Exclude<CodeMirrorLanguage, "">, indentWithTab[]>
/**
 * CodeMirror HTML tag classes for parsed language tokens
 * @type {Extension}
 */
export const HIGHLIGHT_STYLE: indentWithTab
import type { CodeMirrorLanguage } from "@common/data/_types.mjs"
