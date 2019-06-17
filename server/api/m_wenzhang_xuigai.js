const express = require('express');
const db = require('../db');
const router = express.Router();
const body = require('body-parser');

router.post('/',(req,res,next)=>{
	
	 
    var id = req.body.id
    var name = req.body.name
    var title = req.body.title
    var content = req.body.content.replace(/\"/g, "\\\"")//将双引号替换成转义字符\"
    
    
    console.log(id)
    var selectSQL = `UPDATE wenzhang SET name = "${name}",title="${title}",content="${content}" WHERE id = ${id}`
    var selectSQL1 = `select * FROM wenzhang`
   
   
    
   console.log(selectSQL);//打印查询语句看看是否正确
	
	db.query(selectSQL,(err,rows)=>{
		if(err){
			console.log('修改语句出错!' + err);
		}else{
			db.query(selectSQL1,(err,rows)=>{
		if(err){
			console.log('查询语句出错!' + err);
		}else{
			res.status(200).json({rows});
		}
		
		
	})
		}
		
		
	})
	
	
	
})


module.exports = router;