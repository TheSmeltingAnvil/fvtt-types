/**
 * @import {ApplicationConfiguration, ApplicationRenderOptions, ApplicationTabsConfiguration} from "../_types.mjs"
 * @import {HandlebarsRenderOptions} from "./handlebars-application.mjs"
 * @import {SearchFilterCallback} from "../ux/search-filter.mjs"
 */
/**
 * @typedef CategoryBrowserConfiguration
 * @property {boolean} packageList Where this application displays is a list of tagged FVTT packages
 * @property {string|null} initialCategory The initial category tab: a `null` value will result in an initial active tab
 *                                         that corresponds with the first category by insertion order.
 * @property {object} subtemplates Additional Template partials for specific use with this class
 * @property {string} subtemplates.category The markup used for each category: required to be set by any subclass
 * @property {string|null} subtemplates.filters Optional template for secondary filtering (aside from text search)
 * @property {string|null} subtemplates.sidebarFooter Optional sidebar footer content
 */
/**
 * An abstract class responsible for displaying a 2-pane Application that allows for entries to be grouped and filtered
 * by category.
 * @extends ApplicationV2<ApplicationConfiguration & CategoryBrowserConfiguration, HandlebarsRenderOptions>
 */
export default class CategoryBrowser extends ApplicationV2<
  ApplicationConfiguration & CategoryBrowserConfiguration,
  HandlebarsRenderOptions
> {
  /** @inheritDoc */
  static DEFAULT_OPTIONS: {
    classes: string[]
    window: {
      contentClasses: string[]
    }
    form: {
      closeOnSubmit: boolean
    }
    initialCategory: null
    packageList: boolean
    subtemplates: {
      category: undefined
      filters: null
      sidebarFooter: null
    }
  }
  /** @override */
  // @ts-expect-error -- IGNORE --
  static override PARTS: {
    sidebar: {
      template: string
      scrollable: string[]
    }
    main: {
      template: string
    }
  }
  constructor(options?: Partial<ApplicationConfiguration & CategoryBrowserConfiguration> | undefined)
  /**
   * Is category and/or entry data loaded? Most subclasses will already have their data close at hand.
   * @returns {boolean}
   * @protected
   */
  protected get _dataLoaded(): boolean
  /** @inheritDoc */
  _initializeApplicationOptions(options: any): ApplicationConfiguration
  /** @inheritDoc */
  _configureRenderParts(options: any): any
  /**
   * Perform a text search without a `KeyboardEvent`.
   * @param {string} query
   */
  search(query: string): void
  /** @inheritDoc */
  render(options: any): Promise<this>
  /** @inheritDoc */
  // @ts-expect-error -- IGNORE --
  _prepareContext(options: any): Promise<{
    rootId: string
    loading: null
    categories: object
    packageList: boolean
    subtemplates: {
      /**
       * The markup used for each category: required to be set by any subclass
       */
      category: string
      /**
       * Optional template for secondary filtering (aside from text search)
       */
      filters: string | null
      /**
       * Optional sidebar footer content
       */
      sidebarFooter: string | null
    }
    submitButton: boolean
  }>
  /**
   * Prepare the structure of category data which is rendered in this configuration form.
   * @returns {Promise<Record<string, {id: string; label: string; entries: object[]}>>}
   * @protected
   * @abstract
   */
  protected _prepareCategoryData(): Promise<
    Record<
      string,
      {
        id: string
        label: string
        entries: object[]
      }
    >
  >
  /**
   * An optional method to make a potentially long-running request to load category data: a temporary message will be
   * displayed until completion.
   * @returns {Promise<void>}
   */
  _loadCategoryData(): Promise<void>
  /**
   * Reusable logic for how categories are sorted in relation to each other.
   * @param {{label: string; [key: string]: unknown}} a
   * @param {{label: string; [key: string]: unknown}} b
   * @protected
   */
  protected _sortCategories(
    a: {
      label: string
      [key: string]: unknown
    },
    b: {
      label: string
      [key: string]: unknown
    },
  ): number
  /** @inheritDoc */
  _tearDown(options: any): void
  /** @inheritDoc */
  _onRender(context: any, options: any): Promise<void>
  protected _onSearchFilter(event: KeyboardEvent | null, query: string, rgx: RegExp, content: HTMLElement): void
  #private
}
export type CategoryBrowserConfiguration = {
  /**
   * Where this application displays is a list of tagged FVTT packages
   */
  packageList: boolean
  /**
   * The initial category tab: a `null` value will result in an initial active tab
   * that corresponds with the first category by insertion order.
   */
  initialCategory: string | null
  /**
   * Additional Template partials for specific use with this class
   */
  subtemplates: {
    category: string
    filters: string | null
    sidebarFooter: string | null
  }
}
import type { ApplicationConfiguration } from "../_types.mjs"
import ApplicationV2 from "./application.mjs"
import type { HandlebarsRenderOptions } from "./handlebars-application.mjs"
