/**
 * @import {ActorData} from "./_types.mjs";
 * @import {DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The Actor Document.
 * Defines the DataSchema and common behaviors for an Actor which are shared between both client and server.
 * @extends {Document<ActorData>}
 * @mixes ActorData
 * @category Documents
 */
export default class BaseActor extends Document<ActorData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        img: fields.FilePathField;
        type: fields.DocumentTypeField;
        system: fields.TypeDataField;
        prototypeToken: fields.EmbeddedDataField;
        items: fields.EmbeddedCollectionField;
        effects: fields.EmbeddedCollectionField;
        folder: fields.ForeignDocumentField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * The default icon used for newly created Actor documents.
     * @type {string}
     */
    static DEFAULT_ICON: string;
    /**
     * Determine default artwork based on the provided actor data.
     * @param {ActorData} actorData                      The source actor data.
     * @returns {{img: string, texture: {src: string}}}  Candidate actor image and prototype token artwork.
     */
    static getDefaultArtwork(actorData: ActorData): {
        img: string;
        texture: {
            src: string;
        };
    };
    /** @override */
    static override canUserCreate(user: any): any;
    static #canCreate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    static #canUpdate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    /** @inheritDoc */
    static migrateData(source: any): object;
    /** @inheritDoc */
    static shimData(source: any, options: any): object;
    constructor(data?: Partial<ActorData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /** @inheritdoc */
    _initializeSource(source: any, options: any): any;
    /** @inheritDoc */
    _initialize(options: any): void;
    /** @inheritDoc */
    _preCreate(data: any, options: any, user: any): Promise<false | undefined>;
    /** @inheritDoc */
    _preUpdate(changed: any, options: any, user: any): Promise<false | undefined>;
}
import type { ActorData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
