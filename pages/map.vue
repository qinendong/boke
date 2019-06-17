<template>
   
    <div>
              <el-row :gutter="10">
      <el-col :lg="8" :md="8" :sm="12" :xs="12"><div class="">
        此网站以运行{{datedifference}}天
      </div></el-col>
      
     
      
    </el-row>
        <div>
        </div>
              <iframe src="/partials/map.html" style="width: 100%; height: 230px;" frameborder="0"></iframe>
            

             
             <a href="/">跳转到首页</a>
    </div>
    
</template>
<script>
export default{
   
    data(){
        return{
            
        }
    },
    computed:{
        datedifference(){    //sDate1和sDate2是2006-12-18格式  
                var myDate = new Date();
    //console.log(id)
    var time = myDate.toLocaleDateString();
    var sDate1 = Date.parse("2018-10-2")
    var sDate2 = Date.parse(time)
        var dateSpan,
            tempDate,
            iDays;
        dateSpan = sDate2 - sDate1;
        dateSpan = Math.abs(dateSpan);
        iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
        return iDays
    }
    },
}

</script>