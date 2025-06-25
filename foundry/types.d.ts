import { SearchFilterConfiguration } from "./applications/ux/SearchFilter.js"
import { TabsConfiguration } from "./applications/ux/Tabs.js"

export interface ApplicationV1HeaderButton {
  label: string
  class: string
  icon: string
  onclick: ((event: Event) => void) | null
}

interface ApplicationV1Options {
  /** A named "base application" which generates an additional hook */
  baseApplication: string | null
  /** The default pixel width for the rendered HTML */
  width: number | string | null
  /** The default pixel height for the rendered HTML */
  height: number | string | null
  /** The default offset-top position for the rendered HTML */
  top: number | null
  /** The default offset-left position for the rendered HTML */
  left: number | null
  /** A transformation scale for the rendered HTML */
  scale?: number | null
  /** Whether to display the application as a pop-out container */
  popOut: boolean
  /** Whether the rendered application can be minimized (popOut only) */
  minimizable: boolean
  /** Whether the rendered application can be drag-resized (popOut only) */
  resizable: boolean | null
  /** The default CSS id to assign to the rendered HTML */
  id: string
  /** An array of CSS string classes to apply to the rendered HTML */
  classes: string[]
  /** Track Tab navigation handlers which are active for this Application */
  tabs: TabsConfiguration[]
  dragDrop: {
    callbacks?: {
      dragover?: Function
      dragstart?: Function
      drop?: Function
    }
    dragSelector?: Maybe<string>
    dropSelector?: Maybe<string>
  }[]
  /** A default window title string (popOut only) */
  title: string
  /** The default HTML template path to render for this Application */
  template: string | null
  /**
   * A list of unique CSS selectors which target containers that should
   * have their vertical scroll positions preserved during a re-render.
   */
  scrollY: string[]
  /** filters An array of {@link SearchFilter} configuration objects. */
  filters: SearchFilterConfiguration[]
}

export interface DocumentSheetV1Options extends FormApplicationOptions {
  /** The default permissions required to view this Document sheet. */
  viewPermission: number
  /** An array of {@link HTMLSecret} configuration objects. */
  sheetConfig: boolean
  // undocumented
  cssClass: string
}

export interface FormApplicationOptions extends ApplicationV1Options {
  /**
   * Whether the application form is editable - if true, it's fields will
   * be unlocked and the form can be submitted. If false, all form fields
   * will be disabled and the form cannot be submitted. Default is true.
   */
  editable: boolean

  /**
   * Whether to automatically close the application when it's contained
   * form is submitted. Default is true.
   */
  closeOnSubmit: boolean

  /**
   * Whether to automatically submit the contained HTML form when the
   * application window is manually closed. Default is false.
   */
  submitOnClose: boolean

  /**
   * Whether to automatically submit the contained HTML form when an input
   * or select element is changed. Default is false.
   */
  submitOnChange: boolean
}
