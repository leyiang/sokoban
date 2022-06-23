import Cell from "./model/Cell.js";

export default class Grid {
    constructor(row, col, map) {
        this.row = row;
        this.col = col;
        this.cells = [];

        for (let y = 0; y < row; y++) {
            for (let x = 0; x < col; x++) {
                const cell = new Cell(x, y, map[y][x] );
                this.cells.push( cell );
            }
        }
    }

    get(x, y) {
        if( x < 0 || x >= this.col ) return null;
        if( y < 0 || y >= this.row ) return null;

        return this.cells[ y * this.col + x ] || null;
    }
}