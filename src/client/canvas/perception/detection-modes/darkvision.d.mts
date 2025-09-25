/**
 * A special detection mode which models a form of darkvision (night vision).
 * This mode is the default case which is tested first when evaluating visibility of objects.
 */
export default class DetectionModeDarkvision extends DetectionMode {
    /** @override */
    override _canDetect(visionSource: any, target: any): boolean;
}
import DetectionMode from "../detection-mode.mjs";
