/**
 * The shortened software name
 */
export const vtt: "Foundry VTT"
/**
 * The full software name
 */
export const VTT: "Foundry Virtual Tabletop"
/**
 * The software website URL
 */
export const WEBSITE_URL: "https://foundryvtt.com"
/**
 * The serverless API URL
 */
export const WEBSITE_API_URL: "https://api.foundryvtt.com"
/**
 * An ASCII greeting displayed to the client
 * @type {string}
 */
export const ASCII: string
/**
 * Define the allowed ActiveEffect application modes.
 * Other arbitrary mode numbers can be used by systems and modules to identify special behaviors and are ignored
 */
export const ACTIVE_EFFECT_MODES: Readonly<{
  /**
   * Used to denote that the handling of the effect is programmatically provided by a system or module.
   */
  readonly CUSTOM: 0
  /**
   * Multiplies a numeric base value by the numeric effect value
   * @example
   * 2 (base value) * 3 (effect value) = 6 (derived value)
   */
  readonly MULTIPLY: 1
  /**
   * Adds a numeric base value to a numeric effect value, or concatenates strings
   * @example
   * 2 (base value) + 3 (effect value) = 5 (derived value)
   * @example
   * "Hello" (base value) + " World" (effect value) = "Hello World"
   */
  readonly ADD: 2
  /**
   * Keeps the lower value of the base value and the effect value
   * @example
   * 2 (base value), 0 (effect value) = 0 (derived value)
   * @example
   * 2 (base value), 3 (effect value) = 2 (derived value)
   */
  readonly DOWNGRADE: 3
  /**
   * Keeps the greater value of the base value and the effect value
   * @example
   * 2 (base value), 4 (effect value) = 4 (derived value)
   * @example
   * 2 (base value), 1 (effect value) = 2 (derived value)
   */
  readonly UPGRADE: 4
  /**
   * Directly replaces the base value with the effect value
   * @example
   * 2 (base value), 4 (effect value) = 4 (derived value)
   */
  readonly OVERRIDE: 5
}>
/**
 * Define the string name used for the base document type when specific sub-types are not defined by the system
 */
export const BASE_DOCUMENT_TYPE: "base"
/**
 * Define the methods by which a Card can be drawn from a Cards stack
 */
export const CARD_DRAW_MODES: Readonly<{
  /**
   * Draw the first card from the stack
   * Synonymous with `TOP`
   */
  readonly FIRST: 0
  /**
   * Draw the top card from the stack
   * Synonymous with `FIRST`
   */
  readonly TOP: 0
  /**
   * Draw the last card from the stack
   * Synonymous with `BOTTOM`
   */
  readonly LAST: 1
  /**
   * Draw the bottom card from the stack
   * Synonymous with `LAST`
   */
  readonly BOTTOM: 1
  /**
   * Draw a random card from the stack
   */
  readonly RANDOM: 2
}>
/**
 * An enumeration of canvas performance modes.
 */
export const CANVAS_PERFORMANCE_MODES: Readonly<{
  readonly LOW: 0
  readonly MED: 1
  readonly HIGH: 2
  readonly MAX: 3
}>
export namespace CHAT_MESSAGE_STYLES {
  let OTHER: 0
  let OOC: 1
  let IC: 2
  let EMOTE: 3
}
/**
 * @typedef {typeof CHAT_MESSAGE_STYLES[keyof typeof CHAT_MESSAGE_STYLES]} ChatMessageStyle
 */
/**
 * Define the set of languages which have built-in support in the core software.
 */
export const CORE_SUPPORTED_LANGUAGES: readonly ["en"]
/**
 * Configure the severity of compatibility warnings.
 */
export const COMPATIBILITY_MODES: Readonly<{
  /**
   * Nothing will be logged
   */
  readonly SILENT: 0
  /**
   * A message will be logged at the "warn" level
   */
  readonly WARNING: 1
  /**
   * A message will be logged at the "error" level
   */
  readonly ERROR: 2
  /**
   * An Error will be thrown
   */
  readonly FAILURE: 3
}>
/**
 * Configure custom cursor images to use when interacting with the application.
 */
export const CURSOR_STYLES: Readonly<{
  readonly default: "default"
  readonly "default-down": "default"
  readonly pointer: "pointer"
  readonly "pointer-down": "pointer"
  readonly grab: "grab"
  readonly "grab-down": "grabbing"
  readonly text: "text"
  readonly "text-down": "text"
}>
/**
 * The lighting illumination levels which are supported.
 */
export const LIGHTING_LEVELS: Readonly<{
  readonly DARKNESS: -2
  readonly HALFDARK: -1
  readonly UNLIT: 0
  readonly DIM: 1
  readonly BRIGHT: 2
  readonly BRIGHTEST: 3
}>
/**
 * @typedef {typeof LIGHTING_LEVELS[keyof typeof LIGHTING_LEVELS]} LightingLevel
 */
/**
 * The CSS themes which are currently supported for the V11 Setup menu.
 */
export const CSS_THEMES: Readonly<{
  readonly dark: "THEME.foundry"
  readonly fantasy: "THEME.fantasy"
  readonly scifi: "THEME.scifi"
}>
/**
 * The default artwork used for Token images if none is provided
 */
export const DEFAULT_TOKEN: "icons/svg/mystery-man.svg"
/**
 * The primary Document types.
 */
export const PRIMARY_DOCUMENT_TYPES: readonly [
  "Actor",
  "Adventure",
  "Cards",
  "ChatMessage",
  "Combat",
  "FogExploration",
  "Folder",
  "Item",
  "JournalEntry",
  "Macro",
  "Playlist",
  "RollTable",
  "Scene",
  "Setting",
  "User",
]
/**
 * The embedded Document types.
 */
export const EMBEDDED_DOCUMENT_TYPES: readonly [
  "ActiveEffect",
  "ActorDelta",
  "AmbientLight",
  "AmbientSound",
  "Card",
  "Combatant",
  "CombatantGroup",
  "Drawing",
  "Item",
  "JournalEntryCategory",
  "JournalEntryPage",
  "MeasuredTemplate",
  "Note",
  "PlaylistSound",
  "Region",
  "RegionBehavior",
  "TableResult",
  "Tile",
  "Token",
  "Wall",
]
/**
 * A listing of all valid Document types, both primary and embedded.
 * @type {readonly ["ActiveEffect", "Actor", "ActorDelta", "Adventure", "AmbientLight", "AmbientSound", "Card", "Cards",
 *   "ChatMessage", "Combat", "Combatant", "CombatantGroup", "Drawing", "FogExploration", "Folder", "Item",
 *   "JournalEntry", "JournalEntryCategory", "JournalEntryPage", "Macro", "MeasuredTemplate", "Note", "Playlist",
 *   "PlaylistSound", "Region", "RegionBehavior", "RollTable", "Scene", "Setting", "TableResult", "Tile", "Token",
 *   "User", "Wall"]}
 */
export const ALL_DOCUMENT_TYPES: readonly [
  "ActiveEffect",
  "Actor",
  "ActorDelta",
  "Adventure",
  "AmbientLight",
  "AmbientSound",
  "Card",
  "Cards",
  "ChatMessage",
  "Combat",
  "Combatant",
  "CombatantGroup",
  "Drawing",
  "FogExploration",
  "Folder",
  "Item",
  "JournalEntry",
  "JournalEntryCategory",
  "JournalEntryPage",
  "Macro",
  "MeasuredTemplate",
  "Note",
  "Playlist",
  "PlaylistSound",
  "Region",
  "RegionBehavior",
  "RollTable",
  "Scene",
  "Setting",
  "TableResult",
  "Tile",
  "Token",
  "User",
  "Wall",
]
/**
 * The allowed primary Document types which may exist within a World.
 */
export const WORLD_DOCUMENT_TYPES: readonly [
  "Actor",
  "Cards",
  "ChatMessage",
  "Combat",
  "FogExploration",
  "Folder",
  "Item",
  "JournalEntry",
  "Macro",
  "Playlist",
  "RollTable",
  "Scene",
  "Setting",
  "User",
]
/**
 * The allowed primary Document types which may exist within a Compendium pack.
 */
