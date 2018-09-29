// 1. 导入 http 核心模块
const http = require('http')

// 2. 创建 服务器对象
const server = http.createServer()

// 3. 为 server 服务器 ，绑定 处理函数
server.on('request', function(req, res) {
  res.end('hello world 123.')
})

// 4. 启动 服务器
server.listen(8888, function() {
  console.log('server running at http://127.0.0.1:8888')
})
