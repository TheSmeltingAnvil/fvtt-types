import { FormInputConfig } from "../../data/_types.js"

export default interface TextAreaInputConfig extends FormInputConfig<string> {
  rows: number
}
