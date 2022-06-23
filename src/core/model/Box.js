import config from "../../js/config.js";
import { getCentered, path } from "../shared/utils.js";

export default class Box {
    constructor(x, y) {
        this.hasTarget = false;
        this.setPosition(x, y);
    }

    get key() {
        return this.x + "_" + this.y;
    }

    render( c, view ) {
        const cell = config.cell;
        const x = this.x * cell;
        const y = this.y * cell;

        path(c, () => {
            const name = this.hasTarget ? "box_target" : "box";

            const [cx, cy, w, h] = getCentered(this.x, this.y, cell, cell, .6);
            view.draw(name, "things", c, cx, cy, w, h );
        });
    }

    move( xDir, yDir ) {
        /**
         * Box won't move itself
         * So the position is already check in game model
         * No worries
         */
        let x = this.x + xDir;
        let y = this.y + yDir;

        this.setPosition( x, y );
    }

    setPosition( x, y ) {
        this.x = x;
        this.y = y;

        this.cell = game.grid.get( x, y );
        this.hasTarget = this.cell.is_target;
    }
}