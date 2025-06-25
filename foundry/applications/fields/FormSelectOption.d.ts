export default interface FormSelectOption {
  value: string
  label: string
  /** An optional `optgoup` for this option */
  group?: string
  disabled?: boolean
  selected?: boolean
}
