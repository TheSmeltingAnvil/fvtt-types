/**
 * @import {DeepReadonly} from "@common/_types.mjs";
 * @import {SMAAFilterConfig} from "./_types.mjs";
 */
/**
 * The SMAA filter.
 * @see {@link foundry.canvas.rendering.filters.SMAAEdgeDetectionFilter}
 * @see {@link foundry.canvas.rendering.filters.SMAABlendingWeightCalculationFilter}
 * @see {@link foundry.canvas.rendering.filters.SMAANeighborhoodBlendingFilter}
 */
export default class SMAAFilter {
    /**
     * The presets.
     * @type {DeepReadonly<Record<"LOW"|"MEDIUM"|"HIGH"|"ULTRA", SMAAFilterConfig>>}
     */
    static get PRESETS(): DeepReadonly<Record<"LOW" | "MEDIUM" | "HIGH" | "ULTRA", SMAAFilterConfig>>;
    static #PRESETS: Readonly<{
        readonly LOW: {
            readonly threshold: 0.15;
            readonly localContrastAdaptionFactor: 2;
            readonly maxSearchSteps: 4;
            readonly maxSearchStepsDiag: 0;
            readonly cornerRounding: 0;
            readonly disableDiagDetection: true;
            readonly disableCornerDetection: true;
        };
        readonly MEDIUM: {
            readonly threshold: 0.1;
            readonly localContrastAdaptionFactor: 2;
            readonly maxSearchSteps: 8;
            readonly maxSearchStepsDiag: 0;
            readonly cornerRounding: 0;
            readonly disableDiagDetection: true;
            readonly disableCornerDetection: true;
        };
        readonly HIGH: {
            readonly threshold: 0.1;
            readonly localContrastAdaptionFactor: 2;
            readonly maxSearchSteps: 16;
            readonly maxSearchStepsDiag: 8;
            readonly cornerRounding: 25;
            readonly disableDiagDetection: false;
            readonly disableCornerDetection: false;
        };
        readonly ULTRA: {
            readonly threshold: 0.05;
            readonly localContrastAdaptionFactor: 2;
            readonly maxSearchSteps: 32;
            readonly maxSearchStepsDiag: 16;
            readonly cornerRounding: 25;
            readonly disableDiagDetection: false;
            readonly disableCornerDetection: false;
        };
    }>;
    /**
     * @param {Partial<SMAAFilterConfig>} [config]
     */
    constructor({ threshold, localContrastAdaptionFactor, maxSearchSteps, maxSearchStepsDiag, cornerRounding, disableDiagDetection, disableCornerDetection }?: Partial<SMAAFilterConfig>);
    /** @override */
    override apply(filterManager: any, input: any, output: any, clearMode: any, currentState: any): void;
    #private;
}
import type { SMAAFilterConfig } from "./_types.mjs";
import type { DeepReadonly } from "@common/_types.mjs";
