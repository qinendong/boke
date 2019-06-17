<template>

    
    <el-row type="flex" class="row-bg form_login" justify="center">
  <el-col :xs="18" :sm="12" :md="6" :lg="6" :xl="6">
     <div class="login">
      <h2>欢迎登陆</h2>
      
      
      <el-input v-model="phone" placeholder="请输入手机号"></el-input>
    <el-input v-model="pwd" placeholder="请输密码" type="password"></el-input>
    
    <el-button type="primary" @click="tijiao" style="width: 100%;">登陆</el-button>
      
  </div></el-col>

</el-row>
    
    
     
 
    
    
</template>
<script>
import {login} from '~/api/api.js'
export default{
    layout:"login",
    data(){
        return{
            phone:"13843074437",
            pwd:"123456"
        }
    },
    methods:{
       tijiao(){
           let data = {
           phone:this.phone,
           password:this.pwd,
           
       }
           //console.log(data);
          login(data).then((res)=>{
              console.log(res.data.rows[0])
             if(res.data.rows[0]){
                 //console.log(1)
                this.$store.dispatch("setUser", res.data.rows[0].name);
                 this.$store.dispatch("setimg", res.data.rows[0].image);
                 console.log(res.data.rows[0].image)
                //this.$router.go(0);
                //this.$router.push({path:'/'})//跳转回首页 
                window.location.reload(); 
                 //this.$router.replace({path:'/'})
             }else{
                 this.$message('用户名密码错误');
             }
                 
             
              
                  
              
          })
       } 
    },

    
}


</script>
<style lang="scss" scoped>
    .form_login{
        margin-top: 5%;
    .login{
        
        text-align: center;
        .el-input{
            margin-top: 20px;
        }
        .el-button{
            margin-top: 20px;
        }
    }
        }
</style>