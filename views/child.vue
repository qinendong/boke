<template>
    <div>
       <input type="text" v-model="mmi">
        <button @click="btn">按钮</button>
    </div>
</template>
<script>
export default{
    data(){
        return{
          mmi:""  
        }
    },
    methods:{
        btn(){
            this.$emit("lala" , this.mmi)
        }
    }
}
 </script>
