// 1. 导入express
const express = require('express')

// 2. 调用 express() 创建服务器
const app = express()

// 3. 调用 app.get() 方法，来监听客户端的请求，并指定要监听的 URL 地址 和 处理函数
app.get('/', (req, res) => {
  // 使用 express 调用 http 模块中的 end 方法向客户端发送数据
  // res.end('你好！')
  res.send('你好！')
})

// 4. 调用 app.listen() 方法启动 express 服务器
app.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})
