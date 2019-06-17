<template>

  <el-col :span="20" class="box">

  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="time"
      label="日期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="250">
    </el-table-column>
    <el-table-column
      prop="name"
      label="发布用户"
      width="80">
    </el-table-column>
<el-table-column
      prop="meta_description"
      label="教程简介"
      width="300">
    </el-table-column>
    <el-table-column
      prop="image"
      label="封面图"
      width="140"
      >
      <template slot-scope="scope">
      <img  :src="scope.row.image" alt="" style="width: 100%;height: 100%">
    </template>
    </el-table-column>
       <el-table-column
      prop="Tag1"
     
      label="关键词标签"
      width="100"
      >
  
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick2(scope.row),dialogVisible = true" type="text" size="small">删除</el-button>
        <el-button type="text" size="small" @click="dialogFormVisible = true,handleClick2(scope.row)" >编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

 <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>确定要删除此条数据吗？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="open1">确 定</el-button>
  </span>
</el-dialog>  


<!-- Form -->


<el-dialog title="编辑文章" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="文章标题" :label-width="formLabelWidth">
      <el-input v-model="form.title" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="作者" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="文章简介" :label-width="formLabelWidth">
      <el-input v-model="form.meta_description" autocomplete="off"></el-input>
    </el-form-item>
    
    <el-form-item label="文章内容" :label-width="formLabelWidth">
      <el-input type="textarea" v-model="form.markdown">
        
      </el-input>
    </el-form-item>
   
  </el-form>
   <el-form id="importModel" enctype="multipart/form-data">
           <el-form-item label="文章封面图" :label-width="formLabelWidth">
            <el-input type="file" name="imgUploader" multiple v-model="typefile" id="file"/>
                <el-button type="primary" @click="shangchuan">生成链接</el-button>
                <p>{{imageurl}}</p>
       </el-form-item>
            </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="open2">确 定</el-button>
  </div>
</el-dialog>

   
    </el-col>

</template>

<script>
import {posts
    } from '~/api/api.js'
    import manage_article_list from '~/components/manage/manage_article_list.vue' 
    import axios from 'axios'
        import qs from 'qs'
  export default {
      layout:"manage",
      data(){
          return{
           
          tableData:Array,
          
        dialogVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          markdown: '',
            id:"",
          date1: '',
          date2: '',
            meta_description:"",
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
              imageurl:"",
              typefile:""
          }
      },
      components:{
      manage_article_list
      },
      methods:{
      handleClick2(row){
      console.log(row)
          this.form.name=row.name
          this.form.title=row.title
          this.form.markdown=row.markdown
          this.form.id=row.id
          this.imageurl=row.image
          this.form.meta_description=row.meta_description
          this.typefile=""
      },
          //修改
        open2(){
             let data = {
               id:this.form.id,
                name:this.form.name,
                 title:this.form.title,
                 markdown:this.form.markdown,
                 image:this.imageurl,
                 meta_description:this.form.meta_description
               }
             
console.log(data);
           
        this.$confirm('此操作将修改该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.dialogFormVisible = false
           axios.post('/api/m_post_xuigai',qs.stringify(data)).then((res)=>{
               this.tableData = res.data.rows;
           })
          this.$message({
              
            type: 'success',
            message: '修改成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消修改'
          });          
        });
      },
          //删除
        open1(){
             let data = {
               id:this.form.id,
                
                 
               }

           axios.post('/api/m_post_delete',qs.stringify(data)).then((res)=>{
               this.tableData = res.data.rows;
           })
              this.dialogVisible = false
        
      },
          
          
          handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
          
        shangchuan(){
            //alert(1);
            
         var oFile = document.getElementById('file'); 
            
                if(oFile.value == ""){ 
                  this.$message('请选择图片文件');
                    return
                } 
             
            
            
        var formData = new FormData($("#importModel")[0]);
        
        $.ajax({
        type : 'post',
        url : '/api/Upload',
        dataType : 'json',
        data : formData,
        contentType: false, 
        processData: false, 
        success:((res)=>{
            console.log(res)
            this.imageurl = res
        })
    });

        }
          
      },
        async asyncData () {
       
		let  [data]  = await Promise.all([
            posts()
            
            ])
		return { 
            tableData: data.data.rows,
             
               }
	  },

  }
</script>
<style>
    .el-textarea__inner{
        outline: 0;border: 1px solid #dcdfe6 !important;
    }
    .el-input__inner{
        outline: 0;border: 1px solid #dcdfe6 !important;
    }
    .dialog-footer span{color: none;}
    input[type="file"] {
    display: block;
    line-height: 0px;
        padding-top: 7px;margin-bottom: 15px;}
    .box{height: 100%; overflow: auto;}
    .box::-webkit-scrollbar {
        display: none;
    }
</style>