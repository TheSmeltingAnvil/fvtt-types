/**
 * @import {DatabaseAction, DatabaseOperation, DocumentSocketRequest} from "./_types.mjs";
 */
/**
 * The data structure of a modifyDocument socket response.
 */
export default class DocumentSocketResponse {
  /**
   * Prepare a response for an incoming request.
   * @param {DocumentSocketRequest} request     The incoming request that is being responded to
   */
  constructor(request: DocumentSocketRequest)
  /**
   * The type of Document being transacted.
   * @type {string}
   */
  type: string
  /**
   * The database action that was performed.
   * @type {DatabaseAction}
   */
  action: DatabaseAction
  /**
   * Was this response broadcast to other connected clients?
   * @type {boolean}
   */
  broadcast: boolean
  /**
   * The database operation that was requested.
   * @type {DatabaseOperation}
   */
  operation: DatabaseOperation
  /**
   * The identifier of the requesting user.
   * @type {string}
   */
  userId: string
  /**
   * The result of the request. Present if successful
   * @type {object[]|string[]}
   */
  result: object[] | string[]
  /**
   * An error that occurred. Present if unsuccessful
   * @type {Error}
   */
  error: Error
}
import type { DatabaseAction, DatabaseOperation, DocumentSocketRequest } from "./_types.mjs"
