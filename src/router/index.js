import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/:bingo',
        name: 'home',
        props: true,
        component: function () {
            return import(/* webpackChunkName: "Homepage" */ '../views/Homepage.view.vue');
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
