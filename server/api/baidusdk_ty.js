const express = require('express');
const db = require('../db');
const router = express.Router();
const body = require('body-parser');

router.post('/',(req,res,next)=>{
	
	 
    var url = req.body.url.substr(21)

    console.log(url);

var AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
// 设置APPID/AK/SK
var APP_ID = "16038387";
var API_KEY = "hDYMpcApvaf2HNBPm7ENwzdi";
var SECRET_KEY = "z0KO1fKnMFH4mdBGbmclPPW2G4yWCacj";
// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);


var fs = require('fs');

var image = fs.readFileSync(`static/${url}`).toString("base64");

// 调用通用物体识别
client.advancedGeneral(image).then(function(result) {
    console.log(JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});

// 如果有可选参数
var options = {};
options["baike_num"] = "5";

// 带参数调用通用物体识别
client.advancedGeneral(image, options).then(function(result) {
    console.log(JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});;

//var url = req.body.url;
//console.log(url);
//// 调用通用文字识别, 图片参数为远程url图片
//client.generalBasicUrl(url).then(function(result) {
//    console.log(JSON.stringify(result));
//    var data = JSON.stringify(result)
//    res.status(200).json({data});
//}).catch(function(err) {
//    // 如果发生网络错误
//    console.log(err);
//});
//
//// 如果有可选参数
//var options = {};
//options["language_type"] = "CHN_ENG";
//options["detect_direction"] = "true";
//options["detect_language"] = "true";
//options["probability"] = "true";
//
//// 带参数调用通用文字识别, 图片参数为远程url图片
//client.generalBasicUrl(url, options).then(function(result) {
//    console.log(JSON.stringify(result));
//}).catch(function(err) {
//    // 如果发生网络错误
//    console.log(err);
//});;



	

	
	//res.status(200).json({"aa":"asdasdasd"});
	
})


module.exports = router;