import { CustomFormGroup } from "foundry/applications/fields/types.js"
import * as fields from "./fields/_module.js"
import { MaybeSchemaProp } from "./fields/util.js"
import CalendarData, { CalendarDataSchema } from "./CalendarData.js"

export interface ArrayFieldOptions<
  TSourceProp extends unknown[],
  TRequired extends boolean,
  TNullable extends boolean,
  THasInitial extends boolean,
> extends DataFieldOptions<TSourceProp, TRequired, TNullable, THasInitial> {
  min?: number
  max?: number
}

export type CalendarConfig = fields.ModelPropsFromSchema<CalendarDataSchema>

/** A definition of a year within a calendar. */
export type CalendarConfigYears = CalendarConfig["years"]

/** A definition of how leap years work within a calendar. */
export type CalendarConfigLeapYear = CalendarConfigYears["leapYear"]

/** Month related configuration for a calendar. */
export type CalendarConfigMonths = NonNullable<CalendarConfig["months"]>

/** A definition of a month within a calendar year. */
export type CalendarConfigMonth = CalendarConfigMonths["values"][number]

/** Day related configuration for a calendar. */
export type CalendarConfigDays = CalendarConfig["years"]

/** A definition of the days of the week within a calendar. */
export interface CalendarConfigDay {
  /** The full name of the weekday. */
  name: string

  /** The abbreviated name of the weekday. */
  abbreviation?: string

  /** The ordinal position of this weekday in the week. */
  ordinal: number

  /** Is this weekday considered a rest day (weekend)? */
  isRestDay?: boolean
}

/** Season related configuration for a calendar. */
export type CalendarConfigSeasons = NonNullable<CalendarConfig["seasons"]>

/** A definition of a season within a calendar year. */
export type CalendarConfigSeason = CalendarConfigSeasons["values"][number]

export interface CleanFieldOptions {
  partial?: boolean
  source?: object
}

export type CustomFormInput = (field: fields.DataField, config: FormInputConfig) => HTMLElement | HTMLCollection

export interface DataFieldOptions<
  TSourceProp,
  TRequired extends boolean,
  TNullable extends boolean,
  THasInitial extends boolean,
> {
  /** Is this field required to be populated? */
  required?: TRequired

  /** Can this field have null values? */
  nullable?: TNullable

  /** Can this field only be modified by a game master or assistant game master? */
  gmOnly?: boolean

  /** The initial value of a field, or a function which assigns that initial value. */
  initial?: THasInitial extends true
    ?
        | TSourceProp
        | ((data: Record<string, unknown>) => MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>)
        | null
    : THasInitial extends false
      ? undefined
      :
          | TSourceProp
          | ((data: Record<string, unknown>) => MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>)
          | null
          | undefined

  /** A localizable label displayed on forms which render this field. */
  label?: string

  /**
   * Localizable help text displayed on forms which render this field.
   */
  hint?: string

  /** A custom data field validation function. */
  validate?: DataFieldValidator

  readonly?: boolean
  /**
   * A custom validation error string. When displayed will be prepended with the
   *    document name, field name, and candidate value. This error string is only
   *    used when the return type of the validate function is a boolean. If an Error
   *    is thrown in the validate function, the string message of that Error is used.
   */
  validationError?: string
}

export interface DataFieldContext {
  /** A field name to assign to the constructed field */
  name?: string
  /** Another data field which is a hierarchical parent of this one */
  parent?: fields.DataField
}

export interface DataFieldValidationOptions {
  /** Whether this is a partial schema validation, or a complete one. */
  partial?: boolean
  /** Whether to allow replacing invalid values with valid fallbacks. */
  fallback?: boolean
  /** The full source object being evaluated. */
  source?: object
  /**
   * If true, invalid embedded documents will emit a warning and be placed in the invalidDocuments collection rather
   * than causing the parent to be considered invalid.
   */
  dropInvalidEmbedded?: boolean
}

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
 * @param value The value provided for validation.
 * @param options Validation options.
 */
export type DataFieldValidator = (value: any, options: DataFieldValidationOptions) => boolean | void

export type DocumentFlags = Record<string, Record<string, unknown>>

interface DocumentUUIDFieldOptions<TRequired extends boolean, TNullable extends boolean, THasInitial extends boolean>
  extends StringFieldOptions<DocumentUUID, TRequired, TNullable, THasInitial> {
  /** A specific document type in {@link CONST.ALL_DOCUMENT_TYPES} required by this field */
  type?: DocumentType
  /** Does this field require (or prohibit) embedded documents? */
  embedded?: boolean
}

interface FilePathFieldOptions<
  TSourceProp extends foundry.abstract.FilePath,
  TRequired extends boolean,
  TNullable extends boolean,
  THasInitial extends boolean,
> extends StringFieldOptions<TSourceProp, TRequired, TNullable, THasInitial> {
  /** A set of categories in CONST.FILE_CATEGORIES which this field supports */
  categories?: CONST.FileCategory[]
  /** Is embedded base64 data supported in lieu of a file path? */
  base64?: boolean
  /** Does the file path field allow specifying a virtual file path which must begin with the "#" character? */
  virtual?: boolean
  /** Does this file path field allow wildcard characters? */
  wildcard?: boolean
}

