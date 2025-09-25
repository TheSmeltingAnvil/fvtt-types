/**
 * @import {Rectangle, TokenPlannedMovement} from "../../_types.mjs";
 * @import Token from "../placeables/token.mjs";
 * @import User from "@client/documents/user.mjs";
 */
/**
 * The Tokens Container.
 * @category Canvas
 */
export default class TokenLayer extends PlaceablesLayer {
  /** @inheritdoc */
  static get layerOptions(): object
  /** @override */
  static override prepareSceneControls(): {
    name: string
    order: number
    title: string
    icon: string
    onChange: (event: any, active: any) => void
    onToolChange: () => any
    tools: {
      select: {
        name: string
        order: number
        title: string
        icon: string
        toolclip: {
          src: string
          heading: string
          items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[]
        }
      }
      target: {
        name: string
        order: number
        title: string
        icon: string
        toolclip: {
          src: string
          heading: string
          items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[]
        }
      }
      ruler: {
        name: string
        order: number
        title: string
        icon: string
        toolclip: {
          heading: string
          items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[]
        }
      }
      unconstrainedMovement: {
        name: string
        order: number
        title: string
        icon: string
        toggle: boolean
        active: any
        visible: boolean
        onChange: (event: any, toggled: any) => void
        toolclip: {
          heading: string
          items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[]
        }
      }
    }
    activeTool: string
  }
  /**
   * The ruler paths.
   * @type {PIXI.Container}
   * @internal
   */
  _rulerPaths: PIXI.Container
  /**
   * The current index position in the tab cycle
   * @type {number|null}
   * @internal
   */
  _tabIndex: number | null
  /**
   * The Token that the drag workflow was initiated on, if there's a drag workflow in progress.
   * Set in {@link foundry.canvas.placeables.Token#_onDragLeftStart} and
   * {@link foundry.canvas.placeables.Token#_onDragLeftCancel}.
   * @type {Token|null}
   * @internal
   */
  _draggedToken: Token | null
  /**
   * The currently selected movement action override.
   * @type {string|null}
   * @internal
   */
  _dragMovementAction: string | null
  set occlusionMode(value: number)
  /**
   * The set of tokens that trigger occlusion (a union of {@link CONST.TOKEN_OCCLUSION_MODES}).
   * @type {number}
   */
  get occlusionMode(): number
  /** @override */
  override get hud(): foundry.applications.hud.TokenHUD
  /**
   * An Array of tokens which belong to actors which are owned
   * @type {Token[]}
   */
  get ownedTokens(): Token[]
  /**
   * A Set of Token objects which currently display a combat turn marker.
   * @type {Set<Token>}
   */
  turnMarkers: Set<Token>
  /** @override */
  override getSnappedPoint(point: any): foundry.types.Point
  /** @override */
  override _prepareKeyboardMovementUpdates(
    objects: any,
    dx: any,
    dy: any,
    dz: any,
  ): (
    | {
        _id: any
      }[]
    | {
        movement: object
      }
  )[]
  /**
   * Target all Token instances which fall within a coordinate rectangle.
   * @param {Rectangle} rectangle                    The selection rectangle.
   * @param {object} [options]                      Additional options to configure targeting behaviour.
   * @param {boolean} [options.releaseOthers=true]  Whether or not to release other targeted tokens
   */
  targetObjects(
    { x, y, width, height }: Rectangle,
    {
      releaseOthers,
    }?: {
      releaseOthers?: boolean | undefined
    },
  ): void
  /**
   * Assign multiple token targets
   * @param {string[]|Set<string>} targetIds    The array or set of Token IDs.
   * @param {object} [options]                  Additional options to configure targeting behaviour.
   * @param {"replace"|"acquire"|"release"} [options.mode="replace"]   The mode that determines the targeting behavior.
   *   - `"replace"` (default): Replace the current set of targeted Tokens with provided set of Tokens.
   *   - `"acquire"`: Acquire the given Tokens as targets without releasing already targeted Tokens.
   *   - `"release"`: Release the given Tokens as targets.
   */
  setTargets(
    targetIds: string[] | Set<string>,
    {
      mode,
    }?: {
      mode?: "replace" | "acquire" | "release" | undefined
    },
  ): void
  /**
   * Cycle the controlled token by rotating through the list of Owned Tokens that are available within the Scene
   * Tokens are currently sorted in order of their TokenID
   *
   * @param {boolean} forwards  Which direction to cycle. A truthy value cycles forward, while a false value
   *                            cycles backwards.
   * @param {boolean} reset     Restart the cycle order back at the beginning?
   * @returns {Token|null}       The Token object which was cycled to, or null
   */
  cycleTokens(forwards: boolean, reset: boolean): Token | null
  /**
   * Immediately conclude the animation of any/all tokens
   */
  concludeAnimation(): void
  _t: number | undefined
  /**
   * Recalculate the planned movement paths of all Tokens for the current User.
   */
  recalculatePlannedMovementPaths(): void
  /**
   * Handle broadcast planned movement update.
   * @param {User} user    The User the planned movement data belongs to
   * @param {{[tokenId: string]: TokenPlannedMovement|null} | null} plannedMovements    The planned movement data
   * @internal
   */
  _updatePlannedMovements(
    user: User,
    plannedMovements: {
      [tokenId: string]: TokenPlannedMovement | null
    } | null,
  ): void
  /**
   * Provide an array of Tokens which are eligible subjects for tile occlusion.
   * By default, only tokens which are currently controlled or owned by a player are included as subjects.
   * @returns {Token[]}
   * @protected
   */
  protected _getOccludableTokens(): Token[]
  /** @inheritDoc */
  _getMovableObjects(ids: any, includeLocked: any): foundry.canvas.placeables.PlaceableObject[]
  /** @inheritDoc */
  _getCopyableObjects(options: any): foundry.canvas.placeables.PlaceableObject[]
  /** @override */
  override storeHistory(type: any, data: any, options: any): void
  /** @override */
  override _onCycleViewKey(event: any): boolean
  /** @override */
  override _confirmDeleteKey(documents: any): Promise<any>
  /**
   * Handle dropping of Actor data onto the Scene canvas
   * @param {DragEvent} event
   * @param {{type: "Actor"; uuid: string; x: number; y: number; elevation?: number}} data
   * @internal
   */
  _onDropActorData(
    event: DragEvent,
    data: {
      type: "Actor"
      uuid: string
      x: number
      y: number
      elevation?: number
    },
  ): Promise<any>
  /** @inheritDoc */
  _onClickLeft(event: any): any
  /** @inheritDoc */
  _onClickLeft2(event: any): void
  /** @inheritDoc */
  _onClickRight2(event: any): void
  /**
   * @deprecated since v12
   * @ignore
   */
  get gridPrecision(): number
  /**
   * @deprecated since v12
   * @ignore
   */
  toggleCombat(
    state?: boolean,
    combat?: null,
    {
      token,
    }?: {
      token?: null | undefined
    },
  ): Promise<any>
  #private
}
import type User from "@client/documents/user.mjs"
import type { Rectangle, TokenPlannedMovement } from "../../_types.mjs"
import type Token from "../placeables/token.mjs"
import PlaceablesLayer from "./base/placeables-layer.mjs"
