import config from "../../js/config.js";
import { getCentered, path } from "../shared/utils.js";

export default class Player {
    constructor() {
        this.x = 5;
        this.y = 5;
        this.posture = "down";
    }

    init() {
        game.keyboard.bind(["ArrowUp", "k", "w"], () => {
            this.posture = "up";
            this.move(0, -1);
        });

        game.keyboard.bind(["ArrowDown", "j", "s"], () => {
            this.posture = "down";
            this.move(0, 1);
        });

        game.keyboard.bind(["ArrowLeft", "h", "a"], () => {
            this.posture = "left";
            this.move(-1, 0);
        });

        game.keyboard.bind(["ArrowRight", "l", "d"], () => {
            this.posture = "right";
            this.move(1, 0);
        });
    }

    move( xDir = 0, yDir = 0 ) {
        let newX = this.x + xDir;
        let newY = this.y + yDir;

        if( game.validPosition(newX, newY, xDir, yDir ) ) {
            this.x = newX;
            this.y = newY;
        }
    }

    render( c, view ) {
        const cell = config.cell;

        const [ centerX, centerY, w, h ] = getCentered(this.x, this.y, cell, cell, 2);

        path(c, () => {
            if( config.dev ) {
                // path(c, () => {
                //     c.globalAlpha = .5;
                //     c.rect( centerX, centerY, w, h )
                //     c.fill();
                // });
            }

            view.draw(
                `${ this.posture }_1`,
                "character",
                c,
                centerX, centerY, w, h
            );
        })
    }
}

