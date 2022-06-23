import config from "../../js/config.js";
import { getCentered, path } from "../shared/utils.js";
import Animation from "../Animation.js";

export default class Player {
    constructor() {
        this.x = 5;
        this.y = 5;
        this.animation = new Animation("character", "down");
    }

    init() {
        game.keyboard.bind(["ArrowUp", "k", "w"], () => {
            this.animation.setState("up");
            this.move(0, -1);
        });

        game.keyboard.bind(["ArrowDown", "j", "s"], () => {
            this.animation.setState("down");
            this.move(0, 1);
        });

        game.keyboard.bind(["ArrowLeft", "h", "a"], () => {
            this.animation.setState("left");
            this.move(-1, 0);
        });

        game.keyboard.bind(["ArrowRight", "l", "d"], () => {
            this.animation.setState("right");
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

            this.animation.render(c, view, centerX, centerY, w, h );
        })
    }
}

