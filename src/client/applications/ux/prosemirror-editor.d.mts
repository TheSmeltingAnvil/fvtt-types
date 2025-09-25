/**
 * @typedef ProseMirrorHistory
 * @property {string} userId  The ID of the user who submitted the step.
 * @property {Step} step      The step that was submitted.
 */
/**
 * A class responsible for managing state and collaborative editing of a single ProseMirror instance.
 */
export default class ProseMirrorEditor {
    /**
     * A list of active editor instances by their UUIDs.
     * @type {Map<string, ProseMirrorEditor>}
     */
    static #editors: Map<string, ProseMirrorEditor>;
    /**
     * Create a ProseMirror editor instance.
     * @param {HTMLElement} target                     An HTML element to mount the editor to.
     * @param {string} [content=""]                    Content to populate the editor with.
     * @param {object} [options]                       Additional options to configure the ProseMirror instance.
     * @param {string} [options.uuid]                  A string to uniquely identify this ProseMirror instance. Ignored
     *                                                 for a collaborative editor.
     * @param {ClientDocument} [options.document]      A Document whose content is being edited. Required for
     *                                                 collaborative editing and relative UUID generation.
     * @param {string} [options.fieldName]             The field within the Document that is being edited. Required for
     *                                                 collaborative editing.
     * @param {Record<string, Plugin>} [options.plugins]       Plugins to include with the editor.
     * @param {boolean} [options.collaborate=false]    Whether collaborative editing enabled.
     * @param {boolean} [options.relativeLinks=false]  Whether to generate relative UUID links to Documents that are
     *                                                 dropped on the editor.
     * @param {object} [options.props]                 Additional ProseMirror editor properties.
     * @returns {Promise<ProseMirrorEditor>}
     */
    static create(target: HTMLElement, content?: string, { uuid, document, fieldName, plugins, collaborate, relativeLinks, props }?: {
        uuid?: string | undefined;
        document?: any;
        fieldName?: string | undefined;
        plugins?: Record<string, Plugin> | undefined;
        collaborate?: boolean | undefined;
        relativeLinks?: boolean | undefined;
        props?: object | undefined;
    }): Promise<ProseMirrorEditor>;
    /**
     * Create an EditorView with collaborative editing enabled.
     * @param {string} uuid         The ProseMirror instance UUID.
     * @param {HTMLElement} target  An HTML element to mount the editor view to.
     * @param {EditorState} state   The ProseMirror editor state.
     * @param {Plugin[]} plugins    The ProseMirror editor plugins to load.
     * @param {object} props        Additional ProseMirror editor properties.
     * @returns {Promise<EditorView>}
     * @protected
     */
    protected static _createCollaborativeEditorView(uuid: string, target: HTMLElement, state: EditorState, plugins: Plugin[], props: object): Promise<EditorView>;
    /**
     * Create a plain EditorView without collaborative editing.
     * @param {HTMLElement} target  An HTML element to mount the editor view to.
     * @param {EditorState} state   The ProseMirror editor state.
     * @param {Plugin[]} plugins    The ProseMirror editor plugins to load.
     * @param {object} props        Additional ProseMirror editor properties.
     * @returns {EditorView}
     * @protected
     */
    protected static _createLocalEditorView(target: HTMLElement, state: EditorState, plugins: Plugin[], props: object): EditorView;
    /**
     * Handle new editing steps supplied by the server.
     * @param {string} uuid                   The UUID that uniquely identifies the ProseMirror instance.
     * @param {number} offset                 The offset into the history, representing the point at which it was last
     *                                        truncated.
     * @param {ProseMirrorHistory[]} history  The entire edit history.
     * @protected
     */
    protected static _onNewSteps(uuid: string, offset: number, history: ProseMirrorHistory[]): void;
    /**
     * Our client is too far behind the central authority's state and must be re-synced.
     * @param {string} uuid  The UUID that uniquely identifies the ProseMirror instance.
     * @protected
     */
    protected static _onResync(uuid: string): void;
    /**
     * Handle users joining or leaving collaborative editing.
     * @param {string} uuid       The UUID that uniquely identifies the ProseMirror instance.
     * @param {string[]} users    The IDs of the users editing (including ourselves).
     * @protected
     */
    protected static _onUsersEditing(uuid: string, users: string[]): void;
    /**
     * Update client state when the editor contents are autosaved server-side.
     * @param {string} uuid  The UUID that uniquely identifies the ProseMirror instance.
     * @param {string} html  The updated editor contents.
     * @protected
     */
    protected static _onAutosave(uuid: string, html: string): Promise<void>;
    /**
     * Listen for ProseMirror collaboration events.
     * @param {Socket} socket  The open websocket.
     * @internal
     */
    static _activateSocketListeners(socket: Socket): void;
    /**
     * @param {string} uuid                        A string that uniquely identifies this ProseMirror instance.
     * @param {EditorView} view                    The ProseMirror EditorView.
     * @param {Plugin} isDirtyPlugin               The plugin to track the dirty state of the editor.
     * @param {boolean} collaborate                Whether this is a collaborative editor.
     * @param {object} [options]                   Additional options.
     * @param {ClientDocument} [options.document]  A document associated with this editor.
     */
    constructor(uuid: string, view: EditorView, isDirtyPlugin: Plugin, collaborate: boolean, options?: {
        document?: any;
    });
    options: {
        document?: ClientDocument;
    };
    /**
     * Retire this editor instance and clean up.
     */
    destroy(): void;
    /**
     * Have the contents of the editor been edited by the user?
     * @returns {boolean}
     */
    isDirty(): boolean;
    /**
     * Handle new editing steps supplied by the server.
     * @param {string} offset                 The offset into the history, representing the point at which it was last
     *                                        truncated.
     * @param {ProseMirrorHistory[]} history  The entire edit history.
     * @protected
     */
    protected _onNewSteps(offset: string, history: ProseMirrorHistory[]): void;
    /**
     * Disable source code editing if the user was editing it when new steps arrived.
     * @protected
     */
    protected _disableSourceCodeEditing(): void;
    /**
     * The state of this ProseMirror editor has fallen too far behind the central authority's and must be re-synced.
     * @protected
     */
    protected _resync(): void;
    /**
     * Handle users joining or leaving collaborative editing.
     * @param {string[]} users  The IDs of users currently editing (including ourselves).
     * @protected
     */
    protected _updateUserDisplay(users: string[]): void;
    /**
     * Handle an autosave update for an already-open editor.
     * @param {string} html  The updated editor contents.
     * @protected
     */
    protected _handleAutosave(html: string): void;
    #private;
}
export type ProseMirrorHistory = {
    /**
     * The ID of the user who submitted the step.
     */
    userId: string;
    /**
     * The step that was submitted.
     */
    step: Step;
};
