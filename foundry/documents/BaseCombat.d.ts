import * as fields from "foundry/data/fields/_module.js"
import BaseUser from "./BaseUser.js"
import { DatabaseUpdateCallbackOptions } from "./abstract/ClientDocumentMixin.js"
import EmbeddedCollection from "foundry/abstract/EmbeddedCollection.js"
import { DocumentMetadata } from "foundry/abstract/Document.js"
import BaseScene from "./BaseScene.js"
import BaseCombatant from "./BaseCombatant.js"

/** The Combat document model. */
export default class BaseCombat extends foundry.abstract.Document<null, CombatSchema> {
  static override get metadata(): CombatMetadata

  static override defineSchema(): CombatSchema

  /* -------------------------------------------- */
  /*  Event Handlers                              */
  /* -------------------------------------------- */

  protected override _preUpdate(
    changed: DeepPartial<this["_source"]>,
    options: DatabaseUpdateCallbackOptions,
    user: BaseUser,
  ): Promise<boolean | void>
}

export default interface BaseCombat
  extends foundry.abstract.Document<null, CombatSchema>,
    fields.ModelPropsFromSchema<CombatSchema> {
  readonly combatants: EmbeddedCollection<BaseCombatant<this>>

  get documentName(): CombatMetadata["name"]
}

interface CombatMetadata extends DocumentMetadata {
  name: "Combat"
  collection: "combats"
  label: "DOCUMENT.Combat"
  embedded: {
    Combatant: "combatants"
  }
  isPrimary: true
}

type CombatSchema = {
  /** The _id which uniquely identifies this Combat document */
  _id: fields.DocumentIdField
  /** The _id of a Scene within which this Combat occurs */
  scene: fields.ForeignDocumentField<BaseScene>
  /** A Collection of Combatant embedded Documents */
  combatants: fields.EmbeddedCollectionField<BaseCombatant<BaseCombat>>
  /** Is the Combat encounter currently active? */
  active: fields.BooleanField
  /** The current round of the Combat encounter */
  round: fields.NumberField<number, number, true, false, true>
  /** The current turn in the Combat round */
  turn: fields.NumberField<number, number, true, true, true>
  /** The current sort order of this Combat relative to others in the same Scene */
  sort: fields.IntegerSortField
  /** An object of optional key/value flags */
  flags: fields.DocumentFlagsField
  /** An object of creation and access information */
  _stats: fields.DocumentStatsField
}

export type CombatSource = fields.SourceFromSchema<CombatSchema>
