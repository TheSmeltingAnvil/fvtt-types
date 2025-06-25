import * as abstract from "foundry/abstract/_module.js"
import * as applications from "foundry/applications/_module.js"
import * as data from "foundry/data/_module.js"
import * as sidebar from "foundry/applications/sidebar/_module.js"
import * as av from "foundry/av/_module.js"
import * as canvas from "foundry/canvas/_module.js"
import * as dice from "foundry/dice/_module.js"
import * as documents from "foundry/documents/_module.js"
import * as helpers from "foundry/helpers/_module.js"

import * as Config from "config/_module.js"

/**
 *
 */
interface Config<
  TAmbientLightDocument extends documents.AmbientLightDocument<TScene | null>,
  TAmbientSoundDocument extends documents.AmbientSoundDocument<TScene | null>,
  TActiveEffect extends documents.ActiveEffect<TActor | TItem | null>,
  TActor extends documents.Actor<TTokenDocument | null>,
  TActorDelta extends documents.ActorDelta<TTokenDocument | null>,
  TChatLog extends sidebar.tabs.ChatLog,
  TChatMessage extends documents.ChatMessage,
  TCombat extends documents.Combat,
  TCombatant extends documents.Combatant<TCombat | null, TTokenDocument | null>,
  TCombatTracker extends sidebar.tabs.CombatTracker<TCombat | null>,
  TCompendiumDirectory extends sidebar.tabs.CompendiumDirectory,
  THotbar extends applications.ui.Hotbar<TMacro>,
  TItem extends documents.Item<TActor | null>,
  TMacro extends documents.Macro,
  TMeasuredTemplateDocument extends documents.MeasuredTemplateDocument<TScene | null>,
  TRegionDocument extends documents.RegionDocument<TScene | null>,
  TRegionBehavior extends documents.RegionBehavior<TRegionDocument | null>,
  TTileDocument extends documents.TileDocument<TScene | null>,
  TTokenDocument extends documents.TokenDocument<TScene | null>,
  TWallDocument extends documents.WallDocument<TScene | null>,
  TScene extends documents.Scene,
  TUser extends documents.User,
  TEffectsCanvasGroup extends canvas.groups.EffectsCanvasGroup,
