import DataModel from "foundry/abstract/DataModel.js"
import { ApplicationConfiguration, FormFooterButton } from "../_types.js"
import ApplicationV2 from "../api/ApplicationV2.js"
import HandlebarsApplicationMixin, {
  HandlebarsRenderOptions,
  HandlebarsTemplatePart,
} from "../api/HandlebarsApplicationMixin.js"
import DataField from "foundry/data/fields/DataField.js"
import CombatConfiguration from "foundry/data/CombatConfiguration.js"
import * as types from "foundry/applications/_types.js"

export interface CombatTrackerContext extends types.ApplicationRenderContext {
  rootId: string
  //attributeChoices: TrackedAttributesDescription
  canConfigure: boolean
  combatTheme?: SettingConfig
  fields: (typeof CombatConfiguration)["schema"]["fields"]
  selectedTheme?: SettingConfig
  settings: SettingConfig
  //animationChoices: TurnMarkerData
  buttons: FormFooterButton[]
}

/** The Application responsible for configuring the CombatTracker and its contents. */
export default class CombatTrackerConfig extends HandlebarsApplicationMixin(ApplicationV2) {
  static override DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  override _prepareContext(options: HandlebarsRenderOptions): Promise<CombatTrackerContext>
}

/** A Client Setting */
export interface SettingConfig<
  TChoices extends Record<string, unknown> | undefined = Record<string, unknown> | undefined,
> {
  /** A unique machine-readable id for the setting */
  key: string
  /** The namespace the setting belongs to */
  namespace: string
  /** The human readable name */
  name: string
  /** An additional human readable hint */
  hint?: string
  /** The scope the Setting is stored in, either World or Client */
  scope: "world" | "client"
  /** Indicates if this Setting should render in the Config application */
  config: boolean
  /** This will prompt the user to reload the application for the setting to take effect. */
  requiresReload?: boolean
  /** The JS Type that the Setting is storing */
  type:
    | NumberConstructor
    | StringConstructor
    | BooleanConstructor
    | ObjectConstructor
    | ArrayConstructor
    | ConstructorOf<DataModel>
    | DataField
  /** For string Types, defines the allowable values */
  choices?: TChoices
  /** For numeric Types, defines the allowable range */
  range?: this["type"] extends NumberConstructor ? { min: number; max: number; step: number } : never
  /** The default value */
  default?: number | string | boolean | object | (() => number | string | boolean | object)
  /** Executes when the value of this Setting changes */
  onChange?: (choice: TChoices extends object ? keyof TChoices : unknown) => void | Promise<void>
}
