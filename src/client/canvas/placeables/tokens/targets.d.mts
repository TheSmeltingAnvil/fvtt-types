/**
 * @import User from "@client/documents/user.mjs";
 * @import Token from "../token.mjs";
 */
/**
 * A subclass of Set which manages the Token ids which the User has targeted.
 * @extends {Set<Token>}
 * @see {@link foundry.documents.User#targets}
 */
export default class UserTargets extends Set<Token> {
    constructor(user: any);
    user: any;
    /**
     * Return the Token IDs which are user targets
     * @type {string[]}
     */
    get ids(): string[];
    /**
     * @override
     * @param {Token} token
     * @returns {this}
     */
    override add(token: Token): this;
    #private;
}
import type Token from "../token.mjs";
