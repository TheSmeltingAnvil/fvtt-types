import { SelectInputConfig } from "./_module.js"

export type MultiSelectInputConfig = Omit<SelectInputConfig, "blank"> & {
  /** Creates a multi-checkbox element instead */
  type?: "checkboxes"
  /** The currently selected values */
  value?: string[]
}
