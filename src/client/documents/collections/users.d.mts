/**
 * @import User from "../user.mjs";
 * @import {ActivityData} from "@client/_types.mjs";
 */
/**
 * The singleton collection of User documents which exist within the active World.
 * This Collection is accessible within the Game object as game.users.
 *
 * ### Hook Events
 * - {@link hookEvents.userConnected}
 *
 * @extends {WorldCollection<User>}
 * @category Collections
 *
 * @see {@link foundry.documents.User}: The User document
 */
export default class Users extends WorldCollection<User> {
  static _activateSocketListeners(socket: any): void
  /**
   * Handle receipt of activity data from another User connected to the Game session
   * @param {string} userId               The User id who generated the activity data
   * @param {ActivityData} activityData   The object of activity data
   */
  static #handleUserActivity(userId: string, activityData?: ActivityData): void
  /**
   * Handle the User query received via the socket.
   * @param {string} userId                            The ID of the querying User
   * @param {string} queryId                           The query ID
   * @param {string} queryName                         The query name
   * @param {object} queryData                         The query data
   * @param {object} queryOptions                      The query options
   * @param {number|undefined} queryOptions.timeout    The timeout that the querying User set for this query, if any
   * @param {Function} ack                             The acknowledgement function to return the result
   *                                                   of the confirmation to the server
   */
  static #handleUserQuery(
    userId: string,
    queryId: string,
    queryName: string,
    queryData: object,
    {
      timeout,
    }: {
      timeout: number | undefined
    },
    ack: Function,
  ): Promise<void>
  constructor(...args: any[])
  /**
   * The User document of the currently connected user
   * @type {User|null}
   */
  current: User | null
  /**
   * Get the users with player roles
   * @returns {User[]}
   */
  get players(): User[]
  /**
   * Get one User who is an active Gamemaster (non-assistant if possible), or null if no active GM is available.
   * This can be useful for workflows which occur on all clients, but where only one user should take action.
   * @type {User|null}
   */
  get activeGM(): User | null
  /**
   * Get the designated User among the Users that satisfy the given condition.
   * Returns `null` if no Users satisfy the given condition.
   * Returns a User with the highest role among the qualifying Users.
   * Qualifying Users aren't necessary active Users unless it is part of the condition.
   * @example
   * // Get the designated User for creating Tokens that is active
   * const user = game.users.getDesignatedUser(user => user.active && user.can("TOKEN_CREATE"));
   * @param {(user: User) => boolean} condition    The condition the Users must satisfy
   * @returns {User|null}                          The designated User or `null`
   */
  getDesignatedUser(condition: (user: User) => boolean): User | null
}
import type { ActivityData } from "@client/_types.mjs"
import WorldCollection from "../abstract/world-collection.mjs"
import type User from "../user.mjs"
