/**
 * @import {CombatantData} from "./_types.mjs";
 * @import {DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The Combatant Document.
 * Defines the DataSchema and common behaviors for a Combatant which are shared between both client and server.
 * @extends {Document<CombatantData>}
 * @mixes CombatantData
 * @category Documents
 */
export default class BaseCombatant extends Document<CombatantData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        type: fields.DocumentTypeField;
        system: fields.TypeDataField;
        actorId: fields.ForeignDocumentField;
        tokenId: fields.ForeignDocumentField;
        sceneId: fields.ForeignDocumentField;
        name: fields.StringField;
        img: fields.FilePathField;
        initiative: fields.NumberField;
        hidden: fields.BooleanField;
        defeated: fields.BooleanField;
        group: fields.DocumentIdField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    static #canUpdate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    constructor(data?: Partial<CombatantData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /** @inheritDoc */
    getUserLevel(user: any): any;
}
import type { CombatantData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
