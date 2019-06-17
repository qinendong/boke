<template>
    

<iframe :src=src style="width:100%; height: 500px;"></iframe>
      

    
    
</template>

<script>
    import article_list from '~/components/archive/article_list.vue'
export default{
    layout:"default_one",
    data(){
        return{
            src:""
        }
    },
    components:{
      article_list  
    },
    created(){
        this.src = this.$route.params.id
    }
}



</script>
<style>
    iframe{
        border: none;
    }

</style>
