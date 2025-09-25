/**
 * Detection mode that see creatures in contact with the ground.
 */
export default class DetectionModeTremor extends DetectionMode {
    /** @override */
    override _canDetect(visionSource: any, target: any): boolean;
}
import DetectionMode from "../detection-mode.mjs";
