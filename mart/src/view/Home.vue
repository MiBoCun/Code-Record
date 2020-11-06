

<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="(item, index) in goods" :key="index">
        <el-card>
          <img :src="item.img" />
          <div>
            <span>{{ item.text }}--{{ item.price }}</span>
            <el-button @click="addCart(item)"></el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      goods: [],
    };
  },
  async created() {
    let ret = await axios.get("/api/goods");
   
    this.goods = ret.data.data;
  },
  methods: {
    addCart(item) {
      this.$store.commit('addCartMuta',item)
    
   
   }
    
  }
 
};
</script>

<style>
</style>
