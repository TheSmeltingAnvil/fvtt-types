/**
 * @import {ReleaseData} from "@common/config.mjs"
 * @import {HotReloadData} from "./_types.mjs"
 * @import {Canvas} from "./canvas/_module.mjs"
 * @import {Actor, Combat, User} from "./documents/_module.mjs"
 * @import WorldCollection from "./documents/abstract/world-collection.mjs"
 * @import Document from "@common/abstract/document.mjs"
 * @import * as applications from "./applications/_module.mjs"
 * @import {GameUIConfiguration} from "./applications/settings/menus/ui-config.mjs"
 * @import * as appv1 from "./appv1/_module.mjs"
 * @import * as hookEvents from "./hooks.mjs"
 * @import * as nue from "./nue/_module.mjs"
 * @import {Module, System, World} from "./packages/_module.mjs"
 */
/**
 * The core Game instance which encapsulates the data, settings, and states relevant for managing the game experience.
 * The singleton instance of the Game class is available as the global variable game.
 */
export default class Game {
  /**
   * Whether the page is unloading (and a socket disconnection should be ignored).
   * @type {boolean}
   */
  static #unloading: boolean
  /**
   * An array of buffered events which are received by the socket before the game is ready to use that data.
   * Buffered events are replayed in the order they are received until the buffer is empty.
   * @type {Array<Readonly<[string, ...any]>>}
   */
  static #socketEventBuffer: Array<Readonly<[string, ...any]>>
  /**
   * Fetch World data and return a Game instance
   * @param {string} view             The named view being created
   * @param {string|null} sessionId   The current sessionId of the connecting client
   * @returns {Promise<Game>}         A Promise which resolves to the created Game instance
   */
  static create(view: string, sessionId: string | null): Promise<Game>
  /**
   * Establish a live connection to the game server through the socket.io URL
   * @param {string} sessionId  The client session ID with which to establish the connection
   * @returns {Promise<io.Socket>} A promise which resolves to the connected socket, if successful
   */
  static connect(sessionId: string): Promise<io.Socket>
  /**
   * Place a buffered socket event into the queue
   * @param {[string, ...any]} args     Arguments of the socket event
   */
  static #bufferSocketEvents(args_0: string, ...args: any[]): void
  /**
   * Apply the queue of buffered socket events to game data once the game is ready.
   */
  static #applyBufferedSocketEvents(): void
  /**
   * Retrieve the cookies which are attached to the client session
   * @returns {object}   The session cookies
   */
  static getCookies(): object
  /**
   * Request World data from server and return it
   * @param {io.Socket} socket     The active socket connection
   * @param {string} view       The view for which data is being requested
   * @returns {Promise<object>}
   */
  static getData(socket: io.Socket, view: string): Promise<object>
  /**
   * Get the current World status upon initial connection.
   * @param {io.Socket} socket  The active client socket connection
   * @returns {Promise<boolean>}
   */
  static getWorldStatus(socket: io.Socket): Promise<boolean>
  /**
   * Support mousewheel control for range type input elements
   * @param {WheelEvent} event    A Mouse Wheel scroll event
   */
  static #handleMouseWheelInputChange(event: WheelEvent): void
  /**
   * Initialize a singleton Game instance for a specific view using socket data retrieved from the server.
   * @param {string} view         The named view which is active for this game instance.
   * @param {object} data         An object of all the World data vended by the server when the client first connects
   * @param {string} sessionId    The ID of the currently active client session retrieved from the browser cookie
   * @param {io.Socket} socket    The open web-socket which should be used to transact game-state data
   */
  constructor(view: string, data: object, sessionId: string, socket: io.Socket)
  /**
   * The named view which is currently active.
   * @type {"join"|"setup"|"players"|"license"|"game"|"stream"|"auth"|"update"}
   * @readonly
   */
  readonly view: "join" | "setup" | "players" | "license" | "game" | "stream" | "auth" | "update"
  /**
   * The object of world data passed from the server.
   * @type {object}
   * @readonly
   */
  readonly data: object
  /**
   * The client session id which is currently active.
   * @type {string}
   * @readonly
   */
  readonly sessionId: string
  /**
   * A reference to the open Socket.io connection.
   * @type {io.Socket|null}
   * @readonly
   */
  readonly socket: io.Socket | null
  /**
   * The id of the active World user, if any.
   * @type {string|null}
   * @readonly
   */
  readonly userId: string | null
  /**
   * The game World which is currently active.
   * @type {World}
   */
  world: World
  /**
   * The System which is used to power this game World.
   * @type {System}
   */
  system: System
  /**
   * A Map of active Modules which are currently eligible to be enabled in this World.
   * The subset of Modules which are designated as active are currently enabled.
   * @type {Collection<string, Module>}
   */
  modules: Collection<string, Module>
  /**
   * A mapping of CompendiumCollection instances, one per Compendium pack.
   * @type {collections.CompendiumPacks}
   * @readonly
   */
  readonly packs: collections.CompendiumPacks
  /**
   * A registry of document sub-types and their respective template.json defaults.
   * @type {Record<string, Record<string, object>>}
   */
  get model(): Record<string, Record<string, object>>
  /**
   * A shortcut to compendiumConfiguration data settings
   * @type {WorldCompendiumConfiguration}
   */
  get compendiumConfiguration(): WorldCompendiumConfiguration
  /**
   * A registry of document types supported by the active world.
   * @type {Record<string, string[]>}
   */
  get documentTypes(): Record<string, string[]>
  /**
   * The singleton DocumentIndex instance.
   * @type {helpers.DocumentIndex}
   * @readonly
   */
  readonly documentIndex: helpers.DocumentIndex
  /**
   * The UUID redirects tree.
   * @type {StringTree}
   */
  compendiumUUIDRedirects: StringTree
  /**
   * A mapping of {@link WorldCollection} instances, one per primary {@link Document} type.
   * @type {Collection<string, WorldCollection>}
   * @readonly
   */
  readonly collections: Collection<string, WorldCollection<any>>
  /**
   * The collection of Actor documents which exists in the World.
   * @type {collections.Actors}
   */
  actors: collections.Actors
  /**
   * The collection of Cards documents which exists in the World.
   * @type {collections.CardStacks}
   */
  cards: collections.CardStacks
  /**
   * The collection of Combat documents which exists in the World.
   * @type {collections.CombatEncounters}
   */
  combats: collections.CombatEncounters
  /**
   * The collection of Folder documents which exists in the World.
   * @type {collections.Folders}
   */
  folders: collections.Folders
  /**
   * The collection of Item documents which exists in the World.
   * @type {collections.Items}
   */
  items: collections.Items
  /**
   * The collection of JournalEntry documents which exists in the World.
   * @type {collections.Journal}
   */
  journal: collections.Journal
  /**
   * The collection of Macro documents which exists in the World.
   * @type {collections.Macros}
   */
  macros: collections.Macros
  /**
   * The collection of ChatMessage documents which exists in the World.
   * @type {collections.ChatMessages}
   */
  messages: collections.ChatMessages
  /**
   * The collection of Playlist documents which exists in the World.
   * @type {collections.Playlists}
   */
  playlists: collections.Playlists
  /**
   * The collection of Scene documents which exists in the World.
   * @type {collections.Scenes}
   */
  scenes: collections.Scenes
  /**
   * The collection of RollTable documents which exists in the World.
   * @type {collections.RollTables}
   */
  tables: collections.RollTables
  /**
   * The collection of User documents which exists in the World.
   * @type {collections.Users}
   */
  users: collections.Users
  /**
   * The Release data for this version of Foundry
   * @type {ReleaseData}
   * @readonly
   */
  readonly release: ReleaseData
  /**
   * Returns the current version of the Release, usable for comparisons using isNewerVersion
   * @type {string}
   */
  get version(): string
  /**
   * Whether the Game is running in debug mode
   * @type {boolean}
   */
  debug: boolean
  /**
   * A flag for whether texture assets for the game canvas are currently loading
   * @type {boolean}
   */
  loading: boolean
  /**
   * The user role permissions setting.
   * @type {Record<string, number[]>}
   */
  permissions: Record<string, number[]>
  /**
   * A flag for whether the Game has successfully reached the {@link hookEvents.ready} hook
   * @type {boolean}
   */
  ready: boolean
  /**
   * The singleton compendium art manager.
   * @type {helpers.media.CompendiumArt}
   * @readonly
   */
  readonly compendiumArt: helpers.media.CompendiumArt
  /**
   * The singleton Audio Helper.
   * @type {AudioHelper}
   * @readonly
   */
  readonly audio: AudioHelper
  /**
   * The singleton game Canvas.
   * @type {Canvas}
   * @readonly
   */
  readonly canvas: Canvas
  /**
   * The singleton Clipboard Helper.
   * @type {helpers.interaction.ClipboardHelper}
   * @readonly
   */
  readonly clipboard: helpers.interaction.ClipboardHelper
  /**
   * Localization support.
   * @type {helpers.Localization}
   * @readonly
   */
  readonly i18n: helpers.Localization
  /**
   * The singleton ClientIssues manager.
   * @type {helpers.ClientIssues}
   * @readonly
   */
  readonly issues: helpers.ClientIssues
  /**
   * The singleton Gamepad Manager.
   * @type {helpers.interaction.GamepadManager}
   * @readonly
   */
  readonly gamepad: helpers.interaction.GamepadManager
  /**
   * The singleton Keyboard Manager.
   * @type {helpers.interaction.KeyboardManager}
   * @readonly
   */
  readonly keyboard: helpers.interaction.KeyboardManager
  /**
   * Client keybindings which are used to configure application behavior
   * @type {helpers.interaction.ClientKeybindings}
   * @readonly
   */
  readonly keybindings: helpers.interaction.ClientKeybindings
  /**
   * The singleton Mouse Manager.
   * @type {helpers.interaction.MouseManager}
   * @readonly
   */
  readonly mouse: helpers.interaction.MouseManager
  /**
   * The singleton New User Experience manager.
   * @type {nue.NewUserExperienceManager}
   * @readonly
   */
  readonly nue: nue.NewUserExperienceManager
  /**
   * Client settings which are used to configure application behavior.
   * @type {helpers.ClientSettings}
   * @readonly
   */
  readonly settings: helpers.ClientSettings
  /**
   * A singleton GameTime instance which manages the progression of time within the game world.
   * @type {helpers.GameTime}
   * @readonly
   */
  readonly time: helpers.GameTime
  /**
   * The singleton TooltipManager.
   * @type {helpers.interaction.TooltipManager}
   * @readonly
   */
  readonly tooltip: helpers.interaction.TooltipManager
  /**
   * The singleton Tours collection.
   * @type {nue.ToursCollection}
   * @readonly
   */
  readonly tours: nue.ToursCollection
  /**
   * The singleton Video Helper.
   * @type {helpers.media.VideoHelper}
   * @readonly
   */
  readonly video: helpers.media.VideoHelper
  /**
   * A singleton web Worker manager.
   * @type {helpers.WorkerManager}
   * @readonly
   */
  readonly workers: helpers.WorkerManager
  /**
   * Configure package data that is currently enabled for this world
   * @param {object} data  Game data provided by the server socket
   */
  setupPackages(data: object): void
  /**
   * Return the named scopes which can exist for packages.
   * Scopes are returned in the prioritization order that their content is loaded.
   * @returns {string[]}    An array of string package scopes
   */
  getPackageScopes(): string[]
  /**
   * Initialize the Game for the current window location, triggering the {@link hookEvents.init} event.
   */
  initialize(): Promise<void>
  /**
   * Shut down the currently active Game. Requires GameMaster user permission.
   * @returns {Promise<void>}
   */
  shutDown(): Promise<void>
  /**
   * Fully set up the game state, initializing Documents, UI applications, and the Canvas. Triggers the
   * {@link hookEvents.setup} and {@link hookEvents.ready} events.
   * @returns {Promise<void>}
   */
  setupGame(): Promise<void>
  /**
   * Initialize configuration state.
   */
  initializeConfig(): void
  /**
   * Initialize game state data by creating {@link WorldCollection} instances for every primary {@link Document} type
   */
  initializeDocuments(): void
  _documentsReady: boolean | undefined
  /**
   * Initialize the Compendium packs which are present within this Game
   * Create a Collection which maps each Compendium pack using its collection ID.
   * @returns {collections.CompendiumPacks}
   */
  initializePacks(): collections.CompendiumPacks
  /**
   * Initialize collection trees.
   */
  initializeTrees(): void
  /**
   * Initialize the WebRTC implementation
   */
  initializeRTC(): Promise<boolean>
  webrtc: AVMaster | undefined
  /**
   * Initialize core UI elements
   */
  initializeUI(): void
  /**
   * Initialize the game Canvas
   * @returns {Promise<void>}
   */
  initializeCanvas(): Promise<void>
  /**
   * Initialize Keyboard controls
   */
  initializeKeyboard(): void
  /**
   * Initialize Mouse controls
   */
  initializeMouse(): void
  /**
   * Initialize Gamepad controls
   */
  initializeGamepads(): void
  /**
   * Register core game settings
   */
  registerSettings(): void
  /**
   * Is the current session user authenticated as an application administrator?
   * @type {boolean}
   */
  get isAdmin(): boolean
  /**
   * The currently connected User document, or null if Users is not yet initialized
   * @type {User|null}
   */
  get user(): User | null
  /**
   * A convenience accessor for the currently viewed Combat encounter
   * @type {Combat|null}
   */
  get combat(): Combat | null
  /**
   * A state variable which tracks whether the game session is currently paused
   * @type {boolean}
   */
  get paused(): boolean
  /**
   * A convenient reference to the currently active canvas tool
   * @type {string}
   */
  get activeTool(): string
  /**
   * Toggle the pause state of the game, triggering the {@link hookEvents.pauseGame} hook when the paused
   * state changes.
   * @param {boolean} pause           The desired pause state; true for paused, false for un-paused
   * @param {object} [options]        Additional options which modify the pause operation
   * @param {boolean} [options.broadcast=false] Broadcast the pause state change to other connected clients?
   *                                            Broadcasting to other clients can only be done by a GM user.
   * @param {string} [options.userId]           The ID of the user who triggered the pause operation. This is
   *                                            populated automatically by the game server.
   * @returns {boolean}               The new paused state
   */
  togglePause(
    pause: boolean,
    options?: {
      broadcast?: boolean | undefined
      userId?: string | undefined
    },
  ): boolean
  /**
   * Open Character sheet for current token or controlled actor
   * @returns {appv1.sheets.ActorSheet|applications.sheets.ActorSheetV2|null} The toggled {@link Actor} sheet, or null
   *                                                                          if the {@link User} has no assigned
   *                                                                          character
   */
  toggleCharacterSheet(): appv1.sheets.ActorSheet | applications.sheets.ActorSheetV2 | null
  /**
   * Log out of the game session by returning to the Join screen
   */
  logOut(): void
  /**
   * Configure the user interface.
   * @param {GameUIConfiguration} config
   */
  configureUI({ fontScale, uiScale, colorScheme, fade }?: GameUIConfiguration): void
  /**
   * Configure custom cursors.
   */
  configureCursors(): void
  /**
   * Activate Socket event listeners which are used to transact game state data with the server
   */
  activateSocketListeners(): void
  /**
   * Activate Event Listeners which apply to every Game View
   */
  activateListeners(): void
  /**
   * On left mouse clicks, check if the element is contained in a valid hyperlink and open it in a new tab.
   * @param {PointerEvent} event
   * @protected
   */
  protected _onClickHyperlink(event: PointerEvent): void
  /**
   * Initialize elements required for the current view
   * @internal
   */
  _initializeView(): Promise<void>
  /**
   * @deprecated since v12
   * @ignore
   */
  get template(): any
  /**
   * @deprecated since v13
   * @ignore
   */
  scaleFonts(index: any): void
  #private
}
import type { ReleaseData } from "@common/config.mjs"
import { Collection, StringTree } from "@common/utils/_module.mjs"
import type * as applications from "./applications/_module.mjs"
import type { GameUIConfiguration } from "./applications/settings/menus/ui-config.mjs"
import type * as appv1 from "./appv1/_module.mjs"
import AudioHelper from "./audio/helper.mjs"
import AVMaster from "./av/master.mjs"
import type { Canvas } from "./canvas/_module.mjs"
import type { Combat, User } from "./documents/_module.mjs"
import type WorldCollection from "./documents/abstract/world-collection.mjs"
import * as collections from "./documents/collections/_module.mjs"
import * as helpers from "./helpers/_module.mjs"
import type * as nue from "./nue/_module.mjs"
import type { Module, System, World } from "./packages/_module.mjs"
