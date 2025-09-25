declare const ApplicationV2_base: {
  new (): {
    // @ts-expect-error -- IGNORE --
    #events: Record<
      string,
      Map<
        foundry.utils.types.EmittedEventListener,
        {
          fn: foundry.utils.types.EmittedEventListener
          once: boolean
        }
      >
    >
    addEventListener(
      type: string,
      listener: foundry.utils.types.EmittedEventListener,
      {
        once,
      }?:
        | {
            once?: boolean | undefined
          }
        | undefined,
    ): void
    removeEventListener(type: string, listener: foundry.utils.types.EmittedEventListener): void
    dispatchEvent(event: Event): boolean
  }
  emittedEvents: string[]
}
/**
 * @import {
 *   ApplicationClosingOptions,
 *   ApplicationConfiguration,
 *   ApplicationHeaderControlsEntry,
 *   ApplicationPosition,
 *   ApplicationRenderContext,
 *   ApplicationRenderOptions,
 *   ApplicationTab,
 *   ApplicationTabsConfiguration
 * } from "../_types.mjs";
 */
/**
 * @typedef {typeof ApplicationV2.RENDER_STATES[keyof typeof ApplicationV2.RENDER_STATES]} ApplicationRenderState
 */
/**
 * The Application class is responsible for rendering an HTMLElement into the Foundry Virtual Tabletop user interface.
 * @template {ApplicationConfiguration} [Configuration=ApplicationConfiguration]
 * @template {ApplicationRenderOptions} [RenderOptions=ApplicationRenderOptions]
 */
// @ts-expect-error -- IGNORE --
export default class ApplicationV2<
  Configuration extends ApplicationConfiguration = ApplicationConfiguration,
  RenderOptions extends ApplicationRenderOptions = ApplicationRenderOptions,
