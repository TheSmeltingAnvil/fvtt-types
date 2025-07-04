import * as applications from "foundry/applications/_types.js"
import * as api from "./_module.js"
import { types } from "../_module.js"

export declare type HandlebarsApplication = InstanceType<ReturnType<typeof HandlebarsApplicationMixin>>

declare abstract class HandlebarsApplicationMixinType extends api.ApplicationV2 {
  /** @inheritdoc */
  declare static DEFAULT_OPTIONS: DeepPartial<types.ApplicationConfiguration>

  /** @inheritdoc */
  static TABS: Record<string, types.ApplicationTabsConfiguration>

  /** The default options which configure the application. */
  static PARTS: Record<string, HandlebarsTemplatePart>

  /** A record of all rendered template parts. */
  get parts(): Record<string, HTMLElement>

  protected override _configureRenderOptions(options: DeepPartial<HandlebarsRenderOptions>): void

  /** Allow subclasses to dynamically configure render parts. */
  protected _configureRenderParts(options: HandlebarsRenderOptions): Record<string, HandlebarsTemplatePart>

  /**
   * Render each configured application part using Handlebars templates.
   * @param context        Context data for the render operation
   * @param options        Options which configure application rendering behavior
   * @returns A single rendered HTMLElement for each requested part
   */
  protected override _renderHTML(
    context: types.ApplicationRenderContext,
    options: HandlebarsRenderOptions,
  ): Promise<Record<string, HTMLElement>>

  /**
   * Prepare context that is specific to only a single rendered part.
   *
   * It is recommended to augment or mutate the shared context so that downstream methods like _onRender have
   * visibility into the data that was used for rendering. It is acceptable to return a different context object
   * rather than mutating the shared context at the expense of this transparency.
   *
   * @param partId       The part being rendered
   * @param context      Shared context provided by _prepareContext
   * @returns Context data for a specific part
   */
  protected _preparePartContext(
    partId: string,
    context: applications.ApplicationRenderContext,
    options: HandlebarsRenderOptions,
  ): Promise<applications.ApplicationRenderContext>

  /**
   * Replace the HTML of the application with the result provided by Handlebars rendering.
   * @param result  The result from Handlebars template rendering
   * @param content The content element into which the rendered result must be inserted
   * @param options     Options which configure application rendering behavior
   */
  protected override _replaceHTML(
    result: Record<string, HTMLElement>,
    content: HTMLElement,
    options: HandlebarsRenderOptions,
  ): void

  /**
   * Prepare data used to synchronize the state of a template part.
   * @param partId       The id of the part being rendered
   * @param newElement   The new rendered HTML element for the part
   * @param priorElement The prior rendered HTML element for the part
   * @param state        A state object which is used to synchronize after replacement
   */
  protected _preSyncPartState(partId: string, newElement: HTMLElement, priorElement: HTMLElement, state: object): void

  /**
   * Synchronize the state of a template part after it has been rendered and replaced in the DOM.
   * @param partId                  The id of the part being rendered
   * @param newElement              The new rendered HTML element for the part
   * @param priorElement            The prior rendered HTML element for the part
   * @param state                   A state object which is used to synchronize after replacement
   */
  protected _syncPartState(partId: string, newElement: HTMLElement, priorElement: HTMLElement, state: object): void

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  /**
   * Attach event listeners to rendered template parts.
   * @param partId       The id of the part being rendered
   * @param htmlElement  The rendered HTML element for the part
   * @param options       Rendering options passed to the render method
   */
  protected _attachPartListeners(partId: string, htmlElement: HTMLElement, options: HandlebarsRenderOptions): void
}

/** Augment an Application class with [Handlebars](https://handlebarsjs.com) template rendering behavior. */
export default function HandlebarsApplicationMixin<TBase extends AbstractConstructorOf<api.ApplicationV2>>(
  Base: TBase,
): AbstractConstructorOf<HandlebarsApplicationMixinType> & TBase

export interface HandlebarsTemplatePart {
  /** The template entry-point for the part */
  template: string

  /**
   * A CSS id to assign to the top-level element of the rendered part.
   * This id string is automatically prefixed by the application id.
   */
  id?: string

  /** Does this rendered contents of this template part replace the children of the root element? */
  root?: boolean

  /** An array of CSS classes to apply to the top-level element of the rendered part. */
  classes?: string[]

  /**
   * An array of templates that are required to render the part.
   * If omitted, only the entry-point is inferred as required.
   */
  templates?: string[]

  /**
   * An array of selectors within this part whose scroll positions should
   * be persisted during a re-render operation. A blank string is used
   * to denote that the root level of the part is scrollable.
   */
  scrollable?: string[]

  /** A registry of forms selectors and submission handlers. */
  forms?: Record<string, applications.ApplicationFormConfiguration>
}

export interface HandlebarsRenderOptions extends applications.ApplicationRenderOptions {
  /** An array of named template parts to render */
  parts: string[]
}
