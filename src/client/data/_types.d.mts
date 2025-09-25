export * from "@common/data/_types.mjs"
/**
 * Default combat tracker settings used in Foundry VTT.
 */
export type CombatConfigurationData = {
  /**
   * A resource identifier for the tracker.
   */
  resource: string
  /**
   * Whether to skip defeated tokens during combat.
   */
  skipDefeated: boolean
  /**
   * Turn marker configuration.
   */
  turnMarker: {
    enabled: boolean
    path: string
    animation: string
    disposition: string
  }
}
export type CalendarConfig = {
  /**
   * The name of the calendar being used.
   */
  name: string
  /**
   * A text description of the calendar configuration.
   */
  description: string
  /**
   * Configuration of years.
   */
  years: CalendarConfigYears
  /**
   * Configuration of months.
   */
  months: CalendarConfigMonths | null
  /**
   * Configuration of days.
   */
  days: CalendarConfigDays
  /**
   * Configuration of seasons.
   */
  seasons: CalendarConfigSeasons | null
}
/**
 * A definition of a year within a calendar.
 */
export type CalendarConfigYears = {
  /**
   * The year which is presented as 0 when formatting a time
   *                         into a string representation.
   */
  yearZero?: number | undefined
  /**
   * The index of days.values that is the first weekday at time=0
   */
  firstWeekday?: number | undefined
  /**
   * A definition of how leap years work within a calendar.
   */
  leapYear?: CalendarConfigLeapYear | null | undefined
}
/**
 * A definition of how leap years work within a calendar.
 */
export type CalendarConfigLeapYear = {
  /**
   * The year number of the first leap year.
   */
  leapStart: number
  /**
   * The number of years between leap years.
   */
  leapInterval: number
}
/**
 * Month related configuration for a calendar.
 */
export type CalendarConfigMonths = {
  /**
   * An array of months in the calendar year.
   */
  values: CalendarConfigMonth[]
}
/**
 * A definition of a month within a calendar year.
 */
export type CalendarConfigMonth = {
  /**
   * The full name of the month.
   */
  name: string
  /**
   * The abbreviated name of the month.
   */
  abbreviation?: string | undefined
  /**
   * The ordinal position of this month in the year.
   */
  ordinal: number
  /**
   * The number of days in the month.
   */
  days: number
  /**
   * The number of days in the month during a leap year.
   *                           If not defined the value of days is used.
   */
  leapDays?: number | undefined
  /**
   * The amount to offset day numbers for this month.
   */
  dayOffset?: number | undefined
  /**
   * If this month is an intercalary month.
   */
  intercalary?: boolean | undefined
  /**
   * The day of the week this month should always start on.
   *          If the value is null the month will start on the next weekday
   *          after the previous month
   */
  startingWeekday?: number | null | undefined
}
/**
 * Day related configuration for a calendar.
 */
export type CalendarConfigDays = {
  /**
   * The configuration of the days of the week.
   */
  values: CalendarConfigDay[]
  /**
   * The number of days in a year.
   */
  daysPerYear?: number | undefined
  /**
   * The number of hours in a day.
   */
  hoursPerDay?: number | undefined
  /**
   * The number of minutes in an hour.
   */
  minutesPerHour?: number | undefined
  /**
   * The number of seconds in a minute.
   */
  secondsPerMinute?: number | undefined
}
/**
 * A definition of the days of the week within a calendar.
 */
export type CalendarConfigDay = {
  /**
   * The full name of the weekday.
   */
  name: string
  /**
   * The abbreviated name of the weekday.
   */
  abbreviation?: string | undefined
  /**
   * The ordinal position of this weekday in the week.
   */
  ordinal: number
  /**
   * Is this weekday considered a rest day (weekend)?
   */
  isRestDay?: boolean | undefined
}
/**
 * Season related configuration for a calendar.
 */
export type CalendarConfigSeasons = {
  /**
   * An array of seasons in the calendar year.
   */
  values: CalendarConfigSeason[]
}
/**
 * A definition of a season within a calendar year. By default, seasons can be defined as aligning to either months or
 * specific ranges of days. A range in either months or in days must be specified.
 */
export type CalendarConfigSeason = {
  /**
   * The full name of the season.
   */
  name: string
  /**
   * The abbreviated name of the season.
   */
  abbreviation?: string | undefined
  /**
   * An ordinal month at the beginning of which the season starts.
   */
  monthStart?: number | null | undefined
  /**
   * An ordinal month at the end of which the season starts.
   */
  monthEnd?: number | null | undefined
  /**
   * A day of the year at the beginning of which the season starts.
   */
  dayStart?: number | null | undefined
  /**
   * A day of the year at the end of which the season ends.
   */
  dayEnd?: number | null | undefined
}
/**
 * A decomposition of the integer world time in seconds into component parts.
 * Each component expresses the number of that temporal unit since the time=0 epoch.
 */
export type TimeComponents = {
  /**
   * The number of years completed since zero
   */
  year: number
  /**
   * The number of days completed within the year
   */
  day: number
  /**
   * The number of hours completed within the year
   */
  hour: number
  /**
   * The number of minutes completed within the hour
   */
  minute: number
  /**
   * The number of seconds completed within the minute
   */
  second: number
  /**
   * The month, an index of the months.values array
   */
  month: number
  /**
   * The day of the month, starting from zero
   */
  dayOfMonth: number
  /**
   * The weekday, an index of the days.values array
   */
  dayOfWeek: number
  /**
   * The season, an index of the seasons.values array
   */
  season: number
  /**
   * Is it a leap year?
   */
  leapYear: boolean
}
import { default as CalendarData } from "./calendar.mjs"
export type TimeFormatter = (
  calendar: CalendarData<TimeComponents>,
  components: TimeComponents,
  options: object,
) => string
