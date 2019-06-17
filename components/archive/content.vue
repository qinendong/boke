<template>
    <div class="box">
        
        <swipers :swiper="swiper"></swipers>
      
        <div class="content">
        
        <div v-for="item in content" class="content_item">
            <el-row :gutter="20">
  <el-col :span="10"><div style="overflow:hidden;">
      <img :src=item.image alt="">
  </div></el-col>
  <el-col :span="14"><div class="bg-purple">
     
      <nuxt-link :to="{name:'content-id',params:{id:item.id}}"><h3 @click="post_id(item.id)">{{item.title}}</h3></nuxt-link>
      
      <p :title=item.meta_description>{{item.meta_description | ellipsis}}</p>
      
      <p>
      <span class="el-icon-time">{{item.time.slice(0,10)}}</span>
      
      <span class="el-icon-view">{{item.counter}}</span>
      
      <span class="el-icon-edit">{{item.name}}</span>
      </p>
  </div>
  </el-col>
</el-row>
        </div>
        
       <div class="content_footer" v-if="content.length>0"><p>没有更多了</p></div> 
       <div class="content_footer" v-else><p>未查询到相关内容</p></div> 
        </div>
        
    </div>
</template>
<script>
import swipers from "~/components/swiper.vue"
export default{
    props:{
      content:Array,
        swiper:Array
    },
components:{
    swipers
},
    filters:{
        ellipsis(value){
            if (!value) return ''
            if(value.length > 50){
                return value.slice(0,50)+'...'
            }else{
                return value
            }
            
        }
    },
    methods:{
        getimg(v){
            let imgurl = `http://localhost:3000${v}`
            return imgurl
        },
        post_id(id){
            
            console.log(id)
            
        }
        
    }
}

</script>


<style lang="scss" scoped>
    @import "~/assets/styles/mixin.scss";
    .content{
        
        .content_item{
            margin:10px 0px;
            background: #fff;
            padding: 8px;
            transition: background 0.5s;
             &:hover{
                background: hsla(0,0%,77.3%,0.5); 
                 img{
                     transform: translatex(-10%)
                 }
                 
                 
            }
            img{
                @include wh(120%,140px);
          
                transition: 0.5s;
                
            }
            @media (max-width:375px){
            img{
                @include wh(120%,120px);
            }
        }
            h3{
                @include sc(14px ,$fz);
                transition: 0.5s;
                &:hover{
                transform: translatex(5px);
                font-weight: bolder;text-decoration: underline;
                    cursor: pointer;
                }
            }
            p{
               @include sc(12px ,$fc);
            }
            p:nth-child(3){
             position: absolute;bottom: 0px;
                
                width: 50%;
                span{
                    padding-right: 10px;
                }
                span:last-of-type{
                    position: absolute;bottom: 0px;right: 0px;
                }
            }
             
           
        }
    }
.box::-webkit-scrollbar {
        display: none;
    }
    .content_footer{height: 50px;line-height: 50px;text-align: center;}

</style>