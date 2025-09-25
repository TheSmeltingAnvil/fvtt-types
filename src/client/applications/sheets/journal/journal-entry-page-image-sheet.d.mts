/**
 * An Application responsible for displaying and editing a single image-type JournalEntryPage Document.
 * @extends JournalEntryPageHandlebarsSheet
 */
export default class JournalEntryPageImageSheet extends JournalEntryPageHandlebarsSheet {
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
  /** @override */
  static override VIEW_PARTS: {
    content: {
      template: string
      root: boolean
    }
  }
  #private
}
import JournalEntryPageHandlebarsSheet from "./journal-entry-page-hbs-sheet.mjs"
