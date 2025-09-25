/**
 * The client-side Setting document which extends the common BaseSetting model.
 * @extends BaseSetting
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.collections.WorldSettings}: The world-level collection of Setting
 *   documents
 */
export default class Setting extends BaseSetting {
  /**
   * The types of settings which should be constructed as a function call rather than as a class constructor.
   */
  static #PRIMITIVE_TYPES: readonly [
    StringConstructor,
    NumberConstructor,
    BooleanConstructor,
    ArrayConstructor,
    BigIntConstructor,
  ]
  /**
   * The setting configuration for this setting document.
   * @type {foundry.applications.settings.SettingsConfig|undefined}
   */
  get config(): foundry.applications.settings.SettingsConfig | undefined
  /** @inheritDoc */
  _initialize(options?: object): void
  value: any
  /** @inheritDoc */
  _onCreate(data: any, options: any, userId: any): void
  /** @inheritDoc */
  _onUpdate(changed: any, options: any, userId: any): void
  /**
   * Cast the value of the Setting into its defined type.
   * @returns {*}     The initialized type of the Setting document.
   * @protected
   */
  protected _castType(): any
}
import BaseSetting from "@common/documents/setting.mjs"
