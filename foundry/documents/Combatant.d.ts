import CombatantConfig from "foundry/applications/sheets/CombatantConfig.js"
import Combat from "./Combat.js"
import TokenDocument from "./TokenDocument.js"
import BaseUser from "./BaseUser.js"
import { DocumentOwnershipLevel, DocumentOwnershipString } from "const/types.js"
import { ClientDocument, ClientDocumentStatic } from "./abstract/ClientDocumentMixin.js"
import BaseCombatant from "./BaseCombatant.js"
import { dice } from "foundry/_module.js"

interface ClientBaseCombatantStatic extends Omit<typeof BaseCombatant, "new">, ClientDocumentStatic {}

declare const ClientBaseCombatant: {
  new <TParent extends Combat | null>(...args: any): BaseCombatant<TParent> & ClientDocument<TParent>
} & ClientBaseCombatantStatic

type ClientBaseCombatant<TParent extends Combat | null> = InstanceType<typeof ClientBaseCombatant<TParent>>

/**
 * The client-side Combatant document which extends the common BaseCombatant model.
 *
 * @see {@link Combat}                  The Combat document which contains Combatant embedded documents
 * @see {@link CombatantConfig}         The application which configures a Combatant.
 */
export default class Combatant<
  TParent extends Combat | null = Combat | null,
  TTokenDocument extends TokenDocument | null = TokenDocument | null,
> extends ClientBaseCombatant<TParent> {
  /** The current value of the special tracked resource which pertains to this Combatant */
  resource: { value: number } | null

  /* -------------------------------------------- */
  /*  Properties                                  */
  /* -------------------------------------------- */

  /**
   * This is treated as a non-player combatant if it has no associated actor and no player users who can control
   * it
   */
  get isNPC(): boolean

  override get isOwner(): boolean

  /** Is this Combatant entry currently visible in the Combat Tracker? */
  get isVisible(): boolean

  /** A reference to the Actor document which this Combatant represents, if any */
  get actor(): NonNullable<TTokenDocument>["actor"]

  /** A reference to the Token document which this Combatant represents, if any */
  get token(): TTokenDocument

  /** An array of User documents who have ownership of this Document */
  get players(): User[]

  /** Has this combatant been marked as defeated? */
  get isDefeated(): boolean

  /* -------------------------------------------- */
  /*  Methods                                     */
  /* -------------------------------------------- */

  override testUserPermission(
    user: BaseUser,
    permission: DocumentOwnershipString | DocumentOwnershipLevel,
    { exact }?: { exact?: boolean },
  ): boolean

  /**
   * Get a Roll object which represents the initiative roll for this Combatant.
   * @param formula An explicit Roll formula to use for the combatant.
   * @return The Roll instance to use for the combatant.
   */
  getInitiativeRoll(formula: string): Roll

  /**
   * Roll initiative for this particular combatant.
   * @param [formula] A dice formula which overrides the default for this Combatant.
   * @return The Roll instance to use for the combatant.
   */
  rollInitiative(formula: string): dice.Rolled<Roll>

  override prepareDerivedData(): void

  /** Update the value of the tracked resource for this Combatant. */
  updateResource(): { value: number } | null

  /**
   * Acquire the default dice formula which should be used to roll initiative for this combatant.
   * Modules or systems could choose to override or extend this to accommodate special situations.
   * @return The initiative formula to use for this combatant.
   */
  _getInitiativeFormula(): string
}

export default interface Combatant<TParent extends Combat | null> extends ClientBaseCombatant<TParent> {
  get sheet(): CombatantConfig
}
