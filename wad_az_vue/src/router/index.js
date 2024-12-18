import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import SignupPage from '../views/SignupPage.vue';

const routes = [
    { path: '/', component: MainPage },
    { path: '/signup', component: SignupPage },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
