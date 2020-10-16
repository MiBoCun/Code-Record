import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

let sotre = new Vuex.Store({
    state:{
        carts:JSON.parse(localStorage.getItem('carts'))
    }
})