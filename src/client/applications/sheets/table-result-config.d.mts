/**
 * @import {DeepPartial, TableResultData} from "@common/documents/_types.mjs";
 */
/**
 * The Application responsible for configuring a single TableResult document within a parent RollTable.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
export default class TableResultConfig extends DocumentSheetV2 {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        classes: string[];
        window: {
            contentClasses: string[];
            icon: string;
        };
        position: {
            width: number;
        };
        form: {
            closeOnSubmit: boolean;
        };
    };
    /** @override */
    static override PARTS: {
        sheet: {
            template: string;
            root: boolean;
        };
        footer: {
            template: string;
        };
    };
    /**
     * TableResult types with localized labels
     * @returns {{value: string; label: string}[]}
     */
    static get RESULT_TYPES(): {
        value: string;
        label: string;
    }[];
    /** @type {{value: string; label: string}[]|undefined} */
    static #RESULT_TYPES: {
        value: string;
        label: string;
    }[] | undefined;
    /**
     * Prepare the update data of a single TableResult document to ensure joint validation.
     * @param {DeepPartial<TableResultData>} data The TableResult update data
     */
    static prepareResultUpdateData(data: DeepPartial<TableResultData>): void;
    /** @inheritDoc */
    _prepareSubmitData(event: any, form: any, formData: any, updateData: any): object;
}
import { DocumentSheetV2 } from "../api/_module.mjs";
import type { TableResultData } from "@common/documents/_types.mjs";
