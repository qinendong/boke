const express = require('express');
const db = require('../db');
const router = express.Router();
const body = require('body-parser');

router.post('/',(req,res,next)=>{
	
	 
    var id = req.body.id
/*   var name = req.body.name
    var title = req.body.title
    var markdown = req.body.markdown.replace(/\"/g, "\\\"")
    var image = req.body.image
    var meta_title = req.body.meta_title*/
    
    
    console.log(id)
    var selectSQL = `DELETE from posts WHERE id = ${id};`
    var selectSQL1 = `select * FROM posts`
   
   
    
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