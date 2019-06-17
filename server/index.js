const express = require('express')
const consola = require('consola')
const fs = require('fs')
const body = require('body-parser');
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000


app.use(body.json({"limit":"10000kb"}));
app.use(body.urlencoded({"limit":"10000kb"}));

app.use(body.urlencoded({//这里后端也需要做一下处理才能接收到参数  login axios下的post
  extended: false
}))

app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
});
//view接口
app.use('/api/post_id',require('./api/post_id'))
app.use('/api/posts',require('./api/posts'))
app.use('/api/wenzhang_id',require('./api/wenzhang_id'))
app.use('/api/wenzhang',require('./api/wenzhang'))
app.use('/api/swiper',require('./api/swiper'))
app.use('/api/counter',require('./api/counter'))
app.use('/api/project',require('./api/project'))
app.use('/api/echarts',require('./api/echarts'))
app.use('/api/echarts_id',require('./api/echarts_id'))
app.use('/api/select',require('./api/select'))
app.use('/api/login',require('./api/login'))
app.use('/api/register',require('./api/register'))
app.use('/api/baidusdk',require('./api/baidusdk'))
app.use('/api/baidusdk_bd',require('./api/baidusdk_bd'))
app.use('/api/Upload',require('./api/Upload'))
app.use('/api/baidu_Upload',require('./api/baidu_Upload'))
app.use('/api/select_tag',require('./api/select_tag'))
app.use('/api/baidusdk_ty',require('./api/baidusdk_ty'))

app.use('/api/yasuo',require('./api/yasuo'))
//微信小程序，博客园接口
app.use('/api/cnblogs/recent',require('./api/cnblogs/recent'))
app.use('/api/cnblogs/content',require('./api/cnblogs/content'))
app.use('/api/cnblogs/recommend',require('./api/cnblogs/recommend'))
app.use('/api/cnblogs/hot',require('./api/cnblogs/hot'))
//网易视频接口-不能用
app.use('/api/video/video',require('./api/video/video'))
//菜品识别
app.use('/api/image_recognition/Dish_recognition',require('./api/image_recognition/Dish_recognition'))
//动物识别
app.use('/api/image_recognition/Animal_recognition',require('./api/image_recognition/Animal_recognition'))
//车型识别
app.use('/api/image_recognition/Vehicle_type_recognition',require('./api/image_recognition/Vehicle_type_recognition'))
//植物识别
app.use('/api/image_recognition/Botany_recognition',require('./api/image_recognition/Botany_recognition'))
//人脸检测
app.use('/api/Face_recognition/Face_detection',require('./api/Face_recognition/Face_detection'))
//人脸注册
app.use('/api/Face_recognition/Face_registration',require('./api/Face_recognition/Face_registration'))
//人像分割
app.use('/api/Face_recognition/Portrait_segmentation',require('./api/Face_recognition/Portrait_segmentation'))
//二维码生成
app.use('/api/qsImage/qsImage',require('./api/qsImage/qsImage'))
//话术机器人  文字转语音-语音合成
app.use('/api/Robot/Robot',require('./api/Robot/Robot'))
//语音识别
app.use('/api/Voice/Voice',require('./api/Voice/Voice'))//这个接口为测试，具体使用在./api/vx_upload
//语音合成
app.use('/api/Voice/speech_synthesis',require('./api/Voice/speech_synthesis'))//这个接口为测试，具体使用在./api/Robot/Robot
//微信上传 ffmpeg转码 语音识别转文字
app.use('/api/vx_upload',require('./api/vx_upload'))
//manage接口
app.use('/api/manage_index',require('./api/manage_index'))
app.use('/api/manage_user',require('./api/manage_user'))
app.use('/api/manage_wenzhang',require('./api/manage_wenzhang'))
app.use('/api/m_wenzhang_xuigai',require('./api/m_wenzhang_xuigai'))
app.use('/api/m_wenzhang_delete',require('./api/m_wenzhang_delete'))
app.use('/api/m_post_xuigai',require('./api/m_post_xuigai'))
app.use('/api/manage_login',require('./api/manage_login'))
app.use('/api/manage_admin',require('./api/manage_admin'))
app.use('/api/m_wenzhang_add',require('./api/m_wenzhang_add'))
app.use('/api/m_post_delete',require('./api/m_post_delete'))
app.use('/api/m_post_add',require('./api/m_post_add'))
//游戏接口
app.use('/api/game/game',require('./api/game/game'))
app.use('/api/game/game_comment',require('./api/game/game_comment'))
app.use('/api/game/game_comment_inster',require('./api/game/game_comment_inster'))

app.set('port', port)

//通过cron定时器完成对文件夹内文件的删除
var CronJob = require('cron').CronJob;
new CronJob('01 * * * * *', function() {
  console.log('对语音识别语音文件进行删除');
    var folder_exists = fs.existsSync('./static/Audio');

if(folder_exists == true)
{
    console.log(1);
    var dirList = fs.readdirSync('./static/Audio');

    dirList.forEach(function(fileName)
    {
        fs.unlinkSync('./static/Audio/' + fileName);
    });
}
    
}, null, true, 'America/Los_Angeles');



// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

