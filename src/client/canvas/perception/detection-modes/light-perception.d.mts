/**
 * This detection mode tests whether the target is visible due to being illuminated by a light source.
 * By default tokens have light perception with an infinite range if light perception isn't explicitely
 * configured.
 */
export default class DetectionModeLightPerception extends DetectionMode {
    /** @override */
    override _canDetect(visionSource: any, target: any): boolean;
    /** @inheritDoc */
    _testPoint(visionSource: any, mode: any, target: any, test: any): boolean;
}
import DetectionMode from "../detection-mode.mjs";
