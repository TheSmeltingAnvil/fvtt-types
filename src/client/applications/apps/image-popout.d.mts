/**
 * @import Document from "@common/abstract/document.mjs";
 * @import {ApplicationConfiguration} from "../_types.mjs";
 */
/**
 * @typedef ImagePopoutConfiguration
 * @property {string} src              The URL to the image or video file
 * @property {string} [caption]        Caption text to display below the image.
 * @property {string|null} [uuid=null] The UUID of some related {@link foundry.abstract.Document}.
 * @property {boolean} [showTitle]     Force showing or hiding the title.
 */
/**
 * @typedef ShareImageConfig
 * @property {string} image         The image URL to share.
 * @property {string} title         The image title.
 * @property {string} [uuid]        The UUID of a {@link foundry.abstract.Document} related to the image,
 *                                  used to determine permission to see the image title.
 * @property {boolean} [showTitle]  If this is provided, the permissions of the related Document will be ignored and
 *                                  the title will be shown based on this parameter.
 * @property {string[]} [users]     A list of user IDs to show the image to.
 */
/**
 * An Image Popout Application which features a single image in a lightbox style frame.
 * Furthermore, this application allows for sharing the display of an image with other connected players.
 *
 * @extends {ApplicationV2<ApplicationConfiguration & ImagePopoutConfiguration>}
 * @mixes HandlebarsApplication
 * @property {string} src The URL to the image or video file
 * @example Creating an Image Popout
 * ```js
 * // Construct the Application instance
 * const ip = new ImagePopout({
 *   src: "path/to/image.jpg",
 *   uuid: game.actors.getName("My Hero").uuid
 *   window: {title: "My Featured Image"}
 * });
 *
 * // Display the image popout
 * ip.render(true);
 *
 * // Share the image with other connected players
 * ip.shareImage();
 * ```
 */
export default class ImagePopout extends ApplicationV2<
  ApplicationConfiguration & ImagePopoutConfiguration,
  foundry.applications.types.ApplicationRenderOptions
> {
  /** @inheritDoc */
  static DEFAULT_OPTIONS: {
    classes: string[]
    caption: string
    uuid: null
    actions: {
      shareImage: () => void
    }
    window: {
      resizable: boolean
      icon: string
      controls: {
        label: string
        icon: string
        action: string
        visible: () => boolean
      }[]
    }
  }
  /** @override */
  static override PARTS: {
    popout: {
      template: string
    }
  }
  /**
   * Determine the correct dimensions for the displayed image
   * @param {string} img  The image URL.
   * @returns {Object}    The positioning object which should be used for rendering
   */
  static #getDimensions(img: string): Object
  /**
   * Determine the Image dimensions given a certain path
   * @param {string} path  The image source.
   * @returns {Promise<[number, number]>}
   */
  static #getImageSize(path: string): Promise<[number, number]>
  /**
   * Determine the dimensions of the given video file.
   * @param {string} src  The URL to the video.
   * @returns {Promise<[number, number]>}
   */
  static #getVideoSize(src: string): Promise<[number, number]>
  /**
   * Handle a received request to display an image.
   * @param {ShareImageConfig} config  The image configuration data.
   * @returns {ImagePopout}
   * @internal
   */
  static _handleShareImage({ image, title, caption, uuid, showTitle }?: ShareImageConfig): ImagePopout
  /**
   * @param {ApplicationConfiguration & ImagePopoutConfiguration} options Application configuration options
   */
  constructor(options: ApplicationConfiguration & ImagePopoutConfiguration, _options?: object)
  /**
   * Whether the application should display video content.
   * @type {boolean}
   */
  get isVideo(): boolean
  /**
   * Share the displayed image with other connected Users
   * @param {ShareImageConfig} [options]
   */
  shareImage(options?: ShareImageConfig): void
  /** @inheritDoc */
  _initializeApplicationOptions(options: any): ApplicationConfiguration
  /** @override */
  override _prepareContext(options: any): Promise<{
    caption: string | undefined
    image: string
    isVideo: boolean
    title: string | undefined
    altText: string
  }>
  /** @override */
  override _preFirstRender(_context: any, options: any): Promise<void>
  #private
}
export type ImagePopoutConfiguration = {
  /**
   * The URL to the image or video file
   */
  src: string
  /**
   * Caption text to display below the image.
   */
  caption?: string | undefined
  /**
   * The UUID of some related {@link foundry.abstract.Document}.
   */
  uuid?: string | null | undefined
  /**
   * Force showing or hiding the title.
   */
  showTitle?: boolean | undefined
}
export type ShareImageConfig = {
  /**
   * The image URL to share.
   */
  image: string
  /**
   * The image title.
   */
  title: string
  /**
   * The UUID of a {@link foundry.abstract.Document} related to the image,
   *         used to determine permission to see the image title.
   */
  uuid?: string | undefined
  /**
   * If this is provided, the permissions of the related Document will be ignored and
   *   the title will be shown based on this parameter.
   */
  showTitle?: boolean | undefined
  /**
   * A list of user IDs to show the image to.
   */
  users?: string[] | undefined
}
import type { ApplicationConfiguration } from "../_types.mjs"
import { ApplicationV2 } from "../api/_module.mjs"
