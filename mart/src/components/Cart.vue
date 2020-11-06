<template>
  <div>
    <h2>购物车</h2>
    <table border="1">
      <tr>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
      <tr v-for='(cart,index) in carts' :key='index'>
        <td>{{cart.text}}</td>
        <td>{{cart.price}}</td>
        <td>{{cart.count}}</td>
        <td>{{cart.price * cart.count}}</td>
        <td>
          <button @click='increaseCart(index)'>+</button>
          <button @click='reduceCart(index)'>-</button>
        </td>
      </tr>
      <tr>
        <td colspan="5">总价：{{total}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default ({

    computed: {
      ...mapState({
        carts: state => state.carts
      }),
      total: function () {
        return this.carts.reduce((sum, v) => {
          return sum += v.price * v.count
        }, 0)

      }
    },

    methods: {
      increaseCart(ind) {
      //  this.$emit('increaseCart', ind)
      this.$store.commit('increaseCart',ind)

      },
      reduceCart(ind) {
      //  this.$emit('reduceCart', ind)
      this.$store.commit('reduceCart',ind)

      }
    },
  })

</script>

<style>

</style>
