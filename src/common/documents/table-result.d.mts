/**
 * @import {TableResultData} from "./_types.mjs";
 * @import {DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The TableResult Document.
 * Defines the DataSchema and common behaviors for a TableResult which are shared between both client and server.
 * @extends {Document<TableResultData>}
 * @mixes TableResultData
 * @category Documents
 */
export default class BaseTableResult extends Document<TableResultData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritDoc */
    static metadata: object;
    /** @inheritDoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        type: fields.DocumentTypeField;
        name: fields.StringField;
        img: fields.FilePathField;
        description: fields.HTMLField;
        documentUuid: fields.DocumentUUIDField;
        weight: fields.NumberField;
        range: fields.ArrayField<fields.NumberField>;
        drawn: fields.BooleanField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    static #canUpdate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    /** @inheritDoc */
    static migrateData(data: any): object;
    /**
     * The documentId and documentCollection fields have been replaced with a single uuid field.
     * @param {object} data
     * @deprecated since V13
     */
    static #migrateDocumentUuid(data: object): void;
    /** @inheritDoc */
    static shimData(data: any, options: any): object;
    /**
     * Provide accessors for documentId and documentCollection, attempting to preserve a well-formed uuid on set.
     * @param {object} data
     */
    static #shimDocumentUuid(data: object): void;
    constructor(data?: Partial<TableResultData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /**
     * @deprecated since V13
     * @ignore
     */
    get text(): any;
    /**
     * @deprecated since V13
     * @ignore
     */
    get documentId(): string | null;
    /**
     * @deprecated since V13
     * @ignore
     */
    get documentCollection(): any;
}
import type { TableResultData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
