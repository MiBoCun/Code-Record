import Vue from "vue"
import VueRouter from 'vue-router'
import Home from './view/Home'
import Cart from './view/Cart'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [{
        path:'/',
        component:Home,
        name:'home'
    },
    {
        path:'/cart',
        component:Cart,
        name:'cart'
    },
    ]
})
export default router