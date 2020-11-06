import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let store = new Vuex.Store ({
    state:{
        carts:JSON.parse(localStorage.getItem('carts')) || []
    },
    mutations:{
        increaseCart (state,ind) {
            state.carts[ind].count++ 
        },
        reduceCart (state,ind) {
            let curCount = state.carts[ind].count
            if (curCount !== 1) {
                state.carts[ind].count--
            }else{
                alert('最少购买一件哦')
            }
        },
        addCartMuta (state,item) {
            let good = state.carts.find((n) => n.text == item.text);
            if (good) {
              good.count++;
            } else {
                state.carts.push({ ...item, count: 1 });
            }
        }
    },
    getters:{
        cartsTotal:state =>{
            let sum = 0
            state.carts.forEach(v => {
                sum +=v.count
            })
            return sum
           
        }
    }

})
store.subscribe((mutations,state) => {
    localStorage.setItem('carts',JSON.stringify(state.carts))
})
export default store