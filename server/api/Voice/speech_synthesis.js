const express = require('express');

const router = express.Router();
const body = require('body-parser');
let fs = require('fs');
var uuid = require('node-uuid');

router.post('/',(req,res,next)=>{
	
var value = req.body.value
console.log(value)
var uuid_num = uuid.v1()    
var AipSpeechClient = require("baidu-aip-sdk").speech;
// 设置APPID/AK/SK
var APP_ID = "16179430";
var API_KEY = "8Dn5tBS9YLUni3auonYdFH9L";
var SECRET_KEY = "Ow4dK9RaSjOhPYH3CFzUN8S21WfMG2Zn";
// 新建一个对象，建议只保存一个对象调用服务接口

var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);
// 语音合成
client.text2audio(value).then(function(result) {
    if (result.data) {
        fs.writeFileSync(`static/Audio/${uuid_num}.mp3`, result.data);
        console.log(`${uuid_num}.mp3`)
        res.status(200).json({path:`${uuid_num}.mp3`});
    } else {
        // 服务发生错误
        console.log(result)
    }
}, function(e) {
    // 发生网络错误
    console.log(e)
});

// 语音合成, 附带可选参数
/*client.text2audio('百度语音合成测试', {spd: 0, per: 4}).then(function(result) {
    if (result.data) {
        fs.writeFileSync('tts.mpVoice.mp3', result.data);
    } else {
        // 服务发生错误
        console.log(result)
    }
}, function(e) {
    // 发生网络错误
    console.log(e)
});*/
    
})

module.exports = router;