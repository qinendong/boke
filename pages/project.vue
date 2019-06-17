<template>


 <div class="bg-purple">
      
          <el-row :gutter="10">
      <el-col :lg="8" :md="8" :sm="12" :xs="12" v-for="item in project_items"><div class="bg-purple">
        <a :href=item.url class="item_a">
         <div class="project_item">
          <span><i class="iconfont icon-vue"></i></span>
          <h4>{{item.title}}</h4>
          <p>{{item.content}}</p>
          <hr>
          <p><span><i class="fa fa-star"></i>{{item.star}}</span><span><i class="fa fa-stethoscope"></i>{{item.fork}}</span><span><i class="fa fa-eye"></i>{{item.watch}}</span></p>
          </div>
          </a>
      </div></el-col>
      
     
      
    </el-row>
      
  </div>


</template>
<script>
    import article_list from '~/components/archive/article_list.vue'
    import {project} from '~/api/api.js'
export default{
    
    data(){
        return{
            project_items:""
        }
    },
    components:{
        article_list
        
    },
      async asyncData () {
       
		let  [lalas]  = await Promise.all([
            project()
            
            ])
		return { 
            project_items: lalas.data.rows,
             
               }
	  },
}
</script>

<style lang="scss" scoped>
       @import "~/assets/styles/mixin.scss";
    
.bg-purple{
        margin-bottom: 20px;
   
    width: 100%;
    transition: 0.5s;
    
    .project_item{
        
        text-align: center;
        background: #fff;
        transition: .5s;
        &:hover{
            background: #ccc;
        }
        img{
        width: 50%;
        
        padding: 30px 0px;
    }
        i{
            font-size: 70px;padding: 30px 0px;
        }
        h3{
            padding: 10px 0px;
        }
        hr{
            width: 80%;margin: 0 auto;border:1px solid $fci;margin-top: 10px;
        }
        p{
            display: block;height: 70px;
            overflow: hidden;
            padding: 15px 10px;
            span{
               
                padding: 10px 5px;
                i{
                    font-size: 12px; color: $fci;
                }
            }
        }
    }
    
    }


</style>