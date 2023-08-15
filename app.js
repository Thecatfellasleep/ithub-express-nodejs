const express = require('express')

const router = require('./router') //引入router.js文件

const app = express()

//挂载路由模块到应用程序中
app.use(router)

const port = 3000

// app.get('/',(req,res)=>{
//     res.send('hellow World')
// })

app.listen(port,()=>{
    console.log(`服务运行在 ${port}端口`)
    console.log(`请访问 http://localhost:${port}`)
})