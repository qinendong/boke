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



var image = id;

var imageType = "BASE64";

var groupId = "user150320";

var userId = "user1";

// 调用人脸注册
client.addUser(image, imageType, groupId, userId).then(function(result) {
    console.log(JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});

// 如果有可选参数
var options = {};
options["user_info"] = "user's info";
options["quality_control"] = "NORMAL";
options["liveness_control"] = "LOW";

// 带参数调用人脸注册
client.addUser(image, imageType, groupId, userId, options).then(function(result) {
    console.log(JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});;

    
})

module.exports = router;