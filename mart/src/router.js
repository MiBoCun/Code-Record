import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './view/Home'
import Cart from './view/Cart'

Vue.use(VueRouter)

let router = new VueRouter({
    routers: [{
            path: '/',
            components: Home,
            name: 'name'
        },
        {
            path: '/cart',
            components: Cart,
            name: 'cart'

        }

    ]
})
export default router