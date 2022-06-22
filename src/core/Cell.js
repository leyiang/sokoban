import { path } from "./utils.js";
import config from "../js/config.js";

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

        if( this.type === Cell.KEEPER ) {
            game.player.x = this.x;
            game.player.y = this.y;
        }
    }

    render( c ) {
        const cell = config.cell;

        path(c, () => {
            if( this.type === Cell.WALL ) {
                c.fillRect( this.x * cell, this.y * cell, cell, cell );
            }
        });
    }
}