import AbstractFormInputElement from "./AbstractFormInputElement.js"

/**
 * An abstract base class designed to standardize the behavior for a multi-select UI component.
 * Multi-select components return an array of values as part of form submission.
 * Different implementations may provide different experiences around how inputs are presented to the user.
 */
export default abstract class AbstractMultiSelectElement extends AbstractFormInputElement<string[], string[]> {
  /** Predefined <option> and <optgroup> elements which were defined in the original HTML. */
  protected _options: (HTMLOptionElement | HTMLOptGroupElement)[]

  /** An object which maps option values to displayed labels. */
  protected _choices: Record<string, string>

  /** Preserve existing <option> and <optgroup> elements which are defined in the original HTML. */
  protected _initialize(): void

  /**
   * Mark a choice as selected.
   * @param value      The value to add to the chosen set
   */
  select(value: string): void

  /**
   * Mark a choice as un-selected.
   * @param value      The value to delete from the chosen set
   */
  unselect(value: string): void

  /* -------------------------------------------- */
  /*  Form Handling                               */
  /* -------------------------------------------- */

  override _getValue(): string[]

  override _setValue(value: string[]): void
}
