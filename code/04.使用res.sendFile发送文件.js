const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  // 1. 注意：sendFile 如果只给定一个参数的时候，这个参数必须是绝对路径，表示要发送给客户端的文件的路径
  // res.sendFile('./views/home.html')
  // res.sendFile(path.join(__dirname, './views/home.html'))

  // 2. 为 res.sendFile 方法，提供两个参数进行调用
  // 第一个实参就可以传递一个相对路径了；第二个实参，必须是一个绝对路径；
  res.sendFile('./views/home.html', { root: __dirname })
})

app.get('/movie', (req, res) => {
  res.sendFile('./views/movie.html', { root: __dirname })
})

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname })
})

app.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})
