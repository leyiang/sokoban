import sprites_info from "../js/sprites_info.js";
import { loadImage } from "./utils.js";

export default class ResourceLoader {
    constructor() {

    }

    load( resource_list ) {
        const promise_list = resource_list.map( resource => loadImage(resource) );

        return new Promise(resolve => {
            Promise.all( promise_list ).then( images => {
                resolve( images );
            });
        });
    }
}