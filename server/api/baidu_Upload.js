const express = require('express');
const db = require('../db');
const router = express.Router();
const body = require('body-parser');
var multer = require('multer');
var uuid = require('node-uuid');


var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        destination="static/baidu_Images"
        callback(null, destination);
    },
    filename: function (req, file, callback) {
        var uuid_num = uuid.v1()
        console.log(uuid_num)
        filename = file.fieldname + "_" + uuid_num + "_" + file.originalname
        callback(null, filename);
        //命名规则imgUploader_当前时间毫秒数_上传文件名
    }
});

var upload = multer({ storage: Storage }).array("imgUploader", 3); //Field name and max count

router.post('/',(req,res,next)=>{
    
    upload(req, res, function (err) {
        if (err) {
            return res.end("no");
        }
       var url = 'http://' + req.headers.host+ '/' + destination.substring(7) + '/' + filename;
        console.log(url)
        res.json(url);
    });
	
	
	
})


module.exports = router;