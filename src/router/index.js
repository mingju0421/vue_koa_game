import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const Home = () => import('../pages/home.vue');
// const Room = () => import('../compoents/room.vue')
// import room from '../compoents/room'
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
        },
        {
            path: '/room/:id',
            name: 'room',
            component: () => import('@/components/room.vue')
        }
    ]
});

export default router;