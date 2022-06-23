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
            component: () => import("@/views/GamePage.vue")
        }
    ]
});

export default router;