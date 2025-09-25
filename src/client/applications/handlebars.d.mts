/**
 * Get a template from the server by fetch request and caching the retrieved result
 * @param {string} path           The web-accessible HTML template URL
 * @param {string} [id]           An ID to register the partial with.
 * @returns {Promise<Handlebars.TemplateDelegate>} A Promise which resolves to the compiled Handlebars template
 */
export function getTemplate(path: string, id?: string): Promise<Handlebars.TemplateDelegate>;
/**
 * Load and cache a set of templates by providing an Array of paths
 * @param {string[]|Record<string, string>} paths An array of template file paths to load, or an object of Handlebars
 *                                                partial IDs to paths.
 * @returns {Promise<Handlebars.TemplateDelegate[]>}
 *
 * @example Loading a list of templates.
 * ```js
 * await foundry.applications.handlebars.loadTemplates(["templates/apps/foo.html", "templates/apps/bar.html"]);
 * ```
 * ```hbs
 * <!-- Include a preloaded template as a partial -->
 * {{> "templates/apps/foo.html" }}
 * ```
 *
 * @example Loading an object of templates.
 * ```js
 * await foundry.applications.handlebars.loadTemplates({
 *   foo: "templates/apps/foo.html",
 *   bar: "templates/apps/bar.html"
 * });
 * ```
 * ```hbs
 * <!-- Include a preloaded template as a partial -->
 * {{> foo }}
 * ```
 */
export function loadTemplates(paths: string[] | Record<string, string>): Promise<Handlebars.TemplateDelegate[]>;
/**
 * Get and render a template using provided data and handle the returned HTML
 * Support asynchronous file template file loading with a client-side caching layer
 *
 * Allow resolution of prototype methods and properties since this all occurs within the safety of the client.
 * @see {@link https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access}
 *
 * @param {string} path             The file path to the target HTML template
 * @param {object} data             A data object against which to compile the template
 *
 * @returns {Promise<string>}        Returns the compiled and rendered template as a string
 */
export function renderTemplate(path: string, data: object): Promise<string>;
/**
 * Initialize Handlebars extensions and helpers.
 */
export function initialize(): void;
/**
 * For checkboxes, if the value of the checkbox is true, add the "checked" property, otherwise add nothing.
 * @param {unknown} value A value with a truthiness indicative of whether the checkbox is checked
 * @returns {string}
 *
 * @example
 * ```hbs
 * <label>My Checkbox</label>
 * <input type="checkbox" name="myCheckbox" {{checked myCheckbox}}>
 * ```
 */
export function checked(value: unknown): string;
/**
 * For use in form inputs. If the supplied value is truthy, add the "disabled" property, otherwise add nothing.
 * @param {unknown} value A value with a truthiness indicative of whether the input is disabled
 * @returns {string}
 *
 * @example
 * ```hbs
 * <button type="submit" {{disabled myValue}}>Submit</button>
 * ```
 */
export function disabled(value: unknown): string;
/**
 * Concatenate a number of string terms into a single string.
 * This is useful for passing arguments with variable names.
 * @param {string[]} values             The values to concatenate
 * @returns {Handlebars.SafeString}
 *
 * @example Concatenate several string parts to create a dynamic variable
 * ```hbs
 * {{filePicker target=(concat "faces." i ".img") type="image"}}
 * ```
 */
export function concat(...values: string[]): Handlebars.SafeString;
/**
 * Construct an editor element for rich text editing with TinyMCE or ProseMirror.
 * @param {string} content                       The content to display and edit.
 * @param {object} [options]
 * @param {string} [options.target]              The named target data element
 * @param {boolean} [options.button]             Include a button used to activate the editor later?
 * @param {string} [options.class]               A specific CSS class to add to the editor container
 * @param {boolean} [options.editable=true]      Is the text editor area currently editable?
 * @param {string} [options.engine="tinymce"]    The editor engine to use, see
 *   {@link foundry.applications.ux.TextEditor.create}. Default: `"tinymce"`.
 * @param {boolean} [options.collaborate=false]  Whether to turn on collaborative editing features for ProseMirror.
 * @returns {Handlebars.SafeString}
 *
 * @example
 * ```hbs
 * {{editor world.description target="description" button=false engine="prosemirror" collaborate=false}}
 * ```
 */
