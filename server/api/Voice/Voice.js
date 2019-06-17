const express = require('express');

const router = express.Router();
const body = require('body-parser');
let fs = require('fs');


router.get('/',(req,res,next)=>{
	
var name=req.query.name;
console.log(name)
var AipSpeechClient = require("baidu-aip-sdk").speech;
// 设置APPID/AK/SK
var APP_ID = "16179430";
var API_KEY = "8Dn5tBS9YLUni3auonYdFH9L";
var SECRET_KEY = "Ow4dK9RaSjOhPYH3CFzUN8S21WfMG2Zn";
// 新建一个对象，建议只保存一个对象调用服务接口

var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);

//语音识别

let voice = fs.readFileSync('static/Audio/voice.wav');

let voiceBuffer = new Buffer(voice);

// 识别本地文件
client.recognize(voiceBuffer, 'wav', 16000).then(function (result) {
    console.log('<recognize>: ' + JSON.stringify(result));
}, function(err) {
    console.log(err);
});

// 识别本地文件，附带参数
/*client.recognize(voiceBuffer, 'wav', 16000, {dev_pid: '1536', cuid: Math.random()}).then(function (result) {
    console.log('<recognize>: ' + JSON.stringify(result));
}, function(err) {
    console.log(err);
});*/
    
})

module.exports = router;