<template>
<div>
    <button @click="ceshi">xdasdsadsas</button>

</div>
</template>
<script>
    import axios from "axios"
  export default {
    data() {

      return {

      }
    },
    methods: {
        ceshi(){
            $.ajax({
         type:"get",
         url:"https://3g.163.com/touch/nc/api/video/recommend/Video_Recom/0-10.do",
         dataType:"jsonp",
         success:function(data){
         console.log(data);
         }
         });
        },
 

    }
  }
</script>