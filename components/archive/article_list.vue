<template>
   <div class="article_list">
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      
      text-color="#fff"
      active-text-color="#ffd04b"
       @select="handleSelect">


      <nuxt-link to="/"><el-menu-item index="/">
         <i class="el-icon-location"></i>
          <span slot="title">首页</span>
      </el-menu-item></nuxt-link>
      <nuxt-link to="/project"><el-menu-item index="/project">
        <i class="el-icon-menu"></i>
          <span slot="title">技术栈</span>
      </el-menu-item></nuxt-link>
      
      <nuxt-link to="/echarts">
      <el-menu-item index="/echarts">
        <i class="el-icon-document"></i>
        <span slot="title">ECharts</span>
      </el-menu-item>
        </nuxt-link>
        
        <a href="https://www.aliyun.com/?utm_content=se_1000301881">
      <el-menu-item index="4">
        <i class="el-icon-bell"></i>
        <span slot="title">阿里云</span>
      </el-menu-item>
      </a>
        
         <nuxt-link to="/imgai">
      <el-menu-item index="/imgai">
        <i class="el-icon-document"></i>
        <span slot="title">图片识别</span>
      </el-menu-item>
        </nuxt-link>
        
         <nuxt-link to="/music">
      <el-menu-item index="/music">
        <i class="el-icon-document"></i>
        <span slot="title">音乐播放器</span>
      </el-menu-item>
        </nuxt-link>
        
        <nuxt-link to="/map">
      <el-menu-item index="/map">
        <i class="el-icon-document"></i>
        <span slot="title">关于作者</span>
      </el-menu-item>
        </nuxt-link>
        
    </el-menu>
    <el-row type="flex" class="row-bg xbq" justify="space-around">
  <el-col :span="6"><div class="grid-content bg-purple" style="text-align: center;">
    <nuxt-link  tag="a" target="_blank" to="/manage">
         <i class="el-icon-setting"></i>
      <p>管理</p>
    </nuxt-link>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light" style="text-align: center;">
    <nuxt-link to="/map">
     <i class="el-icon-more"></i>
      <p>关于</p>
      </nuxt-link>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple" style="text-align: center;">
     <i class="el-icon-edit"></i>
      <p>评论</p>
  </div></el-col>
</el-row>
    </div>
</template>


<script>
export default{
   
    methods:{
    handleSelect(key, keyPath){
        console.log(key, keyPath)
    }
}
}


</script>


<style lang="scss" scoped>
    @import "~/assets/styles/mixin.scss";
    .article_list{
       height: 100%;background: #fff;position: relative;
        span{
            color: $fz;
        }
        .xbq{width: 100%;background: #fff;height: 40px;
            position: absolute;bottom: 20px;
            .grid-content{line-height: 20px;
                a{color:$fz;
                    &:hover{
                        color: #3084bb;
                    }
                }
            }
        }
        
        
    }
</style>