export const COMPENDIUM_DOCUMENT_TYPES: readonly [
  "Actor",
  "Adventure",
  "Cards",
  "Item",
  "JournalEntry",
  "Macro",
  "Playlist",
  "RollTable",
  "Scene",
]
/**
 * Define the allowed ownership levels for a Document.
 * Each level is assigned a value in ascending order.
 * Higher levels grant more permissions.
 * @see {@link https://foundryvtt.com/article/users/}
 */
export const DOCUMENT_OWNERSHIP_LEVELS: Readonly<{
  /**
   * The User inherits permissions from the parent Folder.
   */
  readonly INHERIT: -1
  /**
   * Restricts the associated Document so that it may not be seen by this User.
   */
  readonly NONE: 0
  /**
   * Allows the User to interact with the Document in basic ways, allowing them to see it in sidebars and see only
   * limited aspects of its contents. The limits of this interaction are defined by the game system being used.
   */
  readonly LIMITED: 1
  /**
   * Allows the User to view this Document as if they were owner, but prevents them from making any changes to it.
   */
  readonly OBSERVER: 2
  /**
   * Allows the User to view and make changes to the Document as its owner. Owned documents cannot be deleted by anyone
   * other than a gamemaster level User.
   */
  readonly OWNER: 3
}>
/**
 * @typedef {typeof DOCUMENT_OWNERSHIP_LEVELS[keyof typeof DOCUMENT_OWNERSHIP_LEVELS]} DocumentOwnershipNumber
 * @typedef {keyof typeof DOCUMENT_OWNERSHIP_LEVELS|DocumentOwnershipNumber} DocumentOwnershipLevel
 */
/**
 * Meta ownership levels that are used in the UI but never stored.
 */
export const DOCUMENT_META_OWNERSHIP_LEVELS: Readonly<{
  readonly DEFAULT: -20
  readonly NOCHANGE: -10
}>
/**
 * Define the allowed Document types which may be dynamically linked in chat
 */
export const DOCUMENT_LINK_TYPES: readonly [
  "Actor",
  "Cards",
  "Item",
  "Scene",
  "JournalEntry",
  "Macro",
  "RollTable",
  "PlaylistSound",
]
/**
 * The supported dice roll visibility modes
 * @see {@link https://foundryvtt.com/article/dice/}
 */
export const DICE_ROLL_MODES: Readonly<{
  /**
   * This roll is visible to all players.
   */
  readonly PUBLIC: "publicroll"
  /**
   * Rolls of this type are only visible to the player that rolled and any Game Master users.
   */
  readonly PRIVATE: "gmroll"
  /**
   * A private dice roll only visible to Gamemaster users. The rolling player will not see the result of their own roll.
   */
  readonly BLIND: "blindroll"
  /**
   * A private dice roll which is only visible to the user who rolled it.
   */
  readonly SELF: "selfroll"
}>
/**
 * The allowed fill types which a Drawing object may display
 * @see {@link https://foundryvtt.com/article/drawings/}
 */
export const DRAWING_FILL_TYPES: Readonly<{
  /**
   * The drawing is not filled
   */
  readonly NONE: 0
  /**
   * The drawing is filled with a solid color
   */
  readonly SOLID: 1
  /**
   * The drawing is filled with a tiled image pattern
   */
  readonly PATTERN: 2
}>
/**
 * Define the allowed Document types which Folders may contain
 */
export const FOLDER_DOCUMENT_TYPES: readonly [
  "Actor",
  "Adventure",
  "Item",
  "Scene",
  "JournalEntry",
  "Playlist",
  "RollTable",
  "Cards",
  "Macro",
  "Compendium",
]
/**
 * The maximum allowed level of depth for Folder nesting
 */
export const FOLDER_MAX_DEPTH: 4
/**
 * A list of allowed game URL names
 */
export const GAME_VIEWS: readonly ["game", "stream"]
/**
 * The directions of movement.
 */
export const MOVEMENT_DIRECTIONS: Readonly<{
  readonly UP: 1
  readonly DOWN: 2
  readonly LEFT: 4
  readonly RIGHT: 8
  readonly UP_LEFT: 5
  readonly UP_RIGHT: 9
  readonly DOWN_LEFT: 6
  readonly DOWN_RIGHT: 10
  readonly DESCEND: 16
  readonly ASCEND: 32
}>
/**
 * The minimum allowed grid size which is supported by the software
 */
export const GRID_MIN_SIZE: 20
/**
 * The allowed Grid types which are supported by the software
 * @see {@link https://foundryvtt.com/article/scenes/}
 */
export const GRID_TYPES: Readonly<{
  /**
   * No fixed grid is used on this Scene allowing free-form point-to-point measurement without grid lines.
   */
  readonly GRIDLESS: 0
  /**
   * A square grid is used with width and height of each grid space equal to the chosen grid size.
   */
  readonly SQUARE: 1
  /**
   * A row-wise hexagon grid (pointy-topped) where odd-numbered rows are offset.
   */
  readonly HEXODDR: 2
  /**
   * A row-wise hexagon grid (pointy-topped) where even-numbered rows are offset.
   */
  readonly HEXEVENR: 3
  /**
   * A column-wise hexagon grid (flat-topped) where odd-numbered columns are offset.
   */
  readonly HEXODDQ: 4
  /**
   * A column-wise hexagon grid (flat-topped) where even-numbered columns are offset.
   */
  readonly HEXEVENQ: 5
}>
/**
 * @typedef {typeof GRID_TYPES[keyof typeof GRID_TYPES]} GridType
 */
/**
 * The different rules to define and measure diagonal distance/cost in a square grid.
 * The description of each option refers to the distance/cost of moving diagonally relative to the distance/cost of a
 * horizontal or vertical move.
 */
export const GRID_DIAGONALS: Readonly<{
  /**
   * The diagonal distance is 1. Diagonal movement costs the same as horizontal/vertical movement.
   */
  readonly EQUIDISTANT: 0
  /**
   * The diagonal distance is √2. Diagonal movement costs √2 times as much as horizontal/vertical movement.
   */
  readonly EXACT: 1
  /**
   * The diagonal distance is 1.5. Diagonal movement costs 1.5 times as much as horizontal/vertical movement.
   */
  readonly APPROXIMATE: 2
  /**
   * The diagonal distance is 2. Diagonal movement costs 2 times as much as horizontal/vertical movement.
   */
  readonly RECTILINEAR: 3
  /**
   * The diagonal distance alternates between 1 and 2 starting at 1.
   * The first diagonal movement costs the same as horizontal/vertical movement
   * The second diagonal movement costs 2 times as much as horizontal/vertical movement.
   * And so on...
   */
  readonly ALTERNATING_1: 4
  /**
   * The diagonal distance alternates between 2 and 1 starting at 2.
   * The first diagonal movement costs 2 times as much as horizontal/vertical movement.
   * The second diagonal movement costs the same as horizontal/vertical movement.
   * And so on...
   */
  readonly ALTERNATING_2: 5
  /**
   * The diagonal distance is ∞. Diagonal movement is not allowed/possible.
   */
  readonly ILLEGAL: 6
}>
/**
 * @typedef {typeof GRID_DIAGONALS[keyof typeof GRID_DIAGONALS]} GridDiagonalRule
 */
/**
 * The grid snapping modes.
 */
