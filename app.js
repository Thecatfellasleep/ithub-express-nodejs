const express = require('express')

const app = express()

const port = 3000

app.get('/',(req,res)=>{
    res.send('hellow World')
})

app.listen(port,()=>{
    console.log(`服务运行在 ${port}端口`)
    console.log(`请访问 http://localhost:${port}`)
})