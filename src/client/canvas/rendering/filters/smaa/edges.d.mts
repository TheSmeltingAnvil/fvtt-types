/**
 * @import {SMAAFilterConfig} from "./_types.mjs";
 */
/**
 * The edge detection filter for {@link foundry.canvas.rendering.filters.SMAAFilter}.
 */
export default class SMAAEdgeDetectionFilter {
    /**
     * @param {Pick<SMAAFilterConfig, "threshold"|"localContrastAdaptionFactor">} config
     */
    constructor(config: Pick<SMAAFilterConfig, "threshold" | "localContrastAdaptionFactor">);
}
import type { SMAAFilterConfig } from "./_types.mjs";
