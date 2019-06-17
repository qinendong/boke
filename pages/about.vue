<template>
	
	<div class="about">
		<p><i class="fa fa-qq"></i></p>
		<nuxt-link to="/">跳转到首页</nuxt-link>
		<input type="text" v-model="text_url">
		<p>{{text_url}}</p>
		<input type="file" ref="file">
		<button @click="fileUrl">获取file文件地址</button>
		<button @click="baidu">百度sdk</button>
		<span><i class="iconfont icon-vue"></i></span>
		
		<div v-show="!isLogin" style="display: inline-block;">
				<button @click="login">登录测试</button>
				</div>
			    <div v-show="isLogin" style="display: inline-block;">
				<button @click="layout">退出登录</button>
				<span>欢迎：{{username}}</span>
			    </div>
			    <p>{{baiduwz}}</p>
<child @lala="laalal"></child>
<!--<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>-->


<el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

<aplayer autoplay  listFolded repeat="list" listMaxHeight="500px"  preload="auto" 
  :music="{
    title: '123我爱你',
    artist: '新乐尘符',
    src: 'http://api.bzqll.com/music/netease/url?id=526307800&key=579621905',
    pic: 'http://api.bzqll.com/music/netease/pic?id=526307800&key=579621905',
    lrc: 'http://api.bzqll.com/music/netease/lrc?id=526307800&key=579621905'
    }"
    
  
/>
<button @click= "music">音乐</button>
{{aaaaa}}
<audio ref="music" loop autoplay> 
      <source src="http://sc1.111ttt.cn:8282/2018/1/03m/13/396131232171.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3" type="audio/mpeg">
    </audio>

	</div>

</template>

<script>
/*import axios from 'axios'
import qs from 'qs'*/

/*            if (process.client) {
                console.log(process.client)
            require('vue-aplayer')
                
        }*/

import {login} from '~/api/api.js'
import store from '~/store/index.js'
import child from '../views/child.vue'
    import {baidusdk} from '~/api/api.js'
    import qs from 'qs'
    import axios from "axios"
export default{
	data(){
		return{
			items:"",
			isLogin:this.$store.state.isLogin,
			username:"",
            baiduwz:"",
            text_url:"http://pagead2.googlesyndication.com/simgad/3972578830273919972?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnlrXbKtwcTK2Y0Hg53IXb2A3pK5w",
            fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
            imageUrl: '',
            aaaaa:""
		}
	},
    components:{
        child,
        'Aplayer':process.client ? require('vue-aplayer') :null,
    },
    
	methods:{
		laalal(d){
            console.log(d)
        },
		login(){
			let data={
				key:"00d91e8e0cca2b76f515926a36db68f5",
				phone:"13843074437",
				passwd:"123456"
			}
			
			//封装请求
			login({data}).then((res)=>{
				//console.log(res.data)
				
				this.$store.dispatch("setUser", res.data.data.key); 
				
				console.log("登录状态 ：" + this.$store.state.isLogin)
				
			}).catch((err)=>{
				console.log(err)
			})
			
			//接口请求
			/*
			axios.post('/login.vuelogin',qs.stringify({data}))
				.then((res)=>{
				console.log(res.data)
			}).catch((err)=>{
				console.log(err)
			})*/
			
		},
		layout(){
			sessionStorage.clear()//登出清除所有数据
		},
        baidu(){
              let data = {
           url:this.text_url
       }
         
           axios.post('/api/baidusdk',qs.stringify(data)).then((res)=>{
             this.baiduwz = res.data
           })
        },
        
        music(){
      
         
           axios.get('http://47.107.251.207:3001/top/list?idx=1').then((res)=>{
             this.aaaaa = res
           })
        },
        
        
        
        fileUrl(){
            console.log(this.$refs.file.files)
        },
handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }

		
	},
	
	mounted(){
		this.$message('mounted执行完毕');//显示提示弹框
		
		if(sessionStorage.getItem("Token")){
			this.$store.dispatch("setUser", sessionStorage.getItem("Token"));
		}
		this.isLogin = this.$store.state.isLogin
		/*console.log("isLogin :"+this.$store.state.isLogin)
		console.log("token :"+this.$store.state.token)*/
		
	},
	created(){
	
	},
	 
}

</script>


<style lang="scss" >

	.about{
		p{
			
			&:nth-child(odd){
				color: darksalmon;
				/*偶数*/
                 
			}
			
			&:nth-child(even){
				color: darkviolet;
				/*奇数*/
			}
		}
		a{
			&:hover{
				color:darkkhaki;
			}
		}
	}

	
	
</style>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
