/**
 * @import Collection from "@common/utils/collection.mjs"
 * @import {ElevatedPoint} from "../../_types.mjs"
 * @import PlaceableObject from "../placeables/placeable-object.mjs"
 */
/**
 * @typedef BaseEffectSourceOptions
 * @property {PlaceableObject} [object] An optional PlaceableObject which is responsible for this source
 * @property {string} [sourceId]        A unique ID for this source. This will be set automatically if an
 *                                      object is provided, otherwise is required.
 */
/**
 * @typedef BaseEffectSourceData
 * @property {number} x                   The x-coordinate of the source location
 * @property {number} y                   The y-coordinate of the source location
 * @property {number} elevation           The elevation of the point source
 * @property {boolean} disabled           Whether or not the source is disabled
 */
/**
 * TODO - Re-document after ESM refactor.
 * An abstract base class which defines a framework for effect sources which originate radially from a specific point.
 * This abstraction is used by the LightSource, VisionSource, SoundSource, and MovementSource subclasses.
 *
 * @example A standard PointSource lifecycle:
 * ```js
 * const source = new PointSource({object}); // Create the point source
 * source.initialize(data);                  // Configure the point source with new data
 * source.refresh();                         // Refresh the point source
 * source.destroy();                         // Destroy the point source
 * ```
 *
 * @template {BaseEffectSourceData} [TSourceData=BaseEffectSourceData]
 * @template {PIXI.Polygon} [TSourceShape=PIXI.Polygon]
 * @abstract
 */
export default class BaseEffectSource<TSourceData extends BaseEffectSourceData = BaseEffectSourceData, TSourceShape extends PIXI.Polygon = PIXI.Polygon> {
    /**
     * The type of source represented by this data structure.
     * Each subclass must implement this attribute.
     * @type {string}
     */
    static sourceType: string;
    /**
     * The target collection into the effects canvas group.
     * @type {string}
     * @abstract
     */
    static effectsCollection: string;
    /**
     * Effect source default data.
     * @type {BaseEffectSourceData}
     */
    static defaultData: BaseEffectSourceData;
    /**
     * An effect source is constructed by providing configuration options.
     * @param {BaseEffectSourceOptions} [options]  Options which modify the base effect source instance
     */
    constructor(options?: BaseEffectSourceOptions);
    /**
     * Some other object which is responsible for this source.
     * @type {object|null}
     */
    object: object | null;
    /**
     * The source id linked to this effect source.
     * @type {Readonly<string>}
     */
    sourceId: Readonly<string>;
    /**
     * The data of this source.
     * @type {TSourceData}
     */
    data: TSourceData;
    /**
     * The geometric shape of the effect source which is generated later.
     * @type {TSourceShape}
     */
    shape: TSourceShape;
    /**
     * A collection of boolean flags which control rendering and refresh behavior for the source.
     * @type {Record<string, boolean|number>}
     * @protected
     */
    protected _flags: Record<string, boolean | number>;
    /**
     * The x-coordinate of the point source origin.
     * @type {number}
     */
    get x(): number;
    /**
     * The y-coordinate of the point source origin.
     * @type {number}
     */
    get y(): number;
    /**
     * The elevation bound to this source.
     * @type {number}
     */
    get elevation(): number;
    /**
     * The EffectsCanvasGroup collection linked to this effect source.
     * @type {Collection<string, BaseEffectSource>}
     */
    get effectsCollection(): Collection<string, BaseEffectSource>;
    /**
     * Returns the update ID associated with this source.
     * The update ID is increased whenever the shape of the source changes.
     * @type {number}
     */
    get updateId(): number;
    /**
     * Is this source currently active?
     * A source is active if it is attached to an effect collection and is not disabled or suppressed.
     * @type {boolean}
     */
    get active(): boolean;
    /**
     * Is this source attached to an effect collection?
     * @type {boolean}
     */
    get attached(): boolean;
    /**
     * Is this source temporarily suppressed?
     * @type {boolean}
     */
    get suppressed(): boolean;
    /**
     * Records of suppression strings with a boolean value.
     * If any of this record is true, the source is suppressed.
     * @type {Record<string, boolean>}
     */
    suppression: Record<string, boolean>;
    /**
     * Initialize and configure the source using provided data.
     * @param {Partial<TSourceData>} data        Provided data for configuration
     * @param {object} options                  Additional options which modify source initialization
     * @param {boolean} [options.reset=false]   Should source data be reset to default values before applying changes?
     * @returns {BaseEffectSource}              The initialized source
     */
    initialize(data?: Partial<TSourceData>, { reset }?: {
        reset?: boolean | undefined;
    }): BaseEffectSource;
    /**
     * Subclass specific data initialization steps.
     * @param {Partial<TSourceData>} data    Provided data for configuration
     * @abstract
     */
    _initialize(data: Partial<TSourceData>): void;
    /**
     * Create the polygon shape (or shapes) for this source using configured data.
     * @protected
     * @abstract
     */
    protected _createShapes(): void;
    /**
     * Subclass specific configuration steps. Occurs after data initialization and shape computation.
     * Only called if the source is attached and not disabled.
     * @param {Partial<TSourceData>} changes   Changes to the source data which were applied
     * @protected
     */
    protected _configure(changes: Partial<TSourceData>): void;
    /**
     * Refresh the state and uniforms of the source.
     * Only active sources are refreshed.
     */
    refresh(): void;
    /**
     * Subclass-specific refresh steps.
     * @protected
     * @abstract
     */
    protected _refresh(): void;
    /**
     * Steps that must be performed when the source is destroyed.
     */
    destroy(): void;
    /**
     * Subclass specific destruction steps.
     * @protected
     */
    protected _destroy(): void;
    /**
     * Add this BaseEffectSource instance to the active collection.
     */
    add(): void;
    /**
     * Remove this BaseEffectSource instance from the active collection.
     */
    remove(): void;
    /**
     * Test whether the point is contained within the shape of the source.
     * @param {ElevatedPoint} point   The point.
     * @returns {boolean}             Is inside the source?
     */
    testPoint(point: ElevatedPoint): boolean;
    #private;
}
export type BaseEffectSourceOptions = {
    /**
     * An optional PlaceableObject which is responsible for this source
     */
    object?: PlaceableObject | undefined;
    /**
     * A unique ID for this source. This will be set automatically if an
     *         object is provided, otherwise is required.
     */
    sourceId?: string | undefined;
};
export type BaseEffectSourceData = {
    /**
     * The x-coordinate of the source location
     */
    x: number;
    /**
     * The y-coordinate of the source location
     */
    y: number;
    /**
     * The elevation of the point source
     */
    elevation: number;
    /**
     * Whether or not the source is disabled
     */
    disabled: boolean;
};
import type Collection from "@common/utils/collection.mjs";
import type { ElevatedPoint } from "../../_types.mjs";
import type PlaceableObject from "../placeables/placeable-object.mjs";
