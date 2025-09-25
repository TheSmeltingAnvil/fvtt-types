/**
 * An Application responsible for displaying and editing a single video-type JournalEntryPage Document.
 * @extends JournalEntryPageHandlebarsSheet
 */
export default class JournalEntryPageVideoSheet extends JournalEntryPageHandlebarsSheet {
  /** @override */
  static override DEFAULT_OPTIONS: {
    classes: string[]
    window: {
      icon: string
    }
  }
  /** @inheritDoc */
  static EDIT_PARTS: {
    header: import("../../api/handlebars-application.mjs").HandlebarsTemplatePart
    content: {
      template: string
      classes: string[]
    }
    footer: import("../../api/handlebars-application.mjs").HandlebarsTemplatePart
  }
  /** @inheritDoc */
  static VIEW_PARTS: {
    content: {
      template: string
      root: boolean
    }
  }
  /** @inheritDoc */
  _prepareContentContext(context: any, options: any): Promise<void>
  /**
   * Get the YouTube player parameters depending on whether the sheet is being viewed or edited.
   * @returns {object}
   * @protected
   */
  protected _getYouTubeVars(): object
  /**
   * Convert time components to a timestamp in seconds.
   * @param {{ [h]: number, [m]: number, [s]: number }} components  The time components.
   * @returns {number}                                              The timestamp, in seconds.
   * @protected
   */
  protected _timeComponentsToTimestamp({ h, m, s }: { [h]: number; [m]: number; [s]: number }): number
  /**
   * Convert a timestamp in seconds into separate time components.
   * @param {number} timestamp                             The timestamp, in seconds.
   * @returns {{ [h]: number, [m]: number, [s]: number }}  The individual time components.
   * @protected
   */
  protected _timestampToTimeComponents(timestamp: number): {
    [s]: number
  }
  #private
}
import JournalEntryPageHandlebarsSheet from "./journal-entry-page-hbs-sheet.mjs"