> {
  canvasTextStyle: PIXI.TextStyle

  compatibility: {
    excludePatterns: RegExp[]
    includePatterns: RegExp[]
    mode: number
  }

  controlIcons: {
    combat: string
    defeated: string
    doorClosed: string
    doorLocked: string
    doorOpen: string
    doorSecret: string
    down: string
    effects: string
    light: string
    lightOff: string
    lock: string
    sound: string
    soundOff: string
    template: string
    up: string
    visibility: string
    wallDirection: string
  }

  cursors: {
    default: string | CONFIG.CursorDescriptor
    "default-down": string | CONFIG.CursorDescriptor
    grab: string | CONFIG.CursorDescriptor
    "grab-down": string | CONFIG.CursorDescriptor
    pointer: string | CONFIG.CursorDescriptor
    "pointer-down": string | CONFIG.CursorDescriptor
    text: string | CONFIG.CursorDescriptor
    "text-down": string | CONFIG.CursorDescriptor
  }

  debug: {
    applications: boolean
    audio: boolean
    av: boolean
    avclient: boolean
    canvas: { primary: { bounds: boolean } }
    combat: boolean
    dice: boolean
    documents: boolean
    fog: { extractor: boolean; manager: boolean }
    gamepad: boolean
    hooks: boolean
    i18n: boolean
    keybindings: boolean
    loader: {
      cache: boolean
      eviction: boolean
      load: boolean
      memory: boolean
    }
    mouseInteraction: boolean
    polygons: boolean
    queries: boolean
    rollParsing: boolean
    time: boolean
  }

  /** @default "Signika" */
  defaultFontFamily: string

  fontDefinitions: Record<string, CONFIG.FontFamilyDefinition>

  i18n: { searchMinimumCharacterLength: number }

  /**
   * System and modules must prefix the names of the queries they register (e.g. "my-module.aCustomQuery").
   * Non-prefixed query names are reserved by core.
   */
  queries: {
    confirmTeleportToken: (queryData: { behaviorUuid: string; token: any }) => Promise<boolean>
    dialog: (__namedParameters: { config: object; type: "input" | "wait" | "prompt" | "confirm" }) => Promise<any>
  }

  /**
   * An enumeration of sound effects which can be applied to Sound instances.
   */
  soundEffects: Record<
    string,
    {
      effectClass:
        | (new (context: BaseAudioContext, options?: BiquadFilterOptions) => BiquadFilterNode)
        | (new (context: BaseAudioContext, options?: ConvolverOptions) => ConvolverNode)
      label: string
    }
  >

  /**
   * A mapping of core audio effects used which can be replaced by systems or mods.
   */
  sounds: Record<string, string>

  /**
   * A mapping of status effect IDs which provide some additional mechanical integration.
   */
  specialStatusEffects: Record<string, string>

  /**
   * The array of status effects which can be applied to an Actor.
   */
  statusEffects: CONFIG.StatusEffectConfig[]

  /**
   * Define the set of supported languages for localization.
   */
  supportedLanguages: Record<string, string>

  time: {
    /**
     * The CalendarData subclass is used for IRL timekeeping.
     */
    earthCalendarClass: typeof data.CalendarData
    /**
     * The Calendar configuration used for IRL timekeeping.
     */
    earthCalendarConfig: data.types.CalendarConfig
    /**
     * Formatting functions used to display time data as strings.
     */
    formatters: Record<string, data.types.TimeFormatter>
    /**
     * The number of seconds which automatically elapse at the end of a Combat round.
     */
    roundTime: number
    /**
     * The number of seconds which automatically elapse at the end of a Combat turn.
     */
    turnTime: number
    /**
     * The CalendarData subclass is used for in-world timekeeping.
     */
    // @ts-expect-error Should fix.
    worldCalendarClass: typeof data.types.CalendarData
    /**
     * The Calendar configuration used for in-world timekeeping.
     */
    worldCalendarConfig: data.types.CalendarConfig
  }

  /**
   * Configure the Application classes used to render various core UI elements in the application. The order of this
   * object is relevant, as certain classes need to be constructed and referenced before others.
   */
  ui: {
    actors: ConstructorOf<sidebar.tabs.ActorDirectory<documents.Actor<null>>>
    cards: typeof sidebar.tabs.CardsDirectory
    chat: ConstructorOf<TChatLog>
    combat: ConstructorOf<TCombatTracker>
    compendium: ConstructorOf<TCompendiumDirectory>
    controls: typeof applications.ui.SceneControls
    hotbar: ConstructorOf<THotbar>
    items: ConstructorOf<sidebar.tabs.ItemDirectory<documents.Item<null>>>
    journal: typeof sidebar.tabs.JournalDirectory
    macros: typeof sidebar.tabs.MacroDirectory
    menu: typeof applications.ui.MainMenu
    nav: typeof applications.ui.SceneNavigation
    notifications: typeof applications.ui.Notifications
    pause: typeof applications.ui.GamePause
    players: typeof applications.ui.Players
    playlists: typeof sidebar.tabs.PlaylistDirectory
    scenes: typeof sidebar.tabs.SceneDirectory
    settings: typeof sidebar.tabs.Settings
    sidebar: typeof sidebar.Sidebar
    tables: typeof sidebar.tabs.RollTableDirectory
    webrtc: typeof applications.apps.av.CameraViews
  }

  /**
   * Overrides for various core UI/UX helpers.
   */
  ux: {
    ContextMenu: typeof applications.ux.ContextMenu
    DragDrop: typeof applications.ux.DragDrop
    Draggable: typeof Draggable
    FilePicker: typeof applications.apps.FilePicker
    TextEditor: typeof applications.ux.TextEditor
    TooltipManager: typeof helpers.interaction.TooltipManager
  }

  // @ts-expect-error Should fix.
  weatherEffects: Record<string, WeatherAmbienceConfiguration>

  ActiveEffect: {
    dataModels: Record<string, typeof abstract.TypeDataModel>
    documentClass: ConstructorOf<TActiveEffect>
    /**
     * If true, Active Effects on Items will be copied to the Actor when the Item is created on the Actor if the
     * Active Effect's transfer property is true, and will be deleted when that Item is deleted from the Actor. If
     * false, Active Effects are never copied to the Actor, but will still apply to the Actor from within the Item
     * if the transfer property on the Active Effect is true.
     * @deprecated since V11. It can be set to true until V14, at which point it will be removed.
     */
    legacyTransferral: boolean
    typeIcons: Record<string, string>
    typeLabels: Record<string, string>
  }

  Actor: {
    collection: typeof documents.collections.Actors
    compendiumBanner: string
    compendiumIndexFields: string[]
    dataModels: Record<string, typeof abstract.TypeDataModel>
    documentClass: ConstructorOf<TActor>
    sidebarIcon: string
    trackableAttributes: Record<string, string>
    typeIcons: Record<string, string>
    typeLabels: Record<string, string>
  }

  ActorDelta: {
    documentClass: ConstructorOf<TActorDelta>
  }

  AmbientLight: {
    documentClass: ConstructorOf<TAmbientLightDocument>
    // @ts-expect-error Should fix.
    layerClass: typeof LightingLayer
    objectClass: typeof canvas.placeables.AmbientLight
  }

  AmbientSound: {
    documentClass: ConstructorOf<TAmbientSoundDocument>
    // @ts-expect-error Should fix.
    layerClass: typeof SoundsLayer
    // @ts-expect-error Should fix.
    objectClass: typeof canvas.placeables.AmbientSound
  }

  Canvas: {
    blurQuality: number
    blurStrength: number
    brightestColor: number
    // @ts-expect-error Should fix.
    chatBubblesClass: typeof ChatBubbles
    darknessAnimations: CONFIG.DarknessSourceAnimationConfig
    darknessColor: number
    darknessLightPenalty: number
    // @ts-expect-error Should fix.
    darknessSourceClass: typeof PointDarknessSource
    darknessSourcePaddingMultiplier: number
    darknessToDaylightAnimationMS: number
    daylightColor: number
    daylightToDarknessAnimationMS: number
    // @ts-expect-error Should fix.
    detectionModes: Record<string, DetectionMode>
    dispositionColors: {
      CONTROLLED: number
      FRIENDLY: number
      HOSTILE: number
      INACTIVE: number
      NEUTRAL: number
      PARTY: number
      SECRET: number
    }
    // @ts-expect-error Should fix.
    doorControlClass: typeof DoorControl
    dragSpeedModifier: number
    elevationSnappingPrecision: number
    exploredColor: number
    // @ts-expect-error Should fix.
    fogManager: typeof FogManager
    // @ts-expect-error Should fix.
    globalLightSourceClass: typeof GlobalLightSource
    gridStyles: {
      dashedLines: {
        label: string
        // @ts-expect-error Should fix.
        shaderClass: typeof GridShader
        shaderOptions: { style: number }
      }
      diamondPoints: {
        label: string
        // @ts-expect-error Should fix.
        shaderClass: typeof GridShader
        shaderOptions: { style: number }
      }
      dottedLines: {
        label: string
        // @ts-expect-error Should fix.
        shaderClass: typeof GridShader
        shaderOptions: { style: number }
      }
      roundPoints: {
        label: string
        // @ts-expect-error Should fix.
        shaderClass: typeof GridShader
        shaderOptions: { style: number }
      }
      solidLines: {
        label: string
        // @ts-expect-error Should fix.
        shaderClass: typeof GridShader
        shaderOptions: { style: number }
      }
      squarePoints: {
        label: string
        // @ts-expect-error Should fix.
        shaderClass: typeof GridShader
        shaderOptions: { style: number }
      }
    }
    groups: {
      effects: { groupClass: TEffectsCanvasGroup; parent: string }
      // @ts-expect-error Should fix.
      environment: { groupClass: typeof EnvironmentCanvasGroup; parent: string }
      // @ts-expect-error Should fix.
      hidden: { groupClass: typeof HiddenCanvasGroup; parent: string }
      interface: {
        //groupClass: typeof InterfaceCanvasGroup
        parent: string
        zIndexDrawings: number
        zIndexScrollingText: number
      }
      // @ts-expect-error Should fix.
      overlay: { groupClass: typeof OverlayCanvasGroup; parent: string }
      // @ts-expect-error Should fix.
      primary: { groupClass: typeof PrimaryCanvasGroup; parent: string }
      // @ts-expect-error Should fix.
      rendered: { groupClass: typeof RenderedCanvasGroup; parent: string }
      // @ts-expect-error Should fix.
      visibility: { groupClass: typeof CanvasVisibility; parent: string }
    }
    hoverFade: object
    layers: {
      // @ts-expect-error Should fix.
      controls: { group: string; layerClass: typeof ControlsLayer }
      // @ts-expect-error Should fix.
      drawings: { group: string; layerClass: typeof DrawingsLayer }
      // @ts-expect-error Should fix.
      grid: { group: string; layerClass: typeof GridLayer }
      // @ts-expect-error Should fix.
      lighting: { group: string; layerClass: typeof LightingLayer }
      // @ts-expect-error Should fix.
      notes: { group: string; layerClass: typeof NotesLayer }
      // @ts-expect-error Should fix.
      regions: { group: string; layerClass: typeof RegionLayer }
      // @ts-expect-error Should fix.
      sounds: { group: string; layerClass: typeof SoundsLayer }
      // @ts-expect-error Should fix.
      templates: { group: string; layerClass: typeof TemplateLayer }
      // @ts-expect-error Should fix.
      tiles: { group: string; layerClass: typeof TilesLayer }
      tokens: { group: string; layerClass: typeof canvas.layers.TokenLayer }
      walls: { group: string; layerClass: typeof canvas.layers.WallsLayer }
      // @ts-expect-error Should fix.
      weather: { group: string; layerClass: typeof WeatherEffects }
    }
    lightAnimations: CONFIG.LightSourceAnimationConfig
    lightLevels: {
      bright: number
      dark: number
      dim: number
      halfdark: number
    }
    // @ts-expect-error Should fix.
    lightSourceClass: typeof PointLightSource
    // @ts-expect-error Should fix.
    managedScenes: Record<string, typeof SceneManager>
    maxZoom: undefined
    minZoom: undefined
    objectBorderThickness: number
    pings: {
      pullSpeed: number
      styles: {
        alert: {
          // @ts-expect-error Should fix.
          class: typeof AlertPing
          color: string
          duration: number
          size: number
        }
        // @ts-expect-error Should fix.
        arrow: { class: typeof ArrowPing; duration: number; size: number }
        // @ts-expect-error Should fix.
        chevron: { class: typeof ChevronPing; duration: number; size: number }
        // @ts-expect-error Should fix.
        pulse: { class: typeof PulsePing; duration: number; size: number }
      }
      types: { ALERT: string; ARROW: string; PULL: string; PULSE: string }
    }
    polygonBackends: {
      // @ts-expect-error Should fix.
      darkness: typeof ClockwiseSweepPolygon
      // @ts-expect-error Should fix.
      light: typeof ClockwiseSweepPolygon
      // @ts-expect-error Should fix.
      move: typeof ClockwiseSweepPolygon
      // @ts-expect-error Should fix.
      sight: typeof ClockwiseSweepPolygon
      // @ts-expect-error Should fix.
      sound: typeof ClockwiseSweepPolygon
    }
    // @ts-expect-error Should fix.
    rulerClass: typeof Ruler
    // @ts-expect-error Should fix.
    soundSourceClass: typeof PointSoundSource
    targeting: { size: number }
    unexploredColor: number
    // @ts-expect-error Should fix.
    visibilityFilter: typeof VisibilityFilter
    // @ts-expect-error Should fix.
    visionModes: Record<string, VisionMode>
    // @ts-expect-error Should fix.
    visionSourceClass: typeof PointVisionSource
    // @ts-expect-error Should fix.
    visualEffectsMaskingFilter: typeof VisualEffectsMaskingFilter
  }

  Card: {
    dataModels: Record<string, typeof abstract.TypeDataModel>
    documentClass: typeof documents.Card
    typeIcons: Record<string, string>
    typeLabels: Record<string, string>
  }

  Cards: {
    collection: typeof documents.collections.CardStacks
    compendiumBanner: string
    compendiumIndexFields: string[]
    dataModels: Record<string, typeof abstract.TypeDataModel>
    documentClass: typeof documents.Cards
    presets: {
      pokerDark: { label: string; src: string; type: string }
      pokerLight: { label: string; src: string; type: string }
    }
    sidebarIcon: string
    typeIcons: Record<string, string>
    typeLabels: Record<string, string>
  }

  ChatMessage: {
    batchSize: number
    collection: typeof documents.collections.ChatMessages
    dataModels: Record<string, typeof abstract.TypeDataModel>
    documentClass: ConstructorOf<TChatMessage>
    popoutClass: typeof sidebar.apps.ChatPopout
    sidebarIcon: string
    template: string
    typeIcons: Record<string, string>
    typeLabels: Record<string, string>
  }

  Combat: {
    collection: typeof documents.collections.CombatEncounters
    dataModels: Record<string, typeof abstract.TypeDataModel>
    documentClass: ConstructorOf<TCombat>
    initiative: { decimals: number; formula: null }
    initiativeIcon: { hover: string; icon: string }
    settings: data.CombatConfiguration
    sidebarIcon: string
    sounds: {
      epic: {
        label: string
        nextUp: string[]
        startEncounter: string[]
        yourTurn: string[]
      }
      mc: {
        label: string
        nextUp: string[]
        startEncounter: string[]
        yourTurn: string[]
      }
    }
    typeIcons: Record<string, string>
    typeLabels: Record<string, string>
  }

  Combatant: {
    dataModels: Record<string, typeof abstract.DataModel>
    documentClass: ConstructorOf<TCombatant>
    typeIcons: Record<string, string>
    typeLabels: Record<string, string>
  }

  CombatantGroup: {
    dataModels: Record<string, typeof abstract.TypeDataModel>
    documentClass: typeof documents.CombatantGroup
    typeIcons: Record<string, string>
    typeLabels: Record<string, string>
  }

  DatabaseBackend: data.ClientDatabaseBackend

  Dice: {
    /**
     * Dice roll fulfillment configuration.
     */
    fulfillment: {
      defaultMethod: string
      dice: Record<string, CONFIG.DiceFulfillmentDenomination>
      methods: Record<string, CONFIG.DiceFulfillmentMethod>
    }
    /**
     * A collection of custom functions that can be included in roll expressions.
     */
    functions: Record<string, CONFIG.RollFunction>
    /**
     * A parser implementation for parsing Roll expressions.
     */
    parser: typeof dice.RollParser
    /**
     * A function used to provide random uniform values.
     */
    randomUniform: () => number
    rollModes: {
      blindroll: { icon: string; label: string }
      gmroll: { icon: string; label: string }
      publicroll: { icon: string; label: string }
      selfroll: { icon: string; label: string }
    }
    /**
     * Configured Roll class definitions
     */
    rolls: (typeof dice.Roll)[]
    /**
     * Configured roll terms and the classes they map to.
     */
    terms: Record<string, typeof dice.terms.DiceTerm>
    /**
     * Configured DiceTerm class definitions
     */
    termTypes: Record<string, typeof dice.terms.RollTerm>
    /**
     * The Dice types which are supported.
     */
    types: (typeof dice.terms.DiceTerm)[]
  }

  Drawing: {
    // @ts-expect-error Should fix.
    documentClass: typeof DrawingDocument
    hudClass: typeof applications.hud.DrawingHUD
    // @ts-expect-error Should fix.
    layerClass: typeof DrawingsLayer
    // @ts-expect-error Should fix.
    objectClass: typeof canvas.placeables.Drawing
  }

  FogExploration: {
    collection: typeof documents.collections.FogExplorations
    documentClass: typeof documents.FogExploration
  }

  Folder: {
    collection: typeof documents.collections.Folders
    documentClass: typeof documents.Folder
    sidebarIcon: string
  }

  Item: {
    collection: typeof documents.collections.Items
    compendiumBanner: string
    compendiumIndexFields: string[]
    dataModels: Record<string, typeof abstract.TypeDataModel>
    documentClass: ConstructorOf<TItem>
    sidebarIcon: string
    typeIcons: Record<string, string>
    typeLabels: Record<string, string>
  }

  JournalEntry: {
    collection: typeof documents.collections.Journal
    compendiumBanner: string
    compendiumIndexFields: string[]
    documentClass: typeof documents.JournalEntry
    noteIcons: {
      Anchor: string
      Barrel: string
      Book: string
      Bridge: string
      Castle: string
      Cave: string
      Chest: string
      City: string
      Coins: string
      Fire: string
      "Hanging Sign": string
      House: string
      Mountain: string
      "Oak Tree": string
      Obelisk: string
      Pawprint: string
      Ruins: string
      Skull: string
      Statue: string
      Sword: string
      Tankard: string
      Temple: string
      Tower: string
      Trap: string
      Village: string
      Waterfall: string
      Windmill: string
    }
    sidebarIcon: string
  }

  JournalEntryCategory: {
    documentClass: typeof documents.JournalEntryCategory
  }

  JournalEntryPage: {
    dataModels: Record<string, typeof abstract.TypeDataModel>
    defaultType: string
    documentClass: typeof documents.JournalEntryPage
    sidebarIcon: string
    typeIcons: Record<string, string>
    typeLabels: Record<string, string>
  }

  Macro: {
    collection: typeof documents.collections.Macros
    compendiumBanner: string
    compendiumIndexFields: string[]
    documentClass: typeof documents.Macro
    sidebarIcon: string
  }

  MeasuredTemplate: {
    defaults: { angle: number; width: number }
    documentClass: ConstructorOf<TMeasuredTemplateDocument>
    // @ts-expect-error Should fix.
    layerClass: typeof TemplateLayer
    // @ts-expect-error Should fix.
    objectClass: typeof canvas.placeables.MeasuredTemplate
  }

  Note: {
    documentClass: typeof documents.NoteDocument
    // @ts-expect-error Should fix.
    layerClass: typeof NotesLayer
    // @ts-expect-error Should fix.
    objectClass: typeof canvas.placeables.Note
  }

  Playlist: {
    autoPreloadSeconds: number
    collection: typeof documents.collections.Playlists
    compendiumBanner: string
    compendiumIndexFields: string[]
    documentClass: typeof documents.Playlist
    sidebarIcon: string
  }

  /**
   * Configuration for the PlaylistSound embedded document type.
   */
  PlaylistSound: {
    documentClass: typeof documents.PlaylistSound
    sidebarIcon: string
  }

  /**
   * Configuration for the Region embedded document type and its representation on the game canvas.
   */
  Region: {
    documentClass: ConstructorOf<TRegionDocument>
    // @ts-expect-error Should fix.
    layerClass: typeof RegionLayer
    // @ts-expect-error Should fix.
    objectClass: typeof canvas.placeables.Region
  }

  /**
   * Configuration for the RegionBehavior embedded document type.
   */
  RegionBehavior: {
    // @ts-expect-error Should fix.
    dataModels: Record<string, typeof RegionBehaviorType>
    documentClass: ConstructorOf<TRegionBehavior>
    typeIcons: Record<string, string>
    typeLabels: Record<string, string>
  }

  /**
   * Configuration for RollTable random draws.
   */
  RollTable: {
    collection: typeof documents.collections.RollTables
    compendiumBanner: string
    compendiumIndexFields: string[]
    documentClass: typeof documents.RollTable
    resultIcon: string
    resultTemplate: string
    sidebarIcon: string
  }

  /**
   * Configuration for the Scene document.
   */
  Scene: {
    collection: typeof documents.collections.Scenes
    compendiumBanner: string
    compendiumIndexFields: string[]
    documentClass: ConstructorOf<TScene>
    sidebarIcon: string
  }

  /**
   * Configuration for the TableResult embedded document type.
   */
  TableResult: {
    documentClass: typeof documents.TableResult
  }

  /**
   * Rich text editing configuration.
   */
  TextEditor: {
    /**
     * A collection of custom enrichers that can be applied to text content, allowing for the matching and handling
     * of custom patterns.
     */
    enrichers: CONFIG.TextEditorEnricherConfig[]
  }

  /**
   * Configuration for the Tile embedded document type and its representation on the game canvas.
   */
  Tile: {
    documentClass: ConstructorOf<TTileDocument>
    hudClass: typeof applications.hud.TileHUD
    // @ts-expect-error Should fix.
    layerClass: typeof TilesLayer
    // @ts-expect-error Should fix.
    objectClass: typeof canvas.placeables.Tile
  }

  /**
   * Default configuration options for TinyMCE editors.
   */
  TinyMCE: {
    branding: boolean
    content_css: string[]
    menubar: boolean
    plugins: string
    save_enablewhendirty: boolean
    statusbar: boolean
    style_formats: {
      items: {
        block: string
        classes: string
        title: string
        wrapper: boolean
      }[]
      title: string
    }[]
    style_formats_merge: boolean
    table_default_styles: object
    toolbar: string
  }

  /**
   * Configuration for the Token embedded document type and its representation on the game canvas.
   */
  Token: {
    adjectivesPrefix: string
    documentClass: ConstructorOf<TTokenDocument>
    hudClass: typeof applications.hud.TokenHUD
    layerClass: typeof canvas.layers.TokenLayer
    movement: {
      actions: { [action: string]: Partial<documents.types.TokenMovementActionConfig> }
      defaultAction: string
      /**
       * The default movement animation speed in grid spaces per second.
       */
      defaultSpeed: number
      // @ts-expect-error Should fix.
      TerrainData: typeof BaseTerrainData
    }
    objectClass: typeof canvas.placeables.Token
    // @ts-expect-error Should fix.
    prototypeSheetClass: typeof PrototypeTokenConfig
    // @ts-expect-error Should fix.
    ring: TokenRingConfig
    // @ts-expect-error Should fix.
    rulerClass: typeof TokenRuler
  }

  /**
   * Configuration for the User document.
   */
  User: {
    collection: typeof documents.collections.Users
    documentClass: ConstructorOf<TUser>
  }

  /**
   * Configuration for the Wall embedded document type and its representation on the game canvas.
   */
  Wall: {
    /**
     * The set of animation types that are supported for Wall door animations.
     */
    animationTypes: Record<string, CONFIG.WallDoorAnimationConfig>
    documentClass: ConstructorOf<TWallDocument>
    doorSounds: Record<string, CONFIG.WallDoorSound>
    layerClass: typeof canvas.layers.WallsLayer
    objectClass: typeof canvas.placeables.Wall
    thresholdAttenuationMultiplier: number
  }

  /**
   * Configuration for the WebRTC implementation class.
   */
  WebRTC: {
    clientClass: typeof av.clients.SimplePeerAVClient
    connectedUserPollIntervalS: number
    detectPeerVolumeInterval: number
    detectSelfVolumeInterval: number
    emitVolumeInterval: number
    speakingHistoryLength: number
    speakingThresholdEvents: number
  }
}

export default Config
