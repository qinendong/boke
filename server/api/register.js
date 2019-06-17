const express = require('express');
const db = require('../db');
const router = express.Router();
const body = require('body-parser');

router.post('/',(req,res,next)=>{
	
	 
    var phone = req.body.phone
     var password = req.body.password
     var name = req.body.name
    var image = req.body.image
     var myDate = new Date();
    
    var time = myDate.toLocaleDateString();
    console.log(name,phone,password,time,image);
    var selectSQL = `INSERT INTO bokeuser (name,PASSWORD,phone,time,image) VALUES('${name}','${password}','${phone}','${time}','${image}');`
    /*INSERT INTO bokeuser (NAME,PASSWORD,phone) VALUES('魏阳双','10086','13941681092');*/
   console.log(selectSQL);//打印查询语句看看是否正确
	
	db.query(selectSQL,(err,rows)=>{
		if(err){
			console.log('查询语句出错!' + err);
		}else{
			res.status(200).json({rows});
		}
		
		
	})
	
	
	
})


module.exports = router;