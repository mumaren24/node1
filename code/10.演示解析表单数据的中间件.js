// 导入 express 模块
const express = require('express')
const querystring = require('querystring')
// 创建 express 的服务器实例
const app = express()

// 定义 应用级别的中间件
app.use((req, res, next) => {
  let dataStr = ''
  // 只要客户端向服务器提交了表单，都会触发 req 的 data 事件
  // 在 data 事件中，可以获取到客户端每次提交过来的，不完整的数据
  req.on('data', chunk => {
    dataStr += chunk
  })

  // 只要 req 触发了 end 事件，就表示表单数据，提交完毕了，dataStr 中存储的数据，就是完整的表单数据
  req.on('end', () => {
    console.log(dataStr)
    const obj = querystring.parse(dataStr)
    // 想要把 username=ls&password=123 字符串，解析为 { username: 'ls', password: 123 }
    console.log(obj)
    req.body = obj
    // 进入下一个中间件的处理环节；
    // 注意：在中间件中，最后，一定要合理的调用一下 next() 方法，否则，服务器 无法结束这次响应！
    next()
  })
})

// 这是应用级别的中间件
app.get('/', (req, res) => {
  res.sendFile('./11.index.html', { root: __dirname })
})

app.post('/postdata', (req, res) => {
  console.log(req.body)
  // 需求：如何从客户端提交的表单中，获取到 客户端提交过来的数据呢？
  res.send(req.body)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3001, function() {
  console.log('Express server running at http://127.0.0.1:3001')
})
