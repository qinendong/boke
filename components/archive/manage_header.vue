<template>
    <div class="header">
        
    
    <div class="header-box">
       <nuxt-link to="/" style="float: left;"><h2>小秦个人博客搭建</h2></nuxt-link>
<!--    <nuxt-link style="float: right;" to="/login" v-show="!isLogin"><span>登陆</span></nuxt-link>
    <nuxt-link style="float: right;" to="/register" v-show="!isLogin"><span>注册</span></nuxt-link>
    
    
      <a style="float: right;"  v-show="isLogin" @click="layout"><span>退出</span></a>
      <nuxt-link style="float: right;" to="/" v-show="isLogin"><span>{{name}}</span></nuxt-link>
        <nuxt-link style="float: right;" to="/markdown" ><span>发布文章</span></nuxt-link>-->
        
        
        
        
        <nuxt-link style="float: right;" to="/mabage_login" v-show="!isLogin_admin"><span>管理员登陆</span></nuxt-link>
    
        
     <a style="float: right;"  v-show="isLogin_admin" @click="layout"><span>退出</span></a>
      <nuxt-link style="float: right;" to="/" v-show="isLogin_admin"><span>{{name1}}</span></nuxt-link>
       
        
        

    </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            isLogin:"",
            isLogin_admin:"",
            name:"",
            name1:""
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
		}
        
    },
    mounted(){
		//显示提示弹框
		
		if(sessionStorage.getItem("Token")){
			this.$store.dispatch("setUser", sessionStorage.getItem("Token"));
            
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
        this.name1=`欢迎：${this.$store.state.token_admin}`;
		
	}
    
}

</script>
<style lang="scss" scoped>
@import "~/assets/styles/mixin.scss";
    .header{
        position: fixed;top: 0px;left: 0px;
        z-index: 1000;
        @include wh(100%,80px);
        
         background-image: linear-gradient(to top, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.5) 100%);
        .header-box{
            /*@include wh(75em,80px);*/
            margin: 0 auto;
            @media (max-width:400px){
            h2{
                line-height: 40px !important;font-size: 25px!important;margin-left: 20px!important;
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
    }
    
    

</style>