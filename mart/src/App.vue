<template>
  <div id='app'>
    <el-container>
      <el-header>
        <el-menu  mode="horizontal">
          <el-menu-item index='1'>logo</el-menu-item>
          <el-menu-item index='2'>
            <router-link to='/'>首頁</router-link>
          </el-menu-item>
          <el-menu-item index='3' style="float: right;">
            <router-link to='/cart'>
              <el-badge :value="cartsTol">
                <i class="el-icon-shopping-cart-2"></i>
              </el-badge>              
            </router-link>
          </el-menu-item>
        </el-menu>

      </el-header>
      <el-main>
        <p>{{$route.name}}</p>
          <router-view></router-view>
      </el-main>
    </el-container>    
    
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default({   
    data () {
      return {
         
      }
    },   
    computed: {
      ...mapGetters({
        cartsTol:'cartsTotal'
      })
    },
    methods: {   
             
      
    }
  })
</script>

<style>
  span{
    width: 200px;
    display: inline-block;
  }

</style>
