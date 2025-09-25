/**
 * Detection mode that see invisible creatures.
 * This detection mode allows the source to:
 * - See/Detect the invisible target as if visible.
 * - The "See" version needs sight and is affected by blindness
 */
export default class DetectionModeInvisibility extends DetectionMode {
    /** @override */
    override _canDetect(visionSource: any, target: any): boolean;
}
import DetectionMode from "../detection-mode.mjs";
