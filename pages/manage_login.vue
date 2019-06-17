<template>

    
    <el-row type="flex" class="row-bg form_login" justify="center">
  <el-col :xs="18" :sm="12" :md="6" :lg="6" :xl="6">
     <div class="login">
      <h2>管理员登陆</h2>
      <el-input v-model="phone" placeholder="请输入手机号"></el-input>
    <el-input v-model="pwd" placeholder="请输入密码" type="password"></el-input>
    <el-input v-model="num" placeholder="请输入管路员唯一标识码"></el-input>
    <el-button type="primary" @click="tijiao" style="width: 100%;">登陆</el-button>
      
  </div></el-col>

</el-row>
    
    
     
 
    
    
</template>
<script>
import {manage_login} from '~/api/api.js'
export default{
    layout:"login",
    data(){
        return{
            phone:"",
            pwd:"",
            num:""
        }
    },
    methods:{
       tijiao(){
           let data = {
           phone:this.phone,
           password:this.pwd,
               num:this.num
           
       }
           //console.log(data);
           console.log(this.$store.state.isLogin_admin);
          manage_login(data).then((res)=>{
              console.log(res.data.rows[0])
             if(res.data.rows[0]){
                this.$store.dispatch("admin_setUser", res.data.rows[0].name); 
                //this.$router.go(0);
                //this.$router.push({path:'/manage/index'})//跳转回首页 
                 //alert("登陆成功")
                window.location.reload(); 
                 console.log(this.$store.state.isLogin_admin);
                
                 
             }else{
                 alert("登陆失败")
             }
              
                  
              
          })
       } 
    },

    
}


</script>
<style lang="scss" scoped>
    .el-row{margin: 0;}
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