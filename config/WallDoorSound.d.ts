/**
 *
 */
export default interface WallDoorSound {
  /** A sound path when the door is closed. */
  close: string
  /** A localization string label. */
  label: string
  /** A sound path when the door becomes locked. */
  lock: string
  /** A sound path when opening the door. */
  open: string
  /** A sound path when attempting to open a locked door. */
  test: string
  /** A sound path when the door becomes unlocked. */
  unlock: string
}
