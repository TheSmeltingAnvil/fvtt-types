/**
 * A generic helper for drawing a standard Control Icon
 * @type {PIXI.Container}
 */
export default class ControlIcon {
  constructor(
    {
      texture,
      size,
      borderColor,
      tint,
      elevation,
    }?: {
      size?: number | undefined
      borderColor?: number | undefined
      tint?: null | undefined
      elevation?: number | undefined
    },
    ...args: any[]
  )
  iconSrc: any
  size: number
  rect: number[]
  borderColor: number
  /**
   * The color of the icon tint, if any
   * @type {number|null}
   */
  tintColor: number | null
  eventMode: string
  interactiveChildren: boolean
  hitArea: any
  cursor: string
  bg: any
  icon: any
  border: any
  tooltip: any
  set elevation(value: number)
  /**
   * The elevation of the ControlIcon, which is displayed in its tooltip text.
   * @type {number}
   */
  get elevation(): number
  /**
   * Initial drawing of the ControlIcon
   * @returns {Promise<ControlIcon>}
   */
  draw(): Promise<ControlIcon>
  texture: any
  /**
   * Incremental refresh for ControlIcon appearance.
   */
  refresh({ visible, iconColor, borderColor, borderVisible }?: object): this
  visible: any
  #private
}
