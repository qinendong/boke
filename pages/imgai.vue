<template>
  
  <el-tabs v-model="activeName" @tab-click="handleClick" style="background: #fff;padding: 10px 30px;">
   
    <el-tab-pane label="网络图片文字识别" name="first">
        <el-input type="text" v-model="imgfile"  placeholder="请输入网络图片地址">
         <template slot="prepend">Http://</template>
        </el-input>

        <p style="display: none;">{{imgfile}}</p>
        <el-button type="primary" @click="submit">图像识别</el-button>
        
        <p style="display: none;">{{reversedMessage}}</p>
        <el-input type="textarea" v-model="desc" :rows="7"></el-input>
       
                 <el-alert
    title="本识别方式为百度通用文字识别，识别精度较低。请不要用作重要文件识别！"
    type="info">
  </el-alert>
       
<!--        <ul>
           <li v-for="item in baiduwz">
               <p>{{item.words}}</p>
           </li>
       </ul>-->
    </el-tab-pane>
    
    <el-tab-pane label="本地图片文字识别" name="second">
      
           <el-form id="importModel" enctype="multipart/form-data">
           <el-form-item label="本地图片">
            <el-input type="file" name="imgUploader" multiple v-model="typefile" id="file"/>
                <el-button type="primary" @click="shangchuan">上传</el-button>
                <p style="display: none">{{imageurl}}</p>
                <el-button type="primary" @click="submit1">识别</el-button>
                <p style="display: none;">{{reversedMessage1}}</p>
                <el-input type="textarea" v-model="desc1" :rows="7"></el-input>
       </el-form-item>
            </el-form>
                             <el-alert
    title="本识别方式为百度通用文字识别，识别精度较低。请不要用作重要文件识别！"
    type="info">
  </el-alert>
    </el-tab-pane>
    
  </el-tabs>        
       
  
    
</template>
<script>
    import axios from "axios"
    import qs from 'qs'
export default{
    data(){
        return{
            imgfile:"http://pagead2.googlesyndication.com/simgad/3972578830273919972?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnlrXbKtwcTK2Y0Hg53IXb2A3pK5w",
            baiduwz:Array,
            baiduwz1:Array,
             activeName: 'first',
            desc:"",
            desc1:"",
            imageurl:"",
              typefile:""
            
        }
    },
    computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
        var str = ""
        for(var words in this.baiduwz){
            //console.log(key)
           str += this.baiduwz[words].words + "\n"

            console.log(typeof(this.baiduwz[words].words))
            
            
        }
        
      return this.desc = str
    },
            reversedMessage1: function () {
      // `this` 指向 vm 实例
        var str1 = ""
        for(var words in this.baiduwz1){
            //console.log(key)
           str1 += this.baiduwz1[words].words +"\n"

            console.log(this.baiduwz1[words].words)
            
            
        }
            
        
      return this.desc1 = str1
    }
  },
    methods:{
        submit(){
    console.log(1);
                 
              let data = {
           url:this.imgfile
       }
         
           axios.post('/api/baidusdk',qs.stringify(data)).then((res)=>{
               //妈的这个返回的是一个字符窜，需要转化成json形式
             this.baiduwz = JSON.parse(res.data.data).words_result
               console.log(res.data)
               this.desc = res.data.data
           })
            
        
},
        
        submit1(){
                 let data = {
           url:this.imageurl
       }
            axios.post('/api/baidusdk_ty',qs.stringify(data)).then((res)=>{
               //妈的这个返回的是一个字符窜，需要转化成json形式
             this.baiduwz1 = JSON.parse(res.data.data).words_result
               console.log(res.data)
               this.desc1 = res.data.data
           })
        },
        
        
        handleClick(tab, event) {
        console.log(tab, event);
      },
        shangchuan(){
            //alert(1);
            
         var oFile = document.getElementById('file'); 
            
                if(oFile.value == ""){ 
                  this.$message('请选择图片文件');
                    return
                } 
             
            
            
        var formData = new FormData($("#importModel")[0]);
        
        $.ajax({
        type : 'post',
        url : '/api/baidu_Upload',
        dataType : 'json',
        data : formData,
        contentType: false, 
        processData: false, 
        success:((res)=>{
            console.log(res)
            this.imageurl = res
            this.$message('上传成功');
        })
    });

        }
          
    }
}


</script>
<style scoped>
    .el-input{margin-bottom: 20px;}
    .el-button{margin-bottom: 20px;}
    .el-textarea{margin-bottom: 20px;}
</style>