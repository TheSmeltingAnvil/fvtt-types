/**
 * @import {ApplicationConfiguration, ApplicationRenderContext} from "../../_types.mjs"
 * @import {HandlebarsRenderOptions} from "../../api/handlebars-application.mjs"
 * @import {AVSettingsData} from "@client/av/settings.mjs"
 */
/**
 * @typedef CameraViewUserContext
 * @property {User} user                The User instance.
 * @property {AVSettingsData} settings  The user's AV settings.
 * @property {boolean} local            Whether the user's AV stream is local.
 * @property {string} charname          The user's character name.
 * @property {string} css               The CSS class of the user's camera dock.
 * @property {boolean} hasVideo         Whether the user is broadcasting video.
 * @property {boolean} hasAudio         Whether the user is broadcasting audio.
 * @property {boolean} hidden           Whether the main camera dock is hidden.
 * @property {object} nameplates
 * @property {boolean} nameplates.hidden     Whether camera nameplates are entirely hidden.
 * @property {string} nameplates.css         Nameplate CSS classes.
 * @property {string} nameplates.playerName  Whether to show player names on nameplates.
 * @property {string} nameplates.charname    Whether to show character names on nameplates.
 * @property {object} video
 * @property {number} video.volume      The video stream's volume.
 * @property {boolean} video.muted      Whether to mute the video stream's audio.
 * @property {boolean} video.show       Whether to show this user's camera.
 * @property {object} volume
 * @property {number} volume.value      The user's configured volume level.
 * @property {DataField} volume.field   The volume range field.
 * @property {boolean} volume.show      Whether to show a volume bar for this user.
 * @property {Record<string, CameraViewControlContext>} controls
 */
/**
 * @typedef CameraViewControlContext
 * @property {string} icon
 * @property {string} label
 * @property {boolean} display
 */
/**
 * An application that shows docked camera views.
 * @extends {ApplicationV2<ApplicationConfiguration, HandlebarsRenderOptions>}
 * @mixes HandlebarsApplication
 */
