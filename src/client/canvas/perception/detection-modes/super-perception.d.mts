/**
 * Detection mode that see ALL creatures (no blockers).
 * If not constrained by walls, see everything within the range.
 */
export default class DetectionModeAll extends DetectionMode {
    /** @override */
    override _canDetect(visionSource: any, target: any): boolean;
}
import DetectionMode from "../detection-mode.mjs";
