const express = require('express')
const app = express()

// 1. 使用 app.set('view engine', '模板引擎的名称')
app.set('view engine', 'ejs')
// 2. 设置模板页面的默认存放路径 app.set('views', '模板页面的具体存放路径')
app.set('views', './ejs_pages')

app.get('/', (req, res) => {
  // 注意：如果想要调用 res.render 函数来渲染页面，必须先配置模板引擎
  res.render('index.ejs', { name: 'zs', age: 20, hobby: ['吃饭', '阅读', '唱歌'] })
})

app.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})
