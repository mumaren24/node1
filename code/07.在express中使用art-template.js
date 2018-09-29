const express = require('express')
const app = express()

// 1. 使用 app.engine() 方法自定义模板引擎
app.engine('html', require('express-art-template'))
// 2. 使用 app.set('view engine', '指定模板引擎名称') 来配置项目中用到的模板引擎
app.set('view engine', 'html')
// 3. 配置模板页面的存放路径
app.set('views', './art_page')

app.get('/', (req, res) => {
  res.render('index.html', { name: 'zs', age: 22, hobby: ['玩游戏', '唱歌'] })
})

app.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})
