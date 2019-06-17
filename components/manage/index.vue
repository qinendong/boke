<template>
   
  <el-col :span="20">
    <h1>数据统计{{time}}{{Date1}}</h1>
    <el-row :gutter="12">
  <el-col :span="6">
    <el-card shadow="always">
      当日数据
    </el-card>
  </el-col>
  <el-col :span="6">
    <el-card shadow="hover">
      {{index_content.length}}新增用户
    </el-card>
  </el-col>
  <el-col :span="6">
    <el-card shadow="hover">
     {{tableData1_add_l}}新增文章
    </el-card>
  </el-col>
    <el-col :span="6">
    <el-card shadow="hover">
      {{index_contents_post_add_l}}新增教程
    </el-card>
  </el-col>
  
</el-row>
    
     <el-row :gutter="12">
  <el-col :span="6">
    <el-card shadow="always">
      总数据{{echarts_arr_posts}}{{echarts_arr_wenzhang}}{{echarts_arr_user}}
    </el-card>
  </el-col>
  <el-col :span="6">
    <el-card shadow="hover">
      {{tableData.length}}注册用户
    </el-card>
  </el-col>
  <el-col :span="6">
    <el-card shadow="hover">
     {{tableData1.length}}普通文章
    </el-card>
  </el-col>
    <el-col :span="6">
    <el-card shadow="hover">
    {{index_contents_post.length}}教程文章
    </el-card>
  </el-col>
  
</el-row>
  <el-row :gutter="12">
  
  <div id="myChart" :style="{width: '100%', height: '400px'}"></div>

  
</el-row>
  </el-col>
    
</template>


<script>
    export default {
        data() {

            return {
                dateArray:Array,
                time: new Date().toLocaleDateString().replace(/\//g, '-'),
                addposts:[],
                addwenzhang:[],
                adduser:[]
            }
        },
        props: {
            index_content: Array,
            index_content1: Array,
            index_contents_post: Array,
            tableData: Array,
            tableData1: Array,
        },
        computed: {
            tableData1_add_l() {
                var newArray = []; //新数组
                var j = 0;


                //查找符合条件值并存入新数组
                for (let i in this.tableData1) {
                    if (this.tableData1[i].time == this.time) {
                        newArray[j++] = this.tableData1[i]
                    }
                }
                return newArray.length

            },
            index_contents_post_add_l() {
                var newArray = []; //新数组
                var j = 0;


                //查找符合条件值并存入新数组
                for (let i in this.index_contents_post) {
                    if (this.index_contents_post[i].time == this.time) {
                        newArray[j++] = this.index_contents_post[i]
                    }
                }
                return newArray.length
            },
            Date1(){
            var myDate = new Date(); //获取今天日期
            myDate.setDate(myDate.getDate() - 6);
            var dateArray = []; 
            var dateTemp; 
            var flag = 1; 
            for (var i = 0; i < 7; i++) {
                dateTemp = (myDate.getMonth()+1)+"-"+myDate.getDate();
                dateArray.push(dateTemp);
                myDate.setDate(myDate.getDate() + flag);
            }
                this.dateArray = dateArray
        },
            echarts_arr_posts() {
                var newArray = []; //新数组
                var j = 0;
                var newArray1 = [];


                //查找符合条件值并存入新数组
                for(let z=0;z<7;z++){
                for (let i in this.index_contents_post) {
                        if (this.index_contents_post[i].time == `2019-${this.dateArray[z]}`) {
                        newArray[j++] = this.index_contents_post[i]       
                    } 
                    }
                    //console.log("值"+newArray.length)
                    newArray1.push(newArray.length)
                     j=0
                    newArray.splice(0,newArray.length);
                }
                
                console.log(newArray1)
                this.addposts = newArray1
                
            },
            echarts_arr_wenzhang() {
                let newArray = [];
                var j = 0;
                var newArray1 = [];


                //查找符合条件值并存入新数组
                for(let z=0;z<7;z++){
                 
                for (let i in this.tableData1) {
                        if (this.tableData1[i].time == `2019-${this.dateArray[z]}`) {
                        newArray[j++] = this.tableData1[i]       
                       } 
                    }
                     //console.log(j)
                    //console.log("值"+newArray.length)
                    newArray1.push(newArray.length)
                    j=0
                    newArray.splice(0,newArray.length);
                    //console.log(j)
                    
                }
                
                console.log(newArray1)
                this.addwenzhang = newArray1
                
            },
            echarts_arr_user() {
                var newArray = []; //新数组
                var j = 0;
                var newArray1 = [];


                //查找符合条件值并存入新数组
                for(let z=0;z<7;z++){
                for (let i in this.tableData) {
                        if (this.tableData[i].time == `2019-${this.dateArray[z]}`) {
                        newArray[j++] = this.tableData[i]       
                    } 
                    }
                    //console.log("值"+newArray.length)
                    newArray1.push(newArray.length)
                    j=0
                    newArray.splice(0,newArray.length);
                }
                
                console.log(newArray1)
                this.adduser = newArray1
                
            },
            

        },
        methods: {
            drawLine() {
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 开始渲染
                myChart.setOption({
                    title: {
                        text: '网站活跃度折线图'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['新增注册用户', '新增文章', '新增教程']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: [this.dateArray[0], this.dateArray[1], this.dateArray[2], this.dateArray[3], this.dateArray[4], this.dateArray[5], this.dateArray[6]]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                            name: '新增注册用户',
                            type: 'line',
                            stack: '总量',
                            data: [this.adduser[0], this.adduser[1], this.adduser[2], this.adduser[3], this.adduser[4], this.adduser[5], this.adduser[6]]
                        },
                        {
                            name: '新增文章',
                            type: 'line',
                            stack: '总量',
                            data: [this.addwenzhang[0], this.addwenzhang[1], this.addwenzhang[2], this.addwenzhang[3], this.addwenzhang[4], this.addwenzhang[5], this.addwenzhang[6]]
                        },
                        {
                            name: '新增教程',
                            type: 'line',
                            stack: '总量',
                            data: [this.addposts[0], this.addposts[1], this.addposts[2], this.addposts[3], this.addposts[4], this.addposts[5], this.addposts[6]]
                        }
                    ]
                })


            }
        },
        mounted() {
            this.drawLine();
        }
    }
</script>


<style lang="scss" scoped>
    .el-row {
        margin: 20px 0;
        &:last-child {
            margin-bottom: 0;
        }
    }
</style>