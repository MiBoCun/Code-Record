<template>
    <div>
        <h1>首页</h1>
        <el-row>
            <el-col :span="6" v-for="(item,index) in goods" :key="index">
                <el-card>
                    <img :src="item.img">
                    <div>
                        <span>{{item.text}}</span>
                        <el-button type="text" class="button">
                            <i class="el-icon-plus" @click="addCart(index)"></i>
                        </el-button>
                    </div>                    
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data() {
            return {
                goods: [

                ]
            }
        },
        async created() {
            let ret = await axios.get('api/goods')
            console.log(ret)
            this.goods = ret.data.data
        },
        methods: {
            addCart(i) {
                let item = this.goods[i]
                let good = this.carts.find(v => {
                    return v.text === item.text
                })
                if (good) {
                    good.count += 1
                } else {
                    this.carts.push({
                        ...item,
                        count: 1
                    })
                }
            }

        },
    }

</script>
<style>


</style>
