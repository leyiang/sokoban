import config from "../js/config.js";
import { path } from "./utils.js";

export default class Player {
    constructor() {
        this.x = 5;
        this.y = 5;
    }

    init() {
        game.keyboard.bind(["ArrowUp", "k", "w"], () => {
            this.move(0, -1);
        });

        game.keyboard.bind(["ArrowDown", "j", "s"], () => {
            this.move(0, 1);
        });

        game.keyboard.bind(["ArrowLeft", "h", "a"], () => {
            this.move(-1, 0);
        });

        game.keyboard.bind(["ArrowRight", "l", "d"], () => {
            this.move(1, 0);
        });
    }

    move( xDir = 0, yDir = 0 ) {
        let newX = this.x + xDir;
        let newY = this.y + yDir;

        if( game.validPosition(newX, newY) ) {
            this.x = newX;
            this.y = newY;
        }
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