import { DataField } from "foundry/data/fields/_module.js"
import {
  SceneDimensions,
  TokenGetCompleteMovementPathWaypoint,
  TokenMovementSegmentData,
} from "foundry/documents/_types.js"
import { GridOffset3D } from "foundry/grid/_types.js"
import Color from "foundry/utils/Color.js"

type Builtin = Date | Function | Uint8Array | string | number | boolean | symbol | null | undefined

type BuiltinType = NumberConstructor | StringConstructor | BooleanConstructor | ObjectConstructor

interface _CanvasDimensions {
  /** The minimum, maximum, and default canvas scale. */
  scale: { min: number; max: number; default: number }

  /** The scaling factor for canvas UI elements. Based on the normalized grid size (100px). */
  uiScale: number
}

type CanvasDimensions = SceneDimensions & _CanvasDimensions

type ColorSource = number | [red: number, green: number, blue: number] | string | typeof Color

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends (infer U)[]
    ? DeepPartial<U>[]
    : T extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : T extends object
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : Partial<T>

/**
 * Make all properties in T recursively readonly.
 */
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends undefined | null | boolean | number | string | symbol | bigint | Function
    ? T[K]
    : T[K] extends (infer V)[]
      ? ReadonlyArray<DeepReadonly<V>>
      : T[K] extends Map<infer K, infer V>
        ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
        : T[K] extends Set<infer V>
          ? ReadonlySet<DeepReadonly<V>>
          : DeepReadonly<T[K]>
}

/**
 * A 3D point, expressed as {x, y, elevation}.
 */
export interface ElevatedPoint extends Point {
  /** The elevation in grid units */
  elevation: number
}

//type ManageCompendiumRequest = SocketRequest

//type ManageCompendiumResponse = SocketResponse

/**
 * A 2D point, expressed as an array [x, y].
 */
export interface Point {
  /**
   * The x-coordinate in pixels.
   */
  x: number
  /**
   * The y-coordinate of the top-left corner.
   */
  y: number
}
/**
 * A standard rectangle interface.
 */
export interface Rectangle {
  /**
   * The x-coordinate of the top-left corner.
   */
  x: number
  /**
   * The y-coordinate of the top-left corner.
   */
  y: number
  /**
   * The width.
   */
  width: number
  /**
   * The height.
   */
  height: number
}

/**
 * A 2D point, expressed as an array [x, y].
 */
type PointArray = [x: number, y: number]

type RequestData = Record<string, unknown> | Record<string, unknown>[] | string | string[]

//type RollTableHTMLEmbedConfig = DocumentHTMLEmbedConfig & _RollTableHTMLEmbedConfig

type SearchableField = DataField | { [K in string]: SearchableField }

interface TokenAnimationOptions extends Omit<foundry.canvas.animation.types.CanvasAnimationOptions, "context"> {
  /** A desired token movement speed in grid spaces per second */
  movementSpeed?: number
  /** The desired texture transition type */
  transition?: foundry.canvas.rendering.filters.types.TextureTransitionType
}

type TokenAnimationTransition =
  | "crosshatch"
  | "dots"
  | "fade"
  | "glitch"
  | "hole"
  | "holeSwirl"
  | "hologram"
  | "morph"
  | "swirl"
  | "waterDrop"
  | "waves"
  | "wind"
  | "whiteNoise"

type TokenGetTerrainMovementPathWaypoint = Omit<TokenGetCompleteMovementPathWaypoint, "terrain">

/**
 * @param baseCost The base cost (terrain cost).
 * @param from The offset that is moved from.
 * @param to The offset that is moved to.
 * @param distance The distance between the grid spaces.
 * @param segment The properties of the segment.
 */
type TokenMovementActionCostFunction = (
  baseCost: number,
  from: Readonly<GridOffset3D>,
  to: Readonly<GridOffset3D>,
  distance: number,
  segment: DeepReadonly<TokenMovementSegmentData>,
) => number

/** An action that can occur when a key is pressed */
export interface KeybindingAction {
  /** The namespaced machine identifier of the Action */
  action: string
  /** The Keyboard key */
  key: string
  /** The human readable name */
  name: string
  /** Required modifiers */
  requiredModifiers?: ModifierKey[]
  /** Optional (reserved) modifiers */
  optionalModifiers?: ModifierKey[]
  /** The handler that executes onDown */
  onDown?: (...args: unknown[]) => boolean
  /** The handler that executes onUp */
  onUp?: (...args: unknown[]) => boolean
  /** If True, allows Repeat events to execute this Action's onDown */
  repeat?: boolean
  /** If true, only a GM can execute this Action */
  restricted?: boolean
  /** The registration precedence */
  precedence?: number
  /** The registration order */
  order?: number
}

/**
 * Keyboard event context
 */
export interface KeyboardEventContext {
  /** The normalized string key, such as "A" */
  key: string
  /** The originating keypress event */
  event: KeyboardEvent
  /** Is the Shift modifier being pressed */
  isShift: boolean
  /** Is the Control or Meta modifier being processed */
  isControl: boolean
  /** Is the Alt modifier being pressed */
  isAlt: boolean
  /** Are any of the modifiers being pressed */
  hasModifiers: boolean
  /** A list of string modifiers applied to this context, such as [ "CONTROL" ] */
  modifiers: ModifierKey[]
  /** True if the Key is Up, else False if down */
  up: boolean
  /** True if the given key is being held down such that it is automatically repeating. */
  repeat: boolean
  /** The executing Keybinding Action. May be undefined until the action is known. */
  action?: string
}

type ModifierKey = "Control" | "Shift" | "Alt"

export type WorldCompendiumConfiguration = Record<string, WorldCompendiumPackConfiguration>

export interface WorldCompendiumPackConfiguration {
  folder?: string
  sort?: number
  locked?: boolean
}
