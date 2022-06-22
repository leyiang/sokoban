import Character from "./Character.js";
import Keyboard from "./Keyboard.js";

export default class Game {
    constructor() {
        this.player = new Character();
        this.keyboard = new Keyboard;
    }

    update() {

    }

    init() {
        this.player.init();
        this.keyboard.listen();
    }
}