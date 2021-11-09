const express = require('express') // require请求 express commonjs
const app = express() // 创建一个express application 实例对象

// '/' 路由
// 根据上面这个路由, 执行什么样的操作 具体方法
//	req, res
//	请求, 响应
//	浏览器与服务器

// 前缀 http://localhost:3000
// get post
// http://localhost:3000/
// app.get('/', function (req, res) {
// 	// 处理路由 http://localhost:3000/
// 	res.json({title: 'Hello World'})
// })
// // http://localhost:3000/hello
// app.get('/hello', function (req, res) {
// 	res.json({title: 'hello hello hello'})
// })
// // http://localhost:3000/helloname
// app.get('/helloname', function (req, res) {
// 	res.json({title: 'hello', word: 'name'})
// })


const indexRoute = require('./routes/index')
// http://localhost:3000/
app.use('/', indexRoute)

const userRoute = require('./routes/user')
// http://localhost:3000/user/
app.use('/user/', userRoute)

app.listen(3000, () => {
	console.log('3000 端口 服务器 启动了')
}) //
