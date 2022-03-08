/// <reference types="node" />
export = SuperPrompt;
declare class SuperPrompt extends EventEmitter {
    /**
     * @param {String} historyFile the file to save the history
     */
    constructor(historyFile: string, opts?: {
        close: boolean;
        persist: boolean;
    });
    historyFile: string;
    opts: {
        close: boolean;
        persist: boolean;
    };
    /**
     * @param {String} name the question name to ask
     * ```js
     * var prompt = new SuperPrompt("./myhistory",{ close: true })
     * prompt.ask("enter name",(questionData) => console.log(`hi ${questionData}`))
     * ```
     * @param {Function} fn the callback function to read the asked data
     */
    ask(name: string, fn: Function): void;
    /**
     * the SuperPrompt readline
     * @returns {typeof readline}
     */
    get readline(): typeof readline;
    /**
     * the SuperPrompt interface
     * @returns {typeof prompter}
     */
    get interface(): readline.Interface;
}
import { EventEmitter } from "events";
import readline = require("readline");
