<template>
  
  <el-col :span="20">

  <el-table
    :data="tableData1"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="time"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="420">
    </el-table-column>
    <el-table-column
      prop="name"
      label="发布用户"
      width="120">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="340">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
{{tableData1}}
    </el-col>

</template>

<script>

  export default {
      props:{
          tableData1:Array
      },
      data(){
          return{
           
          
          }
      },
      components:{
      
      },
      methods:{
      handleClick(row){
      console.log(row)
      }
      }

  }
</script>