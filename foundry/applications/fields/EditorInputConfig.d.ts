import { FormInputConfig } from "../../data/_types.js"

export default interface EditorInputConfig extends FormInputConfig<string> {
  /** Default: `prosemirror` */
  engine?: string
  height?: number
  /** Default: `true` */
  editable?: boolean
  /** Default: `false` */
  button?: boolean
  /** Default: `false` */
  collaborate?: boolean
}
