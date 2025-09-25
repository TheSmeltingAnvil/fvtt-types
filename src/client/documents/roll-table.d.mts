/**
 * @import {RollTableDraw} from "./_types.mjs";
 * @import {RollTableHTMLEmbedConfig} from "@client/_types.mjs";
 * @import {Roll} from "../dice/_module.mjs";
 * @import TableResult from "./table-result.mjs";
 */
/**
 * The client-side RollTable document which extends the common BaseRollTable model.
 * @extends BaseRollTable
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.collections.RollTables}: The world-level collection of RollTable documents
 * @see {@link foundry.documents.TableResult}: The embedded TableResult document
 * @see {@link foundry.applications.sheets.RollTableSheet}: The RollTable sheet application
 */
export default class RollTable extends BaseRollTable {
  /**
   * Create a new RollTable document using all of the Documents from a specific Folder as new results.
   * @param {Folder} folder       The Folder document from which to create a roll table
   * @param {object} options      Additional options passed to the RollTable.create method
   * @returns {Promise<RollTable>}
   */
  static fromFolder(folder: Folder, options?: object): Promise<RollTable>
  /**
   * Provide a thumbnail image path used to represent this document.
   * @type {string}
   */
  get thumbnail(): string
  /**
   * Display a result drawn from a RollTable in the Chat Log along.
   * Optionally also display the Roll which produced the result and configure aspects of the displayed messages.
   *
   * @param {TableResult[]} results         An Array of one or more TableResult Documents which were drawn and should
   *                                        be displayed.
   * @param {object} [options={}]           Additional options which modify message creation
   * @param {Roll} [options.roll]                 An optional Roll instance which produced the drawn results
   * @param {object} [options.messageData={}]     Additional data which customizes the created messages
   * @param {object} [options.messageOptions={}]  Additional options which customize the created messages
   */
  toMessage(
    results: TableResult[],
    {
      roll,
      messageData,
      messageOptions,
    }?: {
      roll?: Roll | undefined
      messageData?: object | undefined
      messageOptions?: object | undefined
    },
  ): Promise<
    | foundry.abstract.Document<object, foundry.abstract.types.DocumentConstructionContext>
    | foundry.abstract.Document<object, foundry.abstract.types.DocumentConstructionContext>[]
    | undefined
  >
  /**
   * Draw a result from the RollTable based on the table formula or a provided Roll instance
   * @param {object} [options={}]         Optional arguments which customize the draw behavior
   * @param {Roll} [options.roll]                   An existing Roll instance to use for drawing from the table
   * @param {boolean} [options.recursive=true]      Allow drawing recursively from inner RollTable results
   * @param {TableResult[]} [options.results]       One or more table results which have been drawn
   * @param {boolean} [options.displayChat=true]    Whether to automatically display the results in chat
   * @param {string} [options.rollMode]             The chat roll mode to use when displaying the result
   * @returns {Promise<{RollTableDraw}>}  A Promise which resolves to an object containing the executed roll and the
   *                                      produced results.
   */
  draw({
    roll,
    recursive,
    results,
    displayChat,
    rollMode,
  }?: {
    roll?: Roll | undefined
    recursive?: boolean | undefined
    results?: TableResult[] | undefined
    displayChat?: boolean | undefined
    rollMode?: string | undefined
  }): Promise<{
    RollTableDraw: any
  }>
  /**
   * Draw multiple results from a RollTable, constructing a final synthetic Roll as a dice pool of inner rolls.
   * @param {number} number               The number of results to draw
   * @param {object} [options={}]         Optional arguments which customize the draw
   * @param {Roll} [options.roll]                   An optional pre-configured Roll instance which defines the dice
   *                                                roll to use
   * @param {boolean} [options.recursive=true]      Allow drawing recursively from inner RollTable results
   * @param {boolean} [options.displayChat=true]    Automatically display the drawn results in chat? Default is true
   * @param {string} [options.rollMode]             Customize the roll mode used to display the drawn results
   * @returns {Promise<{RollTableDraw}>}  The drawn results
   */
  drawMany(
    number: number,
    {
      roll,
      recursive,
      displayChat,
      rollMode,
    }?: {
      roll?: Roll | undefined
      recursive?: boolean | undefined
      displayChat?: boolean | undefined
      rollMode?: string | undefined
    },
  ): Promise<{
    RollTableDraw: any
  }>
  /**
   * Normalize the probabilities of rolling each item in the RollTable based on their assigned weights
   * @returns {Promise<RollTable>}
   */
  normalize(): Promise<RollTable>
  /**
   * Reset the state of the RollTable to return any drawn items to the table
   * @returns {Promise<RollTable>}
   */
  resetResults(): Promise<RollTable>
  /**
   * Evaluate a RollTable by rolling its formula and retrieving a drawn result.
   *
   * Note that this function only performs the roll and identifies the result, the RollTable#draw function should be
   * called to formalize the draw from the table.
   *
   * @param {object} [options={}]       Options which modify rolling behavior
   * @param {Roll} [options.roll]                   An alternative dice Roll to use instead of the default table formula
   * @param {boolean} [options.recursive=true]   If a RollTable document is drawn as a result, recursively roll it
   * @param {number} [options._depth]            An internal flag used to track recursion depth
   * @returns {Promise<RollTableDraw>}  The Roll and results drawn by that Roll
   *
   * @example Draw results using the default table formula
   * ```js
   * const defaultResults = await table.roll();
   * ```
   *
   * @example Draw results using a custom roll formula
   * ```js
   * const roll = new Roll("1d20 + @abilities.wis.mod", actor.getRollData());
   * const customResults = await table.roll({roll});
   * ```
   */
  roll({
    roll,
    recursive,
    _depth,
  }?: {
    roll?: Roll | undefined
    recursive?: boolean | undefined
    _depth?: number | undefined
  }): Promise<RollTableDraw>
  /**
   * Get an Array of valid results for a given rolled total
   * @param {number} value    The rolled value
   * @returns {TableResult[]} An Array of results
   */
  getResultsForRoll(value: number): TableResult[]
  /**
   * Create embedded roll table markup.
   * @param {RollTableHTMLEmbedConfig} config Configuration for embedding behavior.
   * @param {EnrichmentOptions} [options]     The original enrichment options for cases where the Document embed content
   *                                          also contains text that must be enriched.
   * @returns {Promise<HTMLElement|null>}
   * @protected
   *
   * @example Embed the content of a Roll Table as a figure.
   * ```@Embed[RollTable.kRfycm1iY3XCvP8c]```
   * becomes
   * ```html
   * <figure class="content-embed" data-content-embed data-uuid="RollTable.kRfycm1iY3XCvP8c" data-id="kRfycm1iY3XCvP8c">
   *   <table class="roll-table-embed">
   *     <thead>
   *       <tr>
   *         <th>Roll</th>
   *         <th>Result</th>
   *       </tr>
   *     </thead>
   *     <tbody>
   *       <tr>
   *         <td>1&mdash;10</td>
   *         <td>
   *           <a class="inline-roll roll" data-mode="roll" data-formula="1d6">
   *             <i class="fa-solid fa-dice-d20"></i>
   *             1d6
   *           </a>
   *           Orcs attack!
   *         </td>
   *       </tr>
   *       <tr>
   *         <td>11&mdash;20</td>
   *         <td>No encounter</td>
   *       </tr>
   *     </tbody>
   *   </table>
   *   <figcaption>
   *     <div class="embed-caption">
   *       <p>This is the Roll Table description.</p>
   *     </div>
   *     <cite>
   *       <a class="content-link" data-link data-uuid="RollTable.kRfycm1iY3XCvP8c" data-id="kRfycm1iY3XCvP8c"
   *          data-type="RollTable" data-tooltip="Rollable Table">
   *         <i class="fa-solid fa-table-list"></i>
   *         Rollable Table
   *     </cite>
   *   </figcaption>
   * </figure>
   * ```
   */
  protected _buildEmbedHTML(config: RollTableHTMLEmbedConfig, options?: EnrichmentOptions): Promise<HTMLElement | null>
  /** @inheritDoc */
  _createFigureEmbed(content: any, config: any, options: any): Promise<any>
  /**
   * Handle a roll from within embedded content.
   * @param {PointerEvent} event  The originating event
   * @param {string} action       The named action that was clicked
   * @protected
   */
  protected _onClickEmbedAction(event: PointerEvent, action: string): Promise<void>
  /** @override */
  override onEmbed(element: any): void
  /** @inheritDoc */
  _onCreateDescendantDocuments(parent: any, collection: any, documents: any, data: any, options: any, userId: any): void
  /** @inheritDoc */
  _onDeleteDescendantDocuments(parent: any, collection: any, documents: any, ids: any, options: any, userId: any): void
  /** @override */
  override toCompendium(pack: any, options?: object): any
}
import type { RollTableHTMLEmbedConfig } from "@client/_types.mjs"
import BaseRollTable from "@common/documents/roll-table.mjs"
import Roll from "../dice/roll.mjs"
import type { RollTableDraw } from "./_types.mjs"
import type TableResult from "./table-result.mjs"
