/**
 * @import {CompendiumArtDescriptor, CompendiumArtInfo, CompendiumArtMapping} from "../_types.mjs"
 */
/**
 * A class responsible for managing package-provided art and applying it to Documents in compendium packs.
 * @extends {Map<string, CompendiumArtInfo>}
 */
export default class CompendiumArt extends Map<string, CompendiumArtInfo> {
    /**
     * @param {Iterable<[string, CompendiumArtInfo]>|null} [iterable]
     */
    constructor(iterable?: Iterable<[string, CompendiumArtInfo]> | null);
    /**
     * The key for the package manifest flag used to store the mapping information.
     * @type {string}
     */
    FLAG: string;
    /**
     * The key for the setting used to store the World's art preferences.
     * @type {string}
     */
    SETTING: string;
    /**
     * Whether art application is enabled. This should be switched off when performing client-side compendium migrations
     * in order to avoid persisting injected data.
     * @type {boolean}
     */
    enabled: boolean;
    /**
     * Retrieve all active packages that provide art mappings in priority order.
     * @returns {CompendiumArtDescriptor[]}
     */
    getPackages(): CompendiumArtDescriptor[];
    /**
     * Collate Document art mappings from active packages.
     * @internal
     */
    _registerArt(): Promise<void>;
    #private;
}
import type { CompendiumArtInfo } from "../_types.mjs";
import type { CompendiumArtDescriptor } from "../_types.mjs";
