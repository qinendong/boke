const express = require('express');

const router = express.Router();
const body = require('body-parser');
const qr = require('qr-image');

router.get('/',(req,res,next)=>{
	
    var name=req.query.name;
     console.log(name)
	 var code = qr.image(name,{type:'png'})
   
               res.setHeader('Content-type', 'image/png');
          code.pipe(res);

		
		
	})
	
	
	



module.exports = router;