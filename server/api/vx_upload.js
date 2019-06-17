const express = require('express');
const db = require('../db');
const router = express.Router();
const body = require('body-parser');
 var ffmpeg = require('fluent-ffmpeg');
let fs = require('fs');
const multer = require('multer');    
  let path = require("path");    
  //上传文件配置    
  const storage = multer.diskStorage({    
  //文件存储位置    
  destination: (req, file, cb) => {    
  cb(null, path.resolve(__dirname, '../../static/Audio'));    
  },    
  //文件名    
  filename: (req, file, cb) => {    
  cb(null, `${Date.now()}_${Math.ceil(Math.random() * 1000)}_multer.${file.originalname.split('.').pop()}`);    
  }    
  });    
  const uploadCfg = {    
  storage: storage,    
  limits: {    
  //上传文件的大小限制,单位bytes    
  fileSize: 1024 * 1024 * 20    
  }    
  };    
  router.post("/", async (req, res) => {    
  let upload = multer(uploadCfg).any();    
  upload(req, res, async (err) => {    
  if (err) {    
  res.json({ path: `失败` });    
  console.log(err);    
  return;    
  };    
  //console.log(req.files[0].destination);    
  let uploadFile = req.files[0]; 
  console.log(uploadFile.filename)//返回文件地址
     
    //ffmpeg转码 mp3 转wav  
    var command = ffmpeg(`static/Audio/${uploadFile.filename}`)
    //.audioCodec('pcm_s16le')
    .audioFrequency(16000)//采样率16000
    .audioChannels(1)//单声道
    .on('end', function() {
        console.log('file has been converted succesfully1');
      })
      .on('error', function(err) {
        console.log('an error happened: ' + err.message);
      })
    .save(`static/Audio/${uploadFile.filename.slice(0,-3)}.wav`)
    .on('end', function() {
        var AipSpeechClient = require("baidu-aip-sdk").speech;
// 设置APPID/AK/SK
var APP_ID = "16179430";
var API_KEY = "8Dn5tBS9YLUni3auonYdFH9L";
var SECRET_KEY = "Ow4dK9RaSjOhPYH3CFzUN8S21WfMG2Zn";
// 新建一个对象，建议只保存一个对象调用服务接口

var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);

//语音识别

let voice = fs.readFileSync(`static/Audio/${uploadFile.filename.slice(0,-3)}.wav`);

let voiceBuffer = new Buffer(voice);

// 识别本地文件
client.recognize(voiceBuffer, 'wav', 16000).then(function (result) {
    console.log('<recognize>: ' + JSON.stringify(result));
    
    res.json({ path: JSON.stringify(result) }); 
    
}, function(err) {
    console.log(err);
});  
      });    
      
      
      
    
      
      
      
     
  });    
  })   



module.exports = router;