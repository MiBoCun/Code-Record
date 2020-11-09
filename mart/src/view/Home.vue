

<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="(item, index) in goods" :key="index">
        <el-card>
          <img :src="item.img" />
          <div style="padding: 14px;">
            <span>{{ item.text }}--{{ item.price }}</span>
            <el-button type='text' class="button" style="display:inline-block">
              <i class="el-icon-circle-plus" @click="addCart($event,item)"></i>
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="ball-wrap">
      <transition 
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
        <div class="ball" v-show="ball.show">
           <div class="el-icon-circle-plus"></div>  
        </div>         
      </transition>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      goods: [],
      ball:{
        show:false,
        el: ''
      }
    };
  },
  async created() {
    let ret = await axios.get("/api/goods");   
    this.goods = ret.data.data;
  },
  methods: {
    addCart($event,item) {
      console.log("$event:",$event)
      this.ball.el = $event.target
      this.ball.show = true
      this.$store.commit('addCartMuta',item)   
   },
    beforeEnter (el) {
      //小球移过来
      let dom = this.ball.el
      let rect = dom.getBoundingClientRect()
      let x = window.innerWidth - rect.left -50
      let y = rect.top - 20
      el.style.display = ''
      el.style.transform = `translate3d(-$(x)px, $(y)px, 0)`
      console.log("beforeEnter-el:",el)

    },
    enter (el,done){
      let dom = this.ball.el
      this._offset = document.body.offsetHeight
      el.style.transform = `translate3d(0, 0, 0)`
      el.addEventListener('transitionend',done)
      console.log("enter-el:",el)

    },
    afterEnter (el) {
      this.ball.show = false
      el.style.display = ''
      console.log("afterEnter-el:",el)

    }


  }
 
 
};
</script>
<style>
   .ball-wrap .ball{
     position: fixed;
     right:50px;
     top:20px;
     z-index:5;
     color:#f00;
     transition: all 4s linear;    
   }     
</style>
