import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const Home = () => import('../pages/home.vue');
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        }
    ]
});

export default router;