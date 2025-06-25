interface _FontDefinition {
  /**
   * An array of remote URLs the font files exist at.
   */
  urls: string[]
}

export type FontDefinition = FontFaceDescriptors & _FontDefinition

export interface FontFamilyDefinition {
  /** Whether the font is available in the rich text editor. This will also enable it for notes and drawings. */
  editor: boolean
  /**
   * Individual font face definitions for this font family. If this is empty, the font family may only be loaded from
   * the client's OS-installed fonts.
   */
  fonts: FontDefinition[]
}
