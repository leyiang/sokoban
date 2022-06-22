import SpriteSheet from "./core/SpriteSheet.js";

const canvas = document.getElementById("app");
const c = canvas.getContext("2d");

const row = 20;
const col = 20;
const cell = 40;

function loadImage( src ) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener("load", () => resolve(image) );
        image.src = src;
    });
}

canvas.width = col * cell;
canvas.height = row * cell;

loadImage("/assets/sprout_lands/Tilesets/Grass.png").then( image => {
    const sprites = new SpriteSheet( image );

    sprites.define("grass", 0, 0, 16, 16 );
    sprites.define("grass_top", 2, 3, 16, 16 );
    sprites.define("grass_bottom", 2, 5, 16, 16 );
    sprites.define("grass_left", 1, 4, 16, 16 );
    sprites.define("grass_right", 3, 4, 16, 16 );

    sprites.define("grass_top_left", 1, 3, 16, 16 );
    sprites.define("grass_top_right", 3, 3, 16, 16 );
    sprites.define("grass_bottom_right", 3, 5, 16, 16 );
    sprites.define("grass_bottom_left", 1, 5, 16, 16 );

    for(let y = 0; y < row; y++) {
        for(let x = 0; x < col; x++) {
            let tileName = "grass";

            if( x === 0 || y === 0 ) {
                if (x === 0 && y === 0) {
                    tileName = "grass_top_left";
                } else {
                    if (x === 0 && y === row - 1) {
                        tileName = "grass_bottom_left";
                    } else if (x === 0) {
                        tileName = "grass_left";
                    }

                    if (y === 0 && x === col - 1) {
                        tileName = "grass_top_right";
                    } else if (y === 0) {
                        tileName = "grass_top";
                    }
                }
            } else if( x === col - 1 || y === row - 1 ) {
                if( x === col - 1 && y === row - 1 ) {
                    tileName = "grass_bottom_right"
                } else {
                    if( x === col - 1 ) {
                        tileName = "grass_right";
                    }

                    if( y === row - 1 ) {
                        tileName = "grass_bottom"
                    }
                }
            }

            sprites.draw(tileName, c, x * cell, y * cell, cell, cell );
        }
    }
});