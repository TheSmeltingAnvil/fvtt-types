/** @import DataModel from "@common/abstract/data.mjs" */
/**
 * A helper class which assists with localization and string translation
 * @param {string} serverLanguage       The default language configuration setting for the server
 */
export default class Localization {
    /**
     * Perform one-time localization of the fields in a DataModel schema, translating their label and hint properties.
     * @param {typeof DataModel} model          The DataModel class to localize
     * @param {object} options                  Options which configure how localization is performed
     * @param {string[]} [options.prefixes]       An array of localization key prefixes to use. If not specified, prefixes
     *                                            are learned from the DataModel.LOCALIZATION_PREFIXES static property.
     * @param {string} [options.prefixPath]       A localization path prefix used to prefix all field names within this
     *                                            model. This is generally not required.
     *
     * @see {@link DataModel.LOCALIZATION_PREFIXES} for an example of the class definition and
     * localization file structure.
     */
    static localizeDataModel(model: typeof DataModel, { prefixes, prefixPath }?: {
        prefixes?: string[] | undefined;
        prefixPath?: string | undefined;
    }): void;
    /**
     * Perform one-time localization of data model definitions which localizes their label and hint properties.
     */
    static #localizeDataModels(): void;
    /**
     * Localize the "label" and "hint" properties for all fields in a data schema.
     * @param {SchemaField} schema
     * @param {string[]} prefixes
     * @param {object} [options]
     * @param {string} [options.prefixPath]
     * @param {Set<foundry.data.fields.DataField>} [options.seenFields]
     */
    static localizeSchema(schema: SchemaField, prefixes?: string[], { prefixPath, seenFields }?: {
        prefixPath?: string | undefined;
        seenFields?: Set<foundry.data.fields.DataField> | undefined;
    }): void;
    constructor(serverLanguage: any);
    /**
     * The target language for localization
     * @type {string}
     */
    lang: string;
    /**
     * The package authorized to provide default language configurations
     * @type {string}
     */
    defaultModule: string;
    /**
     * The translation dictionary for the target language
     * @type {Object}
     */
    translations: Object;
    /**
     * Fallback translations if the target keys are not found
     * @type {Object}
     * @internal
     */
    _fallback: Object;
    /**
     * Initialize the Localization module
     * Discover available language translations and apply the current language setting
     * @returns {Promise<void>}      A Promise which resolves once languages are initialized
     */
    initialize(): Promise<void>;
    /**
     * Set a language as the active translation source for the session
     * @param {string} lang       A language string in CONFIG.supportedLanguages
     * @returns {Promise<void>}   A Promise which resolves once the translations for the requested language are ready
     */
    setLanguage(lang: string): Promise<void>;
    /**
     * Return whether a certain string has a known translation defined.
     * @param {string} stringId     The string key being translated
     * @param {boolean} [fallback]  Allow fallback translations to count?
     * @returns {boolean}
     */
    has(stringId: string, fallback?: boolean): boolean;
    /**
     * Localize a string by drawing a translation from the available translations dictionary, if available
     * If a translation is not available, the original string is returned
     * @param {string} stringId       The string ID to translate
     * @returns {string}              The translated string
     *
     * @example Localizing a simple string in JavaScript
     * ```js
     * {
     *   "MYMODULE.MYSTRING": "Hello, this is my module!"
     * }
     * game.i18n.localize("MYMODULE.MYSTRING"); // Hello, this is my module!
     * ```
     *
     * @example Localizing a simple string in Handlebars
     * ```hbs
     * {{localize "MYMODULE.MYSTRING"}} <!-- Hello, this is my module! -->
     * ```
     */
    localize(stringId: string): string;
    /**
     * Localize a string including variable formatting for input arguments.
     * Provide a string ID which defines the localized template.
     * Variables can be included in the template enclosed in braces and will be substituted using those named keys.
     *
     * @param {string} stringId     The string ID to translate
     * @param {object} data         Provided input data
     * @returns {string}             The translated and formatted string
     *
     * @example Localizing a formatted string in JavaScript
     * ```js
     * {
     *   "MYMODULE.GREETING": "Hello {name}, this is my module!"
     * }
     * game.i18n.format("MYMODULE.GREETING" {name: "Andrew"}); // Hello Andrew, this is my module!
     * ```
     *
     * @example Localizing a formatted string in Handlebars
     * ```hbs
     * {{localize "MYMODULE.GREETING" name="Andrew"}} <!-- Hello, this is my module! -->
     * ```
     */
    format(stringId: string, data?: object): string;
    /**
     * Retrieve list formatter configured to the world's language setting.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat}
     * @param {object} [options]
     * @param {Intl.ListFormatStyle} [options.style="long"] The list formatter style, either "long", "short", or "narrow".
     * @param {Intl.ListFormatType} [options.type="conjunction"] The list formatter type, either "conjunction",
     *                                                           "disjunction", or "unit".
     * @returns {Intl.ListFormat}
     */
    getListFormatter({ style, type }?: {
        style?: Intl.ListFormatStyle | undefined;
        type?: Intl.ListFormatType | undefined;
    }): Intl.ListFormat;
    /**
     * Sort an array of objects by a given key in a localization-aware manner.
     * @param {object[]} objects  The objects to sort, this array will be mutated.
     * @param {string} key        The key to sort the objects by. This can be provided in dot-notation.
     * @returns {object[]}
     */
    sortObjects(objects: object[], key: string): object[];
    #private;
}
import type DataModel from "@common/abstract/data.mjs";
