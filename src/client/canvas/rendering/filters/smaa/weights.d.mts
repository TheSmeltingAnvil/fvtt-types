/**
 * @import {SMAAFilterConfig} from "./_types.mjs";
 */
/**
 * The blending weight calculation filter for {@link foundry.canvas.rendering.filters.SMAAFilter}.
 */
export default class SMAABlendingWeightCalculationFilter {
    /**
     * @param {Omit<SMAAFilterConfig, "localContrastAdaptionFactor">} config
     */
    constructor(config: Omit<SMAAFilterConfig, "localContrastAdaptionFactor">);
}
import type { SMAAFilterConfig } from "./_types.mjs";
