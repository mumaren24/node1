// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 导入 mysql 模块
const mysql = require('mysql')
// 2. 创建mysql的连接对象
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mysql_001'
})
// 3. 直接调用 conn.query('要执行的sql语句', (err, result) => {}) 方法执行Sql语句就行
// const sqlStr1 = 'select * from users'
// conn.query(sqlStr1, (err, result) => {
//   if (err) return console.log('获取数据失败！' + err.message)
//   console.log(result)
// })

// ------------------新增----------------------
// const user = { uname: '小黄', age: 12, gender: '男' }
// const sqlStr2 = 'insert into users set ?'
// conn.query(sqlStr2, user, (err, result) => {
//   if (err) return console.log('插入数据失败！' + err.message)
//   console.log(result)
// })

// -------------------修改-------------------------
// const user = { id: 2, uname: '小绿', age: 22 }
// const sqlStr3 = 'update users set ? where id=?'
// // 注意：在 执行 conn.query 的时候，如果sql语句中，包含了 多个 ? 占位符，则，
// // 第二个实参，必须传递一个数组，数组中的每一项，都要和 sql 语句中的 ? 对应上
// conn.query(sqlStr3, [user, user.id], (err, result) => {
//   if (err) return console.log('修改数据失败！' + err.message)
//   console.log(result)
// })

// ---------------删除---------------------
// const sqlStr4 = 'delete from users where id=?'
// conn.query(sqlStr4, 2, (err, result) => {
//   if (err) return console.log('删除失败！' + err.message)
//   console.log(result)
// })

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3001, function() {
  console.log('Express server running at http://127.0.0.1:3001')
})
