<template>



<component :is="component" :index_content="index_contents" :index_contents_post="index_contents_posts" :tableData="tableDatas" :tableData1="tableDatas1"></component>


</template>


<script>
    import index_content from '~/components/manage/index.vue'
    
    import manage_article_list from '~/components/manage/manage_article_list.vue'  
    import {
        manage_index,
        posts,
        manage_user,
        manage_wenzhang
    } from '~/api/api.js'

    export default {
        middleware:"manage_login",
        layout:"manage",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        data() {
            return {
                component: "index_content"
            }
        },
        components: {
            index_content,
            manage_article_list
        },
        methods:{
            
            index_content(){
                this.component="index_content"
            },
            
        },
        async asyncData() {
            let [data, data1, data2,data3] = await Promise.all([
                manage_index(),
                posts(),
                manage_user(),
                manage_wenzhang(),
            ])
            return {
                index_contents: data.data.rows,
                index_contents_posts: data1.data.rows,
                tableDatas: data2.data.rows,
                tableDatas1:data3.data.rows,
                
            }
        },
    }
</script>