<template>
  <div id="app">
    <h1>商品信息</h1>
    <el-container>
      <el-header>
        <el-menu mode='horizontal'>
          <el-menu-item index='1'>
            logo
          </el-menu-item>
          <el-menu-item index='2'>
            <router-link to='/'>
              首页
            </router-link>
          </el-menu-item>
          <el-menu-item index='3' style="float: right;">
            <router-link to="/cart">
              <i class="el-icon-shopping-cart-1"></i>
            </router-link>
          </el-menu-item>
        </el-menu>

      </el-header>
      <!-- 切换页面的渲染 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>


  </div>
</template>

<script>

  export default {
    data() {
      return {

      }
    },
    methods: {
      


    }

  }

</script>

<style>

</style>
