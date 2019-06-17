const express = require('express');

const router = express.Router();
const body = require('body-parser');

const { createCanvas, loadImage } = require('canvas')


router.post('/',(req,res,next)=>{
	
	 
    var id = req.body.id;
    var w = req.body.width;
    var h = req.body.height;
    var inch = req.body.inch;
    var bgcolor = req.body.bgcolor;
    console.log(inch,bgcolor)

var AipBodyAnalysisClient = require("baidu-aip-sdk").bodyanalysis;

// 设置APPID/AK/SK
var APP_ID = "16139182";
var API_KEY = "6UNCD2O5t4yKczoP22RIdn8D";
var SECRET_KEY = "AyhzbuaRVsxwHvyL7Ns3yvaZqNcUC3OR";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipBodyAnalysisClient(APP_ID, API_KEY, SECRET_KEY);



var image = id;


// 调用人像分割
client.bodySeg(image).then(function(result) {
    //console.log(JSON.stringify(result));
    var data = JSON.stringify(result)
     //res.status(200).json({data});
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});

// 如果有可选参数
var options = {};
options["type"] = "foreground";
 //foreground scoremap
// 带参数调用人像分割
client.bodySeg(image, options).then(function(result) {
    //console.log(JSON.stringify(result));
    var data = JSON.parse(JSON.stringify(result))
    var foreground = data.foreground
    console.log(foreground.length)
    /*if(foreground.length>1000000){
        var foreground1 = foreground.substr(0,1000000);
        var foreground2 = foreground.slice(1000000);
        
        // res.status(200).json({foreground1,foreground2,code:"2"});数据传输过长，此方法不行
        
    }*/ 
    // res.status(200).json({foreground,code:"1"});
    
    //关键点识别=主要识别 右肩right_shoulder  左肩left_shoulder 人体区域距上边界距离location top  颈neck
   client.bodyAnalysis(image).then(function(result) {
    console.log(JSON.stringify(result));
       var data1 = JSON.parse(JSON.stringify(result))
       //console.log(data1)
       
       var right_shoulder_x = data1.person_info[0].body_parts.right_shoulder.x
       var right_shoulder_y = data1.person_info[0].body_parts.right_shoulder.y
       var left_shoulder_x = data1.person_info[0].body_parts.left_shoulder.x
       var left_shoulder_y = data1.person_info[0].body_parts.left_shoulder.y
       var neck_x = data1.person_info[0].body_parts.neck.x
       var neck_y = data1.person_info[0].body_parts.neck.y
       var location_top = data1.person_info[0].location.top
       var nose_y = data1.person_info[0].body_parts.nose.y
       console.log(right_shoulder_x,right_shoulder_y)
       console.log(left_shoulder_x,left_shoulder_y)
       console.log(neck_x,neck_y)
       console.log(location_top)
       console.log(nose_y)
       console.log(-(parseInt(right_shoulder_x)-parseInt(left_shoulder_x)))
       console.log(parseInt(neck_y)-parseInt(location_top))
           
    var width1 = -(parseInt(right_shoulder_x)-parseInt(left_shoulder_x))
    var height1 = parseInt(neck_y)
    var width
    var height
    if(inch=="one"){
    var width = 295
    var height = 413
    }
    if(inch=="two"){
    var width = 413
    var height = 626
    }
    
    
    //295*413
    //413*626
 const canvas = createCanvas(width, height),   
    ctx = canvas.getContext('2d');  
if(bgcolor=="red"){
   ctx.fillStyle="#900b09";
   }
if(bgcolor=="blue"){
   ctx.fillStyle="#0000ff";
   }
if(bgcolor=="white"){
   ctx.fillStyle="#ffffff";
   }
       //900b09 0000ff
ctx.fillRect(0,0,width,height);
const { Image } = require('canvas')   
const img = new Image()
img.onload = () => {
    ctx.drawImage(img, parseInt(right_shoulder_x),0,width1,height1,0,height-(height1/width1)*width,width,(height1/width1)*width)
    res.status(200).json({data:canvas.toDataURL()});
}
img.onerror = err => { throw err }
img.src = 'data:image/png;base64,'+data.foreground
//console.log(canvas.toDataURL())
       
       
       
       
       
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});
    
    

    
    
    
    
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});;

    
})

module.exports = router;