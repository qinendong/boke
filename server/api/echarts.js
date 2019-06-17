const express = require('express');
const db = require('../db');
const router = express.Router();
const body = require('body-parser');

router.get('/',(req,res,next)=>{
	

	
	var selectSQL = `SELECT * FROM echarts`//采用模板字符窜
	
	console.log(selectSQL);//打印查询语句看看是否正确
	
	db.query(selectSQL,(err,rows)=>{
		if(err){
			console.log('查询语句出错!' + err);
		}else{
			res.status(200).json({rows});
		}
		
		
	})
	
	
	
	/* where phone = ${phone} and pwd = ${pwd};*/
})


module.exports = router;