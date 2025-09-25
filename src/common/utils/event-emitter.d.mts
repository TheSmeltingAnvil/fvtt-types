/**
 * @import ApplicationV2 from "../../client/applications/api/application.mjs"
 * @import {Constructor} from "../_types.mjs"
 * @import {EmittedEventListener} from "./_types.mjs"
 */
/**
 * Augment a base class with EventEmitter behavior.
 * @template {Function} TBaseClass
 * @param {TBaseClass} [BaseClass] Some base class to be augmented with event emitter functionality: defaults to an
 *                                 anonymous empty class.
 */
export default function EventEmitterMixin<TBaseClass extends Function>(
  BaseClass?: TBaseClass,
): {
  new (): {
    /**
     * A mapping of registered events.
     * @type {Record<string, Map<EmittedEventListener, {fn: EmittedEventListener, once: boolean}>>}
     */
    // @ts-expect-error -- IGNORE --
    #events: Record<
      string,
      Map<
        EmittedEventListener,
        {
          fn: EmittedEventListener
          once: boolean
        }
      >
    >
    /**
     * Add a new event listener for a certain type of event.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener}
     * @param {string} type                     The type of event being registered for
     * @param {EmittedEventListener} listener   The listener function called when the event occurs
     * @param {object} [options={}]             Options which configure the event listener
     * @param {boolean} [options.once=false]      Should the event only be responded to once and then removed
     */
    addEventListener(
      type: string,
      listener: EmittedEventListener,
      {
        once,
      }?: {
        once?: boolean | undefined
      },
    ): void
    /**
     * Remove an event listener for a certain type of event.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener}
     * @param {string} type                     The type of event being removed
     * @param {EmittedEventListener} listener   The listener function being removed
     */
    removeEventListener(type: string, listener: EmittedEventListener): void
    /**
     * Dispatch an event on this target.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent}
     * @param {Event} event                     The Event to dispatch
     * @returns {boolean}                       Was default behavior for the event prevented?
     */
    dispatchEvent(event: Event): boolean
  }
  /**
   * An array of event types which are valid for this class.
   * @type {string[]}
   */
  emittedEvents: string[]
}
import type { EmittedEventListener } from "./_types.mjs"
