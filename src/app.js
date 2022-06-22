import View from "./core/View.js";
import sprites_info from "./js/sprites_info.js";
import Game from "./core/Game.js";
import ResourceLoader from "./core/ResourceLoader.js";

const loader = new ResourceLoader();
const game = new Game();
const view = new View(
    document.querySelector("#app")
);

loader.load(
    sprites_info.map(info => info.img)
).then( images => {
    game.init();
    view.init( game, sprites_info, images );

    const loop = () => {
        game.update();
        view.render();
    }

    loop();
});