export type ApplicationConfiguration = {
  /**
   * An HTML element identifier used for this Application instance
   */
  id: string
  /**
   * An string discriminator substituted for {id} in the default
   * HTML element identifier for the class
   */
  uniqueId: string
  /**
   * An array of CSS classes to apply to the Application
   */
  classes: string[]
  /**
   * The HTMLElement tag type used for the outer Application frame
   */
  tag: string
  /**
   * Configuration of the window behaviors for this Application
   */
  window: ApplicationWindowConfiguration
  /**
   *                                              Click actions supported by the Application and their event handler
   *                                              functions. A handler function can be defined directly which only
   *                                              responds to left-click events. Otherwise, an object can be declared
   *                                              containing both a handler function and an array of buttons which are
   *                                              matched against the PointerEvent#button property.
   */
  actions: Record<
    string,
    | ApplicationClickAction
    | {
        handler: ApplicationClickAction
        buttons: number[]
      }
  >
  /**
   * Configuration used if the application top-level element is a form or
   *  dialog
   */
  form?: ApplicationFormConfiguration | undefined
  /**
   * Default positioning data for the application
   */
  position: Partial<ApplicationPosition>
}
export type ApplicationPosition = {
  /**
   * Window offset pixels from top
   */
  top: number
  /**
   * Window offset pixels from left
   */
  left: number
  /**
   * Un-scaled pixels in width or "auto"
   */
  width: number | "auto"
  /**
   * Un-scaled pixels in height or "auto"
   */
  height: number | "auto"
  /**
   * A numeric scaling factor applied to application dimensions
   */
  scale: number
  /**
   * A z-index of the application relative to siblings
   */
  zIndex: number
}
export type ApplicationWindowConfiguration = {
  /**
   * Is this Application rendered inside a window frame?
   */
  frame?: boolean | undefined
  /**
   * Can this Application be positioned via JavaScript or only by CSS
   */
  positioned?: boolean | undefined
  /**
   * The window title. Displayed only if the application is framed
   */
  title?: string | undefined
  /**
   * An optional Font Awesome icon class displayed left of the window title
   */
  icon?: string | false | undefined
  /**
   * An array of window control entries
   */
  controls?: ApplicationHeaderControlsEntry[] | undefined
  /**
   * Can the window app be minimized by double-clicking on the title
   */
  minimizable?: boolean | undefined
  /**
   * Is this window resizable?
   */
  resizable?: boolean | undefined
  /**
   * A specific tag name to use for the .window-content element
   */
  contentTag?: string | undefined
  /**
   * Additional CSS classes to apply to the .window-content element
   */
  contentClasses?: string[] | undefined
}
export type ApplicationFormConfiguration = {
  handler: ApplicationFormSubmission
  submitOnChange: boolean
  closeOnSubmit: boolean
}
export type ApplicationHeaderControlsEntry = {
  /**
   * A font-awesome icon class which denotes the control button
   */
  icon: string
  /**
   * The text label for the control button. This label will be automatically
   * localized when the button is rendered
   */
  label: string
  /**
   * The action name triggered by clicking the control button
   */
  action: string
  /**
   * Is the control button visible for the current client?
   */
  visible?: boolean | (() => boolean) | undefined
  /**
   * A key or value in {@link CONST.DOCUMENT_OWNERSHIP_LEVELS} that
   *  restricts visibility of this option for the current user. This option
   *  only applies to DocumentSheetV2 instances.
   */
  ownership?: DocumentOwnershipLevel | undefined
  /**
   * A custom click handler function. Asynchronous
   *  functions are not awaited.
   */
  onClick?: ((event: PointerEvent) => void | Promise<void>) | undefined
}
export type ApplicationConstructorParams = {
  position: ApplicationPosition
}
export type ApplicationRenderOptions = {
  /**
   * Force application rendering. If true, an application which does not
   *             yet exist in the DOM is added. If false, only applications which
   *             already exist are rendered.
   */
  force?: boolean | undefined
  /**
   * A specific position at which to render the Application
   */
  position?: ApplicationPosition | undefined
  /**
   * Updates to the Application window frame
   */
  window?: ApplicationWindowRenderOptions | undefined
  /**
   * Some Application classes, for example the HandlebarsApplication,
   *                  support re-rendering a subset of application parts instead of the full
   *                  Application HTML.
   */
  parts?: string[] | undefined
  /**
   * Is this render the first one for the application? This property is
   *           populated automatically.
   */
  isFirstRender?: boolean | undefined
  /**
   * A tab to activate. Either the tab's ID for applications with only
   *   one tab group, or an object of tab groups to tab IDs. Re-rendering
   *   an Application with this option will not trigger changeTab.
   */
  tab?: string | Record<string, string> | undefined
}
export type ApplicationWindowRenderOptions = {
  /**
   * Update the window title with a new value?
   */
  title: string
  /**
   * Update the window icon with a new value?
   */
  icon: string | false
  /**
   * Re-render the window controls menu?
   */
  controls: boolean
}
/**
 * Context data provided to the renderer
 */
export type ApplicationRenderContext = {
  /**
   * Tab data prepared from an entry in
   * {@link foundry.applications.api.ApplicationV2.TABS}
   */
  tabs?: Record<string, ApplicationTab> | undefined
}
export type ApplicationClosingOptions = {
  /**
   * Whether to animate the close, or perform it instantaneously
   */
  animate: boolean
  /**
   * Whether the application was closed via keypress.
   */
  closeKey: boolean
  /**
   * Is the application being closed because a form was submitted?
   */
  submitted: boolean
}
/**
 * An on-click action supported by the Application. Run in the context of
 *                                              a {@link foundry.applications.api.HandlebarsApplicationMixin}.
 */
export type ApplicationClickAction = (event: PointerEvent, target: HTMLElement) => void | Promise<void>
/**
 * A form submission handler method. Run in the context of a
 *                                              {@link foundry.applications.api.HandlebarsApplicationMixin}.
 */
export type ApplicationFormSubmission = (
  event: SubmitEvent | Event,
  form: HTMLFormElement,
  formData: FormDataExtended,
) => Promise<any> | Promise<void>
export type ApplicationTabsConfiguration = {
  /**
   *                                  An array of tab configuration data
   */
  tabs: {
    id: string
    icon?: string
    label?: string
    tooltip?: string
    cssClass?: string
  }[]
  /**
   * The tab in this group that will be active on first render
   */
  initial?: string | undefined
  /**
   * A localization path prefix for all tabs in the group: if set, a label is generated
   *  for each tab using a full path of `${labelPrefix}.${tabId}`.
   */
  labelPrefix?: string | undefined
}
export type ApplicationTab = {
  id: string
  group: string
  active: boolean
  cssClass: string
  label?: string | undefined
  icon?: string | undefined
  tooltip?: string | undefined
}
export type FormNode = {
  fieldset: boolean
  legend?: string | undefined
  fields?: FormNode[] | undefined
  field?: DataField
  value?: any
}
export type FormFooterButton = {
  type: string
  name?: string | undefined
  icon?: string | undefined
  label?: string | undefined
  action?: string | undefined
  cssClass?: string | undefined
  disabled?: boolean | undefined
}
import type { DocumentOwnershipLevel } from "@common/constants.mjs"
import type FormDataExtended from "./ux/form-data-extended.mjs"
