<template>
    <canvas
        id="app"
        ref="canvas"
    ></canvas>
</template>

<script setup>
import View from "@/core/View.js";
import sprites_info from "@/js/sprites_info.js";
import Game from "@/core/Game.js";
import ResourceLoader from "@/core/shared/ResourceLoader.js";
import { onMounted, ref } from "vue";

const canvas = ref(null);

onMounted(() => {
    const loader = new ResourceLoader();
    const game = new Game();
    const view = new View( canvas.value );

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
</script>
