const express = require('express');

const router = express.Router();
const body = require('body-parser');



router.post('/',(req,res,next)=>{
	
	 
    var id = req.body.id;
    console.log(id)

	var AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
// 设置APPID/AK/SK
var APP_ID = "16038387";
var API_KEY = "hDYMpcApvaf2HNBPm7ENwzdi";
var SECRET_KEY = "z0KO1fKnMFH4mdBGbmclPPW2G4yWCacj";
// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);



// 调用植物识别
client.plantDetect(id).then(function(result) {
    console.log(JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});

// 如果有可选参数
var options = {};
options["baike_num"] = "5";

// 带参数调用植物识别
client.plantDetect(id, options).then(function(result) {
    console.log(JSON.stringify(result));
    var data = JSON.stringify(result)
    res.status(200).json({data});
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});;
    
})

module.exports = router;