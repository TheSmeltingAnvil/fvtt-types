/**
 * @import {ApplicationClickAction, ApplicationConfiguration, ApplicationFormSubmission} from "../_types.mjs";
 */
/**
 * @typedef FilePickerConfiguration
 * @property {"any"|"audio"|"folder"|"font"|"graphics"|"image"|"imagevideo"|"text"|"video"} [type="any"] A type of file
 *                                                                                                       to target
 * @property {string} [current]            The current file path being modified, if any
 * @property {string} [activeSource=data]  A current file source in "data", "public", or "s3"
 * @property {Function} [callback]         A callback function to trigger once a file has been selected
 * @property {boolean} [allowUpload=true]  A flag which permits explicitly disallowing upload, true by default
 * @property {HTMLElement} [field]         An HTML form field that the result of this selection is applied to
 * @property {HTMLButtonElement} [button]  An HTML button element which triggers the display of this picker
 * @property {Record<string, FavoriteFolder>} [favorites] The picker display mode in FilePicker.DISPLAY_MODES
 * @property {string} [displayMode]        The picker display mode in FilePicker.DISPLAY_MODES
 * @property {boolean} [tileSize=false]    Display the tile size configuration.
 * @property {string[]} [redirectToRoot]   Redirect to the root directory rather than starting in the source directory
 *                                         of one of these files.
 */
/**
 * @typedef FavoriteFolder
 * @property {string} source        The source of the folder (e.g. "data", "public")
 * @property {string} path          The full path to the folder
 * @property {string} label         The label for the path
 */
/**
 * The FilePicker application renders contents of the server-side public directory.
 * This app allows for navigating and uploading files to the public path.
 * @extends ApplicationV2
 * @mixes HandlebarsApplication
 */
