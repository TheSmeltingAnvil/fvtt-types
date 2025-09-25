/**
 * @import {HandlebarsRenderOptions} from "../../api/handlebars-application.mjs"
 * @import {ApplicationRenderContext} from "../../_types.mjs"
 * @import {ContextMenuEntry} from "../../ux/context-menu.mjs";
 * @import Playlist from "@client/documents/playlist.mjs";
 */
/**
 * @typedef _PlaylistDirectoryRenderContext
 * @property {object} controls                                      Volume control context.
 * @property {boolean} controls.expanded                            The expanded state of the volume controls.
 * @property {PlaylistDirectoryVolumeContext} controls.music        Music volume context.
 * @property {PlaylistDirectoryVolumeContext} controls.environment  Environment volume context.
 * @property {PlaylistDirectoryVolumeContext} controls.interface    Interface volume context.
 * @property {object} currentlyPlaying                              Currently playing context.
 * @property {string} currentlyPlaying.class                        The CSS class of the currently playing widget.
 * @property {object} currentlyPlaying.location                     Location information for the currently playing
 *                                                                  widget.
 * @property {boolean} currentlyPlaying.location.top                The widget is affixed to the top of the directory.
 * @property {boolean} currentlyPlaying.location.bottom             The widget is affixed to the bottom of the
 *                                                                  directory.
 * @property {object} currentlyPlaying.pin                          Render context for the currently playing pin icon.
 * @property {string} currentlyPlaying.pin.label                    The icon tooltip.
 * @property {string} currentlyPlaying.pin.caret                    The icon class.
 * @property {PlaylistSoundRenderContext[]} currentlyPlaying.sounds Render context for the currently playing
 *                                                                  PlaylistSound documents.
 * @property {PlaylistDirectoryTreeContext} tree                    Render context for the directory tree.
 */
/**
 * @typedef {ApplicationRenderContext & _PlaylistDirectoryRenderContext} PlaylistDirectoryRenderContext
 */
/**
 * @typedef PlaylistDirectoryVolumeContext
 * @property {number} modifier                 The volume modifier in the interval [0, 1].
 * @property {NumberField} field               The DataField specification for the form input.
 * @property {string} [name]                   The form input name.
 * @property {Record<string, string>} dataset  HTML dataset attributes.
 * @property {Record<string, string>} aria     HTML ARIA attributes.
 */
/**
 * @typedef PlaylistDirectoryTreeContext
 * @property {PlaylistRenderContext[]} entries          Render context for the Playlist documents at this node.
 * @property {PlaylistDirectoryTreeContext[]} children  Render context for this node's children.
 * @property {Folder} folder                            The Folder document that represents this node.
 * @property {number} depth                             The node's depth in the tree.
 */
/**
 * @typedef PlaylistDirectoryControlContext
 * @property {string} icon   The button icon.
 * @property {string} label  The button label.
 */
/**
 * @typedef PlaylistRenderContext
 * @property {string} id                            The Playlist ID.
 * @property {string} name                          The Playlist name.
 * @property {boolean} expanded                     Whether the Playlist is expanded in the sidebar.
 * @property {boolean} isOwner                      Whether the current user has ownership of this Playlist.
 * @property {PlaylistSoundRenderContext[]} sounds  Render context for this Playlist's PlaylistSounds.
 * @property {PlaylistDirectoryControlContext} mode The mode icon context.
 * @property {boolean} disabled                     Whether the Playlist is currently disabled.
 * @property {string} css                           The CSS class.
 */
/**
 * @typedef PlaylistSoundRenderContext
 * @property {string} id                              The PlaylistSound ID.
 * @property {string} name                            The track name.
 * @property {boolean} playing                        Whether the PlaylistSound is currently playing.
 * @property {boolean} repeat                         Whether the track is set to loop.
 * @property {boolean} isOwner                        Whether the current user has ownership of this PlaylistSound.
 * @property {string} playlistId                      The parent Playlist ID.
 * @property {string} css                             The CSS class.
 * @property {PlaylistDirectoryControlContext} play   The play button context.
 * @property {object} pause                           PlaylistSound pause context.
 * @property {boolean} pause.paused                   Whether the PlaylistSound is currently paused.
 * @property {string} pause.icon                      The pause icon.
 * @property {boolean} pause.disabled                 Whether the pause button is disabled.
 * @property {PlaylistDirectoryVolumeContext} volume  PlaylistSound volume context.
 * @property {string} currentTime                     The current playing timestamp.
 * @property {string} durationTime                    The duration timestamp.
 */
