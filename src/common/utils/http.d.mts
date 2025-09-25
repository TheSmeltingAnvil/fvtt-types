/**
 * A wrapper method around `fetch` that attaches an AbortController signal to the `fetch` call for clean timeouts
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal#aborting_a_fetch_with_timeout_or_explicit_abort}
 * @param {string} url            The URL to make the Request to
 * @param {RequestInit} data      The data of the Request
 * @param {object} [options]                 Additional options
 * @param {number|null} [options.timeoutMs]  How long to wait for a Response before cleanly aborting.
 *                                           If null, no timeout is applied. Default: `30000`.
 * @param {Function} [options.onTimeout]     A method to invoke if and when the timeout is reached
 * @returns {Promise<Response>}
 * @throws {HttpError}
 */
export function fetchWithTimeout(
  url: string,
  data?: RequestInit,
  {
    timeoutMs,
    onTimeout,
  }?: {
    timeoutMs?: number | null | undefined
    onTimeout?: Function | undefined
  },
): Promise<Response>
/**
 * A small wrapper that automatically asks for JSON with a Timeout
 * @param {string} url          The URL to make the Request to
 * @param {Object} data         The data of the Request
 * @param {object} [options]                 Additional options
 * @param {number|null} [options.timeoutMs]  How long to wait for a Response before cleanly aborting.
 *                                           If null, no timeout is applied. Default: `30000`.
 * @param {Function} [options.onTimeout]     A method to invoke if and when the timeout is reached
 * @returns {Promise<*>}
 */
export function fetchJsonWithTimeout(
  url: string,
  data?: object,
  {
    timeoutMs,
    onTimeout,
  }?: {
    timeoutMs?: number | null | undefined
    onTimeout?: Function | undefined
  },
): Promise<any>
/**
 * Test whether a file source exists by performing a HEAD request against it
 * @param {string} src          The source URL or path to test
 * @returns {Promise<boolean>}   Does the file exist at the provided url?
 */
export function srcExists(src: string): Promise<boolean>
/**
 * Represents an HTTP Error when a non-OK response is returned by Fetch
 * @extends {Error}
 */
export class HttpError extends Error {
  constructor(statusText: any, code: any, displayMessage?: string)
  code: any
  displayMessage: string
}
