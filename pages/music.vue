<template>
<div>


<div>

<aplayer autoplay :showLrc="s" listFolded repeat="list" listMaxHeight="500px" :controls="s" preload="auto" 
  :music="{
    title: '123我爱你',
    artist: '新乐尘符',
    src: 'http://api.bzqll.com/music/netease/url?id=526307800&key=579621905',
    pic: 'http://api.bzqll.com/music/netease/pic?id=526307800&key=579621905',
    lrc: 'http://api.bzqll.com/music/netease/lrc?id=526307800&key=579621905'
    }"
    :list="items"
  
/>

</div>
<div style="display: none">
    {{reversedMessage}}
</div>
	</div>
	
</template>


<script>
import axios from 'axios'

export default {
	layout:"login",
	data (){
		return{
			items:"",
			post:"",
		   	s:true,
			active:"",
            
		
		}
	},
    computed: {
    //将json中的属性名更改
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.items=JSON.parse(JSON.stringify(this.items).replace(/name/g,"title").replace(/singer/g,"artist"))
    }
  },
/*	async asyncData ({params}){
		let {data} = await axios.get(`/netease/song?key=579621905&id=${params.id}`)
		return {
			items:data.data,
		
			
		    
			   }
	},*/
	
	async asyncData(){
		let {data} = await axios.get('/netease/songList?key=579621905&id=3778678')
		return { 
			items:data.data.songs   
			   }
	},


	created(){
		
		
		
	},
	components:{
		'Aplayer':process.client ? require('vue-aplayer') :null,
	}


	
	
	
	
}



</script>
<style>
    .aplayer-list{max-height: 400px!important;}
</style>