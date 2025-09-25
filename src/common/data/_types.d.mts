/**
 * A Custom DataField validator function.
 *
 * A boolean return value indicates that the value is valid (true) or invalid (false) with certainty. With an explicit
 * boolean return value no further validation functions will be evaluated.
 *
 * An undefined return indicates that the value may be valid but further validation functions should be performed,
 * if defined.
 *
 * An Error may be thrown which provides a custom error message explaining the reason the value is invalid.
 */
export type DataFieldValidator = (value: any, options: DataFieldValidationOptions) => boolean | void;
export type DataFieldOptions = {
    /**
     * Is this field required to be populated?
     */
    required?: boolean | undefined;
    /**
     * Can this field have null values?
     */
    nullable?: boolean | undefined;
    /**
     * Can this field only be modified by a gamemaster or assistant gamemaster?
     */
    gmOnly?: boolean | undefined;
    /**
     * The initial value of a field, or a function which assigns that initial value.
     */
    initial?: Function | any;
    /**
     * A localizable label displayed on forms which render this field.
     */
    label?: string | undefined;
    /**
     * Localizable help text displayed on forms which render this field.
     */
    hint?: string | undefined;
    /**
     * A custom data field validation function.
     */
    validate?: DataFieldValidator | undefined;
    /**
     * A custom validation error string. When displayed will be prepended with the
     *    document name, field name, and candidate value. This error string is only
     *    used when the return type of the validate function is a boolean. If an Error
     *    is thrown in the validate function, the string message of that Error is used.
     */
    validationError?: string | undefined;
};
export type DataFieldContext = {
    /**
     * A field name to assign to the constructed field
     */
    name?: string | undefined;
    /**
     * Another data field which is a hierarchical parent of this one
     */
    parent?: DataField;
};
export type DataFieldValidationOptions = {
    /**
     * Whether this is a partial schema validation, or a complete one.
     */
    partial?: boolean | undefined;
    /**
     * Whether to allow replacing invalid values with valid fallbacks.
     */
    fallback?: boolean | undefined;
    /**
     * The full source object being evaluated.
     */
    source?: object | undefined;
    /**
     * If true, invalid embedded documents will emit a warning and be placed in
     *   the invalidDocuments collection rather than causing the parent to be
     *   considered invalid.
     */
    dropInvalidEmbedded?: boolean | undefined;
};
export type FormGroupConfig = {
    /**
     * A text label to apply to the form group
     */
    label: string;
    /**
     * An optional units string which is appended to the label
     */
    units?: string | undefined;
    /**
     * An HTML element or collection of elements which provide the inputs
     * for the group
     */
    input: HTMLElement | HTMLCollection;
    /**
     * Hint text displayed as part of the form group
     */
    hint?: string | undefined;
    /**
     * Some parent CSS id within which field names are unique. If provided,
     *                       this root ID is used to automatically assign "id" attributes to
     *                       input elements and "for" attributes to corresponding labels.
     */
    rootId?: string | undefined;
    /**
     * An array of CSS classes applied to the form group element
     */
    classes?: string[] | undefined;
    /**
     * Is the "stacked" class applied to the form group
     */
    stacked?: boolean | undefined;
    /**
     * Should labels or other elements within this form group be
     *              automatically localized?
     */
    localize?: boolean | undefined;
    /**
     * The value of the form group's hidden attribute
     */
    hidden?: boolean | "until-found" | undefined;
    /**
     * A custom form group widget function which replaces the default
     *              group HTML generation
     */
    widget?: CustomFormGroup;
};
export type FormInputConfig<FormInputValue = unknown> = {
    /**
     * The name of the form element
     */
    name: string;
    /**
     * The current value of the form element
     */
    value?: FormInputValue | undefined;
    /**
     * An id to assign to the element
     */
    id?: string | undefined;
    /**
     * Is the field required?
     */
    required?: boolean | undefined;
    /**
     * Is the field disabled?
     */
    disabled?: boolean | undefined;
    /**
     * Is the field readonly?
     */
    readonly?: boolean | undefined;
    /**
     * Is the field autofocused?
     */
    autofocus?: boolean | undefined;
    /**
     * Localize values of this field?
     */
    localize?: boolean | undefined;
    /**
     * Additional dataset attributes to assign to the input
     */
    dataset?: Record<string, string> | undefined;
    /**
     * Aria attributes to assign to the input
     */
    aria?: Record<string, string> | undefined;
    /**
     * A placeholder value, if supported by the element type
     */
    placeholder?: string | undefined;
    /**
     * Space-delimited class names to apply to the input.
     */
    classes?: string | undefined;
    input?: CustomFormInput;
};
export type StringFieldInputConfig = {
    /**
     * The element to create for this
     *  form field
     */
    elementType?: "input" | "textarea" | "code-mirror" | "prose-mirror" | undefined;
};
export type CodeMirrorLanguage = "javascript" | "json" | "html" | "markdown" | "" | "plain";
export type CodeMirrorInputConfig = {
    /**
     * The value's language
     */
    language?: CodeMirrorLanguage | undefined;
    /**
     * The number of spaces per level of indentation
     */
    indent?: number | undefined;
};
export type LightAnimationData = {
    /**
     * The animation type which is applied
     */
    type: string;
    /**
     * The speed of the animation, a number between 0 and 10
     */
    speed: number;
    /**
     * The intensity of the animation, a number between 1 and 10
     */
    intensity: number;
    /**
     * Reverse the direction of animation.
     */
    reverse: boolean;
};
export type _NumberFieldOptions = {
    /**
     * A minimum allowed value
     */
    min?: number | undefined;
    /**
     * A maximum allowed value
     */
    max?: number | undefined;
    /**
     * A permitted step size
     */
    step?: number | undefined;
    /**
     * Must the number be an integer?
     */
    integer?: boolean | undefined;
    /**
     * Must the number be positive?
     */
    positive?: boolean | undefined;
    /**
     * An array of values or an object of values/labels which represent
     * allowed choices for the field. A function may be provided which dynamically
     * returns the array of choices.
     */
    choices?: object | Function | number[] | undefined;
};
export type NumberFieldOptions = DataFieldOptions & _NumberFieldOptions;
export type _StringFieldOptions = {
    /**
     * Is the string allowed to be blank (empty)?
     */
    blank?: boolean | undefined;
    /**
     * Should any provided string be trimmed as part of cleaning?
     */
    trim?: boolean | undefined;
    /**
     * An array of values or an object of values/labels which represent
     * allowed choices for the field. A function may be provided which dynamically
     * returns the array of choices.
     */
    choices?: object | Function | string[] | undefined;
    /**
     * Is this string field a target for text search?
     */
    textSearch?: boolean | undefined;
};
export type StringFieldOptions = DataFieldOptions & _StringFieldOptions;
export type ChoiceInputConfig = {
    options: FormSelectOption[];
    choices: Record<string | number, any> | any[] | (() => Record<string | number, any> | any[]);
    labelAttr?: string | undefined;
    valueAttr?: string | undefined;
};
export type _ArrayFieldOptions = {
    /**
     * The minimum number of elements.
     */
    min?: number | undefined;
    /**
     * The maximum number of elements.
     */
    max?: number | undefined;
};
export type ArrayFieldOptions = DataFieldOptions & _ArrayFieldOptions;
export type _DocumentUUIDFieldOptions = {
    /**
     * A specific document type in {@link CONST.ALL_DOCUMENT_TYPES} required by this field
     */
    type?: string | undefined;
    /**
     * Does this field require (or prohibit) embedded documents?
     */
    embedded?: boolean | undefined;
};
export type DocumentUUIDFieldOptions = StringFieldOptions & _DocumentUUIDFieldOptions;
export type _FilePathFieldOptions = {
    /**
     * A set of categories in {@link CONST.FILE_CATEGORIES} which this field supports
     */
    categories?: string[] | undefined;
    /**
     * Is embedded base64 data supported in lieu of a file path?
     */
    base64?: boolean | undefined;
    /**
     * Does the file path field allow specifying a virtual file path which must begin
     *   with the "#" character?
     */
    virtual?: boolean | undefined;
    /**
     * Does this file path field allow wildcard characters?
     */
    wildcard?: boolean | undefined;
    /**
     * The initial values of the fields
     */
    initial?: object | undefined;
};
export type FilePathFieldOptions = StringFieldOptions & _FilePathFieldOptions;
export type DocumentFlags = Record<string, Record<string, unknown>>;
export type DocumentStats = {
    /**
     * The core version whose schema the Document data is in.
     * It is NOT the version the Document was created or last modified in.
     */
    coreVersion: string | null;
    /**
     * The package name of the system the Document was created in.
     */
    systemId: string | null;
    /**
     * The version of the system the Document was created or last modified in.
     */
    systemVersion: string | null;
    /**
     * A timestamp of when the Document was created.
     */
    createdTime: number | null;
    /**
     * A timestamp of when the Document was last modified.
     */
    modifiedTime: number | null;
    /**
     * The ID of the user who last modified the Document.
     */
    lastModifiedBy: string | null;
    /**
     * The UUID of the compendium Document this one was imported from.
     */
    compendiumSource: string | null;
    /**
     * The UUID of the Document this one is a duplicate of.
     */
    duplicateSource: string | null;
};
export type _JavaScriptFieldOptions = {
    /**
     * Does the field allow async code?
     */
    async?: boolean | undefined;
};
export type JavaScriptFieldOptions = StringFieldOptions & _JavaScriptFieldOptions;
export type ElementValidationFailure = {
    /**
     * Either the element's index or some other identifier for it.
     */
    id: string | number;
    /**
     * Optionally a user-friendly name for the element.
     */
    name?: string | undefined;
    /**
     * The element's validation failure.
     */
    failure: DataModelValidationFailure;
};
