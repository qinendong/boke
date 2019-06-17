<template>
    <div class="header">
        
    <el-row :gutter="10" class="header-box">
  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"  class="hidden-sm-and-down"> 
      <nuxt-link to="/"><h2>小秦个人博客搭建</h2></nuxt-link>
      </el-col>
      
      
      
  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="11" class="hidden-sm-and-down"> 
   <ul>
      <li> <nuxt-link style="float: right;" to="/login" v-show="!isLogin"><span>登陆</span></nuxt-link></li>
       <li><nuxt-link style="float: right;" to="/register" v-show="!isLogin"><span>注册</span></nuxt-link> </li>
       <li>
            <a style="float: right;"  v-show="isLogin" @click="layout"><span>退出</span></a>
       </li>
       <li>
           
      <nuxt-link style="float: right;" to="/" v-show="isLogin"><span>{{name}}</span></nuxt-link>
     
       </li>
       <li>
            <nuxt-link  to="/" class="show" style="float: right;">
        <span class="picture" :style="'backgroundImage:url('+headerImage+')'"></span>
      </nuxt-link>
       </li>
       <li>
           
        <nuxt-link style="float: right;" to="/markdown" ><span>发布文章</span></nuxt-link>
       </li>
   </ul>
    
        </el-col>


    <el-col :xs="6" :sm="6" :md="12" :lg="12"   class="hidden-md-and-up" style="text-align: center;"> 
      <div @click="setting_list"><span style="margin: 0 auto;"><i class="el-icon-menu" style="font-size: 18px;"></i></span></div>
      </el-col>
      
<el-col :xs="12" :sm="12" :md="12" :lg="12" class="hidden-md-and-up"> 
      <nuxt-link to="/" style="text-align: center;"><h2>小秦个人博客搭建</h2></nuxt-link>
      </el-col>
      
<el-col :xs="6" :sm="6" class="hidden-md-and-up" style="text-align: center;"> 
      <div @click="setting_s"><span style="margin: 0 auto;"><i class="el-icon-setting" style="font-size: 18px;"></i></span></div>
      </el-col>



</el-row>
   
 <el-row :gutter="10" class="header_left" v-show="setting">
       <ul>
       <li>
           <el-input placeholder="请输入内容" v-model="input" class="input-with-select" size="medium" style="width: 90%;">
                
                <el-button @click="submit" slot="append" icon="el-icon-search"></el-button>
            </el-input>
       </li>
        <li> <nuxt-link style="" to="/login" v-show="!isLogin"><span>登陆</span></nuxt-link></li>
       <li><nuxt-link style="" to="/register" v-show="!isLogin"><span>注册</span></nuxt-link> </li>
       
       <li>
           
      <nuxt-link style="" to="/" v-show="isLogin"><span>{{name}}</span></nuxt-link>
       </li>
       <li>
            <a style=""  v-show="isLogin" @click="layout"><span>退出</span></a>
       </li>
       <li>
           
        <nuxt-link style="" to="/markdown" ><span>发布文章</span></nuxt-link>
       </li>
       </ul>
        </el-row>
        
        


     <div style="width: 45%;height: 87%; position: fixed;top: 100px;left: 0;z-index: 100;" v-show="activeLeft_ok">
       <article_list></article_list>
   
   </div>
   
    </div>
</template>

<script>
  import Bus from '~/plugins/bus.js';
  import article_list from '~/components/archive/article_list.vue'
