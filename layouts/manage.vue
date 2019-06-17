<template>
  <el-container>
  
   <el-header><manage_header @allsad="asd"></manage_header>
   </el-header>
   
   <el-main style="margin-top: 20px;height: 100%;
    width: 100%;">
   
         <el-row class="tac" :gutter="20" style="height: 100%;">
 
<manage_article_list></manage_article_list>

    
 <nuxt/>



</el-row>
      </el-main>
      
      

  </el-container>
</template>
<script>
import manage_header from '~/components/archive/manage_header.vue'
import manage_article_list from '~/components/manage/manage_article_list.vue'
    export default{
        components:{
            manage_header,
            manage_article_list

        },
        methods:{
            asd(v){
                console.log(v)
            }
        }
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
    body{height: 100%;}
    #__layout{height: 100%;}
    .el-container{height: 100%;}

</style>
