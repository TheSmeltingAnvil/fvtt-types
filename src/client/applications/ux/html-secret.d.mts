/**
 * @callback HTMLSecretContentCallback
 * @param {HTMLElement} secret  The secret element whose surrounding content we wish to retrieve.
 * @returns {string}            The content where the secret is housed.
 */
/**
 * @callback HTMLSecretUpdateCallback
 * @param {HTMLElement} secret         The secret element that is being manipulated.
 * @param {string} content             The content block containing the updated secret element.
 * @returns {Promise<ClientDocument>}  The updated Document.
 */
/**
 * @typedef HTMLSecretConfiguration
 * @property {string} parentSelector      The CSS selector used to target content that contains secret blocks.
 * @property {{
 *   content: HTMLSecretContentCallback,
 *   update: HTMLSecretUpdateCallback
 * }} callbacks                           An object of callback functions for each operation.
 */
/**
 * A composable class for managing functionality for secret blocks within DocumentSheets.
 * @see {@link foundry.applications.api.DocumentSheet}
 * @example Activate secret revealing functionality within a certain block of content.
 * ```js
 * const secrets = new HTMLSecret({
 *   selector: "section.secret[id]",
 *   callbacks: {
 *     content: this._getSecretContent.bind(this),
 *     update: this._updateSecret.bind(this)
 *   }
 * });
 * secrets.bind(html);
 * ```
 */
export default class HTMLSecret {
    /**
     * @param {HTMLSecretConfiguration} config  Configuration options.
     */
    constructor({ parentSelector, callbacks }?: HTMLSecretConfiguration);
    /**
     * Add event listeners to the targeted secret blocks.
     * @param {HTMLElement} html  The HTML content to select secret blocks from.
     */
    bind(html: HTMLElement): void;
    /**
     * Handle toggling a secret's revealed state.
     * @param {MouseEvent} event           The triggering click event.
     * @returns {Promise<ClientDocument>|void}  The Document whose content was modified.
     * @protected
     */
    protected _onToggleSecret(event: MouseEvent): Promise<ClientDocument> | void;
}
export type HTMLSecretContentCallback = (secret: HTMLElement) => string;
export type HTMLSecretUpdateCallback = (secret: HTMLElement, content: string) => Promise<ClientDocument>;
export type HTMLSecretConfiguration = {
    /**
     * The CSS selector used to target content that contains secret blocks.
     */
    parentSelector: string;
    /**
     * An object of callback functions for each operation.
     */
    callbacks: {
        content: HTMLSecretContentCallback;
        update: HTMLSecretUpdateCallback;
    };
};
