/**
 * @import {CombatData, CombatantData} from "./_types.mjs";
 * @import {DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The Combat Document.
 * Defines the DataSchema and common behaviors for a Combat which are shared between both client and server.
 * @extends {Document<CombatData>}
 * @mixes CombatData
 * @category Documents
 */
export default class BaseCombat extends Document<CombatData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        type: fields.DocumentTypeField;
        system: fields.TypeDataField;
        scene: fields.ForeignDocumentField;
        groups: fields.EmbeddedCollectionField;
        combatants: fields.EmbeddedCollectionField;
        active: fields.BooleanField;
        round: fields.NumberField;
        turn: fields.NumberField;
        sort: fields.IntegerSortField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    static #canUpdate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    constructor(data?: Partial<CombatData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /**
     * Can a certain User change the Combat round?
     * @param {User} user     The user attempting to change the round
     * @returns {boolean}     Is the user allowed to change the round?
     * @protected
     */
    protected _canChangeRound(user: User): boolean;
    /**
     * Can a certain User change the Combat turn?
     * @param {documents.User} user The user attempting to change the turn
     * @returns {boolean} Is the user allowed to change the turn?
     * @protected
     */
    protected _canChangeTurn(user: documents.User): boolean;
    /** @inheritDoc */
    _preUpdate(changed: any, options: any, user: any): Promise<false | undefined>;
    #private;
}
import type { CombatData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
