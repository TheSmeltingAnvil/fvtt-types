/**
 * A mixin class which implements the behavior of EventTarget. This is useful in cases where a class wants
 * EventTarget-like behavior but needs to extend some other class.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget}
 */
export class EventEmitter /*<TBaseClass extends object>*/ {
  /**
   * An array of event types which are valid for this class.
   */
  static emittedEvents: readonly string[]

  /**
   * Add a new event listener for a certain type of event.
   * @param type The type of event being registered for.
   * @param listener The listener function called when the event occurs.
   * @param options Options which configure the event listener
   * @param [options.once] Should the event only be responded to once and then removed.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener}
   */
  addEventListener(type: string, listener: foundry.utils.types.EmittedEventListener, options?: { once?: boolean }): void

  /**
   * Dispatch an event on this target.
   * @param event The Event to dispatch
   * @returns Was default behavior for the event prevented?
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent}
   */
  dispatchEvent(event: Event): boolean

  /**
   * Remove an event listener for a certain type of event.
   * @param type The type of event being removed.
   * @param listener The listener function being removed.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener}
   */
  removeEventListener(type: string, listener: foundry.utils.types.EmittedEventListener): void
}
