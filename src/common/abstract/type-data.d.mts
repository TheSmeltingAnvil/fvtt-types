/**
 * A specialized subclass of DataModel, intended to represent a Document's type-specific data.
 * Systems or Modules that provide DataModel implementations for sub-types of Documents (such as Actors or Items)
 * should subclass this class instead of the base DataModel class.
 *
 * @see {@link foundry.abstract.Document}
 * @template {object} [ModelData=object]
 * @extends {DataModel<ModelData>}
 * @abstract
 *
 * @example Registering a custom sub-type for a Module.
 *
 * **module.json**
 * ```json
 * {
 *   "id": "my-module",
 *   "esmodules": ["main.mjs"],
 *   "documentTypes": {
 *     "Actor": {
 *       "sidekick": object,
 *       "villain": object
 *     },
 *     "JournalEntryPage": {
 *       "dossier": object,
 *       "quest": {
 *         "htmlFields": ["description"]
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * **main.mjs**
 * ```js
 * Hooks.on("init", () => {
 *   Object.assign(CONFIG.Actor.dataModels, {
 *     "my-module.sidekick": SidekickModel,
 *     "my-module.villain": VillainModel
 *   });
 *   Object.assign(CONFIG.JournalEntryPage.dataModels, {
 *     "my-module.dossier": DossierModel,
 *     "my-module.quest": QuestModel
 *   });
 * });
 *
 * class QuestModel extends foundry.abstract.TypeDataModel {
 *   static defineSchema() {
 *     const fields = foundry.data.fields;
 *     return {
 *       description: new fields.HTMLField({required: false, blank: true, initial: ""}),
 *       steps: new fields.ArrayField(new fields.StringField())
 *     };
 *   }
 *
 *   prepareDerivedData() {
 *     this.totalSteps = this.steps.length;
 *   }
 * }
 * ```
 *
 * **en.json** To provide the localization for methods like {@link foundry.ClientDocument.createDialog |
 * ClientDocument.createDialog}
 * ```json
 * {
 *   "TYPES": {
 *     "Actor": {
 *       "sidekick": "Sidekick",
 *       "villain": "Villain"
 *     },
 *     "JournalEntryPage": {
 *       "dossier": "Dossier",
 *       "quest": "Quest"
 *     }
 *   }
 * }
 * ```
 */
export default class TypeDataModel<ModelData extends object = object> extends DataModel<
  ModelData,
  foundry.abstract.types.DataModelConstructionContext
> {
  /** @inheritdoc*/
  static LOCALIZATION_PREFIXES: any[]
  /** @inheritdoc */
  constructor(data?: object, options?: object)
  /**
   * Prepare data related to this DataModel itself, before any derived data (including Active Effects)
   * is computed. This is especially useful for initializing numbers, arrays, and sets you expect to be
   * modified by active effects.
   *
   * Called before {@link foundry.ClientDocument.prepareBaseData | ClientDocument#prepareBaseData} in
   * {@link foundry.ClientDocument.prepareData | ClientDocument#prepareData}.
   *
   * @example
   * ```js
   * prepareBaseData() {
   *   // Ensures an active effect of `system.encumbrance.max | ADD | 10` doesn't produce `NaN`
   *   this.encumbrance = {
   *     max: 0
   *   }
   *   // If you need to access the owning Document, `this.parent` provides a reference for properties like the name
   *   // or embedded collections, e.g. `this.parent.name` or `this.parent.items`
   * }
   * ```
   */
  prepareBaseData(): void
  /**
   * Apply transformations or derivations to the values of the source data object.
   * Compute data fields whose values are not stored to the database.
   *
   * Called before {@link foundry.ClientDocument.prepareDerivedData | ClientDocument#prepareDerivedData} in
   * {@link foundry.ClientDocument.prepareData | ClientDocument#prepareData}.
   *
   * @example
   * ```js
   * prepareDerivedData() {
   *   this.hp.bloodied = Math.floor(this.hp.max / 2);
   *
   *   // this.parent accesses the Document, allowing access to embedded collections
   *   this.encumbrance.value = this.parent.items.reduce((total, item) => {
   *     total += item.system.weight;
   *     return total;
   *   }, 0)
   * }
   * ```
   */
  prepareDerivedData(): void
  /**
   * Convert this Document to some HTML display for embedding purposes.
   * @param {DocumentHTMLEmbedConfig} config  Configuration for embedding behavior.
   * @param {EnrichmentOptions} [options]     The original enrichment options for cases where the Document embed content
   *                                          also contains text that must be enriched.
   * @returns {Promise<HTMLDocumentEmbedElement|HTMLElement|HTMLCollection|null>}
   */
  toEmbed(
    config: DocumentHTMLEmbedConfig,
    options?: EnrichmentOptions,
  ): Promise<HTMLDocumentEmbedElement | HTMLElement | HTMLCollection | null>
  /**
   * Called by ClientDocument#_preCreate.
   *
   * @param {object} data                         The initial data object provided to the document creation request
   * @param {object} options                      Additional options which modify the creation request
   * @param {documents.BaseUser} user             The User requesting the document creation
   * @returns {Promise<boolean|void>}             Return false to exclude this Document from the creation operation
   * @internal
   */
  _preCreate(data: object, options: object, user: documents.BaseUser): Promise<boolean | void>
  /**
   * Called by ClientDocument#_onCreate.
   *
   * @param {object} data                         The initial data object provided to the document creation request
   * @param {object} options                      Additional options which modify the creation request
   * @param {string} userId                       The id of the User requesting the document update
   * @protected
   */
  protected _onCreate(data: object, options: object, userId: string): void
  /**
   * Called by ClientDocumentMixin#_preUpdate.
   *
   * @param {object} changes            The candidate changes to the Document
   * @param {object} options            Additional options which modify the update request
   * @param {documents.BaseUser} user   The User requesting the document update
   * @returns {Promise<boolean|void>}   A return value of false indicates the update operation should be cancelled.
   * @protected
   */
  protected _preUpdate(changes: object, options: object, user: documents.BaseUser): Promise<boolean | void>
  /**
   * Called by ClientDocumentMixin#_onUpdate.
   *
   * @param {object} changed            The differential data that was changed relative to the documents prior values
   * @param {object} options            Additional options which modify the update request
   * @param {string} userId             The id of the User requesting the document update
   * @protected
   */
  protected _onUpdate(changed: object, options: object, userId: string): void
  /**
   * Called by ClientDocumentMixin#_preDelete.
   *
   * @param {object} options            Additional options which modify the deletion request
   * @param {documents.BaseUser} user   The User requesting the document deletion
   * @returns {Promise<boolean|void>}   A return value of false indicates the deletion operation should be cancelled.
   * @protected
   */
  protected _preDelete(options: object, user: documents.BaseUser): Promise<boolean | void>
  /**
   * Called by ClientDocumentMixin#_onDelete.
   *
   * @param {object} options            Additional options which modify the deletion request
   * @param {string} userId             The id of the User requesting the document update
   * @protected
   */
  protected _onDelete(options: object, userId: string): void
}
import HTMLDocumentEmbedElement from "@client/applications/elements/document-embed.mjs"
import { DocumentHTMLEmbedConfig, EnrichmentOptions } from "@client/applications/ux/text-editor.mjs"
import DataModel from "./data.mjs"
import documents = foundry.documents
