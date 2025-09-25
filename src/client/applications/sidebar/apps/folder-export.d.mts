/**
 * A Dialog subclass that allows the user to configure export options for a Folder
 */
export default class FolderExport extends DialogV2 {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        id: string;
        position: {
            width: number;
        };
    };
    /** @inheritDoc */
    _onRender(context: any, options: any): Promise<void>;
    #private;
}
import DialogV2 from "../../api/dialog.mjs";
