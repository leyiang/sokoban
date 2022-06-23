import config from "../../js/config.js";
import { path } from "../shared/utils.js";

export default class Box {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get key() {
        return this.x + "_" + this.y;
    }

    render( c ) {
        const cell = config.cell;
        const x = this.x * cell;
        const y = this.y * cell;

        path(c, () => {
            c.fillStyle = "brown";
            c.fillRect(x, y, cell, cell);
        });
    }

    move( xDir, yDir ) {
        /**
         * Box won't move itself
         * So the position is already check in game model
         * No worries
         */
        this.x += xDir;
        this.y += yDir;
    }
}