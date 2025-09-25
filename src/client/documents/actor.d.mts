/**
 * @import EmbeddedCollection from "@common/abstract/embedded-collection.mjs";
 * @import Token from "@client/canvas/placeables/token.mjs";
 * @import Combat from "./combat.mjs";
 * @import Scene from "./scene.mjs";
 * @import TokenDocument from "./token.mjs";
 * @import ActiveEffect from "./active-effect.mjs";
 * @import Item from "./item.mjs";
 */
/**
 * The client-side Actor document which extends the common BaseActor model.
 *
 * ### Hook Events
 * - {@link hookEvents.applyCompendiumArt}
 * - {@link hookEvents.modifyTokenAttribute}
 *
 * @extends BaseActor
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.collections.Actors}: The world-level collection of Actor documents
 * @see {@link foundry.applications.sheets.ActorSheet}: The Actor configuration application
 *
 * @example Create a new Actor
 * ```js
 * let actor = await Actor.implementation.create({
 *   name: "New Test Actor",
 *   type: "character",
 *   img: "artwork/character-profile.jpg"
 * });
 * ```
 *
 * @example Retrieve an existing Actor
 * ```js
 * let actor = game.actors.get(actorId);
 * ```
 */
export default class Actor extends BaseActor {
  /** @inheritDoc */
  _configure(options?: object): void
  /** @inheritDoc */
  _initializeSource(source: any, options?: object): any
  /**
   * An object that tracks which tracks the changes to the data model which were applied by active effects
   * @type {object}
   */
  overrides: object
  /**
   * The statuses that are applied to this actor by active effects
   * @type {Set<string>}
   */
  statuses: Set<string>
  /**
   * Provide a thumbnail image path used to represent this document.
   * @type {string}
   */
  get thumbnail(): string
  /**
   * A convenience getter to an object that organizes all embedded Item instances by subtype. The object is cached and
   * lazily re-computed as needed.
   * @type {Record<string, Item[]>}
   * @see {@link foundry.abstract.EmbeddedCollection#documentsByType}
   */
  get itemTypes(): Record<string, Item[]>
  /**
   * Test whether an Actor document is a synthetic representation of a Token (if true) or a full Document (if false)
   * @type {boolean}
   */
  get isToken(): boolean
  /**
   * Retrieve the list of ActiveEffects that are currently applied to this Actor.
   * @type {ActiveEffect[]}
   */
  get appliedEffects(): ActiveEffect[]
  /**
   * An array of ActiveEffect instances which are present on the Actor which have a limited duration.
   * @type {ActiveEffect[]}
   */
  get temporaryEffects(): ActiveEffect[]
  /**
   * Return a reference to the TokenDocument which owns this Actor as a synthetic override
   * @type {TokenDocument|null}
   */
  get token(): TokenDocument | null
  /**
   * Whether the Actor has at least one Combatant in the active Combat that represents it.
   * @returns {boolean}
   */
  get inCombat(): boolean
  /** @inheritDoc */
  clone(
    data: any,
    context: any,
  ):
    | foundry.abstract.Document<object, foundry.abstract.types.DocumentConstructionContext>
    | Promise<foundry.abstract.Document<object, foundry.abstract.types.DocumentConstructionContext>>
  /**
   * Apply any transformations to the Actor data which are caused by ActiveEffects.
   */
  applyActiveEffects(): void
  /**
   * Retrieve an Array of active tokens which represent this Actor in the current canvas Scene.
   * If the canvas is not currently active, or there are no linked actors, the returned Array will be empty.
   * If the Actor is a synthetic token actor, only the exact Token which it represents will be returned.
   *
   * @param {boolean} [linked=false]    Limit results to Tokens which are linked to the Actor. Otherwise, return all
   *                                    Tokens even those which are not linked.
   * @param {boolean} [document=false]  Return the Document instance rather than the PlaceableObject
   * @returns {Array<TokenDocument|Token>} An array of Token instances in the current Scene which reference this Actor.
   */
  getActiveTokens(linked?: boolean, document?: boolean): Array<TokenDocument | Token>
  /**
   * Get all ActiveEffects that may apply to this Actor.
   * If CONFIG.ActiveEffect.legacyTransferral is true, this is equivalent to actor.effects.contents.
   * If CONFIG.ActiveEffect.legacyTransferral is false, this will also return all the transferred ActiveEffects on any
   * of the Actor's owned Items.
   * @yields {ActiveEffect}
   * @returns {Generator<ActiveEffect, void, void>}
   */
  allApplicableEffects(): Generator<ActiveEffect, void, void>
  /**
   * Return a data object which defines the data schema against which dice rolls can be evaluated.
   * By default, this is directly the Actor's system data, but systems may extend this to include additional properties.
   * If overriding or extending this method to add additional properties, care must be taken not to mutate the original
   * object.
   * @returns {object}
   */
  getRollData(): object
  /**
   * Create a new Token document, not yet saved to the database, which represents the Actor.
   * @param {object} [data={}]            Additional data, such as x, y, rotation, etc. for the created token data
   * @param {object} [options={}]         The options passed to the TokenDocument constructor
   * @returns {Promise<TokenDocument>}    The created TokenDocument instance
   */
  getTokenDocument(data?: object, options?: object): Promise<TokenDocument>
  /**
   * Get an Array of Token images which could represent this Actor
   * @returns {Promise<string[]>}
   */
  getTokenImages(): Promise<string[]>
  /**
   * Handle how changes to a Token attribute bar are applied to the Actor.
   * This allows for game systems to override this behavior and deploy special logic.
   * @param {string} attribute    The attribute path
   * @param {number} value        The target attribute value
   * @param {boolean} isDelta     Whether the number represents a relative change (true) or an absolute change (false)
   * @param {boolean} isBar       Whether the new value is part of an attribute bar, or just a direct value
   * @returns {Promise<Actor>}    The updated Actor document
   */
  modifyTokenAttribute(attribute: string, value: number, isDelta?: boolean, isBar?: boolean): Promise<Actor>
  /** @inheritDoc */
  prepareData(): void
  /** @inheritDoc */
  prepareEmbeddedDocuments(): void
  /**
   * Roll initiative for all Combatants in the currently active Combat encounter which are associated with this Actor.
   * If viewing a full Actor document, all Tokens which map to that actor will be targeted for initiative rolls.
   * If viewing a synthetic Token actor, only that particular Token will be targeted for an initiative roll.
   *
   * @param {object} options                              Configuration for how initiative for this Actor is rolled.
   * @param {boolean} [options.createCombatants=false]    Create new Combatant entries for Tokens associated with
   *                                                      this actor.
   * @param {boolean} [options.rerollInitiative=false]    Re-roll the initiative for this Actor if it has already
   *                                                      been rolled.
   * @param {object} [options.initiativeOptions={}]       Additional options passed to the Combat#rollInitiative method.
   * @returns {Promise<Combat|null>}                      A promise which resolves to the Combat document once rolls
   *                                                      are complete.
   */
  rollInitiative({
    createCombatants,
    rerollInitiative,
    initiativeOptions,
  }?: {
    createCombatants?: boolean | undefined
    rerollInitiative?: boolean | undefined
    initiativeOptions?: object | undefined
  }): Promise<Combat | null>
  /**
   * Toggle a configured status effect for the Actor.
   * @param {string} statusId       A status effect ID defined in CONFIG.statusEffects
   * @param {object} [options={}]   Additional options which modify how the effect is created
   * @param {boolean} [options.active]        Force the effect to be active or inactive regardless of its current state
   * @param {boolean} [options.overlay=false] Display the toggled effect as an overlay
   * @returns {Promise<ActiveEffect|boolean|undefined>}  A promise which resolves to one of the following values:
   *                                 - ActiveEffect if a new effect need to be created
   *                                 - true if was already an existing effect
   *                                 - false if an existing effect needed to be removed
   *                                 - undefined if no changes need to be made
   */
  toggleStatusEffect(
    statusId: string,
    {
      active,
      overlay,
    }?: {
      active?: boolean | undefined
      overlay?: boolean | undefined
    },
  ): Promise<ActiveEffect | boolean | undefined>
  /**
   * Get this actor's dependent tokens.
   * If the actor is a synthetic token actor, only the exact Token which it represents will be returned.
   * @param {object} [options]
   * @param {Scene|Scene[]} [options.scenes]  A single Scene, or list of Scenes to filter by.
   * @param {boolean} [options.linked]        Limit the results to tokens that are linked to the actor.
   * @returns {TokenDocument[]}
   */
  getDependentTokens({
    scenes,
    linked,
  }?: {
    scenes?: Scene | Scene[] | undefined
    linked?: boolean | undefined
  }): TokenDocument[]
  /**
   * Register a token as a dependent of this actor.
   * @param {TokenDocument} token  The token.
   * @internal
   */
  _registerDependentToken(token: TokenDocument): void
  /**
   * Remove a token from this actor's dependents.
   * @param {TokenDocument} token  The token.
   * @internal
   */
  _unregisterDependentToken(token: TokenDocument): void
  /**
   * Prune a whole scene from this actor's dependent tokens.
   * @param {Scene} scene  The scene.
   * @internal
   */
  _unregisterDependentScene(scene: Scene): void
  /** @inheritDoc */
  _onUpdate(changed: any, options: any, userId: any): void
  /** @inheritDoc */
  _onCreateDescendantDocuments(parent: any, collection: any, documents: any, data: any, options: any, userId: any): void
  /** @inheritDoc */
  _onUpdateDescendantDocuments(
    parent: any,
    collection: any,
    documents: any,
    changes: any,
    options: any,
    userId: any,
  ): void
  /** @inheritDoc */
  _onDeleteDescendantDocuments(parent: any, collection: any, documents: any, ids: any, options: any, userId: any): void
  /**
   * Additional workflows to perform when any descendant document within this Actor changes.
   * @protected
   */
  protected _onEmbeddedDocumentChange(): void
  /**
   * Update the active TokenDocument instances which represent this Actor.
   * @param {object} [update={}]                               The update delta
   * @param {Partial<DatabaseUpdateOperation>} [options={}]    The database operation that was performed
   * @protected
   */
  protected _updateDependentTokens(update?: object, options?: Partial<DatabaseUpdateOperation>): void
  #private
}
import type Token from "@client/canvas/placeables/token.mjs"
import BaseActor from "@common/documents/actor.mjs"
import type ActiveEffect from "./active-effect.mjs"
import type Combat from "./combat.mjs"
import type Item from "./item.mjs"
import type Scene from "./scene.mjs"
import type TokenDocument from "./token.mjs"
