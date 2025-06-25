import {
  DatabaseCreateOperation,
  DatabaseDeleteOperation,
  DatabaseGetOperation,
  DatabaseUpdateOperation,
} from "foundry/abstract/_types.js"
import DatabaseBackend from "foundry/abstract/DatabaseBackend.js"
import BaseUser from "foundry/documents/BaseUser.js"
import { CompendiumIndexData } from "foundry/documents/collections/CompendiumCollection.js"

/**
 * The client-side database backend implementation which handles Document modification operations.
 */
export default class ClientDatabaseBackend extends DatabaseBackend {
  /* -------------------------------------------- */
  /*  Get Operations                              */
  /* -------------------------------------------- */

  protected override _getDocuments<TDocument extends foundry.abstract.Document>(
    documentClass: AbstractConstructorOf<TDocument>,
    operation: DatabaseGetOperation<TDocument["parent"]>,
    user?: User,
  ): Promise<TDocument[]>
  protected override _getDocuments<TDocument extends foundry.abstract.Document>(
    documentClass: AbstractConstructorOf<TDocument>,
    operation: DatabaseGetOperation<TDocument["parent"]>,
    user?: BaseUser,
  ): Promise<TDocument[]>

  /* -------------------------------------------- */
  /*  Create Operations                           */
  /* -------------------------------------------- */

  protected override _createDocuments<TDocument extends foundry.abstract.Document>(
    documentClass: ConstructorOf<TDocument>,
    operation: DatabaseCreateOperation<TDocument["parent"]>,
    user: User,
  ): Promise<(CompendiumIndexData | TDocument)[]>

  /* -------------------------------------------- */
  /*  Update Operations                           */
  /* -------------------------------------------- */

  protected override _updateDocuments<TDocument extends foundry.abstract.Document>(
    documentClass: ConstructorOf<TDocument>,
    operation: DatabaseUpdateOperation<TDocument["parent"]>,
    user: User,
  ): Promise<TDocument[]>

  /* -------------------------------------------- */
  /*  Delete Operations                           */
  /* -------------------------------------------- */

  protected override _deleteDocuments<TDocument extends foundry.abstract.Document>(
    documentClass: ConstructorOf<TDocument>,
    operation: DatabaseDeleteOperation<TDocument["parent"]>,
    user: User,
  ): Promise<TDocument[]>

  /* -------------------------------------------- */
  /*  Socket Workflows                            */
  /* -------------------------------------------- */

  /**
   * Activate the Socket event listeners used to receive responses from events which modify database documents
   * @param socket The active game socket
   * @internal
   */
  activateSocketListeners(socket: io.Socket): void

  /* -------------------------------------------- */
  /*  Helper Methods                              */
  /* -------------------------------------------- */

  override getFlagScopes(): string[]

  override getCompendiumScopes(): string[]

  protected override _log(level: string, message: string): void
}
