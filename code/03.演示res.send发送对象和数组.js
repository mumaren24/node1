const express = require('express')

const app = express()

app.get('/', (req, res) => {
  // res.send('ok')
  // res.send({ name: 'zs', age: 22 })
  // res.send(['nihao', '传智播客', '黑马程序员'])
  // res.send(new Buffer('123'))
})

app.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})