export const GRID_SNAPPING_MODES: Readonly<{
  /**
   * Nearest center point.
   */
  readonly CENTER: 1
  /**
   * Nearest edge midpoint.
   */
  readonly EDGE_MIDPOINT: 2
  /**
   * Nearest top-left vertex.
   */
  readonly TOP_LEFT_VERTEX: 16
  /**
   * Nearest top-right vertex.
   */
  readonly TOP_RIGHT_VERTEX: 32
  /**
   * Nearest bottom-left vertex.
   */
  readonly BOTTOM_LEFT_VERTEX: 64
  /**
   * Nearest bottom-right vertex.
   */
  readonly BOTTOM_RIGHT_VERTEX: 128
  /**
   * Nearest vertex.
   * Alias for `TOP_LEFT_VERTEX | TOP_RIGHT_VERTEX | BOTTOM_LEFT_VERTEX | BOTTOM_RIGHT_VERTEX`.
   */
  readonly VERTEX: 240
  /**
   * Nearest top-left corner.
   */
  readonly TOP_LEFT_CORNER: 256
  /**
   * Nearest top-right corner.
   */
  readonly TOP_RIGHT_CORNER: 512
  /**
   * Nearest bottom-left corner.
   */
  readonly BOTTOM_LEFT_CORNER: 1024
  /**
   * Nearest bottom-right corner.
   */
  readonly BOTTOM_RIGHT_CORNER: 2048
  /**
   * Nearest corner.
   * Alias for `TOP_LEFT_CORNER | TOP_RIGHT_CORNER | BOTTOM_LEFT_CORNER | BOTTOM_RIGHT_CORNER`.
   */
  readonly CORNER: 3840
  /**
   * Nearest top side midpoint.
   */
  readonly TOP_SIDE_MIDPOINT: 4096
  /**
   * Nearest bottom side midpoint.
   */
  readonly BOTTOM_SIDE_MIDPOINT: 8192
  /**
   * Nearest left side midpoint.
   */
  readonly LEFT_SIDE_MIDPOINT: 16384
  /**
   * Nearest right side midpoint.
   */
  readonly RIGHT_SIDE_MIDPOINT: 32768
  /**
   * Nearest side midpoint.
   * Alias for `TOP_SIDE_MIDPOINT | BOTTOM_SIDE_MIDPOINT | LEFT_SIDE_MIDPOINT | RIGHT_SIDE_MIDPOINT`.
   */
  readonly SIDE_MIDPOINT: 61440
}>
/**
 * A list of supported setup URL names
 */
export const SETUP_VIEWS: readonly ["auth", "license", "setup", "players", "join", "update"]
/**
 * An Array of valid MacroAction scope values
 */
export const MACRO_SCOPES: readonly ["global", "actors", "actor"]
/**
 * An enumeration of valid Macro types
 * @see {@link https://foundryvtt.com/article/macros/}
 */
export const MACRO_TYPES: Readonly<{
  /**
   * Complex and powerful macros which leverage the FVTT API through plain JavaScript to perform functions as simple or
   * as advanced as you can imagine.
   */
  readonly SCRIPT: "script"
  /**
   * Simple and easy to use, chat macros post pre-defined chat messages to the chat log when executed. All users can
   * execute chat macros by default.
   */
  readonly CHAT: "chat"
}>
/**
 * The allowed channels for audio playback.
 */
export const AUDIO_CHANNELS: Readonly<{
  readonly music: "AUDIO.CHANNELS.MUSIC.label"
  readonly environment: "AUDIO.CHANNELS.ENVIRONMENT.label"
  readonly interface: "AUDIO.CHANNELS.INTERFACE.label"
}>
/**
 * The allowed playback modes for an audio Playlist
 * @see {@link https://foundryvtt.com/article/playlists/}
 */
export const PLAYLIST_MODES: Readonly<{
  /**
   * The playlist does not play on its own, only individual Sound tracks played as a soundboard.
   */
  readonly DISABLED: -1
  /**
   * The playlist plays sounds one at a time in sequence.
   */
  readonly SEQUENTIAL: 0
  /**
   * The playlist plays sounds one at a time in randomized order.
   */
  readonly SHUFFLE: 1
  /**
   * The playlist plays all contained sounds at the same time.
   */
  readonly SIMULTANEOUS: 2
}>
/**
 * The available sort modes for an audio Playlist.
 * @see {@link https://foundryvtt.com/article/playlists/}
 */
export const PLAYLIST_SORT_MODES: Readonly<{
  /**
   * Sort sounds alphabetically.
   */
  readonly ALPHABETICAL: "a"
  /**
   * Sort sounds by manual drag-and-drop.
   */
  readonly MANUAL: "m"
}>
/**
 * The available modes for searching within a DirectoryCollection
 */
export const DIRECTORY_SEARCH_MODES: Readonly<{
  readonly FULL: "full"
  readonly NAME: "name"
}>
/**
 * The allowed package types
 */
export const PACKAGE_TYPES: readonly ["world", "system", "module"]
/**
 * Encode the reasons why a package may be available or unavailable for use
 */
export const PACKAGE_AVAILABILITY_CODES: Readonly<{
  /**
   * Package availability could not be determined
   */
  readonly UNKNOWN: 0
  /**
   * The Package is verified to be compatible with the current core software build
   */
  readonly VERIFIED: 1
  /**
   * Package is available for use, but not verified for the current core software build
   */
  readonly UNVERIFIED_BUILD: 2
  /**
   * One or more installed system is incompatible with the Package.
   */
  readonly UNVERIFIED_SYSTEM: 3
  /**
   * Package is available for use, but not verified for the current core software generation
   */
  readonly UNVERIFIED_GENERATION: 4
  /**
   * The System that the Package relies on is not available
   */
  readonly MISSING_SYSTEM: 5
  /**
   * A dependency of the Package is not available
   */
  readonly MISSING_DEPENDENCY: 6
  /**
   * The Package is compatible with an older version of Foundry than the currently installed version
   */
  readonly REQUIRES_CORE_DOWNGRADE: 7
  /**
   * The Package is compatible with a newer version of Foundry than the currently installed version, and that version is
   * Stable
   */
  readonly REQUIRES_CORE_UPGRADE_STABLE: 8
  /**
   * The Package is compatible with a newer version of Foundry than the currently installed version, and that version is
   * not yet Stable
   */
  readonly REQUIRES_CORE_UPGRADE_UNSTABLE: 9
  /**
   * A required dependency is not compatible with the current version of Foundry
   */
  readonly REQUIRES_DEPENDENCY_UPDATE: 10
}>
/**
 * A safe password string which can be displayed
 * @type {"••••••••••••••••"}
 */
export const PASSWORD_SAFE_STRING: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
/**
 * The allowed software update channels
 */
export const SOFTWARE_UPDATE_CHANNELS: Readonly<{
  /**
   * The Stable release channel
   */
  readonly stable: "SETUP.UpdateStable"
  /**
   * The User Testing release channel
   */
  readonly testing: "SETUP.UpdateTesting"
  /**
   * The Development release channel
   */
  readonly development: "SETUP.UpdateDevelopment"
  /**
   * The Prototype release channel
   */
  readonly prototype: "SETUP.UpdatePrototype"
}>
/**
 * The default sorting density for manually ordering child objects within a parent
 */
export const SORT_INTEGER_DENSITY: 100000
export namespace TABLE_RESULT_TYPES {
  let TEXT: "text"
  let DOCUMENT: "document"
}
/**
 * The allowed formats of a Journal Entry Page.
 * @see {@link https://foundryvtt.com/article/journal/}
 */
export const JOURNAL_ENTRY_PAGE_FORMATS: Readonly<{
  /**
   * The page is formatted as HTML.
   */
  readonly HTML: 1
  /**
   * The page is formatted as Markdown.
   */
  readonly MARKDOWN: 2
}>
/**
 * Define the valid anchor locations for a Tooltip displayed on a Placeable Object
 * @see {@link foundry.helpers.interaction.TooltipManager}
 */
export const TEXT_ANCHOR_POINTS: Readonly<{
  /**
   * Anchor the tooltip to the center of the element.
   */
  readonly CENTER: 0
  /**
   * Anchor the tooltip to the bottom of the element.
   */
  readonly BOTTOM: 1
  /**
   * Anchor the tooltip to the top of the element.
   */
  readonly TOP: 2
  /**
   * Anchor the tooltip to the left of the element.
   */
  readonly LEFT: 3
  /**
   * Anchor the tooltip to the right of the element.
   */
  readonly RIGHT: 4
}>
/**
 * @typedef {typeof TEXT_ANCHOR_POINTS[keyof typeof TEXT_ANCHOR_POINTS]} TextAnchorPoint
 */
/**
 * Define the valid occlusion modes which a tile can use
 * @see {@link https://foundryvtt.com/article/tiles/}
 */
