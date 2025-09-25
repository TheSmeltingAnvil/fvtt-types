/**
 * @import {ApplicationConfiguration, ApplicationPosition} from "../../_types.mjs"
 * @import {HandlebarsRenderOptions} from "../../api/handlebars-application.mjs"
 */
/**
 * @typedef _CameraPopoutConfiguration
 * @property {User} user
 */
/**
 * @typedef {ApplicationConfiguration & _CameraPopoutConfiguration} CameraPopoutConfiguration
 */
/**
 * An application for a single popped-out camera.
 * @extends {ApplicationV2<CameraPopoutConfiguration, HandlebarsRenderOptions>}
 * @mixes HandlebarsApplication
 */
export default class CameraPopout
  extends HandlebarsApplicationMixinType<ApplicationV2<CameraPopoutConfiguration, HandlebarsRenderOptions>>
  implements HandlebarsApplication
{
  /** @override */
  static override DEFAULT_OPTIONS: {
    id: string
    classes: string[]
    window: {
      resizable: boolean
      minimizable: boolean
    }
    position: {
      height: number | "auto" | undefined
    }
    actions: {
      toggleDocked: (this: CameraPopout, event: PointerEvent, target: HTMLElement) => Promise<void>
    }
  }
  /** @override */
  static override PARTS: {
    camera: {
      root: boolean
      template: string
      templates: string[]
    }
  }
  /**
   * Handle re-docking a popped-out camera view.
   * @this {CameraPopout}
   * @param {PointerEvent} event  The triggering event.
   * @param {HTMLElement} target  The action target.
   */
  static #onToggleDocked(this: CameraPopout, event: PointerEvent, target: HTMLElement): Promise<void>
  constructor(...args: any[])
  constructor(options?: object)
  /**
   * The user this camera view is for.
   * @returns {User}
   */
  get user(): User
  /** @inheritDoc */
  _initializeApplicationOptions(options: any): any
  /** @inheritDoc */
  _onFirstRender(context: any, options: any): Promise<void>
  /** @inheritDoc */
  _onRender(context: any, options: any): Promise<void>
  /** @inheritDoc */
  _prepareContext(options: any): Promise<foundry.applications.types.ApplicationRenderContext>
  /** @inheritDoc */
  _replaceHTML(result: any, content: any, options: any): void
  /** @inheritDoc */
  _prePosition(position: any): void
  /** @inheritDoc */
  setPosition(position: any): any
  /** @override */
  override _onClickAction(event: any, target: any): any
  #private
}
export type _CameraPopoutConfiguration = {
  user: User
}
export type CameraPopoutConfiguration = ApplicationConfiguration & _CameraPopoutConfiguration
import User from "@client/documents/user.mjs"
import type { ApplicationConfiguration } from "../../_types.mjs"
import ApplicationV2 from "../../api/application.mjs"
import type {
  HandlebarsApplication,
  HandlebarsApplicationMixinType,
  HandlebarsRenderOptions,
} from "../../api/handlebars-application.mjs"
