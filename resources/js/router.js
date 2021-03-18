import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home'
import Login from './components/Auth/login'
import Notfound from './components/404'

const routes = [
    {
        path: '/',
        component: Home,
        name: '線上報修系統'
    },
    {
        path: '/login',
        component: Login,
        name: '登入'
    },
    {
        path: '*',
        component: Notfound,
        name: '404',
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