export const OCCLUSION_MODES: Readonly<{
  /**
   * Turns off occlusion, making the tile never fade while tokens are under it.
   */
  readonly NONE: 0
  /**
   * Causes the whole tile to fade when an actor token moves under it.
   */
  readonly FADE: 1
  /**
   * Causes the tile to reveal the background in the vicinity of an actor token under it. The radius is determined by
   * the token's size.
   */
  readonly RADIAL: 3
  /**
   * Causes the tile to be partially revealed based on the vision of the actor, which does not need to be under the tile
   * to see what's beneath it.
   * This is useful for rooves on buildings where players could see through a window or door, viewing only a portion of
   * what is obscured by the roof itself.
   */
  readonly VISION: 4
}>
/**
 * Alias for old tile occlusion modes definition
 */
export const TILE_OCCLUSION_MODES: Readonly<{
  /**
   * Turns off occlusion, making the tile never fade while tokens are under it.
   */
  readonly NONE: 0
  /**
   * Causes the whole tile to fade when an actor token moves under it.
   */
  readonly FADE: 1
  /**
   * Causes the tile to reveal the background in the vicinity of an actor token under it. The radius is determined by
   * the token's size.
   */
  readonly RADIAL: 3
  /**
   * Causes the tile to be partially revealed based on the vision of the actor, which does not need to be under the tile
   * to see what's beneath it.
   * This is useful for rooves on buildings where players could see through a window or door, viewing only a portion of
   * what is obscured by the roof itself.
   */
  readonly VISION: 4
}>
/**
 * The occlusion modes that define the set of tokens that trigger occlusion.
 */
export const TOKEN_OCCLUSION_MODES: Readonly<{
  /**
   * Owned tokens that aren't hidden.
   */
  readonly OWNED: 1
  /**
   * Controlled tokens.
   */
  readonly CONTROLLED: 2
  /**
   * Hovered tokens that are visible.
   */
  readonly HOVERED: 4
  /**
   * Highlighted tokens that are visible.
   */
  readonly HIGHLIGHTED: 8
  /**
   * All visible tokens.
   */
  readonly VISIBLE: 16
}>
/**
 * Describe the various thresholds of token control upon which to show certain pieces of information
 * @see {@link https://foundryvtt.com/article/tokens/}
 */
export const TOKEN_DISPLAY_MODES: Readonly<{
  /**
   * No information is displayed.
   */
  readonly NONE: 0
  /**
   * Displayed when the token is controlled.
   */
  readonly CONTROL: 10
  /**
   * Displayed when hovered by a GM or a user who owns the actor.
   */
  readonly OWNER_HOVER: 20
  /**
   * Displayed when hovered by any user.
   */
  readonly HOVER: 30
  /**
   * Always displayed for a GM or for a user who owns the actor.
   */
  readonly OWNER: 40
  /**
   * Always displayed for everyone.
   */
  readonly ALWAYS: 50
}>
/**
 * @typedef {typeof TOKEN_DISPLAY_MODES[keyof typeof TOKEN_DISPLAY_MODES]} TokenDisplayMode
 */
/**
 * The allowed Token disposition types
 * @see {@link https://foundryvtt.com/article/tokens/}
 */
export const TOKEN_DISPOSITIONS: Readonly<{
  /**
   * Displayed with a purple borders for owners and with no borders for others (and no pointer change).
   */
  readonly SECRET: -2
  /**
   * Displayed as an enemy with a red border.
   */
  readonly HOSTILE: -1
  /**
   * Displayed as neutral with a yellow border.
   */
  readonly NEUTRAL: 0
  /**
   * Displayed as an ally with a cyan border.
   */
  readonly FRIENDLY: 1
}>
/**
 * The allowed token turn markers modes.
 */
export const TOKEN_TURN_MARKER_MODES: Readonly<{
  /**
   * The turn marker is disabled for this token.
   */
  readonly DISABLED: 0
  /**
   * The turn marker for this token is using the combat tracker settings (which could be disabled).
   */
  readonly DEFAULT: 1
  /**
   * The turn marker is using the token settings (unless the combat tracker turn marker setting is disabled)
   */
  readonly CUSTOM: 2
}>
/**
 * The possible shapes of Tokens.
 */
export const TOKEN_SHAPES: Readonly<{
  /**
   * Ellipse (Variant 1)
   */
  readonly ELLIPSE_1: 0
  /**
   * Ellipse (Variant 2)
   */
  readonly ELLIPSE_2: 1
  /**
   * Trapezoid (Variant 1)
   */
  readonly TRAPEZOID_1: 2
  /**
   * Trapezoid (Variant 2)
   */
  readonly TRAPEZOID_2: 3
  /**
   * Rectangle (Variant 1)
   */
  readonly RECTANGLE_1: 4
  /**
   * Rectangle (Variant 2)
   */
  readonly RECTANGLE_2: 5
}>
/**
 * @typedef {typeof TOKEN_SHAPES[keyof typeof TOKEN_SHAPES]} TokenShapeType
 */
/**
 * Define the allowed User permission levels.
 * Each level is assigned a value in ascending order. Higher levels grant more permissions.
 * @see {@link https://foundryvtt.com/article/users/}
 */
export const USER_ROLES: Readonly<{
  /**
   * The User is blocked from taking actions in Foundry Virtual Tabletop.
   * You can use this role to temporarily or permanently ban a user from joining the game.
   */
  readonly NONE: 0
  /**
   * The User is able to join the game with permissions available to a standard player.
   * They cannot take some more advanced actions which require Trusted permissions, but they have the basic
   * functionalities needed to operate in the virtual tabletop.
   */
  readonly PLAYER: 1
  /**
   * Similar to the Player role, except a Trusted User has the ability to perform some more advanced actions like create
   * drawings, measured templates, or even to (optionally) upload media files to the server.
   */
  readonly TRUSTED: 2
  /**
   * A special User who has many of the same in-game controls as a Game Master User, but does not have the ability to
   * perform administrative actions like changing User roles or modifying World-level settings.
   */
  readonly ASSISTANT: 3
  /**
   * A special User who has administrative control over this specific World.
   * Game Masters behave quite differently than Players in that they have the ability to see all Documents and Objects
   * within the world as well as the capability to configure World settings.
   */
  readonly GAMEMASTER: 4
}>
/**
 * Invert the User Role mapping to recover role names from a role integer
 * @type {{0: "NONE"; 1: "PLAYER"; 2: "TRUSTED"; 3: "ASSISTANT"; 4: "GAMEMASTER"}}
 * @see {@link CONST.USER_ROLES}
 */
export const USER_ROLE_NAMES: {
  0: "NONE"
  1: "PLAYER"
  2: "TRUSTED"
  3: "ASSISTANT"
  4: "GAMEMASTER"
}
/**
 * An enumeration of the allowed types for a MeasuredTemplate embedded document
 * @see {@link https://foundryvtt.com/article/measurement/}
 */
export const MEASURED_TEMPLATE_TYPES: Readonly<{
  /**
   * Circular templates create a radius around the starting point.
   */
  readonly CIRCLE: "circle"
  /**
   * Cones create an effect in the shape of a triangle or pizza slice from the starting point.
   */
  readonly CONE: "cone"
  /**
   * A rectangle uses the origin point as a corner, treating the origin as being inside of the rectangle's area.
   */
  readonly RECTANGLE: "rect"
  /**
   * A ray creates a single line that is one square in width and as long as you want it to be.
   */
  readonly RAY: "ray"
}>
/**
 * Define the recognized User capabilities which individual Users or role levels may be permitted to perform
 */
