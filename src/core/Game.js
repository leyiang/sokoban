import Player from "./model/Player.js";
import Keyboard from "./shared/Keyboard.js";
import { maps } from "../js/maps.js";
import Grid from "./Grid.js";
import Cell from "./model/Cell.js";
import Box from "./model/Box.js";

export default class Game {
    constructor() {
        this.player = new Player();
        this.keyboard = new Keyboard;
        this.map = maps[0];
        this.row = this.map.length;
        this.col = this.map[0].length;
        this.boxes = new Map();
        this.box_len = 0;
    }

    update() {

    }

    init() {
        this.player.init();
        this.keyboard.listen();

        /**
         * Init Grid
         * @type {Grid}
         */
        this.grid = new Grid( this.row, this.col, this.map );

        this.map.forEach( (row, y) => {
            row.forEach( (type, x) => {
                if( type === Cell.CARGO || type === Cell.CARGO_ON_TARGET ) {
                    const box = new Box(x, y);
                    this.box_len ++;
                    this.boxes.set(box.key, box);
                }
            });
        })
    }

    validPosition(x, y, xDir, yDir, isBox=false) {
        if (x < 0) return false;
        if (y < 0) return false;
        if (x > this.col - 1) return false;
        if (y > this.row - 1) return false;

        const cell = this.grid.get( x, y );

        /**
         * Check if the cell is walkable
         */
        if( cell.type === Cell.WALL ) {
            return false;
        }

        const box = this.boxes.get(`${x}_${y}`) || null;

        /**
         * A Box is using this method
         * to check if it is able to move to x, y
         * so, if there's a box there, just return false
         */
        if( isBox ) {
            if( box !== null ) return false;
        } else {
            if( box === null ) {
                return true;
            } else {
                if( this.validPosition(box.x + xDir, box.y + yDir, xDir, yDir, true) ) {
                    this.moveBox( box, xDir, yDir );
                } else {
                    return false;
                }
            }
        }

        return true;
    }

    moveBox( box, xDir, yDir ) {
        this.boxes.delete( box.key );
        box.move(xDir, yDir);
        this.boxes.set( box.key, box );
    }
}