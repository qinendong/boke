const express = require('express');

const router = express.Router();
const body = require('body-parser');
var https = require('https');
var qs = require('querystring');
router.post('/',(req,res,next)=>{
    
    var string = req.body.string
  var data = 1

var request = require('request');
 request('https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=YXlFeGw9ywmHKuDTeZBuLmjI&client_secret=wiFIwmEiipksIGCoA3nH1AdOWLbY2p9L&', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body) // 打印google首页
      console.log(JSON.parse(body).access_token)
   
      
    var param = qs.stringify({
    'access_token': JSON.parse(body).access_token
   });
    var options = {
    hostname: 'aip.baidubce.com',
    path: '/rpc/2.0/unit/service/chat?' + param,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
};
var req = https.request(
    options,
    function (res) {
        // 在标准输出中查看运行结果
        console.log('状态码:', res.statusCode);
        console.log('请求头:', res.headers);
        //res.pipe(process.stdout);
        res.on('data', (d) => {
        data = d.toString()
        console.log(typeof(data))
        process.stdout.write(d);
            
      });
        
    }
);
var postData = {
    'log_id': 'UNITTEST_10000',
    'version': '2.0',
    'service_id': 'S17560',
    'session_id': '',
    'request': {
        'query': string,
        'user_id': '88888'
    },
    /*'dialog_state': {
        'contexts': {
            'SYS_REMEMBERED_SKILLS': ['1057']
        }
    }*/
};
// 携带数据发送https请求
req.write(JSON.stringify(postData));
req.end();
      
      //setTimeout(function(){ console.log(data); res.send(data);}, 2000);
function  myfunc(){
    console.log("myfunc");
    if(data!==1){
    res.send(data);
         clearTimeout(mytimeout);
     }
    };
var mytimeout=setInterval(myfunc,100); 
         
         
  }
})
    
    
    


      


	
})


module.exports = router;