<template>

 <el-row class="page">
      <el-col :lg="8" :md="8" :sm="12" :xs="12" v-for="item in echarts"><div class="bg-purple">
        <nuxt-link :to="{name:'echarts-id',params:{id:item.html}}">
         <div class="echarts_item">
          <h5>{{item.title | ellipsis}}</h5>
        <img :src=item.imgurl alt="" class="img-responsive">
          </div>
          </nuxt-link>
      </div></el-col>
    
    </el-row>

</template>


<script>
import article_list from '~/components/archive/article_list.vue'
    import {echarts} from '~/api/api.js'
export default{
    layout:"default",
    data(){
        return{
            
        }
    },
        filters:{
        ellipsis(value){
            if (!value) return ''
            if(value.length > 20){
                return value.slice(0,20)+'...'
            }else{
                return value
            }
            
        }
    },
    components:{
        article_list
    },
    	async asyncData () {
		let  [data]  = await Promise.all([
            echarts()
           
            ])
		return { 
            echarts: data.data.rows
             
               }
	  },
}


</script>


<style lang="scss">
    @import "~/assets/styles/mixin.scss";
        .echarts_item{
        padding: 5px;
        margin-bottom: 20px;
        background: rgba(248,248,248,1);
            &:hover{
                text-decoration: underline
            }
       
            h4{
                color: $fz;
            }

    }


</style>