export const USER_PERMISSIONS: Readonly<{
  readonly ACTOR_CREATE: {
    readonly label: "PERMISSION.ActorCreate"
    readonly hint: "PERMISSION.ActorCreateHint"
    readonly disableGM: false
    readonly defaultRole: 3
  }
  readonly BROADCAST_AUDIO: {
    readonly label: "PERMISSION.BroadcastAudio"
    readonly hint: "PERMISSION.BroadcastAudioHint"
    readonly disableGM: true
    readonly defaultRole: 2
  }
  readonly BROADCAST_VIDEO: {
    readonly label: "PERMISSION.BroadcastVideo"
    readonly hint: "PERMISSION.BroadcastVideoHint"
    readonly disableGM: true
    readonly defaultRole: 2
  }
  readonly CARDS_CREATE: {
    readonly label: "PERMISSION.CardsCreate"
    readonly hint: "PERMISSION.CardsCreateHint"
    readonly disableGM: false
    readonly defaultRole: 3
  }
  readonly DRAWING_CREATE: {
    readonly label: "PERMISSION.DrawingCreate"
    readonly hint: "PERMISSION.DrawingCreateHint"
    readonly disableGM: false
    readonly defaultRole: 2
  }
  readonly ITEM_CREATE: {
    readonly label: "PERMISSION.ItemCreate"
    readonly hint: "PERMISSION.ItemCreateHint"
    readonly disableGM: false
    readonly defaultRole: 3
  }
  readonly FILES_BROWSE: {
    readonly label: "PERMISSION.FilesBrowse"
    readonly hint: "PERMISSION.FilesBrowseHint"
    readonly disableGM: false
    readonly defaultRole: 2
  }
  readonly FILES_UPLOAD: {
    readonly label: "PERMISSION.FilesUpload"
    readonly hint: "PERMISSION.FilesUploadHint"
    readonly disableGM: false
    readonly defaultRole: 3
  }
  readonly JOURNAL_CREATE: {
    readonly label: "PERMISSION.JournalCreate"
    readonly hint: "PERMISSION.JournalCreateHint"
    readonly disableGM: false
    readonly defaultRole: 2
  }
  readonly MACRO_SCRIPT: {
    readonly label: "PERMISSION.MacroScript"
    readonly hint: "PERMISSION.MacroScriptHint"
    readonly disableGM: false
    readonly defaultRole: 1
  }
  readonly MANUAL_ROLLS: {
    readonly label: "PERMISSION.ManualRolls"
    readonly hint: "PERMISSION.ManualRollsHint"
    readonly disableGM: true
    readonly defaultRole: 2
  }
  readonly MESSAGE_WHISPER: {
    readonly label: "PERMISSION.MessageWhisper"
    readonly hint: "PERMISSION.MessageWhisperHint"
    readonly disableGM: false
    readonly defaultRole: 1
  }
  readonly NOTE_CREATE: {
    readonly label: "PERMISSION.NoteCreate"
    readonly hint: "PERMISSION.NoteCreateHint"
    readonly disableGM: false
    readonly defaultRole: 2
  }
  readonly PING_CANVAS: {
    readonly label: "PERMISSION.PingCanvas"
    readonly hint: "PERMISSION.PingCanvasHint"
    readonly disableGM: true
    readonly defaultRole: 1
  }
  readonly PLAYLIST_CREATE: {
    readonly label: "PERMISSION.PlaylistCreate"
    readonly hint: "PERMISSION.PlaylistCreateHint"
    readonly disableGM: false
    readonly defaultRole: 3
  }
  readonly SETTINGS_MODIFY: {
    readonly label: "PERMISSION.SettingsModify"
    readonly hint: "PERMISSION.SettingsModifyHint"
    readonly disableGM: false
    readonly defaultRole: 3
  }
  readonly SHOW_CURSOR: {
    readonly label: "PERMISSION.ShowCursor"
    readonly hint: "PERMISSION.ShowCursorHint"
    readonly disableGM: true
    readonly defaultRole: 1
  }
  readonly SHOW_RULER: {
    readonly label: "PERMISSION.ShowRuler"
    readonly hint: "PERMISSION.ShowRulerHint"
    readonly disableGM: true
    readonly defaultRole: 1
  }
  readonly TEMPLATE_CREATE: {
    readonly label: "PERMISSION.TemplateCreate"
    readonly hint: "PERMISSION.TemplateCreateHint"
    readonly disableGM: false
    readonly defaultRole: 1
  }
  readonly TOKEN_CREATE: {
    readonly label: "PERMISSION.TokenCreate"
    readonly hint: "PERMISSION.TokenCreateHint"
    readonly disableGM: false
    readonly defaultRole: 3
  }
  readonly TOKEN_DELETE: {
    readonly label: "PERMISSION.TokenDelete"
    readonly hint: "PERMISSION.TokenDeleteHint"
    readonly disableGM: false
    readonly defaultRole: 3
  }
  readonly TOKEN_CONFIGURE: {
    readonly label: "PERMISSION.TokenConfigure"
    readonly hint: "PERMISSION.TokenConfigureHint"
    readonly disableGM: false
    readonly defaultRole: 2
  }
  readonly WALL_DOORS: {
    readonly label: "PERMISSION.WallDoors"
    readonly hint: "PERMISSION.WallDoorsHint"
    readonly disableGM: false
    readonly defaultRole: 1
  }
  readonly QUERY_USER: {
    readonly label: "PERMISSION.QueryUser"
    readonly hint: "PERMISSION.QueryUserHint"
    readonly disableGM: false
    readonly defaultRole: 1
  }
}>
/**
 * The allowed directions of effect that a Wall can have
 * @see {@link https://foundryvtt.com/article/walls/}
 */
export const WALL_DIRECTIONS: Readonly<{
  /**
   * The wall collides from both directions.
   */
  readonly BOTH: 0
  /**
   * The wall collides only when a ray strikes its left side.
   */
  readonly LEFT: 1
  /**
   * The wall collides only when a ray strikes its right side.
   */
  readonly RIGHT: 2
}>
/**
 * @typedef {typeof WALL_DIRECTIONS[keyof typeof WALL_DIRECTIONS]} WallDirection
 */
/**
 * The allowed door types which a Wall may contain
 * @see {@link https://foundryvtt.com/article/walls/}
 */
export const WALL_DOOR_TYPES: Readonly<{
  /**
   * The wall does not contain a door.
   */
  readonly NONE: 0
  /**
   *  The wall contains a regular door.
   */
  readonly DOOR: 1
  /**
   * The wall contains a secret door.
   */
  readonly SECRET: 2
}>
/**
 * The allowed door states which may describe a Wall that contains a door
 * @see {@link https://foundryvtt.com/article/walls/}
 */
export const WALL_DOOR_STATES: Readonly<{
  /**
   * The door is closed.
   */
  readonly CLOSED: 0
  /**
   * The door is open.
   */
  readonly OPEN: 1
  /**
   * The door is closed and locked.
   */
  readonly LOCKED: 2
}>
/**
 * The possible ways to interact with a door
 */
export const WALL_DOOR_INTERACTIONS: readonly ["open", "close", "lock", "unlock", "test"]
/**
 * The wall properties which restrict the way interaction occurs with a specific wall
 */
export const WALL_RESTRICTION_TYPES: readonly ["light", "sight", "sound", "move"]
/**
 * @typedef {typeof WALL_RESTRICTION_TYPES[number]} WallRestrictionType
 */
/**
 * The types of sensory collision which a Wall may impose
 * @see {@link https://foundryvtt.com/article/walls/}
 */
export const WALL_SENSE_TYPES: Readonly<{
  /**
   * Senses do not collide with this wall.
   */
  readonly NONE: 0
  /**
   * Senses collide with this wall.
   */
  readonly LIMITED: 10
  /**
   * Senses collide with the second intersection, bypassing the first.
   */
  readonly NORMAL: 20
  /**
   * Senses bypass the wall within a certain proximity threshold.
   */
  readonly PROXIMITY: 30
  /**
   * Senses bypass the wall outside a certain proximity threshold.
   */
  readonly DISTANCE: 40
}>
/**
 * @typedef {typeof WALL_SENSE_TYPES[keyof typeof WALL_SENSE_TYPES]} WallSenseType
 */
/**
 * The types of movement collision which a Wall may impose
 * @see {@link https://foundryvtt.com/article/walls/}
 */
export const WALL_MOVEMENT_TYPES: Readonly<{
  /**
   * Movement does not collide with this wall.
   */
  readonly NONE: 0
  /**
   * Movement collides with this wall.
   */
  readonly NORMAL: 20
}>
/**
 * The possible precedence values a Keybinding might run in
 * @see {@link https://foundryvtt.com/article/keybinds/}
 */
export const KEYBINDING_PRECEDENCE: Readonly<{
  /**
   * Runs in the first group along with other PRIORITY keybindings.
   */
  readonly PRIORITY: 0
  /**
   * Runs after the PRIORITY group along with other NORMAL keybindings.
   */
  readonly NORMAL: 1
  /**
   * Runs in the last group along with other DEFERRED keybindings.
   */
  readonly DEFERRED: 2
}>
/**
 * Directories in the public storage path.
 */
