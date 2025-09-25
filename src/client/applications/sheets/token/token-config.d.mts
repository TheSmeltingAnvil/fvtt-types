/**
 * The Application responsible for configuring a single token document within a parent Scene
 * @extends ApplicationSheetV2
 * @mixes TokenApplication
 */
export default class TokenConfig {
    /** @override */
    override isPrototype: boolean;
    /** @override */
    override get token(): any;
    /** @override */
    override get actor(): any;
    /** @override */
    override get _fields(): foundry.abstract.types.DataSchema;
    /** @inheritDoc */
    get isVisible(): any;
    /** @override */
    override _initializeTokenPreview(): Promise<void>;
    _preview: any;
    /** @inheritDoc */
    _prepareContext(options: any): Promise<any>;
    /** @inheritDoc */
    _prepareAppearanceTab(options: any): Promise<any>;
    /** @inheritDoc */
    _toggleDisabled(disabled: any): void;
    /** @inheritDoc */
    _previewChanges(changes: any): void;
    /** @inheritDoc */
    _onRender(context: any, options: any): any;
    /** @inheritDoc */
    _onChangeForm(formConfig: any, event: any): void;
    /**
     * Handle changing the attribute bar in the drop-down selector to update the default current and max value
     * @param {Event} event  The select input change event
     * @protected
     */
    protected _onChangeBar(event: Event): void;
    /** @inheritDoc */
    _onClose(options: any): void;
    /** @inheritDoc */
    _processFormData(event: any, form: any, formData: any): any;
    /** @inheritDoc */
    _processSubmitData(event: any, form: any, submitData: any, options: any): Promise<void>;
    #private;
}
