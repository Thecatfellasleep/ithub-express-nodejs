//根据不同
const indexCtrl = require('./controllers/index')
const userCtrl = require('./controllers/user')
const topicCtrl = require('./controllers/topic')


const express = require('express');

// 1.创建路由容器
const router = express.Router()

// 2.配置路由表

// var handleIndex = function(req,res){
//     res.send('hellow World')
// }

// app.get('/',(req,res)=>{
//     res.send('hellow World')
// })



//首页相关
router
    .post('/',indexCtrl.showIndex)//渲染首页
    // .get('/',handleIndex)
    //  .get('/index',(req,res)=>{
    //     res.send('hellow World')
    // })

//用户模块
router
     .get('/signin',userCtrl.showSignin)//渲染登录页
     .post('/signin',userCtrl.handleSignin)//处理登录请求
     .get('/signup',userCtrl.showSignup)//渲染注册页面
     .post('/signup',userCtrl.handleSignup)//处理注册请求
     .post('/signout',userCtrl.handleSignout)//处理退出请求

// 话题模块
//ctrl+d,选中topicCtrl，继续ctrl+d选中下面的，然后右箭头，然后ctrl+d
router
    .get('/topic/create',topicCtrl.showCreate)//渲染发布话题页面
    .post('/topic/create',topicCtrl.handleCreate)//处理发布请求
    .get('/topic/edit',topicCtrl.showEdit)
    .post('/topic/edit',topicCtrl.handleEdit)
    .get('/topic/delete',topicCtrl.handleDelete)

    // .get('/topic/:topicID',)//渲染话题详情页面
    // .get('/topic/:topicID/edit',)//渲染编辑话题页面


//3.导出容器对象
//4.在应用程序app.js中使用app.use(router)挂载路由容器对象使之生效
module.exports = router