export const FILE_PICKER_PUBLIC_DIRS: readonly ["cards", "css", "fonts", "icons", "lang", "scripts", "sounds", "ui"]
/**
 * The allowed set of HTML template extensions
 */
export const HTML_FILE_EXTENSIONS: Readonly<{
  readonly handlebars: "text/x-handlebars-template"
  readonly hbs: "text/x-handlebars-template"
  readonly html: "text/html"
}>
/**
 * The supported file extensions for image-type files, and their corresponding mime types.
 */
export const IMAGE_FILE_EXTENSIONS: Readonly<{
  readonly apng: "image/apng"
  readonly avif: "image/avif"
  readonly bmp: "image/bmp"
  readonly gif: "image/gif"
  readonly jpeg: "image/jpeg"
  readonly jpg: "image/jpeg"
  readonly png: "image/png"
  readonly svg: "image/svg+xml"
  readonly tiff: "image/tiff"
  readonly webp: "image/webp"
}>
/**
 * The supported file extensions for video-type files, and their corresponding mime types.
 */
export const VIDEO_FILE_EXTENSIONS: Readonly<{
  readonly m4v: "video/mp4"
  readonly mp4: "video/mp4"
  readonly ogv: "video/ogg"
  readonly webm: "video/webm"
}>
/**
 * The supported file extensions for audio-type files, and their corresponding mime types.
 */
export const AUDIO_FILE_EXTENSIONS: Readonly<{
  readonly aac: "audio/aac"
  readonly flac: "audio/flac"
  readonly m4a: "audio/mp4"
  readonly mid: "audio/midi"
  readonly mp3: "audio/mpeg"
  readonly ogg: "audio/ogg"
  readonly opus: "audio/opus"
  readonly wav: "audio/wav"
  readonly webm: "audio/webm"
}>
/**
 * The supported file extensions for text files, and their corresponding mime types.
 */
export const TEXT_FILE_EXTENSIONS: Readonly<{
  readonly csv: "text/csv"
  readonly json: "application/json"
  readonly md: "text/markdown"
  readonly pdf: "application/pdf"
  readonly tsv: "text/tab-separated-values"
  readonly txt: "text/plain"
  readonly xml: "application/xml"
  readonly yml: "application/yaml"
  readonly yaml: "application/yaml"
}>
/**
 * Supported file extensions for font files, and their corresponding mime types.
 */
export const FONT_FILE_EXTENSIONS: Readonly<{
  readonly otf: "font/otf"
  readonly ttf: "font/ttf"
  readonly woff: "font/woff"
  readonly woff2: "font/woff2"
}>
/**
 * Supported file extensions for 3D files, and their corresponding mime types.
 */
export const GRAPHICS_FILE_EXTENSIONS: Readonly<{
  readonly fbx: "application/octet-stream"
  readonly glb: "model/gltf-binary"
  readonly gltf: "model/gltf+json"
  readonly mtl: "model/mtl"
  readonly obj: "model/obj"
  readonly stl: "model/stl"
  readonly usdz: "model/vnd.usdz+zip"
}>
/**
 * A consolidated mapping of all extensions permitted for upload.
 */
export const UPLOADABLE_FILE_EXTENSIONS: Readonly<{
  readonly fbx: "application/octet-stream"
  readonly glb: "model/gltf-binary"
  readonly gltf: "model/gltf+json"
  readonly mtl: "model/mtl"
  readonly obj: "model/obj"
  readonly stl: "model/stl"
  readonly usdz: "model/vnd.usdz+zip"
  readonly otf: "font/otf"
  readonly ttf: "font/ttf"
  readonly woff: "font/woff"
  readonly woff2: "font/woff2"
  readonly csv: "text/csv"
  readonly json: "application/json"
  readonly md: "text/markdown"
  readonly pdf: "application/pdf"
  readonly tsv: "text/tab-separated-values"
  readonly txt: "text/plain"
  readonly xml: "application/xml"
  readonly yml: "application/yaml"
  readonly yaml: "application/yaml"
  readonly m4v: "video/mp4"
  readonly mp4: "video/mp4"
  readonly ogv: "video/ogg"
  readonly webm: "video/webm"
  readonly aac: "audio/aac"
  readonly flac: "audio/flac"
  readonly m4a: "audio/mp4"
  readonly mid: "audio/midi"
  readonly mp3: "audio/mpeg"
  readonly ogg: "audio/ogg"
  readonly opus: "audio/opus"
  readonly wav: "audio/wav"
  readonly apng: "image/apng"
  readonly avif: "image/avif"
  readonly bmp: "image/bmp"
  readonly gif: "image/gif"
  readonly jpeg: "image/jpeg"
  readonly jpg: "image/jpeg"
  readonly png: "image/png"
  readonly svg: "image/svg+xml"
  readonly tiff: "image/tiff"
  readonly webp: "image/webp"
}>
export namespace FILE_CATEGORIES {
  export { HTML_FILE_EXTENSIONS as HTML }
  export { IMAGE_FILE_EXTENSIONS as IMAGE }
  export { VIDEO_FILE_EXTENSIONS as VIDEO }
  export { AUDIO_FILE_EXTENSIONS as AUDIO }
  export { TEXT_FILE_EXTENSIONS as TEXT }
  export { FONT_FILE_EXTENSIONS as FONT }
  export { GRAPHICS_FILE_EXTENSIONS as GRAPHICS }
  export const MEDIA: (
    | "image/apng"
    | "image/avif"
    | "image/bmp"
    | "image/gif"
    | "image/jpeg"
    | "image/png"
    | "image/svg+xml"
    | "image/tiff"
    | "image/webp"
    | "video/mp4"
    | "video/ogg"
    | "video/webm"
    | "audio/aac"
    | "audio/flac"
    | "audio/mp4"
    | "audio/midi"
    | "audio/mpeg"
    | "audio/ogg"
    | "audio/opus"
    | "audio/wav"
    | "audio/webm"
    | "text/csv"
    | "application/json"
    | "text/markdown"
    | "application/pdf"
    | "text/tab-separated-values"
    | "text/plain"
    | "application/xml"
    | "application/yaml"
    | "font/otf"
    | "font/ttf"
    | "font/woff"
    | "font/woff2"
    | "application/octet-stream"
    | "model/gltf-binary"
    | "model/gltf+json"
    | "model/mtl"
    | "model/obj"
    | "model/stl"
    | "model/vnd.usdz+zip"
  )[]
}
/**
 * The list of file categories that are "media".
 */
export const MEDIA_FILE_CATEGORIES: readonly ["IMAGE", "VIDEO", "AUDIO", "TEXT", "FONT", "GRAPHICS"]
/**
 * A list of MIME types which are treated as uploaded "media", which are allowed to overwrite existing files.
 * Any non-media MIME type is not allowed to replace an existing file.
 */
export const MEDIA_MIME_TYPES: (
  | "image/apng"
  | "image/avif"
  | "image/bmp"
  | "image/gif"
  | "image/jpeg"
  | "image/png"
  | "image/svg+xml"
  | "image/tiff"
  | "image/webp"
  | "video/mp4"
  | "video/ogg"
  | "video/webm"
  | "audio/aac"
  | "audio/flac"
  | "audio/mp4"
  | "audio/midi"
  | "audio/mpeg"
  | "audio/ogg"
  | "audio/opus"
  | "audio/wav"
  | "audio/webm"
  | "text/csv"
  | "application/json"
  | "text/markdown"
  | "application/pdf"
  | "text/tab-separated-values"
  | "text/plain"
  | "application/xml"
  | "application/yaml"
  | "font/otf"
  | "font/ttf"
  | "font/woff"
  | "font/woff2"
  | "application/octet-stream"
  | "model/gltf-binary"
  | "model/gltf+json"
  | "model/mtl"
  | "model/obj"
  | "model/stl"
  | "model/vnd.usdz+zip"
)[]
/**
 * A font weight to name mapping.
 */
export const FONT_WEIGHTS: Readonly<{
  readonly Thin: 100
  readonly ExtraLight: 200
  readonly Light: 300
  readonly Regular: 400
  readonly Medium: 500
  readonly SemiBold: 600
  readonly Bold: 700
  readonly ExtraBold: 800
  readonly Black: 900
}>
/**
 * Stores shared commonly used timeouts, measured in MS
 */
