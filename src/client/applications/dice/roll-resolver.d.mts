/**
 * @typedef DiceTermFulfillmentDescriptor
 * @property {string} id        A unique identifier for the term.
 * @property {DiceTerm} term    The term.
 * @property {string} method    The fulfillment method.
 * @property {boolean} [isNew]  Was the term newly-added to this resolver?
 */
/**
 * An application responsible for handling unfulfilled dice terms in a roll.
 * @extends {ApplicationV2<ApplicationConfiguration, ApplicationRenderOptions>}
 * @mixes HandlebarsApplication
 */
export default class RollResolver extends ApplicationV2<ApplicationConfiguration, ApplicationRenderOptions> {
  /** @inheritDoc */
  static DEFAULT_OPTIONS: {
    id: string
    tag: string
    classes: string[]
    window: {
      title: string
    }
    position: {
      width: number
    }
    form: {
      submitOnChange: boolean
      closeOnSubmit: boolean
      handler: typeof RollResolver._fulfillRoll
    }
  }
  /** @override */
  // @ts-expect-error -- IGNORE --
  static override PARTS: {
    form: {
      id: string
      template: string
    }
  }
  /**
   * Update the Roll instance with the fulfilled results.
   * @this {RollResolver}
   * @param {SubmitEvent} event          The originating form submission event.
   * @param {HTMLFormElement} form       The form element that was submitted.
   * @param {FormDataExtended} formData  Processed data for the submitted form.
   * @returns {Promise<void>}
   * @protected
   */
  protected static _fulfillRoll(
    this: RollResolver,
    event: SubmitEvent,
    form: HTMLFormElement,
    formData: FormDataExtended,
  ): Promise<void>
  constructor(roll: any, options?: object)
  /**
   * A collection of fulfillable dice terms.
   * @type {Map<string, DiceTermFulfillmentDescriptor>}
   */
  get fulfillable(): Map<string, DiceTermFulfillmentDescriptor>
  /**
   * The roll being resolved.
   * @type {Roll}
   */
  get roll(): Roll
  /**
   * Identify any terms in this Roll that should be fulfilled externally, and prompt the user to do so.
   * @returns {Promise<void>}  Returns a Promise that resolves when the first pass of fulfillment is complete.
   */
  awaitFulfillment(): Promise<void>
  /**
   * Register a fulfilled die roll.
   * @param {string} method        The method used for fulfillment.
   * @param {string} denomination  The denomination of the fulfilled die.
   * @param {number} result        The rolled number.
   * @returns {boolean}            Whether the result was consumed.
   */
  registerResult(method: string, denomination: string, result: number): boolean
  /** @inheritDoc */
  close(options?: object): Promise<this>
  /** @inheritDoc */
  // @ts-expect-error -- IGNORE --
  _prepareContext(_options: any): Promise<{
    formula: string
    groups: object
  }>
  /** @inheritDoc */
  _onSubmitForm(formConfig: any, event: any): Promise<void>
  /**
   * Handle prompting for a single extra result from a term.
   * @param {DiceTerm} term  The term.
   * @param {string} method  The method used to obtain the result.
   * @param {object} [options]
   * @param {boolean} [options.reroll=false]
   * @param {boolean} [options.explode=false]
   * @returns {Promise<number|void>}
   */
  resolveResult(
    term: DiceTerm,
    method: string,
    {
      reroll,
      explode,
    }?: {
      reroll?: boolean | undefined
      explode?: boolean | undefined
    },
  ): Promise<number | void>
  /**
   * Add a new term to the resolver.
   * @param {DiceTerm} term    The term.
   * @returns {Promise<void>}  Returns a Promise that resolves when the term's results have been externally fulfilled.
   */
  addTerm(term: DiceTerm): Promise<void>
  /**
   * Check if all rolls have been fulfilled.
   * @protected
   */
  protected _checkDone(): void
  /**
   * Toggle the state of the submit button.
   * @param {boolean} enabled  Whether the button is enabled.
   * @protected
   */
  protected _toggleSubmission(enabled: boolean): void
  #private
}
export type DiceTermFulfillmentDescriptor = {
  /**
   * A unique identifier for the term.
   */
  id: string
  /**
   * The term.
   */
  term: DiceTerm
  /**
   * The fulfillment method.
   */
  method: string
  /**
   * Was the term newly-added to this resolver?
   */
  isNew?: boolean | undefined
}
import DiceTerm from "@client/dice/terms/dice.mjs"
import Roll from "../../dice/roll.mjs"
import type { ApplicationConfiguration, ApplicationRenderOptions } from "../_types.d.mts"
import ApplicationV2 from "../api/application.mjs"
import FormDataExtended from "../ux/form-data-extended.mjs"