export default{
    data(){
        return{
            isLogin:"",
            isLogin_admin:"",
            name:"",
            name1:"",
            setting:false,
            input:"",
            activeLeft_ok:false,
            headerImage:""
        }
    },
    methods:{
        lalal(){
            this.$emit("allsad","页面刷新一边")
            console.log(1)
        },
        layout(){
			sessionStorage.clear()//登出清除所有数据
            window.location.reload();
		},
        setting_s(){
            
            this.setting= !this.setting 
        },
         submit(){
                Bus.$emit("select",this.input)
            },
        setting_list(){
            this.$emit("lala" , "45%")
            this.activeLeft_ok= !this.activeLeft_ok
        },
        
    },
    mounted(){
		//显示提示弹框
		
		if(sessionStorage.getItem("Token")){
			this.$store.dispatch("setUser", sessionStorage.getItem("Token"));
            this.$store.dispatch("setimg", sessionStorage.getItem("Iamge"));
            console.log($nuxt.$route.path);
            if($nuxt.$route.path=="/login"){
                this.$message('登陆成功');
                this.$router.push({path:'/'})
            }
            
		}
        if(sessionStorage.getItem("Token_admin")){
			this.$store.dispatch("admin_setUser", sessionStorage.getItem("Token_admin"));
            
            console.log($nuxt.$route.path);
            if($nuxt.$route.path=="/manage_login"){
                this.$message('登陆成功');
                this.$router.push({path:'/manage'})
            }
            
		}
        
        
		this.isLogin = this.$store.state.isLogin
        this.isLogin_admin = this.$store.state.isLogin_admin
		console.log("isLogin :"+this.$store.state.isLogin)
		console.log("token :"+this.$store.state.token)
        this.name=`欢迎：${this.$store.state.token}`;
        this.headerImage=this.$store.state.image;
        this.name1=`欢迎：${this.$store.state.token_admin}`;
		
	},
    components:{
		'Aplayer':process.client ? require('vue-aplayer') :null,
        article_list
	}
    
}

</script>
<style lang="scss" scoped>
@import "~/assets/styles/mixin.scss";
    .header{
        /*position: fixed;top: 0px;left: 0px;*/
        z-index: 1000;
        @include wh(100%,80px);
        
         background-image: linear-gradient(to top, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.5) 100%);
        .header-box{
            /*@include wh(75em,80px);*/
            
            margin: 0 auto;
            @media (max-width:430px){
            h2{
                line-height: 40px !important;font-size: 22px!important;margin-left: 20px!important;font-weight: bold;
            }
        }
              @media (max-width:390px){
            h2{
                line-height: 40px !important;font-size: 18px!important;margin-left: 20px!important;font-weight: bold;
            }
        }   @media (max-width:350px){
            h2{
                line-height: 40px !important;font-size: 16px!important;margin-left: 20px!important;font-weight: bold;
            }
        }
            
            h2{
                line-height: 80px !important;
                margin-left: 40px;
             
        
            display: block;
            
            /*渐变背景*/
            background-image: -webkit-linear-gradient(left, #3498db, 
            #3498db 40%, #3498db 50%, #3498db 60%,#3498db 80%,rgba(52,152,219,0.5) 90%, #3498db);
            color: transparent; /*文字填充色为透明*/
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;          /*背景剪裁为文字，只将文字显示为背景*/
            background-size: 200% 100%;            /*背景图片向水平方向扩大一倍，这样background-position才有移动与变化的空间*/
            /* 动画 */
            animation: masked-animation 4s infinite linear;
                 @keyframes masked-animation {
            0% {
                background-position: 0 0;   /*background-position 属性设置背景图像的起始位置。*/
            }
            100% {
                background-position: -100% 0;
            }
        
    

            }
                
        }
            
            span{
                
                line-height: 80px;margin-right: 40px;
            }
       
        }
        .header_left{
            background:#fff;
            z-index: 100;
            ul{
                li{
                    text-align: center;
                    line-height: 30px;
                    margin: 10px 0;
                }
            }
        }
    }
    
    .show {
  width: 50px;
  height: 50px;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
  border: 0px solid #d5d5d5;
        display: inline-block;
        top: 15px;right: 15px;
}
.picture {
  width: 100%;
  height: 100%;
  overflow: hidden;
    display: inline-block;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover; 
}
</style>