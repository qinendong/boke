const express = require('express');
const db = require('../db');
const router = express.Router();
const body = require('body-parser');

router.post('/',(req,res,next)=>{
	
	 
    var phone = req.body.phone
     var password = req.body.password
     var num = req.body.num
    console.log(phone,password);
    var selectSQL = `SELECT * from administrators WHERE phone=${phone} AND password="${password}" AND num=${num};
`
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