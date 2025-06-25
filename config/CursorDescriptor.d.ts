/**
 *
 */
export default interface CursorDescriptor {
  /**
   * The URL of the cursor image. Must be no larger than 128x128. 32x32 is recommended.
   */
  url: string
  /**
   * The X co-ordinate of the cursor hotspot.
   */
  x?: number
  /**
   * The Y co-ordinate of the cursor hotspot.
   */
  y?: number
}
