/**
 * @import Card from "./card.mjs";
 * @import ChatMessage from "./chat-message.mjs";
 */
/**
 * The client-side Cards document which extends the common BaseCards model.
 * Each Cards document contains CardsData which defines its data schema.
 *
 * ### Hook Events
 * - {@link hookEvents.dealCards}
 * - {@link hookEvents.passCards}
 * - {@link hookEvents.returnCards}
 *
 * @extends BaseCards
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.collections.CardStacks}: The world-level collection of Cards documents
 * @see {@link foundry.applications.sheets.CardsConfig}: The Cards configuration application
 */
export default class Cards extends BaseCards {
  /** @inheritDoc */
  static createDocuments(
    data?: any[],
    context?: object,
  ): Promise<foundry.abstract.Document<object, foundry.abstract.types.DocumentConstructionContext>[]>
  /** @override */
  static override createDialog(
    data?: object,
    createOptions?: object,
    { folders, types, template, context, ...dialogOptions }?: object,
  ): Promise<any>
  /**
   * Provide a thumbnail image path used to represent this document.
   * @type {string}
   */
  get thumbnail(): string
  /**
   * The Card documents within this stack which are available to be drawn.
   * @type {Card[]}
   */
  get availableCards(): Card[]
  /**
   * The Card documents which belong to this stack but have already been drawn.
   * @type {Card[]}
   */
  get drawnCards(): Card[]
  /**
   * Returns the localized Label for the type of Card Stack this is
   * @type {string}
   */
  get typeLabel(): string
  /**
   * Can this Cards document be cloned in a duplicate workflow?
   * @type {boolean}
   */
  get canClone(): boolean
  /**
   * Deal one or more cards from this Cards document to each of a provided array of Cards destinations.
   * Cards are allocated from the top of the deck in cyclical order until the required number of Cards have been dealt.
   * @param {Cards[]} to              An array of other Cards documents to which cards are dealt
   * @param {number} [number=1]       The number of cards to deal to each other document
   * @param {object} [options={}]     Options which modify how the deal operation is performed
   * @param {number} [options.how=0]          How to draw, a value from CONST.CARD_DRAW_MODES
   * @param {object} [options.updateData={}]  Modifications to make to each Card as part of the deal operation,
   *                                          for example the displayed face
   * @param {string} [options.action=deal]    The name of the action being performed, used as part of the dispatched
   *                                          Hook event
   * @param {boolean} [options.chatNotification=true] Create a ChatMessage which notifies that this action has occurred
   * @returns {Promise<Cards>}        This Cards document after the deal operation has completed
   */
  deal(
    to: Cards[],
    number?: number,
    {
      action,
      how,
      updateData,
      chatNotification,
    }?: {
      how?: number | undefined
      updateData?: object | undefined
      action?: string | undefined
      chatNotification?: boolean | undefined
    },
  ): Promise<Cards>
  /**
   * Pass an array of specific Card documents from this document to some other Cards stack.
   * @param {Cards} to                Some other Cards document that is the destination for the pass operation
   * @param {string[]} ids            The embedded Card ids which should be passed
   * @param {object} [options={}]     Additional options which modify the pass operation
   * @param {object} [options.updateData={}]  Modifications to make to each Card as part of the pass operation,
   *                                          for example the displayed face
   * @param {string} [options.action=pass]    The name of the action being performed, used as part of the dispatched
   *                                          Hook event
   * @param {boolean} [options.chatNotification=true] Create a ChatMessage which notifies that this action has occurred
   * @returns {Promise<Card[]>}       An array of the Card embedded documents created within the destination stack
   */
  pass(
    to: Cards,
    ids: string[],
    {
      updateData,
      action,
      chatNotification,
    }?: {
      updateData?: object | undefined
      action?: string | undefined
      chatNotification?: boolean | undefined
    },
  ): Promise<Card[]>
  /**
   * Draw one or more cards from some other Cards document.
   * @param {Cards} from              Some other Cards document from which to draw
   * @param {number} [number=1]       The number of cards to draw
   * @param {object} [options={}]     Options which modify how the draw operation is performed
   * @param {number} [options.how=0]          How to draw, a value from CONST.CARD_DRAW_MODES
   * @param {object} [options.updateData={}]  Modifications to make to each Card as part of the draw operation,
   *                                          for example the displayed face
   * @returns {Promise<Card[]>}       An array of the Card documents which were drawn
   */
  draw(
    from: Cards,
    number?: number,
    {
      how,
      updateData,
      ...options
    }?: {
      how?: number | undefined
      updateData?: object | undefined
    },
  ): Promise<Card[]>
  /**
   * Shuffle this Cards stack, randomizing the sort order of all the cards it contains.
   * @param {object} [options={}]     Options which modify how the shuffle operation is performed.
   * @param {object} [options.updateData={}]  Modifications to make to each Card as part of the shuffle operation,
   *                                          for example the displayed face.
   * @param {boolean} [options.chatNotification=true] Create a ChatMessage which notifies that this action has occurred
   * @returns {Promise<Cards>}        The Cards document after the shuffle operation has completed
   */
  shuffle({
    updateData,
    chatNotification,
  }?: {
    updateData?: object | undefined
    chatNotification?: boolean | undefined
  }): Promise<Cards>
  /**
   * Recall the Cards stack, retrieving all original cards from other stacks where they may have been drawn if this is a
   * deck, otherwise returning all the cards in this stack to the decks where they originated.
   * @param {object} [options={}]             Options which modify the recall operation
   * @param {object} [options.updateData={}]  Modifications to make to each Card as part of the recall operation,
   *                                          for example the displayed face
   * @param {boolean} [options.chatNotification=true] Create a ChatMessage which notifies that this action has occurred
   * @returns {Promise<Cards>}                The Cards document after the recall operation has completed.
   */
  recall(options?: { updateData?: object | undefined; chatNotification?: boolean | undefined }): Promise<Cards>
  /**
   * A sorting function that is used to determine the standard order of Card documents within an un-shuffled stack.
   * Sorting with "en" locale to ensure the same order regardless of which client sorts the deck.
   * @param {Card} a     The card being sorted
   * @param {Card} b     Another card being sorted against
   * @returns {number}
   * @protected
   */
  protected sortStandard(a: Card, b: Card): number
  /**
   * A sorting function that is used to determine the order of Card documents within a shuffled stack.
   * @param {Card} a     The card being sorted
   * @param {Card} b     Another card being sorted against
   * @returns {number}
   * @protected
   */
  protected sortShuffled(a: Card, b: Card): number
  /**
   * An internal helper method for drawing a certain number of Card documents from this Cards stack.
   * @param {number} number       The number of cards to draw
   * @param {number} how          A draw mode from CONST.CARD_DRAW_MODES
   * @returns {Card[]}            An array of drawn Card documents
   * @protected
   */
  protected _drawCards(number: number, how: number): Card[]
  /** @inheritDoc */
  _preCreate(data: any, options: any, user: any): Promise<false | undefined>
  /** @inheritDoc */
  _preDelete(options: any, user: any): Promise<boolean | void>
  /**
   * Display a dialog which prompts the user to deal cards to some number of hand-type Cards documents.
   * @see {@link Cards#deal}
   * @returns {Promise<Cards|null>}
   */
  dealDialog(): Promise<Cards | null>
  /**
   * Display a dialog which prompts the user to draw cards from some other deck-type Cards documents.
   * @see {@link Cards#draw}
   * @returns {Promise<Card[]|null>}
   */
  drawDialog(): Promise<Card[] | null>
  /**
   * Display a dialog which prompts the user to pass cards from this document to some other Cards document.
   * @see {@link Cards#deal}
   * @returns {Promise<Cards|null>}
   */
  passDialog(): Promise<Cards | null>
  /**
   * Display a dialog which prompts the user to play a specific Card to some other Cards document
   * @see {@link Cards#pass}
   * @param {Card} card     The specific card being played as part of this dialog
   * @returns {Promise<Card[]|null>}
   */
  playDialog(card: Card): Promise<Card[] | null>
  /**
   * Display a confirmation dialog for whether the user wishes to reset a Cards stack
   * @see {@link Cards#recall}
   * @returns {Promise<Cards|false|null>}
   */
  resetDialog(): Promise<Cards | false | null>
  /** @inheritDoc */
  deleteDialog(options?: object): Promise<any>
  #private
}
import BaseCards from "@common/documents/cards.mjs"
import type Card from "./card.mjs"
