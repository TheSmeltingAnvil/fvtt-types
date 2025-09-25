/**
 * @import {ApplicationConfiguration} from "../_types.mjs";
 */
/**
 * @typedef DialogV2Button
 * @property {string} action                      The button action identifier.
 * @property {string} label                       The button label. Will be localized.
 * @property {string} [icon]                      FontAwesome icon classes.
 * @property {string} [class]                     CSS classes to apply to the button.
 * @property {Record<string, string>} [style]     CSS style to apply to the button.
 * @property {string} [type="submit"]             The button type.
 * @property {boolean} [disabled]                 Whether the button is disabled
 * @property {boolean} [default]                  Whether this button represents the default action to take if the user
 *                                                submits the form without pressing a button, i.e. with an Enter
 *                                                keypress.
 * @property {DialogV2ButtonCallback} [callback]  A function to invoke when the button is clicked. The value returned
 *                                                from this function will be used as the dialog's submitted value.
 *                                                Otherwise, the button's identifier is used.
 */
/**
 * @callback DialogV2ButtonCallback
 * @param {PointerEvent|SubmitEvent} event        The button click event, or a form submission event if the dialog was
 *                                                submitted via keyboard.
 * @param {HTMLButtonElement} button              If the form was submitted via keyboard, this will be the default
 *                                                button, otherwise the button that was clicked.
 * @param {DialogV2} dialog                       The DialogV2 instance.
 * @returns {Promise<any>}
 */
/**
 * @typedef DialogV2Configuration
 * @property {boolean} [modal]                    Modal dialogs prevent interaction with the rest of the UI until they
 *                                                are dismissed or submitted.
 * @property {DialogV2Button[]} buttons           Button configuration.
 * @property {string|HTMLDivElement} [content]    The dialog content: a HTML string or a <div> element. If string,
 *                                                the content is cleaned with {@link foundry.utils.cleanHTML}.
 *                                                Otherwise, the content is not cleaned.
 * @property {DialogV2SubmitCallback} [submit]    A function to invoke when the dialog is submitted. This will not be
 *                                                called if the dialog is dismissed.
 */
/**
 * @callback DialogV2RenderCallback
 * @param {Event} event                           The render event.
 * @param {DialogV2} dialog                       The DialogV2 instance.
 */
/**
 * @callback DialogV2CloseCallback
 * @param {Event} event                           The close event.
 * @param {DialogV2} dialog                       The DialogV2 instance.
 */
/**
 * @callback DialogV2SubmitCallback
 * @param {any} result                            Either the identifier of the button that was clicked to submit the
 *                                                dialog, or the result returned by that button's callback.
 * @param {DialogV2} dialog                       The DialogV2 instance.
 * @returns {Promise<void>}
 */
/**
 * @typedef DialogV2WaitOptions
 * @property {DialogV2RenderCallback} [render] A synchronous function to invoke whenever the dialog is rendered.
 * @property {DialogV2CloseCallback} [close]   A synchronous function to invoke when the dialog is closed under any
 *                                             circumstances.
 * @property {boolean} [rejectClose=false]     Throw a Promise rejection if the dialog is dismissed.
 */
/**
 * A lightweight Application that renders a dialog containing a form with arbitrary content, and some buttons.
 * @extends {ApplicationV2<ApplicationConfiguration & DialogV2Configuration>}
 *
 * @example Prompt the user to confirm an action.
 * ```js
 * const proceed = await foundry.applications.api.DialogV2.confirm({
 *   content: "Are you sure?",
 *   rejectClose: false,
 *   modal: true
 * });
 * if ( proceed ) console.log("Proceed.");
 * else console.log("Do not proceed.");
 * ```
 *
 * @example Prompt the user for some input.
 * ```js
 * let guess;
 * try {
 *   guess = await foundry.applications.api.DialogV2.prompt({
 *     window: { title: "Guess a number between 1 and 10" },
 *     content: '<input name="guess" type="number" min="1" max="10" step="1" autofocus>',
 *     ok: {
 *       label: "Submit Guess",
 *       callback: (event, button, dialog) => button.form.elements.guess.valueAsNumber
 *     }
 *   });
 * } catch {
 *   console.log("User did not make a guess.");
 *   return;
 * }
 * const n = Math.ceil(CONFIG.Dice.randomUniform() * 10);
 * if ( n === guess ) console.log("User guessed correctly.");
 * else console.log("User guessed incorrectly.");
 * ```
 *
 * @example A custom dialog.
 * ```js
 * new foundry.applications.api.DialogV2({
 *   window: { title: "Choose an option" },
 *   content: `
 *     <label><input type="radio" name="choice" value="one" checked> Option 1</label>
 *     <label><input type="radio" name="choice" value="two"> Option 2</label>
 *     <label><input type="radio" name="choice" value="three"> Options 3</label>
 *   `,
 *   buttons: [{
 *     action: "choice",
 *     label: "Make Choice",
 *     default: true,
 *     callback: (event, button, dialog) => button.form.elements.choice.value
 *   }, {
 *     action: "all",
 *     label: "Take All"
 *   }],
 *   submit: result => {
 *     if ( result === "all" ) console.log("User picked all options.");
 *     else console.log(`User picked option: ${result}`);
 *   }
 * }).render({ force: true });
 * ```
 */
