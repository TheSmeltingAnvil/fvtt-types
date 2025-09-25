/**
 * An extension of the native FormData implementation.
 *
 * This class functions the same way that the default FormData does, but it is more opinionated about how
 * input fields of certain types should be evaluated and handled.
 *
 * It also adds support for certain Foundry VTT specific concepts including:
 *  Support for defined data types and type conversion
 *  Support for TinyMCE editors
 *  Support for editable HTML elements
 *
 * @extends {FormData}
 *
 * @param {HTMLFormElement} form          The form being processed
 * @param {object} options                Options which configure form processing
 * @param {Record<string, object>} [options.editors]      A record of TinyMCE editor metadata objects, indexed by their update key
 * @param {Record<string, string>} [options.dtypes]       A mapping of data types for form fields
 * @param {boolean} [options.disabled=false]      Include disabled fields?
 * @param {boolean} [options.readonly=false]      Include readonly fields?
 */
export default class FormDataExtended extends FormData {
  constructor(
    form: any,
    {
      dtypes,
      editors,
      disabled,
      readonly,
    }?: {
      dtypes?: object | undefined
      editors?: object | undefined
      disabled?: boolean | undefined
      readonly?: boolean | undefined
    },
  )
  /**
   * A mapping of data types requested for each form field.
   * @type {{string, string}}
   */
  dtypes: {
    string: any
    string: any
  }
  /**
   * A record of TinyMCE editors which are linked to this form.
   * @type {Record<string, object>}
   */
  editors: Record<string, object>
  /**
   * Process the HTML form element to populate the FormData instance.
   * @param {HTMLFormElement} form    The HTML form being processed
   * @param {object} options          Options forwarded from the constructor
   */
  process(form: HTMLFormElement, options: object): void
  /**
   * Assign a value to the FormData instance which always contains JSON strings.
   * Also assign the cast value in its preferred data type to the parsed object representation of the form data.
   * @param {string} name     The field name
   * @param {any} value       The raw extracted value from the field
   * @override
   */
  override set(name: string, value: any): void
  /**
   * Append values to the form data, adding them to an array.
   * @param {string} name     The field name to append to the form
   * @param {any} value       The value to append to the form data
   * @override
   */
  override append(name: string, value: any): void
  #private
}
