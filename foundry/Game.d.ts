/**
 * The core Game instance which encapsulates the data, settings, and states relevant for managing the game experience.
 * The singleton instance of the Game class is available as the global variable game.
 */
export default class Game<
  TActor extends Actor<null> = Actor<null>,
  TActors extends foundry.documents.collections.Actors<TActor> = foundry.documents.collections.Actors<TActor>,
  TChatMessage extends ChatMessage = ChatMessage,
  TCombat extends Combat = Combat,
  TItem extends Item<null> = Item<null>,
  TMacro extends Macro = Macro,
  TScene extends Scene = Scene,
  TUser extends User = User,
> {
  /**
   * Initialize a singleton Game instance for a specific view using socket data retrieved from the server.
   * @param view The named view which is active for this game instance.
   * @param data An object of all the World data vended by the server when the client first connects.
   * @param sessionId The ID of the currently active client session retrieved from the browser cookie.
   * @param socket The open web-socket which should be used to transact game-state data.
   */
  constructor(view: string, data: object, sessionId: string, socket: io.Socket<DefaultEventsMap, DefaultEventsMap>)

  // Undocumented
  _documentsReady?: boolean

  /**
   * The collection of Actor documents which exists in the World.
   */
  actors: TActors

  /**
   * The singleton Audio Helper.
   */
  readonly audio: foundry.audio.AudioHelper

  /**
   * The singleton game Canvas.
   */
  readonly canvas: foundry.canvas.Canvas

  /**
   * The collection of Cards documents which exists in the World.
   */
  cards: foundry.documents.collections.CardStacks

  /**
   * The singleton Clipboard Helper.
   */
  readonly clipboard: foundry.helpers.interaction.ClipboardHelper

  /**
   * A mapping of WorldCollection instances, one per primary Document type.
   */
  readonly collections: Collection<
    string,
    foundry.documents.abstract.WorldCollection<TActor | TItem | JournalEntry | TMacro | Playlist | RollTable | TScene>
  >

  /**
   * The collection of Combat documents which exists in the World.
   */
  combats: foundry.documents.collections.CombatEncounters<TCombat>

  /**
   * The singleton compendium art manager.
   */
  // @ts-expect-error Should fix.
  readonly compendiumArt: foundry.helpers.media.CompendiumArt

  /**
   * The object of world data passed from the server.
   */
  readonly data: {
    actors: TActor["_source"][]
    items: TItem["_source"][]
    macros: TMacro["_source"][]
    messages: TChatMessage["_source"][]
    //packs: CompendiumMetadata[]
    //tables: foundry.documents.RollTableSource[]
    users: TUser["_source"][]
    version: string
  }

  /**
   * Whether the Game is running in debug mode
   * @default false
   */
  debug: boolean

  /**
   * The singleton DocumentIndex instance.
   */
  // @ts-expect-error Should fix.
  readonly documentIndex: DocumentIndex

  /**
   * The collection of Folder documents which exists in the World.
   */
  folders: foundry.documents.collections.Folders

  /**
   * The singleton Gamepad Manager.
   */
  readonly gamepad: foundry.helpers.interaction.GamepadManager

  /**
   * Localization support.
   */
  readonly i18n: foundry.helpers.Localization

  /**
   * The singleton ClientIssues manager.
   */
  // @ts-expect-error Should fix.
  readonly issues: ClientIssues

  /**
   * The collection of Item documents which exists in the World.
   */
  items: foundry.documents.collections.Items<TItem>

  /**
   * The collection of JournalEntry documents which exists in the World.
   */
  journal: foundry.documents.collections.Journal

  /**
   * Client keybindings which are used to configure application behavior
   */
  // @ts-expect-error Should fix.
  readonly keybindings: ClientKeybindings

  /**
   * The singleton Keyboard Manager.
   */
  readonly keyboard: foundry.helpers.interaction.KeyboardManager

  /**
   * A flag for whether texture assets for the game canvas are currently loading macros.
   * @default false
   */
  loading: boolean

  /**
   * The collection of Macro documents which exists in the World.
   */
  macros: foundry.documents.collections.Macros<TMacro>

  /**
   * The collection of ChatMessage documents which exists in the World.
   */
  messages: foundry.documents.collections.ChatMessages<TChatMessage>

  /**
   * A Map of active Modules which are currently eligible to be enabled in this World. The subset of Modules
   * which are designated as active are currently enabled.
   */
  modules: Collection<string, foundry.packages.Module>

  /**
   * The singleton Mouse Manager.
   */
  readonly mouse: foundry.helpers.interaction.MouseManager

  /**
   * The singleton New User Experience manager.
   */
  readonly nue: foundry.nue.NewUserExperienceManager

  /**
   * A mapping of CompendiumCollection instances, one per Compendium pack.
   */
  readonly packs: foundry.documents.collections.CompendiumPacks

  /**
   * The user role permissions setting.
   */
  permissions: Record<string, number[]>

  /**
   * The collection of Playlist documents which exists in the World.
   */
  playlists: foundry.documents.collections.Playlists

  /**
   * A flag for whether the Game has successfully reached the hookEvents.ready hook.
   * @default false
   */
  ready: boolean

  /**
   * The Release data for this version of Foundry.
   */
  readonly release: foundry.packages.ReleaseData

  /**
   * The collection of Scene documents which exists in the World.
   */
  scenes: foundry.documents.collections.Scenes<TScene>

  /**
   * The client session id which is currently active.
   */
  readonly sessionId: string

  /**
   * Client settings which are used to configure application behavior.
   */
  // @ts-expect-error Should fix.
  readonly settings: ClientSettings

  /**
   * A reference to the open Socket.io connection.
   */
  readonly socket: null | io.Socket<DefaultEventsMap, DefaultEventsMap>

  /**
   * The System which is used to power this game World.
   */
  system: foundry.packages.System

  /**
   * The collection of RollTable documents which exists in the World.
   */
  tables: foundry.documents.collections.RollTables

  /**
   * A singleton GameTime instance which manages the progression of time within the game world.
   */
  readonly time: foundry.helpers.GameTime

  /**
   * The singleton TooltipManager.
   */
  readonly tooltip: foundry.helpers.interaction.TooltipManager

  /**
   * The singleton Tours collection.
   */
  readonly tours: foundry.nue.ToursCollection

  /**
   * The id of the active World user, if any.
   */
  readonly userId: null | string

  /**
   * The collection of User documents which exists in the World.
   */
  users: foundry.documents.collections.Users<TUser>

  /**
   * The singleton Video Helper.
   */
  // @ts-expect-error Should fix.
  readonly video: VideoHelper

  /**
   * The named view which is currently active.
   */
  readonly view: "game" | "stream" | "auth" | "license" | "setup" | "players" | "join" | "update"

  /**
   * A singleton web Worker manager.
   */
  // @ts-expect-error Should fix.
  readonly workers: WorkerManager

  /**
   * The game World which is currently active.
   */
  world: foundry.packages.World

  /**
   * A convenient reference to the currently active canvas tool
   */
  get activeTool(): string

  /**
   * A convenience accessor for the currently viewed Combat encounter
   */
  get combat(): null | foundry.documents.Combat

  /**
   * A shortcut to compendiumConfiguration data settings
   */
  get compendiumConfiguration(): foundry.types.WorldCompendiumConfiguration

  /**
   * A registry of document types supported by the active world.
   */
  get documentTypes(): Record<string, string[]>

  /**
   * Is the current session user authenticated as an application administrator?
   */
  get isAdmin(): boolean

  /**
   * A registry of document sub-types and their respective template.json defaults.
   */
  get model(): Record<string, Record<string, object>>

  /**
   * A state variable which tracks whether the game session is currently paused.
   */
  get paused(): boolean

  /**
   * The currently connected User document, or null if Users is not yet initialized.
   */
  get user(): null | foundry.documents.User

  /**
   * Returns the current version of the Release, usable for comparisons using isNewerVersion.
   */
  get version(): string

  /**
   * Activate Event Listeners which apply to every Game View.
   */
  activateListeners(): void

  /**
   * Activate Socket event listeners which are used to transact game state data with the server.
   */
  activateSocketListeners(): void

  /**
   * Configure custom cursors.
   */
  configureCursors(): void

  /**
   * Configure the user interface.
   * @param config
   */
  configureUI(config?: GameUIConfiguration): void

  /**
   * Return the named scopes which can exist for packages. Scopes are returned in the prioritization order that their content is loaded.
   */
  getPackageScopes(): string[]

  /**
   * Initialize the Game for the current window location, triggering the hookEvents.init event.
   */
  initialize(): Promise<void>

  /**
   * Initialize the game Canvas.
   */
  initializeCanvas(): Promise<void>

  /**
   * Initialize configuration state.
   */
  initializeConfig(): void

  /**
   * Initialize game state data by creating WorldCollection instances for every primary Document type.
   */
  initializeDocuments(): void

  /**
   * Initialize Gamepad controls.
   */
  initializeGamepads(): void

  /**
   * Initialize Keyboard controls.
   */
  initializeKeyboard(): void

  /**
   * Initialize Mouse controls.
   */
  initializeMouse(): void

  /**
   * Initialize the Compendium packs which are present within this Game Create a Collection which maps each Compendium pack using its collection ID.
   */
  initializePacks(): foundry.documents.collections.CompendiumPacks

  /**
   * Initialize the WebRTC implementation.
   */
  initializeRTC(): Promise<boolean>

  /**
   * Initialize collection trees.
   */
  initializeTrees(): void

  /**
   * Initialize core UI elements.
   */
  initializeUI(): void

  /**
   * Log out of the game session by returning to the Join screen.
   */
  logOut(): void

  /**
   * Register core game settings
   */
  registerSettings(): void

  /**
   * Fully set up the game state, initializing Documents, UI applications, and the Canvas. Triggers the
   * hookEvents.setup and hookEvents.ready events.
   */
  setupGame(): Promise<void>

  /**
   * Configure package data that is currently enabled for this world.
   * @param data Game data provided by the server socket.
   */
  setupPackages(data: object): void

  /**
   * Shut down the currently active Game. Requires GameMaster user permission.
   */
  shutDown(): Promise<void>

  /**
   * Open Character sheet for current token or controlled actor.
   * @returns The toggled Actor sheet, or null if the User has no assigned character.
   */
  toggleCharacterSheet(): null | foundry.applications.sheets.ActorSheetV2 | foundry.appv1.sheets.ActorSheet

  /**
   * Toggle the pause state of the game, triggering the hookEvents.pauseGame hook when the paused state changes.
   * @param pause The desired pause state; true for paused, false for un-paused.
   * @param options Additional options which modify the pause operation.
   * @param [options.broadcast] Broadcast the pause state change to other connected clients? Broadcasting to other
   * clients can only be done by a GM user.
   * @param [options.userId] The ID of the user who triggered the pause operation. This is populated automatically
   * by the game server.
   * @returns The new paused state.
   */
  togglePause(pause: boolean, options?: { broadcast?: boolean; userId?: string }): boolean

  /**
   * On left mouse clicks, check if the element is contained in a valid hyperlink and open it in a new tab.
   * @param event
   */
  protected _onClickHyperlink(event: PointerEvent): void

  /**
   * Establish a live connection to the game server through the socket.io URL.
   * @param sessionId The client session ID with which to establish the connection.
   * @returns A promise which resolves to the connected socket, if successful.
   */
  static connect(sessionId: string): Promise<object>

  /**
   * Fetch World data and return a Game instance.
   * @param view The named view being created.
   * @param sessionId The current sessionId of the connecting client.
   * @returns A Promise which resolves to the created Game instance.
   */
  static create(view: string, sessionId: null | string): Promise<Game>

  /**
   * Retrieve the cookies which are attached to the client session.
   * @returns The session cookies.
   */
  static getCookies(): object

  /**
   * Request World data from server and return it.
   * @param socket The active socket connection.
   * @param view The view for which data is being requested.
   * @returns
   */
  static getData(socket: io.Socket<DefaultEventsMap, DefaultEventsMap>, view: string): Promise<object>

  /**
   * Get the current World status upon initial connection.
   * @param socket The active client socket connection.
   * @returns
   */
  static getWorldStatus(socket: io.Socket<DefaultEventsMap, DefaultEventsMap>): Promise<boolean>
}

export interface GameUIConfiguration {
  uiScale: number
  fontScale: number
  colorScheme: {
    applications: "" | "dark" | "light"
    interface: "" | "dark" | "light"
  }
  chatNotifications: "cards" | "pip"
  fade: {
    opacity: number
    speed: number
  }
}