export default class DialogV2 extends ApplicationV2<
  ApplicationConfiguration & DialogV2Configuration,
  foundry.applications.types.ApplicationRenderOptions
> {
  /** @inheritDoc */
  static DEFAULT_OPTIONS: {
    id: string
    classes: string[]
    tag: string
    form: {
      closeOnSubmit: boolean
    }
    window: {
      frame: boolean
      positioned: boolean
      minimizable: boolean
    }
  }
  /**
   * Redirect all clicks of buttons with action specifications to the submit handler.
   * @this {DialogV2}
   * @param {PointerEvent} event        The originating click event.
   * @param {HTMLButtonElement} target  The button element that was clicked.
   * @protected
   */
  protected static _onClickButton(this: DialogV2, event: PointerEvent, target: HTMLButtonElement): void
  /**
   * A utility helper to generate a dialog with yes and no buttons.
   * @param {Partial<ApplicationConfiguration & DialogV2Configuration & DialogV2WaitOptions>} [config]
   * @param {Partial<DialogV2Button>} [config.yes] Options to overwrite the default yes button configuration.
   * @param {Partial<DialogV2Button>} [config.no]  Options to overwrite the default no button configuration.
   * @returns {Promise<any>}                Resolves to true if the yes button was pressed, or false if the no button
   *                                        was pressed. If additional buttons were provided, the Promise resolves to
   *                                        the identifier of the one that was pressed, or the value returned by its
   *                                        callback. If the dialog was dismissed, and rejectClose is false, the
   *                                        Promise resolves to null.
   */
  static confirm({
    // @ts-expect-error -- IGNORE --
    yes,
    // @ts-expect-error -- IGNORE --
    no,
    ...config
  }?: Partial<ApplicationConfiguration & DialogV2Configuration & DialogV2WaitOptions>): Promise<any>
  /**
   * A utility helper to generate a dialog with a single confirmation button.
   * @param {Partial<ApplicationConfiguration & DialogV2Configuration & DialogV2WaitOptions>} [config]
   * @param {Partial<DialogV2Button>} [config.ok]   Options to overwrite the default confirmation button configuration.
   * @returns {Promise<any>}                        Resolves to the identifier of the button used to submit the dialog,
   *                                                or the value returned by that button's callback. If additional
   *                                                buttons were provided, the Promise resolves to the identifier of
   *                                                the one that was pressed, or the value returned by its callback.
   *                                                If the dialog was dismissed, and rejectClose is false, the Promise
   *                                                resolves to null.
   */
  static prompt({
    // @ts-expect-error -- IGNORE --
    ok,
    ...config
  }?: Partial<ApplicationConfiguration & DialogV2Configuration & DialogV2WaitOptions>): Promise<any>
  /**
   * A utility helper to generate a dialog for user input.
   * @param {Partial<ApplicationConfiguration & DialogV2Configuration & DialogV2WaitOptions>} [config]
   * @param {Partial<DialogV2Button>} [config.ok]   Options to overwrite the default confirmation button configuration.
   * @returns {Promise<any>}                        Resolves to the data of the form if the ok button was pressed,
   *                                                or the value returned by that button's callback. If additional
   *                                                buttons were provided, the Promise resolves to the identifier of
   *                                                the one that was pressed, or the value returned by its callback.
   *                                                If the dialog was dismissed, and rejectClose is false, the Promise
   *                                                resolves to null.
   */
  static input({
    // @ts-expect-error -- IGNORE --
    ok,
    ...config
  }?: Partial<ApplicationConfiguration & DialogV2Configuration & DialogV2WaitOptions>): Promise<any>
  /**
   * Spawn a dialog and wait for it to be dismissed or submitted.
   * @param {Partial<ApplicationConfiguration & DialogV2Configuration & DialogV2WaitOptions>} [config]
   * @returns {Promise<any>}                          Resolves to the identifier of the button used to submit the
   *                                                  dialog, or the value returned by that button's callback. If the
   *                                                  dialog was dismissed, and rejectClose is false, the Promise
   *                                                  resolves to null.
   */
  static wait({
    rejectClose,
    close,
    render,
    ...config
  }?: Partial<ApplicationConfiguration & DialogV2Configuration & DialogV2WaitOptions>): Promise<any>
  /**
   * Present an asynchronous Dialog query to a specific User for response.
   * @param {User|string} user                A User instance or a User id
   * @param {"prompt"|"confirm"|"input"|"wait"} type  The type of Dialog to present
   * @param {object} [config]                 Dialog configuration forwarded on to the Dialog.prompt, Dialog.confirm,
   *                                          Dialog.input, or Dialog.wait function depending on the query type.
   *                                          Callback options are not supported.
   * @returns {Promise<any|null>}             The query response or null if no response was provided
   *
   * @see {@link DialogV2.prompt}
   * @see {@link DialogV2.confirm}
   * @see {@link DialogV2.input}
   * @see {@link DialogV2.wait}
   */
  static query(user: User | string, type: "prompt" | "confirm" | "input" | "wait", config?: object): Promise<any | null>
  /**
   * The dialog query handler.
   * @type {({type, config}: {type: "prompt"|"confirm"|"input"|"wait"; config: object}) => Promise<any>}
   * @internal
   */
  static _handleQuery: ({
    type,
    config,
  }: {
    type: "prompt" | "confirm" | "input" | "wait"
    config: object
  }) => Promise<any>
  constructor(options?: Partial<ApplicationConfiguration & DialogV2Configuration> | undefined)
  /** @inheritDoc */
  _initializeApplicationOptions(options: any): any
  /** @override */
  override _renderHTML(_context: any, _options: any): Promise<HTMLFormElement>
  /**
   * Render configured buttons.
   * @returns {string}
   * @protected
   */
  protected _renderButtons(): string
  /**
   * Handle submitting the dialog.
   * @param {HTMLButtonElement} target        The button that was clicked or the default button.
   * @param {PointerEvent|SubmitEvent} event  The triggering event.
   * @returns {Promise<DialogV2>}
   * @protected
   */
  protected _onSubmit(target: HTMLButtonElement, event: PointerEvent | SubmitEvent): Promise<DialogV2>
  /** @override */
  override _onFirstRender(_context: any, _options: any): Promise<void>
  /** @override */
  override _replaceHTML(result: any, content: any, _options: any): void
  /**
   * Handle keypresses within the dialog.
   * @param {KeyboardEvent} event  The triggering event.
   * @protected
   */
  protected _onKeyDown(event: KeyboardEvent): void
}
export type DialogV2Button = {
  /**
   * The button action identifier.
   */
  action: string
  /**
   * The button label. Will be localized.
   */
  label: string
  /**
   * FontAwesome icon classes.
   */
  icon?: string | undefined
  /**
   * CSS classes to apply to the button.
   */
  class?: string | undefined
  /**
   * CSS style to apply to the button.
   */
  style?: Record<string, string> | undefined
  /**
   * The button type.
   */
  type?: string | undefined
  /**
   * Whether the button is disabled
   */
  disabled?: boolean | undefined
  /**
   * Whether this button represents the default action to take if the user
   *                   submits the form without pressing a button, i.e. with an Enter
   *                   keypress.
   */
  default?: boolean | undefined
  /**
   * A function to invoke when the button is clicked. The value returned
   *   from this function will be used as the dialog's submitted value.
   *   Otherwise, the button's identifier is used.
   */
  callback?: DialogV2ButtonCallback | undefined
}
export type DialogV2ButtonCallback = (
  event: PointerEvent | SubmitEvent,
  button: HTMLButtonElement,
  dialog: DialogV2,
) => Promise<any>
export type DialogV2Configuration = {
  /**
   * Modal dialogs prevent interaction with the rest of the UI until they
   *                     are dismissed or submitted.
   */
  modal?: boolean | undefined
  /**
   * Button configuration.
   */
  buttons: DialogV2Button[]
  /**
   * The dialog content: a HTML string or a <div> element. If string,
   *     the content is cleaned with {@link foundry.utils.cleanHTML}.
   *     Otherwise, the content is not cleaned.
   */
  content?: string | HTMLDivElement | undefined
  /**
   * A function to invoke when the dialog is submitted. This will not be
   *     called if the dialog is dismissed.
   */
  submit?: DialogV2SubmitCallback | undefined
}
export type DialogV2RenderCallback = (event: Event, dialog: DialogV2) => any
export type DialogV2CloseCallback = (event: Event, dialog: DialogV2) => any
export type DialogV2SubmitCallback = (result: any, dialog: DialogV2) => Promise<void>
export type DialogV2WaitOptions = {
  /**
   * A synchronous function to invoke whenever the dialog is rendered.
   */
  render?: DialogV2RenderCallback | undefined
  /**
   * A synchronous function to invoke when the dialog is closed under any
   *    circumstances.
   */
  close?: DialogV2CloseCallback | undefined
  /**
   * Throw a Promise rejection if the dialog is dismissed.
   */
  rejectClose?: boolean | undefined
}
import User from "@client/documents/user.mjs"
import type { ApplicationConfiguration } from "../_types.mjs"
import ApplicationV2 from "./application.mjs"
