/**
 * The Combatant configuration application.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
// @ts-expect-error -- IGNORE --
export default class CombatantConfig extends DocumentSheetV2 {
  /** @inheritDoc */
  static DEFAULT_OPTIONS: {
    classes: string[]
    canCreate: boolean
    window: {
      contentClasses: string[]
      icon: string
    }
    position: {
      width: number
    }
    form: {
      closeOnSubmit: boolean
    }
  }
  /** @override */
  // @ts-expect-error -- IGNORE --
  static override PARTS: {
    body: {
      root: boolean
      template: string
    }
  }
}
import { DocumentSheetV2 } from "../api/_module.mjs"
