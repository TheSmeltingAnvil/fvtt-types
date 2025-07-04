import { RollOptions } from "foundry/dice/_module.js"

/**
 * An abstract class which represents a single token that can be used as part of a Roll formula.
 * Every portion of a Roll formula is parsed into a subclass of RollTerm in order for the Roll to be fully evaluated.
 */
export default abstract class RollTerm<TTermData extends RollTermData = RollTermData> {
  constructor(termData?: TTermData)

  /** An object of additional options which describes and modifies the term. */
  options: RollOptions

  /** An internal flag for whether the term has been evaluated */
  _evaluated: boolean

  /** Is this term intermediate, and should be evaluated first as part of the simplification process? */
  isIntermediate?: boolean

  /** A regular expression pattern which identifies optional term-level flavor text */
  static FLAVOR_REGEXP_STRING?: string

  /** A regular expression which identifies term-level flavor text */
  static FLAVOR_REGEXP: RegExp

  /** A regular expression used to match a term of this type */
  static REGEXP: RegExp

  /** An array of additional attributes which should be retained when the term is serialized */
  static SERIALIZE_ATTRIBUTES: string[]

  /* -------------------------------------------- */
  /*  RollTerm Attributes                         */
  /* -------------------------------------------- */

  /** A string representation of the formula expression for this RollTerm, prior to evaluation. */
  abstract get expression(): string

  /** A string representation of the formula, including optional flavor text. */
  get formula(): string

  /** A string or numeric representation of the final output for this term, after evaluation. */
  get total(): number | string | undefined

  /** Optional flavor text which modifies and describes this term. */
  get flavor(): string

  /** Whether this term is entirely deterministic or contains some randomness. */
  get isDeterministic(): boolean

  /* -------------------------------------------- */
  /*  RollTerm Methods                            */
  /* -------------------------------------------- */

  /**
   * Evaluate the term, processing its inputs and finalizing its total.
   * @param [options={}]             Options which modify how the RollTerm is evaluated
   * @param [options.minimize=false] Minimize the result, obtaining the smallest possible value.
   * @param [options.maximize=false] Maximize the result, obtaining the largest possible value.
   * @returns The evaluated RollTerm
   */
  evaluate({ minimize, maximize }?: { minimize?: boolean; maximize?: boolean }): Promise<Evaluated<this>>

  /**
   * Evaluate the term.
   * @param [options={}] Options which modify how the RollTerm is evaluated, see RollTerm#evaluate
   */
  protected _evaluate({ minimize, maximize }?: { minimize?: boolean; maximize?: boolean }): Promise<Evaluated<this>>

  /**
   * This method is temporarily factored out in order to provide different behaviors synchronous evaluation.
   * This will be removed in 0.10.x
   */
  protected _evaluateSync({ minimize, maximize }?: { minimize?: boolean; maximize?: boolean }): Evaluated<this>

  /* -------------------------------------------- */
  /*  Serialization and Loading                   */
  /* -------------------------------------------- */

  /**
   * Construct a RollTerm from a provided data object
   * @param data Provided data from an un-serialized term
   * @return The constructed RollTerm
   */
  static fromData<TTerm extends RollTerm>(this: AbstractConstructorOf<TTerm>, data: TermDataOf<TTerm>): TTerm

  /**
   * Define term-specific logic for how a de-serialized data object is restored as a functional RollTerm
   * @param data The de-serialized term data
   * @returns The re-constructed RollTerm object
   */
  protected static _fromData<D extends RollTermData, T extends RollTerm<D>>(this: ConstructorOf<T>, data: D): T

  /**
   * Reconstruct a RollTerm instance from a provided JSON string
   * @param json A serialized JSON representation of a DiceTerm
   * @return A reconstructed RollTerm from the provided JSON
   */
  static fromJSON<D extends RollTermData, T extends RollTerm<D>>(this: ConstructorOf<T>, json: string): T

  /**
   * Serialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
   * This method should return an object suitable for passing to the JSON.stringify function.
   */
  toJSON(): TTermData
}

export type Evaluated<T extends RollTerm> = T & {
  _evaluated: true
  total: NonNullable<T["total"]>
}

export type TermDataOf<TTerm extends RollTerm> = TTerm extends RollTerm<infer TData> ? TData : never

export interface RollTermData {
  /** The name of the {@link RollTerm} class with which this data should be constructed */
  class?: string
  /** Options modifying or describing the Roll */
  options?: RollOptions
  /** Has this term been evaluated? */
  evaluated?: boolean
}
