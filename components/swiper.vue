<template>
    <div class="block">
    
    <el-carousel height="220px">
      <el-carousel-item v-for="item in swiper" :key="item.id">
        <nuxt-link :to="{name:'wenzhang-id',params:{id:item.wenzhang_id}}"><img :src=item.imgurl alt="">
        <div class="trapezoid">{{item.title}}</div>
        </nuxt-link>
      </el-carousel-item>
    </el-carousel>
    
  </div>
</template>
<script>
export default{
    props:{
        swiper:Array
    }
}
</script>

<style lang="scss">
    @import "~/assets/styles/mixin.scss";
  .el-carousel__item{
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
      text-align: center;
      
        img{
          width: 100%;height: 220px;
          transform: scale(1);
         transition: animation 0.5s;
             @keyframes animations{
                0%{transform: rotate(0deg) scale(1)}
                50%{transform:rotate(5deg) scale(1.2)}
                 100%{transform:rotate(0deg) scale(1)}
            }
          
      }
      
      
    .trapezoid {
        position: absolute;top: 20px;right: 20px;
        background:linear-gradient(to right, rgba(255,255,255,.5) 0%, rgba(255,255,255,1) 100%);
        line-height:1.8rem;
        padding: 0px .4rem;
        color: $fz;
        opacity: .8;
        font-weight: bold;
        
}

      &:hover{
              
          .trapezoid{
              opacity: 1;
          }
          img{
              animation:animations 1.5s ease ;
          }
          }
      
  }

</style>