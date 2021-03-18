import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home'
import Login from './components/Auth/login'
import Logout from './components/Auth/logout'
import NewReport from './components/reports/new'
import Notfound from './components/404'
import {apiUserAthenticated, apiUserLogout} from './api'

const auth = (to, from, next) => {
    apiUserAthenticated({})
    .then(res=> {
        next()
    })
    .catch(err=> {
        return next({ path: '/login'})
    })
};

const is_login = (to, form, next) =>{
    if (localStorage.getItem("name")){
        return next({path: '/'})
    }else{
        next()
    }
};

const routes = [
    {
        path: '/',
        component: Home,
        name: '線上報修系統',
    },
    {
        path: '/reports/new',
        component: NewReport,
        name: '填寫報修單',
        beforeEnter: auth
    },
    {
        path: '/login',
        component: Login,
        name: '登入',
        beforeEnter: is_login
    },
    {
        path: '/logout',
        component: Logout,
        name: '登出',
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
