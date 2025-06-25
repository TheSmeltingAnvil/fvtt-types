export interface DocumentSheetConfiguration<TDocument extends foundry.abstract.Document = foundry.abstract.Document>
  extends foundry.applications.types.ApplicationConfiguration {
  /** The Document instance associated with this sheet */
  document: TDocument
  /** A permission level in CONST.DOCUMENT_OWNERSHIP_LEVELS */
  viewPermission: number
  /** A permission level in CONST.DOCUMENT_OWNERSHIP_LEVELS */
  editPermission: number
  /** Can this sheet class be used to create a new Document? */
  canCreate: boolean
  /** Allow sheet configuration as a header button */
  sheetConfig: boolean
}

export interface DocumentSheetRenderOptions extends foundry.applications.types.ApplicationRenderOptions {
  /** A string with the format "{operation}{documentName}" providing context */
  renderContext?: string
  /** Data describing the document modification that occurred */
  renderData?: object
}

export interface DocumentSheetConfigRenderContext {
  /** Context for the sheet field. */
  sheet: foundry.applications.apps.DocumentSheetConfigFieldDescriptor
  /** Context for the theme field. */
  theme: foundry.applications.apps.DocumentSheetConfigFieldDescriptor
}
