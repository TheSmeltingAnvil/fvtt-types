/**
 * @import {
 *   DatabaseAction,
 *   DatabaseOperation,
 *   DatabaseGetOperation,
 *   DatabaseCreateOperation,
 *   DatabaseUpdateOperation,
 *   DatabaseDeleteOperation,
 *   DocumentSocketRequest
 * } from "@common/abstract/_types.mjs";
 * @import DocumentSocketResponse from "@common/abstract/socket.mjs";
 * @import Collection from "@common/utils/collection.mjs";
 * @import User from "../documents/user.mjs";
 */
/**
 * The client-side database backend implementation which handles Document modification operations.
 */
export default class ClientDatabaseBackend extends DatabaseBackend {
    /**
     * Perform a standardized pre-creation workflow for all Document types.
     * This workflow mutates the operation data array.
     * @param {typeof ClientDocument} documentClass
     * @param {DatabaseCreateOperation} operation
     * @param {User} user
     */
    static #preCreateDocumentArray(documentClass: typeof ClientDocument, operation: DatabaseCreateOperation, user: User): Promise<void>;
    /**
     * Perform a standardized pre-update workflow for all Document types.
     * This workflow mutates the operation updates array.
     * @param {typeof ClientDocument} documentClass
     * @param {DatabaseUpdateOperation} operation
     * @param {User} user
     */
    static #preUpdateDocumentArray(documentClass: typeof ClientDocument, operation: DatabaseUpdateOperation, user: User): Promise<void>;
    /**
     * Perform a standardized pre-delete workflow for all Document types.
     * This workflow mutates the operation ids array.
     * @param {typeof ClientDocument} documentClass
     * @param {DatabaseDeleteOperation} operation
     * @param {User} user
     */
    static #preDeleteDocumentArray(documentClass: typeof ClientDocument, operation: DatabaseDeleteOperation, user: User): Promise<void>;
    /**
     * Obtain the document collection for a given Document class and database operation.
     * @param {typeof ClientDocument} documentClass   The Document class being operated upon
     * @param {object} operation                The database operation being performed
     * @param {ClientDocument|null} operation.parent  A parent Document, if applicable
     * @param {string|null} operation.pack        A compendium pack identifier, if applicable
     * @returns {DocumentCollection|CompendiumCollection}  The relevant collection instance for this request
     */
    static #getCollection(documentClass: typeof ClientDocument, { parent, pack }: {
        parent: ClientDocument | null;
        pack: string | null;
    }): DocumentCollection | CompendiumCollection;
    /**
     * Structure a database operation as a web socket request.
     * @param {typeof ClientDocument} documentClass
     * @param {DatabaseAction} action
     * @param {DatabaseOperation} operation
     * @returns {DocumentSocketRequest}
     */
    static #buildRequest(documentClass: typeof ClientDocument, action: DatabaseAction, operation: DatabaseOperation): DocumentSocketRequest;
    /**
     * Dispatch a document modification socket request to the server.
     * @param {DocumentSocketRequest} request
     * @returns {DocumentSocketResponse}
     */
    static #dispatchRequest(request: DocumentSocketRequest): DocumentSocketResponse;
    /**
     * Ensure the given list of documents is loaded into the compendium collection so that they can be retrieved by
     * subsequent operations.
     * @param {Collection} collection        The candidate collection.
     * @param {object[]|string[]} documents  An array of update deltas, or IDs, depending on the operation.
     */
    static #loadCompendiumDocuments(collection: Collection<any, any>, documents: object[] | string[]): Promise<void>;
    /**
     * Augment a database operation with alterations needed to support ActorDelta and TokenDocuments.
     * @param {typeof ClientDocument} documentClass    The document class being operated upon
     * @param {DocumentSocketRequest} request                     The document modification socket request
     */
    static #adjustActorDeltaRequest(documentClass: typeof ClientDocument, request: DocumentSocketRequest): void;
    /**
     * Retrieve a Document's Token ancestor, if it exists.
     * @param {ClientDocument|null} parent        The parent Document
     * @returns {TokenDocument|null}              The Token ancestor, or null
     */
    static #getTokenAncestor(parent: ClientDocument | null): TokenDocument | null;
    /**
     * Build a CRUD response.
     * @param {ActorDelta[]} documents   An array of ActorDelta documents modified by a database workflow
     * @returns {ClientDocument[]}       The modified ActorDelta documents mapped to their synthetic Actor
     */
    static #adjustActorDeltaResponse(documents: ActorDelta[]): ClientDocument[];
    /**
     * @override
     * @ignore
     */
    override _getDocuments(documentClass: any, operation: any, user: any): Promise<any[]>;
    /**
     * @override
     * @ignore
     */
    override _createDocuments(documentClass: any, operation: any, user: any): Promise<any>;
    /**
     * @override
     * @ignore
     */
    override _updateDocuments(documentClass: any, operation: any, user: any): Promise<ClientDocument[]>;
    /**
     * @override
     * @ignore
     */
    override _deleteDocuments(documentClass: any, operation: any, user: any): Promise<any>;
    /**
     * Activate the Socket event listeners used to receive responses from events which modify database documents
     * @param {io.Socket} socket                           The active game socket
     * @internal
     * @ignore
     */
    activateSocketListeners(socket: io.Socket): void;
    /** @inheritDoc */
    getFlagScopes(): any[];
    /** @override */
    override _log(level: any, message: any): void;
    #private;
}
import DatabaseBackend from "@common/abstract/backend.mjs";
import type { DatabaseCreateOperation } from "@common/abstract/_types.mjs";
import type User from "../documents/user.mjs";
import type { DatabaseUpdateOperation } from "@common/abstract/_types.mjs";
import type { DatabaseDeleteOperation } from "@common/abstract/_types.mjs";
import type { DatabaseAction } from "@common/abstract/_types.mjs";
import type { DatabaseOperation } from "@common/abstract/_types.mjs";
import type { DocumentSocketRequest } from "@common/abstract/_types.mjs";
import type DocumentSocketResponse from "@common/abstract/socket.mjs";
import type Collection from "@common/utils/collection.mjs";
import TokenDocument from "../documents/token.mjs";
