import Player from "./Player.js";
import Keyboard from "./Keyboard.js";
import config from "../js/config.js";

export default class Game {
    constructor() {
        this.player = new Player();
        this.keyboard = new Keyboard;
    }

    update() {

    }

    init() {
        this.player.init();
        this.keyboard.listen();
    }

    validPosition( x, y ) {
        if( x < 0 ) return false;
        if( y < 0 ) return false;
        if( x > config.col - 1 ) return false;
        if( y > config.row - 1 ) return false;

        return true;
    }
}