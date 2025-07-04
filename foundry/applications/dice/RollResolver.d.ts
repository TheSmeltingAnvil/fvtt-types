import * as terms from "foundry/dice/terms/_module.js"
import * as types from "foundry/applications/_types.js"
import * as api from "foundry/applications/api/_module.js"

export interface DiceTermFulfillmentDescriptor {
  /** A unique identifier for the term. */
  id: string
  /** The term. */
  term: terms.DiceTerm
  /** The fulfillment method. */
  method: string
  /** Was the term newly-added to this resolver? */
  isNew?: boolean
}

/**
 * An application responsible for handling unfulfilled dice terms in a roll.
 */
export default class RollResolver extends api.HandlebarsApplicationMixin(api.ApplicationV2) {
  constructor(roll: Roll, options?: DeepPartial<types.ApplicationConfiguration>)

  static override DEFAULT_OPTIONS: DeepPartial<types.ApplicationConfiguration>

  static PARTS: Record<string, api.HandlebarsTemplatePart>

  /**
   * A collection of fulfillable dice terms.
   */
  get fulfillable(): Map<string, DiceTermFulfillmentDescriptor>

  /**
   * The roll being resolved.
   */
  get roll(): Roll

  /**
   * Identify any terms in this Roll that should be fulfilled externally, and prompt the user to do so.
   * @returns Returns a Promise that resolves when the first pass of fulfillment is complete.
   */
  awaitFulfillment(): Promise<void>

  /**
   * Register a fulfilled die roll.
   * @param method The method used for fulfillment.
   * @param denomination The denomination of the fulfilled die.
   * @param result The rolled number.
   * @returns Whether the result was consumed.
   */
  registerResult(method: string, denomination: string, result: number): boolean

  override close(options?: types.ApplicationClosingOptions): Promise<this>

  protected override _prepareContext(): Promise<types.ApplicationRenderContext>

  protected override _onSubmitForm(formConfig: types.ApplicationFormConfiguration, event: SubmitEvent): Promise<void>

  /**
   * Handle prompting for a single extra result from a term.
   * @param term The term.
   * @param method The method used to obtain the result.
   */
  resolveResult(
    term: terms.DiceTerm,
    method: string,
    options?: { reroll?: boolean; explode?: boolean },
  ): Promise<number | void>

  /**
   * Update the Roll instance with the fulfilled results.
   * @param event The originating form submission event.
   * @param form The form element that was submitted.
   * @param formData Processed data for the submitted form.
   */
  protected static _fulfillRoll(
    this: RollResolver,
    event: SubmitEvent,
    form: HTMLFormElement,
    formData: foundry.applications.ux.FormDataExtended,
  ): Promise<void>

  /**
   * Add a new term to the resolver.
   * @param term The term.
   * @returns Returns a Promise that resolves when the term's results have been externally fulfilled.
   */
  addTerm(term: terms.DiceTerm): Promise<void>

  /**
   * Check if all rolls have been fulfilled.
   */
  protected _checkDone(): void

  /**
   * Toggle the state of the submit button.
   * @param enabled Whether the button is enabled.
   */
  protected _toggleSubmission(enabled: boolean): void
}
