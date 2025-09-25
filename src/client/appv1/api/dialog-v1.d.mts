/**
 * @import {ApplicationV1Options} from "./application-v1.mjs"
 */
/**
 * @typedef DialogV1Options
 * @property {boolean} [jQuery=true]  Whether to provide jQuery objects to callback functions (if true) or plain
 *                                    HTMLElement instances (if false). This is currently true by default but in the
 *                                    future will become false by default.
 */
/**
 * @typedef DialogV1Button
 * @property {string} icon                  A Font Awesome icon for the button
 * @property {string} label                 The label for the button
 * @property {boolean} disabled             Whether the button is disabled
 * @property {function(jQuery)} [callback]  A callback function that fires when the button is clicked
 */
/**
 * @typedef DialogData
 * @property {string} title                 The window title displayed in the dialog header
 * @property {string} content               HTML content for the dialog form
 * @property {Record<string, DialogV1Button>} buttons The buttons which are displayed as action choices for the dialog
 * @property {string} [default]             The name of the default button which should be triggered on Enter keypress
 * @property {function(jQuery)} [render]    A callback function invoked when the dialog is rendered
 * @property {function(jQuery)} [close]     Common callback operations to perform when the dialog is closed
 */
/**
 * Create a dialog window displaying a title, a message, and a set of buttons which trigger callback functions.
 *
 * @example Constructing a custom dialog instance
 * ```js
 * let d = new Dialog({
 *  title: "Test Dialog",
 *  content: "<p>You must choose either Option 1, or Option 2</p>",
 *  buttons: {
 *   one: {
 *    icon: '<i class="fa-solid fa-check"></i>',
 *    label: "Option One",
 *    callback: () => console.log("Chose One")
 *   },
 *   two: {
 *    icon: '<i class="fa-solid fa-xmark"></i>',
 *    label: "Option Two",
 *    callback: () => console.log("Chose Two")
 *   }
 *  },
 *  default: "two",
 *  render: html => console.log("Register interactivity in the rendered dialog"),
 *  close: html => console.log("This always is logged no matter which option is chosen")
 * });
 * d.render(true);
 * ```
 * @deprecated since v13
 */
