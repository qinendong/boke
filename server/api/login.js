const express = require('express');
const db = require('../db');
const router = express.Router();
const body = require('body-parser');

router.post('/',(req,res,next)=>{
	
	 
    var phone = req.body.phone
     var password = req.body.password
    console.log(phone,password);
    var selectSQL = `SELECT * from bokeuser WHERE phone=${phone} AND password=${password};
`
    /*INSERT INTO bokeuser (NAME,PASSWORD,phone) VALUES('魏阳双','10086','13941681092');*/
   console.log(selectSQL);//打印查询语句看看是否正确
	
	db.query(selectSQL,(err,rows)=>{
		if(err){
			console.log('查询语句出错!' + err);
		}else{
            /*if(rows=""){
                res.status(200).json({rows,user:"0"});
            }else{*/
                res.status(200).json({rows,user:"1"});
            //}
			
		}
		
		
	})
	
	
	
})


module.exports = router;