<template>
  
  <el-col :span="20">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="time"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话">
      </el-table-column>
    </el-table>

    </el-col>

</template>
<script>
import {manage_user} from '~/api/api.js'
  export default {
      props:{
          tableData:Array
      },
      data(){
          return{
           
          
          }
      },
      components:{
      
      },
/*      async asyncData () {
       
		let  [lalas]  = await Promise.all([
            manage_user()
            
            ])
		return { 
            tableData: lalas.data.rows,
             
               }
	  },*/
  }
</script>