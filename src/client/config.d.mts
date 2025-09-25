import type { DataModel, TypeDataModel } from "@common/abstract/_module.mjs"
import { applications, av, canvas, data, dice, documents, helpers } from "./_module.mjs"
import type { TokenMovementActionConfig } from "./_types.mjs"

export namespace debug {
  let applications: boolean
  let audio: boolean
  let combat: boolean
  let dice: boolean
  let documents: boolean
  namespace fog {
    let extractor: boolean
    let manager: boolean
  }
  let hooks: boolean
  let av: boolean
  let avclient: boolean
  let i18n: boolean
  let mouseInteraction: boolean
  let time: boolean
  let keybindings: boolean
  let polygons: boolean
  let gamepad: boolean
  namespace canvas {
    namespace primary {
      let bounds: boolean
    }
  }
  let queries: boolean
  let rollParsing: boolean
  namespace loader {
    let load: boolean
    let cache: boolean
    let eviction: boolean
    let memory: boolean
  }
}
/**
 * Configure the verbosity of compatibility warnings generated throughout the software.
 * The compatibility mode defines the logging level of any displayed warnings.
 * The includePatterns and excludePatterns arrays provide a set of regular expressions which can either only
 * include or specifically exclude certain file paths or warning messages.
 * Exclusion rules take precedence over inclusion rules.
 *
 * @see {@link CONST.COMPATIBILITY_MODES}
 * @type {{mode: number, includePatterns: RegExp[], excludePatterns: RegExp[]}}
 *
 * @example Include Specific Errors
 * ```js
 * const includeRgx = new RegExp("/systems/dnd5e/module/documents/active-effect.mjs");
 * CONFIG.compatibility.includePatterns.push(includeRgx);
 * ```
 *
 * @example Exclude Specific Errors
 * ```js
 * const excludeRgx = new RegExp("/systems/dnd5e/");
 * CONFIG.compatibility.excludePatterns.push(excludeRgx);
 * ```
 *
 * @example Both Include and Exclude
 * ```js
 * const includeRgx = new RegExp("/systems/dnd5e/module/actor/");
 * const excludeRgx = new RegExp("/systems/dnd5e/module/actor/sheets/base.js");
 * CONFIG.compatibility.includePatterns.push(includeRgx);
 * CONFIG.compatibility.excludePatterns.push(excludeRgx);
 * ```
 *
 * @example Targeting more than filenames
 * ```js
 * const includeRgx = new RegExp("applyActiveEffects");
 * CONFIG.compatibility.includePatterns.push(includeRgx);
 * ```
 */
export const compatibility: {
  mode: number
  includePatterns: RegExp[]
  excludePatterns: RegExp[]
}
export namespace compendium {
  let uuidRedirects: Record<string, string>
}
/**
 * Configure the DatabaseBackend used to perform Document operations
 */
