import config from "../js/config.js";
import { path } from "./utils.js";

export default class Character {
    constructor() {
        this.x = 5;
        this.y = 5;
    }

    init() {
        game.keyboard.bind(["ArrowUp", "k"], () => {
            this.y --;
        });

        game.keyboard.bind(["ArrowDown", "j"], () => {
            this.y ++;
        });

        game.keyboard.bind(["ArrowLeft", "h"], () => {
            this.x --;
        });
        game.keyboard.bind(["ArrowRight", "l"], () => {
            this.x ++;
        });
    }

    render( c, view ) {
        const cell = config.cell;

        const w = cell * 2;
        const h = cell * 2;
        const x = this.x * cell;
        const y = this.y * cell;

        const centerX = x - w/2 + cell/2;
        const centerY = y - h/2 + cell/2;

        path(c, () => {
            if( config.dev ) {
                // path(c, () => {
                //     c.globalAlpha = .5;
                //     c.rect( centerX, centerY, w, h )
                //     c.fill();
                // });
            }

            view.draw(
                "down_1",
                "character",
                c,
                centerX, centerY, w, h
            );
        })
    }
}