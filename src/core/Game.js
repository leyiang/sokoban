import Player from "./Player.js";
import Keyboard from "./Keyboard.js";
import config from "../js/config.js";
import { maps } from "../js/maps.js";
import Grid from "./Grid.js";

export default class Game {
    constructor() {
        this.player = new Player();
        this.keyboard = new Keyboard;
        this.map = maps[0];
        this.row = this.map.length;
    }

    update() {

    }

    init() {
        this.player.init();
        this.keyboard.listen();
        this.col = this.map[0].length;
        this.grid = new Grid( this.row, this.col, this.map );
    }

}