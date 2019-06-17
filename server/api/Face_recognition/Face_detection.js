const express = require('express');

const router = express.Router();
const body = require('body-parser');



router.post('/',(req,res,next)=>{
	
	 
    var id = req.body.id;
    console.log(id)

var AipFaceClient = require("baidu-aip-sdk").face;

// 设置APPID/AK/SK
var APP_ID = "16077580";
var API_KEY = "sNid3lQSQgw6i5cdUqWf8cdC";
var SECRET_KEY = "7XmPGUU32AzWo8ZNhLnpDhCXKq0kblSb";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);



/*
var fs = require('fs');

var image = fs.readFileSync("assets/example.jpg").toString("base64");
*/
var image = id;

var imageType = "BASE64";

// 调用人脸检测
client.detect(image, imageType).then(function(result) {
    console.log(JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});

// 如果有可选参数
var options = {};

options["face_field"] = "age,beauty,expression,faceshape,gender,glasses,landmark,race,quality,facetype";

options["max_face_num"] = "2";
options["face_type"] = "LIVE";

// 带参数调用人脸检测
client.detect(image, imageType, options).then(function(result) {
    console.log(JSON.stringify(result));
    var data = JSON.stringify(result)
    res.status(200).json({data});
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});;
    
})

module.exports = router;