export default class Dialog extends Application {
  /**
   * @override
   * @returns {DialogV1Options}
   */
  static override get defaultOptions(): DialogV1Options
  /**
   * @typedef DialogV1ConfirmOptions
   * @property {Function} [yes]               Callback function upon yes
   * @property {Function} [no]                Callback function upon no
   * @property {boolean} [defaultYes=true]    Make "yes" the default choice?
   * @property {boolean} [rejectClose=false]  Reject the Promise if the Dialog is closed without making a choice.
   * @param {ApplicationV1Options & DialogV1Options} [config.options]  Additional rendering options passed to the Dialog
   */
  /**
   * A helper factory method to create simple confirmation dialog windows which consist of simple yes/no prompts.
   * If you require more flexibility, a custom Dialog instance is preferred.
   *
   * @param {DialogData & DialogV1ConfirmOptions} [config]    Dialog configuration options
   * @returns {Promise<any>}    A promise which resolves once the user makes a choice or closes the window
   *
   * @example Prompt the user with a yes or no question
   * ```js
   * let d = Dialog.confirm({
   *  title: "A Yes or No Question",
   *  content: "<p>Choose wisely.</p>",
   *  yes: () => console.log("You chose ... wisely"),
   *  no: () => console.log("You chose ... poorly"),
   *  defaultYes: false
   * });
   * ```
   */
  static confirm({
    title,
    content,
    yes,
    no,
    render,
    defaultYes,
    rejectClose,
    options,
  }?: DialogData & {
    /**
     * Callback function upon yes
     */
    yes?: Function | undefined
    /**
     * Callback function upon no
     */
    no?: Function | undefined
    /**
     * Make "yes" the default choice?
     */
    defaultYes?: boolean | undefined
    /**
     * Reject the Promise if the Dialog is closed without making a choice.
     */
    rejectClose?: boolean | undefined
  }): Promise<any>
  /**
   * @typedef DialogV1PromptOptions
   * @param {string} [label]              The label of the button
   * @param {Function} [callback]         A callback function to fire when the button is clicked
   * @param {boolean} [rejectClose=true]  Reject the promise if the dialog is closed without confirming the
   *                                      choice, otherwise resolve as null
   * @param {ApplicationV1Options & DialogV1Options} [config.options]  Additional rendering options passed to the Dialog
   */
  /**
   * A helper factory method to display a basic "prompt" style Dialog with a single button
   * @param {DialogData & DialogV1PromptOptions} [config]    Dialog configuration options
   * @returns {Promise<any>}    The returned value from the provided callback function, if any
   */
  static prompt({ title, content, label, callback, render, rejectClose, options }?: DialogData & any): Promise<any>
  /**
   * Wrap the Dialog with an enclosing Promise which resolves or rejects when the client makes a choice.
   * @param {DialogData} [data]        Data passed to the Dialog constructor.
   * @param {ApplicationV1Options & DialogV1Options} [options]  Options passed to the Dialog constructor.
   * @param {object} [renderOptions]   Options passed to the Dialog render call.
   * @returns {Promise<any>}           A Promise that resolves to the chosen result.
   */
  static wait(data?: DialogData, options?: ApplicationV1Options & DialogV1Options, renderOptions?: object): Promise<any>
  /**
   * @param {DialogData} data          An object of dialog data which configures how the modal window is rendered
   * @param {ApplicationV1Options & DialogV1Options} [options]  Dialog rendering options, see
   *                                                            {@link foundry.appv1.api.Application}.
   */
  constructor(data: DialogData, options?: ApplicationV1Options & DialogV1Options)
  data: DialogData
  /** @inheritdoc */
  getData(_options: any): {
    content: string
    buttons: object
  }
  /** @inheritdoc */
  activateListeners(html: any): void
  /**
   * Handle a keydown event while the dialog is active
   * @param {KeyboardEvent} event   The keydown event
   * @protected
   */
  protected _onKeyDown(event: KeyboardEvent): void | Promise<void>
  /**
   * Submit the Dialog by selecting one of its buttons.
   * @param {Object} button         The configuration of the chosen button
   * @param {PointerEvent} event    The originating click event
   */
  submit(button: Object, event: PointerEvent): void
  /** @inheritdoc */
  close(options?: object): Promise<void>
  #private
}
export type DialogV1Options = {
  /**
   * Whether to provide jQuery objects to callback functions (if true) or plain
   *   HTMLElement instances (if false). This is currently true by default but in the
   *   future will become false by default.
   */
  jQuery?: boolean | undefined
}
export type DialogV1Button = {
  /**
   * A Font Awesome icon for the button
   */
  icon: string
  /**
   * The label for the button
   */
  label: string
  /**
   * Whether the button is disabled
   */
  disabled: boolean
  /**
   * A callback function that fires when the button is clicked
   */
  callback?: ((arg0: jQuery) => any) | undefined
}
export type DialogData = {
  /**
   * The window title displayed in the dialog header
   */
  title: string
  /**
   * HTML content for the dialog form
   */
  content: string
  /**
   * The buttons which are displayed as action choices for the dialog
   */
  buttons: Record<string, DialogV1Button>
  /**
   * The name of the default button which should be triggered on Enter keypress
   */
  default?: string | undefined
  /**
   * A callback function invoked when the dialog is rendered
   */
  render?: ((arg0: jQuery) => any) | undefined
  /**
   * Common callback operations to perform when the dialog is closed
   */
  close?: ((arg0: jQuery) => any) | undefined
}
import type { ApplicationV1Options } from "./application-v1.mjs"
import Application from "./application-v1.mjs"
