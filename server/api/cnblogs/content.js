const express = require('express');
const request = require('request');
const router = express.Router();
const body = require('body-parser');

var parseString = require('xml2js').parseString;

router.post('/',(req,res,next)=>{
	
	 
    var id = req.body.id
    console.log(id)

	request(`http://wcf.open.cnblogs.com/news/item/${id}`,function(error,response,body){
        /*判断请求是否成功*/
        /*if (!error && response.statusCode == 200) {
            
            var data=JSON.parse(body);
            
            res.render('index', data);
        }*/
        console.log(body)
/*        var str_xml = body.replace('<?xml version="1.0" encoding="utf-8"?>',"")
        var xml  = `<xml version="1.0" encoding="utf-8">${str_xml}</xml>`;
        var json     = xml2json.parser( xml );
        console.log( json.xml.feed.entry.title )
        
        res.status(200).json({json});*/
        
        var xml = body;
        parseString(xml, function (err, result) {
            console.dir(JSON.stringify(result));
            var json = JSON.stringify(result)
             res.status(200).json({json});
        });
        
	
    })
	
	
})


module.exports = router;