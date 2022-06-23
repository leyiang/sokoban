import config from "../../js/config.js";
import { path } from "../shared/utils.js";

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

        this.is_target = (
            this.type === Cell.TARGET ||
            this.type === Cell.CARGO_ON_TARGET
        );
    }

    get key() {
       return this.x + "_" + this.y;
    }

    render( c ) {
        const cell = config.cell;
        const x = this.x * cell;
        const y = this.y * cell;

        path(c, () => {
            if( this.type === Cell.WALL ) {
                c.fillRect(x, y, cell, cell);
            }

            if( this.is_target ) {
                c.fillStyle = "pink";
                c.fillRect(x, y, cell, cell);
            }
        });
    }
}