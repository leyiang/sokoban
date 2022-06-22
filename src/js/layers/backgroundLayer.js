import config from "../config.js";
import { path } from "../../core/utils.js";

export default function backgroundLayer() {
    return function( c, view ) {
        const buffer = document.createElement("canvas");

        buffer.width = c.canvas.width;
        buffer.height = c.canvas.height;

        for (let y = 0; y < config.row; y++) {
            for (let x = 0; x < config.col; x++) {
                let tileName = "grass";
                let xName = null, yName = null;

                if( x === 0 ) {
                    xName = "left";
                }

                if( x === config.col - 1 ) {
                    xName = "right";
                }

                if( y === 0 ) {
                    yName = "top";
                }

                if( y === config.row - 1 ) {
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

                path(c, () => {

                    if( config.dev ) {
                        c.rect(x * config.cell, y * config.cell, config.cell, config.cell);
                        c.stroke();
                    }

                    view.drawCell( tileName, "grass", c, x, y );
                });
            }
        }
    }
}