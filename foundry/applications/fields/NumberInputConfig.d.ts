import { FormInputConfig } from "../../data/_types.js"

export default interface NumberInputConfig extends FormInputConfig<number> {
  min: number
  max: number
  step: number | "any"
}
