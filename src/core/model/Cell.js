import config from "../../js/config.js";
import { getCentered, path } from "../shared/utils.js";

export default class Cell {
    static EMPTY = 0;
    static WALL = 1;
    static FLOOR = 2;
    static TARGET = 3;
    static CARGO = 4;
    static CARGO_ON_TARGET = 5;
    static KEEPER = 6;

    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.neighbours = null;

        this.is_target = (
            this.type === Cell.TARGET ||
            this.type === Cell.CARGO_ON_TARGET
        );

        if( type === Cell.KEEPER ) {
            game.player.x = this.x;
            game.player.y = this.y;
        }
    }

    get key() {
       return this.x + "_" + this.y;
    }

    getNeighbours() {
        if( this.neighbours !== null ) {
            return this.neighbours;
        } else {
            return this.neighbours = game.grid.getNeighbours( this.x, this.y );
        }
    }

    render( c, view ) {
        const cell = config.cell;
        const x = this.x * cell;
        const y = this.y * cell;

        path(c, () => {
            if( this.type === Cell.WALL ) {
                const [cx, cy, w, h] = getCentered(this.x, this.y, cell, cell, .6);
                view.draw("stone", "things", c, cx, cy, w, h );
            }

            if( this.is_target ) {
                const [cx, cy, w, h] = getCentered(this.x, this.y, cell, cell, .6);
                view.draw("apple", "things", c, cx, cy, w, h );
            }
        });
    }
}