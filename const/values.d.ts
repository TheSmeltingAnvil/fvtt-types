/**
 * Define the allowed ActiveEffect application modes. Other arbitrary mode numbers can be used by systems and
 * modules to identify special behaviors and are ignored.
 */
export const ACTIVE_EFFECT_MODES: Readonly<{
  ADD: 2
  CUSTOM: 0
  DOWNGRADE: 3
  MULTIPLY: 1
  OVERRIDE: 5
  UPGRADE: 4
}>

/**
 * A listing of all valid Document types, both primary and embedded.
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
 * The list of allowed attributes in HTML elements.
 */
export const ALLOWED_HTML_ATTRIBUTES: Readonly<{
  "*": readonly [
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
  a: readonly ["href", "name", "target", "rel"]
  area: readonly ["alt", "coords", "href", "rel", "shape", "target"]
  audio: readonly ["controls", "loop", "muted", "src", "autoplay"]
  blockquote: readonly ["cite"]
  button: readonly ["disabled", "name", "type", "value"]
  "code-mirror": readonly [
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
  col: readonly ["span"]
  colgroup: readonly ["span"]
  "color-picker": readonly ["disabled", "name", "value", "placeholder", "readonly", "required"]
  details: readonly ["open"]
  "document-embed": readonly ["uuid"]
  "document-tags": readonly [
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
  "enriched-content": readonly ["enricher"]
  fieldset: readonly ["disabled"]
  "file-picker": readonly ["disabled", "name", "value", "placeholder", "readonly", "required", "type", "noupload"]
  form: readonly ["name"]
  "hue-slider": readonly ["disabled", "name", "value", "readonly", "required"]
  iframe: readonly ["src", "srcdoc", "name", "height", "width", "loading", "sandbox"]
  img: readonly ["height", "src", "width", "usemap", "sizes", "srcset", "alt"]
  input: readonly [
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
  label: readonly ["for"]
  li: readonly ["value"]
  map: readonly ["name"]
  meter: readonly ["value", "min", "max", "low", "high", "optimum"]
  "multi-checkbox": readonly ["disabled", "name", "required"]
  "multi-select": readonly ["disabled", "name", "required"]
  ol: readonly ["reversed", "start", "type"]
  optgroup: readonly ["disabled", "label"]
  option: readonly ["disabled", "selected", "label", "value"]
  output: readonly ["for", "form", "name"]
  progress: readonly ["max", "value"]
  "prose-mirror": readonly ["disabled", "name", "value", "placeholder", "readonly", "required", "toggled", "open"]
  "range-picker": readonly ["disabled", "name", "value", "placeholder", "readonly", "min", "max", "step"]
  select: readonly ["name", "disabled", "multiple", "size", "required"]
  source: readonly ["media", "sizes", "src", "srcset", "type"]
  "string-tags": readonly ["disabled", "name", "value", "placeholder", "readonly", "required"]
  table: readonly ["border"]
  td: readonly ["colspan", "headers", "rowspan"]
  textarea: readonly ["rows", "cols", "disabled", "name", "readonly", "wrap", "required"]
  th: readonly ["abbr", "colspan", "headers", "rowspan", "scope", "sorted"]
  time: readonly ["datetime"]
  track: readonly ["default", "kind", "label", "src", "srclang"]
  video: readonly ["controls", "height", "width", "loop", "muted", "poster", "src", "autoplay"]
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
 * The list of allowed URL schemes.
 */
export const ALLOWED_URL_SCHEMES: readonly ["http", "https", "data", "mailto", "obsidian", "syrinscape-online"]

/**
 * The list of attributes validated as URLs.
 */
export const ALLOWED_URL_SCHEMES_APPLIED_TO_ATTRIBUTES: readonly ["href", "src", "cite"]

/**
 * An ASCII greeting displayed to the client.
 */
export const ASCII: string

/**
 * The allowed channels for audio playback.
 */
export const AUDIO_CHANNELS: Readonly<{
  environment: "AUDIO.CHANNELS.ENVIRONMENT.label"
  interface: "AUDIO.CHANNELS.INTERFACE.label"
  music: "AUDIO.CHANNELS.MUSIC.label"
}>

/**
 * The supported file extensions for audio-type files, and their corresponding mime types.
 */
export const AUDIO_FILE_EXTENSIONS: Readonly<{
  aac: "audio/aac"
  flac: "audio/flac"
  m4a: "audio/mp4"
  mid: "audio/midi"
  mp3: "audio/mpeg"
  ogg: "audio/ogg"
  opus: "audio/opus"
  wav: "audio/wav"
  webm: "audio/webm"
}>

/**
 * Define the string name used for the base document type when specific sub-types are not defined by the system.
 */
export const BASE_DOCUMENT_TYPE: "base"

/**
 * An enumeration of canvas performance modes.
 */
export const CANVAS_PERFORMANCE_MODES: Readonly<{
  HIGH: 2
  LOW: 0
  MAX: 3
  MED: 1
}>

/**
 * Define the methods by which a Card can be drawn from a Cards stack
 */
export const CARD_DRAW_MODES: Readonly<{
  BOTTOM: 1
  FIRST: 0
  LAST: 1
  RANDOM: 2
  TOP: 0
}>

/**
 * Valid Chat Message styles which affect how the message is presented in the chat log.
 */
export const CHAT_MESSAGE_STYLES: {
  E: any
  /**
   * The message is an emote performed by the selected character. Entering "/emote waves his hand." while
   * controlling a character named Simon will send the message, "Simon waves his hand."
   */
  MOTE: 3
  /**
   * The message is spoken by an associated character.
   */
  IC: 2
  /**
   * The message is spoken out of character (OOC). OOC messages will be outlined by the player's color to make
   * them more easily recognizable.
   */
  OOC: 1
  /**
   * An uncategorized chat message.
   */
  OTHER: 0
}

/**
 * The scaling factor that is used for Clipper polygons/paths consistently everywhere core performs Clipper operations.
 */
export const CLIPPER_SCALING_FACTOR: 100

/**
 * The combat announcements.
 */
export const COMBAT_ANNOUNCEMENTS: readonly ["startEncounter", "nextUp", "yourTurn"]

/**
 * Configure the severity of compatibility warnings.
 */
export const COMPATIBILITY_MODES: Readonly<{
  ERROR: 2
  FAILURE: 3
  SILENT: 0
  WARNING: 1
}>

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
 * Define the set of languages which have built-in support in the core software.
 */
export const CORE_SUPPORTED_LANGUAGES: readonly ["en"]

/**
 * The CSS themes which are currently supported for the V11 Setup menu.
 */
export const CSS_THEMES: Readonly<{
  dark: "THEME.foundry"
  fantasy: "THEME.fantasy"
  scifi: "THEME.scifi"
}>

/**
 * Configure custom cursor images to use when interacting with the application.
 */
export const CURSOR_STYLES: Readonly<{
  default: "default"
  "default-down": "default"
  grab: "grab"
  "grab-down": "grabbing"
  pointer: "pointer"
  "pointer-down": "pointer"
  text: "text"
  "text-down": "text"
}>

/**
 * The default artwork used for Token images if none is provided.
 */
export const DEFAULT_TOKEN: "icons/svg/mystery-man.svg"

/**
 * The supported dice roll visibility modes.
 * @see https://foundryvtt.com/article/dice/
 */
export const DICE_ROLL_MODES: Readonly<{
  BLIND: "blindroll"
  PRIVATE: "gmroll"
  PUBLIC: "publicroll"
  SELF: "selfroll"
}>

/**
 * The available modes for searching within a DirectoryCollection.
 */
export const DIRECTORY_SEARCH_MODES: Readonly<{
  FULL: "full"
  NAME: "name"
}>

/**
 * Define the allowed Document types which may be dynamically linked in chat.
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
 * Meta ownership levels that are used in the UI but never stored.
 */
export const DOCUMENT_META_OWNERSHIP_LEVELS: Readonly<{
  DEFAULT: -20
  NOCHANGE: -10
}>

/**
 * Define the allowed ownership levels for a Document. Each level is assigned a value in ascending order.
 * Higher levels grant more permissions.
 * @see https://foundryvtt.com/article/users/
 */
export const DOCUMENT_OWNERSHIP_LEVELS: Readonly<{
  INHERIT: -1
  LIMITED: 1
  NONE: 0
  OBSERVER: 2
  OWNER: 3
}>

/**
 * The allowed fill types which a Drawing object may display
 * @see https://foundryvtt.com/article/drawings/
 */
export const DRAWING_FILL_TYPES: Readonly<{
  NONE: 0
  PATTERN: 2
  SOLID: 1
}>

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
 * An enumeration of file type categories which can be selected.
 */
export const FILE_CATEGORIES: {
  AUDIO: Readonly<{
    aac: "audio/aac"
    flac: "audio/flac"
    m4a: "audio/mp4"
    mid: "audio/midi"
    mp3: "audio/mpeg"
    ogg: "audio/ogg"
    opus: "audio/opus"
    wav: "audio/wav"
    webm: "audio/webm"
  }>
  FONT: Readonly<{
    otf: "font/otf"
    ttf: "font/ttf"
    woff: "font/woff"
    woff2: "font/woff2"
  }>
  GRAPHICS: Readonly<{
    fbx: "application/octet-stream"
    glb: "model/gltf-binary"
    gltf: "model/gltf+json"
    mtl: "model/mtl"
    obj: "model/obj"
    stl: "model/stl"
    usdz: "model/vnd.usdz+zip"
  }>
  HTML: Readonly<{
    handlebars: "text/x-handlebars-template"
    hbs: "text/x-handlebars-template"
    html: "text/html"
  }>
  IMAGE: Readonly<{
    apng: "image/apng"
    avif: "image/avif"
    bmp: "image/bmp"
    gif: "image/gif"
    jpeg: "image/jpeg"
    jpg: "image/jpeg"
    png: "image/png"
    svg: "image/svg+xml"
    tiff: "image/tiff"
    webp: "image/webp"
  }>
  TEXT: Readonly<{
    csv: "text/csv"
    json: "application/json"
    md: "text/markdown"
    pdf: "application/pdf"
    tsv: "text/tab-separated-values"
    txt: "text/plain"
    xml: "application/xml"
    yaml: "application/yaml"
    yml: "application/yaml"
  }>
  VIDEO: Readonly<{
    m4v: "video/mp4"
    mp4: "video/mp4"
    ogv: "video/ogg"
    webm: "video/webm"
  }>
}

/**
 * Define the allowed Document types which Folders may contain.
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
 * The maximum allowed level of depth for Folder nesting.
 */
export const FOLDER_MAX_DEPTH: 4

/**
 * Supported file extensions for font files, and their corresponding mime types.
 */
export const FONT_FILE_EXTENSIONS: Readonly<{
  otf: "font/otf"
  ttf: "font/ttf"
  woff: "font/woff"
  woff2: "font/woff2"
}>

/**
 * A font weight to name mapping.
 */
export const FONT_WEIGHTS: Readonly<{
  Black: 900
  Bold: 700
  ExtraBold: 800
  ExtraLight: 200
  Light: 300
  Medium: 500
  Regular: 400
  SemiBold: 600
  Thin: 100
}>

/**
 * A list of allowed game URL names.
 */
export const GAME_VIEWS: readonly ["game", "stream"]

/**
 * Supported file extensions for 3D files, and their corresponding mime types.
 */
export const GRAPHICS_FILE_EXTENSIONS: Readonly<{
  fbx: "application/octet-stream"
  glb: "model/gltf-binary"
  gltf: "model/gltf+json"
  mtl: "model/mtl"
  obj: "model/obj"
  stl: "model/stl"
  usdz: "model/vnd.usdz+zip"
}>

/**
 * The different rules to define and measure diagonal distance/cost in a square grid. The description of each
 * option refers to the distance/cost of moving diagonally relative to the distance/cost of a horizontal or
 * vertical move.
 */
export const GRID_DIAGONALS: Readonly<{
  ALTERNATING_1: 4
  ALTERNATING_2: 5
  APPROXIMATE: 2
  EQUIDISTANT: 0
  EXACT: 1
  ILLEGAL: 6
  RECTILINEAR: 3
}>

/**
 * The minimum allowed grid size which is supported by the software.
 */
export const GRID_MIN_SIZE: 20

/**
 * The grid snapping modes.
 */
export const GRID_SNAPPING_MODES: Readonly<{
  BOTTOM_LEFT_CORNER: 1024
  BOTTOM_LEFT_VERTEX: 64
  BOTTOM_RIGHT_CORNER: 2048
  BOTTOM_RIGHT_VERTEX: 128
  BOTTOM_SIDE_MIDPOINT: 8192
  CENTER: 1
  CORNER: 3840
  EDGE_MIDPOINT: 2
  LEFT_SIDE_MIDPOINT: 16384
  RIGHT_SIDE_MIDPOINT: 32768
  SIDE_MIDPOINT: 61440
  TOP_LEFT_CORNER: 256
  TOP_LEFT_VERTEX: 16
  TOP_RIGHT_CORNER: 512
  TOP_RIGHT_VERTEX: 32
  TOP_SIDE_MIDPOINT: 4096
  VERTEX: 240
}>

/**
 * The allowed Grid types which are supported by the software.
 * @see https://foundryvtt.com/article/scenes/
 */
export const GRID_TYPES: Readonly<{
  GRIDLESS: 0
  HEXEVENQ: 5
  HEXEVENR: 3
  HEXODDQ: 4
  HEXODDR: 2
  SQUARE: 1
}>

/**
 * The allowed set of HTML template extensions.
 */
export const HTML_FILE_EXTENSIONS: Readonly<{
  handlebars: "text/x-handlebars-template"
  hbs: "text/x-handlebars-template"
  html: "text/html"
}>

/**
 * The supported file extensions for image-type files, and their corresponding mime types.
 */
export const IMAGE_FILE_EXTENSIONS: Readonly<{
  apng: "image/apng"
  avif: "image/avif"
  bmp: "image/bmp"
  gif: "image/gif"
  jpeg: "image/jpeg"
  jpg: "image/jpeg"
  png: "image/png"
  svg: "image/svg+xml"
  tiff: "image/tiff"
  webp: "image/webp"
}>

/**
 * The allowed formats of a Journal Entry Page.
 * @see https://foundryvtt.com/article/journal/
 */
export const JOURNAL_ENTRY_PAGE_FORMATS: Readonly<{
  HTML: 1
  MARKDOWN: 2
}>

/**
 * The possible precedence values a Keybinding might run in
 * @see https://foundryvtt.com/article/keybinds/
 */
export const KEYBINDING_PRECEDENCE: Readonly<{
  DEFERRED: 2
  NORMAL: 1
  PRIORITY: 0
}>

/**
 * The lighting illumination levels which are supported.
 */
export const LIGHTING_LEVELS: Readonly<{
  BRIGHT: 2
  BRIGHTEST: 3
  DARKNESS: -2
  DIM: 1
  HALFDARK: -1
  UNLIT: 0
}>

/**
 * An Array of valid MacroAction scope values.
 */
export const MACRO_SCOPES: readonly ["global", "actors", "actor"]

/**
 * An enumeration of valid Macro types
 * @see https://foundryvtt.com/article/macros/
 */
export const MACRO_TYPES: Readonly<{
  CHAT: "chat"
  SCRIPT: "script"
}>

/**
 * An enumeration of the allowed types for a MeasuredTemplate embedded document
 * @see https://foundryvtt.com/article/measurement/
 */
export const MEASURED_TEMPLATE_TYPES: Readonly<{
  CIRCLE: "circle"
  CONE: "cone"
  RAY: "ray"
  RECTANGLE: "rect"
}>

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
 * The directions of movement.
 */
export const MOVEMENT_DIRECTIONS: Readonly<{
  ASCEND: 32
  DESCEND: 16
  DOWN: 2
  DOWN_LEFT: 6
  DOWN_RIGHT: 10
  LEFT: 4
  RIGHT: 8
  UP: 1
  UP_LEFT: 5
  UP_RIGHT: 9
}>

/**
 * Define the valid occlusion modes which a tile can use
 * @see https://foundryvtt.com/article/tiles/
 */
export const OCCLUSION_MODES: Readonly<{
  FADE: 1
  NONE: 0
  RADIAL: 3
  VISION: 4
}>

/**
 * Encode the reasons why a package may be available or unavailable for use.
 */
export const PACKAGE_AVAILABILITY_CODES: Readonly<{
  MISSING_DEPENDENCY: 6
  MISSING_SYSTEM: 5
  REQUIRES_CORE_DOWNGRADE: 7
  REQUIRES_CORE_UPGRADE_STABLE: 8
  REQUIRES_CORE_UPGRADE_UNSTABLE: 9
  REQUIRES_DEPENDENCY_UPDATE: 10
  UNKNOWN: 0
  UNVERIFIED_BUILD: 2
  UNVERIFIED_GENERATION: 4
  UNVERIFIED_SYSTEM: 3
  VERIFIED: 1
}>

/**
 * The allowed package types.
 */
export const PACKAGE_TYPES: readonly ["world", "system", "module"]

/**
 * A safe password string which can be displayed.
 */
export const PASSWORD_SAFE_STRING: "••••••••••••••••"

/**
 * The allowed playback modes for an audio Playlist.
 * @see https://foundryvtt.com/article/playlists/
 */
export const PLAYLIST_MODES: Readonly<{
  DISABLED: -1
  SEQUENTIAL: 0
  SHUFFLE: 1
  SIMULTANEOUS: 2
}>

/**
 * The available sort modes for an audio Playlist.
 * @see https://foundryvtt.com/article/playlists/
 */
export const PLAYLIST_SORT_MODES: Readonly<{
  ALPHABETICAL: "a"
  MANUAL: "m"
}>

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
 * The Region events that are supported by core.
 */
export const REGION_EVENTS: {
  /**
   * Triggered when the Region Behavior becomes active, i.e. is enabled or created without being disabled.
   * The event is triggered only for this Region Behavior.
   * @see foundry.documents.types.RegionBehaviorActivatedEvent
   */
  BEHAVIOR_ACTIVATED: "behaviorActivated"
  /**
   * Triggered when the Region Behavior becomes inactive, i.e. is disabled or deleted without being disabled.
   * The event is triggered only for this Region Behavior.
   * @see foundry.documents.types.RegionBehaviorDeactivatedEvent
   */
  BEHAVIOR_DEACTIVATED: "behaviorDeactivated"
  /**
   * Triggered when the Region Behavior becomes unviewed, i.e. inactive or the Scene of its Region is unviewed.
   * The event is triggered only for this Region Behavior.
   * @see foundry.documents.types.RegionBehaviorUnviewedEvent
   */
  BEHAVIOR_UNVIEWED: "behaviorUnviewed"
  /**
   * Triggered when the Region Behavior becomes viewed, i.e. active and the Scene of its Region is viewed.
   * The event is triggered only for this Region Behavior.
   * @see foundry.documents.types.RegionBehaviorViewedEvent
   */
  BEHAVIOR_VIEWED: "behaviorViewed"
  // TODO
  REGION_BOUNDARY: "regionBoundary"
  TOKEN_ANIMATE_IN: "tokenAnimateIn"
  TOKEN_ANIMATE_OUT: "tokenAnimateOut"
  TOKEN_ENTER: "tokenEnter"
  TOKEN_EXIT: "tokenExit"
  TOKEN_MOVE_IN: "tokenMoveIn"
  TOKEN_MOVE_OUT: "tokenMoveOut"
  TOKEN_MOVE_WITHIN: "tokenMoveWithin"
  TOKEN_ROUND_END: "tokenRoundEnd"
  TOKEN_ROUND_START: "tokenRoundStart"
  TOKEN_TURN_END: "tokenTurnEnd"
  TOKEN_TURN_START: "tokenTurnStart"
}

/**
 * The types of a Region movement segment.
 */
export const REGION_MOVEMENT_SEGMENTS: Readonly<{
  ENTER: 1
  EXIT: -1
  MOVE: 0
}>

/**
 * The possible visibility state of Region.
 */
export const REGION_VISIBILITY: Readonly<{
  ALWAYS: 2
  GAMEMASTER: 1
  LAYER: 0
}>

/**
 * Available setting scopes.
 */
export const SETTING_SCOPES: Readonly<{
  CLIENT: "client"
  USER: "user"
  WORLD: "world"
}>

/**
 * Setup page package progress protocol.
 */
export const SETUP_PACKAGE_PROGRESS: Readonly<{
  ACTIONS: {
    CREATE_BACKUP: "createBackup"
    CREATE_SNAPSHOT: "createSnapshot"
    DELETE_BACKUP: "deleteBackup"
    DELETE_SNAPSHOT: "deleteSnapshot"
    INSTALL_PKG: "installPackage"
    LAUNCH_WORLD: "launchWorld"
    RESTORE_BACKUP: "restoreBackup"
    RESTORE_SNAPSHOT: "restoreSnapshot"
    UPDATE_CORE: "updateCore"
    UPDATE_DOWNLOAD: "updateDownload"
  }
  STEPS: {
    ARCHIVE: "archive"
    CHECK_DISK_SPACE: "checkDiskSpace"
    CLEAN_WORLD: "cleanWorld"
    CLEANUP: "cleanup"
    COMPLETE: "complete"
    CONNECT_PKG: "connectPackage"
    CONNECT_WORLD: "connectWorld"
    DELETE: "delete"
    DOWNLOAD: "download"
    ERROR: "error"
    EXTRACT: "extract"
    EXTRACT_DEMO: "extractDemo"
    INSTALL: "install"
    MIGRATE_CORE: "migrateCore"
    MIGRATE_PKG: "migratePackage"
    MIGRATE_SYSTEM: "migrateSystem"
    MIGRATE_WORLD: "migrateWorld"
    SNAPSHOT_MODULES: "snapshotModules"
    SNAPSHOT_SYSTEMS: "snapshotSystems"
    SNAPSHOT_WORLDS: "snapshotWorlds"
    VEND: "vend"
  }
}>

/**
 * A list of supported setup URL names.
 */
export const SETUP_VIEWS: readonly ["auth", "license", "setup", "players", "join", "update"]

/**
 * The configured showdown bi-directional HTML <-> Markdown converter options.
 */
export const SHOWDOWN_OPTIONS: Readonly<{
  disableForced4SpacesIndentedSublists: true
  noHeaderId: true
  parseImgDimensions: true
  strikethrough: true
  tables: true
  tablesHeaderId: true
}>

/**
 * The allowed software update channels.
 */
export const SOFTWARE_UPDATE_CHANNELS: Readonly<{
  development: "SETUP.UpdateDevelopment"
  prototype: "SETUP.UpdatePrototype"
  stable: "SETUP.UpdateStable"
  testing: "SETUP.UpdateTesting"
}>

/**
 * The default sorting density for manually ordering child objects within a parent.
 */
export const SORT_INTEGER_DENSITY: 100000

/**
 * A subset of Compendium types which require a specific system to be designated.
 */
export const SYSTEM_SPECIFIC_COMPENDIUM_TYPES: readonly ["Actor", "Item"]

/**
 * The allowed types of a TableResult document.
 */
export const TABLE_RESULT_TYPES: {
  /**
   * An in-World Document reference which will be linked to in the chat message.
   */
  DOCUMENT: "document"
  /**
   * Plain text or HTML scripted entries which will be output to Chat.
   */
  TEXT: "text"
}

/**
 * Define the valid anchor locations for a Tooltip displayed on a Placeable Object.
 * @see foundry.helpers.interaction.TooltipManager
 */
export const TEXT_ANCHOR_POINTS: Readonly<{
  BOTTOM: 1
  CENTER: 0
  LEFT: 3
  RIGHT: 4
  TOP: 2
}>

/**
 * The maximum depth to recurse to when embedding enriched text.
 */
export const TEXT_ENRICH_EMBED_MAX_DEPTH: 5

/**
 * The supported file extensions for text files, and their corresponding mime types.
 */
export const TEXT_FILE_EXTENSIONS: Readonly<{
  csv: "text/csv"
  json: "application/json"
  md: "text/markdown"
  pdf: "application/pdf"
  tsv: "text/tab-separated-values"
  txt: "text/plain"
  xml: "application/xml"
  yaml: "application/yaml"
  yml: "application/yaml"
}>

/**
 * The fit modes of foundry.data.TextureData.
 */
export const TEXTURE_DATA_FIT_MODES: readonly ["fill", "contain", "cover", "width", "height"]

/**
 * Alias for old tile occlusion modes definition.
 */
export const TILE_OCCLUSION_MODES: Readonly<{
  FADE: 1
  NONE: 0
  RADIAL: 3
  VISION: 4
}>

/**
 * Stores shared commonly used timeouts, measured in MS.
 */
export const TIMEOUTS: Readonly<{
  FOUNDRY_WEBSITE: 10000
  IP_DISCOVERY: 5000
  PACKAGE_REPOSITORY: 10000
  REMOTE_PACKAGE: 5000
}>

/**
 * Describe the various thresholds of token control upon which to show certain pieces of information
 * @see https://foundryvtt.com/article/tokens/
 */
export const TOKEN_DISPLAY_MODES: Readonly<{
  ALWAYS: 50
  CONTROL: 10
  HOVER: 30
  NONE: 0
  OWNER: 40
  OWNER_HOVER: 20
}>

/**
 * The allowed Token disposition types
 * @see https://foundryvtt.com/article/tokens/
 */
export const TOKEN_DISPOSITIONS: Readonly<{
  FRIENDLY: 1
  HOSTILE: -1
  NEUTRAL: 0
  SECRET: -2
}>

/**
 * The occlusion modes that define the set of tokens that trigger occlusion.
 */
export const TOKEN_OCCLUSION_MODES: Readonly<{
  CONTROLLED: 2
  HIGHLIGHTED: 8
  HOVERED: 4
  OWNED: 1
  VISIBLE: 16
}>

/**
 * The possible shapes of Tokens.
 */
export const TOKEN_SHAPES: Readonly<{
  ELLIPSE_1: 0
  ELLIPSE_2: 1
  RECTANGLE_1: 4
  RECTANGLE_2: 5
  TRAPEZOID_1: 2
  TRAPEZOID_2: 3
}>

/**
 * The allowed token turn markers modes.
 */
export const TOKEN_TURN_MARKER_MODES: Readonly<{
  CUSTOM: 2
  DEFAULT: 1
  DISABLED: 0
}>

/**
 * The list of trusted iframe domains.
 */
export const TRUSTED_IFRAME_DOMAINS: readonly ["google.com", "youtube.com"]

/**
 * A consolidated mapping of all extensions permitted for upload.
 */
export const UPLOADABLE_FILE_EXTENSIONS: Readonly<{
  aac: "audio/aac"
  apng: "image/apng"
  avif: "image/avif"
  bmp: "image/bmp"
  csv: "text/csv"
  fbx: "application/octet-stream"
  flac: "audio/flac"
  gif: "image/gif"
  glb: "model/gltf-binary"
  gltf: "model/gltf+json"
  jpeg: "image/jpeg"
  jpg: "image/jpeg"
  json: "application/json"
  m4a: "audio/mp4"
  m4v: "video/mp4"
  md: "text/markdown"
  mid: "audio/midi"
  mp3: "audio/mpeg"
  mp4: "video/mp4"
  mtl: "model/mtl"
  obj: "model/obj"
  ogg: "audio/ogg"
  ogv: "video/ogg"
  opus: "audio/opus"
  otf: "font/otf"
  pdf: "application/pdf"
  png: "image/png"
  stl: "model/stl"
  svg: "image/svg+xml"
  tiff: "image/tiff"
  tsv: "text/tab-separated-values"
  ttf: "font/ttf"
  txt: "text/plain"
  usdz: "model/vnd.usdz+zip"
  wav: "audio/wav"
  webm: "video/webm"
  webp: "image/webp"
  woff: "font/woff"
  woff2: "font/woff2"
  xml: "application/xml"
  yaml: "application/yaml"
  yml: "application/yaml"
}>

/**
 * Define the recognized User capabilities which individual Users or role levels may be permitted to perform.
 */
export const USER_PERMISSIONS: Readonly<{
  ACTOR_CREATE: {
    defaultRole: 3
    disableGM: false
    hint: "PERMISSION.ActorCreateHint"
    label: "PERMISSION.ActorCreate"
  }
  BROADCAST_AUDIO: {
    defaultRole: 2
    disableGM: true
    hint: "PERMISSION.BroadcastAudioHint"
    label: "PERMISSION.BroadcastAudio"
  }
  BROADCAST_VIDEO: {
    defaultRole: 2
    disableGM: true
    hint: "PERMISSION.BroadcastVideoHint"
    label: "PERMISSION.BroadcastVideo"
  }
  CARDS_CREATE: {
    defaultRole: 3
    disableGM: false
    hint: "PERMISSION.CardsCreateHint"
    label: "PERMISSION.CardsCreate"
  }
  DRAWING_CREATE: {
    defaultRole: 2
    disableGM: false
    hint: "PERMISSION.DrawingCreateHint"
    label: "PERMISSION.DrawingCreate"
  }
  FILES_BROWSE: {
    defaultRole: 2
    disableGM: false
    hint: "PERMISSION.FilesBrowseHint"
    label: "PERMISSION.FilesBrowse"
  }
  FILES_UPLOAD: {
    defaultRole: 3
    disableGM: false
    hint: "PERMISSION.FilesUploadHint"
    label: "PERMISSION.FilesUpload"
  }
  ITEM_CREATE: {
    defaultRole: 3
    disableGM: false
    hint: "PERMISSION.ItemCreateHint"
    label: "PERMISSION.ItemCreate"
  }
  JOURNAL_CREATE: {
    defaultRole: 2
    disableGM: false
    hint: "PERMISSION.JournalCreateHint"
    label: "PERMISSION.JournalCreate"
  }
  MACRO_SCRIPT: {
    defaultRole: 1
    disableGM: false
    hint: "PERMISSION.MacroScriptHint"
    label: "PERMISSION.MacroScript"
  }
  MANUAL_ROLLS: {
    defaultRole: 2
    disableGM: true
    hint: "PERMISSION.ManualRollsHint"
    label: "PERMISSION.ManualRolls"
  }
  MESSAGE_WHISPER: {
    defaultRole: 1
    disableGM: false
    hint: "PERMISSION.MessageWhisperHint"
    label: "PERMISSION.MessageWhisper"
  }
  NOTE_CREATE: {
    defaultRole: 2
    disableGM: false
    hint: "PERMISSION.NoteCreateHint"
    label: "PERMISSION.NoteCreate"
  }
  PING_CANVAS: {
    defaultRole: 1
    disableGM: true
    hint: "PERMISSION.PingCanvasHint"
    label: "PERMISSION.PingCanvas"
  }
  PLAYLIST_CREATE: {
    defaultRole: 3
    disableGM: false
    hint: "PERMISSION.PlaylistCreateHint"
    label: "PERMISSION.PlaylistCreate"
  }
  QUERY_USER: {
    defaultRole: 1
    disableGM: false
    hint: "PERMISSION.QueryUserHint"
    label: "PERMISSION.QueryUser"
  }
  SETTINGS_MODIFY: {
    defaultRole: 3
    disableGM: false
    hint: "PERMISSION.SettingsModifyHint"
    label: "PERMISSION.SettingsModify"
  }
  SHOW_CURSOR: {
    defaultRole: 1
    disableGM: true
    hint: "PERMISSION.ShowCursorHint"
    label: "PERMISSION.ShowCursor"
  }
  SHOW_RULER: {
    defaultRole: 1
    disableGM: true
    hint: "PERMISSION.ShowRulerHint"
    label: "PERMISSION.ShowRuler"
  }
  TEMPLATE_CREATE: {
    defaultRole: 1
    disableGM: false
    hint: "PERMISSION.TemplateCreateHint"
    label: "PERMISSION.TemplateCreate"
  }
  TOKEN_CONFIGURE: {
    defaultRole: 2
    disableGM: false
    hint: "PERMISSION.TokenConfigureHint"
    label: "PERMISSION.TokenConfigure"
  }
  TOKEN_CREATE: {
    defaultRole: 3
    disableGM: false
    hint: "PERMISSION.TokenCreateHint"
    label: "PERMISSION.TokenCreate"
  }
  TOKEN_DELETE: {
    defaultRole: 3
    disableGM: false
    hint: "PERMISSION.TokenDeleteHint"
    label: "PERMISSION.TokenDelete"
  }
  WALL_DOORS: {
    defaultRole: 1
    disableGM: false
    hint: "PERMISSION.WallDoorsHint"
    label: "PERMISSION.WallDoors"
  }
}>

/**
 * Invert the User Role mapping to recover role names from a role integer.
 * @see CONST.USER_ROLES
 */
export const USER_ROLE_NAMES: {
  0: "NONE"
  1: "PLAYER"
  2: "TRUSTED"
  3: "ASSISTANT"
  4: "GAMEMASTER"
}

/**
 * Define the allowed User permission levels. Each level is assigned a value in ascending order. Higher levels grant more permissions.
 * @see https://foundryvtt.com/article/users/
 */
export const USER_ROLES: Readonly<{
  ASSISTANT: 3
  GAMEMASTER: 4
  NONE: 0
  PLAYER: 1
  TRUSTED: 2
}>

/**
 * The supported file extensions for video-type files, and their corresponding mime types.
 */
export const VIDEO_FILE_EXTENSIONS: Readonly<{
  m4v: "video/mp4"
  mp4: "video/mp4"
  ogv: "video/ogg"
  webm: "video/webm"
}>

/**
 * The shortened software name.
 */
export const vtt: "Foundry VTT"

/**
 * The full software name.
 */
export const VTT: "Foundry Virtual Tabletop"

/**
 * The allowed directions of effect that a Wall can have
 * @see https://foundryvtt.com/article/walls/
 */
export const WALL_DIRECTIONS: Readonly<{
  BOTH: 0
  LEFT: 1
  RIGHT: 2
}>

/**
 * The possible ways to interact with a door.
 */
export const WALL_DOOR_INTERACTIONS: readonly ["open", "close", "lock", "unlock", "test"]

/**
 * The allowed door states which may describe a Wall that contains a door.
 * @see https://foundryvtt.com/article/walls/
 */
export const WALL_DOOR_STATES: Readonly<{
  CLOSED: 0
  LOCKED: 2
  OPEN: 1
}>

/**
 * The allowed door types which a Wall may contain.
 * @see https://foundryvtt.com/article/walls/
 */
export const WALL_DOOR_TYPES: Readonly<{
  DOOR: 1
  NONE: 0
  SECRET: 2
}>

/**
 * The types of movement collision which a Wall may impose.
 *  @see https://foundryvtt.com/article/walls/
 */
export const WALL_MOVEMENT_TYPES: Readonly<{
  NONE: 0
  NORMAL: 20
}>

/**
 * The wall properties which restrict the way interaction occurs with a specific wall.
 *  @see https://foundryvtt.com/article/walls/
 */
export const WALL_RESTRICTION_TYPES: readonly ["light", "sight", "sound", "move"]

/**
 * The types of sensory collision which a Wall may impose.
 *  @see https://foundryvtt.com/article/walls/
 */
export const WALL_SENSE_TYPES: Readonly<{
  DISTANCE: 40
  LIMITED: 10
  NONE: 0
  NORMAL: 20
  PROXIMITY: 30
}>

/**
 * The serverless API URL.
 */
export const WEBSITE_API_URL: "https://api.foundryvtt.com"

/**
 * The software website URL.
 */
export const WEBSITE_URL: "https://foundryvtt.com"

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
 * vailable themes for the world join page.
 */
export const WORLD_JOIN_THEMES: Readonly<{
  default: "WORLD.JOIN_THEMES.default"
  minimal: "WORLD.JOIN_THEMES.minimal"
}>
