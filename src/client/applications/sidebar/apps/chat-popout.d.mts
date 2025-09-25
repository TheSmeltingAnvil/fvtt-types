/**
 * @import {ApplicationConfiguration, ApplicationRenderOptions} from "../_types.mjs"
 */
/**
 * @typedef {ApplicationConfiguration} ChatPopoutConfiguration
 * @property {ChatMessage} message  The message being rendered.
 */
/**
 * A simple application for rendering a single chat message in its own frame.
 * @extends {ApplicationV2<ChatPopoutConfiguration, ApplicationRenderOptions>}
 */
export default class ChatPopout extends ApplicationV2<ApplicationConfiguration, ApplicationRenderOptions> {
  /** @override */
  static override DEFAULT_OPTIONS: {
    classes: string[]
    position: {
      width: number
    }
  }
  constructor(options?: object)
  /**
   * The message being rendered.
   * @type {ChatMessage}
   */
  get message(): ChatMessage
  /** @override */
  override get title(): any
  /** @inheritDoc */
  _initializeApplicationOptions(options: any): foundry.applications.types.ApplicationConfiguration
  /** @inheritDoc */
  _onClose(options: any): void
  /** @inheritDoc */
  _onFirstRender(context: any, options: any): Promise<void>
  /** @override */
  override _renderHTML(context: any, options: any): Promise<HTMLElement>
  /** @override */
  override _replaceHTML(result: any, content: any, options: any): void
  #private
}
export type ChatPopoutConfiguration = ApplicationConfiguration
import ChatMessage from "@client/documents/chat-message.mjs"
import ApplicationV2 from "../../api/application.mjs"
