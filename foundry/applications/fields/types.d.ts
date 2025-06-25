import { FormGroupConfig, FormInputConfig } from "../../data/_types.js"

export type CustomFormGroup = (field: foundry.data.fields.DataField, groupConfig: FormGroupConfig) => HTMLDivElement

export type CustomFormInput = (
  field: foundry.data.fields.DataField,
  config: FormInputConfig,
) => HTMLElement | HTMLCollection