export interface FormGroupConfig {
  /** A text label to apply to the form group */
  label: string

  /** An optional units string which is appended to the label */
  units?: string

  /** An HTML element or collection of elements which provide the inputs for the group */
  input: HTMLElement | HTMLCollection

  /**
   * Hint text displayed as part of the form group
   */
  hint?: string
  /**
   * Some parent CSS id within which field names are unique. If provided,
   *                       this root ID is used to automatically assign "id" attributes to
   *                       input elements and "for" attributes to corresponding labels.
   */
  rootId?: string
  /**
   * An array of CSS classes applied to the form group element
   */
  classes?: string[]
  /**
   * Is the "stacked" class applied to the form group
   */
  stacked?: boolean
  /**
   * Should labels or other elements within this form group be
   *              automatically localized?
   */
  localize?: boolean
  /**
   * The value of the form group's hidden attribute
   */
  hidden?: boolean | "until-found"
  /**
   * A custom form group widget function which replaces the default
   *              group HTML generation
   */
  widget?: CustomFormGroup
}

interface FormInputConfig<FormInputValue = unknown> {
  /**
   * The name of the form element
   */
  name: string
  /**
   * The current value of the form element
   */
  value?: FormInputValue
  /**
   * An id to assign to the element
   */
  id?: string
  /**
   * Is the field required?
   */
  required?: boolean
  /**
   * Is the field disabled?
   */
  disabled?: boolean
  /**
   * Is the field readonly?
   */
  readonly?: boolean
  /**
   * Is the field autofocused?
   */
  autofocus?: boolean
  /**
   * Localize values of this field?
   */
  localize?: boolean
  /**
   * Additional dataset attributes to assign to the input
   */
  dataset?: Record<string, string>
  /**
   * Aria attributes to assign to the input
   */
  aria?: Record<string, string>
  /**
   * A placeholder value, if supported by the element type
   */
  placeholder?: string
  /**
   * Space-delimited class names to apply to the input.
   */
  classes?: string
  input?: CustomFormInput
}

export interface JavaScriptFieldOptions<
  TRequired extends boolean,
  TNullable extends boolean,
  THasInitial extends boolean,
> extends StringFieldOptions<string, TRequired, TNullable, THasInitial> {
  /** Does the field allow async code? Default: false */
  async?: boolean
}

export interface NumberFieldOptions<
  TSourceProp extends number,
  TRequired extends boolean,
  TNullable extends boolean,
  THasInitial extends boolean,
> extends DataFieldOptions<TSourceProp, TRequired, TNullable, THasInitial> {
  /** A minimum allowed value */
  min?: number
  /** A maximum allowed value */
  max?: number
  /** A permitted step size */
  step?: number
  /** Must the number be an integer? */
  integer?: boolean
  /** Must the number be positive? */
  positive?: boolean
  /**
   * An array of values or an object of values/labels which represent
   * allowed choices for the field. A function may be provided which dynamically
   * returns the array of choices.
   */

  choices?:
    | readonly TSourceProp[]
    | Record<string | number, string>
    | (() => readonly TSourceProp[] | Record<string | number, string>)
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ObjectFieldOptions<
  TSourceProp extends object,
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
> extends DataFieldOptions<TSourceProp, TRequired, TNullable, THasInitial> {}

interface StringFieldInputConfig {
  /** The element to create for this form field
   */
  elementType?: "input" | "textarea" | "prose-mirror" | "code-mirror"
}

interface StringFieldOptions<
  TSourceProp extends string,
  TRequired extends boolean,
  TNullable extends boolean,
  THasInitial extends boolean,
> extends DataFieldOptions<TSourceProp, TRequired, TNullable, THasInitial> {
  /** Is the string allowed to be blank (empty)? */
  blank?: boolean

  /** Should any provided string be trimmed as part of cleaning? */
  trim?: boolean

  /**
   * An array of values or an object of values/labels which represent allowed choices for the field. A function may be
   * provided which dynamically returns the array of choices.
   */
  choices?:
    | readonly TSourceProp[]
    | Record<TSourceProp, string>
    | (() => readonly TSourceProp[] | Record<TSourceProp, string>)

  /** Is this string field a target for text search? */
  textSearch?: boolean
}

/**
 * A decomposition of the integer world time in seconds into component parts.
 * Each component expresses the number of that temporal unit since the time=0 epoch.
 */
export interface TimeComponents {
  /** The number of years completed since zero */
  year: number

  /** The number of days completed within the year */
  day: number

  /** The number of hours completed within the year */
  hour: number

  /** The number of minutes completed within the hour */
  minute: number

  /** The number of seconds completed within the minute */
  second: number

  /** The month, an index of the months.values array */
  month: number

  /** The day of the month, starting from zero */
  dayOfMonth: number

  /** The weekday, an index of the days.values array */
  dayOfWeek: number

  /** The season, an index of the seasons.values array */
  season: number

  /** Is it a leap year? */
  leapYear: boolean
}

export type TimeFormatter = (calendar: CalendarData, components: TimeComponents, options: object) => string

type CodeMirrorLanguage = "javascript" | "json" | "html" | "markdown" | "" | "plain"

interface CodeMirrorInputConfig {
  /** The value's language */
  language?: CodeMirrorLanguage

  /** The number of spaces per level of indentation */
  indent?: number
}