export let DatabaseBackend: data.ClientDatabaseBackend
export namespace Actor {
  let documentClass: typeof documents.Actor
  let collection: typeof documents.collections.Actors
  let compendiumIndexFields: string[]
  let compendiumBanner: string
  let sidebarIcon: string
  let dataModels: Record<string, typeof TypeDataModel>
  let typeLabels: Record<string, string>
  let typeIcons: Record<string, string>
  let trackableAttributes: Record<string, string>
}
export namespace Adventure {
  let documentClass_1: typeof documents.Adventure
  export { documentClass_1 as documentClass }
  export let exporterClass: typeof applications.sheets.AdventureExporter
  let compendiumIndexFields_1: string[]
  export { compendiumIndexFields_1 as compendiumIndexFields }
  let compendiumBanner_1: string
  export { compendiumBanner_1 as compendiumBanner }
  let sidebarIcon_1: string
  export { sidebarIcon_1 as sidebarIcon }
}
export namespace Cards {
  let collection_1: typeof documents.collections.CardStacks
  export { collection_1 as collection }
  let compendiumIndexFields_2: string[]
  export { compendiumIndexFields_2 as compendiumIndexFields }
  let compendiumBanner_2: string
  export { compendiumBanner_2 as compendiumBanner }
  let documentClass_2: typeof documents.Cards
  export { documentClass_2 as documentClass }
  let sidebarIcon_2: string
  export { sidebarIcon_2 as sidebarIcon }
  let dataModels_1: Record<string, typeof TypeDataModel>
  export { dataModels_1 as dataModels }
  export namespace presets {
    namespace pokerDark {
      let type: string
      let label: string
      let src: string
    }
    namespace pokerLight {
      let type_1: string
      export { type_1 as type }
      let label_1: string
      export { label_1 as label }
      let src_1: string
      export { src_1 as src }
    }
  }
  let typeLabels_1: Record<string, string>
  export { typeLabels_1 as typeLabels }
  let typeIcons_1: Record<string, string>
  export { typeIcons_1 as typeIcons }
}
export namespace ChatMessage {
  let documentClass_3: typeof documents.ChatMessage
  export { documentClass_3 as documentClass }
  export let popoutClass: typeof applications.sidebar.apps.ChatPopout
  let collection_2: typeof documents.collections.ChatMessages
  export { collection_2 as collection }
  export let template: string
  let sidebarIcon_3: string
  export { sidebarIcon_3 as sidebarIcon }
  let dataModels_2: Record<string, typeof TypeDataModel>
  export { dataModels_2 as dataModels }
  let typeLabels_2: Record<string, string>
  export { typeLabels_2 as typeLabels }
  let typeIcons_2: Record<string, string>
  export { typeIcons_2 as typeIcons }
  export let batchSize: number
}
export namespace Combat {
  let documentClass_4: typeof documents.Combat
  export { documentClass_4 as documentClass }
  let collection_3: typeof documents.collections.CombatEncounters
  export { collection_3 as collection }
  export let settings: data.CombatConfiguration
  let sidebarIcon_4: string
  export { sidebarIcon_4 as sidebarIcon }
  export namespace initiativeIcon {
    let icon: string
    let hover: string
  }
  let dataModels_3: Record<string, typeof TypeDataModel>
  export { dataModels_3 as dataModels }
  let typeLabels_3: Record<string, string>
  export { typeLabels_3 as typeLabels }
  let typeIcons_3: Record<string, string>
  export { typeIcons_3 as typeIcons }
  export namespace initiative {
    let formula: null
    let decimals: number
  }
  export let fallbackTurnMarker: string
  export namespace sounds {
    namespace epic {
      let label_2: string
      export { label_2 as label }
      export let startEncounter: string[]
      export let nextUp: string[]
      export let yourTurn: string[]
    }
    namespace mc {
      let label_3: string
      export { label_3 as label }
      let startEncounter_1: string[]
      export { startEncounter_1 as startEncounter }
      let nextUp_1: string[]
      export { nextUp_1 as nextUp }
      let yourTurn_1: string[]
      export { yourTurn_1 as yourTurn }
    }
  }
}
export namespace Dice {
  export let types: Array<typeof dice.terms.DiceTerm>
  export namespace rollModes {
    namespace publicroll {
      let label_4: string
      export { label_4 as label }
      let icon_1: string
      export { icon_1 as icon }
    }
    namespace gmroll {
      let label_5: string
      export { label_5 as label }
      let icon_2: string
      export { icon_2 as icon }
    }
    namespace blindroll {
      let label_6: string
      export { label_6 as label }
      let icon_3: string
      export { icon_3 as icon }
    }
    namespace selfroll {
      let label_7: string
      export { label_7 as label }
      let icon_4: string
      export { icon_4 as icon }
    }
  }
  export let rolls: Array<typeof dice.Roll>
  export { termTypes }
  export let terms: Record<string, typeof dice.terms.DiceTerm>
  export let randomUniform: () => number
  export let parser: typeof dice.RollParser
  export let functions: Record<string, RollFunction>
  export let fulfillment: {
    dice: Record<string, DiceFulfillmentDenomination>
    methods: Record<string, DiceFulfillmentMethod>
    defaultMethod: string
  }
}
export namespace FogExploration {
  let documentClass_5: typeof documents.FogExploration
  export { documentClass_5 as documentClass }
  let collection_4: typeof documents.collections.FogExplorations
  export { collection_4 as collection }
}
export namespace Folder {
  let documentClass_6: typeof documents.Folder
  export { documentClass_6 as documentClass }
  let collection_5: typeof documents.collections.Folders
  export { collection_5 as collection }
  let sidebarIcon_5: string
  export { sidebarIcon_5 as sidebarIcon }
}
export namespace Item {
  let documentClass_7: typeof documents.Item
  export { documentClass_7 as documentClass }
  let collection_6: typeof documents.collections.Items
  export { collection_6 as collection }
  let compendiumIndexFields_3: string[]
  export { compendiumIndexFields_3 as compendiumIndexFields }
  let compendiumBanner_3: string
  export { compendiumBanner_3 as compendiumBanner }
  let sidebarIcon_6: string
  export { sidebarIcon_6 as sidebarIcon }
  let dataModels_4: Record<string, typeof TypeDataModel>
  export { dataModels_4 as dataModels }
  let typeLabels_4: Record<string, string>
  export { typeLabels_4 as typeLabels }
  let typeIcons_4: Record<string, string>
  export { typeIcons_4 as typeIcons }
}
export namespace JournalEntry {
  let documentClass_8: typeof documents.JournalEntry
  export { documentClass_8 as documentClass }
  let collection_7: typeof documents.collections.Journal
  export { collection_7 as collection }
  let compendiumIndexFields_4: string[]
  export { compendiumIndexFields_4 as compendiumIndexFields }
  let compendiumBanner_4: string
  export { compendiumBanner_4 as compendiumBanner }
  export let noteIcons: {
    Anchor: string
    Barrel: string
    Book: string
    Bridge: string
    Cave: string
    Castle: string
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
  let sidebarIcon_7: string
  export { sidebarIcon_7 as sidebarIcon }
}
export namespace Macro {
  let documentClass_9: typeof documents.Macro
  export { documentClass_9 as documentClass }
  let collection_8: typeof documents.collections.Macros
  export { collection_8 as collection }
  let compendiumIndexFields_5: string[]
  export { compendiumIndexFields_5 as compendiumIndexFields }
  let compendiumBanner_5: string
  export { compendiumBanner_5 as compendiumBanner }
  let sidebarIcon_8: string
  export { sidebarIcon_8 as sidebarIcon }
}
export namespace Playlist {
  let documentClass_10: typeof documents.Playlist
  export { documentClass_10 as documentClass }
  let collection_9: typeof documents.collections.Playlists
  export { collection_9 as collection }
  let compendiumIndexFields_6: string[]
  export { compendiumIndexFields_6 as compendiumIndexFields }
  let compendiumBanner_6: string
  export { compendiumBanner_6 as compendiumBanner }
  let sidebarIcon_9: string
  export { sidebarIcon_9 as sidebarIcon }
  export let autoPreloadSeconds: number
}
export namespace RollTable {
  let documentClass_11: typeof documents.RollTable
  export { documentClass_11 as documentClass }
  let collection_10: typeof documents.collections.RollTables
  export { collection_10 as collection }
  let compendiumIndexFields_7: string[]
  export { compendiumIndexFields_7 as compendiumIndexFields }
  let compendiumBanner_7: string
  export { compendiumBanner_7 as compendiumBanner }
  let sidebarIcon_10: string
  export { sidebarIcon_10 as sidebarIcon }
  export let resultIcon: string
  export let resultTemplate: string
}
export namespace Scene {
  let documentClass_12: typeof documents.Scene
  export { documentClass_12 as documentClass }
  let collection_11: typeof documents.collections.Scenes
  export { collection_11 as collection }
  let compendiumIndexFields_8: string[]
  export { compendiumIndexFields_8 as compendiumIndexFields }
  let compendiumBanner_8: string
  export { compendiumBanner_8 as compendiumBanner }
  let sidebarIcon_11: string
  export { sidebarIcon_11 as sidebarIcon }
}
export namespace Setting {
  let documentClass_13: typeof documents.Setting
  export { documentClass_13 as documentClass }
  let collection_12: typeof documents.collections.WorldSettings
  export { collection_12 as collection }
}
export namespace User {
  let documentClass_14: typeof documents.User
  export { documentClass_14 as documentClass }
  let collection_13: typeof documents.collections.Users
  export { collection_13 as collection }
}
export namespace Canvas {
  let elevationSnappingPrecision: number
  let blurStrength: number
  let blurQuality: number
  let darknessColor: number
  let daylightColor: number
  let brightestColor: number
  let chatBubblesClass: typeof canvas.animation.ChatBubbles
  let darknessLightPenalty: number
  namespace dispositionColors {
    let HOSTILE: number
    let NEUTRAL: number
    let FRIENDLY: number
    let INACTIVE: number
    let PARTY: number
    let CONTROLLED: number
    let SECRET: number
  }
  let doorControlClass: typeof canvas.containers.DoorControl
  let exploredColor: number
  let unexploredColor: number
  let darknessToDaylightAnimationMS: number
  let daylightToDarknessAnimationMS: number
  let darknessSourceClass: typeof canvas.sources.PointDarknessSource
  let lightSourceClass: typeof canvas.sources.PointLightSource
  let globalLightSourceClass: typeof canvas.sources.GlobalLightSource
  let visionSourceClass: typeof canvas.sources.PointVisionSource
  let soundSourceClass: typeof canvas.sources.PointSoundSource
  namespace groups {
    export namespace hidden {
      let groupClass: typeof canvas.groups.HiddenCanvasGroup
      let parent: string
    }
    export namespace rendered {
      let groupClass_1: typeof canvas.groups.RenderedCanvasGroup
      export { groupClass_1 as groupClass }
      let parent_1: string
      export { parent_1 as parent }
    }
    export namespace environment {
      let groupClass_2: typeof canvas.groups.EnvironmentCanvasGroup
      export { groupClass_2 as groupClass }
      let parent_2: string
      export { parent_2 as parent }
    }
    export namespace primary_1 {
      let groupClass_3: typeof canvas.groups.PrimaryCanvasGroup
      export { groupClass_3 as groupClass }
      let parent_3: string
      export { parent_3 as parent }
    }
    export { primary_1 as primary }
    export namespace effects {
      let groupClass_4: typeof canvas.groups.EffectsCanvasGroup
      export { groupClass_4 as groupClass }
      let parent_4: string
      export { parent_4 as parent }
    }
    export namespace visibility {
      let groupClass_5: typeof canvas.groups.CanvasVisibility
      export { groupClass_5 as groupClass }
      let parent_5: string
      export { parent_5 as parent }
    }
    export namespace _interface {
      let groupClass_6: typeof canvas.groups.InterfaceCanvasGroup
      export { groupClass_6 as groupClass }
      let parent_6: string
      export { parent_6 as parent }
      export let zIndexDrawings: number
      export let zIndexScrollingText: number
    }
    export { _interface as interface }
    export namespace overlay {
      let groupClass_7: typeof canvas.groups.OverlayCanvasGroup
      export { groupClass_7 as groupClass }
      let parent_7: string
      export { parent_7 as parent }
    }
  }
  namespace layers {
    export namespace weather {
      let layerClass: typeof canvas.layers.WeatherEffects
      let group: string
    }
    export namespace grid {
      let layerClass_1: typeof canvas.layers.GridLayer
      export { layerClass_1 as layerClass }
      let group_1: string
      export { group_1 as group }
    }
    export namespace regions {
      let layerClass_2: typeof canvas.layers.RegionLayer
      export { layerClass_2 as layerClass }
      let group_2: string
      export { group_2 as group }
    }
    export namespace drawings {
      let layerClass_3: typeof canvas.layers.DrawingsLayer
      export { layerClass_3 as layerClass }
      let group_3: string
      export { group_3 as group }
    }
    export namespace templates {
      let layerClass_4: typeof canvas.layers.TemplateLayer
      export { layerClass_4 as layerClass }
      let group_4: string
      export { group_4 as group }
    }
    export namespace tiles {
      let layerClass_5: typeof canvas.layers.TilesLayer
      export { layerClass_5 as layerClass }
      let group_5: string
      export { group_5 as group }
    }
    export namespace walls {
      let layerClass_6: typeof canvas.layers.WallsLayer
      export { layerClass_6 as layerClass }
      let group_6: string
      export { group_6 as group }
    }
    export namespace tokens {
      let layerClass_7: typeof canvas.layers.TokenLayer
      export { layerClass_7 as layerClass }
      let group_7: string
      export { group_7 as group }
    }
    export namespace sounds_1 {
      let layerClass_8: typeof canvas.layers.SoundsLayer
      export { layerClass_8 as layerClass }
      let group_8: string
      export { group_8 as group }
    }
    export { sounds_1 as sounds }
    export namespace lighting {
      let layerClass_9: typeof canvas.layers.LightingLayer
      export { layerClass_9 as layerClass }
      let group_9: string
      export { group_9 as group }
    }
    export namespace notes {
      let layerClass_10: typeof canvas.layers.NotesLayer
      export { layerClass_10 as layerClass }
      let group_10: string
      export { group_10 as group }
    }
    export namespace controls {
      let layerClass_11: typeof canvas.layers.ControlsLayer
      export { layerClass_11 as layerClass }
      let group_11: string
      export { group_11 as group }
    }
  }
  namespace lightLevels {
    let dark: number
    let halfdark: number
    let dim: number
    let bright: number
  }
  let fogManager: typeof canvas.perception.FogManager
  namespace polygonBackends {
    let sight: typeof canvas.geometry.ClockwiseSweepPolygon
    let light: typeof canvas.geometry.ClockwiseSweepPolygon
    let darkness: typeof canvas.geometry.ClockwiseSweepPolygon
    let sound: typeof canvas.geometry.ClockwiseSweepPolygon
    let move: typeof canvas.geometry.ClockwiseSweepPolygon
  }
  let darknessSourcePaddingMultiplier: number
  let visibilityFilter: typeof canvas.rendering.filters.VisibilityFilter
  let visualEffectsMaskingFilter: typeof canvas.rendering.filters.VisualEffectsMaskingFilter
  let rulerClass: typeof canvas.interaction.Ruler
  let dragSpeedModifier: number
  let maxZoom: undefined
  let minZoom: undefined
  let objectBorderThickness: number
  namespace gridStyles {
    namespace solidLines {
      let label_8: string
      export { label_8 as label }
      export let shaderClass: typeof canvas.rendering.shaders.GridShader
      export namespace shaderOptions {
        let style: number
      }
    }
    namespace dashedLines {
      let label_9: string
      export { label_9 as label }
      let shaderClass_1: typeof canvas.rendering.shaders.GridShader
      export { shaderClass_1 as shaderClass }
      export namespace shaderOptions_1 {
        let style_1: number
        export { style_1 as style }
      }
      export { shaderOptions_1 as shaderOptions }
    }
    namespace dottedLines {
      let label_10: string
      export { label_10 as label }
      let shaderClass_2: typeof canvas.rendering.shaders.GridShader
      export { shaderClass_2 as shaderClass }
      export namespace shaderOptions_2 {
        let style_2: number
        export { style_2 as style }
      }
      export { shaderOptions_2 as shaderOptions }
    }
    namespace squarePoints {
      let label_11: string
      export { label_11 as label }
      let shaderClass_3: typeof canvas.rendering.shaders.GridShader
      export { shaderClass_3 as shaderClass }
      export namespace shaderOptions_3 {
        let style_3: number
        export { style_3 as style }
      }
      export { shaderOptions_3 as shaderOptions }
    }
    namespace diamondPoints {
      let label_12: string
      export { label_12 as label }
      let shaderClass_4: typeof canvas.rendering.shaders.GridShader
      export { shaderClass_4 as shaderClass }
      export namespace shaderOptions_4 {
        let style_4: number
        export { style_4 as style }
      }
      export { shaderOptions_4 as shaderOptions }
    }
    namespace roundPoints {
      let label_13: string
      export { label_13 as label }
      let shaderClass_5: typeof canvas.rendering.shaders.GridShader
      export { shaderClass_5 as shaderClass }
      export namespace shaderOptions_5 {
        let style_5: number
        export { style_5 as style }
      }
      export { shaderOptions_5 as shaderOptions }
    }
  }
  let lightAnimations: LightSourceAnimationConfig
  let darknessAnimations: DarknessSourceAnimationConfig
  let managedScenes: Record<string, typeof canvas.SceneManager>
  namespace pings {
    export namespace types_1 {
      let PULSE: string
      let ALERT: string
      let PULL: string
      let ARROW: string
    }
    export { types_1 as types }
    export namespace styles {
      namespace alert {
        let _class: typeof canvas.interaction.AlertPing
        export { _class as class }
        export let color: string
        export let size: number
        export let duration: number
      }
      namespace arrow {
        let _class_1: typeof canvas.interaction.ArrowPing
        export { _class_1 as class }
        let size_1: number
        export { size_1 as size }
        let duration_1: number
        export { duration_1 as duration }
      }
      namespace chevron {
        let _class_2: typeof canvas.interaction.ChevronPing
        export { _class_2 as class }
        let size_2: number
        export { size_2 as size }
        let duration_2: number
        export { duration_2 as duration }
      }
      namespace pulse {
        let _class_3: typeof canvas.interaction.PulsePing
        export { _class_3 as class }
        let size_3: number
        export { size_3 as size }
        let duration_3: number
        export { duration_3 as duration }
      }
    }
    export let pullSpeed: number
  }
  namespace targeting {
    let size_4: number
    export { size_4 as size }
  }
  let hoverFade: object
  let visionModes: Record<string, canvas.perception.VisionMode>
  let detectionModes: Record<string, canvas.perception.DetectionMode>
  namespace transcoders {
    let basis: boolean
  }
}
/**
 * Configure the default Token text style so that it may be reused and overridden by modules
 */
export let canvasTextStyle: any
/**
 * @typedef WeatherAmbienceConfiguration
 * Available Weather Effects implementations
 * @property {string} id
 * @property {string} label
 * @property {{enabled: boolean; blendMode?: PIXI.BLEND_MODES}} [filter]
 * @property {WeatherEffectConfiguration[]} effects
 */
/**
 * @typedef WeatherEffectConfiguration
 * @property {string} id
 * @property {typeof ParticleEffect|typeof canvas.rendering.shaders.WeatherShaderEffect} effectClass
 * @property {typeof canvas.rendering.shaders.AbstractWeatherShader} [shaderClass]
 * @property {PIXI.BLEND_MODES} [blendMode]
 * @property {object} [config]
 * @property {number} [performanceLevel]
 */
/** @type {Record<string, WeatherAmbienceConfiguration>} */
export const weatherEffects: Record<string, WeatherAmbienceConfiguration>
export namespace controlIcons {
  let combat_1: string
  export { combat_1 as combat }
  let visibility_1: string
  export { visibility_1 as visibility }
  let effects_1: string
  export { effects_1 as effects }
  export let lock: string
  export let up: string
  export let down: string
  export let defeated: string
  let light_1: string
  export { light_1 as light }
  export let lightOff: string
  let template_1: string
  export { template_1 as template }
  let sound_1: string
  export { sound_1 as sound }
  export let soundOff: string
  export let doorClosed: string
  export let doorOpen: string
  export let doorSecret: string
  export let doorLocked: string
  export let wallDirection: string
}
/**
 * @typedef _FontDefinition
 * @property {string[]} urls  An array of remote URLs the font files exist at.
 */
/**
 * @typedef {FontFaceDescriptors & _FontDefinition} FontDefinition
 */
/**
 * @typedef FontFamilyDefinition
 * @property {boolean} editor          Whether the font is available in the rich text editor. This will also enable it
 *                                     for notes and drawings.
 * @property {FontDefinition[]} fonts  Individual font face definitions for this font family. If this is empty, the
 *                                     font family may only be loaded from the client's OS-installed fonts.
 */
/**
 * A collection of fonts to load either from the user's local system, or remotely.
 * @type {Record<string, FontFamilyDefinition>}
 */
export const fontDefinitions: Record<string, FontFamilyDefinition>
/**
 * The default font family used for text labels on the PIXI Canvas
 */
export let defaultFontFamily: string
/**
 * @typedef _StatusEffectConfig
 * @property {string} id                       A string identifier for the effect.
 * @property {string} [label]                  DEPRECATED alias for "name".
 * @property {string} [icon]                   DEPRECATED alias for "img".
 * @property {boolean|{actorTypes?: string[]}} [hud=true]  Should this effect appear in the Token HUD?
 *                                          This effect is only selectable in the Token HUD if the Token's
 *                                          Actor sub-type is one of the configured ones.
 */
/**
 * @typedef {_StatusEffectConfig & Partial<documents.types.ActiveEffectData>} StatusEffectConfig
 * Configured status effects recognized by the game system.
 * Properties "name" and "img" should be preferred over "label" and "icon".
 */
/**
 * The array of status effects which can be applied to an Actor.
 * @type {StatusEffectConfig[]}
 */
export const statusEffects: StatusEffectConfig[]
/**
 * A mapping of status effect IDs which provide some additional mechanical integration.
 * @type {Record<string, string>}
 */
export const specialStatusEffects: Record<string, string>
/**
 * A mapping of core audio effects used which can be replaced by systems or mods
 * @type {Record<string, string>}
 */
export const sounds: Record<string, string>
/**
 * Define the set of supported languages for localization
 * @type {Record<string, string>}
 */
export const supportedLanguages: Record<string, string>
export namespace i18n {
  let searchMinimumCharacterLength: number
}
export namespace time {
  let worldCalendarConfig: data.types.CalendarConfig
  let worldCalendarClass: typeof data.CalendarData
  let earthCalendarConfig: data.types.CalendarConfig
  let earthCalendarClass: typeof data.CalendarData
  let turnTime: number
  let roundTime: number
  let formatters: Record<string, data.TimeFormatter>
}
export namespace ActiveEffect {
  let documentClass_15: typeof documents.ActiveEffect
  export { documentClass_15 as documentClass }
  let dataModels_5: Record<string, typeof TypeDataModel>
  export { dataModels_5 as dataModels }
  let typeLabels_5: Record<string, string>
  export { typeLabels_5 as typeLabels }
  let typeIcons_5: Record<string, string>
  export { typeIcons_5 as typeIcons }
  export let legacyTransferral: boolean
}
export namespace ActorDelta {
  let documentClass_16: typeof documents.ActorDelta
  export { documentClass_16 as documentClass }
}
export namespace Card {
  let documentClass_17: typeof documents.Card
  export { documentClass_17 as documentClass }
  let dataModels_6: Record<string, typeof TypeDataModel>
  export { dataModels_6 as dataModels }
  let typeLabels_6: Record<string, string>
  export { typeLabels_6 as typeLabels }
  let typeIcons_6: Record<string, string>
  export { typeIcons_6 as typeIcons }
}
export namespace TableResult {
  let documentClass_18: typeof documents.TableResult
  export { documentClass_18 as documentClass }
}
export namespace JournalEntryCategory {
  let documentClass_19: typeof documents.JournalEntryCategory
  export { documentClass_19 as documentClass }
}
export namespace JournalEntryPage {
  let documentClass_20: typeof documents.JournalEntryPage
  export { documentClass_20 as documentClass }
  let dataModels_7: Record<string, typeof TypeDataModel>
  export { dataModels_7 as dataModels }
  let typeLabels_7: Record<string, string>
  export { typeLabels_7 as typeLabels }
  let typeIcons_7: Record<string, string>
  export { typeIcons_7 as typeIcons }
  export let defaultType: string
  let sidebarIcon_12: string
  export { sidebarIcon_12 as sidebarIcon }
}
export namespace PlaylistSound {
  let documentClass_21: typeof documents.PlaylistSound
  export { documentClass_21 as documentClass }
  let sidebarIcon_13: string
  export { sidebarIcon_13 as sidebarIcon }
}
export namespace AmbientLight {
  let documentClass_22: typeof documents.AmbientLightDocument
  export { documentClass_22 as documentClass }
  export let objectClass: typeof canvas.placeables.AmbientLight
  let layerClass_12: typeof canvas.layers.LightingLayer
  export { layerClass_12 as layerClass }
}
export namespace AmbientSound {
  let documentClass_23: typeof documents.AmbientSoundDocument
  export { documentClass_23 as documentClass }
  let objectClass_1: typeof canvas.placeables.AmbientSound
  export { objectClass_1 as objectClass }
  let layerClass_13: typeof canvas.layers.SoundsLayer
  export { layerClass_13 as layerClass }
}
export namespace Combatant {
  let documentClass_24: typeof documents.Combatant
  export { documentClass_24 as documentClass }
  let dataModels_8: Record<string, typeof DataModel>
  export { dataModels_8 as dataModels }
  let typeLabels_8: Record<string, string>
  export { typeLabels_8 as typeLabels }
  let typeIcons_8: Record<string, string>
  export { typeIcons_8 as typeIcons }
}
export namespace CombatantGroup {
  let documentClass_25: typeof documents.CombatantGroup
  export { documentClass_25 as documentClass }
  let dataModels_9: Record<string, typeof TypeDataModel>
  export { dataModels_9 as dataModels }
  let typeLabels_9: Record<string, string>
  export { typeLabels_9 as typeLabels }
  let typeIcons_9: Record<string, string>
  export { typeIcons_9 as typeIcons }
}
export namespace Drawing {
  let documentClass_26: typeof documents.DrawingDocument
  export { documentClass_26 as documentClass }
  let objectClass_2: typeof canvas.placeables.Drawing
  export { objectClass_2 as objectClass }
  let layerClass_14: typeof canvas.layers.DrawingsLayer
  export { layerClass_14 as layerClass }
  export let hudClass: typeof applications.hud.DrawingHUD
}
export namespace MeasuredTemplate {
  export namespace defaults {
    let angle: number
    let width: number
  }
  let documentClass_27: typeof documents.MeasuredTemplateDocument
  export { documentClass_27 as documentClass }
  let objectClass_3: typeof canvas.placeables.MeasuredTemplate
  export { objectClass_3 as objectClass }
  let layerClass_15: typeof canvas.layers.TemplateLayer
  export { layerClass_15 as layerClass }
  const types_2: object
  export { types_2 as types }
}
export namespace Note {
  let documentClass_28: typeof documents.NoteDocument
  export { documentClass_28 as documentClass }
  let objectClass_4: typeof canvas.placeables.Note
  export { objectClass_4 as objectClass }
  let layerClass_16: typeof canvas.layers.NotesLayer
  export { layerClass_16 as layerClass }
}
export namespace Region {
  let documentClass_29: typeof documents.RegionDocument
  export { documentClass_29 as documentClass }
  let objectClass_5: typeof canvas.placeables.Region
  export { objectClass_5 as objectClass }
  let layerClass_17: typeof canvas.layers.RegionLayer
  export { layerClass_17 as layerClass }
}
export namespace RegionBehavior {
  let documentClass_30: typeof documents.RegionBehavior
  export { documentClass_30 as documentClass }
  let dataModels_10: Record<string, typeof data.regionBehaviors.RegionBehaviorType>
  export { dataModels_10 as dataModels }
  let typeLabels_10: Record<string, string>
  export { typeLabels_10 as typeLabels }
  let typeIcons_10: Record<string, string>
  export { typeIcons_10 as typeIcons }
}
export namespace Tile {
  let documentClass_31: typeof documents.TileDocument
  export { documentClass_31 as documentClass }
  let objectClass_6: typeof canvas.placeables.Tile
  export { objectClass_6 as objectClass }
  let layerClass_18: typeof canvas.layers.TilesLayer
  export { layerClass_18 as layerClass }
  let hudClass_1: typeof applications.hud.TileHUD
  export { hudClass_1 as hudClass }
}
export namespace Token {
  let documentClass_32: typeof documents.TokenDocument
  export { documentClass_32 as documentClass }
  let objectClass_7: typeof canvas.placeables.Token
  export { objectClass_7 as objectClass }
  let layerClass_19: typeof canvas.layers.TokenLayer
  export { layerClass_19 as layerClass }
  export let prototypeSheetClass: typeof applications.sheets.PrototypeTokenConfig
  let hudClass_2: typeof applications.hud.TokenHUD
  export { hudClass_2 as hudClass }
  let rulerClass_1: typeof canvas.placeables.tokens.TokenRuler
  export { rulerClass_1 as rulerClass }
  export namespace movement {
    let TerrainData: typeof data.BaseTerrainData
    let costAggregator: documents.types.TokenMovementCostAggregator
    let defaultSpeed: number
    let defaultAction: string
    let actions: {
      [action: string]: Partial<TokenMovementActionConfig>
    }
  }
  export let adjectivesPrefix: string
  export let ring: canvas.placeables.tokens.TokenRingConfig
}
export namespace Wall {
  let documentClass_33: typeof documents.WallDocument
  export { documentClass_33 as documentClass }
  let objectClass_8: typeof canvas.placeables.Wall
  export { objectClass_8 as objectClass }
  let layerClass_20: typeof canvas.layers.WallsLayer
  export { layerClass_20 as layerClass }
  export let animationTypes: Record<string, WallDoorAnimationConfig>
  export let doorSounds: Record<string, WallDoorSound>
  export let textureGridSize: number
  export let thresholdAttenuationMultiplier: number
}
/**
 * An enumeration of sound effects which can be applied to Sound instances.
 * @type {Record<string, {label: string, effectClass: typeof BiquadFilterNode|typeof ConvolverNode}>}
 */
export const soundEffects: Record<
  string,
  {
    label: string
    effectClass: typeof BiquadFilterNode | typeof ConvolverNode
  }
>
export namespace TinyMCE {
  let branding: boolean
  let menubar: boolean
  let statusbar: boolean
  let content_css: string[]
  let plugins: string
  let toolbar: string
  let save_enablewhendirty: boolean
  let table_default_styles: object
  let style_formats: {
    title: string
    items: {
      title: string
      block: string
      classes: string
      wrapper: boolean
    }[]
  }[]
  let style_formats_merge: boolean
}
export namespace TextEditor {
  let enrichers: TextEditorEnricherConfig[]
}
export namespace WebRTC {
  let clientClass: typeof av.clients.SimplePeerAVClient
  let detectPeerVolumeInterval: number
  let detectSelfVolumeInterval: number
  let emitVolumeInterval: number
  let speakingThresholdEvents: number
  let speakingHistoryLength: number
  let connectedUserPollIntervalS: number
}
export namespace ui {
  export let menu: typeof applications.ui.MainMenu
  export let sidebar: typeof applications.sidebar.Sidebar
  export let pause: typeof applications.ui.GamePause
  export let nav: typeof applications.ui.SceneNavigation
  export let notifications: typeof applications.ui.Notifications
  export let actors: typeof applications.sidebar.tabs.ActorDirectory
  export let cards: typeof applications.sidebar.tabs.CardsDirectory
  export let chat: typeof applications.sidebar.tabs.ChatLog
  let combat_2: typeof applications.sidebar.tabs.CombatTracker
  export { combat_2 as combat }
  export let compendium: typeof applications.sidebar.tabs.CompendiumDirectory
  let controls_1: typeof applications.ui.SceneControls
  export { controls_1 as controls }
  export let hotbar: typeof applications.ui.Hotbar
  export let items: typeof applications.sidebar.tabs.ItemDirectory
  export let journal: typeof applications.sidebar.tabs.JournalDirectory
  export let macros: typeof applications.sidebar.tabs.MacroDirectory
  export let players: typeof applications.ui.Players
  export let playlists: typeof applications.sidebar.tabs.PlaylistDirectory
  export let scenes: typeof applications.sidebar.tabs.SceneDirectory
  let settings_1: typeof applications.sidebar.tabs.Settings
  export { settings_1 as settings }
  export let tables: typeof applications.sidebar.tabs.RollTableDirectory
  export let webrtc: typeof applications.apps.av.CameraViews
}
export namespace ux {
  let ContextMenu: typeof applications.ux.ContextMenu
  let Draggable: typeof applications.ux.Draggable
  let DragDrop: typeof applications.ux.DragDrop
  let FilePicker: typeof applications.apps.FilePicker
  let TextEditor: typeof applications.ux.TextEditor
  let TooltipManager: typeof helpers.interaction.TooltipManager
}
export namespace queries {
  let dialog: ({ type, config }: { type: "prompt" | "confirm" | "input" | "wait"; config: object }) => Promise<any>
  let confirmTeleportToken: (queryData: { behaviorUuid: string; token: any }) => Promise<boolean>
}
/**
 * @typedef CursorDescriptor
 * @property {string} url  The URL of the cursor image. Must be no larger than 128x128. 32x32 is recommended.
 * @property {number} [x]  The X co-ordinate of the cursor hotspot.
 * @property {number} [y]  The Y co-ordinate of the cursor hotspot.
 */
/**
 * Configure custom cursor images to use when interacting with the application.
 * @type {{
 *  default: string|CursorDescriptor,
 *  "default-down": string|CursorDescriptor,
 *  pointer: string|CursorDescriptor,
 *  "pointer-down": string|CursorDescriptor,
 *  grab: string|CursorDescriptor,
 *  "grab-down": string|CursorDescriptor,
 *  text: string|CursorDescriptor,
 *  "text-down": string|CursorDescriptor
 * }}
 *
 * @example Configuring a cursor with a hotspot in the default top-left.
 * ```js
 * Object.assign(CONFIG.cursors, {
 *   default: "icons/cursors/default.avif",
 *   "default-down": "icons/cursors/default-down.avif"
 * });
 * ```
 *
 * @example Configuring a cursor with a hotspot in the center.
 * ```js
 * Object.assign(CONFIG.cursors, {
 *   default: { url: "icons/cursors/target.avif", x: 16, y: 16 },
 *   "default-down": { url: "icons/cursors/target-down.avif", x: 16, y: 16 }
 * });
 * ```
 */
export const cursors: {
  default: string | CursorDescriptor
  "default-down": string | CursorDescriptor
  pointer: string | CursorDescriptor
  "pointer-down": string | CursorDescriptor
  grab: string | CursorDescriptor
  "grab-down": string | CursorDescriptor
  text: string | CursorDescriptor
  "text-down": string | CursorDescriptor
}
export type DiceFulfillmentConfiguration = {
  /**
   * The die denominations available for configuration.
   */
  dice: Record<string, DiceFulfillmentDenomination>
  /**
   * The methods available for fulfillment.
   */
  methods: Record<string, DiceFulfillmentMethod>
  /**
   * Designate one of the methods to be used by default
   * for dice fulfillment, if the user hasn't specified
   * otherwise. Leave this blank to use the configured
   * randomUniform to generate die rolls.
   */
  defaultMethod: string
}
export type DiceFulfillmentDenomination = {
  /**
   * The human-readable label for the die.
   */
  label: string
  /**
   * An icon to display on the configuration sheet.
   */
  icon: string
}
export type DiceFulfillmentMethod = {
  /**
   * The human-readable label for the fulfillment method.
   */
  label: string
  /**
   * An icon to represent the fulfillment method.
   */
  icon?: string | undefined
  /**
   * Whether this method requires input from the user or if it is
   *        fulfilled entirely programmatically.
   */
  interactive?: boolean | undefined
  /**
   * A function to invoke to programmatically fulfil a given term for non-
   *   interactive fulfillment methods.
   */
  handler?: DiceFulfillmentHandler | undefined
  /**
   * A custom RollResolver implementation. If the only interactive methods
   *     the user has configured are this method and manual, this resolver will
   *     be used to resolve interactive rolls, instead of the default resolver.
   *     This resolver must therefore be capable of handling manual rolls.
   */
  resolver?: typeof applications.dice.RollResolver | undefined
}
/**
 * Only used for non-interactive fulfillment methods. If a die configured to use this fulfillment method is rolled,
 * this handler is called and awaited in order to produce the die roll result.
 */
export type DiceFulfillmentHandler = (
  term: dice.terms.DiceTerm,
  options?: object | undefined,
) => number | void | Promise<number | void>
export type RollFunction = (...args: any[]) => Promise<number | string> | number | string
/**
 * A light source animation configuration object.
 */
export type LightSourceAnimationConfig = Record<
  string,
  {
    label: string
    animation: Function
    backgroundShader?: typeof canvas.rendering.shaders.AdaptiveBackgroundShader
    illuminationShader?: typeof canvas.rendering.shaders.AdaptiveIlluminationShader
    colorationShader: typeof canvas.rendering.shaders.AdaptiveColorationShader
  }
>
/**
 * A darkness source animation configuration object.
 */
export type DarknessSourceAnimationConfig = Record<
  string,
  {
    label: string
    animation: Function
    darknessShader: typeof canvas.rendering.shaders.AdaptiveDarknessShader
  }
>
/**
 * Available Weather Effects implementations
 */
export type WeatherAmbienceConfiguration = {
  id: string
  label: string
  filter?:
    | {
        enabled: boolean
        blendMode?: PIXI.BLEND_MODES
      }
    | undefined
  effects: WeatherEffectConfiguration[]
}
export type WeatherEffectConfiguration = {
  id: string
  effectClass: typeof canvas.containers.ParticleEffect | typeof canvas.rendering.shaders.WeatherShaderEffect
  shaderClass?: typeof canvas.rendering.shaders.AbstractWeatherShader | undefined
  blendMode?: PIXI.BLEND_MODES
  config?: object | undefined
  performanceLevel?: number | undefined
}
export type _FontDefinition = {
  /**
   * An array of remote URLs the font files exist at.
   */
  urls: string[]
}
export type FontDefinition = FontFaceDescriptors & _FontDefinition
export type FontFamilyDefinition = {
  /**
   * Whether the font is available in the rich text editor. This will also enable it
   * for notes and drawings.
   */
  editor: boolean
  /**
   * Individual font face definitions for this font family. If this is empty, the
   * font family may only be loaded from the client's OS-installed fonts.
   */
  fonts: FontDefinition[]
}
export type _StatusEffectConfig = {
  /**
   * A string identifier for the effect.
   */
  id: string
  /**
   * DEPRECATED alias for "name".
   */
  label?: string | undefined
  /**
   * DEPRECATED alias for "img".
   */
  icon?: string | undefined
  /**
   * Should this effect appear in the Token HUD?
   * This effect is only selectable in the Token HUD if the Token's
   * Actor sub-type is one of the configured ones.
   */
  hud?:
    | boolean
    | {
        actorTypes?: string[]
      }
    | undefined
}
/**
 * Configured status effects recognized by the game system.
 * Properties "name" and "img" should be preferred over "label" and "icon".
 */
export type StatusEffectConfig = _StatusEffectConfig & Partial<documents.types.ActiveEffectData>
export type WallDoorSound = {
  /**
   * A localization string label
   */
  label: string
  /**
   * One or more sound paths for when the door is closed
   */
  close?: string | string[] | undefined
  /**
   * One or more sound paths for when the door becomes locked
   */
  lock?: string | string[] | undefined
  /**
   * One or more sound paths for when opening the door
   */
  open?: string | string[] | undefined
  /**
   * One or more sound paths for when attempting to open a locked door
   */
  test?: string | string[] | undefined
  /**
   * One or more sound paths for when the door becomes unlocked
   */
  unlock?: string | string[] | undefined
}
export type WallDoorAnimationFunction = (open: boolean) => canvas.animation.types.CanvasAnimationAttribute[]
export type WallDoorAnimationHook = (open: boolean) => Promise<void> | void
export type WallDoorAnimationConfig = {
  label: string
  midpoint?: boolean | undefined
  easing?: string | Function | undefined
  initialize?: WallDoorAnimationHook | undefined
  preAnimate?: WallDoorAnimationHook | undefined
  animate: WallDoorAnimationFunction
  postAnimate?: WallDoorAnimationHook | undefined
  duration: number
}
export type TextEditorEnricher = (match: RegExpMatchArray, options?: EnrichmentOptions) => Promise<HTMLElement | null>
export type TextEditorEnricherConfig = {
  /**
   * A unique ID to assign to the enricher type. Required if you want to use
   *                   the onRender callback.
   */
  id?: string | undefined
  /**
   * The string pattern to match. Must be flagged as global.
   */
  pattern: RegExp
  /**
   * The function that will be called on each match. It is expected that this
   * returns an HTML element to be inserted into the final enriched content.
   */
  enricher: TextEditorEnricher
  /**
   * Hoist the replacement element out of its containing element if it replaces
   *       the entire contents of the element.
   */
  replaceParent?: boolean | undefined
  /**
   * An optional callback that is invoked when the
   * enriched content is added to the DOM.
   */
  onRender?: ((arg0: HTMLEnrichedContentElement) => any) | undefined
}
export type CursorDescriptor = {
  /**
   * The URL of the cursor image. Must be no larger than 128x128. 32x32 is recommended.
   */
  url: string
  /**
   * The X co-ordinate of the cursor hotspot.
   */
  x?: number | undefined
  /**
   * The Y co-ordinate of the cursor hotspot.
   */
  y?: number | undefined
}
/**
 * @typedef DiceFulfillmentConfiguration
 * @property {Record<string, DiceFulfillmentDenomination>} dice  The die denominations available for configuration.
 * @property {Record<string, DiceFulfillmentMethod>} methods     The methods available for fulfillment.
 * @property {string} defaultMethod                              Designate one of the methods to be used by default
 *                                                               for dice fulfillment, if the user hasn't specified
 *                                                               otherwise. Leave this blank to use the configured
 *                                                               randomUniform to generate die rolls.
 */
/**
 * @typedef DiceFulfillmentDenomination
 * @property {string} label  The human-readable label for the die.
 * @property {string} icon   An icon to display on the configuration sheet.
 */
/**
 * @typedef DiceFulfillmentMethod
 * @property {string} label                      The human-readable label for the fulfillment method.
 * @property {string} [icon]                     An icon to represent the fulfillment method.
 * @property {boolean} [interactive=false]       Whether this method requires input from the user or if it is
 *                                               fulfilled entirely programmatically.
 * @property {DiceFulfillmentHandler} [handler]  A function to invoke to programmatically fulfil a given term for non-
 *                                               interactive fulfillment methods.
 * @property {typeof RollResolver} [resolver]    A custom RollResolver implementation. If the only interactive methods
 *                                               the user has configured are this method and manual, this resolver will
 *                                               be used to resolve interactive rolls, instead of the default resolver.
 *                                               This resolver must therefore be capable of handling manual rolls.
 */
/**
 * Only used for non-interactive fulfillment methods. If a die configured to use this fulfillment method is rolled,
 * this handler is called and awaited in order to produce the die roll result.
 * @callback DiceFulfillmentHandler
 * @param {dice.terms.DiceTerm} term           The term being fulfilled.
 * @param {object} [options]        Additional options to configure fulfillment.
 * @returns {number|void|Promise<number|void>}  The fulfilled value, or undefined if it could not be fulfilled.
 */
/**
 * @callback RollFunction
 * @param {...any} args
 * @returns {Promise<number|string>|number|string}
 */
/**
 * @type {Record<string, typeof dice.terms.RollTerm>}
 */
declare const termTypes: Record<string, typeof dice.terms.RollTerm>
export {}
