/**
 * An abstract custom HTMLElement designed for use with form inputs.
 * @abstract
 * @template {any} FormInputValueType
 *
 * @fires {Event} input           An "input" event when the value of the input changes
 * @fires {Event} change          A "change" event when the value of the element changes
 */
export default class AbstractFormInputElement<FormInputValueType> extends HTMLElement {
  /**
   * The HTML tag name used by this element.
   * @type {string}
   */
  static tagName: string
  /**
   * Declare that this custom element provides form element functionality.
   * @type {boolean}
   */
  static formAssociated: boolean
  /**
   * Attributes requiring change notifications
   * @type {string[]}
   */
  static observedAttributes: string[]
  constructor()
  /**
   * Attached ElementInternals which provides form handling functionality.
   * @type {ElementInternals}
   * @protected
   */
  protected _internals: ElementInternals
  /**
   * The primary input (if any). Used to determine what element should receive focus when an associated label is clicked
   * on.
   * @type {HTMLElement}
   * @protected
   */
  protected _primaryInput: HTMLElement
  /**
   * The form this element belongs to.
   * @type {HTMLFormElement}
   */
  get form(): HTMLFormElement
  set name(value: string)
  /**
   * The input element name.
   * @type {string}
   */
  get name(): string
  set value(value: FormInputValueType)
  /**
   * The value of the input element.
   * @type {FormInputValueType}
   */
  get value(): FormInputValueType
  /**
   * The underlying value of the element.
   * @type {FormInputValueType}
   * @protected
   */
  protected _value: FormInputValueType
  /**
   * Return the value of the input element which should be submitted to the form.
   * @returns {FormInputValueType}
   * @protected
   */
  protected _getValue(): FormInputValueType
  /**
   * Translate user-provided input value into the format that should be stored.
   * @param {FormInputValueType} value  A new value to assign to the element
   * @throws {Error}        An error if the provided value is invalid
   * @protected
   */
  protected _setValue(value: FormInputValueType): void
  set disabled(value: boolean)
  /**
   * Is this element disabled?
   * @type {boolean}
   */
  get disabled(): boolean
  /**
   * Is this field editable? The field can be neither disabled nor readonly.
   * @type {boolean}
   */
  get editable(): boolean
  /**
   * Special behaviors that the subclass should implement when toggling the disabled state of the input.
   * @param {boolean} disabled    The new disabled state
   * @protected
   */
  protected _toggleDisabled(disabled: boolean): void
  /**
   * An AbortSignal that can be passed to event listeners registered in subclasses. The signal will ensure that the
   * listener is removed when the element is disconnected from the DOM. Not available in the constructor.
   * @type {AbortSignal}
   */
  get abortSignal(): AbortSignal
  /**
   * Initialize the custom element, constructing its HTML.
   */
  connectedCallback(): void
  /** @override */
  disconnectedCallback(): void
  /** @override */
  formDisabledCallback(disabled: any): void
  /** @override */
  attributeChangedCallback(attrName: any, oldValue: any, newValue: any): void
  /**
   * A method provided for subclasses to perform tear-down workflows as an alternative to overriding
   * disconnectedCallback.
   * @protected
   */
  protected _disconnect(): void
  /**
   * Create the HTML elements that should be included in this custom element.
   * Elements are returned as an array of ordered children.
   * @returns {HTMLElement[]}
   * @protected
   */
  protected _buildElements(): HTMLElement[]
  /**
   * Refresh the active state of the custom element.
   * @protected
   */
  protected _refresh(): void
  /**
   * Apply key attributes on the containing custom HTML element to input elements contained within it.
   * @param {HTMLElement} input
   * @internal
   */
  _applyInputAttributes(input: HTMLElement): void
  /**
   * Activate event listeners which add dynamic behavior to the custom element.
   * @protected
   */
  protected _activateListeners(): void
  /**
   * Special handling when the custom element is clicked. This should be implemented to transfer focus to an
   * appropriate internal element.
   * @param {PointerEvent} event
   * @protected
   */
  protected _onClick(event: PointerEvent): void
  #private
}
