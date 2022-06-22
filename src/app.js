import { loadImage } from "./core/utils.js";
import View from "./core/View.js";
import sprites_info from "./js/sprites_info.js";
import Game from "./core/Game.js";

const game = new Game();

const view = new View(
    game,
    document.querySelector("#app")
);

const sprite_images = sprites_info
    .map( info => info.img )
    .map( src => loadImage(src) );

Promise.all(sprite_images).then( images => {
    view.initSprites( sprites_info, images );
    view.render();
});