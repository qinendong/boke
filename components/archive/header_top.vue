<template>
<div>


<div style="display: none">

<aplayer autoplay=true :showLrc="s" listFolded repeat="list" listMaxHeight="500px" :controls="s" preload="auto" 
  :music="{
    title: '绿色',
    artist: '陈雪凝',
src:'http://m10.music.126.net/20190326052935/d06b1308e3a31cafa09d718045b59c49/ymusic/76b4/dcbb/0a65/9198b18815ee8ce42ae368ae29276f78.mp3',
    pic: 'http://p1.music.126.net/R4ZP3AJ9xV0vvw8LX7AbMA==/109951163860425334.jpg',
    lrc: 'https://api.bzqll.com/music/netease/lrc?id=1345848098&key=579621905'
    }"
    :list="items"
  
/>
<button @click="arr">重组</button>

<!--<div>
    <ul>
        <li v-for="item in items1" @click="gedan(item.id,item.al.picUrl)">
            <span>{{item.name}}</span><span>{{item.ar[0].name}}</span>
        </li>
    </ul>
</div>-->
</div>
<div style="display: none">
    {{reversedMessage}}
</div>
	</div>
	
</template>


<script>
    import axios from 'axios'

    export default {

        data() {
            return {
                items: "",
                items1: "",
                c: "",
                post: "",
                s: true,
                active: "",
                src: 'http://m10.music.126.net/20190326020306/71216cdc935c9a429b612e75b056f0ce/ymusic/76b4/dcbb/0a65/9198b18815ee8ce42ae368ae29276f78.mp3',
                pic: 'http://p2.music.126.net/R4ZP3AJ9xV0vvw8LX7AbMA==/109951163860425334.jpg',
                lrc: '',
                title: "多想在平庸的生活拥抱你",
                artist: "隔壁老樊",
                items2: [],



            }
        },
        methods: {
            gedan(id, pic) {
                //alert(id+pic)
                axios.all([

                        axios.get(`http://localhost:3001/song/url?id=${id}`),
                        axios.get(`http://localhost:3001/lyric?id=${id}`)


                    ])

                    .then(axios.spread((src, lrc) => {

                        // 上面两个请求都完成后，才执行这个回调方法

                        this.src = src.data.data[0].url
                        this.lrc = lrc.data.lrc.lyric
                        //console.log(lrc.data.lrc.lyric)
                        this.pic = pic

                        //alert(src.data.data[0].url)

                    }));



            },
            arr() {


                this.items = this.items2.sort(this.$options.methods.compare('key'))

                //console.log(this.items2)
            },
            compare(property) {
                return function(a, b) {
                    var value1 = a[property];
                    var value2 = b[property];
                    return value1 - value2;
                }
            },
          
        },
        computed: {
            //将json中的属性名更改
            reversedMessage: function() {
                // `this` 指向 vm 实例
                return this.items = JSON.parse(JSON.stringify(this.items).replace(/name/g, "title").replace(/singer/g, "artist"))
            }
        },
        /*	async asyncData ({params}){
        		let {data} = await axios.get(`/netease/song?key=579621905&id=${params.id}`)
        		return {
        			items:data.data,
        		
        			
        		    
        			   }
        	},*/

        /*	async asyncData(){
        		let {data} = await axios.get('/netease/songList?key=579621905&id=3778678')
        		return { 
        			items:data.data.songs   
        			   }
        	},*/


        created() {

            /*   axios.get('/netease/songList?key=579621905&id=3778678').then((res) => {
                   this.items = res.data.data.songs
                   console.log(res.data.data.songs)

               })*/

            axios.get('http://localhost:3001/top/list?idx=1').then((res) => {
                this.items1 = res.data.playlist.tracks
                console.log(res.data.playlist.tracks)
                for (let i = 0; i < this.items1.length - 100; i++) {
                    var title = this.items1[i].name
                    var artist = this.items1[i].ar[0].name
                    var pic = this.items1[i].al.picUrl
                    var id = this.items1[i].id
                    var src = ""
                    var lrc = ""
                    const self = this;
                    axios.all([
                            axios.get(`http://localhost:3001/song/url?id=${id}`),
                            axios.get(`http://localhost:3001/lyric?id=${id}`)
                        ])

                        .then(axios.spread((src, lrc) => {
                            /* this.src1 = src.data.data[0].url
                             this.lrc1 = lrc.data.lrc.lyric*/

                            //console.log("key" + i)
                            var key = i
                            var id = this.items1[i].id
                            var title = this.items1[i].name
                            var artist = this.items1[i].ar[0].name
                            var pic = this.items1[i].al.picUrl
                            this.items2.push({
                                artist: artist,
                                title: title,
                                pic: pic,
                                id: id,
                                src: src.data.data[0].url,
                                lrc: lrc.data.lrc.lyric ? lrc.data.lrc.lyric : "",
                                key: key
                            })

                        }));






                }



            })



        },
        components: {
            'Aplayer': process.client ? require('vue-aplayer') : null,
        }






    }
</script>
<style>
    .aplayer-list {
        max-height: 400px !important;
    }
</style>