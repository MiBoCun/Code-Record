<template>
    <div>
        <h1>购物车</h1>
        <CartCom :mmm="carts" @em-add="emAdd" @em-del="emDel"></CartCom>
    </div>
</template>
<script>
    import CartCom from '../components/Cart'
    export default {
        components: {
            CartCom
        },
        data() {
            return {
                carts: []
            }
        },
        methods: {
            emAdd(i) {
                this.carts[i].count += 1;
            },
            emDel(i) {
                let count = this.carts[i].count
                if (count != 1) {
                    this.carts[i].count -= 1
                } else {
                    let msg = "确认要从购物车删除吗？"
                    if (confirm(msg) === true) {
                        this.carts.splice(i, 1)
                    }

                }
            }
        },
    }

</script>
<style>


</style>