export default class FilePicker extends ApplicationV2<ApplicationConfiguration, foundry.applications.types.ApplicationRenderOptions> {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        id: string;
        tag: string;
        window: {
            contentClasses: string[];
            icon: string;
        };
        position: {
            width: number;
        };
        tileSize: boolean;
        actions: {
            backTraverse: typeof FilePicker.__#10@#onBackTraverse;
            makeDirectory: typeof FilePicker.__#10@#onMakeDirectory;
            togglePrivacy: typeof FilePicker.__#10@#onTogglePrivacy;
            changeDisplayMode: typeof FilePicker.__#10@#onChangeDisplayMode;
            pickDirectory: typeof FilePicker.__#10@#onPickDirectory;
            pickFile: typeof FilePicker.__#10@#onPickFile;
            goToFavorite: typeof FilePicker.__#10@#onGoToFavorite;
            setFavorite: typeof FilePicker.__#10@#onSetFavorite;
            removeFavorite: typeof FilePicker.__#10@#onRemoveFavorite;
        };
        form: {
            handler: typeof FilePicker.__#10@#onSubmit;
            submitOnChange: boolean;
            closeOnSubmit: boolean;
        };
    };
    /** @override */
    static override PARTS: {
        tabs: {
            template: string;
        };
        subheader: {
            template: string;
        };
        body: {
            template: string;
        };
        subfooter: {
            template: string;
        };
        footer: {
            template: string;
        };
    };
    /** @override */
    static override TABS: {
        sources: {
            tabs: {
                id: string;
                icon: string;
            }[];
            initial: string;
            labelPrefix: string;
        };
    };
    /**
     * The allowed values for the type of this FilePicker instance.
     * @type {string[]}
     */
    static FILE_TYPES: string[];
    /**
     * Record the last-browsed directory path so that re-opening a different FilePicker instance uses the same target
     * @type {string}
     */
    static LAST_BROWSED_DIRECTORY: string;
    /**
     * Record the last-configured tile size which can automatically be applied to new FilePicker instances
     * @type {number|null}
     */
    static LAST_TILE_SIZE: number | null;
    /**
     * Record the last-configured display mode so that re-opening a different FilePicker instance uses the same mode.
     * @type {string}
     */
    static LAST_DISPLAY_MODE: string;
    /**
     * Enumerate the allowed FilePicker display modes
     * @type {string[]}
     */
    static DISPLAY_MODES: string[];
    /**
     * Cache the names of S3 buckets which can be used
     * @type {Array|null}
     */
    static S3_BUCKETS: any[] | null;
    /**
     * Return the upload URL to which the FilePicker should post uploaded files
     * @type {string}
     */
    static get uploadURL(): string;
    /**
     * Retrieve the configured FilePicker implementation.
     * @type {typeof FilePicker}
     */
    static get implementation(): typeof FilePicker;
    /**
     * Get the valid file extensions for a given named file picker type
     * @param {string} type
     * @returns {string[]}
     */
    static #getExtensions(type: string): string[];
    /**
     * Test a URL to see if it matches a well known s3 key pattern
     * @param {string} url          An input URL to test
     * @returns {RegExpMatchArray|null}  A regular expression match
     */
    static matchS3URL(url: string): RegExpMatchArray | null;
    /**
     * Browse files for a certain directory location
     * @param {string} source     The source location in which to browse: see FilePicker#sources for details.
     * @param {string} target     The target within the source location
     * @param {object} options                Optional arguments
     * @param {string} [options.bucket]       A bucket within which to search if using the S3 source
     * @param {string[]} [options.extensions] An Array of file extensions to filter on
     * @param {boolean} [options.wildcard]    The requested dir represents a wildcard path
     *
     * @returns {Promise<object>} A Promise that resolves to the directories and files contained in the location
     */
    static browse(source: string, target: string, options?: {
        bucket?: string | undefined;
        extensions?: string[] | undefined;
        wildcard?: boolean | undefined;
    }): Promise<object>;
    /**
     * Configure metadata settings regarding a certain file system path
     * @param {string} source     The source location in which to browse: see FilePicker#sources for details.
     * @param {string} target     The target within the source location
     * @param {object} options    Optional arguments modifying the request
     * @returns {Promise<object>}
     */
    static configurePath(source: string, target: string, options?: object): Promise<object>;
    /**
     * Create a subdirectory within a given source. The requested subdirectory path must not already exist.
     * @param {string} source     The source location in which to browse. See FilePicker#sources for details
     * @param {string} target     The target within the source location
     * @param {object} options    Optional arguments which modify the request
     * @returns {Promise<object>}
     */
    static createDirectory(source: string, target: string, options?: object): Promise<object>;
    /**
     * General dispatcher method to submit file management commands to the server
     * @param {object} data         Request data dispatched to the server
     * @param {object} options      Options dispatched to the server
     * @returns {Promise<object>}   The server response
     */
    static #manageFiles(data: object, options: object): Promise<object>;
    /**
     * Dispatch a POST request to the server containing a directory path and a file to upload
     * @param {string} source   The data source to which the file should be uploaded
     * @param {string} path     The destination path
     * @param {File} file       The File object to upload
     * @param {object} [body={}]  Additional file upload options sent in the POST body
     * @param {object} [options]  Additional options to configure how the method behaves
     * @param {boolean} [options.notify=true] Display a UI notification when the upload is processed
     * @returns {Promise<object>}  The response object
     */
    static upload(source: string, path: string, file: File, body?: object, options?: {
        notify?: boolean | undefined;
    }): Promise<object>;
    /**
     * A convenience function that uploads a file to a given package's persistent /storage/ directory
     * @param {string} packageId                The id of the package to which the file should be uploaded.
     *                                          Only supports Systems and Modules.
     * @param {string} path                     The relative destination path in the package's storage directory
     * @param {File} file                       The File object to upload
     * @param {object} [body={}]                Additional file upload options sent in the POST body
     * @param {object} [options]                Additional options to configure how the method behaves
     * @param {boolean} [options.notify=true]   Display a UI notification when the upload is processed
     * @returns {Promise<object>}               The response object
     */
    static uploadPersistent(packageId: string, path: string, file: File, body?: object, { notify }?: {
        notify?: boolean | undefined;
    }): Promise<object>;
    /**
     * Request wildcard token images from the server and return them.
     * @param {string} actorId         The actor whose prototype token contains the wildcard image path.
     * @param {object} [options]
     * @param {string} [options.pack]  The ID of the compendium the actor is in.
     * @returns {Promise<string[]>}
     */
    static requestTokenImages(actorId: string, options?: {
        pack?: string | undefined;
    }): Promise<string[]>;
    static #onChangeDisplayMode(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onBackTraverse(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onMakeDirectory(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onTogglePrivacy(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onGoToFavorite(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onSetFavorite(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onRemoveFavorite(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onPickDirectory(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onPickFile(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onSubmit(event: SubmitEvent | Event, form: HTMLFormElement, formData: foundry.applications.ux.FormDataExtended): Promise<any>;
    /**
     * Bind the file picker to a new target field.
     * Assumes the user will provide a HTMLButtonElement which has the data-target and data-type attributes
     * The data-target attribute should provide the name of the input field which should receive the selected file
     * The data-type attribute is a string in ["image", "audio"] which sets the file extensions which will be accepted
     *
     * @param {HTMLButtonElement} button     The button element
     */
    static fromButton(button: HTMLButtonElement): FilePicker;
    /**
     * @param {DeepPartial<ApplicationConfiguration & FilePickerConfiguration>} [options={}] Options that configure the
     *                                                                                       behavior of the FilePicker
     */
    constructor(options?: DeepPartial<ApplicationConfiguration & FilePickerConfiguration>);
    /**
     * The full requested path given by the user
     * @type {string}
     */
    request: string;
    /**
     * A callback function to trigger once a file has been selected
     * @type {Function|null}
     */
    callback: Function | null;
    /**
     * The general file type which controls the set of extensions which will be accepted
     * @type {string}
     */
    type: string;
    /**
     * The target HTML element this file picker is bound to
     * @type {HTMLElement|null}
     */
    field: HTMLElement | null;
    /**
     * A button controlling the display of the picker UI
     * @type {HTMLElement|null}
     */
    button: HTMLElement | null;
    /**
     * The display mode of the FilePicker UI
     * @type {string}
     */
    displayMode: string;
    /**
     * The file sources available for browsing
     * @type {Record<"data"|"public"|"s3", {target: string; bucket?: string; buckets?: string[]}|undefined>}>
     */
    sources: Record<"data" | "public" | "s3", {
        target: string;
        bucket?: string;
        buckets?: string[];
    } | undefined>;
    /**
     * Track the active source tab which is being browsed
     * @type {"data"|"public"|"s3"}
     */
    activeSource: "data" | "public" | "s3";
    /**
     * The latest set of results browsed from the server
     * @type {object}
     */
    results: object;
    /**
     * The current set of file extensions which are being filtered upon
     * @type {string[]}
     */
    extensions: string[];
    /**
     * Get favorite folders for quick access
     * @type {Record<string, FavoriteFolder>}
     */
    get favorites(): Record<string, FavoriteFolder>;
    /**
     * Return the source object for the currently active source
     * @type {object}
     */
    get source(): object;
    /**
     * Return the target directory for the currently active source
     * @type {string}
     */
    get target(): string;
    /**
     * Whether the current user is able to create folders.
     * @type {boolean}
     */
    get canCreateFolder(): boolean;
    /**
     * Whether the current use is able to upload file content.
     * @type {boolean}
     */
    get canUpload(): boolean;
    /**
     * Given a current file path, determine the directory to which it belongs.
     * @param {string} target   The currently requested target path
     * @returns {[source: string, revisedTarget: string]} A tuple of the inferred source and target directory path
     * @protected
     */
    protected _inferSourceAndTarget(target: string): [source: string, revisedTarget: string];
    /**
     * Browse to a specific location for this FilePicker instance
     * @param {string} [target]   The target within the currently active source location.
     * @param {object} [options]  Browsing options
     * @returns {Promise<this>}
     */
    browse(target?: string, options?: object): Promise<this>;
    result: any;
    /** @inheritDoc */
    render(...args: any[]): Promise<this>;
    /** @inheritDoc */
    _prepareContext(options: any): Promise<foundry.applications.types.ApplicationRenderContext & {
        rootId: string;
        bucket: any;
        buckets: any;
        canGoBack: boolean;
        canCreateFolder: boolean;
        canUpload: boolean;
        canSelect: boolean;
        canTogglePrivacy: boolean;
        dirs: any;
        displayMode: string;
        extensions: string[];
        files: any;
        isFolderPicker: boolean;
        isS3: boolean;
        noResults: boolean;
        selected: any;
        source: object;
        sources: Record<"data" | "public" | "s3", {
            target: string;
            bucket?: string;
            buckets?: string[];
        } | undefined>;
        target: string;
        tileSize: any;
        user: foundry.documents.User | null;
        favorites: Record<string, FavoriteFolder>;
        buttons: {
            type: string;
            icon: string;
            label: string;
        }[];
    }>;
    /** @inheritDoc */
    _prepareTabs(group: any): Record<string, foundry.applications.types.ApplicationTab>;
    /** @inheritDoc */
    changeTab(tab: any, group: any, options: any): void;
    /** @inheritDoc */
    _tearDown(options: any): void;
    /** @inheritDoc */
    _onRender(context: any, options: any): Promise<void>;
    /**
     * Handle changes to the tile size.
     * @param {Event} event  The triggering event.
     * @protected
     */
    protected _onChangeTileSize(event: Event): void;
    /**
     * Search among shown directories and files.
     * @param {KeyboardEvent} event The triggering event
     * @param {string} query The search input value
     * @param {RegExp} rgx
     * @param {HTMLElement} html
     * @protected
     */
    protected _onSearchFilter(event: KeyboardEvent, query: string, rgx: RegExp, html: HTMLElement): void;
    #private;
}
export type FilePickerConfiguration = {
    /**
     * A type of file
     *  to target
     */
    type?: "text" | "video" | "audio" | "any" | "imagevideo" | "folder" | "font" | "graphics" | "image" | undefined;
    /**
     * The current file path being modified, if any
     */
    current?: string | undefined;
    /**
     * A current file source in "data", "public", or "s3"
     */
    activeSource?: string | undefined;
    /**
     * A callback function to trigger once a file has been selected
     */
    callback?: Function | undefined;
    /**
     * A flag which permits explicitly disallowing upload, true by default
     */
    allowUpload?: boolean | undefined;
    /**
     * An HTML form field that the result of this selection is applied to
     */
    field?: HTMLElement | undefined;
    /**
     * An HTML button element which triggers the display of this picker
     */
    button?: HTMLButtonElement | undefined;
    /**
     * The picker display mode in FilePicker.DISPLAY_MODES
     */
    favorites?: Record<string, FavoriteFolder> | undefined;
    /**
     * The picker display mode in FilePicker.DISPLAY_MODES
     */
    displayMode?: string | undefined;
    /**
     * Display the tile size configuration.
     */
    tileSize?: boolean | undefined;
    /**
     * Redirect to the root directory rather than starting in the source directory
     *    of one of these files.
     */
    redirectToRoot?: string[] | undefined;
};
export type FavoriteFolder = {
    /**
     * The source of the folder (e.g. "data", "public")
     */
    source: string;
    /**
     * The full path to the folder
     */
    path: string;
    /**
     * The label for the path
     */
    label: string;
};
import type { ApplicationConfiguration } from "../_types.mjs";
import ApplicationV2 from "../api/application.mjs";
