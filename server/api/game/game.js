const express = require('express');
const db = require('../../db');
const router = express.Router();
const body = require('body-parser');

router.get('/',(req,res,next)=>{
	
	var name=req.query.id;
	//console.log('phone:',typeof(req.body.phone))//打印数据类型//这里无用
	//console.log('pwd:',typeof(req.body.pwd))//打印数据类型//这里无用

	/*var phone = req.body.phone//获取login.vue 使用axios.post传过来的phone
	var pwd = req.body.pwd//获取login.vue 使用axios.post传过来的pwd*/
	console.log(name)
	var selectSQL = `SELECT * FROM games where  id=${name}`//采用模板字符窜
	
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