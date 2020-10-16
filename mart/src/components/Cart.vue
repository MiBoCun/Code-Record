<template>
    <div>   
    <h1>购物车</h1>
    <table border="2">
        <tr>
            <th>名称</th>
            <th>单价</th>
            <th>数量</th>
            <th>总价</th>
            <th>操作</th>
        </tr>
        <tr v-for="(c,index) in mmm" :key="index">
            <td>{{c.text}}</td>
            <td>{{c.price}}</td>
            <td>{{c.count}}</td>
            <td>{{c.count * c.price}}</td>
            <button @click="addCount(index)">+</button>
            <button @click="deleteCount(index)">-</button>
        </tr>
        <p>总价{{total}}元</p>
    </table>
</div>
</template>
<script>
    export default {
        props: ['mmm'],
        data() {
            return {

            }
        },
        computed: {
            total () {
                return this.mmm.reduce((sum,v) => {
                    return sum + v.price * v.count
                },0)
            }
        },
        methods: {
            addCount(i) {
                this.$emit("em-add",i)          

            },
            deleteCount(i) {
                this.$emit("em-del",i)             
                
            }
        }
    }

</script>
<style>


</style>
