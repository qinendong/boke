<template>
  <el-container style="height: 100%;">
  
   <el-header style="height: 13%;position: fixed;
    width: 100%;z-index: 100;"><header_box @allsad="asd" @lala="content_left"></header_box>
   </el-header>
   
  
 
   <div :style="{ left: activeLeft}" class="default">
   
   <header_top></header_top>  
       <section class="container page" style="height: 100%;">
       
<el-row :gutter="20" style="height: 100%;">
 
      <el-row :gutter="20" style="height: 100%;">
  <el-col :sm="8" :xs="12" :lg="5" :md="5" class="box3 hidden-sm-and-down" style="height: 100%;"><div style="height: 100%;">
    <!--侧边栏-->
<article_list></article_list>
 
  </div></el-col>
  <el-col :lg="13" :md="13" :sm="24" :xs="24" class="box"><div>
     <nuxt/>
  </div></el-col>
  <el-col :lg="6" :md="6" style="height: 100%;"><div class="box">
      <article_right></article_right>

  </div></el-col>
  
  
</el-row>




</el-row>
    
  </section>
     
     
      </div>
      
      

  </el-container>
</template>
<script>
import header_box from '~/components/archive/header.vue'
import article_right from '~/components/archive/article_right.vue'
    import article_list from '~/components/archive/article_list.vue'
        import header_top from '~/components/archive/header_top.vue'
    
    export default{
        data(){
            return{
                activeLeft:"",
                //activeLeft_ok:false
            }
        },
        components:{
            header_box,
            article_list,
            article_right,
            header_top

        },
        methods:{
            asd(v){
                console.log(v)
            },
            content_left(data){
                console.log(data)
                //this.activeLeft = data
                //this.activeLeft_ok = !this.activeLeft_ok
            }
        },
        
    }
    
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
             .box2{
        height: 80%
    } 
          .box1{
        height: 100%
    } 

    .el-header{padding: 0;}
      .box::-webkit-scrollbar {
        display: none;
    }
    .box{height: 100%;overflow: scroll;}
 @media (max-width:992px){
            .box{
                height: auto;
            }
        }
    .default{
        height: 82%;margin-top: 100px;
    }
</style>
