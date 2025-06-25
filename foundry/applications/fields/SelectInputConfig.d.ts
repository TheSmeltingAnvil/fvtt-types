import FormSelectOption from "./FormSelectOption.js"

export default interface SelectInputConfig {
  /** The name of the form element */
  name: string
  /** The select options */
  options: FormSelectOption[]
  /**
   * An option to control the order and display of optgroup elements. The order of
   *  strings defines the displayed order of optgroup elements.
   *  A blank string may be used to define the position of ungrouped options.
   *  If not defined, the order of groups corresponds to the order of options.
   */
  groups?: string[]
  /** Adds a blank option with the `blank` value as the label */
  blank?: string
  /** An alternative value key of the object passed to the options array */
  valueAttr?: string
  /** An alternative label key of the object passed to the options array */
  labelAttr?: string
  /** Localize value labels. Default: `false` */
  localize?: boolean
  /** Sort options alphabetically by label within groups. Default: `false` */
  sort?: boolean
}
