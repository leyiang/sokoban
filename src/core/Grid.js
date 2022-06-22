import Cell from "./Cell.js";

export default class Grid {
    constructor(row, col, map) {
        this.row = row;
        this.col = col;
        this.cells = [];

        for (let y = 0; y < row; y++) {
            for (let x = 0; x < col; x++) {
                this.cells.push(new Cell(x, y, map[y][x]));
            }
        }
    }

    validPosition(x, y) {
        if (x < 0) return false;
        if (y < 0) return false;
        if (x > this.col - 1) return false;
        if (y > this.row - 1) return false;

        const cell = this.cells[y * this.col + x]

        if( cell.type == Cell.WALL ) {
            return false;
        }

        return true;
    }
}