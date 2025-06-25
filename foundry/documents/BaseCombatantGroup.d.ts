import { DocumentMetadata } from "foundry/abstract/Document.js"
import { fields } from "foundry/data/_module.js"
import BaseCombat from "./BaseCombat.js"

/**
 * A Document that represents a grouping of individual Combatants in a Combat.
 * Defines the DataSchema and common behaviors for a CombatantGroup which are shared between both client and server.
 */
export default class BaseCombatantGroup<TParent extends BaseCombat | null = BaseCombat | null> extends foundry.abstract
  .Document<TParent, CombatantGroupSchema> {
  /* -------------------------------------------- */
  /*  Model Configuration                         */
  /* -------------------------------------------- */

  static override metadata: Readonly<CombatantGroupMetadata>

  static override defineSchema(): CombatantGroupSchema
}

export default interface BaseCombatantGroup<TParent extends BaseCombat | null = BaseCombat | null>
  extends foundry.abstract.Document<TParent, CombatantGroupSchema>,
    fields.ModelPropsFromSchema<CombatantGroupSchema> {}

declare interface CombatantGroupMetadata extends DocumentMetadata {
  name: "CombatantGroup"
  collection: "groups"
  label: "DOCUMENT.CombatantGroup"
  labelPlural: "DOCUMENT.CombatantGroups"
  isEmbedded: true
  hasTypeData: true
  schemaVersion: "13.337"
}

export type CombatantGroupSchema = {
  _id: fields.DocumentIdField
  type: fields.DocumentTypeField<"base">
  system: fields.TypeDataField
  name: fields.StringField
  img: fields.FilePathField<foundry.abstract.ImageFilePath>
  initiative: fields.NumberField<number, number, true>
  ownership: fields.DocumentOwnershipField
  flags: fields.DocumentFlagsField
  _stats: fields.DocumentStatsField
}
