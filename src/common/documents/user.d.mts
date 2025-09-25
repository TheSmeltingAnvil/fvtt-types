/**
 * @import {UserData} from "./_types.mjs";
 * @import {DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The User Document.
 * Defines the DataSchema and common behaviors for a User which are shared between both client and server.
 * @extends {Document<UserData>}
 * @mixes UserData
 * @category Documents
 */
export default class BaseUser extends Document<UserData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        role: fields.NumberField;
        password: fields.StringField;
        passwordSalt: fields.StringField;
        avatar: fields.FilePathField;
        character: fields.ForeignDocumentField;
        color: fields.ColorField;
        pronouns: fields.StringField;
        hotbar: fields.ObjectField;
        permissions: fields.ObjectField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * Validate the structure of the User hotbar object
     * @param {object} bar      The attempted hotbar data
     * @returns {boolean}
     */
    static #validateHotbar(bar: object): boolean;
    /**
     * Validate the structure of the User permissions object
     * @param {object} perms      The attempted permissions data
     * @returns {boolean}
     */
    static #validatePermissions(perms: object): boolean;
    static #canCreate(user: BaseUser, document: Document, data?: object | undefined): boolean;
    static #canUpdate(user: BaseUser, document: Document, data?: object | undefined): boolean;
    static #canDelete(user: BaseUser, document: Document, data?: object | undefined): boolean;
    constructor(data?: Partial<UserData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /**
     * A convenience test for whether this User has the NONE role.
     * @type {boolean}
     */
    get isBanned(): boolean;
    /**
     * Test whether the User has a GAMEMASTER or ASSISTANT role in this World?
     * @type {boolean}
     */
    get isGM(): boolean;
    /**
     * Test whether the User is able to perform a certain permission action.
     * The provided permission string may pertain to an explicit permission setting or a named user role.
     *
     * @param {string} action The action to test
     * @returns {boolean} Does the user have the ability to perform this action?
     */
    can(action: string): boolean;
    /** @inheritdoc */
    getUserLevel(user: any): 0 | 3;
    /**
     * Test whether the User has at least a specific permission
     * @param {string} permission The permission name from USER_PERMISSIONS to test
     * @returns {boolean} Does the user have at least this permission
     */
    hasPermission(permission: string): boolean;
    /**
     * Test whether the User has at least the permission level of a certain role
     * @param {string|number} role    The role name from USER_ROLES to test
     * @param {boolean} [exact]       Require the role match to be exact
     * @returns {boolean}             Does the user have at this role level (or greater)?
     */
    hasRole(role: string | number, { exact }?: boolean): boolean;
}
import type { UserData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
