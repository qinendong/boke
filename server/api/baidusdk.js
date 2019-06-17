const express = require('express');
const db = require('../db');
const router = express.Router();
const body = require('body-parser');

router.post('/',(req,res,next)=>{
	
	 
/*    var url = req.body.url

    console.log(url);*/

   var AipOcrClient = require("baidu-aip-sdk").ocr;
// 设置APPID/AK/SK
var APP_ID = "15265900";
var API_KEY = "GLGk0f4U0yEKG211AZByIEtK";
var SECRET_KEY = "tGHCzxTBCMy4aGiZctR32wscZu3VmUD4";
// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);





/*

var fs = require('fs');

var image = fs.readFileSync("static/Images/imgUploader_0749d800-3f34-11e9-bbe3-73396fb410b1_main.png").toString("base64");

// 调用通用文字识别, 图片参数为本地图片
client.generalBasic(image).then(function(result) {
    console.log(JSON.stringify(result));
    var data = JSON.stringify(result)
    res.status(200).json({data});
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});

// 如果有可选参数
var options = {};
options["language_type"] = "CHN_ENG";
options["detect_direction"] = "true";
options["detect_language"] = "true";
options["probability"] = "true";

// 带参数调用通用文字识别, 图片参数为本地图片
client.generalBasic(image, options).then(function(result) {
    console.log(JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});;
*/

var url = req.body.url;
console.log(url);
// 调用通用文字识别, 图片参数为远程url图片
client.generalBasicUrl(url).then(function(result) {
    console.log(JSON.stringify(result));
    var data = JSON.stringify(result)
    res.status(200).json({data});
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});

// 如果有可选参数
var options = {};
options["language_type"] = "CHN_ENG";
options["detect_direction"] = "true";
options["detect_language"] = "true";
options["probability"] = "true";

// 带参数调用通用文字识别, 图片参数为远程url图片
client.generalBasicUrl(url, options).then(function(result) {
    console.log(JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});;



	

	
	//res.status(200).json({"aa":"asdasdasd"});
	
})


module.exports = router;