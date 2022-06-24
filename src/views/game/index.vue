<template>
    <div class="flex h-full">
        <div class="canvas-wrap flex-1 flex justify-center items-center flex-col">

            <div>
                <div class="flex bg-green-500 rounded-xl mx-2 mb-4 p-4 justify-between">
                    <button>Prev</button>
                    <h2 class="text-4xl text-white">Level {{ level }}</h2>
                    <button @click="nextLevel">Next</button>
                </div>

                <canvas
                    id="app"
                    ref="canvas"
                ></canvas>
            </div>
        </div>
    </div>
</template>

<script setup>
import View from "@/core/View.js";
import sprites_info from "@/js/sprites_info.js";
import Game from "@/core/Game.js";
import ResourceLoader from "@/core/shared/ResourceLoader.js";
import { onMounted, ref } from "vue";
import GameSidebar from "./sidebar.vue";

const canvas = ref(null);
const level = ref(0);
let view = null;
let game = null;

onMounted(() => {
    const loader = new ResourceLoader();
    game = new Game();
    view = new View( canvas.value );

    const loop = () => {
        game.update();
        view.render();

        window.requestAnimationFrame( loop );
    }

    loader.load(
        sprites_info.map(info => info.img)
    ).then( images => {
        game.init();
        view.init( game, sprites_info, images );

        loop();
    });

    window.game = game;
});

function nextLevel() {
    game.nextLevel();
    /**
     * Still Need to update the background layer
     */
    view.updateCanvasSize();
    level.value = game.level;
}
</script>