export function editor(content: string, options?: {
    target?: string | undefined;
    button?: boolean | undefined;
    class?: string | undefined;
    editable?: boolean | undefined;
    engine?: string | undefined;
    collaborate?: boolean | undefined;
}): Handlebars.SafeString;
/**
 * A ternary expression that allows inserting A or B depending on the value of C.
 * @param {boolean} criteria    The test criteria
 * @param {string} ifTrue       The string to output if true
 * @param {string} ifFalse      The string to output if false
 * @returns {string}            The ternary result
 *
 * @example Ternary if-then template usage
 * ```hbs
 * {{ifThen true "It is true" "It is false"}}
 * ```
 */
export function ifThen(criteria: boolean, ifTrue: string, ifFalse: string): string;
/**
 * Translate a provided string key by using the loaded dictionary of localization strings.
 * @param {string} value The path to a localized string
 * @param {{hash: object}} options Interpolation data passed to Localization#format
 * @returns {string}
 *
 * @example Translate a provided localization string, optionally including formatting parameters
 * ```hbs
 * <label>{{localize "ACTOR.Create"}}</label> <!-- "Create Actor" -->
 * <label>{{localize "CHAT.InvalidCommand" command=foo}}</label> <!-- "foo is not a valid chat message command." -->
 * ```
 */
export function localize(value: string, options: {
    hash: object;
}): string;
/**
 * A string formatting helper to display a number with a certain fixed number of decimals and an explicit sign.
 * @param {number|string} value       A numeric value to format
 * @param {object} options            Additional options which customize the resulting format
 * @param {number} [options.decimals=0]   The number of decimal places to include in the resulting string
 * @param {boolean} [options.sign=false]  Whether to include an explicit "+" sign for positive numbers   *
 * @returns {Handlebars.SafeString}   The formatted string to be included in a template
 *
 * @example
 * ```hbs
 * {{numberFormat 5.5}} <!-- 5.5 -->
 * {{numberFormat 5.5 decimals=2}} <!-- 5.50 -->
 * {{numberFormat 5.5 decimals=2 sign=true}} <!-- +5.50 -->
 * {{numberFormat null decimals=2 sign=false}} <!-- NaN -->
 * {{numberFormat undefined decimals=0 sign=true}} <!-- NaN -->
 *  ```
 */
export function numberFormat(value: number | string, options: {
    decimals?: number | undefined;
    sign?: boolean | undefined;
}): Handlebars.SafeString;
/**
 * Render a form input field of type number with value appropriately rounded to step size.
 * @param {number} value
 * @param {FormInputConfig<number> & NumberInputConfig} options
 * @returns {Handlebars.SafeString}
 *
 * @example
 * ```hbs
 * {{numberInput value name="numberField" step=1 min=0 max=10}}
 * ```
 */
export function numberInput(value: number, options: FormInputConfig<number> & NumberInputConfig): Handlebars.SafeString;
/**
 * Create an object from a sequence of `key=value` pairs.
 * @param {Handlebars.HelperOptions} options
 * @returns {Record<string, unknown>}
 */
export function object(options: Handlebars.HelperOptions): Record<string, unknown>;
/**
 * A helper to create a set of radio checkbox input elements in a named set.
 * The provided keys are the possible radio values while the provided values are human-readable labels.
 *
 * @param {string} name         The radio checkbox field name
 * @param {object} choices      A mapping of radio checkbox values to human-readable labels
 * @param {object} options      Options which customize the radio boxes creation
 * @param {string} options.checked    Which key is currently checked?
 * @param {boolean} options.localize  Pass each label through string localization?
 * @returns {Handlebars.SafeString}
 *
 * @example The provided input data
 * ```js
 * let groupName = "importantChoice";
 * let choices = {a: "Choice A", b: "Choice B"};
 * let chosen = "a";
 * ```
 *
 * @example The template HTML structure
 * ```hbs
 * <div class="form-group">
 *   <label>Radio Group Label</label>
 *   <div class="form-fields">
 *     {{radioBoxes groupName choices checked=chosen localize=true}}
 *   </div>
 * </div>
 * ```
 */
