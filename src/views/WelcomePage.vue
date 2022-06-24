<style scoped>
.logo img {
    width: 500px;
    height: auto;
    filter: drop-shadow(0 20px 0px rgba(0, 0, 0, 0.1));
}

button {
    width: 300px;
    padding: 10px;

    background: #e8cfa6;
    color: #90625d;
    font-weight: 700;
    font-size: 1.5rem;
    border: 8px solid #c49a6c;
    border-radius: 5px;
    box-shadow: 0 8px 0 #8b460c;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: .2;
    }
}

.animate-pulse {
    -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.menu-item {
    position: relative;
}

.active-arrow {
    --offset: 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.left-arrow {
    right: calc( -1 * var(--offset) );
}

.right-arrow {
    left: calc( -1 * var(--offset) );
}

</style>

<template>
    <div class="flex items-center justify-center flex-col h-full">
        <h1 class="logo mb-15">
            <img src="/assets/logo.svg" alt="logo">
        </h1>

        <div class="flex align-center flex-col gap-6">
            <div
                v-for="item in menu"
                class="menu-item"
            >
                <img
                    v-if="activeItem === item"
                    src="/assets/icons/right_arrow.svg"
                    class="active-arrow right-arrow"
                    alt="Right Arrow"
                >

                <button
                    class="btn bg-white-100"
                    @click="item.action"
                >{{ item.name }}</button>

                <img
                    v-if="activeItem === item"
                    src="/assets/icons/left_arrow.svg"
                    class="active-arrow left-arrow"
                    alt="Left Arrow"
                >
            </div>
        </div>

        <p class="text-xl mt-16 animate-pulse">PRESS ENTER TO START</p>
    </div>
</template>

<script setup>
import Keyboard from "@/core/shared/Keyboard.js";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const activeItem = ref(null);
const menu = ref([
    {
        name: "Start Playing",
        action: () => router.push("/game")
    },

    {
        name: "Build Level",
        action: () => router.push("/level")
    },
]);

const keyboard = new Keyboard();

keyboard.bind(["ArrowUp", "k"], () => {
    const index = menu.value.indexOf( activeItem.value );
    const prev = menu.value[ index - 1 ];

    if( prev !== undefined ) {
        setActive( prev );
    }
});

keyboard.bind(["ArrowDown", "j"], () => {
    const index = menu.value.indexOf( activeItem.value );
    const next = menu.value[ index + 1 ];

    if( next !== undefined ) {
        setActive( next );
    }
});

keyboard.bind(["Enter", " "], () => {
    const { action } = activeItem.value;

    if( typeof action === "function" ) {
        action();
    }
});

keyboard.listen();

function setActive( item ) {
    if( ! item ) {
        debugger;
    }

    activeItem.value = item;
}

setActive( menu.value[0] );
</script>