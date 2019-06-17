<template>

      
      <div class="wenzhang" v-html="compiledMarkdown"></div>

</template>

<script>
import article_list from '~/components/archive/article_list.vue'

import {posts_id} from '~/api/api.js'
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
        return marked(this.contents[0].content, { sanitize: false })
    }
    },

  components: {
    article_list,

  },
	async asyncData ({params}) {
       let data = {
           id:params.id
       }
        
		let content = await axios.post('/api/wenzhang_id',qs.stringify(data))
        
		return { contents: content.data.rows }
      
   /*    let content = await posts_id(data) 
       return { contents: content.data.rows }*/
        
	  },
created() {
 

      
          
        }

}
</script>

<style lang="scss">
    @import "~/assets/styles/mixin.scss";
    .bg-purple{
        
        
    }
    .wenzhang{
        background: #fff;
        padding: 20px;
        ul{
            padding: 20px;
            li{
            list-style-type:square;
        }
        }
        
        line-height: 30px;
        color: $fz;
              img{
            width: 100%;height: auto;
        }   
            
    }
    




</style>
