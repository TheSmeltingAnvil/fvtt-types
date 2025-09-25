/**
 * @import {CombatantGroupData} from "./_types.mjs";
 */
/**
 * A Document that represents a grouping of individual Combatants in a Combat.
 * Defines the DataSchema and common behaviors for a CombatantGroup which are shared between both client and server.
 * @extends {Document<CombatantGroupData>}
 * @mixes CombatantGroupData
 * @category Documents
 */
export default class BaseCombatantGroup extends Document<CombatantGroupData, foundry.abstract.types.DocumentConstructionContext> {
    static metadata: object;
    /** @inheritDoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        type: fields.DocumentTypeField;
        system: fields.TypeDataField;
        name: fields.StringField;
        img: fields.FilePathField;
        initiative: fields.NumberField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    constructor(data?: Partial<CombatantGroupData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
}
import type { CombatantGroupData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
