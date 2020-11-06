<template>
    <div>
        <cart-view :mycart='carts' @increaseCart='increaseCart' @reduceCart='reduceCart'></cart-view>   
    </div>
</template>

<script>
    import cartView from '../components/Cart'
    export default({     
       components:{cartView},
       data() {
           return {
               carts:[]

           }
       },
       methods: {
            increaseCart (ind) {        
        this.carts[ind].count++
        
       },
        reduceCart (ind) {    
        let msg = "确认删除吗？"
        let item =this.carts[ind].count
        if (item > 1) {
          this.carts[ind].count--
        }else{
          if (confirm(msg,true)) {
            this.carts.splice(ind,1)
          } 
        }
      }      
       }
    })


</script>

<style>


</style>