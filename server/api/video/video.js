const express = require('express');
const request = require('request');
const router = express.Router();
const body = require('body-parser');

var parseString = require('xml2js').parseString;

router.post('/',(req,res,next)=>{
	
	 
    var id = req.body.id
    console.log(id)

	request(`https://3g.163.com/touch/nc/api/video/recommend/Video_Recom/0-3.do`,function(error,response,body){
  
        console.log(body)

        
	
    })
	
	
})


module.exports = router;