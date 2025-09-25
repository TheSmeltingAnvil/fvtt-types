/**
 * A singleton helper class to manage requesting clipboard permissions.
 * Provoides common functionality for working with the clipboard.
 * @see {@link foundry.Game#clipboard}
 */
export default class ClipboardHelper {
    /**
     * Copies plain text to the clipboard in a cross-browser compatible way.
     * @param {string} text  The text to copy.
     * @returns {Promise<void>}
     */
    copyPlainText(text: string): Promise<void>;
}