// @ts-expect-error -- IGNORE --
export default class CameraViews
  extends HandlebarsApplicationMixinType<ApplicationV2<ApplicationConfiguration, HandlebarsRenderOptions>>
  implements HandlebarsApplication
{
  /** @override */
  static override DEFAULT_OPTIONS: {
    id: string
    window: {
      frame: boolean
    }
    actions: {
      blockAudio: (event: PointerEvent, target: HTMLElement) => Promise<CameraViews | undefined>
      blockVideo: (event: PointerEvent, target: HTMLElement) => Promise<CameraViews | undefined>
      configure: (event: PointerEvent, target: HTMLElement) => Promise<foundry.applications.settings.menus.AVConfig>
      disableVideo: (event: PointerEvent, target: HTMLElement) => Promise<void>
      hide: (event: PointerEvent, target: HTMLElement) => Promise<CameraViews | undefined>
      mutePeers: (event: PointerEvent, target: HTMLElement) => Promise<void>
      toggleAudio: (
        event: PointerEvent,
        target: HTMLElement,
      ) => Promise<
        | Readonly<{
            id: number
            type: string
            timestamp: number
            message: string
            error?: Error | undefined
            permanent: boolean
            console: boolean
            active: boolean
            progress: boolean
            pct: number
            element?: HTMLLIElement | undefined
            remove?: (() => void) | undefined
            update?: ((pct: number) => void) | undefined
          }>
        | CameraViews
        | undefined
      >
      toggleDock: (this: CameraViews, event: PointerEvent, target: HTMLElement) => Promise<CameraViews>
      toggleDocked: (this: CameraViews, event: PointerEvent, target: HTMLElement) => Promise<void>
      toggleVideo: (
        event: PointerEvent,
        target: HTMLElement,
      ) => Promise<
        | Readonly<{
            id: number
            type: string
            timestamp: number
            message: string
            error?: Error | undefined
            permanent: boolean
            console: boolean
            active: boolean
            progress: boolean
            pct: number
            element?: HTMLLIElement | undefined
            remove?: (() => void) | undefined
            update?: ((pct: number) => void) | undefined
          }>
        | CameraViews
        | undefined
      >
    }
  }
  /** @override */
  static override PARTS: {
    cameras: {
      template: string
      scrollable: string[]
    }
    controls: {
      template: string
    }
  }
  /**
   * Handle popping-out a user's camera dock.
   * @this {CameraViews}
   * @param {PointerEvent} event  The triggering event.
   * @param {HTMLElement} target  The action target.
   */
  static #onToggleDocked(this: CameraViews, event: PointerEvent, target: HTMLElement): Promise<void>
  /**
   * Handle minimizing or maximizing the dock.
   * @this {CameraViews}
   * @param {PointerEvent} event  The triggering event.
   * @param {HTMLElement} target  The action target.
   */
  static #onToggleDock(this: CameraViews, event: PointerEvent, target: HTMLElement): Promise<CameraViews>
  /**
   * Sort users' cameras in the dock.
   * @param {CameraViewUserContext} a
   * @param {CameraViewUserContext} b
   * @returns {number}
   * @protected
   */
  protected static _sortUsers(a: CameraViewUserContext, b: CameraViewUserContext): number
  constructor(options?: Partial<ApplicationConfiguration> | undefined)
  /**
   * Icons for the docked state of the camera dock.
   * @type {Record<AVSettings.DOCK_POSITIONS, [string, string]>}
   */
  DOCK_ICONS: Record<"TOP" | "RIGHT" | "BOTTOM" | "LEFT", [string, string]>
  /**
   * If all camera views are popped out, hide the dock.
   * @type {boolean}
   */
  get hidden(): boolean
  /**
   * Whether the AV dock is in a horizontal configuration.
   * @type {boolean}
   */
  get isHorizontal(): boolean
  /**
   * Whether the AV dock is in a vertical configuration.
   * @type {boolean}
   */
  get isVertical(): boolean
  /**
   * Cameras which have been popped-out of this dock.
   * @type {CameraPopout[]}
   */
  get popouts(): CameraPopout[]
  /**
   * The cached list of processed user entries.
   * @type {Record<string, CameraViewUserContext>}
   */
  get users(): Record<string, CameraViewUserContext>
  /**
   * Get a user's camera dock.
   * @param {string} userId  The user's ID.
   * @returns {HTMLElement|null}
   */
  getUserCameraView(userId: string): HTMLElement | null
  /**
   * Get the video element for a user broadcasting video.
   * @param {string} userId  The user's ID.
   * @returns {HTMLVideoElement|null}
   */
  getUserVideoElement(userId: string): HTMLVideoElement | null
  /**
   * Indicate a user is speaking on their camera dock.
   * @param {string} userId     The user's ID.
   * @param {boolean} speaking  Whether the user is speaking.
   */
  setUserIsSpeaking(userId: string, speaking: boolean): void
  /** @override */
  override _canRender(options: any): false | void
  /** @inheritDoc */
  _configureRenderParts(options: any): any
  /** @inheritDoc */
  _onRender(context: any, options: any): Promise<void>
  /** @inheritDoc */
  _preparePartContext(partId: any, context: any, options: any): Promise<any>
  /**
   * Prepare render context for controls.
   * @param {ApplicationRenderContext} context
   * @param {HandlebarsRenderOptions} options
   * @returns {Promise<void>}
   * @protected
   */
  protected _prepareControlsContext(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>
  /**
   * Prepare render context for the given user.
   * @param {string} id  The user's ID.
   * @returns {CameraViewUserContext|void}
   * @internal
   */
  _prepareUserContext(id: string): CameraViewUserContext | void
  /** @inheritDoc */
  _replaceHTML(result: any, content: any, options: any): void
  /**
   * Handle blocking a user's audio stream.
   * @param {PointerEvent} event  The triggering event.
   * @param {HTMLElement} target  The action target.
   * @internal
   */
  _onBlockAudio(event: PointerEvent, target: HTMLElement): Promise<this | undefined>
  /**
   * Handle blocking a user's video stream.
   * @param {PointerEvent} event  The triggering event.
   * @param {HTMLElement} target  The action target.
   * @internal
   */
  _onBlockVideo(event: PointerEvent, target: HTMLElement): Promise<this | undefined>
  /**
   * Handle spawning the AV configuration dialog.
   * @param {PointerEvent} event  The triggering event.
   * @param {HTMLElement} target  The action target.
   * @internal
   */
  _onConfigure(event: PointerEvent, target: HTMLElement): Promise<foundry.applications.settings.menus.AVConfig>
  /**
   * Handle disabling all incoming video streams.
   * @param {PointerEvent} event  The triggering event.
   * @param {HTMLElement} target  The action target.
   * @internal
   */
  _onDisableVideo(event: PointerEvent, target: HTMLElement): Promise<void>
  /**
   * Handle hiding a user from the AV UI entirely.
   * @param {PointerEvent} event  The triggering event.
   * @param {HTMLElement} target  The action target.
   * @internal
   */
  _onHideUser(event: PointerEvent, target: HTMLElement): Promise<this | undefined>
  /**
   * Handle disabling all incoming audio streams.
   * @param {PointerEvent} event  The triggering event.
   * @param {HTMLElement} target  The action target.
   * @internal
   */
  _onMutePeers(event: PointerEvent, target: HTMLElement): Promise<void>
  /**
   * Handle the user toggling their own audio stream.
   * @param {PointerEvent} event  The triggering event.
   * @param {HTMLElement} target  The action target.
   * @internal
   */
  _onToggleAudio(
    event: PointerEvent,
    target: HTMLElement,
  ): Promise<
    | Readonly<{
        id: number
        type: string
        timestamp: number
        message: string
        error?: Error | undefined
        permanent: boolean
        console: boolean
        active: boolean
        progress: boolean
        pct: number
        element?: HTMLLIElement | undefined
        remove?: (() => void) | undefined
        update?: ((pct: number) => void) | undefined
      }>
    | this
    | undefined
  >
  /**
   * Handle the user toggling their own video stream.
   * @param {PointerEvent} event  The triggering event.
   * @param {HTMLElement} target  The action target.
   * @internal
   */
  _onToggleVideo(
    event: PointerEvent,
    target: HTMLElement,
  ): Promise<
    | Readonly<{
        id: number
        type: string
        timestamp: number
        message: string
        error?: Error | undefined
        permanent: boolean
        console: boolean
        active: boolean
        progress: boolean
        pct: number
        element?: HTMLLIElement | undefined
        remove?: (() => void) | undefined
        update?: ((pct: number) => void) | undefined
      }>
    | this
    | undefined
  >
  /**
   * Handle changing another user's volume.
   * @param {Event} event  The triggering event.
   * @protected
   */
  protected _onVolumeChange(event: Event): void
  #private
}
export type CameraViewUserContext = {
  /**
   * The User instance.
   */
  user: User
  /**
   * The user's AV settings.
   */
  settings: AVSettingsData
  /**
   * Whether the user's AV stream is local.
   */
  local: boolean
  /**
   * The user's character name.
   */
  charname: string
  /**
   * The CSS class of the user's camera dock.
   */
  css: string
  /**
   * Whether the user is broadcasting video.
   */
  hasVideo: boolean
  /**
   * Whether the user is broadcasting audio.
   */
  hasAudio: boolean
  /**
   * Whether the main camera dock is hidden.
   */
  hidden: boolean
  nameplates: {
    hidden: boolean
    css: string
    playerName: string
    charname: string
  }
  video: {
    volume: number
    muted: boolean
    show: boolean
  }
  volume: {
    value: number
    field: DataField
    show: boolean
  }
  controls: Record<string, CameraViewControlContext>
}
export type CameraViewControlContext = {
  icon: string
  label: string
  display: boolean
}
import type { AVSettingsData } from "@client/av/settings.mjs"
import type { ApplicationConfiguration, ApplicationRenderContext } from "../../_types.mjs"
import ApplicationV2 from "../../api/application.mjs"
import type {
  HandlebarsApplication,
  HandlebarsApplicationMixinType,
  HandlebarsRenderOptions,
} from "../../api/handlebars-application.mjs"
import CameraPopout from "./camera-popout.mjs"import User from "@client/documents/user.mjs"import { DataField } from "@common/data/fields.mjs"
