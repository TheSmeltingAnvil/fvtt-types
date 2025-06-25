import {
  ApplicationClosingOptions,
  ApplicationConfiguration,
  ApplicationRenderContext,
  ApplicationRenderOptions,
} from "foundry/applications/_types.js"
import ApplicationV2 from "foundry/applications/api/ApplicationV2.js"

interface ChatPopoutConfiguration extends ApplicationConfiguration {
  /** The message being rendered. */
  message: ChatMessage
}

/**
 * A simple application for rendering a single chat message in its own frame.
 * @extends {ApplicationV2<ChatPopoutConfiguration, ApplicationRenderOptions>}
 */
export default class ChatPopout extends ApplicationV2<ChatPopoutConfiguration> {
  constructor(options: ApplicationConfiguration & { message: ChatMessage })

  static override DEFAULT_OPTIONS: DeepPartial<ChatPopoutConfiguration>

  /* -------------------------------------------- */
  /*  Properties                                  */
  /* -------------------------------------------- */

  /**
   * The message being rendered.
   */
  get message(): ChatMessage

  get title(): string

  /* -------------------------------------------- */
  /*  Methods                                     */
  /* -------------------------------------------- */

  protected override _initializeApplicationOptions(
    options: DeepPartial<ChatPopoutConfiguration>,
  ): ChatPopoutConfiguration

  protected _onClose(options: ApplicationClosingOptions): void

  protected override _onFirstRender(context: ApplicationRenderContext, options: ApplicationRenderOptions): Promise<void>

  protected override _renderHTML(
    context: ApplicationRenderContext,
    options: ApplicationRenderOptions,
  ): Promise<HTMLElement>

  protected override _replaceHTML(result: HTMLElement, content: HTMLElement, options: ApplicationRenderOptions): void
}