export const TIMEOUTS: Readonly<{
  /**
   * The default timeout for interacting with the foundryvtt.com API.
   */
  readonly FOUNDRY_WEBSITE: 10000
  /**
   * The specific timeout for loading the list of packages from the foundryvtt.com API.
   */
  readonly PACKAGE_REPOSITORY: 10000
  /**
   * The specific timeout for the IP address lookup service.
   */
  readonly IP_DISCOVERY: 5000
  /**
   * A remote package manifest JSON or download ZIP.
   */
  readonly REMOTE_PACKAGE: 5000
}>
/**
 * A subset of Compendium types which require a specific system to be designated
 */
export const SYSTEM_SPECIFIC_COMPENDIUM_TYPES: readonly ["Actor", "Item"]
/**
 * The configured showdown bi-directional HTML <-> Markdown converter options.
 */
export const SHOWDOWN_OPTIONS: Readonly<{
  readonly disableForced4SpacesIndentedSublists: true
  readonly noHeaderId: true
  readonly parseImgDimensions: true
  readonly strikethrough: true
  readonly tables: true
  readonly tablesHeaderId: true
}>
/**
 * The list of allowed HTML tags.
 */
export const ALLOWED_HTML_TAGS: readonly [
  "header",
  "main",
  "section",
  "article",
  "aside",
  "nav",
  "footer",
  "div",
  "address",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "br",
  "p",
  "blockquote",
  "summary",
  "details",
  "span",
  "code",
  "pre",
  "a",
  "label",
  "abbr",
  "cite",
  "mark",
  "q",
  "ruby",
  "rp",
  "rt",
  "small",
  "time",
  "var",
  "kbd",
  "samp",
  "dfn",
  "sub",
  "sup",
  "strong",
  "em",
  "b",
  "i",
  "u",
  "s",
  "del",
  "ins",
  "ol",
  "ul",
  "li",
  "dl",
  "dd",
  "dt",
  "menu",
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "th",
  "td",
  "col",
  "colgroup",
  "form",
  "input",
  "select",
  "option",
  "button",
  "datalist",
  "fieldset",
  "legend",
  "meter",
  "optgroup",
  "progress",
  "textarea",
  "output",
  "figure",
  "figcaption",
  "caption",
  "img",
  "video",
  "map",
  "area",
  "track",
  "picture",
  "source",
  "audio",
  "iframe",
  "color-picker",
  "code-mirror",
  "document-embed",
  "document-tags",
  "enriched-content",
  "file-picker",
  "hue-slider",
  "multi-select",
  "multi-checkbox",
  "range-picker",
  "secret-block",
  "string-tags",
  "prose-mirror",
]
/**
 * The list of allowed attributes in HTML elements.
 */
export const ALLOWED_HTML_ATTRIBUTES: Readonly<{
  readonly "*": readonly [
    "class",
    "data-*",
    "id",
    "title",
    "style",
    "draggable",
    "aria-*",
    "tabindex",
    "dir",
    "hidden",
    "inert",
    "role",
    "is",
    "lang",
    "popover",
    "autocapitalize",
    "autocorrect",
    "autofocus",
    "contenteditable",
    "spellcheck",
    "translate",
  ]
  readonly a: readonly ["href", "name", "target", "rel"]
  readonly area: readonly ["alt", "coords", "href", "rel", "shape", "target"]
  readonly audio: readonly ["controls", "loop", "muted", "src", "autoplay"]
  readonly blockquote: readonly ["cite"]
  readonly button: readonly ["disabled", "name", "type", "value"]
  readonly col: readonly ["span"]
  readonly colgroup: readonly ["span"]
  readonly "code-mirror": readonly [
    "disabled",
    "name",
    "value",
    "placeholder",
    "readonly",
    "required",
    "language",
    "indent",
    "nowrap",
  ]
  readonly "color-picker": readonly ["disabled", "name", "value", "placeholder", "readonly", "required"]
  readonly details: readonly ["open"]
  readonly "document-embed": readonly ["uuid"]
  readonly "document-tags": readonly [
    "disabled",
    "name",
    "value",
    "placeholder",
    "readonly",
    "required",
    "type",
    "single",
    "max",
  ]
  readonly "enriched-content": readonly ["enricher"]
  readonly fieldset: readonly ["disabled"]
  readonly "file-picker": readonly [
    "disabled",
    "name",
    "value",
    "placeholder",
    "readonly",
    "required",
    "type",
    "noupload",
  ]
  readonly form: readonly ["name"]
  readonly "hue-slider": readonly ["disabled", "name", "value", "readonly", "required"]
  readonly iframe: readonly ["src", "srcdoc", "name", "height", "width", "loading", "sandbox"]
  readonly img: readonly ["height", "src", "width", "usemap", "sizes", "srcset", "alt"]
  readonly input: readonly [
    "checked",
    "disabled",
    "name",
    "value",
    "placeholder",
    "type",
    "alt",
    "height",
    "list",
    "max",
    "min",
    "readonly",
    "size",
    "src",
    "step",
    "width",
    "required",
  ]
  readonly label: readonly ["for"]
  readonly li: readonly ["value"]
  readonly map: readonly ["name"]
  readonly meter: readonly ["value", "min", "max", "low", "high", "optimum"]
  readonly "multi-checkbox": readonly ["disabled", "name", "required"]
  readonly "multi-select": readonly ["disabled", "name", "required"]
  readonly ol: readonly ["reversed", "start", "type"]
  readonly optgroup: readonly ["disabled", "label"]
  readonly option: readonly ["disabled", "selected", "label", "value"]
  readonly output: readonly ["for", "form", "name"]
  readonly progress: readonly ["max", "value"]
  readonly "prose-mirror": readonly [
    "disabled",
    "name",
    "value",
    "placeholder",
    "readonly",
    "required",
    "toggled",
    "open",
  ]
  readonly "range-picker": readonly ["disabled", "name", "value", "placeholder", "readonly", "min", "max", "step"]
  readonly select: readonly ["name", "disabled", "multiple", "size", "required"]
  readonly source: readonly ["media", "sizes", "src", "srcset", "type"]
  readonly "string-tags": readonly ["disabled", "name", "value", "placeholder", "readonly", "required"]
  readonly table: readonly ["border"]
  readonly td: readonly ["colspan", "headers", "rowspan"]
  readonly textarea: readonly ["rows", "cols", "disabled", "name", "readonly", "wrap", "required"]
  readonly time: readonly ["datetime"]
  readonly th: readonly ["abbr", "colspan", "headers", "rowspan", "scope", "sorted"]
  readonly track: readonly ["default", "kind", "label", "src", "srclang"]
  readonly video: readonly ["controls", "height", "width", "loop", "muted", "poster", "src", "autoplay"]
}>
/**
 * The list of allowed URL schemes.
 */
export const ALLOWED_URL_SCHEMES: readonly ["http", "https", "data", "mailto", "obsidian", "syrinscape-online"]
/**
 * The list of attributes validated as URLs.
 */
export const ALLOWED_URL_SCHEMES_APPLIED_TO_ATTRIBUTES: readonly ["href", "src", "cite"]
/**
 * The list of trusted iframe domains.
 */
export const TRUSTED_IFRAME_DOMAINS: readonly ["google.com", "youtube.com"]
/**
 * Available themes for the world join page.
 */
export const WORLD_JOIN_THEMES: Readonly<{
  readonly default: "WORLD.JOIN_THEMES.default"
  readonly minimal: "WORLD.JOIN_THEMES.minimal"
}>
/**
 * Setup page package progress protocol.
 */