> extends ApplicationV2_base {
  /**
   * Designates which upstream Application class in this class' inheritance chain is the base application.
   * Any DEFAULT_OPTIONS of super-classes further upstream of the BASE_APPLICATION are ignored.
   * Hook events for super-classes further upstream of the BASE_APPLICATION are not dispatched.
   * @type {typeof ApplicationV2}
   */
  static BASE_APPLICATION: typeof ApplicationV2
  /**
   * The default configuration options which are assigned to every instance of this Application class.
   * @type {Partial<Configuration>}
   */
  // @ts-expect-error -- IGNORE --
  static DEFAULT_OPTIONS: Partial<Configuration>
  /**
   * Configuration of application tabs, with an entry per tab group.
   * @type {Record<string, ApplicationTabsConfiguration>}
   */
  static TABS: Record<string, ApplicationTabsConfiguration>
  /**
   * The sequence of rendering states that describe the Application life-cycle.
   * @type {Record<string, number>}
   */
  static RENDER_STATES: Record<string, number>
  /**
   * An incrementing integer Application ID.
   * @type {number}
   * @internal
   */
  static _appId: number
  /**
   * The current maximum z-index of any displayed Application.
   * @type {number}
   * @internal
   */
  static _maxZ: number
  /**
   * Which application is currently "in front" with the maximum z-index
   * @type {ApplicationV2}
   */
  static #frontApp: ApplicationV2
  /** @override */
  static override emittedEvents: readonly ["render", "close", "position"]
  /**
   * Initial values of the #window object.
   * @type {object}
   */
  static #INITIAL_WINDOW_VALUES: object
  /**
   * Iterate over the inheritance chain of this Application.
   * The chain includes this Application itself and all parents until the base application is encountered.
   * @see {@link ApplicationV2.BASE_APPLICATION}
   * @yields {typeof ApplicationV2}
   */
  static inheritanceChain(): Generator<typeof ApplicationV2, void, unknown>
  /**
   * Merge Application options with logic as described by ApplicationV2#_initializeApplicationOptions.
   * @param {object} options
   * @param {object} opts
   */
  static #mergeApplicationOptions(options: object, opts: object): void
  /**
   * Parse a CSS style rule into a number of pixels which apply to that dimension.
   * @param {string} style            The CSS style rule
   * @param {number} parentDimension  The relevant dimension of the parent element
   * @returns {number|void}           The parsed style dimension in pixels
   */
  static parseCSSDimension(style: string, parentDimension: number): number | void
  /**
   * Wait for any images in the given element to load.
   * @param {HTMLElement} element  The element.
   * @returns {Promise<void>}
   */
  static waitForImages(element: HTMLElement): Promise<void>
  /**
   * Applications are constructed by providing an object of configuration options.
   * @param {Partial<Configuration>} [options]    Options used to configure the Application instance
   */
  constructor(options?: Partial<Configuration>)
  /**
   * Application instance configuration options.
   * @type {Readonly<Configuration>}
   */
  options: Readonly<Configuration>
  /**
   * Convenience references to window header elements.
   * @type {{
   *  header: HTMLElement,
   *  resize: HTMLElement,
   *  title: HTMLHeadingElement,
   *  icon: HTMLElement,
   *  close: HTMLButtonElement,
   *  controls: HTMLButtonElement,
   *  content: HTMLElement,
   *  controlsDropdown: HTMLDivElement,
   *  onDrag: Function,
   *  onResize: Function,
   *  pointerStartPosition: ApplicationPosition,
   *  pointerMoveThrottle: boolean
   * }}
   */
  get window(): {
    header: HTMLElement
    resize: HTMLElement
    title: HTMLHeadingElement
    icon: HTMLElement
    close: HTMLButtonElement
    controls: HTMLButtonElement
    content: HTMLElement
    controlsDropdown: HTMLDivElement
    onDrag: Function
    onResize: Function
    pointerStartPosition: ApplicationPosition
    pointerMoveThrottle: boolean
  }
  /**
   * If this Application uses tabbed navigation groups, this mapping is updated whenever the changeTab method is called.
   * Reports the active tab for each group, with a value of `null` indicating no tab is active.
   * Subclasses may override this property to define default tabs for each group.
   * @type {Record<string, string|null>}
   */
  tabGroups: Record<string, string | null>
  /**
   * The CSS class list of this Application instance
   * @type {DOMTokenList}
   */
  get classList(): DOMTokenList
  /**
   * The HTML element ID of this Application instance.
   * This provides a readonly view into the internal ID used by this application.
   * This getter should not be overridden by subclasses, which should instead configure the ID in `DEFAULT_OPTIONS` or
   * by defining a `uniqueId` during `_initializeApplicationOptions`.
   * @type {string}
   */
  get id(): string
  /**
   * A convenience reference to the title of the Application window.
   * @type {string}
   */
  get title(): string
  /**
   * The HTMLElement which renders this Application into the DOM.
   * @type {HTMLElement}
   */
  get element(): HTMLElement
  /**
   * Does this Application have a top-level form element?
   * @type {HTMLFormElement|null}
   */
  get form(): HTMLFormElement | null
  /**
   * Is this Application instance currently minimized?
   * @type {boolean}
   */
  get minimized(): boolean
  /**
   * The current position of the application with respect to the window.document.body.
   * @type {ApplicationPosition}
   */
  position: ApplicationPosition
  /**
   * Is this Application instance currently rendered?
   * @type {boolean}
   */
  get rendered(): boolean
  /**
   * The current render state of the Application.
   * @type {ApplicationRenderState}
   */
  get state(): ApplicationRenderState
  /**
   * Does this Application instance render within an outer window frame?
   * @type {boolean}
   */
  get hasFrame(): boolean
  /**
   * Initialize configuration options for the Application instance.
   * The default behavior of this method is to intelligently merge options for each class with those of their parents.
   * - Array-based options are concatenated
   * - Inner objects are merged
   * - Otherwise, properties in the subclass replace those defined by a parent
   * @param {Partial<ApplicationConfiguration>} options      Options provided directly to the constructor
   * @returns {ApplicationConfiguration}                     Configured options for the application instance
   * @protected
   */
  protected _initializeApplicationOptions(options: Partial<ApplicationConfiguration>): ApplicationConfiguration
  /**
   * Render the Application, creating its HTMLElement and replacing its innerHTML.
   * Add it to the DOM if it is not currently rendered and rendering is forced. Otherwise, re-render its contents.
   * @param {boolean|RenderOptions} [options]            Options which configure application rendering behavior.
   *                                                      A boolean is interpreted as the "force" option.
   * @param {RenderOptions} [_options]                   Legacy options for backwards-compatibility with the original
   *                                                      ApplicationV1#render signature.
   * @returns {Promise<this>}            A Promise which resolves to the rendered Application instance
   */
  render(options?: boolean | RenderOptions, _options?: RenderOptions): Promise<this>
  /**
   * Modify the provided options passed to a render request.
   * @param {RenderOptions} options                 Options which configure application rendering behavior
   * @protected
   */
  protected _configureRenderOptions(options: RenderOptions): void
  /**
   * Prepare application rendering context data for a given render request. If exactly one tab group is configured for
   * this application, it will be prepared automatically.
   * @param {RenderOptions} options                 Options which configure application rendering behavior
   * @returns {Promise<ApplicationRenderContext>}   Context data for the render operation
   * @protected
   */
  protected _prepareContext(options: RenderOptions): Promise<ApplicationRenderContext>
  /**
   * Prepare application tab data for a single tab group.
   * @param {string} group The ID of the tab group to prepare
   * @returns {Record<string, ApplicationTab>}
   * @protected
   */
  protected _prepareTabs(group: string): Record<string, ApplicationTab>
  /**
   * Get the configuration for a tabs group.
   * @param {string} group The ID of a tabs group
   * @returns {ApplicationTabsConfiguration|null}
   * @protected
   */
  protected _getTabsConfig(group: string): ApplicationTabsConfiguration | null
  /**
   * Configure the array of header control menu options
   * @returns {ApplicationHeaderControlsEntry[]}
   * @protected
   */
  protected _getHeaderControls(): ApplicationHeaderControlsEntry[]
  /**
   * Iterate over header control buttons, filtering for controls which are visible for the current client.
   * @returns {Generator<ApplicationHeaderControlsEntry>}
   * @yields {ApplicationHeaderControlsEntry}
   * @protected
   */
  protected _headerControlButtons(): Generator<ApplicationHeaderControlsEntry>
  /**
   * Render an HTMLElement for the Application.
   * An Application subclass must implement this method in order for the Application to be renderable.
   * @param {ApplicationRenderContext} context      Context data for the render operation
   * @param {RenderOptions} options                 Options which configure application rendering behavior
   * @returns {Promise<any>}                        The result of HTML rendering may be implementation specific.
   *                                                Whatever value is returned here is passed to _replaceHTML
   * @abstract
   */
  protected _renderHTML(context: ApplicationRenderContext, options: RenderOptions): Promise<any>
  /**
   * Replace the HTML of the application with the result provided by the rendering backend.
   * An Application subclass should implement this method in order for the Application to be renderable.
   * @param {any} result                            The result returned by the application rendering backend
   * @param {HTMLElement} content                   The content element into which the rendered result must be inserted
   * @param {RenderOptions} options                 Options which configure application rendering behavior
   * @protected
   */
  protected _replaceHTML(result: any, content: HTMLElement, options: RenderOptions): void
  /**
   * Render the outer framing HTMLElement which wraps the inner HTML of the Application.
   * @param {RenderOptions} options                 Options which configure application rendering behavior
   * @returns {Promise<HTMLElement>}
   * @protected
   */
  protected _renderFrame(options: RenderOptions): Promise<HTMLElement>
  /**
   * Render a header control button.
   * @param {ApplicationHeaderControlsEntry} control
   * @returns {HTMLLIElement}
   * @protected
   */
  protected _renderHeaderControl(control: ApplicationHeaderControlsEntry): HTMLLIElement
  /**
   * When the Application is rendered, optionally update aspects of the window frame.
   * @param {RenderOptions} options               Options provided at render-time
   * @protected
   */
  protected _updateFrame(options: RenderOptions): void
  /**
   * Insert the application HTML element into the DOM.
   * Subclasses may override this method to customize how the application is inserted.
   * @param {HTMLElement} element                 The element to insert
   * @protected
   */
  protected _insertElement(element: HTMLElement): void
  /**
   * Close the Application, removing it from the DOM.
   * @param {Partial<ApplicationClosingOptions>} [options]  Options which modify how the application is closed.
   * @returns {Promise<this>}                               A Promise which resolves to the closed Application instance
   */
  close(options?: Partial<ApplicationClosingOptions>): Promise<this>
  /**
   * Remove the application HTML element from the DOM.
   * Subclasses may override this method to customize how the application element is removed.
   * @param {HTMLElement} element                 The element to be removed
   * @protected
   */
  protected _removeElement(element: HTMLElement): void
  /**
   * Remove elements from the DOM and trigger garbage collection as part of application closure.
   * @param {ApplicationClosingOptions} options
   * @protected
   */
  protected _tearDown(options: ApplicationClosingOptions): void
  /**
   * Update the Application element position using provided data which is merged with the prior position.
   * @param {Partial<ApplicationPosition>} [position] New Application positioning data
   * @returns {ApplicationPosition|void}              The updated application position
   */
  setPosition(position?: Partial<ApplicationPosition>): ApplicationPosition | void
  /**
   * Translate a requested application position updated into a resolved allowed position for the Application.
   * Subclasses may override this method to implement more advanced positioning behavior.
   * @param {ApplicationPosition} position        Requested Application positioning data
   * @returns {ApplicationPosition}               Resolved Application positioning data
   * @protected
   */
  protected _updatePosition(position: ApplicationPosition): ApplicationPosition
  /**
   * Toggle display of the Application controls menu.
   * Only applicable to window Applications.
   * @param {boolean} [expanded]      Set the controls visibility to a specific state.
   *                                  Otherwise, the visible state is toggled from its current value
   * @param {object} [options]                Options to configure the toggling behavior.
   * @param {boolean} [options.animate=true]  Animate the controls toggling.
   * @returns {Promise<void>}         A Promise which resolves once the control expansion animation is complete
   */
  toggleControls(
    expanded?: boolean,
    {
      animate,
    }?: {
      animate?: boolean | undefined
    },
  ): Promise<void>
  /**
   * Minimize the Application, collapsing it to a minimal header.
   * @returns {Promise<void>}
   */
  minimize(): Promise<void>
  /**
   * Restore the Application to its original dimensions.
   * @returns {Promise<void>}
   */
  maximize(): Promise<void>
  /**
   * Bring this Application window to the front of the rendering stack by increasing its z-index.
   * Once ApplicationV1 is deprecated we should switch from _maxZ to ApplicationV2#maxZ
   * We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp
   */
  bringToFront(): void
  /**
   * Change the active tab within a tab group in this Application instance.
   * @param {string} tab        The name of the tab which should become active
   * @param {string} group      The name of the tab group which defines the set of tabs
   * @param {object} [options]  Additional options which affect tab navigation
   * @param {Event} [options.event]                 An interaction event which caused the tab change, if any
   * @param {HTMLElement} [options.navElement]      An explicit navigation element being modified
   * @param {boolean} [options.force=false]         Force changing the tab even if the new tab is already active
   * @param {boolean} [options.updatePosition=true] Update application position after changing the tab?
   */
  changeTab(
    tab: string,
    group: string,
    {
      event,
      navElement,
      force,
      updatePosition,
    }?: {
      event?: Event | undefined
      navElement?: HTMLElement | undefined
      force?: boolean | undefined
      updatePosition?: boolean | undefined
    },
  ): void
  /**
   * Programmatically submit an ApplicationV2 instance which implements a single top-level form.
   * @param {object} [submitOptions]  Arbitrary options which are supported by and provided to the configured form
   *                                  submission handler.
   * @returns {Promise<*>}            A promise that resolves to the returned result of the form submission handler,
   *                                  if any.
   */
  submit(submitOptions?: object): Promise<any>
  /**
   * Perform an event in the application life-cycle.
   * Await an internal life-cycle method defined by the class.
   * Optionally dispatch an event for any registered listeners.
   * @param {Function} handler        A handler function to call
   * @param {object} options          Options which configure event handling
   * @param {boolean} [options.async]         Await the result of the handler function?
   * @param {any[]} [options.handlerArgs]     Arguments passed to the handler function
   * @param {string} [options.debugText]      Debugging text to log for the event
   * @param {string} [options.eventName]      An event name to dispatch for registered listeners
   * @param {string} [options.hookName]       A hook name to dispatch for this and all parent classes
   * @param {any[]} [options.hookArgs]        Arguments passed to the requested hook function
   * @param {boolean} [options.hookResponse=false]  Add the handler response to hookArgs
   * @param {boolean} [options.parentClassHooks=true] Call hooks for parent classes in the inheritance chain?
   * @returns {Promise<void>|void}    A promise which resoles once the handler is complete if async is true
   * @internal
   */
  _doEvent(
    handler: Function,
    {
      async,
      handlerArgs,
      debugText,
      eventName,
      hookName,
      hookArgs,
      hookResponse,
      parentClassHooks,
    }?: {
      async?: boolean | undefined
      handlerArgs?: any[] | undefined
      debugText?: string | undefined
      eventName?: string | undefined
      hookName?: string | undefined
      hookArgs?: any[] | undefined
      hookResponse?: boolean | undefined
      parentClassHooks?: boolean | undefined
    },
  ): Promise<void> | void
  /**
   * Test whether this Application is allowed to be rendered.
   * @param {RenderOptions} options                 Provided render options
   * @returns {false|void}                          Return false to prevent rendering
   * @throws {Error}                                An Error to display a warning message
   * @protected
   */
  protected _canRender(options: RenderOptions): false | void
  /**
   * Actions performed before a first render of the Application.
   * @param {ApplicationRenderContext} context      Prepared context data
   * @param {RenderOptions} options                 Provided render options
   * @returns {Promise<void>}
   * @protected
   */
  protected _preFirstRender(context: ApplicationRenderContext, options: RenderOptions): Promise<void>
  /**
   * Actions performed after a first render of the Application.
   * @param {ApplicationRenderContext} context      Prepared context data
   * @param {RenderOptions} options                 Provided render options
   * @returns {Promise<void>}
   * @protected
   */
  protected _onFirstRender(context: ApplicationRenderContext, options: RenderOptions): Promise<void>
  /**
   * Actions performed before any render of the Application.
   * Pre-render steps are awaited by the render process.
   * @param {ApplicationRenderContext} context      Prepared context data
   * @param {RenderOptions} options                 Provided render options
   * @returns {Promise<void>}
   * @protected
   */
  protected _preRender(context: ApplicationRenderContext, options: RenderOptions): Promise<void>
  /**
   * Actions performed after any render of the Application.
   * @param {ApplicationRenderContext} context      Prepared context data
   * @param {RenderOptions} options                 Provided render options
   * @returns {Promise<void>}
   * @protected
   */
  protected _onRender(context: ApplicationRenderContext, options: RenderOptions): Promise<void>
  /**
   * Perform post-render finalization actions.
   * @param {ApplicationRenderContext} context  Prepared context data.
   * @param {RenderOptions} options             Provided render options.
   * @returns {Promise<void>}
   * @protected
   */
  protected _postRender(context: ApplicationRenderContext, options: RenderOptions): Promise<void>
  /**
   * Actions performed before closing the Application.
   * Pre-close steps are awaited by the close process.
   * @param {RenderOptions} options                 Provided render options
   * @returns {Promise<void>}
   * @protected
   */
  protected _preClose(options: RenderOptions): Promise<void>
  /**
   * Actions performed after closing the Application.
   * Post-close steps are not awaited by the close process.
   * @param {RenderOptions} options Provided render options
   * @protected
   */
  protected _onClose(options: RenderOptions): void
  /**
   * Actions performed before the Application is re-positioned.
   * Pre-position steps are not awaited because setPosition is synchronous.
   * @param {ApplicationPosition} position          The requested application position
   * @protected
   */
  protected _prePosition(position: ApplicationPosition): void
  /**
   * Actions performed after the Application is re-positioned.
   * @param {ApplicationPosition} position          The requested application position
   * @protected
   */
  protected _onPosition(position: ApplicationPosition): void
  /**
   * Attach event listeners to the Application frame.
   * @protected
   */
  protected _attachFrameListeners(): void
  /**
   * Handle click events on a tab within the Application.
   * @param {PointerEvent} event
   * @protected
   */
  protected _onClickTab(event: PointerEvent): void
  /**
   * A generic event handler for action clicks which can be extended by subclasses.
   * Action handlers defined in DEFAULT_OPTIONS are called first. This method is only called for actions which have
   * no defined handler.
   * @param {PointerEvent} event      The originating click event
   * @param {HTMLElement} target      The capturing HTML element which defined a [data-action]
   * @protected
   */
  protected _onClickAction(event: PointerEvent, target: HTMLElement): void
  /**
   * Handle submission for an Application which uses the form element.
   * @param {ApplicationFormConfiguration} formConfig     The form configuration for which this handler is bound
   * @param {Event|SubmitEvent} event                     The form submission event
   * @returns {Promise<void>}
   * @protected
   */
  protected _onSubmitForm(formConfig: ApplicationFormConfiguration, event: Event | SubmitEvent): Promise<void>
  /**
   * Handle changes to an input element within the form.
   * @param {ApplicationFormConfiguration} formConfig     The form configuration for which this handler is bound
   * @param {Event} event                                 An input change event within the form
   * @protected
   */
  protected _onChangeForm(formConfig: ApplicationFormConfiguration, event: Event): void
  /**
   * Wait for a CSS transition to complete for an element.
   * @param {HTMLElement} element         The element which is transitioning
   * @param {number} timeout              A timeout in milliseconds in case the transitionend event does not occur
   * @returns {Promise<void>}
   * @internal
   */
  _awaitTransition(element: HTMLElement, timeout: number): Promise<void>
  /**
   * Create a ContextMenu instance used in this Application.
   * @param {() => ContextMenuEntry[]} handler  A handler function that provides initial context options
   * @param {string} selector                   A CSS selector to which the ContextMenu will be bound
   * @param {object} [options]                  Additional options which affect ContextMenu construction
   * @param {HTMLElement} [options.container]   A parent HTMLElement which contains the selector target
   * @param {string} [options.hookName]         The hook name
   * @param {boolean} [options.parentClassHooks=true]  Whether to call hooks for the parent classes in the inheritance
   *                                                   chain.
   * @returns {ContextMenu|null}                A created ContextMenu or null if no menu items were defined
   * @protected
   */
  protected _createContextMenu(
    handler: () => ContextMenuEntry[],
    selector: string,
    {
      container,
      hookName,
      parentClassHooks,
      ...options
    }?: {
      container?: HTMLElement | undefined
      hookName?: string | undefined
      parentClassHooks?: boolean | undefined
    },
  ): ContextMenu | null
  /**
   * @deprecated since v12
   * @ignore
   */
  bringToTop(): void
  #private
}
export type ApplicationRenderState = (typeof ApplicationV2.RENDER_STATES)[keyof typeof ApplicationV2.RENDER_STATES]
import type {
  ApplicationClosingOptions,
  ApplicationConfiguration,
  ApplicationFormConfiguration,
  ApplicationHeaderControlsEntry,
  ApplicationPosition,
  ApplicationRenderContext,
  ApplicationRenderOptions,
  ApplicationTab,
  ApplicationTabsConfiguration,
} from "../_types.mjs"
import ContextMenu, { ContextMenuEntry } from "../ux/context-menu.mjs"
export {}
