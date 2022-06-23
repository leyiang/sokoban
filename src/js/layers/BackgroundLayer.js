import config from "../config.js";
import { path } from "../../core/shared/utils.js";

export default function backgroundLayer() {
    let buffer = null;

    return function( c, view ) {
        if( ! buffer ) {
            buffer = document.createElement("canvas");
            const bufferContext = buffer.getContext("2d");

            buffer.width = c.canvas.width;
            buffer.height = c.canvas.height;

            for (let y = 0; y < game.row; y++) {
                for (let x = 0; x < game.col; x++) {
                    let tileName = "grass";
                    let xName = null, yName = null;

                    if( x === 0 ) {
                        xName = "left";
                    }

                    if( x === game.col - 1 ) {
                        xName = "right";
                    }

                    if( y === 0 ) {
                        yName = "top";
                    }

                    if( y === game.row - 1 ) {
                        yName = "bottom";
                    }

                    // Logic
                    // grass_yName_xName
                    if( yName ) {
                        tileName += ("_" + yName);
                    }

                    if( xName ) {
                        tileName += ("_" + xName);
                    }

                    path(bufferContext, () => {
                        // if( config.dev ) {
                        //     bufferContext.rect(x * config.cell, y * config.cell, config.cell, config.cell);
                        //     bufferContext.stroke();
                        // }

                        view.drawCell( tileName, "grass", bufferContext, x, y );
                    });
                }
            }
        }

        c.drawImage( buffer, 0, 0 );
    }
}