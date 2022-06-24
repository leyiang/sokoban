import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: "/",
            component: () => import("@/views/WelcomePage.vue")
        },
        {
            path: "/game",
            component: () => import("@/views/game/index.vue")
        }
    ]
});

export default router;