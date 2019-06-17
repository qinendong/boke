<template>

      
          <div>
      <img :src="contents[0].image ? contents[0].image :''" alt="" width="100%;">
     <div class="wenzhang" v-html="compiledMarkdown"></div>
     </div>
      

</template>

<script>
import article_list from '~/components/archive/article_list.vue'
import {posts_id,counter} from '~/api/api.js'
import axios from 'axios'
import qs from 'qs'


let marked = require('marked');
let hljs = require('highlight.js');
import 'highlight.js/styles/dark.css';    
 marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code, lang) {
              if (lang && hljs.getLanguage(lang)) {    
                return hljs.highlight(lang, code, true).value;
              } else {
                return hljs.highlightAuto(code).value;
              }
          }

  });

    
export default {
	data(){
		return{
            
contents:""
		}
	},
    computed: {
    compiledMarkdown(){
        return marked(this.contents[0].markdown, { sanitize: true })
    }
    },

  components: {
    article_list,

  },
/*	async asyncData ({params}) {
       let data = {
           id:params.id
       }
       let content = await posts_id(data) 
       return { contents: content.data.rows }
        
        
	  },*/
    async asyncData ({params}) {
        let data = {
           id:params.id
       }
		let  [content,jishuqi]  = await Promise.all([
            posts_id(data) ,
            counter(data) 
            ])
		return { 
            contents: content.data.rows,
             
               }
	  },
    
created() {
    
        },
   

}
</script>

<style lang="scss">
    @import "~/assets/styles/mixin.scss";
    
    .wenzhang{
        background: #fff;
        padding: 20px;
        
       
        line-height: 30px;
        color: $fz;
        img{
            width: 100%;height: auto;
        }    
            
    }
    





</style>
