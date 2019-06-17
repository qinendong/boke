<template>


      <transition name="slide-fade">
      {{this.$route.params.userId}}

      <contents :content="contents" :swiper="swipers"></contents>
      </transition>


</template>

<script>
import article_list from '~/components/archive/article_list.vue'
import article_right from '~/components/archive/article_right.vue'
import contents from '~/components/archive/content.vue'

    import Bus from '~/plugins/bus.js';
import {ceshi} from '~/api/api.js'
import {posts,wenzhang,swiper,select} from '~/api/api.js'
import axios from 'axios'
    import qs from 'qs'
export default {
	data(){
		return{
            ddd:"",
            abc:"5465655"

		}
	},

  components: {
    article_list,
      contents,
      article_right,

  },
   
	async asyncData () {
        
		let  [data,wzdata,asdas]  = await Promise.all([
            posts(),
            wenzhang(),
            swiper()
            ])
		return { 
            contents: data.data.rows,
             wenzhangs:wzdata.data.rows,
            swipers:asdas.data.rows
               }
	  },

   methods:{
 /*      selected(input){
           console.log(input)
           
           let data = {
           id:input
       }
           axios.post('/api/select',qs.stringify(data)).then((res)=>{
               this.contents = res.data.rows
           })
       },*/
     
   },
    watch: {
            "$route": function(){
                //路由变化会触发
            }
        
        
        },
    mounted(){
    //this.$router.go(0);
        const self=this;
    Bus.$on('select',function(val){//监听first组件的txt事件
      console.log("获取"+val);
        let data = {
           id:val
       }
        
        //console.log(self.abc)
           axios.post('/api/select',qs.stringify(data)).then((res)=>{
               self.contents = res.data.rows
             
               console.log(this.contents)
           })
    });
        
        Bus.$on('S_Tag',function(val){//监听first组件的txt事件
            
            
      console.log("获取"+val);
            
        let data = {
           id:val
       }
        
        //console.log(self.abc)
           axios.post('/api/select_tag',qs.stringify(data)).then((res)=>{
               self.contents = res.data.rows
             
               console.log(this.contents)
           })
    });

        
},
    created(){
       
    }

     
}
</script>

<style lang="scss" scoped>
    @import "~/assets/styles/mixin.scss";
    .bg-purple{
          
    }
 .el-row{margin: 0!important;}



</style>