export function radioBoxes(name: string, choices: object, options: {
    checked: string;
    localize: boolean;
}): Handlebars.SafeString;
/**
 * @typedef SelectOptionsHelperOptions
 * @property {boolean} invert     Invert the key/value order of a provided choices object
 * @property {string|string[]|Set<string>} selected  The currently selected value or values
 */
/**
 * A helper to create a set of &lt;option> elements in a &lt;select> block based on a provided dictionary.
 * The provided keys are the option values while the provided values are human-readable labels.
 * This helper supports both single-select and multi-select input fields.
 *
 * @param {object|Array<object>} choices       A mapping of radio checkbox values to human-readable labels
 * @param {SelectInputConfig & SelectOptionsHelperOptions} options  Options which configure how select options are
 *                                            generated by the helper
 * @returns {Handlebars.SafeString}           Generated HTML safe for rendering into a Handlebars template
 *
 * @example The provided input data
 * ```js
 * let choices = {a: "Choice A", b: "Choice B"};
 * let value = "a";
 * ```
 * The template HTML structure
 * ```hbs
 * <select name="importantChoice">
 *   {{selectOptions choices selected=value localize=true}}
 * </select>
 * ```
 * The resulting HTML
 * ```html
 * <select name="importantChoice">
 *   <option value="a" selected>Choice A</option>
 *   <option value="b">Choice B</option>
 * </select>
 * ```
 *
 * @example Using inverted choices
 * ```js
 * let choices = {"Choice A": "a", "Choice B": "b"};
 * let value = "a";
 * ```
 *  The template HTML structure
 *  ```hbs
 * <select name="importantChoice">
 *   {{selectOptions choices selected=value inverted=true}}
 * </select>
 * ```
 *
 * @example Using valueAttr and labelAttr with objects
 * ```js
 * let choices = {foo: {key: "a", label: "Choice A"}, bar: {key: "b", label: "Choice B"}};
 * let value = "b";
 * ```
 * The template HTML structure
 * ```hbs
 * <select name="importantChoice">
 *   {{selectOptions choices selected=value valueAttr="key" labelAttr="label"}}
 * </select>
 * ```
 *
 * @example Using valueAttr and labelAttr with arrays
 * ```js
 * let choices = [{key: "a", label: "Choice A"}, {key: "b", label: "Choice B"}];
 * let value = "b";
 * ```
 * The template HTML structure
 * ```hbs
 * <select name="importantChoice">
 *   {{selectOptions choices selected=value valueAttr="key" labelAttr="label"}}
 * </select>
 * ```
 */
export function selectOptions(choices: object | Array<object>, options: SelectInputConfig & SelectOptionsHelperOptions): Handlebars.SafeString;
/**
 * Convert a DataField instance into an HTML input fragment.
 * @param {DataField} field             The DataField instance to convert to an input
 * @param {object} options              Helper options
 * @returns {Handlebars.SafeString}
 */
export function formInput(field: DataField, options: object): Handlebars.SafeString;
/**
 * Convert a DataField instance into an HTML input fragment.
 * @param {DataField} field             The DataField instance to convert to an input
 * @param {object} options              Helper options
 * @returns {Handlebars.SafeString}
 */
export function formGroup(field: DataField, options: object): Handlebars.SafeString;
/**
 * @deprecated since v12
 * @ignore
 */
export function filePicker(options: any): "" | Handlebars.SafeString;
/**
 * @deprecated since v12
 * @ignore
 */
export function colorPicker(options: any): Handlebars.SafeString;
/**
 * @deprecated since v12
 * @ignore
 */
export function select(selected: any, options: any): any;
/**
 * @deprecated since v13
 * @ignore
 */
export function rangePicker(options: any): Handlebars.SafeString;
export type SelectOptionsHelperOptions = {
    /**
     * Invert the key/value order of a provided choices object
     */
    invert: boolean;
    /**
     * The currently selected value or values
     */
    selected: string | string[] | Set<string>;
};
