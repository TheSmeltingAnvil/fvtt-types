/**
 * Add RenderFlags functionality to some other object.
 * This mixin standardizes the interface for such functionality.
 * @param {Function} [Base] The base class being mixed: defaults to an anonymous empty class.
 */
export function RenderFlagsMixin(Base?: Function): {
    new (...args: any[]): {
        /**
         * Status flags which are applied at render-time to update the PlaceableObject.
         * If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".
         * @type {RenderFlags}
         */
        renderFlags: RenderFlags;
        /**
         * Apply any current render flags, clearing the renderFlags set.
         * Subclasses should override this method to define behavior.
         */
        applyRenderFlags(): void;
    };
    /**
     * Configure the render flags used for this class.
     * @type {Record<string, RenderFlag>}
     */
    RENDER_FLAGS: Record<string, RenderFlag>;
    /**
     * The ticker priority when RenderFlags of this class are handled.
     * Valid values are OBJECTS or PERCEPTION.
     * @type {string}
     */
    RENDER_FLAG_PRIORITY: string;
};
/**
 * @import {RenderFlag} from "../_types.mjs"
 */
/**
 * A data structure for tracking a set of boolean status flags.
 * This is a restricted set which can only accept flag values which are pre-defined.
 * @extends {Set<string>}
 */
export default class RenderFlags extends Set<string> {
    /**
     * @param {Record<string, RenderFlag>} [flags] An object which defines the flags which are supported for tracking
     * @param {object} [config] Optional configuration
     * @param {RenderFlagObject} [config.object]  The object which owns this RenderFlags instance
     * @param {"OBJECTS"|"PERCEPTION"} [config.priority] The ticker priority at which these render flags are handled
     */
    constructor(flags?: Record<string, RenderFlag>, { object, priority }?: {
        object?: any;
        priority?: "OBJECTS" | "PERCEPTION" | undefined;
    });
    /**
     * The flags tracked by this data structure.
     * @type {Readonly<Record<string, RenderFlag>>}
     * @readonly
     */
    readonly flags: Readonly<Record<string, RenderFlag>>;
    /**
     * The RenderFlagObject instance which owns this set of RenderFlags
     * @type {RenderFlagObject|undefined}
     * @readonly
     */
    readonly object: RenderFlagObject | undefined;
    /**
     * The update priority when these render flags are applied.
     * @type {"OBJECTS"|"PERCEPTION"}
     * @readonly
     */
    readonly priority: "OBJECTS" | "PERCEPTION";
    /**
     * @inheritDoc
     * @returns {Record<string, boolean>}     The flags which were previously set that have been cleared.
     */
    clear(): Record<string, boolean>;
    /**
     * Allow for handling one single flag at a time.
     * This function returns whether the flag needs to be handled and removes it from the pending set.
     * @param {string} flag
     * @returns {boolean}
     */
    handle(flag: string): boolean;
    /**
     * Activate certain flags, also toggling propagation and reset behaviors
     * @param {Record<string, boolean>} changes
     */
    set(changes: Record<string, boolean>): void;
    #private;
}
