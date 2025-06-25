import * as foundry from "../foundry/_module.js"

export interface DiceFulfillmentConfiguration {
  /**
   * Designate one of the methods to be used by default for dice fulfillment, if the user hasn't
   * specified otherwise. Leave this blank to use the configured randomUniform to generate die rolls.
   */
  defaultMethod: string
  /**
   * The die denominations available for configuration.
   */
  dice: Record<string, DiceFulfillmentDenomination>
  /**
   * The methods available for fulfillment.
   */
  methods: Record<string, DiceFulfillmentMethod>
}

export interface DiceFulfillmentDenomination {
  /**
   * An icon to display on the configuration sheet.
   */
  icon: string
  /**
   * The human-readable label for the die.
   */
  label: string
}

export interface DiceFulfillmentMethod {
  /**
   * A function to invoke to programmatically fulfil a given term for non- interactive
   * fulfillment methods.
   */
  handler?: DiceFulfillmentHandler
  /**
   * An icon to represent the fulfillment method.
   */
  icon?: string
  /**
   * Whether this method requires input from the user or if it is fulfilled entirely programmatically.
   */
  interactive?: boolean
  /**
   * The human-readable label for the fulfillment method.
   */
  label: string
  /**
   * A custom RollResolver implementation. If the only interactive methods the user has configured
   * are this method and manual, this resolver will be used to resolve interactive rolls, instead
   * of the default resolver. This resolver must therefore be capable of handling manual rolls.
   */
  resolver?: typeof foundry.applications.dice.RollResolver
}

/**
 * @param term The term being fulfilled.
 * @param options Additional options to configure fulfillment.
 */
export type DiceFulfillmentHandler = (
  term: foundry.dice.terms.DiceTerm,
  options?: object,
) => number | void | Promise<number | void>
