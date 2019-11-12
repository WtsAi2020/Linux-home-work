import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../view/index';
import loginHome from '../view/loginHome';

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        name: '/404', 
        component: () => import ("../view/notFound/notFound.vue")
    },

    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/loginHome',
        name: 'loginHome',
        component: loginHome
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