export const SETUP_PACKAGE_PROGRESS: Readonly<{
  readonly ACTIONS: {
    readonly CREATE_BACKUP: "createBackup"
    readonly RESTORE_BACKUP: "restoreBackup"
    readonly DELETE_BACKUP: "deleteBackup"
    readonly CREATE_SNAPSHOT: "createSnapshot"
    readonly RESTORE_SNAPSHOT: "restoreSnapshot"
    readonly DELETE_SNAPSHOT: "deleteSnapshot"
    readonly INSTALL_PKG: "installPackage"
    readonly LAUNCH_WORLD: "launchWorld"
    readonly UPDATE_CORE: "updateCore"
    readonly UPDATE_DOWNLOAD: "updateDownload"
  }
  readonly STEPS: {
    readonly ARCHIVE: "archive"
    readonly CHECK_DISK_SPACE: "checkDiskSpace"
    readonly CLEAN_WORLD: "cleanWorld"
    readonly EXTRACT_DEMO: "extractDemo"
    readonly CONNECT_WORLD: "connectWorld"
    readonly MIGRATE_WORLD: "migrateWorld"
    readonly CONNECT_PKG: "connectPackage"
    readonly MIGRATE_PKG: "migratePackage"
    readonly MIGRATE_CORE: "migrateCore"
    readonly MIGRATE_SYSTEM: "migrateSystem"
    readonly DOWNLOAD: "download"
    readonly EXTRACT: "extract"
    readonly INSTALL: "install"
    readonly CLEANUP: "cleanup"
    readonly COMPLETE: "complete"
    readonly DELETE: "delete"
    readonly ERROR: "error"
    readonly VEND: "vend"
    readonly SNAPSHOT_MODULES: "snapshotModules"
    readonly SNAPSHOT_SYSTEMS: "snapshotSystems"
    readonly SNAPSHOT_WORLDS: "snapshotWorlds"
  }
}>
/**
 * The combat announcements.
 */
export const COMBAT_ANNOUNCEMENTS: readonly ["startEncounter", "nextUp", "yourTurn"]
/**
 * The fit modes of {@link foundry.data.TextureData}.
 */
export const TEXTURE_DATA_FIT_MODES: readonly ["fill", "contain", "cover", "width", "height"]
/**
 * @typedef {typeof TEXTURE_DATA_FIT_MODES[number]} TextureDataFitMode
 */
/**
 * The maximum depth to recurse to when embedding enriched text.
 */
export const TEXT_ENRICH_EMBED_MAX_DEPTH: 5
export namespace REGION_EVENTS {
  let REGION_BOUNDARY: "regionBoundary"
  let BEHAVIOR_ACTIVATED: "behaviorActivated"
  let BEHAVIOR_DEACTIVATED: "behaviorDeactivated"
  let BEHAVIOR_VIEWED: "behaviorViewed"
  let BEHAVIOR_UNVIEWED: "behaviorUnviewed"
  let TOKEN_ENTER: "tokenEnter"
  let TOKEN_EXIT: "tokenExit"
  let TOKEN_MOVE_IN: "tokenMoveIn"
  let TOKEN_MOVE_OUT: "tokenMoveOut"
  let TOKEN_MOVE_WITHIN: "tokenMoveWithin"
  let TOKEN_ANIMATE_IN: "tokenAnimateIn"
  let TOKEN_ANIMATE_OUT: "tokenAnimateOut"
  let TOKEN_TURN_START: "tokenTurnStart"
  let TOKEN_TURN_END: "tokenTurnEnd"
  let TOKEN_ROUND_START: "tokenRoundStart"
  let TOKEN_ROUND_END: "tokenRoundEnd"
}
/**
 * @typedef {typeof REGION_EVENTS[keyof typeof REGION_EVENTS]} RegionEventType
 */
/**
 * The possible visibility state of Region.
 */
export const REGION_VISIBILITY: Readonly<{
  /**
   * Only visible on the RegionLayer.
   */
  readonly LAYER: 0
  /**
   * Only visible to Gamemasters.
   */
  readonly GAMEMASTER: 1
  /**
   * Visible to anyone.
   */
  readonly ALWAYS: 2
}>
/**
 * The types of a Region movement segment.
 */
export const REGION_MOVEMENT_SEGMENTS: Readonly<{
  /**
   * The segment crosses the boundary of the Region and exits it.
   */
  readonly EXIT: -1
  /**
   * The segment does not cross the boundary of the Region and is contained within it.
   */
  readonly MOVE: 0
  /**
   * The segment crosses the boundary of the Region and enters it.
   */
  readonly ENTER: 1
}>
/**
 * @typedef {typeof REGION_MOVEMENT_SEGMENTS[keyof typeof REGION_MOVEMENT_SEGMENTS]} RegionMovementSegmentType
 */
/**
 * Available setting scopes.
 */
export const SETTING_SCOPES: Readonly<{
  /**
   * Settings scoped to the client device. Stored in localStorage.
   */
  readonly CLIENT: "client"
  /**
   * Settings scoped to the game World. Applies to all Users in the World. Stored in the Settings database.
   */
  readonly WORLD: "world"
  /**
   * Settings scoped to an individual User in the World. Stored in the Settings database.
   */
  readonly USER: "user"
}>
/**
 * The scaling factor that is used for Clipper polygons/paths consistently everywhere core performs Clipper operations.
 */
export const CLIPPER_SCALING_FACTOR: 100
export namespace CHAT_MESSAGE_TYPES {}
/**
 * @deprecated since v12
 * @ignore
 */
export const DOCUMENT_TYPES: readonly (
  | "Actor"
  | "Cards"
  | "ChatMessage"
  | "Combat"
  | "FogExploration"
  | "Folder"
  | "Item"
  | "JournalEntry"
  | "Macro"
  | "Playlist"
  | "RollTable"
  | "Scene"
  | "Setting"
  | "User"
)[]
/**
 * @deprecated since v13
 * @ignore
 */
export const TOKEN_HEXAGONAL_SHAPES: Readonly<{
  /**
   * Ellipse (Variant 1)
   */
  readonly ELLIPSE_1: 0
  /**
   * Ellipse (Variant 2)
   */
  readonly ELLIPSE_2: 1
  /**
   * Trapezoid (Variant 1)
   */
  readonly TRAPEZOID_1: 2
  /**
   * Trapezoid (Variant 2)
   */
  readonly TRAPEZOID_2: 3
  /**
   * Rectangle (Variant 1)
   */
  readonly RECTANGLE_1: 4
  /**
   * Rectangle (Variant 2)
   */
  readonly RECTANGLE_2: 5
}>
export type CanvasPerformanceMode = (typeof CANVAS_PERFORMANCE_MODES)[keyof typeof CANVAS_PERFORMANCE_MODES]
export type ChatMessageStyle = (typeof CHAT_MESSAGE_STYLES)[keyof typeof CHAT_MESSAGE_STYLES]
export type LightingLevel = (typeof LIGHTING_LEVELS)[keyof typeof LIGHTING_LEVELS]
export type DocumentOwnershipNumber = (typeof DOCUMENT_OWNERSHIP_LEVELS)[keyof typeof DOCUMENT_OWNERSHIP_LEVELS]
export type DocumentOwnershipLevel = keyof typeof DOCUMENT_OWNERSHIP_LEVELS | DocumentOwnershipNumber
export type GridType = (typeof GRID_TYPES)[keyof typeof GRID_TYPES]
export type GridDiagonalRule = (typeof GRID_DIAGONALS)[keyof typeof GRID_DIAGONALS]
export type TextAnchorPoint = (typeof TEXT_ANCHOR_POINTS)[keyof typeof TEXT_ANCHOR_POINTS]
export type TokenDisplayMode = (typeof TOKEN_DISPLAY_MODES)[keyof typeof TOKEN_DISPLAY_MODES]
export type TokenShapeType = (typeof TOKEN_SHAPES)[keyof typeof TOKEN_SHAPES]
export type WallDirection = (typeof WALL_DIRECTIONS)[keyof typeof WALL_DIRECTIONS]
export type WallRestrictionType = (typeof WALL_RESTRICTION_TYPES)[number]
export type WallSenseType = (typeof WALL_SENSE_TYPES)[keyof typeof WALL_SENSE_TYPES]
export type TextureDataFitMode = (typeof TEXTURE_DATA_FIT_MODES)[number]
export type RegionEventType = (typeof REGION_EVENTS)[keyof typeof REGION_EVENTS]
export type RegionMovementSegmentType = (typeof REGION_MOVEMENT_SEGMENTS)[keyof typeof REGION_MOVEMENT_SEGMENTS]

export as namespace CONST
