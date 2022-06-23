import config from "../../js/config.js";
import { devLog } from "./utils.js";

export default class Keyboard {
    constructor() {
        this.keymaps = new Map();
    }

    bind( key, callback ) {
        if( Array.isArray(key) ) {
            key.forEach( singleKey => {
                this.rawBind( singleKey, callback );
            });
        } else {
            this.rawBind( key, callback );
        }
    }

    rawBind( key, callback ) {
        this.keymaps.set( key, callback );
    }

    listen() {
        document.addEventListener("keydown", e => {
            devLog("Keyboard.js", e.key);

            const callback = this.keymaps.get( e.key );

            if( typeof callback === "function" ) {
                e.preventDefault();
                callback( e.key );
            }
        });
    }
}