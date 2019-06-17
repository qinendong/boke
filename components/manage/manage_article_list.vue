<template>

      <el-col :span="4" class="manage_article_list">

        <el-menu
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      
      <nuxt-link to="/manage">
       <el-menu-item index="/manage">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
           </el-menu-item>
           </nuxt-link>
      

      
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据管理</span>
        </template>
<el-menu-item-group>
<nuxt-link to="/manage/bokeuser">
    <el-menu-item index="/manage/bokeuser" >普通用户列表</el-menu-item>
    </nuxt-link>
    <nuxt-link to="/manage/admin">
    <el-menu-item index="/manage/admin">管理员列表</el-menu-item>
    </nuxt-link>
    <nuxt-link to="/manage/wenzhang">
    <el-menu-item index="/manage/wenzhang">文章列表</el-menu-item>
    </nuxt-link>
    <nuxt-link to="/manage/jiaocheng">
    <el-menu-item index="/manage/jiaocheng">教程列表</el-menu-item>
    </nuxt-link>
</el-menu-item-group>

</el-submenu>
<el-submenu index="3">
    <template slot="title">
          <i class="el-icon-location"></i>
          <span>添加数据</span>
        </template>
    <el-menu-item-group>
       <nuxt-link to="/manage/addwenzhang">
           <el-menu-item index="2-1">新增文章</el-menu-item>
       </nuxt-link>
       <nuxt-link to="/manage/addposts">
        <el-menu-item index="2-2">新增教程</el-menu-item>
        </nuxt-link>
    </el-menu-item-group>

</el-submenu>

    <el-menu-item index="4">
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
</el-menu-item>

<el-menu-item index="5">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
</el-menu-item>
</el-menu>
  </el-col>


</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
    .manage_article_list{}
</style>