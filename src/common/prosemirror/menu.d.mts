/**
 * @import {Schema} from "prosemirror-model"
 * @import {EditorView} from "prosemirror-view"
 * @import {MenuToggleBlockWrapCommand, ProseMirrorContentLinkOptions, ProseMirrorDropDownConfig,
 *   ProseMirrorMenuItem, ProseMirrorMenuOptions} from "./_types.mjs"
 */
/**
 * A class responsible for building a menu for a ProseMirror instance.
 * @extends {ProseMirrorPlugin}
 */
export default class ProseMirrorMenu extends ProseMirrorPlugin {
  /**
   * An enumeration of editor scopes in which a menu item can appear
   * @enum {string}
   * @protected
   */
  protected static _MENU_ITEM_SCOPES: {
    BOTH: string
    TEXT: string
    HTML: string
  }
  /** @inheritdoc */
  static build(schema: any, options?: object): any
  /**
   * Global listeners for the drop-down menu.
   */
  static eventListeners(): void
  /**
   * @param {Schema} schema                     The ProseMirror schema to build a menu for.
   * @param {EditorView} view                   The editor view.
   * @param {ProseMirrorMenuOptions} [options]  Additional options to configure the plugin's behaviour.
   */
  constructor(schema: Plugin, view: Plugin, options?: ProseMirrorMenuOptions)
  /**
   * Additional options to configure the plugin's behaviour.
   * @type {ProseMirrorMenuOptions}
   */
  options: ProseMirrorMenuOptions
  /**
   * Track whether we are currently in a state of editing the HTML source.
   * @type {boolean}
   */
  get editingSource(): boolean
  /**
   * Render the menu's HTML.
   * @returns {ProseMirrorMenu}
   */
  render(): ProseMirrorMenu
  /**
   * Attach event listeners.
   * @param {HTMLMenuElement} html  The root menu element.
   */
  activateListeners(html: HTMLMenuElement): void
  /**
   * Called whenever the view's state is updated.
   * @param {EditorView} view       The current editor state.
   * @param {EditorView} prevState  The previous editor state.
   */
  update(view: Plugin, prevState: Plugin): void
  /**
   * Called when the view is destroyed or receives a state with different plugins.
   */
  destroy(): void
  /**
   * Instantiate the ProseMirrorDropDown instances and configure them with the defined menu items.
   * @protected
   */
  protected _createDropDowns(): void
  /**
   * Configure dropdowns for this menu. Each entry in the top-level array corresponds to a separate drop-down.
   * @returns {Record<string, ProseMirrorDropDownConfig>}
   * @protected
   */
  protected _getDropDownMenus(): Record<string, ProseMirrorDropDownConfig>
  /**
   * Configure the items for this menu.
   * @returns {ProseMirrorMenuItem[]}
   * @protected
   */
  protected _getMenuItems(): ProseMirrorMenuItem[]
  /**
   * Determine whether the given menu item is currently active or not.
   * @param {ProseMirrorMenuItem} item  The menu item.
   * @returns {boolean}                 Whether the cursor or selection is in a state represented by the given menu
   *                                    item.
   * @protected
   */
  protected _isItemActive(item: ProseMirrorMenuItem): boolean
  /**
   * Determine whether the given menu item representing a mark is active or not.
   * @param {ProseMirrorMenuItem} item  The menu item representing a MarkType.
   * @returns {boolean}                 Whether the cursor or selection is in a state represented by the given mark.
   * @protected
   */
  protected _isMarkActive(item: ProseMirrorMenuItem): boolean
  /**
   * Determine whether the given menu item representing a node is active or not.
   * @param {ProseMirrorMenuItem} item  The menu item representing a NodeType.
   * @returns {boolean}                 Whether the cursor or selection is currently within a block of this menu item's
   *                                    node type.
   * @protected
   */
  protected _isNodeActive(item: ProseMirrorMenuItem): boolean
  /**
   * Handle a button press.
   * @param {MouseEvent} event  The click event.
   * @protected
   */
  protected _onAction(event: MouseEvent): void
  /**
   * Wrap the editor view element and inject our template ready to be rendered into.
   * @protected
   */
  protected _wrapEditor(): void
  /**
   * Handle requests to save the editor contents
   * @protected
   */
  protected _handleSave(): any
  /**
   * Display the insert image prompt.
   * @protected
   */
  protected _insertImagePrompt(): Promise<void>
  /**
   * Display the insert link prompt.
   * @protected
   */
  protected _insertLinkPrompt(): Promise<void>
  /**
   * Display the insert table prompt.
   * @protected
   */
  protected _insertTablePrompt(): Promise<void>
  /**
   * Create a dialog for a menu button.
   * @param {string} action                      The unique menu button action.
   * @param {string} template                    The dialog's template.
   * @param {object} [options]                   Additional options to configure the dialog's behaviour.
   * @param {object} [options.data={}]           Data to pass to the template.
   * @returns {HTMLDialogElement}
   * @protected
   */
  protected _showDialog(
    action: string,
    template: string,
    {
      data,
    }?: {
      data?: object | undefined
    },
  ): HTMLDialogElement
  /**
   * Clear any marks from the current selection.
   * @protected
   */
  protected _clearFormatting(): void
  /**
   * Toggle link recommendations
   * @protected
   */
  protected _toggleMatches(): Promise<void>
  /**
   * Toggle the given selection by wrapping it in a given block or lifting it out of one.
   * @param {NodeType} node                    The type of node being interacted with.
   * @param {MenuToggleBlockWrapCommand} wrap  The wrap command specific to the given node.
   * @param {object} [options]                 Additional options to configure behaviour.
   * @param {object} [options.attrs]           Attributes for the node.
   * @protected
   */
  protected _toggleBlock(
    node: NodeType,
    wrap: MenuToggleBlockWrapCommand,
    {
      attrs,
    }?: {
      attrs?: object | undefined
    },
  ): void
  /**
   * Toggle the given selection by wrapping it in a given text block, or reverting to a paragraph block.
   * @param {NodeType} node           The type of node being interacted with.
   * @param {object} [options]        Additional options to configure behaviour.
   * @param {object} [options.attrs]  Attributes for the node.
   * @protected
   */
  protected _toggleTextBlock(
    node: NodeType,
    {
      attrs,
    }?: {
      attrs?: object | undefined
    },
  ): void
  #private
}
import { NodeType } from "prosemirror-model"
import type {
  MenuToggleBlockWrapCommand,
  ProseMirrorDropDownConfig,
  ProseMirrorMenuItem,
  ProseMirrorMenuOptions,
} from "./_types.mjs"
import ProseMirrorPlugin from "./plugin.mjs"
