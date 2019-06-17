<template>
    <div>
        <div  class="hidden-sm-and-down">
            <el-input placeholder="请输入内容" v-model="input" class="input-with-select" size="medium" v-on:keyup.enter.native="submit()">
             <el-button @click="submit" slot="append" icon="el-icon-search"></el-button>   
            </el-input>
             
        </div>
        
        <div class="aside">
            <p><i class="iconfont icon-huo">&nbsp;&nbsp;</i>热门文章</p>
            <ul>
                <li v-for="item in wenzhang">
                   <span></span> 
                   <nuxt-link :to="{name:'wenzhang-id',params:{id:item.id}}">
                       {{item.title.length>20 ? item.title.substring(0,16)+"...":item.title}}
                   </nuxt-link>
                </li>
                <li>
               </li>
            </ul>
            <!--<p>{{wenzhang}}</p>-->
        </div>
        
        <div class="aside1">
            <p><i class="iconfont icon-huo">&nbsp;&nbsp;</i>热门标签</p>
            <ul>
              <span  v-for="(item, index) in tag_arr" @click="S_Tag(itemkey(index))">
              <el-tooltip :content="'共有'+item+'篇教程'" placement="top">
               <el-tag type="success">
                   {{itemkey(index)}}
               </el-tag>
                  </el-tooltip>
              </span>
 
                         
                                           
            </ul>
            <!--<p>{{wenzhang}}</p>-->
        </div>
        <div style="display: none">
    {{reversedMessage}}{{tag_arr}}
</div>
        
    </div>
</template>
<script>
import axios from 'axios'
    import Bus from '~/plugins/bus.js';
    export default {
        props:{
            //wenzhang:Array
        },
        data() {
            return {
                input:"",
                wenzhang:"",
                tags:"",
                tag_arr:[]

            }
        },
           computed: {
    //将json中的属性名更改
    reversedMessage: function () {
      // `this` 指向 vm 实例
        var Tag_arr = []
        for(let i = 0;i<this.tags.length;i++){
            Tag_arr.push(this.tags[i].Tag1,this.tags[i].Tag2)
        }
      Tag_arr = Tag_arr.filter(item => item)
        
        return this.tag_arr = this.$options.methods.getWordCnt(Tag_arr)
    }
  },
        methods:{
            submit(){
                //alert(1)
                Bus.$emit("select",this.input)
            },
            
            S_Tag(val){
                //alert(1);
                console.log(val)
                this.$router.push({path:'/'})
                Bus.$emit("S_Tag",val)
                
             
            },
            getWordCnt(arr){ 
        return arr.reduce(function(prev,next){ 
            prev[next] = (prev[next] + 1) || 1; 
            return prev; 
            },{}); 
         },
               itemkey(arr){
                   console.log(arr)
                   return arr
              
            }
            

        },
        created(){
            axios.get('/api/wenzhang').then((res)=>{
               this.wenzhang = res.data.rows
           })
             axios.get('/api/posts').then((res)=>{
               this.tags = res.data.rows
                 
           })
            
            
        }

    }
</script>


<style lang="scss">
     @import "~/assets/styles/mixin.scss";
    .aside{width: 100%;background: #fff;margin-top: 20px;
        p{padding:8px;}
        ul{
            span{
                padding-right: 8px;
            }
            li{
                padding: 10px 8px;
                a{
                    color: $fz
                }
            }
        li:nth-child(1){
        span:before{
            content:"1";
            width: 20px;height: 20px;display: inline-block;background:#7cc0f7;
            color: #fff;
            text-align: center;
           
                
        }
            }
        li:nth-child(2){
        span:before{
            content:"2";
            width: 20px;height: 20px;display: inline-block;background:#91cc93;
                color: #fff;
            text-align: center;
        }    
          }      
            
            li:nth-child(3){
        span:before{
            content:"3";
            width: 20px;height: 20px;display: inline-block;background:#fc9777;
            color: #fff;
            text-align: center;
                
        }    
          } 
            li:nth-child(4){
        span:before{
            content:"4";
            width: 20px;height: 20px;display: inline-block;background:#ccc;
            color: #fff;
            text-align: center;
                
        }
            }
        li:nth-child(5){
        span:before{
            content:"5";
            width: 20px;height: 20px;display: inline-block;background:#ccc;
                color: #fff;
            text-align: center;
        }    
          }      
            
            li:nth-child(6){
        span:before{
            content:"6";
            width: 20px;height: 20px;display: inline-block;background:#ccc;
            color: #fff;
            text-align: center;
                
        }    
          } 
            li:nth-child(7){
        span:before{
            content:"7";
            width: 20px;height: 20px;display: inline-block;background:#ccc;
            color: #fff;
            text-align: center;
                
        }
            }
        li:nth-child(8){
        span:before{
            content:"8";
            width: 20px;height: 20px;display: inline-block;background:#ccc;
                color: #fff;
            text-align: center;
        }    
          }      
            
            li:nth-child(9){
        span:before{
            content:"9";
            width: 20px;height: 20px;display: inline-block;background:#ccc;
            color: #fff;
            text-align: center;
                
        }    
          } 
            li:nth-child(10){
        span:before{
            content:"10";
            width: 20px;height: 20px;display: inline-block;background:#ccc;
            color: #fff;
            text-align: center;
                
        }
            }
        
            
     
        
    }
        
    
    }
    
    .aside1{
         p{padding:8px;}
        width: 100%;background: #fff;margin-top: 20px;
        ul {
            padding: 5px 10px;
            span{margin: 5px 1px;
                &:hover{
                    cursor: pointer;
                }
            }
            
        }
    } 
    
</style>