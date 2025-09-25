/**
 * @typedef {Record<string, any>} WorkerTask
 * @property {number} [taskId]          An incrementing task ID used to reference task progress
 * @property {WorkerManager.WORKER_TASK_ACTIONS} action  The task action being performed, from
 *                                                       WorkerManager.WORKER_TASK_ACTIONS
 */
/**
 * An asynchronous web Worker which can load user-defined functions and await execution using Promises.
 * @param {string} name                 The worker name to be initialized
 * @param {object} [options={}]         Worker initialization options
 * @param {boolean} [options.debug=false]           Should the worker run in debug mode?
 * @param {boolean} [options.loadPrimitives=false]  Should the worker automatically load the primitives library?
 * @param {string[]} [options.scripts]              Should the worker operates in script modes? Optional scripts.
 */
export class AsyncWorker extends Worker {
    /**
     * A path reference to the JavaScript file which provides companion worker-side functionality.
     * @type {string}
     */
    static WORKER_HARNESS_JS: string;
    constructor(name: any, { debug, loadPrimitives, scripts }?: {
        debug?: boolean | undefined;
        loadPrimitives?: boolean | undefined;
    });
    /**
     * The name of this worker.
     * @type {string}
     */
    name: string;
    /**
     * A Promise which resolves once the Worker is ready to accept tasks
     * @type {Promise}
     */
    get ready(): Promise<any>;
    /**
     * Load a function onto a given Worker.
     * The function must be a pure function with no external dependencies or requirements on global scope.
     * @param {string} functionName   The name of the function to load
     * @param {Function} functionRef  A reference to the function that should be loaded
     * @returns {Promise<unknown>}    A Promise which resolves once the Worker has loaded the function.
     */
    loadFunction(functionName: string, functionRef: Function): Promise<unknown>;
    /**
     * Execute a task on a specific Worker.
     * @param {string} functionName   The named function to execute on the worker. This function must first have been
     *                                loaded.
     * @param {Array<*>} [args]       An array of parameters with which to call the requested function
     * @param {Array<*>} [transfer]   An array of transferable objects which are transferred to the worker thread.
     *                                See https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects
     * @returns {Promise<unknown>}    A Promise which resolves with the returned result of the function once complete.
     */
    executeFunction(functionName: string, args?: Array<any>, transfer?: Array<any>): Promise<unknown>;
    #private;
}
/**
 * A client-side class responsible for managing a set of web workers.
 * This interface is accessed as a singleton instance via game.workers.
 * @see {@link foundry.Game#workers}
 */
export class WorkerManager extends Map<any, any> {
    /**
     * Supported worker task actions
     * @enum {string}
     */
    static WORKER_TASK_ACTIONS: Readonly<{
        readonly INIT: "init";
        readonly LOAD: "load";
        readonly EXECUTE: "execute";
    }>;
    constructor();
    /**
     * Create a new named Worker.
     * @param {string} name                 The named Worker to create
     * @param {object} [config={}]          Worker configuration parameters passed to the AsyncWorker constructor
     * @returns {Promise<AsyncWorker>}      The created AsyncWorker which is ready to accept tasks
     */
    createWorker(name: string, config?: object): Promise<AsyncWorker>;
    /**
     * Retire a current Worker, terminating it immediately.
     * @see Worker#terminate
     * @param {string} name           The named worker to terminate
     */
    retireWorker(name: string): void;
}
export type WorkerTask = Record<string, any>;