/**
 * The World Playlist directory listing.
 * @extends {DocumentDirectory<Playlist>}
 */
export default class PlaylistDirectory extends DocumentDirectory<Playlist> {
    /** @override */
    static override DEFAULT_OPTIONS: {
        collection: string;
        renderUpdateKeys: string[];
        actions: {
            pinCurrentlyPlaying: typeof PlaylistDirectory.#onPinCurrentlyPlaying;
            playlistBackward: typeof PlaylistDirectory.#onPlaylistSkip;
            playlistForward: typeof PlaylistDirectory.#onPlaylistSkip;
            playlistMode: typeof PlaylistDirectory.#onPlaylistCycleMode;
            playlistPlay: typeof PlaylistDirectory.#onPlaylistPlayback;
            playlistStop: typeof PlaylistDirectory.#onPlaylistPlayback;
            soundCreate: typeof PlaylistDirectory.#onSoundCreate;
            soundPause: typeof PlaylistDirectory.#onSoundPlayback;
            soundPlay: typeof PlaylistDirectory.#onSoundPlayback;
            soundRepeat: typeof PlaylistDirectory.#onSoundToggleMode;
            soundStop: typeof PlaylistDirectory.#onSoundPlayback;
            volumeExpand: typeof PlaylistDirectory.#onVolumeExpand;
        };
    };
    /** @override */
    static override PARTS: {
        header: {
            template: string;
        };
        controls: {
            template: string;
        };
        directory: {
            template: string;
            scrollable: string[];
        };
        playing: {
            template: string;
            templates: string[];
        };
        footer: {
            template: string;
        };
    };
    /**
     * Playlist mode button descriptors.
     * @type {Record<PLAYLIST_MODES, PlaylistDirectoryControlContext>}
     */
    static PLAYLIST_MODES: Record<Readonly<{
        readonly DISABLED: -1;
        readonly SEQUENTIAL: 0;
        readonly SHUFFLE: 1;
        readonly SIMULTANEOUS: 2;
    }>, PlaylistDirectoryControlContext>;
    /**
     * Handle changing the location of the currently playing widget.
     * @this {PlaylistDirectory}
     */
    static #onPinCurrentlyPlaying(this: PlaylistDirectory): void;
    /**
     * Handle cycling the playlist's playback mode.
     * @this {PlaylistDirectory}
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target.
     */
    static #onPlaylistCycleMode(this: PlaylistDirectory, event: PointerEvent, target: HTMLElement): Promise<Playlist>;
    /**
     * Handle starting or stopping a playlist.
     * @this {PlaylistDirectory}
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target.
     */
    static #onPlaylistPlayback(this: PlaylistDirectory, event: PointerEvent, target: HTMLElement): Promise<Playlist>;
    /**
     * Handle advancing the playlist to the next or previous sound.
     * @this {PlaylistDirectory}
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target.
     */
    static #onPlaylistSkip(this: PlaylistDirectory, event: PointerEvent, target: HTMLElement): Promise<Playlist | null | undefined>;
    /**
     * Handle adding a new track to a playlist.
     * @this {PlaylistDirectory}
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target.
     */
    static #onSoundCreate(this: PlaylistDirectory, event: PointerEvent, target: HTMLElement): void;
    /**
     * Handle starting, stopping, or pausing a track.
     * @this {PlaylistDirectory}
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target.
     */
    static #onSoundPlayback(this: PlaylistDirectory, event: PointerEvent, target: HTMLElement): any;
    /**
     * Handle toggling the sound's repeat mode.
     * @this {PlaylistDirectory}
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target.
     */
    static #onSoundToggleMode(this: PlaylistDirectory, event: PointerEvent, target: HTMLElement): any;
    /**
     * Handle global volume control expand and collapse.
     * @this {PlaylistDirectory}
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target element.
     */
    static #onVolumeExpand(this: PlaylistDirectory, event: PointerEvent, target: HTMLElement): void;
    /**
     * Format the displayed timestamp given a number of seconds as input.
     * @param {number} seconds  The current playback time in seconds.
     * @returns {string}        The formatted timestamp.
     * @protected
     */
    protected static formatTimestamp(seconds: number): string;
    /**
     * Register playlist directory specific settings.
     * @internal
     */
    static _registerSettings(): void;
    constructor(options: any);
    /**
     * Track the playlist IDs which are currently expanded in the display.
     * @type {Set<string>}
     * @protected
     */
    protected _expanded: Set<string>;
    /**
     * Cache the set of Playlist and PlaylistSound documents that are displayed as playing when the directory is rendered.
     * @type {{context: PlaylistSoundRenderContext[], playlists: Playlist[], sounds: PlaylistSound[]}}
     * @protected
     */
    protected _playing: {
        context: PlaylistSoundRenderContext[];
        playlists: Playlist[];
        sounds: PlaylistSound[];
    };
    /**
     * Whether the global volume controls are currently expanded.
     * @type {boolean}
     * @protected
     */
    protected _volumeExpanded: boolean;
    /**
     * The location of the currently-playing widget.
     * @type {"top"|"bottom"}
     */
    get currentlyPlayingLocation(): "top" | "bottom";
    /**
     * The Playlist documents that are currently playing.
     * @returns {Playlist[]}
     */
    get playing(): Playlist[];
    /** @inheritDoc */
    _getEntryContextOptions(): {
        name: string;
        icon: string;
        callback: (header: any) => any;
    }[];
    /**
     * Context menu options for individual PlaylistSounds.
     * @returns {ContextMenuEntry[]}
     * @protected
     */
    protected _getSoundContextOptions(): ContextMenuEntry[];
    /** @inheritDoc */
    _prepareDirectoryContext(context: any, options: any): Promise<void>;
    /**
     * Augment the tree directory structure with playlist-level data objects for rendering.
     * @param {PlaylistDirectoryRenderContext} root   The root render context.
     * @param {object} node                           The tree node being prepared.
     * @returns {PlaylistDirectoryTreeContext}
     * @protected
     */
    protected _prepareTreeContext(root: PlaylistDirectoryRenderContext, node: object): PlaylistDirectoryTreeContext;
    /**
     * Prepare render context for a playlist.
     * @param {PlaylistDirectoryRenderContext} root  The root render context.
     * @param {Playlist} playlist                    The Playlist document.
     * @returns {PlaylistRenderContext}
     * @protected
     */
    protected _preparePlaylistContext(root: PlaylistDirectoryRenderContext, playlist: Playlist): PlaylistRenderContext;
    /**
     * Prepare render context for the volume controls part.
     * @param {PlaylistDirectoryRenderContext} context
     * @param {HandlebarsRenderOptions} options
     * @returns {Promise<void>}
     * @protected
     */
    protected _prepareControlsContext(context: PlaylistDirectoryRenderContext, options: HandlebarsRenderOptions): Promise<void>;
    /**
     * Prepare render context for the currently playing part.
     * @param {PlaylistDirectoryRenderContext} context
     * @param {HandlebarsRenderOptions} options
     * @returns {Promise<void>}
     * @protected
     */
    protected _preparePlayingContext(context: PlaylistDirectoryRenderContext, options: HandlebarsRenderOptions): Promise<void>;
    /** @inheritDoc */
    _prepareDuplicateData(document: any): object;
    /** @override */
    override _onClickEntry(event: any, target: any): Promise<void>;
    /**
     * Handle modifying a global volume slider.
     * @param {HTMLRangePickerElement} slider  The slider.
     * @protected
     */
    protected _onGlobalVolume(slider: HTMLRangePickerElement): void;
    /**
     * Handle modifying a playing PlaylistSound's volume.
     * @param {HTMLRangePickerElement} slider  The volume slider.
     * @protected
     */
    protected _onSoundVolume(slider: HTMLRangePickerElement): void;
    /**
     * Update the displayed timestamps for all currently playing audio sources every second.
     */
    updateTimestamps(): void;
    /** @override */
    override _onMatchSearchEntry(query: any, entryIds: any, element: any, { soundIds, plNameHits }?: {
        soundIds?: Set<any> | undefined;
        plNameHits?: Set<any> | undefined;
    }): void;
    /** @override */
    override _matchSearchEntries(query: any, entryIds: any, folderIds: any, autoExpandIds: any, options?: object): void;
    /** @override */
    override _matchSearchFolders(query: any, folderIds: any, autoExpandIds: any): void;
    /** @inheritDoc */
    _onDrop(event: any): Promise<void>;
    #private;
}
export type _PlaylistDirectoryRenderContext = {
    /**
     * Volume control context.
     */
    controls: {
        expanded: boolean;
        music: PlaylistDirectoryVolumeContext;
        environment: PlaylistDirectoryVolumeContext;
        interface: PlaylistDirectoryVolumeContext;
    };
    /**
     * Currently playing context.
     */
    currentlyPlaying: {
        class: string;
        location: {
            top: boolean;
            bottom: boolean;
        };
        pin: {
            label: string;
            caret: string;
        };
        sounds: PlaylistSoundRenderContext[];
    };
    /**
     * Render context for the directory tree.
     */
    tree: PlaylistDirectoryTreeContext;
};
export type PlaylistDirectoryRenderContext = ApplicationRenderContext & _PlaylistDirectoryRenderContext;
export type PlaylistDirectoryVolumeContext = {
    /**
     * The volume modifier in the interval [0, 1].
     */
    modifier: number;
    /**
     * The DataField specification for the form input.
     */
    field: NumberField;
    /**
     * The form input name.
     */
    name?: string | undefined;
    /**
     * HTML dataset attributes.
     */
    dataset: Record<string, string>;
    /**
     * HTML ARIA attributes.
     */
    aria: Record<string, string>;
};
export type PlaylistDirectoryTreeContext = {
    /**
     * Render context for the Playlist documents at this node.
     */
    entries: PlaylistRenderContext[];
    /**
     * Render context for this node's children.
     */
    children: PlaylistDirectoryTreeContext[];
    /**
     * The Folder document that represents this node.
     */
    folder: Folder;
    /**
     * The node's depth in the tree.
     */
    depth: number;
};
export type PlaylistDirectoryControlContext = {
    /**
     * The button icon.
     */
    icon: string;
    /**
     * The button label.
     */
    label: string;
};
export type PlaylistRenderContext = {
    /**
     * The Playlist ID.
     */
    id: string;
    /**
     * The Playlist name.
     */
    name: string;
    /**
     * Whether the Playlist is expanded in the sidebar.
     */
    expanded: boolean;
    /**
     * Whether the current user has ownership of this Playlist.
     */
    isOwner: boolean;
    /**
     * Render context for this Playlist's PlaylistSounds.
     */
    sounds: PlaylistSoundRenderContext[];
    /**
     * The mode icon context.
     */
    mode: PlaylistDirectoryControlContext;
    /**
     * Whether the Playlist is currently disabled.
     */
    disabled: boolean;
    /**
     * The CSS class.
     */
    css: string;
};
export type PlaylistSoundRenderContext = {
    /**
     * The PlaylistSound ID.
     */
    id: string;
    /**
     * The track name.
     */
    name: string;
    /**
     * Whether the PlaylistSound is currently playing.
     */
    playing: boolean;
    /**
     * Whether the track is set to loop.
     */
    repeat: boolean;
    /**
     * Whether the current user has ownership of this PlaylistSound.
     */
    isOwner: boolean;
    /**
     * The parent Playlist ID.
     */
    playlistId: string;
    /**
     * The CSS class.
     */
    css: string;
    /**
     * The play button context.
     */
    play: PlaylistDirectoryControlContext;
    /**
     * PlaylistSound pause context.
     */
    pause: {
        paused: boolean;
        icon: string;
        disabled: boolean;
    };
    /**
     * PlaylistSound volume context.
     */
    volume: PlaylistDirectoryVolumeContext;
    /**
     * The current playing timestamp.
     */
    currentTime: string;
    /**
     * The duration timestamp.
     */
    durationTime: string;
};
import type Playlist from "@client/documents/playlist.mjs";
import DocumentDirectory from "../document-directory.mjs";
import PlaylistSound from "@client/documents/playlist-sound.mjs";
import type { ContextMenuEntry } from "../../ux/context-menu.mjs";
import type { HandlebarsRenderOptions } from "../../api/handlebars-application.mjs";
import type { ApplicationRenderContext } from "../../_types.mjs";
import { NumberField } from "@common/data/fields.mjs";
