import { DocumentMetadata, MetadataPermission } from "foundry/abstract/Document.js"
import { fields } from "foundry/data/_module.js"
import BaseUser from "./BaseUser.js"

/**
 * The Document definition for a Setting.
 * Defines the DataSchema and common behaviors for a Setting which are shared between both client and server.
 * @memberof documents
 *
 * @param data    Initial data from which to construct the Setting
 * @param context Construction context options
 */
export default class BaseSetting extends foundry.abstract.Document<null, SettingSchema> {
  /* -------------------------------------------- */
  /*  Model Configuration                         */
  /* -------------------------------------------- */

  static override get metadata(): SettingMetadata

  static override defineSchema(): SettingSchema

  static canUserCreate(user: BaseUser): boolean
}

export default interface BaseSetting
  extends foundry.abstract.Document<null, SettingSchema>,
    fields.ModelPropsFromSchema<SettingSchema> {
  get documentName(): SettingMetadata["name"]
}

interface SettingMetadata extends DocumentMetadata {
  name: "Setting"
  collection: "settings"
  label: "DOCUMENT.Setting"
  labelPlural: "DOCUMENT.Settings"
  permissions: {
    view: MetadataPermission
    create: "SETTINGS_MODIFY"
    update: "SETTINGS_MODIFY"
    delete: "SETTINGS_MODIFY"
  }
}

type SettingSchema = {
  _id: fields.DocumentIdField
  key: fields.StringField<string, string, true>
  value: fields.JSONField<NonNullable<JSONValue>, true, true, false>
  _stats: fields.DocumentStatsField
}

export type SettingSource = fields.SourceFromSchema<SettingSchema>
